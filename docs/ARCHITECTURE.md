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

- **`SALARY_COMPONENTS.md`** — Breakdown IA, component model, tooltip/badge rules, grouping.
- **`DESIGN_SYSTEM.md`** — Colors, typography, card/form/nav patterns.
- **`PRODUCT_FLOW.md`** — Screen definitions, access tiers, CTA behavior.

## Folder Structure (107 files)

```
src/
├── app/                              # Next.js App Router (thin route pages)
│   ├── layout.tsx                    # Root: fonts, providers (AuthSync, TooltipProvider), Navbar, Footer
│   ├── page.tsx                      # Landing (MarketingLanding)
│   ├── login/page.tsx                # Auth
│   ├── signup/page.tsx
│   ├── forgot-password/page.tsx
│   ├── profile/page.tsx              # Protected
│   ├── salary/
│   │   ├── page.tsx                  # CTC input + document upload + recents
│   │   └── breakdown/page.tsx        # Editable breakdown (SalaryBreakdownView)
│   ├── lifestyle/page.tsx            # Monthly plan (MonthlyPlanView)
│   ├── paywall/page.tsx              # Premium gate (locked/unlocked variants)
│   └── premium/
│       ├── layout.tsx                # Premium route guard
│       ├── page.tsx                  # Dashboard hub (PremiumDashboard)
│       ├── offer-comparison/page.tsx # OfferComparisonView
│       ├── wealth-forecast/page.tsx  # WealthForecastView
│       └── emi-analyzer/page.tsx     # EmiAnalyzerView
│
├── components/
│   ├── ui/                           # shadcn/ui primitives (13: button, input, label, badge, slider, table, sheet, tooltip, dialog, card, tabs, separator, inr-money-input)
│   ├── shared/                       # Composed reusable (15 components)
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
│   │   ├── salary/ctc-input-form.tsx
│   │   ├── salary/compensation-ctc-section.tsx  # Form + Controlled variants
│   │   ├── salary/salary-breakdown-view.tsx
│   │   ├── salary/salary-recents-panels.tsx
│   │   ├── lifestyle/monthly-plan-view.tsx
│   │   ├── premium/premium-dashboard.tsx
│   │   ├── premium/offer-comparison-view.tsx
│   │   ├── premium/wealth-forecast-view.tsx
│   │   └── premium/emi-analyzer-view.tsx
│   ├── auth/auth-page-shell.tsx      # Centered card for auth forms
│   ├── providers/auth-sync.tsx       # Cookie ↔ store sync
│   └── layout/
│       ├── navbar.tsx                # Top nav with tiered chrome
│       ├── salary-nav-item.tsx       # Context-aware "Salary (25 LPA)" + premium dropdown
│       ├── recent-history-sheet.tsx   # Premium history drawer
│       ├── footer.tsx
│       └── page-shell.tsx
│
├── lib/
│   ├── auth/session-cookie.ts        # Demo cookie helpers (fl_session_email)
│   ├── config/access-mode.ts         # PREMIUM_UNLOCKED, PaywallTool, tier logic
│   ├── schemas/                      # Zod (4)
│   │   ├── auth.schema.ts            # login, signup, forgot-password, profile
│   │   ├── ctc-input.schema.ts       # CTC + fixed/variable split validation
│   │   ├── lifestyle.schema.ts
│   │   └── offer.schema.ts
│   ├── stores/                       # Zustand (5 + 1 helper)
│   │   ├── use-auth-store.ts         # Persisted demo auth (users, login, signup, logout, profile)
│   │   ├── use-salary-store.ts       # Input, breakdown, doc parse, editable components
│   │   ├── use-lifestyle-store.ts    # Expenses, surplus calc
│   │   ├── use-history-store.ts      # Persisted (localStorage); salary + offer recents
│   │   ├── use-offer-comparison-restore-store.ts  # One-shot restore from history
│   │   └── salary-breakdown-recalc-context.ts     # Helper: builds recalc params
│   ├── hooks/
│   │   ├── use-tiered-premium-links.ts  # anon→login, free→paywall, premium→tool
│   │   └── use-salary-breakdown-scroll-restoration.ts  # sessionStorage Y + layout restore; detour links use pointerdown + inbound `scroll={false}`
│   ├── types/                        # TypeScript (5)
│   │   ├── user.types.ts             # UserProfile, LocalAccountRecord
│   │   ├── salary.types.ts           # SalaryInput, SalaryBreakdown, SalaryComponent, groups, sections, tags
│   │   ├── lifestyle.types.ts        # LifestyleExpenses, SurplusResult
│   │   ├── offer.types.ts            # OfferDraft, OfferInput, OfferComparison
│   │   └── history.types.ts          # SalaryHistoryEntry, OfferComparisonHistoryEntry
│   ├── mocks/                        # Mock data & parsers (3)
│   │   ├── auth.demo.ts              # Demo credentials (demo@fluidledger.app / password123)
│   │   ├── parse-salary-document.mock.ts  # Filename-based CTC extraction
│   │   └── parse-offer-document.mock.ts   # Filename-based offer parse
│   ├── constants/                    # Tax, city, component data (4)
│   │   ├── tax-slabs.ts              # FY 2025-26 old + new regime
│   │   ├── city-tiers.ts             # Tier1/2/3 + HRA percentages
│   │   ├── salary-components.ts      # Legacy reference list
│   │   └── salary-component-catalog.ts  # 268-line detailed tooltips
│   └── utils/                        # Pure functions (11)
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
├── middleware.ts                     # Route protection: /profile (session), /premium/* (session + premium)
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
| User inputs (CTC, split, city, regime) | `use-salary-store` (SalaryInput) |
| Salary breakdown (components, summaries) | `use-salary-store` (SalaryBreakdown) |
| Lifestyle expenses + surplus | `use-lifestyle-store` |
| Auth (demo local) | `use-auth-store` (persisted, cookie sync) |
| Salary + offer recents (last 5) | `use-history-store` (persisted localStorage) |
| Offer restore from history | `use-offer-comparison-restore-store` (one-shot) |
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
| `/salary`, `/salary/breakdown` | Public (anonymous OK) |
| `/lifestyle` | Public |
| `/profile` | Signed-in (middleware) |
| `/paywall` | Public |
| `/premium`, `/premium/*` | Signed-in + env premium (middleware) |

## Nav Architecture

**SalaryNavItem** is the smart context-aware nav entry:
- No CTC → "Salary"
- CTC entered → "Salary (25 LPA)" via `formatCTCAsLPA()`
- Premium + 2+ history entries → dropdown chevron, last 5 salary contexts, click to switch
- Free → static label, no dropdown

Premium nav links (Offers, Forecast, EMI) only visible for premium signed-in users. `useTieredPremiumLinks()` routes: anon → login, free → paywall, premium → tool.

**Salary breakdown scroll:** Leaving `/salary/breakdown` for Monthly plan / EMI / Forecast (etc.) saves `window` scroll Y in `sessionStorage` (`useSalaryBreakdownScrollRestoration` + `persistSalaryBreakdownScrollNow` on outbound pointerdown). Returning uses `useLayoutEffect` restore and `Link scroll={false}` on “Back to breakdown” so the App Router does not force the document to the top after restore. `clearSalaryBreakdownScrollSave()` on fresh CTC submit or “Back to salary inputs” resets the saved position.

**Salary entry history (premium):** `use-history-store` keeps at most **`SALARY_HISTORY_MAX_ENTRIES` (40)** `salaryContexts` (newest first). The nav chevron lists the **five** most recent; `/salary/history` shows the full list. `removeSalaryContext(id)` drops one row from `salaryContexts` and the mixed `entries` list. **SalaryNavItem** chevron is an entry menu: **New in-hand check** (resets store + `/salary`, empty CTC), saved rows with trash (confirm dialog), and **Manage saved salaries**. New runs are blocked at 40 until the user removes an entry (banner on salary form + history page).

## Mock-First Approach

All calculations client-side. Document upload uses mock parsers (filename heuristics, `// ASSUMPTION:`). History persisted to localStorage. Demo auth in Zustand. Mark future server calls with `// MOCK:` or `// API:`.

## Assumptions

- Auth is demo-local. Swap for OAuth + HttpOnly cookies when backend exists.
- Tax slabs: FY 2025-26. Configurable in `constants/tax-slabs.ts`.
- Document upload: client-side mock parsers. Replace with upload + OCR/API.
- No payment integration. Paywall is UI-only.
