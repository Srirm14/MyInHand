# PRODUCT_FLOW.md — InHand

## Access Tiers

### Anonymous (logged out)

- **Header:** Brand + **Salary** (context-aware label) only. No Offers/Forecast/EMI, no Premium chip, no History. **Log in** / **Sign up** on right.
- **Flow:** Landing → **`/salary` quick calculator** (optional **detailed** → breakdown) → Monthly plan → Surplus/deficit.
- **Save nudge:** After breakdown and on monthly plan, "Save your activity" card → login/signup.
- **Premium CTAs:** Resolve to sign-in first, then paywall or tool via `useTieredPremiumLinks`.
- **Salary nav:** Shows "Salary" or "Salary (25 LPA)" — static, no dropdown.

### Signed-in — free tier

- **Header:** Salary (context-aware) + Profile. No History in nav, no Premium crown, no deep premium nav links.
- **Flow:** Same free path: **`/salary`** calculator and/or **detailed** breakdown + monthly plan. Successful **breakdown** runs append to persisted history for recents.
- **Premium intent:** Links go to `/paywall` (with `?tool=` where relevant).
- **Salary nav:** Shows "Salary (25 LPA)" — static, no dropdown.

### Signed-in — premium tier

- **Header:** Salary (context-aware + **dropdown with last 5**) + Offer comparison + **Premium** (small read-only plan badge, not a link) + **Recent activity** (sheet: resume or remove salaries and offer comparisons) + Profile.
- **Flow:** All free routes + `/premium/*` tool routes (`/premium` itself redirects to offer comparison).
- **Salary nav:** Shows "Salary (25 LPA) ▼". Click opens dropdown with recent salary contexts. Selecting one switches the active salary across the entire app.

