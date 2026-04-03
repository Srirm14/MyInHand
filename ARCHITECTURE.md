# ARCHITECTURE.md — The Fluid Ledger

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3.4+ |
| Components | shadcn/ui |
| State (client) | Zustand |
| State (server) | TanStack React Query |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans (display), Inter (body) via `next/font/google` |

## Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, providers, nav)
│   ├── page.tsx                  # Landing page
│   ├── salary/
│   │   ├── page.tsx              # CTC Input form
│   │   └── breakdown/
│   │       └── page.tsx          # Free salary breakdown
│   ├── lifestyle/
│   │   └── page.tsx              # Basic lifestyle check + surplus
│   ├── premium/
│   │   ├── page.tsx              # Premium dashboard
│   │   ├── lifestyle-planner/
│   │   ├── components/
│   │   ├── wealth-forecast/
│   │   ├── offer-comparison/
│   │   ├── offer-score/
│   │   └── emi-analyzer/
│   └── paywall/
│       └── page.tsx              # Premium paywall / upgrade
│
├── components/
│   ├── ui/                       # shadcn/ui primitives (button, input, card, etc.)
│   ├── shared/                   # Composed reusable components
│   │   ├── stat-card.tsx
│   │   ├── feature-card.tsx
│   │   ├── badge-label.tsx
│   │   ├── currency-display.tsx
│   │   ├── slider-card.tsx
│   │   ├── section-header.tsx
│   │   ├── segmented-selector.tsx
│   │   └── donut-gauge.tsx
│   └── layout/
│       ├── navbar.tsx
│       ├── footer.tsx
│       └── page-shell.tsx
│
├── lib/
│   ├── schemas/                  # Zod schemas
│   │   ├── ctc-input.schema.ts
│   │   ├── lifestyle.schema.ts
│   │   └── offer.schema.ts
│   ├── stores/                   # Zustand stores
│   │   ├── use-salary-store.ts
│   │   ├── use-lifestyle-store.ts
│   │   └── use-premium-store.ts
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-salary-calculation.ts
│   │   ├── use-tax-calculation.ts
│   │   └── use-currency-format.ts
│   ├── services/                 # API service functions (for React Query)
│   │   └── salary.service.ts
│   ├── types/                    # TypeScript type definitions
│   │   ├── salary.types.ts
│   │   ├── lifestyle.types.ts
│   │   └── offer.types.ts
│   ├── mocks/                    # Mock data
│   │   ├── salary.mock.ts
│   │   └── offers.mock.ts
│   ├── constants/                # App constants
│   │   ├── tax-slabs.ts
│   │   ├── city-tiers.ts
│   │   └── salary-components.ts
│   └── utils/                    # Pure utility functions
│       ├── format-currency.ts
│       ├── calculate-tax.ts
│       └── calculate-pf.ts
│
└── styles/
    └── globals.css               # Tailwind base + custom tokens
```

## Key Architectural Patterns

### Component Layering

```
ui/          → shadcn/ui primitives. Never modified directly. Extend via className.
shared/      → Composed from ui/ primitives. Reusable across features. Typed props.
features/    → Screen-specific components. Import from shared/ and ui/.
app/pages    → Thin orchestration. Compose feature components. Minimal logic.
```

### Form Architecture

```
Zod schema (lib/schemas/)
  → inferred TypeScript type via z.infer<>
  → useForm<SchemaType>({ resolver: zodResolver(schema) })
  → shadcn/ui FormField components
  → onSubmit writes to Zustand store or calls service
```

### State Separation

| What | Where |
|------|-------|
| User input state (CTC, city, regime) | Zustand store |
| Calculated results | Derived in hooks from store values |
| Server data (if/when API exists) | TanStack React Query |
| Form transient state | React Hook Form (local) |
| UI ephemeral state (modals, tabs) | React useState (local) |

### Naming Conventions

- Components: `PascalCase.tsx` (e.g., `StatCard.tsx` → renamed to `stat-card.tsx` for file, `StatCard` for export)
- Files: `kebab-case.ts` / `kebab-case.tsx`
- Schemas: `[feature].schema.ts`
- Stores: `use-[name]-store.ts`
- Hooks: `use-[name].ts`
- Types: `[domain].types.ts`
- Constants: `kebab-case.ts`

### Route Structure

| Route | Screen | Access |
|-------|--------|--------|
| `/` | Landing Page | Public |
| `/salary` | CTC Input | Public |
| `/salary/breakdown` | Free Salary Breakdown | Public |
| `/lifestyle` | Basic Lifestyle Check | Public |
| `/paywall` | Premium Upgrade | Public |
| `/premium` | Premium Dashboard | Premium |
| `/premium/lifestyle-planner` | Affordability Planner | Premium |
| `/premium/wealth-forecast` | Wealth Forecast | Premium |
| `/premium/offer-comparison` | Offer Comparison | Premium |
| `/premium/offer-score` | Side-by-Side Score | Premium |
| `/premium/emi-analyzer` | EMI Analyzer | Premium |

### Mock-First Approach

All calculations run client-side with mock data until a backend exists. Every service function should have a `// MOCK:` or `// API:` comment indicating its data source. Zustand stores persist user inputs across the session. No backend is required for Phase 1-4.

### Assumptions

- No authentication system yet. Premium gate is client-side flag in Zustand.
- All tax calculations use FY 2025-26 slabs (configurable in constants).
- No PDF upload parsing yet. Offer comparison uses manual input.
- No payment integration. Paywall is UI-only for now.
