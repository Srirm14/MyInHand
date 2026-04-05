# Client sync, access, and UX conventions

Practical reference for premium gating, auth, session routing, cloud sync, API minimization, loading UI, and notifications. Pair with [ADR-002](./adr/ADR-002-session-save.md) (session save) and [ADR-003](./adr/ADR-003-salary-session-client-persistence.md) (cookie + global hydrate).

---

## Access mode and premium resolution

**Source of truth (client):** [`hasPremiumProductAccess`](../app/src/lib/access/product-access.ts) in `lib/access/product-access.ts`.

1. If `NEXT_PUBLIC_ACCESS_MODE=premium` (see [`getPremiumUnlockedFromEnv`](../app/src/lib/config/access-mode.ts)), every signed-in user gets premium **product** UX (nav, tools, cloud saves).
2. Otherwise, premium requires `profiles.plan_tier === 'premium'` on the loaded `UserProfile`.

**Cloud persistence gate:** [`shouldPersistSessions`](../app/src/lib/supabase/persistence-gate.ts) is true only when the user is signed in, Supabase is configured, **and** `hasPremiumProductAccess(user.planTier)` is true. Salary/offer session list + detail queries and autosave hooks respect this.

Do not gate product features on env-only flags without also considering `planTier` unless you intentionally mirror `hasPremiumProductAccess`.

---

## Auth hydration and no-login-flash

**Component:** [`AuthSync`](../app/src/components/providers/auth-sync.tsx) in the root layout.

- On mount, calls `refreshProfileFromAuthUser` when Supabase is configured; otherwise marks `authReady` immediately.
- Subscribes to `onAuthStateChange`:
  - **SIGNED_OUT:** clears user, resets salary store, removes salary/offer queries from the cache.
  - **TOKEN_REFRESHED:** refreshes profile **without** invalidating salary/offer roots (avoids refetch storms on token rotation).
  - Other events: refresh profile and invalidate salary/offer session roots so lists stay fresh after sign-in.

**Profile page:** Waits on `authReady` and `user`; shows [`ProfilePageSkeleton`](../app/src/components/shared/loading-skeletons.tsx) until both are ready, then redirects unauthenticated users to login. This avoids flashing empty profile state.

---

## Salary selected-session routing

- **Active session id** lives in Zustand: `useSalaryStore.activeSalaryHistoryId`.
- **Canonical URLs:** Premium planners live under **`/salary/premium/*`** (breakdown, lifestyle, wealth forecast, EMI, offer comparison). Legacy `/lifestyle`, `/salary/breakdown`, `/premium/*` **redirect** in `next.config.ts`.
- **Cookie (`inhand_last_salary_session`):** Last active session UUID for local **or** cloud. [`WorkspaceSessionCookiesSync`](../app/src/components/providers/workspace-session-cookies-sync.tsx) writes it when tier is known; it **does not** clear the salary cookie until `authReady` and a resolved `user` (avoids treating “profile still loading” as local free tier and wiping the cookie). **Sign-out** clears all workspace cookies.
- **Global cloud hydrate:** [`CloudSalaryWorkspaceSync`](../app/src/components/providers/cloud-salary-workspace-sync.tsx) (root layout, `Suspense` for `useSearchParams`) runs when `shouldPersistSessions` is true: after `authReady`, sets active id from **`?session=`** or the cookie, fetches `SalarySessionDetail`, applies [`applySalarySessionDetailToStores`](../app/src/lib/salary/apply-salary-session-detail-to-stores.ts). **Invalid session** (query error): clear cookie + active id; if on breakdown, redirect to `/salary`.
- **Breakdown-only autosave:** [`useSalaryBreakdownCloudSync`](../app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts) — debounced PATCH, baseline refs, save-flight. It does **not** duplicate session restore or invalid-session redirect (owned by `CloudSalaryWorkspaceSync`). **`?session=`** still wins for `effectiveId` on first paint so the detail query can run before the store is updated.
- **Planner in-hand display:** [`useResolvedMonthlyInHand`](../app/src/lib/hooks/use-resolved-monthly-in-hand.ts) — prefer Zustand breakdown in-hand, else `salary_sessions.monthly_in_hand` from detail query. **`isRestoringSalaryContext`** is true while **`!authReady`**, during the “restore gap” (`activeId` still null while cookie or `?session=` exists), or while the detail query is loading with no in-hand yet — [`PremiumPlannerSalaryGate`](../app/src/components/shared/premium-planner-salary-gate.tsx) swaps in skeletons (`PremiumPlannerSalaryContextSkeleton`, `WealthForecastPlannerSkeleton`) so yellow CTAs and manual in-hand inputs do not flash. **`isHydratingCloudSalary`** remains the narrower “query in flight with active id” flag.
- **Switching sessions:** Navbar, history, recents set active id and push `salaryPremiumBreakdownHref(id)` (or equivalent) when persisting; otherwise local snapshot + `salaryPremiumBreakdownHref()` without query.
- **New run from CTC:** [`ctc-input-form`](../app/src/components/features/salary/ctc-input-form.tsx) creates cloud session or local history entry, sets active id, navigates with `?session=` when applicable.

