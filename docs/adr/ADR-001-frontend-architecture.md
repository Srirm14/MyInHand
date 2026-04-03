# ADR-001: Frontend Architecture for InHand

**Status:** Accepted
**Date:** 2026-04-03
**Deciders:** Sriram V (Owner/Lead)

## Context

Building a production-quality desktop-first SaaS for Indian salary intelligence. The app has a clear free → premium funnel with 14 screens, complex financial calculations, multiple forms, and data-dense dashboards. We need an architecture that:
- Scales from 6 free screens to 14+ premium modules
- Keeps bundle size lean (code-split premium routes)
- Enables fast iteration with reusable components
- Handles complex form state + derived calculations cleanly
- Works entirely client-side initially (no backend yet)

## Decision

**Next.js App Router + Feature-based architecture with strict component layering.**

### Core Architecture

```
┌─────────────────────────────────────────────┐
│                  App Router                  │
│         (thin pages, route segments)         │
├─────────────────────────────────────────────┤
│              Feature Modules                 │
│    (salary, lifestyle, premium, offers)      │
├──────────────┬──────────────────────────────┤
│  Shared UI   │      Business Logic          │
│  Components  │  ┌────────┬────────────────┐ │
│  (composed)  │  │ Stores │ Calculations   │ │
│              │  │Zustand │ Pure functions  │ │
├──────────────┤  ├────────┼────────────────┤ │
│   UI Layer   │  │Schemas │ Types/Constants│ │
│  (shadcn/ui) │  │  Zod   │               │ │
└──────────────┴──┴────────┴────────────────┘
```

### State Architecture

| Concern | Solution | Why |
|---------|----------|-----|
| User inputs (CTC, city, regime) | Zustand `use-salary-store` | Persists across route navigation, shared by multiple screens |
| Monthly plan amounts | Zustand `use-lifestyle-store` | Surplus calc + EMI planner living expenses + premium depth |
| Offer data | Zustand `use-offers-store` | Array of offers, shared across comparison + scoring |
| Premium gate | Zustand `use-auth-store` | Simple boolean flag until real auth exists |
| Derived calculations | Custom hooks (`use-salary-calculation`) | Compute from store values, memoized, testable |
| Form transient state | React Hook Form (local) | No need to persist mid-edit form state globally |
| Future API data | TanStack React Query | Ready for when backend exists, handles caching/stale |

### Component Layering (strict)

```
Layer 1: ui/           → shadcn/ui primitives. NEVER modify source. Extend via className/variants.
Layer 2: shared/       → Composed reusable components (StatCard, CurrencyDisplay, etc.)
Layer 3: features/     → Screen-specific compositions. Import from L1 + L2 only.
Layer 4: app/pages     → Route handlers. Compose L3 components. Zero business logic.
```

**Rule:** No component may import from a peer or higher layer. Dependencies flow downward only.

### Form Architecture

```
schema (Zod) → type (z.infer) → useForm(resolver) → FormField (shadcn) → onSubmit → store
```

Every form follows this exact pattern. Schemas are the single source of truth for validation AND types.

## Options Considered

### Option A: Feature-based with App Router (Selected)

| Dimension | Assessment |
|-----------|------------|
| Complexity | Medium |
| Code splitting | Automatic via route segments |
| Scalability | High — add features as new folders |
| Team familiarity | High (standard Next.js patterns) |

**Pros:** Natural code splitting, colocation of related code, scales well, standard patterns.
**Cons:** Requires discipline to maintain layering rules.

### Option B: Pages Router with barrel exports

| Dimension | Assessment |
|-----------|------------|
| Complexity | Low |
| Code splitting | Manual via dynamic imports |
| Scalability | Medium — flat structure gets messy |
| Team familiarity | High |

**Pros:** Simpler mental model initially.
**Cons:** No layouts, no streaming, manual code splitting, less future-proof.

### Option C: Monorepo with separate packages

| Dimension | Assessment |
|-----------|------------|
| Complexity | High |
| Code splitting | Manual package boundaries |
| Scalability | Very high |
| Team familiarity | Low (overkill for single app) |

**Pros:** Maximum separation, independent versioning.
**Cons:** Massive overhead for a single product, slower iteration.

## Trade-off Analysis

Feature-based App Router wins because:
1. **Premium routes are naturally code-split** — `/premium/*` segments only load when accessed
2. **Layouts share nav/shell** without prop drilling
3. **Colocation** keeps salary logic near salary UI
4. **No premature complexity** — can always extract to packages later

## Consequences

- **Easier:** Adding new premium modules, sharing layout, lazy loading premium code
- **Harder:** Must maintain component layering discipline manually
- **Revisit when:** Backend API exists (add React Query layer), auth system needed (add middleware), mobile app needed (extract shared logic to packages)

## Action Items

1. [x] Create project context docs (AGENTS, DESIGN_SYSTEM, etc.)
2. [ ] Scaffold Next.js project with App Router
3. [ ] Configure Tailwind with design tokens
4. [ ] Build shared component library (Layer 2)
5. [ ] Implement Zustand stores with typed schemas
6. [ ] Build free flow (Landing → Input → Breakdown → Monthly plan)
7. [ ] Build premium flow with client-side gate
