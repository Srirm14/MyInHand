# Client sync, access, and UX conventions

Practical reference for premium gating, auth, session routing, cloud sync, API minimization, loading UI, and notifications. Pair with [ADR-002](./adr/ADR-002-session-save.md) for session-save architecture decisions.

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
- **URL:** Cloud users use `/salary/breakdown?session=<uuid>`. [`useSalaryBreakdownCloudSync`](../app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts) reads `?session=`, sets active id when persisting, and loads detail from TanStack Query.
- **Switching sessions:** Navbar dropdown, history page, recent-activity sheet, and hub recents set active id and `router.push` with `?session=` when `shouldPersistSessions` is true; otherwise they hydrate from local snapshot and push `/salary/breakdown` without query.
- **New run from CTC form:** [`ctc-input-form`](../app/src/components/features/salary/ctc-input-form.tsx) creates a cloud session (or local history entry), sets active id, then navigates with `?session=` when applicable.

---

## Salary, offer, and lifestyle autosave / sync

| Area | Hook / view | Behavior summary |
|------|-------------|------------------|
| Salary breakdown | `useSalaryBreakdownCloudSync` | Debounced autosave; **partial PATCH** via `diffSalarySessionRow`; baseline and signature aligned with **client store** after save/hydrate to avoid PATCH loops; save-flight discards stale callbacks. |
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
| Salary cloud sync | `app/src/lib/hooks/use-salary-breakdown-cloud-sync.ts` |
| Salary mutations | `app/src/lib/supabase/hooks/use-salary-sessions.ts` |
| Offer mutations | `app/src/lib/supabase/hooks/use-offer-sessions.ts` |
| Session save ADR | `docs/adr/ADR-002-session-save.md` |
| Notifications | `app/src/lib/notify/app-notify.ts`, `app/src/components/ui/sonner.tsx` |
| Deferred execution | `app/src/lib/scheduling/defer-execution.ts` |
| Totals flash (CSS) | `app/src/lib/hooks/use-totals-section-flash.ts`, `app/src/app/globals.css` (`inhand-totals-flash`) |
