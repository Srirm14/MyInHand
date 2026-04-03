# PRODUCT_FLOW.md — The Fluid Ledger

## Journey Overview (tiered)

### Logged out — base product only

- **Header:** brand, **Salary** only (no Offers / Forecast / EMI, no Premium chip, no History). **Log in** / **Sign up** on the right.
- **Flow:** Landing → CTC → free breakdown → lifestyle check → surplus/deficit.
- **Save nudge:** After breakdown and on lifestyle, **Save your activity** card → `login?from=…` / `signup?from=…`.
- **Premium CTAs** (in copy, footer, feature cards): resolve to **sign-in first**, then paywall or tool depending on tier (`useTieredPremiumLinks`).
- **History:** not available (no navbar control; salary runs are not pushed to History until signed in).

### Logged in — free tier

- **Header:** **Salary** only + **History** (right sheet, last 5 items) + **Profile**. No Premium crown, no deep premium nav links.
- **Flow:** same free salary + lifestyle path; History records salary submissions from CTC submit.
- **Premium intent:** links go to **`/paywall`** (and deep `?tool=` where relevant).

### Logged in — premium tier (`NEXT_PUBLIC_ACCESS_MODE=premium` or dev default)

- **Header:** **Salary** + **Offers** / **Forecast** / **EMI** + **Premium** (teal pill, **crown** icon) + **History** + **Profile**.
- **Flow:** paywall optional as marketing; **`/premium/*`** routes allowed (middleware: session + env premium).
- **FAB** (CTC / lifestyle): quick jump to Premium hub for this tier only.

```
Anonymous
  Landing → Salary → Breakdown → Lifestyle → Surplus/Deficit
    └→ (optional) Log in / Sign up to save & History

Signed-in (free env)
  Same core flow + History + Profile
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
**Primary CTA:** "Calculate In-Hand Pay →"
**Secondary CTA:** "Watch Demo"

**Sections:**
- Hero: headline, subline, dual CTA
- Social proof: stat cards (Monthly Net Pay preview, Tax Efficiency Score)
- Features grid: Salary Breakdown, Offer Comparison, EMI Analyzer, Wealth Forecast
- Bottom CTA: "Your financial clarity is one click away"
- Footer: product links, legal, trust badges (256-bit SSL, ISO, GDPR)

**Edge cases:** First-time visitor vs returning user (future: prefill if data exists).
**Upgrade hooks:** Feature cards hint at premium capabilities.

---

### 2. CTC Input (`/salary`)

**Purpose:** Collect salary details to calculate breakdown.

**Core inputs:**
- Full Name (optional, for personalization)
- Email (optional, for saving results)
- Annual CTC (₹, required)
- City Tier: Tier 1 Metro / Tier 2 Urban / Tier 3 Semi-Urban
- Tax Regime: Old Regime / New Regime

**Core outputs:** Navigation to breakdown with calculated data.
**Primary CTA:** "Show Breakdown →"

**Validation (Zod):**
- CTC: required, number, min ₹1,00,000, max ₹10,00,00,000
- City Tier: required enum
- Tax Regime: required enum

**Empty state:** Fresh form with placeholder values (₹12,00,000).
**Edge cases:** Very low CTC (below tax threshold), very high CTC, decimal input.
**Bottom features:** Growth Analysis, Max Deductions, Secure Entry trust badges.

---

### 3. Free Salary Breakdown (`/salary/breakdown`)

**Purpose:** Show the user their actual monthly in-hand salary with full component breakdown.

**Core inputs:** CTC, City Tier, Tax Regime (from Zustand store).
**Core outputs:**
- Monthly in-hand amount
- Annual income tax
- Total monthly deductions
- Component-wise table (Basic, HRA, PF, Professional Tax, TDS, Reimbursements)

**Primary CTA:** "Add Lifestyle Expenses" / "Optimize My Tax"
**Secondary CTA:** "Download PDF"

**Key UI elements:**
- Wealth Insight card (top-right): take-home %, tax efficiency comparison
- 3x Stat cards: Monthly In-hand, Annual Income Tax, Total Deductions
- Component table: Component, Monthly Value, Annual Total, Type badge, Status icon
- Bottom section: "Check your surplus" CTA card, Allocation Benchmarks, Savings potential card

**Type badges:** EARNING (green), DEDUCTION (red), TAX FREE (teal)
**Edge cases:** Zero deductions, no HRA (Tier 3), new regime (no 80C).
**Upgrade hooks:** "Optimize My Tax" → premium, "Detailed Components" → premium.

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

### 12. Offer Comparison (`/premium/offer-comparison`)

**Purpose:** Compare 2-3 job offers on real take-home and total value.

**Core inputs:** CTC details for each offer (manual input), city tier, regime.
**Core outputs:** Side-by-side in-hand comparison, component diff, total value score.
**Edge cases:** Single offer (show "add another"), mismatched components.

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
