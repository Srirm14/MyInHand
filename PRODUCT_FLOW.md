# PRODUCT_FLOW.md — InHand

## Journey Overview (tiered)

### Logged out — base product only

- **Header:** brand, **Salary** only (no Offers / Forecast / EMI, no Premium chip, no History). **Log in** / **Sign up** on the right.
- **Flow:** Landing → Salary input → breakdown → monthly plan → surplus/deficit.
- **Save nudge:** After breakdown and on monthly plan, **Save your activity** card → `login?from=…` / `signup?from=…`.
- **Premium CTAs** (in copy, footer, feature cards): resolve to **sign-in first**, then paywall or tool depending on tier (`useTieredPremiumLinks`).
- **Navbar History:** premium-only (right sheet, last 5). **Salary page recents:** everyone sees **Last tracked salaries** / **Last compared offers** (persisted `useHistoryStore`, last 3 each).

### Logged in — free tier

- **Header:** **Salary** only + **Profile**. No History in nav, no Premium crown, no deep premium nav links.
- **Flow:** same free salary + monthly plan path; each successful salary run still **appends to persisted history** for the salary-page recents (not the premium History sheet).
- **Premium intent:** links go to **`/paywall`** (and deep `?tool=` where relevant).

### Logged in — premium tier (`NEXT_PUBLIC_ACCESS_MODE=premium` or dev default)

- **Header:** **Salary** + **Offers** / **Forecast** / **EMI** + **Premium** (teal pill, **crown** icon) + **History** + **Profile**.
- **Flow:** paywall optional as marketing; **`/premium/*`** routes allowed (middleware: session + env premium).
- **FAB** (CTC / monthly plan): quick jump to Premium hub for this tier only.

```
Anonymous
  Landing → Salary → Breakdown → Monthly plan → Surplus/Deficit
    └→ (optional) Log in / Sign up for profile & continue

Signed-in (free env)
  Same core flow + Profile (no History)
    └→ Paywall for upgrade

Signed-in (premium env)
  Above + header deep links + Premium hub
    → Dashboard → Offer comparison, Wealth forecast, EMI analyzer, …
```

---

## Screen Definitions

### 1. Landing Page (`/`)

**Purpose:** Communicate value, build trust, convert to CTC input.

**Core inputs:** None.
**Core outputs:** Navigation to CTC Input or demo.
**Primary CTA:** "Estimate my in-hand pay" (see live `marketing-landing.tsx`).
**Secondary CTA:** "See a free breakdown"

**Sections:**
- Hero: headline, subline, dual CTA
- Social proof: stat cards (Monthly Net Pay preview, Tax Efficiency Score)
- Features grid: Salary Breakdown, Offer Comparison, EMI Analyzer, Wealth Forecast
- Bottom CTA: "Your financial clarity is one click away"
- Footer: product links, legal, trust badges (256-bit SSL, ISO, GDPR)

**Edge cases:** First-time visitor vs returning user (future: prefill if data exists).
**Upgrade hooks:** Feature cards hint at premium capabilities.

---

### 2. Salary input (`/salary`)

**Purpose:** Start a breakdown from **manual CTC** (estimated) or **uploaded document** (document-labeled mock parse).

**Modes (tabs):**
- **Manual CTC:** Full Name, Email, **Annual CTC block**, City Tier, Tax Regime → **estimated** breakdown (`SalaryResultSource.manual_estimated`).
- **Upload document:** PDF or image (offer letter / salary structure). **Mock parser** (`parse-salary-document.mock.ts`) infers CTC from filename patterns (e.g. `24L`, 6–9 digit number); labels result **`document_parsed`** until a real OCR/API ships. Parsed input uses **`compensationMode: total_only`** (no fixed/variable split from mock).

