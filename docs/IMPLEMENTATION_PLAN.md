# IMPLEMENTATION_PLAN.md — InHand

> **Note:** This file is a **historical phase checklist**. For **current** routes, folders, auth (Supabase), and sync behavior, use **`ARCHITECTURE.md`**, **`PRODUCT_FLOW.md`**, **`inhand-client-sync-ux.md`**, and **`adr/ADR-002-session-save.md`**.

## Current Status

**Phases 1–4 substantially complete.** App shell, design tokens, shared components, auth, free flow (landing → input → breakdown → monthly plan), premium tools (offer comparison, wealth forecast, EMI analyzer) — all implemented. Nav is context-aware with salary dropdown for premium users.

---

## Phase 1: App Shell & Architecture ✅

**Delivered:**
- Next.js 16 project with App Router, TypeScript strict
- Tailwind CSS 4 with custom design tokens (teal/navy/emerald/danger palette)
- shadcn/ui v4 initialized (13 primitives)
- Folder structure per ARCHITECTURE.md
- Root layout: Plus Jakarta Sans + Inter, AuthSync provider, Navbar, Footer
- Middleware: route protection for `/profile`, `/salary/detailed`, `/salary/premium/*`, etc. (see **`ARCHITECTURE.md`**)

---

## Phase 2: Design Tokens & Reusable Components ✅

**Delivered:**
- 15 shared components: StatCard, FeatureCard, CurrencyDisplay, BadgeLabel, SegmentedSelector, SliderCard, DonutGauge, InsightCard, UpgradeBanner, SaveProgressCta, SectionHeader, LifestylePlanningSliderCard, CashPathInteractiveRow, SalaryBreakdownEditablePanel, SalaryBreakdownReadonlyPanel
- Currency formatting: formatCurrency, formatCurrencyCompact, formatCTCAsLPA, formatIndianNumber, formatPercentage
- Constants: tax slabs (FY 2025-26), city tiers, salary component catalog (268 lines)
- Mock data: demo auth, salary/offer document parsers

---

## Phase 3: Landing Page & Free Flow ✅

**Delivered:**
- Landing page (MarketingLanding)
- CTC Input with manual + document upload + compensation split
- Salary Breakdown with editable components (add/rename/remove allowances + variable rows)
- Monthly plan (lifestyle sliders + surplus gauge)
- Auth: login, signup, forgot-password, profile
- Zustand stores: salary, lifestyle, history, auth
- Tax + PF + salary calculation engine

---

## Phase 4: Premium Tools & Modules ✅

**Delivered:**
- Premium paywall (locked/unlocked variants)
- Offer Comparison (2–3 offers, side-by-side)
- Wealth Forecast (5/10/20 year projection)
- EMI Analyzer (loan scenarios)
- Premium route guard (middleware + layout)
- Context-aware SalaryNavItem with premium dropdown

---

## Phase 5: Polish & Cleanup — IN PROGRESS

**Deliverables:**
- [ ] Loading skeletons for all pages
- [ ] Empty states for all pages (especially premium tools with no data)
- [ ] Error boundaries
- [ ] Form validation UX polish (inline errors, focus management)
- [ ] Responsive adjustments (tablet/mobile basic support)
- [ ] SEO: meta tags, Open Graph per page
- [ ] Performance: bundle analysis, lazy load premium routes
- [ ] Cleanup: verify no dead imports, consolidate duplicate utils
- [ ] Unused shadcn primitives: card.tsx, dialog.tsx, tabs.tsx, separator.tsx — keep if planned for use, otherwise remove

**Dependencies:** All phases 1–4.
**Risks:** Scope creep. Focus on defined screens only.
**Verify:**
- All pages have loading/empty/error states
- No TypeScript errors, no console warnings
- Indian number formatting consistent everywhere
- Lighthouse perf > 90

---

## Phase 6: Future (not started)

- Real backend API (auth, calculations, document OCR)
- Payment integration (Razorpay/Stripe for premium)
- Mobile responsive pass
- PDF export for salary breakdown
- Email report delivery
- Analytics / telemetry
- Multi-language support (Hindi)
