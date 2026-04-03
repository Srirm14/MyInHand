# AGENTS.md — Working Guide for Claude Code & AI Agents

## Project: The Fluid Ledger (Inhand)

Salary intelligence SaaS for Indian salaried employees. Desktop-first, light-mode, premium aesthetic.

## How to Work in This Repo

1. **Read this file first** before any task.
2. **Check `ARCHITECTURE.md`** for folder structure and conventions.
3. **Check `DESIGN_SYSTEM.md`** before creating any UI component.
4. **Check `PRODUCT_FLOW.md`** before implementing any screen.

## Planning Rules

- **Summarize your plan** in 3-5 bullets before writing code for any feature.
- **Ask for clarification** when: requirements are ambiguous, a screen has no design reference, or business logic has multiple valid interpretations.
- **Do not guess backend behavior.** If you assume an API shape, add a `// ASSUMPTION:` comment and note it in your plan summary.

## Credit & Token Efficiency

- **Only read files relevant to the current task.** Do not scan the whole codebase.
- **Reuse existing components.** Check `src/components/ui/` and `src/components/shared/` before creating new ones.
- **Do not rewrite stable files** unless the task explicitly requires changes to them.
- **Keep responses action-oriented.** Code and concise explanation, not essays.
- **No speculative implementation.** Only build what is asked for.

## Implementation Rules

- **Incremental delivery.** One screen or feature per task. Verify it works before moving on.
- **Verify before claiming done:** Does it render? Does TypeScript compile? Are props typed? Does it match the design reference?
- **Prefer reusable patterns** over one-off code. If you build something twice, extract it.
- **Follow the component layering:** `ui/` (primitives) → `shared/` (composed) → `features/` (screen-specific).

## UI & Design Rules

- Follow `DESIGN_SYSTEM.md` for all colors, spacing, typography, and component patterns.
- Match the provided screenshots as closely as possible.
- **Do not invent colors, fonts, or spacing values** outside the design system.
- Light mode only. No dark mode.
- Use Lucide React for all icons. No other icon libraries.

## Code Conventions

- All components: PascalCase files, named exports.
- All schemas: `src/lib/schemas/` with Zod, named `[feature].schema.ts`.
- All stores: `src/lib/stores/` with Zustand, named `use-[name]-store.ts`.
- All hooks: `src/lib/hooks/`, named `use-[name].ts`.
- All types: `src/lib/types/`, named `[domain].types.ts`.
- All mock data: `src/lib/mocks/`, named `[feature].mock.ts`.

## Documentation Rules

- Update `ARCHITECTURE.md` if you add a new folder or convention.
- Update `DESIGN_SYSTEM.md` if you add a new token or pattern.
- Update `PRODUCT_FLOW.md` if screen requirements change.
- Keep all docs concise. No bloat.