**Annual CTC block (manual only)** — shared component pattern (`compensation-ctc-section.tsx`):
- **Segmented control:** **Total only** (default) vs **Fixed + variable**.
- **Total only:** User enters annual CTC only; breakdown uses existing **estimated** component logic (`calculateSalaryBreakdown(annualCTC, …)`).
- **Fixed + variable:** User enters **Total CTC**, **Fixed (annual)**, **Variable (annual)** with **Total = Fixed + Variable** enforced in the UI (`compensation-split.ts`): changing total+fixed derives variable; total+variable derives fixed; editing fixed or variable derives the other. Chips mark **Auto** vs **You edit** for clarity. Optional helper copy; not spreadsheet-dense.
- **Validation (Zod, `ctc-input.schema.ts`):** In split mode, fixed and variable must be ≥ 0, neither may exceed total, and **fixed + variable** must equal total (±₹1 rounding). Conflicts surface on the relevant fields.
- **Store (`SalaryInput`):** Persists `compensationMode`, `fixedAnnual`, `variableAnnual` with manual submit; document path sets split fields to **total_only** / zeros.
- **Note:** The tax/breakdown **engine** still keys off **`annualCTC`** only; split improves input realism and future UX, not a second payroll model yet.

**History restore:** Older saved salary snapshots without split fields are **coerced** (`coerce-salary-snapshot.ts`) to `total_only` + zeros so the form does not inherit stale compensation state.

**Core outputs:** Navigate to `/salary/breakdown` with store populated; push entry to **persisted** `useHistoryStore` for recents.

**Below the form:**
- **Last tracked salaries** — restore snapshot → breakdown.
- **Last compared offers** — restore offers → offer comparison (`useTieredPremiumLinks`).

**Primary CTA (manual):** "Show estimated breakdown"
**Validation (Zod):** manual path — CTC min ₹1,00,000, city tier, regime; split rules as above when **Fixed + variable** is selected.

**Bottom:** same three feature trust cards as before.

---

### 3. Salary breakdown (`/salary/breakdown`)

**Purpose:** Show **fixed vs variable** pay clearly; **flexible allowances** (add / rename / remove optional rows); **dual summaries** (monthly in-hand excluding variable vs package including variable); distinguish **estimated** vs **document-based** copy; explain CTC vs cash truthfully. Surface **next planning steps** (Monthly plan, EMI planner, Wealth forecast) without leaving the salary journey.

**Core inputs:** `useSalaryStore` (input + breakdown).

**Page chrome:**
- **Back:** Ghost link **Back to salary inputs** → `/salary` (first element in shell, consistent with Monthly plan / Wealth forecast).
- **Replace from file** card (mock parse) + **estimated / document** banner (unchanged).

**Banners:**
- **Estimated breakdown** — manual path; CTC ≠ in-hand; employer lines are illustrative (see `SALARY_COMPONENTS.md`).
- **Document-based results** — upload path; shows source filename; user should verify.

**Component table:**
1. **Fixed salary components** — basic, HRA, DA (`section: fixed_core`).
2. **Allowances** — meal, telecom (removable), special (residual), **custom** `allow_*` rows via **Add allowance**; monthly **and** annual editable (either drives the other).
3. **Variable pay** — `variable_pay` when fixed+variable split is set; **custom** `var_*` via **Add variable / bonus line**; excluded from **est. monthly in-hand (excl. variable)**.
4. **Employer contributions (CTC)** — not monthly cash.
5. **Deductions** — monthly editable; annual shown as derived display.

**Row metadata:** `SalaryComponent` includes `group`, optional `section` (`fixed_core` | `allowance` | `variable_pay`), `isCustom`, `removable`, `type`, `lineSource`, `tags`. **Info icon** → tooltip (fixed vs variable, in-hand inclusion, source, model disclaimer). **Custom** rows: inline **name** edit.

**Summary KPIs:** Est. **monthly in-hand (excl. variable)**; **monthly in-hand (incl. variable)** (÷12 illustrative); tax; deductions; strip with **annual fixed cash**, **annual variable cash**, **total annual cash**, **stated CTC**, **modeled package**.

**Net in-hand** strip: fixed monthly cash (excl. variable), variable ÷12 when > 0, deductions, both in-hand variants, annual ×12 for each.

**Core outputs:**
- Summaries from **`deriveBreakdownSummaries`** (single source of truth on `components`).
- Flag `meta.componentsAdjusted` after edits; edited rows show **Override** badge.

