# PRODUCT_FLOW.md — InHand

## Access Tiers

### Anonymous (logged out)

- **Header:** Brand + **Salary** (context-aware label) only. No Offers/Forecast/EMI, no Premium chip, no History. **Log in** / **Sign up** on right.
- **Flow:** Landing → Salary input → Breakdown → Monthly plan → Surplus/deficit.
- **Save nudge:** After breakdown and on monthly plan, "Save your activity" card → login/signup.
- **Premium CTAs:** Resolve to sign-in first, then paywall or tool via `useTieredPremiumLinks`.
- **Salary nav:** Shows "Salary" or "Salary (25 LPA)" — static, no dropdown.

### Signed-in — free tier

- **Header:** Salary (context-aware) + Profile. No History in nav, no Premium crown, no deep premium nav links.
- **Flow:** Same free salary + monthly plan path. Successful runs append to persisted history for recents.
- **Premium intent:** Links go to `/paywall` (with `?tool=` where relevant).
- **Salary nav:** Shows "Salary (25 LPA)" — static, no dropdown.

### Signed-in — premium tier

- **Header:** Salary (context-aware + **dropdown with last 5**) + Offers + Forecast + EMI + Premium (Crown pill) + History (sheet) + Profile.
- **Flow:** All free routes + `/premium/*` routes.
- **Salary nav:** Shows "Salary (25 LPA) ▼". Click opens dropdown with recent salary contexts. Selecting one switches the active salary across the entire app.

```
Anonymous:
  Landing → Salary → Breakdown → Monthly plan → Surplus
    └→ (optional) Login/Signup

Signed-in (free):
  Same + Profile
    └→ Paywall for upgrade

Signed-in (premium):
  Above + header deep links + Premium hub
    → Dashboard → Offers, Forecast, EMI
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

### 2. Salary Input (`/salary`)

**Purpose:** Start breakdown from manual CTC (estimated) or uploaded document (mock parse).

**Modes (tabs):**
- **Manual CTC:** Name, Email, Annual CTC block (Total only | Fixed + variable), City Tier, Tax Regime → estimated breakdown.
- **Upload document:** PDF/image → mock parser infers CTC from filename → document-labeled result.

**CTC block:** Segmented control. Total only: single input. Fixed + variable: three inputs with auto-sync, Auto/You-edit chips.

**History restore:** Below form: "Last tracked salaries" + "Last compared offers" (recents from `useHistoryStore`).

**Primary CTA:** "Show estimated breakdown"
**Validation:** Zod: CTC min ₹1L, city tier, regime; split rules when Fixed + variable.

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
**Content:** Feature comparison, pricing (or waitlist), testimonials, CTA.
**Edge cases:** Already premium → redirect to dashboard.

---

### 6. Premium Dashboard (`/premium`)

**Purpose:** Hub for all premium tools.
**Layout:** Card grid: Offer Comparison, Wealth Forecast, EMI Analyzer.
**Empty state:** "Complete your salary breakdown first" if no CTC data.

---

### 7. Offer Comparison (`/premium/offer-comparison`)

**Purpose:** Compare 2–3 offers on real take-home.
**Inputs:** CTC details per offer (manual or document), city, regime.
**Outputs:** Side-by-side in-hand, component diff, first-year value, winner summary.

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
| No CTC entered | "Salary" | No |
| CTC entered, anonymous/free | "Salary (25 LPA)" | No |
| CTC entered, premium, breakdown loaded | "Salary (25 LPA) ▼" | Yes — **New in-hand check**, up to **5** recent saved rows (remove with confirm), link to `/salary/history`. Active CTC is **only** in the nav label—not duplicated in the menu. |

**New in-hand check** resets the salary store to an empty CTC (`annualCTC` 0) and opens `/salary`. Up to **40** salaries are stored on device; the form is blocked with a calm banner when full until one is removed.

Selecting a saved entry from the switcher:
1. Restores that salary input to the store
2. Recalculates breakdown
3. Updates nav label to new LPA
4. Navigates to `/salary/breakdown`

Removing the **active** saved entry applies the next newest saved row, or resets and sends the user to `/salary` if none remain.

All salary-dependent screens (breakdown, lifestyle, premium tools) react to the store change.