```
Anonymous:
  Landing → /salary (quick calc) → optional /salary/detailed → /salary/breakdown
    → Monthly plan → Surplus
    └→ (optional) Login/Signup

Signed-in (free):
  Same + Profile
    └→ Paywall for upgrade

Signed-in (premium):
  Above + header (Offer comparison, Premium shortcut) + `/premium/*` tools
    → Salary dropdown for context switching
```

---

## Screen Definitions

### 1. Landing Page (`/`)

**Purpose:** Communicate value, build trust, convert to CTC input.
**Core inputs:** None.
**Primary CTA:** "Estimate my in-hand pay"
**Secondary CTA:** "See a free breakdown"
**Sections:** Hero + stat cards + feature grid + bottom CTA + footer.
**Upgrade hooks:** Feature cards hint at premium.

---

### 2. Salary entry (`/salary`) — route split by access mode

**`PREMIUM_UNLOCKED` (env premium):** Renders **`CtcInputForm`** — name/email, manual CTC (total or fixed + variable), city tier, document upload, recents → **Show estimated breakdown** → `/salary/breakdown`. Same legacy premium path as before.

**`PREMIUM_UNLOCKED === false` (paywall / production default):** Renders **`SalaryCalculatorScreen`** — free fixed/variable quick calculator only (no full component table on this page).

---

### 2a. Free Salary Calculator (`SalaryCalculatorScreen` on `/salary`)

**Purpose:** Answer “What is my estimated monthly in-hand?” in one screen—fast, trustworthy, and visually clear—without the full payroll component table.

**Layout:** Two-column on `xl+`: left **inputs**, right **live results** (stacked, full-width cards; no cramped multi-column stats in the sidebar). Single column on smaller breakpoints.

**Inputs (`SalaryCalculatorForm`):**
- **Tax regime:** Old vs New (drives `calculateIncomeTax` with standard deduction only; no 80C/HRA in this free path).
- **Annual CTC (total package):** master field; keeps **fixed** as-is and sets **variable = CTC − fixed** (if CTC is below fixed, fixed is trimmed to CTC). Fixed and variable edits keep **total = fixed + variable** via `sync-compensation-split.ts`.
- **Fixed pay:** annual fixed / guaranteed cash (core monthly gross basis for the “fixed only” view).
- **Variable pay:** separate annual field (performance, bonus, variable CTC)—may not be monthly or guaranteed; drives higher TDS and “incl. variable” in-hand (variable ÷ 12 illustrative).
- Monthly **professional tax**, **employee PF**, **employer PF** (employer PF affects **composition** only, not in-hand).
- **Add deduction:** optional labeled rows (e.g. VPF, NPS).

**Live outputs:** Recalculate on every change via `calculateSimpleSalarySummary` (`lib/simple-salary-calculator/`).

- **`FixedVariableInHandPanel`:** Four clearly labeled figures—**monthly** and **annual** in-hand **(fixed only)** vs **(incl. variable)**—plus regime, helper copy on variable realism, and effective tax % on fixed gross vs fixed+variable when variable > 0.
- **Package composition:** Based on **fixed + variable** monthly gross + employer PF (full-package visual).
- **Premium section:** Metadata-driven cards; locked tier opens **Upgrade** sheet.

**Store sync:** Writes `annualCTC` (= fixed + variable), `taxRegime`, `compensationMode: "fixed_variable"`, `fixedAnnual`, `variableAnnual` to `useSalaryStore` for nav and downstream tools.

**Handoff:** Footer link **Detailed breakdown input** → `/salary/detailed` for full CTC form, document parse, and `/salary/breakdown` (free tier still reaches the old breakdown flow from here).

---

### 2b. Detailed CTC Input (`/salary/detailed`)

**Purpose:** Start the **full** estimated or document-parsed breakdown (city tier, fixed/variable split, upload, recents).

**Modes (tabs):**
- **Manual CTC:** Name, Email, Annual CTC block (Total only | Fixed + variable), City Tier, Tax Regime → **Show estimated breakdown** → `/salary/breakdown`.
- **Upload document:** PDF/image → mock parser infers CTC from filename → document-labeled result.

**History restore:** "Last tracked salaries" + "Last compared offers" (`useHistoryStore`).

**Validation:** Zod (`ctc-input.schema.ts`): CTC min ₹1L, city tier, regime; split rules when Fixed + variable.

---

### 3. Salary Breakdown (`/salary/breakdown`)

**Purpose:** Show fixed vs variable pay, editable allowances, dual summaries, next planning steps.

**Key sections:**
- Banner: estimated vs document-based copy
- Summary KPIs: monthly in-hand (excl/incl variable), tax, deductions, annual totals
- Component table: Fixed core → Allowances (add/rename/remove) → Variable pay → Employer CTC → Deductions
- Net in-hand strip
- Planning handoff: Monthly plan, EMI, Wealth forecast links
- Allocation benchmarks + savings potential

**Editable:** Monthly/annual cells, custom row names, add/remove allowance/variable rows.
**Type badges:** EARNING, DEDUCTION, TAX FREE, EMPLOYER.
**Upgrade hooks:** "Optimize My Tax", deeper component detail → premium.

---

### 4. Monthly Plan (`/lifestyle`)

**Purpose:** Input monthly expenses, see if salary supports lifestyle.

**Core inputs (sliders):** Rent (0–1.5L), Food (0–50K), Transport (0–30K), Misc (0–25K), Utilities, Shopping, Savings, Investments.
**Core outputs:** Monthly Surplus Gauge (donut), surplus/deficit amount + %, total expenses vs net income, strategy tip.
**Primary CTA:** "Upgrade Now" (teal banner for premium wealth forecast upsell).
**Edge cases:** Expenses > income → red donut + warning.

---

### 5. Premium Paywall (`/paywall`)

**Purpose:** Convert free → premium.
**Content (free tier):** The **same global Premium plans modal** as elsewhere (pricing section, backdrop). The route is a thin shell so shareable `/paywall` links still work; **`openPremiumPlansModal()`** from the Zustand store opens the identical UI from marketing, `/salary`, etc. Optional **`?from=premium`** sets contextual copy inside the modal.
**Edge cases:** Premium env + unlocked → minimal “premium on” page with CTA to offer comparison. Closing the modal while pathname is `/paywall` navigates to **`/salary`**.

---

### 6. `/premium` (redirect)

**Purpose:** Legacy path; immediately **redirects** to **`/premium/offer-comparison`**. There is no separate hub screen.

---

### 7. Offer Comparison (`/premium/offer-comparison`)

**Purpose:** Compare 2–3 offers on real take-home.
**Inputs:** CTC details per offer (manual or document), city, regime. **New offers start with empty amounts** (CTC, fixed/variable when used, joining bonus, ESOP) and **`00,00,000`-style placeholders** until the user types; comparison table appears once each offer is named and CTC is at least ₹1L with a balanced split if applicable.
**Outputs:** Side-by-side in-hand, component diff, first-year value, winner summary.
**Upsell pattern:** When the offer screen is reachable without full premium unlock (e.g. future preview tier), in **manual** mode with **two or more valid offers**, a **blurred faux comparison strip** (`PremiumBlurOfferTeaser`) appears below the real table; CTA opens the global pricing modal. **Premium env:** omitted so subscribers are not nudged under their real data.
**Recent activity:** A saved comparison row can be **removed** from the history sheet (trash + confirm); does not affect salary history.

---

### 8. Wealth Forecast (`/premium/wealth-forecast`)

**Purpose:** Project net worth over 5/10/20 years.
**Inputs:** Current salary, savings rate, salary growth, investment return.
**Outputs:** Year-by-year table/chart, milestones.

---

### 9. EMI Analyzer (`/premium/emi-analyzer`)

**Purpose:** Loan impact on disposable income.
**Inputs:** Loan amount, tenure, rate, existing EMIs.
**Outputs:** Post-EMI disposable, debt-to-income ratio, affordability verdict.

---

## Salary Nav Behavior

| User state | Nav label | Entry switcher (▼) |
|-----------|-----------|---------------------|
| Default / free build (env unset or `default`) | "Salary" or "Salary (25 LPA)" | No — plain link to `/salary` or `/salary/breakdown` |
| Premium build (`NEXT_PUBLIC_ACCESS_MODE=premium`) | "Salary" or "Salary (25 LPA)" + chevron | **Whole label + chevron** toggles the menu. **New in-hand check**, up to **5** recent rows (may be empty), **Open current workspace** when applicable, `/salary/history` link. |

**New in-hand check** resets the salary store to an empty CTC (`annualCTC` 0) and opens `/salary`. Up to **40** salaries are stored on device; the form is blocked with a calm banner when full until one is removed.

Selecting a saved entry from the switcher:
1. Restores that salary input to the store
2. Recalculates breakdown
3. Updates nav label to new LPA
4. Navigates to `/salary/breakdown`

Removing the **active** saved entry applies the next newest saved row, or resets and sends the user to `/salary` if none remain.

All salary-dependent screens (breakdown, lifestyle, premium tools) react to the store change.
