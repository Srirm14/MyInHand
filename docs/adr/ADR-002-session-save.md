# ADR-002: Session save — draft vs baseline, partial PATCH, cache discipline

**Status:** Accepted  
**Date:** 2026-04-04  

## Context

Salary breakdown, offer comparison, and lifestyle planning persist to Supabase. We need minimal network use, no stale async overwrites, and predictable TanStack Query behavior.

## Decision

1. **Draft vs baseline** — Editable UI state is the draft; after hydrate or a successful write, **server row (or fingerprint)** is the baseline. Saves run only when draft ≠ baseline.

2. **Salary** — `diffSalarySessionRow` produces a **partial** `UPDATE`; if nothing changed, the mutation resolves from **cache** (no HTTP). **`onSuccess`** advances baseline from the **response row**. **`createSaveFlightSequence`** ensures only the latest in-flight save updates baseline refs.

3. **Offers** — Persistence remains **replace children** for simplicity. **Fingerprint** skips redundant writes; **save flight** avoids stale `.then` updates. **`onSuccess`** uses **`setQueryData`** for detail + list (no root `invalidateQueries` after autosave).

4. **Lifestyle** — Debounced upsert only when **`JSON.stringify(expenses)`** differs from server `planning.lifestyle_json` baseline; baseline from **`useSalarySessionDetailQuery`**.

5. **Reads** — Session list/detail queries use longer **`staleTime`** and **`refetchOnWindowFocus: false`**. Global query defaults align similarly.

6. **Auth** — **`TOKEN_REFRESHED`** does not invalidate salary/offer roots. **Sign-out** clears salary Zustand and removes session queries.

## Consequences

- Fewer PATCH/GETs; calmer UI.
- Multi-tab conflicts not fully solved (optional later: `updated_at` checks).

## Related code

- [`app/src/lib/salary/session-save/salary-session-save-logic.ts`](../../app/src/lib/salary/session-save/salary-session-save-logic.ts)
- [`app/src/lib/persistence/save-flight-sequence.ts`](../../app/src/lib/persistence/save-flight-sequence.ts)
- [`app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts`](../../app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts)
- [`app/src/lib/supabase/hooks/use-salary-sessions.ts`](../../app/src/lib/supabase/hooks/use-salary-sessions.ts)
- [`app/src/lib/supabase/hooks/use-offer-sessions.ts`](../../app/src/lib/supabase/hooks/use-offer-sessions.ts)