---

## Salary, offer, and lifestyle autosave / sync

| Area | Hook / view | Behavior summary |
|------|-------------|------------------|
| Salary breakdown | `useSalaryBreakdownCloudSync` + layout `CloudSalaryWorkspaceSync` | Global hydrate + cookie restore in layout; breakdown hook: debounced autosave, **partial PATCH**, baseline/signature, save-flight. |
| Offer comparison | `offer-comparison-view` | Debounced upsert; fingerprint skips redundant writes; save-flight for latest `.then`; cache updated with `setQueryData`. |
| Monthly plan | `monthly-plan-view` | Debounced `upsertSalaryPlanning` when lifestyle JSON fingerprint differs from server planning row. |

Details and tradeoffs: [ADR-002](./adr/ADR-002-session-save.md).

---

## Reduced API traffic strategy

- **Partial updates:** Salary session updates send only changed columns when draft ≠ baseline (`diffSalarySessionRow`). Empty diff resolves from cache with **`didWrite: false`** (no HTTP); UI toasts use this to avoid “autosaved” when nothing was written.
- **Query temperament:** List/detail session queries use long `staleTime`, `refetchOnWindowFocus: false`, `refetchOnReconnect: false` (see `use-salary-sessions` / `use-offer-sessions` and query provider defaults).
- **Auth:** No salary/offer root invalidation on `TOKEN_REFRESHED`.
- **Effects:** Autosave effects depend on **content fingerprints** (e.g. `JSON.stringify` snapshots), not whole query objects, so `setQueryData` does not constantly reset debounce timers.

---

## Dirty state and partial updates

- **Draft** = live Zustand (and offer local state). **Baseline** = last hydrated or successfully persisted snapshot (refs + fingerprints).
- **Salary:** Baseline refs updated from the **client payload** on successful mutation; hydrate applies server rows with **`setState` full replace** (not `setInput` merge) so optional keys do not linger and cause false dirty state.
- **Offers / lifestyle:** Fingerprint or serialized JSON compared to server-derived baseline before calling mutate.

---

## Loading and skeleton usage

- **Pattern:** Route-level or heavy views use dedicated skeletons from [`loading-skeletons.tsx`](../app/src/components/shared/loading-skeletons.tsx) (e.g. `ProfilePageSkeleton`, `SalaryHistoryRowsSkeleton`, `SalaryBreakdownSkeleton`) when `authReady`, query `isPending`, or `cloudHydrating` warrants it.
- **Salary breakdown cloud:** `cloudHydrating` from `useSalaryBreakdownCloudSync` gates premature redirect when detail is still loading.
- **Save affordance:** [`SaveProgressCta`](../app/src/components/shared/save-progress-cta.tsx) / delayed pending flags (e.g. `useDelayedTrue` on mutation pending) avoid flickery “Saving…” text.

---

