# PRODUCT_FLOW.md — InHand

## Journey Overview (tiered)

### Logged out — base product only

- **Header:** brand, **Salary** only (no Offers / Forecast / EMI, no Premium chip, no History). **Log in** / **Sign up** on the right.
- **Flow:** Landing → Salary input → breakdown → lifestyle check → surplus/deficit.
- **Save nudge:** After breakdown and on lifestyle, **Save your activity** card → `login?from=…` / `signup?from=…`.
- **Premium CTAs** (in copy, footer, feature cards): resolve to **sign-in first**, then paywall or tool depending on tier (`useTieredPremiumLinks`).
- **Navbar History:** premium-only (right sheet, last 5). **Salary page recents:** everyone sees **Last tracked salaries** / **Last compared offers** (persisted `useHistoryStore`, last 3 each).

### Logged in — free tier

- **Header:** **Salary** only + **Profile**. No History in nav, no Premium crown, no deep premium nav links.
- **Flow:** same free salary + lifestyle path; each successful salary run still **appends to persisted history** for the salary-page recents (not the premium History sheet).
- **Premium intent:** links go to **`/paywall`** (and deep `?tool=` where relevant).

### Logged in — premium tier (`NEXT_PUBLIC_ACCESS_MODE=premium` or dev default)

- **Header:** **Salary** + **Offers** / **Forecast** / **EMI** + **Premium** (teal pill, **crown** icon) + **History** + **Profile**.
- **Flow:** paywall optional as marketing; **`/premium/*`** routes allowed (middleware: session + env premium).
- **FAB** (CTC / lifestyle): quick jump to Premium hub for this tier only.

```
Anonymous
  Landing → Salary → Breakdown → Lifestyle → Surplus/Deficit
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
- **Manual CTC:** Full Name, Email, Annual CTC, City Tier, Tax Regime → **estimated** breakdown (`SalaryResultSource.manual_estimated`).
- **Upload document:** PDF or image (offer letter / salary structure). **Mock parser** (`parse-salary-document.mock.ts`) infers CTC from filename patterns (e.g. `24L`, 6–9 digit number); labels result **`document_parsed`** until a real OCR/API ships.

**Core outputs:** Navigate to `/salary/breakdown` with store populated; push entry to **persisted** `useHistoryStore` for recents.

**Below the form:**
- **Last tracked salaries** — restore snapshot → breakdown.
- **Last compared offers** — restore offers → offer comparison (`useTieredPremiumLinks`).

**Primary CTA (manual):** "Show estimated breakdown"
**Validation (Zod):** manual path only — CTC min ₹1,00,000, city tier, regime.

**Bottom:** same three feature trust cards as before.

---

### 3. Salary breakdown (`/salary/breakdown`)

**Purpose:** Show in-hand and component table; distinguish **estimated** vs **document-based** copy; allow **corrections**.

**Core inputs:** `useSalaryStore` (input + breakdown).

**Banners:**
- **Estimated breakdown** — manual path; states assumptions (not employer payslip).
- **Document-based results** — upload path; shows source filename; user should verify.

**Core outputs:**
- Monthly in-hand, annual tax, total deductions (recalc when line items change)
- Component table: **monthly cells are editable** (blur/Enter commits); annual column and totals use `aggregateBreakdownTotals`. Flag `meta.componentsAdjusted` after edits.

**Primary CTA:** "Add Lifestyle Expenses" / "Optimize My Tax"
**Secondary CTA:** "Download PDF" (placeholder)

**Key UI elements:** stat cards, editable breakup table, surplus / benchmarks / savings cards, `SaveProgressCta` for anonymous users.

**Upgrade hooks:** Tax / forecast links use `useTieredPremiumLinks`.

---

### 4. "Want More Insights?" (Decision Point)

**Purpose:** Fork the user into free lifestyle check or premium upgrade.

**Implementation:** Inline section at bottom of Salary Breakdown page (not a separate route).

**Options:**
- "Add Lifestyle Expenses" → `/lifestyle` (free)
- "Unlock Premium Insights" → `/paywall` (premium)

---

### 5. Basic Lifestyle Check (`/lifestyle`)

**Purpose:** Let the user input basic monthly expenses and see if their salary supports their lifestyle.

**Core inputs (sliders):**
- Rent: ₹0 – ₹1,50,000
- Food: ₹0 – ₹50,000
- Transport: ₹0 – ₹30,000
- Misc: ₹0 – ₹25,000

**Core outputs:**
- Monthly Surplus Gauge (donut chart)
- Surplus/deficit amount
- Surplus percentage
- Total Expenses vs Est. Net Income summary
- Strategy Tip (contextual advice)

**Primary CTA:** "Upgrade Now" (in teal banner)
**Upgrade hook:** "Unlock 10-Year Foresight" — premium wealth forecast upsell banner.

**Edge cases:** Expenses exceed income (deficit state — red donut, warning message). All sliders at zero. Rent higher than income.

---

### 6. Surplus / Deficit Indicator

**Purpose:** The key output of the lifestyle check.

**Implementation:** Integrated into the lifestyle check page (right column).

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
- **Manual:** Up to three offer cards — company, CTC, tier, regime, joining bonus, ESOP (same engine as salary breakdown).
- **Upload offers:** Pick 2–3 PDFs/images; **mock parser** (`parse-offer-document.mock.ts`) fills drafts from filename heuristics. User verifies each card. Banner when any row has `documentFileName`.

**Core outputs:** Comparison table, winner hints; debounced push to `useHistoryStore` for salary-page **Last compared offers**.

**Edge cases:** Fewer than two valid offers → empty table message; minimum two offers for upload flow.

---

### 13. Side-by-Side Offer Score (`/premium/offer-score`)

**Purpose:** Weighted scoring of offers considering salary, lifestyle fit, growth, and benefits.

**Core inputs:** Offer data from comparison + user preferences (city, lifestyle costs).
**Core outputs:** Score per offer (out of 100), radar/bar chart, recommendation.

---

### 14. EMI Analyzer (`/premium/emi-analyzer`)

**Purpose:** Understand how EMIs (home loan, car, personal) impact disposable income.

**Core inputs:** Loan amount, tenure, interest rate, existing EMIs.
**Core outputs:** Post-EMI disposable income, debt-to-income ratio, affordability verdict.
**Edge cases:** Multiple EMIs stacking, EMI exceeding surplus (red warning).
