# IMPLEMENTATION_PLAN.md — The Fluid Ledger

## Phase 1: App Shell & Architecture

**Deliverables:**
- Next.js project with App Router, TypeScript strict
- Tailwind CSS configured with custom design tokens (colors, fonts, spacing)
- shadcn/ui initialized
- Folder structure as defined in ARCHITECTURE.md
- Root layout with font loading (Plus Jakarta Sans + Inter)
- Navbar component
- Footer component
- PageShell wrapper component
- Basic routing skeleton (all routes with placeholder pages)

**Dependencies:** None.
**Risks:** Font loading performance. Mitigate: use `next/font/google` with `display: swap`.
**Mock:** None needed.
**Verify before moving on:**
- `npm run build` passes
- All routes render placeholder content
- Fonts load correctly
- Tailwind custom tokens work (test a primary-600 button)

---

## Phase 2: Design Tokens & Reusable Components

**Deliverables:**
- All shared components from DESIGN_SYSTEM.md:
  - StatCard, FeatureCard, BadgeLabel, CurrencyDisplay
  - SliderCard, SectionHeader, SegmentedSelector
  - DonutGauge, PageShell
- shadcn/ui components installed: Button, Input, Card, Label, Form, Slider, Table, Badge, Separator
- Currency formatting utility (`format-currency.ts`)
- Constants: tax slabs, city tiers, salary component definitions

**Dependencies:** Phase 1 complete.
**Risks:** Over-engineering components. Keep props minimal, extend later.
**Mock:** Create `salary.mock.ts` with sample breakdown for 12L and 24L CTC.
**Verify before moving on:**
- Each shared component renders correctly in isolation
- CurrencyDisplay shows ₹1,42,500 format correctly
- SegmentedSelector toggles state
- StatCard matches screenshot aesthetic

---

## Phase 3: Landing Page & Free Flow

**Deliverables:**
- Landing Page (`/`) — full implementation matching screenshot
- CTC Input Page (`/salary`) — form with RHF + Zod validation
- Free Salary Breakdown (`/salary/breakdown`) — stat cards + component table
- Basic Lifestyle Check (`/lifestyle`) — sliders + surplus gauge
- Zustand stores: `use-salary-store.ts`, `use-lifestyle-store.ts`
- Tax calculation utilities (old regime + new regime)
- PF and deduction calculation utilities

**Dependencies:** Phase 2 components ready.
**Risks:** Tax calculation accuracy. Mitigate: use known test cases, document slab sources.
**Mock:** All calculations client-side. No API calls.
**Verify before moving on:**
- Full free journey works end-to-end: Landing → Input → Breakdown → Lifestyle → Surplus
- Numbers are correct for sample inputs (12L metro old regime, 24L tier-2 new regime)
- Form validation shows errors properly
- Surplus gauge shows correct donut proportion
- Upgrade hooks are visible and link to paywall

---

## Phase 4: Premium Dashboard & Modules

**Deliverables:**
- Premium Paywall page (`/paywall`)
- Premium Dashboard (`/premium`) — module card grid
- Lifestyle Affordability Planner (`/premium/lifestyle-planner`)
- Detailed Salary Components view
- Wealth Forecast with projection chart
- Premium gate: Zustand `isPremium` flag, redirect non-premium users

**Dependencies:** Phase 3 stores and calculation utils.
**Risks:** Chart library choice. Options: Recharts (lightweight) or simple SVG. Decide before building.
**Mock:** Investment return rates, salary growth assumptions as constants.
**Verify before moving on:**
- Premium gate works (non-premium sees paywall)
- Dashboard shows all module cards
- Wealth forecast produces reasonable 5/10/20yr numbers
- Lifestyle planner expands on basic check with more categories

---

## Phase 5: Offer Comparison & Score

**Deliverables:**
- Offer Comparison page — add 2-3 offers with CTC input forms
- Side-by-Side Score — weighted scoring with visual comparison
- EMI Analyzer — loan input, post-EMI disposable income
- Offer data Zustand store

**Dependencies:** Phase 3-4 calculation utils.
**Risks:** Complex multi-form state. Mitigate: each offer is an independent form instance writing to array in store.
**Mock:** Sample offer data for 2 offers (startup vs MNC).
**Verify before moving on:**
- Can add, edit, remove offers
- Side-by-side comparison renders correctly
- EMI correctly reduces disposable income
- Score reflects weighted criteria

---

## Phase 6: Polish, States & Cleanup

**Deliverables:**
- Loading skeletons for all pages
- Empty states for all pages
- Error boundaries
- Form validation UX polish (inline errors, focus management)
- Responsive adjustments (tablet/mobile basic support)
- SEO: meta tags, Open Graph
- Performance: check bundle size, lazy load premium routes
- Documentation cleanup: update all 6 project files if conventions changed

**Dependencies:** All phases complete.
**Risks:** Scope creep. Keep polish focused on the defined screens only.
**Mock:** None new.
**Verify before moving on:**
- All pages have loading/empty/error states
- Lighthouse score > 90 (performance)
- No TypeScript errors
- No console warnings
- All forms validate correctly
- Indian number formatting consistent everywhere