## Toast notifications (`appToast` + Sonner)

**Host:** [`Toaster`](../app/src/components/ui/sonner.tsx) in root layout (Sonner, **top-right** under the navbar, InHand navy/teal styling).

**API:** [`app-notify.ts`](../app/src/lib/notify/app-notify.ts) — export **`appToast`**. All user-facing strings live in the internal **`COPY`** map; feature code calls **semantic methods only** (no ad hoc `toast("…")` strings).

| Namespace | Methods (examples) |
|-----------|-------------------|
| `appToast.salarySession` | `.opened()`, `.deleted()`, `.created()`, `.autosaved()` |
| `appToast.offerComparison` | `.opened()`, `.deleted()`, `.autosaved()` |
| `appToast.monthlyPlan` | `.autosaved()` |
| `appToast.profile` | `.updated()` |
| `appToast.persistence` | `.removedFromDevice()`, `.cloudUnavailableLocalFallback()` |
| `appToast.errors` | `.salarySessionDeleteFailed()`, `.offerComparisonDeleteFailed()` |

**Guidelines**

- Prefer **inline form errors** for validation (e.g. profile) and reserve toasts for **confirmed outcomes** or **actionable failures**.
- Do **not** toast on login/signup success (redirect and page state are enough), token refresh, or every keystroke.
- Autosave: only toast when a **real write** occurred (salary: `didWrite`; offer: mutate only runs after fingerprint check). `.autosaved()` methods are **throttled** (~50s per channel) with a stable toast `id`.

---

## Delayed work (no scattered timers)

Wall-clock delays (debounced autosave, “saving” delay, CSV blob revoke, mock parse latency) should use:

- **`deferExecution(ms, fn)`** from [`defer-execution.ts`](../app/src/lib/scheduling/defer-execution.ts) — returns a cancel function; use as `useEffect` cleanup for debouncing.
- **`waitForMs(ms)`** — Promise helper for mocks/tests (built on `deferExecution`).

**Do not** call `setTimeout` / `clearTimeout` directly in feature code; keep timing in that module so behavior stays auditable.

**Totals “flash”** on salary/offer stat strips uses the **`inhand-totals-flash`** CSS animation plus **`useTotalsSectionFlash`** ([`use-totals-section-flash.ts`](../app/src/lib/hooks/use-totals-section-flash.ts)) — no timers.

Scroll-after-compare in offer comparison uses **double `requestAnimationFrame`** so layout is ready without an arbitrary ms delay.

---

## Related files (quick index)

| Topic | File |
|-------|------|
| Premium + persistence gate | `app/src/lib/access/product-access.ts`, `app/src/lib/supabase/persistence-gate.ts` |
| Auth sync | `app/src/components/providers/auth-sync.tsx` |
| Workspace session cookies | `app/src/components/providers/workspace-session-cookies-sync.tsx`, `app/src/lib/persistence/workspace-session-cookies.ts` |
| Cloud salary workspace | `app/src/components/providers/cloud-salary-workspace-sync.tsx` |
| Salary breakdown autosave | `app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts` |
| Salary session hydrate helper | `app/src/lib/salary/apply-salary-session-detail-to-stores.ts` |
| Resolved in-hand (planners) | `app/src/lib/hooks/use-resolved-monthly-in-hand.ts` |
| Salary mutations | `app/src/lib/supabase/hooks/use-salary-sessions.ts` |
| Offer mutations | `app/src/lib/supabase/hooks/use-offer-sessions.ts` |
| Session save ADR | `docs/adr/ADR-002-session-save.md` |
| Client salary session ADR | `docs/adr/ADR-003-salary-session-client-persistence.md` |
| Notifications | `app/src/lib/notify/app-notify.ts`, `app/src/components/ui/sonner.tsx` |
| Deferred execution | `app/src/lib/scheduling/defer-execution.ts` |
| Totals flash (CSS) | `app/src/lib/hooks/use-totals-section-flash.ts`, `app/src/app/globals.css` (`inhand-totals-flash`) |
