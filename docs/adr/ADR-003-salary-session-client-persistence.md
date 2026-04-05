# ADR-003: Salary session client persistence (cookie + global hydrate)

**Status:** Accepted  
**Date:** 2026-04-05  

## Context

Premium users reload or deep-link to `/salary/premium/lifestyle`, `wealth-forecast`, `emi-analyzer`, etc. Zustand starts empty on full reload. Previously only the breakdown page ran cloud sync that fetched `SalarySessionDetail` and merged `input_json`, `breakdown_json`, and planning into stores. The nav could show CTC from elsewhere while planners showed ₹0 in-hand and the “Enter your CTC” nudge because they read only `breakdown?.monthlyInHand`. Local-only users had a cookie for the last history id; cloud users did not persist the active Supabase `salary_sessions.id`, so reload lost the active session unless `?session=` was present.

## Decision

1. **Single salary-session cookie** — Canonical name `inhand_last_salary_session` (see `SALARY_SESSION_COOKIE_PRIMARY`). Reads migrate once from legacy `inhand_active_salary_local` and `inhand_active_salary_cloud`. `clearAllWorkspaceSessionCookies` expires primary + legacy + offer workspace.

2. **Write semantics** — **Local tier:** write when `activeSalaryHistoryId` is valid in device history; clear when null or id missing from history. **Cloud tier:** write when `activeSalaryHistoryId` is a UUID; **do not** clear the cookie solely when active is null (avoids races with restore).

3. **Global hydrate** — `CloudSalaryWorkspaceSync` (root layout, inside `Suspense` for `useSearchParams`) sets active id from `?session=` or cookie after `authReady`, runs `useSalarySessionDetailQuery`, and calls **`applySalarySessionDetailToStores`** so every premium route gets the same merge as breakdown. Invalid session clears cookie + active and redirects off breakdown when appropriate. **`useSalaryBreakdownCloudSync`** does not duplicate restore, hydrate, or invalid-session handling — only breakdown autosave (PATCH) and baseline refs.

4. **Shared apply** — `applySalarySessionDetailToStores` dedupes by `session.id` + `updated_at`, merges salary stores, hydrates lifestyle from `planning.lifestyle_json`, and arms **`consumeSkipNextSalaryFlush`** for breakdown autosave. **`resetSalarySessionClientHydration`** runs on sign-out (with store/query reset).

5. **Planner display** — **`useResolvedMonthlyInHand`** prefers Zustand `breakdown.monthlyInHand` when &gt; 0, else `salary_sessions.monthly_in_hand` from the detail query. **`isRestoringSalaryContext`** includes **`!authReady`**, the cookie/`?session=` restore gap, and the query-loading window; **`PremiumPlannerSalaryGate`** renders skeletons (incl. **`WealthForecastPlannerSkeleton`** for title + horizon + body) so CTAs and manual in-hand fields do not flash. **`isHydratingCloudSalary`** remains the subset with `activeId` already set.

6. **Path helper** — **`isSalaryPremiumBreakdownPath`** in `salary-premium-paths.ts` avoids string duplication for redirect-on-error.

## Consequences

- **`WorkspaceSessionCookiesSync` must not run local-tier cookie clears until `authReady` and a resolved `user`**, because `shouldPersistSessions(null)` is false and would previously wipe `inhand_last_salary_session` while the profile was still loading; the same bug cleared the cookie when local restore ran with a cloud UUID absent from Dexie history.
- Reload and cross-navigation under `/salary/premium/*` stay aligned with the last active cloud session without requiring breakdown first.
- One extra detail query subscriber on premium routes (TanStack dedupes by key).
- Sign-out and invalid session must clear cookie + hydration guard to avoid restoring stale ids.
- Skeleton UX on EMI / monthly plan / wealth forecast avoids misleading empty-salary messaging during the first frames after reload.

## Related code

- [`app/src/lib/config/salary-premium-paths.ts`](../../app/src/lib/config/salary-premium-paths.ts)
- [`app/src/lib/persistence/workspace-session-cookies.ts`](../../app/src/lib/persistence/workspace-session-cookies.ts)
- [`app/src/components/providers/workspace-session-cookies-sync.tsx`](../../app/src/components/providers/workspace-session-cookies-sync.tsx)
- [`app/src/components/providers/cloud-salary-workspace-sync.tsx`](../../app/src/components/providers/cloud-salary-workspace-sync.tsx)
- [`app/src/lib/salary/apply-salary-session-detail-to-stores.ts`](../../app/src/lib/salary/apply-salary-session-detail-to-stores.ts)
- [`app/src/lib/hooks/use-resolved-monthly-in-hand.ts`](../../app/src/lib/hooks/use-resolved-monthly-in-hand.ts)
- [`app/src/components/shared/premium-planner-salary-gate.tsx`](../../app/src/components/shared/premium-planner-salary-gate.tsx)
- [`app/src/components/shared/loading-skeletons.tsx`](../../app/src/components/shared/loading-skeletons.tsx) (`PremiumPlannerSalaryContextSkeleton`, `WealthForecastPlannerSkeleton`)
- [`app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts`](../../app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts)

## Related ADRs

- [ADR-002: Session save](ADR-002-session-save.md)