**Engine:** `calculateSalaryBreakdown` builds the initial table; **`recalculateBreakdownFromComponents`** runs after **`patchBreakdownComponent`**, **add/remove** allowance or variable rows (`use-salary-store.ts`, `buildBreakdownRecalcContext`). **Meta:** `breakdownEditBasis` when adjusted.

**Breakdown page UX:** Upload salary structure at top (same mock parser as `/salary`); debounced numeric commits (~140ms) + blur flush; **+** add-row controls; **remove** on `removable` rows.

**Component breakup (white card):**
- **Header row:** Title **Component breakup**, short instructional body copy, **Download PDF** (outline, top-right on desktop).
- **Quick links** (compact pill buttons under copy, icons from Lucide): **Monthly plan** → `/lifestyle`; **EMI planner** → `useTieredPremiumLinks` `emi`; **Wealth forecast** → `useTieredPremiumLinks` `forecast`.
- **Table** + **Cash path (this model)** strip (unchanged).

**Below the main breakup card (same page):**
1. **Allocation benchmarks** — narrow card (`max-w-lg`); illustrative 50/30/20-style bars; copy points users to planning cards next.
2. **Plan from this breakdown** — three **compact destination cards** (full title + one-line description + CTA arrow): same three flows as quick links (monthly plan, EMI, forecast). Reinforces hierarchy: surplus → debt → long-term view.

**Key UI elements:** Stat KPI row, grouped editable table + tooltips, annual picture strip, cash path, benchmarks + planning cards, `SaveProgressCta` for anonymous users.

**Tiered destinations:** EMI and Wealth forecast quick links / cards use **`useTieredPremiumLinks`** (premium route vs paywall vs login).

---

### 4. Breakdown → planning handoff (in-page)

**Purpose:** After the user understands components and in-hand, nudge **Monthly plan**, **EMI & debt planner**, and **Wealth forecast** without a separate marketing fork.

**Implementation:** Quick pills inside the Component breakup card + **Plan from this breakdown** cards after **Allocation benchmarks** on `/salary/breakdown` (not a separate route).

**Destinations:**
- Monthly plan → `/lifestyle` (free).
- EMI planner / Wealth forecast → tiered (`/premium/…` or paywall / login).

---

### 5. Monthly plan (`/lifestyle`)

**Purpose:** Plan monthly spending (and on Pro: savings/investments) against estimated in-hand; see surplus or deficit.

**Core inputs:** INR fields (primary) + quick-adjust sliders with suggested scales that expand when amounts are high. Free: essentials; Pro: utilities, flexible spending, savings, investments.

**Core outputs:**
- Monthly Surplus Gauge (donut chart)
- Surplus/deficit amount
- Surplus percentage
- Expenses vs Est. Net Income (free); plan summary incl. savings/investments (Pro)
- Wealth forecast CTA (`useTieredPremiumLinks`)

**Primary CTA:** "View wealth forecast" (tiered destination)
**Upgrade hook:** Premium expands categories and ties plan to forecast.

**Edge cases:** Expenses exceed income (deficit state — red donut, warning message). All sliders at zero. Rent higher than income.

---

### 6. Surplus / Deficit Indicator

**Purpose:** The key output of the monthly plan.

**Implementation:** Integrated into the monthly plan page (right column).

**Visual:**
- Surplus: Teal donut, green percentage, positive message
- Deficit: Red donut, red percentage, warning message with actionable advice

---

### 7. Premium Paywall (`/paywall`)

**Purpose:** Convert free users to premium.

**Content:**
- Feature comparison (free vs premium)
- Pricing (if applicable, or "Coming Soon" / waitlist)
- Testimonials / trust signals
- CTA: "Upgrade to Premium" or "Join Waitlist"

**Edge cases:** User already premium → redirect to dashboard. No payment system yet → waitlist flow.

---

### 8. Premium Dashboard (`/premium`)

**Purpose:** Central hub for all premium tools.

**Layout:** Card grid linking to each premium module.

**Modules displayed:**
- Lifestyle Affordability Planner
- Detailed Salary Components
- Wealth Forecast
- Offer Comparison
- Side-by-Side Offer Score
- EMI Analyzer

