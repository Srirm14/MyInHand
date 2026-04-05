# Testing Guide — InHand

Complete reference for setting up and running the test suite.

---

## Overview

| Layer | Tool | Count | Location |
|---|---|---|---|
| Unit tests | Vitest | 285 tests | `app/src/__tests__/` |
| E2E tests | Playwright | 233 tests | `tests/e2e/` |
| **Total** | | **518 tests** | |

---

## First-Time Setup

Run these once after cloning the repo.

**1. Install app dependencies**
```bash
npm install --prefix app
```

**2. Install root dependencies (Playwright)**
```bash
npm install
```

**3. Install Playwright browsers**
```bash
npm run playwright:install
```

That's it. No database, no auth account, no env vars needed for unit tests or basic E2E.

---

## Running Unit Tests

Unit tests cover all pure calculation logic. They run in milliseconds with no server.

### Run all unit tests once
```bash
npm run test:unit
```

### Watch mode (re-runs on file save)
```bash
npm run test:unit:watch
```

### With coverage report
```bash
npm run test:unit:coverage
```
Opens an HTML report at `app/coverage/index.html`.

### Run a single test file
```bash
cd app && npx vitest run src/__tests__/calculate-tax.test.ts
```

### Run tests matching a name pattern
```bash
cd app && npx vitest run --reporter=verbose -t "new regime"
```

---

## Running E2E Tests

E2E tests drive a real browser against the running Next.js app. Playwright starts the dev server automatically.

### Default mode (free tier — no premium features)

```bash
npm run test:e2e
```
Runs all 15 spec files in headless Chromium. Skips tests marked `Requires NEXT_PUBLIC_ACCESS_MODE=premium`.

### Premium mode (all features unlocked)

```bash
npm run test:e2e:premium
```
Sets `NEXT_PUBLIC_ACCESS_MODE=premium` so every test runs including breakdown, lifestyle, EMI, wealth forecast, offer comparison, and history.

### Headed mode (watch the browser)

```bash
npm run test:e2e:headed
```

### Interactive UI mode (recommended for debugging)

```bash
npm run test:e2e:ui
```
Opens the Playwright UI — pick tests, step through, inspect timeline.

### Open the last HTML report

```bash
npm run test:e2e:report
```

### Run a single spec file

```bash
cd /Users/sriram.v/Desktop/Inhand && npx playwright test tests/e2e/01-smoke.spec.ts
```

### Run tests matching a name pattern

```bash
cd /Users/sriram.v/Desktop/Inhand && npx playwright test -g "12 LPA"
```

### Run a specific describe block

```bash
cd /Users/sriram.v/Desktop/Inhand && npx playwright test -g "Free calculator — CTC input"
```

### Run only Chromium (faster)

```bash
cd /Users/sriram.v/Desktop/Inhand && npx playwright test --project=chromium
```

### Run only mobile viewport tests

```bash
cd /Users/sriram.v/Desktop/Inhand && npx playwright test --project=mobile-chrome
```

### Run with verbose output

```bash
cd /Users/sriram.v/Desktop/Inhand && npx playwright test --reporter=line
```

### Run against an already-running dev server

If you have `npm run dev` running in another terminal:
```bash
BASE_URL=http://localhost:3000 npm run test:e2e
```

---

## Run Everything

Unit tests + E2E in sequence:
```bash
npm test
```

---

## What Each Test File Covers

### Unit Tests (`app/src/__tests__/`)

| File | What it tests |
|---|---|
| `calculate-tax.test.ts` | FY 2025-26 income tax slabs (old + new regime), Section 87A rebate boundaries (₹12L new, ₹5.75L old), 4% cess, deterministic values at 5/12/13/20/30/50 LPA, slab allocation |
| `calculate-salary.test.ts` | Premium breakdown engine — basic (40% of CTC), HRA by city tier (50/40/30%), EPF ceiling at ₹15,000, gratuity (4.81%), special allowance as residual, recalculate-from-edits path, regime switching on recalc |
| `calculate-emi.test.ts` | Reducing-balance EMI formula, well-known value (₹10L at 10% for 60 months ≈ ₹21,247), zero interest, rate/tenure monotonicity, total interest payable |
| `project-wealth.test.ts` | Year-by-year wealth accumulation, deterministic 3-year scenario, clamping (0–30% rates, 1–40 year horizon), zero savings, zero growth, compounding |
| `calculate-simple-salary.test.ts` | Free-tier dual in-hand calculator — fixed-only vs fixed+variable, deductions sum, employer PF isolation, composition ratios |
| `compensation-split.test.ts` | Fixed/variable sync for premium forms (`compensation-split.ts`) and free calculator (`sync-compensation-split.ts`) — all four cases (total, fixed, variable, initial) |
| `format-currency.test.ts` | INR formatting with `en-IN` grouping, compact K/L/Cr labels, `formatCTCAsLPA` (8L → "8 LPA", 1Cr → "1 Cr"), percentage formatting |
| `lifestyle-slider-scale.test.ts` | Slider max computation, nice-number rounding, `clampLifestyleMonthlyRupees`, scale label formatting (K/L) |

