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
│   ├── page.tsx                  # Landing page (public)
│   ├── login/, signup/, forgot-password/  # Auth (public)
│   ├── profile/                  # Lightweight profile (protected)
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
│   ├── features/                 # Screen-level compositions (landing, salary, lifestyle)
│   ├── shared/                   # Composed reusable components
│   │   ├── stat-card.tsx
│   │   ├── feature-card.tsx
│   │   ├── badge-label.tsx
│   │   ├── currency-display.tsx
│   │   ├── slider-card.tsx
│   │   ├── section-header.tsx
│   │   ├── segmented-selector.tsx
│   │   └── donut-gauge.tsx
│   ├── auth/                     # Auth page shell (shared card layout)
│   ├── providers/                # Client providers (e.g. auth cookie sync)
│   └── layout/
│       ├── navbar.tsx
│       ├── footer.tsx
│       └── page-shell.tsx
│
├── lib/
│   ├── auth/                     # Client session cookie helpers (demo; use HttpOnly + API in prod)
│   ├── schemas/                  # Zod schemas
│   │   ├── auth.schema.ts
│   │   ├── ctc-input.schema.ts
│   │   ├── lifestyle.schema.ts
│   │   └── offer.schema.ts
│   ├── stores/                   # Zustand stores
│   │   ├── use-salary-store.ts
│   │   ├── use-lifestyle-store.ts
│   │   ├── use-premium-store.ts
│   │   └── use-auth-store.ts     # Persisted demo auth (replace with real API)
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-salary-calculation.ts
│   │   ├── use-tax-calculation.ts
│   │   └── use-currency-format.ts
│   ├── services/                 # API service functions (for React Query)
│   │   └── salary.service.ts
│   ├── types/                    # TypeScript type definitions
│   │   ├── salary.types.ts
│   │   ├── lifestyle.types.ts
│   │   ├── offer.types.ts
│   │   └── user.types.ts
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
| `/login`, `/signup`, `/forgot-password` | Auth | Public |
| `/salary` | CTC Input | **Signed-in** (middleware + `fl_session_email`) |
| `/salary/breakdown` | Free Salary Breakdown | **Signed-in** |
| `/lifestyle` | Basic Lifestyle Check | **Signed-in** |
| `/profile` | Profile | **Signed-in** |
| `/paywall` | Premium Upgrade | Public |
| `/premium` | Premium Dashboard | **Signed-in** + Premium |
| `/premium/lifestyle-planner` | Affordability Planner | **Signed-in** + Premium |
| `/premium/wealth-forecast` | Wealth Forecast | **Signed-in** + Premium |
| `/premium/offer-comparison` | Offer Comparison | **Signed-in** + Premium |
| `/premium/offer-score` | Side-by-Side Score | **Signed-in** + Premium |
| `/premium/emi-analyzer` | EMI Analyzer | **Signed-in** + Premium |

`middleware.ts` (Next root under `app/`) redirects unauthenticated users to `/login?from=…`. Demo auth is persisted in `use-auth-store` + a non-HttpOnly session cookie for the gate; replace with a real auth API for production.

### Mock-First Approach

All calculations run client-side with mock data until a backend exists. Every service function should have a `// MOCK:` or `// API:` comment indicating its data source. Zustand stores persist user inputs across the session. No backend is required for Phase 1-4.

### Assumptions

- Authentication is **demo-local** (Zustand persist + session cookie marker). Swap for OAuth/password API + HttpOnly cookies when backend exists. Premium gate remains client-side (`NEXT_PUBLIC_ACCESS_MODE` / store) on top of sign-in.
- All tax calculations use FY 2025-26 slabs (configurable in constants).
- No PDF upload parsing yet. Offer comparison uses manual input.
- No payment integration. Paywall is UI-only for now.