**Each card:** Icon, title, description, status (new/updated), CTA to module.
**Empty state:** "Complete your salary breakdown first" if no CTC data.

---

### 9. Lifestyle Affordability Planner (`/premium/lifestyle-planner`)

**Purpose:** Advanced lifestyle budgeting with detailed categories and recommendations.

**Core inputs:** Expanded expense categories with sliders and manual input.
**Core outputs:** Budget allocation vs recommended benchmarks, savings rate, actionable tips.
**Edge cases:** No salary data → redirect to CTC input.

---

### 10. Detailed Salary Components (`/premium/components`)

**Purpose:** Granular breakdown including HRA exemption calc, LTA, Bonus, ESOP, Special Allowance.

**Core inputs:** CTC data from store + additional component inputs.
**Core outputs:** Full component table with tax treatment, exemption amounts, optimization tips.

---

### 11. Wealth Forecast (`/premium/wealth-forecast`)

**Purpose:** Project net worth over 5/10/20 years based on salary, savings rate, and investment assumptions.

**Core inputs:** Current salary, savings rate, expected salary growth, investment return rate.
**Core outputs:** Year-by-year projection table/chart, milestone markers (₹42L → ₹58L).
**Edge cases:** Zero savings rate, unrealistic growth assumptions (cap at 30%).

---

### 12. Offer comparison (`/premium/offer-comparison`)

**Purpose:** Compare 2–3 offers on in-hand and a simple first-year value score.

**Entry modes (toggle):**
- **Manual:** Up to three offer cards — company, **same Annual CTC block as salary input** (Total only vs Fixed + variable, same sync rules), city tier, regime, joining bonus, ESOP. **`OfferDraft`** stores `compensationMode`, `fixedAnnual`, `variableAnnual` per row.
- **Upload offers:** Pick 2–3 PDFs/images; **mock parser** (`parse-offer-document.mock.ts`) fills drafts from filename heuristics with **`total_only`** split defaults. User verifies each card. Banner when any row has `documentFileName`.

**Comparison validity:** A row counts toward the table only if company name is set, CTC ≥ ₹1,00,000, and — when **Fixed + variable** is on — **fixed + variable** matches **annual CTC** (same tolerance as Zod). Otherwise the row is excluded and an inline hint may appear on the card.

**Core outputs:** Comparison table uses **`annualCTC`** with `calculateSalaryBreakdown` (same as salary page); winner hints; debounced push to `useHistoryStore` for salary-page **Last compared offers**.

**Restore:** Queued/historical offer snapshots without split fields are **normalized** when the screen loads (`normalizeOfferDraft` in `offer-comparison-view.tsx`) so types stay consistent.

**Edge cases:** Fewer than two valid offers → empty table message; minimum two offers for upload flow.

---

### 13. Side-by-Side Offer Score (`/premium/offer-score`)

**Purpose:** Weighted scoring of offers considering salary, lifestyle fit, growth, and benefits.

**Core inputs:** Offer data from comparison + user preferences (city, lifestyle costs).
**Core outputs:** Score per offer (out of 100), radar/bar chart, recommendation.

---

### 14. EMI & debt planner (`/premium/emi-analyzer`)

**Purpose:** Scenario-style **fixed-rate EMI** modelling for **one or two loans** vs **estimated in-hand** and **Monthly plan** living expenses (`useLifestyleStore`); debt-to-income and post-EMI buffer.

**Core inputs:** Principal (`InrMoneyInput`), rate and tenure **sliders** per loan; optional **second loan** via **Add another loan** (not a bare checkbox). Loan-type **chips** (Home / Car / Personal / Education) are labels only.

**Core outputs:** Per-loan EMI + lifetime interest + total repaid; **combined obligation** card; **affordability** (in-hand, after EMIs, DTI, buffer after Monthly plan); **advisory panel** (state + next-step links or bullets).

**UX:** Back to breakdown; two-column layout on large screens (scenario builder left, sticky decision column right).

**Edge cases:** EMI > in-hand; high DTI; buffer negative after Monthly plan; no salary data (neutral advisory).
