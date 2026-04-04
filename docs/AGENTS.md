# AGENTS.md — Working Guide for Claude Code & AI Agents

## Project: InHand (salary intelligence SaaS)

Desktop-first salary intelligence SaaS for Indian salaried employees. Light-mode only, teal-based premium aesthetic.

## How to Work in This Repo

1. **Read this file first** before any task.
2. **Check `ARCHITECTURE.md`** for folder structure, routes, and conventions.
3. **Check `DESIGN_SYSTEM.md`** before creating any UI component.
4. **Check `PRODUCT_FLOW.md`** before implementing any screen.
5. **Check `SALARY_COMPONENTS.md`** before touching breakdown table logic.

## Key Codebase Facts

- **Source** lives under `app/src/` (see root **`README.md`** tree); file count drifts with features.
- **6 Zustand stores:** auth, salary, lifestyle, history, offer-comparison-restore, **premium-plans-modal** (open/close + `fromPremium` for contextual copy). Plus **`salary-breakdown-recalc-context`** (helper, not a store).
- **4 Zod schemas:** auth, ctc-input, lifestyle, offer.
- **3 access tiers:** anonymous, signed-in free, signed-in premium.
- **Brand name:** "InHand" (not "The Fluid Ledger" — that was a design mockup name).
- **Premium gate:** env `NEXT_PUBLIC_ACCESS_MODE=premium` + session cookie where middleware requires it. Unset env = free tier (not premium) in development too.
- **Premium plans UI (free tier):** Shared **`PremiumPlansModal`** mounted via **`PremiumPlansModalHost`** in root layout. Open from anywhere with **`openPremiumPlansModal()`** / **`closePremiumPlansModal()`** from `use-premium-plans-modal-store` (or the store hook). **`/paywall`** is a thin route that syncs the same modal open; closing from paywall navigates back to **`/salary`**. **`PremiumBlurOfferTeaser`** (marketing, calculator aside, offer comparison when manual + 2+ valid offers) blurs faux metrics and opens that modal.
- **Auth & cloud data:** **Supabase** (email/password, session cookies via `@supabase/ssr`). **`use-auth-store`** mirrors `profiles` + `auth.users`. Salary/offer sessions use **TanStack Query** + partial PATCH autosave when Supabase is configured; see **`docs/inhand-client-sync-ux.md`** and **ADR-002**.

## Planning Rules

- **Summarize your plan** in 3–5 bullets before writing code for any feature.
- **Ask for clarification** when: requirements are ambiguous, a screen has no design reference, or business logic has multiple valid interpretations.
- **Do not guess backend behavior.** If you assume an API shape, add `// ASSUMPTION:` comment.

## Credit & Token Efficiency

- **Only read files relevant to the current task.** Do not scan the whole codebase.
- **Reuse existing components.** Check `src/components/shared/` and `src/components/ui/` first.
- **Do not rewrite stable files** unless the task explicitly requires it.
- **Keep responses action-oriented.** Code and concise explanation, not essays.
- **No speculative implementation.** Only build what is asked for.

## Implementation Rules

- **Incremental delivery.** One screen or feature per task.
- **Verify before claiming done:** Does it render? Does TS compile? Are props typed? Does it match screenshots?
- **Prefer reusable patterns** over one-off code. If you build something twice, extract it.
- **Follow component layering:** `ui/` (shadcn primitives) → `shared/` (composed) → `features/` (screen-specific) → `app/` (route pages, thin).

## UI & Design Rules

- Follow `DESIGN_SYSTEM.md` for all colors, spacing, typography, and patterns.
- Match provided screenshots as closely as possible.
- **Do not invent colors, fonts, or spacing** outside the design system.
- Light mode only. No dark mode.
- Use Lucide React for all icons. No other icon libraries.
- Indian number formatting: `₹1,42,500` via `Intl.NumberFormat('en-IN')`.
- LPA format for nav/summaries: `formatCTCAsLPA()` from `lib/utils/format-currency.ts`.

## Code Conventions

- Components: PascalCase export, `kebab-case.tsx` filename.
- Schemas: `src/lib/schemas/[feature].schema.ts` with Zod.
- Stores: `src/lib/stores/use-[name]-store.ts` with Zustand.
- Hooks: `src/lib/hooks/use-[name].ts`.
- Types: `src/lib/types/[domain].types.ts`.
- Mocks: `src/lib/mocks/[feature].mock.ts`.
- Utils: `src/lib/utils/[name].ts` — pure functions, no React.
- Constants: `src/lib/constants/[name].ts`.

## `/salary` route

- **`PREMIUM_UNLOCKED`:** **`CtcInputForm`** (legacy name/CTC → breakdown). **`default` / paywall:** **`SalaryCalculatorScreen`** (free calculator only).
- **Free calculator** — **`lib/simple-salary-calculator/`** + **`sync-compensation-split.ts`**: total CTC field keeps fixed/variable in sync; **dual** in-hand; TDS on fixed vs fixed+variable (no separate deductions table on `/salary`).
- Syncs `annualCTC`, `taxRegime`, `compensationMode: "fixed_variable"`, `fixedAnnual`, `variableAnnual` into `use-salary-store`.
- Full component table: **`/salary/detailed`** → **`/salary/breakdown`** (or premium path from **`CtcInputForm`**).

## Nav Architecture (important)

- **SalaryNavItem** (`components/layout/salary-nav-item.tsx`): Smart context-aware nav.
  - No CTC: shows "Salary"
  - CTC entered: shows "Salary (25 LPA)"
  - Premium build (`PREMIUM_UNLOCKED`): label + chevron menu (last 5 salary rows, New in-hand check, etc.). Default/free build: static Salary link, no nav switcher
  - Free / anonymous: static label only
- **Premium nav:** **Offer comparison** in the header + **Premium** crown (shortcut to `/premium/offer-comparison`); only for premium signed-in users. Wealth forecast and EMI remain reachable from breakdown / lifestyle CTAs and deep URLs.
- **History sheet** (`recent-history-sheet.tsx`): premium-only right drawer, last 5 mixed entries; trash removes salary (`RemoveSalaryEntryDialog`) or offer comparison (`RemoveOfferComparisonEntryDialog`).
- **`useTieredPremiumLinks()`**: routes anon → login, free → paywall, premium → tool; `hubHref()` when unlocked → `/premium/offer-comparison`.

## Documentation Rules

- Update `ARCHITECTURE.md` if you add a new folder, store, or convention.
- Update `DESIGN_SYSTEM.md` if you add a new token or pattern.
- Update `PRODUCT_FLOW.md` if screen requirements change.
- Keep all docs concise. No bloat.
