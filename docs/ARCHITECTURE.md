# ARCHITECTURE.md — InHand

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui v4 |
| State (client) | Zustand 5 |
| State (server) | TanStack React Query 5 |
| Forms | React Hook Form 7 + Zod 4 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans + Inter via `next/font/google` |

## Related Docs

- **`inhand-backend-api-spec.md`** — Intended API surface (Supabase is used today for auth + persisted sessions).
- **`inhand-client-sync-ux.md`** — Client sync, cookies, autosave, toasts.
- **`SALARY_COMPONENTS.md`** — Breakdown IA, component model, tooltip/badge rules, grouping.
- **`DESIGN_SYSTEM.md`** — Colors, typography, card/form/nav patterns.
- **`PRODUCT_FLOW.md`** — Screen definitions, access tiers, CTA behavior.

## Folder Structure (app grows with features; see tree below)

```
src/
├── app/                              # Next.js App Router (thin route pages)
│   ├── layout.tsx                    # Root: fonts, providers, Navbar, Footer; Suspense: CloudSalaryWorkspaceSync + PremiumPlansModalHost
│   ├── page.tsx                      # Landing (MarketingLanding)
│   ├── login/page.tsx                # Auth
│   ├── signup/page.tsx
│   ├── forgot-password/page.tsx
│   ├── profile/page.tsx              # Protected
│   ├── salary/
│   │   ├── page.tsx                  # Premium: CtcInputForm; default/paywall: SalaryCalculatorScreen
│   │   ├── detailed/page.tsx         # CtcInputForm: manual/upload + recents → breakdown
│   │   ├── history/page.tsx          # Saved salary sessions (premium list)
│   │   └── premium/                  # Canonical premium workspace (`salary-premium-paths.ts`; legacy URLs redirect)
│   │       ├── layout.tsx            # Premium route guard (signed-in + premium)
│   │       ├── breakdown/page.tsx    # SalaryBreakdownView
│   │       ├── lifestyle/page.tsx    # MonthlyPlanView
│   │       ├── offer-comparison/page.tsx
│   │       ├── wealth-forecast/page.tsx
│   │       └── emi-analyzer/page.tsx
│   ├── paywall/page.tsx              # Free: minimal shell; global modal owns UX. Premium env: unlocked redirect
│
├── components/
│   ├── ui/                           # shadcn/ui primitives (13: button, input, label, badge, slider, table, sheet, tooltip, dialog, card, tabs, separator, inr-money-input)
│   ├── shared/                       # Composed reusable (premium-planner-salary-gate, loading-skeletons, currency-display, …)
│   │   ├── stat-card.tsx             # KPI card with amount, trend, icon
│   │   ├── feature-card.tsx          # Icon + title + CTA (supports href)
│   │   ├── currency-display.tsx      # ₹ formatted display
│   │   ├── badge-label.tsx           # Earning/deduction/tax-free badges
│   │   ├── section-header.tsx        # Title + subtitle + actions
│   │   ├── segmented-selector.tsx    # Button group toggle
│   │   ├── slider-card.tsx           # Icon + range slider + amount
│   │   ├── lifestyle-planning-slider-card.tsx  # Dynamic-scale variant
│   │   ├── donut-gauge.tsx           # SVG donut for surplus
│   │   ├── insight-card.tsx          # Sparkles highlight card
│   │   ├── upgrade-banner.tsx        # Teal premium CTA banner
│   │   ├── save-progress-cta.tsx     # Login nudge for anonymous
│   │   ├── cash-path-interactive-row.tsx
│   │   ├── salary-breakdown-editable-panel.tsx
│   │   └── salary-breakdown-readonly-panel.tsx
│   ├── features/                     # Screen-specific compositions
│   │   ├── landing/marketing-landing.tsx
│   │   ├── pricing/
│   │   │   ├── premium-plans-modal.tsx      # Shared full-screen pricing (SalaryPricingSection embedded)
│   │   │   └── premium-blur-offer-teaser.tsx  # Blurred faux metrics → openPremiumPlansModal
│   │   ├── salary-calculator/        # Free /salary: form, FixedVariableInHandPanel, deductions, composition, premium, upgrade sheet
│   │   ├── salary/ctc-input-form.tsx
│   │   ├── salary/compensation-ctc-section.tsx  # Form + Controlled variants
│   │   ├── salary/salary-breakdown-view.tsx
│   │   ├── salary/salary-recents-panels.tsx
│   │   ├── lifestyle/monthly-plan-view.tsx
│   │   ├── premium/offer-comparison-view.tsx
│   │   ├── premium/wealth-forecast-view.tsx
│   │   └── premium/emi-analyzer-view.tsx
│   ├── auth/auth-page-shell.tsx      # Centered card for auth forms
│   ├── providers/auth-sync.tsx       # Supabase auth → profile store; sign-out clears workspace cookies + hydration guard
│   ├── providers/workspace-session-cookies-sync.tsx  # `inhand_last_salary_session` + local history restore
│   ├── providers/cloud-salary-workspace-sync.tsx     # Premium: cookie/`?session=` restore + detail hydrate (layout)
│   ├── providers/premium-plans-modal-host.tsx  # /paywall + ?from=premium sync; PremiumPlansModal when !PREMIUM_UNLOCKED
│   └── layout/
│       ├── navbar.tsx                # Top nav with tiered chrome
│       ├── salary-nav-item.tsx       # Context-aware "Salary (25 LPA)" + premium dropdown
│       ├── recent-history-sheet.tsx   # Premium history drawer (delete salary + offer)
│       ├── remove-salary-entry-dialog.tsx
│       ├── remove-offer-comparison-entry-dialog.tsx
│       ├── footer.tsx
│       └── page-shell.tsx
│
├── lib/
│   ├── auth/premium-entitlement.ts   # Server-side premium check helpers
│   ├── config/access-mode.ts         # PREMIUM_UNLOCKED, PaywallTool, tier logic
│   ├── config/salary-premium-paths.ts # Canonical `/salary/premium/*` paths + href builders
│   ├── config/premium-planning-tools.ts  # Metadata for premium cards on /salary
│   ├── schemas/                      # Zod (4)
│   │   ├── auth.schema.ts            # login, signup, forgot-password, profile
│   │   ├── ctc-input.schema.ts       # CTC + fixed/variable split validation
│   │   ├── lifestyle.schema.ts
│   │   └── offer.schema.ts
│   ├── stores/                       # Zustand (6 + 1 helper)
│   │   ├── use-auth-store.ts         # Supabase session + profile; login/signup/logout/updateProfile
│   │   ├── use-salary-store.ts       # Input, breakdown, doc parse, editable components
│   │   ├── use-lifestyle-store.ts    # Expenses, surplus calc
│   │   ├── use-history-store.ts      # Persisted (localStorage); salary + offer recents
│   │   ├── use-offer-comparison-restore-store.ts  # One-shot restore from history
│   │   ├── use-premium-plans-modal-store.ts       # Global pricing modal open + fromPremium
│   │   └── salary-breakdown-recalc-context.ts     # Helper: builds recalc params
│   ├── hooks/                        # TanStack Query hooks, UX hooks (see folder)
│   ├── supabase/                     # Browser/server clients, middleware session, queries, RLS types
│   ├── types/                        # TypeScript (5)
│   │   ├── user.types.ts             # UserProfile, PlanTier
│   │   ├── salary.types.ts           # SalaryInput, SalaryBreakdown, SalaryComponent, groups, sections, tags
│   │   ├── lifestyle.types.ts        # LifestyleExpenses, SurplusResult
│   │   ├── offer.types.ts            # OfferDraft, OfferInput, OfferComparison
│   │   └── history.types.ts          # SalaryHistoryEntry, OfferComparisonHistoryEntry
│   ├── mocks/                        # Mock document parsers (client-side)
│   │   ├── parse-salary-document.mock.ts  # Filename-based CTC extraction
│   │   └── parse-offer-document.mock.ts   # Filename-based offer parse
│   ├── offer-comparison/
│   │   └── verdict-explanations.ts   # Verdict copy, filters, formulas (shared UI strings)
│   ├── persistence/                  # save-flight, workspace session cookies (salary/offer deep links)
│   ├── constants/                    # Tax, city, component data (4)
│   │   ├── tax-slabs.ts              # FY 2025-26 old + new regime
│   │   ├── city-tiers.ts             # Tier1/2/3 + HRA percentages
│   │   ├── salary-components.ts      # Legacy reference list
│   │   └── salary-component-catalog.ts  # 268-line detailed tooltips
│   ├── simple-salary-calculator/     # Free /salary: fixed+variable + CTC sync; dual in-hand + dual TDS
│   │   ├── types.ts
│   │   ├── calculate-simple-salary.ts
│   │   └── sync-compensation-split.ts  # Total CTC vs fixed vs variable reconciliation
│   └── utils/                        # Pure functions (11+)
│       ├── format-currency.ts        # formatCurrency, formatCurrencyCompact, formatCTCAsLPA, formatIndianNumber, formatPercentage
│       ├── format-relative-time.ts
│       ├── calculate-salary.ts       # Core breakdown engine + recalc + derive summaries
│       ├── calculate-tax.ts          # Slab calc + rebate + cess
│       ├── calculate-emi.ts          # Reducing balance EMI
│       ├── project-wealth.ts         # Year-by-year wealth projection
│       ├── compensation-split.ts     # Total ↔ fixed ↔ variable sync
│       ├── coerce-salary-snapshot.ts # History restore: fill missing fields
│       ├── lifestyle-slider-scale.ts # Dynamic slider bounds
│       ├── offer-breakdown-recalc-context.ts
│       └── utils.ts                  # cn() tailwind merge (also at lib/utils.ts)
│
├── middleware.ts                     # Session refresh; /profile; /salary/detailed; /salary/premium/** (session + premium)
└── styles/globals.css                # Tailwind tokens + custom utility classes
```

## Component Layering (strict)

```
Layer 1: ui/         → shadcn primitives. Never modify source. Extend via className/variants.
Layer 2: shared/     → Composed reusable. Import from L1 only.
Layer 3: features/   → Screen-specific. Import from L1 + L2.
Layer 4: app/pages   → Route handlers. Compose L3. Zero business logic.
```

Dependencies flow downward only.

## State Architecture

| Concern | Solution |
|---------|----------|
| User inputs (CTC, split, city, regime) | `use-salary-store` (SalaryInput); `/salary` calculator also syncs `annualCTC` + `taxRegime` into the store |
| Salary breakdown (components, summaries) | `use-salary-store` (SalaryBreakdown) |
| Lifestyle expenses + surplus | `use-lifestyle-store` |
| Auth + profile | Supabase Auth + `profiles` row; `use-auth-store` mirrors session user |
| Salary + offer recents (last 5 mixed) | `use-history-store` (persisted localStorage); `removeSalaryContext`, `removeOfferComparisonEntry` |
| Offer restore from history | `use-offer-comparison-restore-store` (one-shot) |
| Premium plans modal (free tier) | `use-premium-plans-modal-store`; imperative `openPremiumPlansModal` / `closePremiumPlansModal` |
| Form transient state | React Hook Form (local) |
| UI ephemeral state | React useState (local) |

## Form Pattern

```
Zod schema → z.infer<> type → useForm({ resolver: zodResolver(schema) }) → FormField → onSubmit → store
```

## Route Access

| Route | Access |
|-------|--------|
| `/` | Public |
| `/login`, `/signup`, `/forgot-password` | Public (redirect if logged in) |
| `/salary` | Public (free calculator or premium CTC flow per `NEXT_PUBLIC_ACCESS_MODE`) |
| `/salary/detailed` | Signed-in + premium; else redirect to login/paywall |
| `/salary/premium/*` (breakdown, lifestyle, offer comparison, wealth forecast, EMI) | Signed-in + premium (layout guard + middleware) |
| `/profile` | Signed-in (middleware) |
| `/paywall` | Public |
| Legacy `/lifestyle`, `/salary/breakdown`, `/premium/*` | **Permanent redirect** to `/salary/premium/...` (`next.config.ts`) |

## Nav Architecture

**SalaryNavItem** is the smart context-aware nav entry:
- No CTC → "Salary"
- CTC entered → "Salary (25 LPA)" via `formatCTCAsLPA()`
- Premium build (`PREMIUM_UNLOCKED`) → label + chevron open the same menu (last 5 salary rows, New in-hand check, Open current workspace, Manage saved salaries)
- Default / free build → static Salary link, no chevron

Premium nav: **Offer comparison** link + **Premium** plan badge (read-only status, not a link) for signed-in premium users. `useTieredPremiumLinks()` routes: anon → login, free → paywall, premium → tool.

**Salary breakdown scroll:** Leaving **`/salary/premium/breakdown`** for other premium planners saves `window` scroll Y in `sessionStorage` (`useSalaryBreakdownScrollRestoration` + `persistSalaryBreakdownScrollNow` on outbound pointerdown). Returning uses `useLayoutEffect` restore and `Link scroll={false}` on “Back to breakdown”. `clearSalaryBreakdownScrollSave()` on fresh CTC submit or “Back to salary inputs” resets the saved position.

**Salary entry history (premium):** `use-history-store` keeps at most **`SALARY_HISTORY_MAX_ENTRIES` (40)** `salaryContexts` (newest first). The nav chevron lists the **five** most recent; `/salary/history` shows the full list. `removeSalaryContext(id)` drops one row from `salaryContexts` and the mixed `entries` list. `removeOfferComparisonEntry(id)` removes only an `offer_comparison` row from mixed `entries` (no salary list change). **SalaryNavItem** entry menu (label + chevron toggle): **New in-hand check**, **Open current workspace** when a breakdown exists, saved rows with trash, **Manage saved salaries**; menu shows in **premium** builds only (`PREMIUM_UNLOCKED`), not in default/free access mode—regardless of login or history count. **`useSalaryHistoryDelete`** + **`RemoveSalaryEntryDialog`** reconcile the active salary after removal (nav menu, **recent-history-sheet**, `/salary/history`). **`RemoveOfferComparisonEntryDialog`** + trash on offer rows in **recent-history-sheet** for offer removal. New salary runs are blocked at 40 until the user removes an entry (banner on salary form + history page).

**Offer comparison inputs:** New offer cards default **annual CTC 0** with **`00,00,000`-style placeholders** on total, fixed/variable split fields, joining bonus, and ESOP until the user enters amounts (`emptyOffer`, `CompensationCtcSectionControlled` / `CompensationCtcInputs`, offer view inputs).

## Mock-First (documents & calculations)

All **tax/salary math** runs client-side. **Document upload** uses mock parsers (filename heuristics, `// ASSUMPTION:`). **Salary/offer persistence** uses Supabase when configured; otherwise local history remains in **localStorage**. Mark future server calls with `// MOCK:` or `// API:`.

## Assumptions

- **Auth:** Supabase (`NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`). Without env, auth UI shows configure message; middleware treats app as unsigned-in for protected routes.
- Tax slabs: FY 2025-26. Configurable in `constants/tax-slabs.ts`.
- Document upload: client-side mock parsers until OCR/API exists.
- No payment integration. Paywall is UI-only (`plan_tier` or env unlock).