### E2E Tests (`tests/e2e/`)

| File | What it tests |
|---|---|
| `01-smoke.spec.ts` | Every page loads without a 500/404, nav links work, legacy redirects (`/premium/*`, `/salary/breakdown/*`) |
| `02-free-calculator.spec.ts` | Free calculator — CTC input, fixed/variable split, PT field, deduction rows, regime switching, premium upsell cards |
| `03-access-control.spec.ts` | All premium routes redirect unauthenticated users to `/login` or `/paywall`; public routes stay accessible |
| `04-auth-flows.spec.ts` | Login/signup/forgot-password — form fields, labels, validation on empty submit, weak password, wrong credentials error |
| `05-premium-ctc-form.spec.ts` | Premium CTC form (requires premium mode) — fields, city tier selector, regime toggle, submit → navigates to breakdown, validation for CTC < ₹1L |
| `06-salary-breakdown.spec.ts` | KPI cards (monthly in-hand, annual, tax, deductions, take-home %), all component table rows visible, different CTC/tier/regime combinations |
| `07-breakdown-edit.spec.ts` | Cell editing, add allowance row, remove row, KPI cards update after edits, scroll restoration on back-navigation |
| `08-emi-analyzer.spec.ts` | Principal/rate/tenure inputs, EMI result output, ₹10L at 10% = ~₹21,247, loan type selection, second loan, affordability verdict |
| `09-lifestyle-planning.spec.ts` | Slider interactions, surplus/deficit gauge, all expense categories visible, zero-expense → 100% surplus state |
| `10-wealth-forecast.spec.ts` | Horizon switching (5/10/20 years), row count matches horizon, corpus increases over time, savings rate slider affects output |
| `11-offer-comparison.spec.ts` | Offer card inputs, single offer (no table), two-offer comparison table + verdict, filter toggles (income tax, take-home %, first-year value), joining bonus + ESOP fields |
| `12-navigation.spec.ts` | Cross-page nav, browser back/forward, salary nav LPA label after entering CTC, premium nav dropdown, responsive layout at mobile/tablet/desktop |
| `13-regression.spec.ts` | 12 LPA new regime = ₹0 income tax, 25 LPA has significant tax, EPF capped at ₹1800 for high CTC, variable pay row appears with split input |
| `14-calculation-consistency.spec.ts` | UI output changes when CTC changes, higher CTC → higher in-hand, adding deduction reduces in-hand, regime switch changes totals, EMI changes with tenure |
| `15-rendering-states.spec.ts` | Empty default state, post-input state, auth form labels, wrong credentials error state, conditional breakdown sections, export dropdown, paywall modal, responsive viewports |

---

## Configuration Files

| File | Purpose |
|---|---|
| `app/vitest.config.ts` | Vitest config — resolves `@/` path alias via tsconfig paths, runs in `node` environment |
| `playwright.config.ts` | Playwright config — 3 projects (Chromium, WebKit, mobile Chrome), auto-starts dev server, HTML + line reporters |

---

## Premium vs Default Mode

Most E2E tests work in both modes. Tests that require premium features are guarded with:

```typescript
test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");
```

To run the full suite including all premium flows:

```bash
npm run test:e2e:premium
```

To run only the free-tier tests (no premium server needed):

```bash
npm run test:e2e
```

---

## CI Usage

```bash
# Install everything
npm install
npm install --prefix app
npx playwright install --with-deps chromium

# Run unit tests
npm run test:unit

# Run E2E (free tier)
npm run test:e2e

# Run E2E (premium)
NEXT_PUBLIC_ACCESS_MODE=premium npx playwright test
```

Set `CI=true` to:
- Disable server reuse (always start fresh)
- Retry failed tests up to 2 times
- Run with 1 worker (avoids port conflicts)

---

## Helpers and Fixtures

| File | Purpose |
|---|---|
| `tests/e2e/helpers/index.ts` | Shared page helpers — `fillCTC`, `selectTaxRegime`, `selectCityTier`, `assertNoError`, `assertHeading` |
| `tests/e2e/fixtures/salary-data.ts` | Test constants — CTC values, city tiers, routes, offer data |
