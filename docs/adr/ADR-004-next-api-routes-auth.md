# ADR-004: Next.js Route Handlers (`/api`) — auth and middleware bypass

**Status:** Accepted  
**Date:** 2026-04-06  
**Deciders:** Engineering (owner sign-off on first real `/api` route)

## Context

`app/middleware.ts` returns `NextResponse.next()` for any path under **`/api`** without calling `updateSession` (Supabase cookie refresh, user resolution, or premium redirects). That matches a common Next.js pattern: keep middleware fast and avoid running heavy auth on webhooks, static asset–like endpoints, or handlers that use a different auth model.

**Consequence:** Route Handlers under `app/src/app/api/**` do **not** inherit page-route protection. Today the app has **no** such routes; data access is mostly **browser Supabase** with RLS. Adding `route.ts` files without explicit rules risks **accidental public endpoints** or **stale session cookies** (no automatic refresh on the API request path).

## Decision

1. **Keep the `/api` bypass** in middleware unless there is a targeted exception (e.g. a single subtree that must refresh cookies—prefer handling refresh inside that subtree’s handler instead of widening middleware).

2. **Every new Route Handler must document its auth model** in a file-level comment (two lines minimum): **who may call it** (public / signed-in / premium / system) and **how identity is established** (cookies + `getUser`, `Authorization: Bearer`, signed webhook secret, etc.).

3. **Authenticated browser calls (same app):** Use the server Supabase client (`createServerSupabaseClient` from `@/lib/supabase/client/server`), then **`getUser()`** (or the session pattern Supabase recommends for Route Handlers). Treat **RLS** as the second line of defense; the handler must still return **`401`** / **`403`** when the operation is not allowed, not rely on opaque DB errors alone.

4. **Premium-only operations:** Mirror the product rule used in middleware: require a signed-in user and, unless `NEXT_PUBLIC_ACCESS_MODE=premium` (env unlock), **`plan_tier === 'premium'`** on `profiles` (reuse or extract the same logic as `hasPremiumPlan` in `middleware.ts` if you add a shared helper—avoid duplicating business rules in divergent ways).

5. **Public endpoints** (health, signed webhooks, OAuth callbacks): **Allowed only with an explicit ADR note or PR rationale.** Webhooks and third-party callbacks must validate **signatures or secrets**, never trust cookies alone.

6. **Session refresh:** Because middleware skips `/api`, a long-lived tab calling only APIs may not refresh cookies as often as full page navigations. If you add cookie-based API routes that must see fresh sessions, either invoke Supabase refresh inside the handler where the SSR client supports it, or document that clients should rely on **navigation** or **explicit client refresh** before sensitive API calls.

## Options Considered

### Option A: Keep bypass + enforce auth in handlers (chosen)

| Dimension | Assessment |
|-----------|------------|
| Complexity | Low–medium per route |
| Cost | No extra infra |
| Scalability | Fine for typical BFF-style usage |
| Team familiarity | Standard Next + Supabase |

**Pros:** Clear ownership per route; webhooks stay simple; no middleware bloat.  
**Cons:** Easy to forget auth on a new file; requires discipline and review.

### Option B: Remove `/api` from middleware skip and run `updateSession` for all `/api`

**Pros:** Cookie refresh aligned with pages; single gate.  
**Cons:** Runs on every API hit (including webhooks and public health checks); need exclude list for paths that must not touch Supabase; more coupling.

### Option C: Narrow matcher (only `/api/protected/**` through middleware)

**Pros:** Hybrid.  
**Cons:** Two mental models; matcher drift as routes multiply.

## Trade-off Analysis

Option A keeps middleware predictable and forces each Route Handler to state what it expects. The main risk is human error; mitigation is **mandatory file comment + code review checklist** and, once a second authenticated route exists, a small shared helper (e.g. `requireSession()`, `requirePremium()`).

## Consequences

- New **`route.ts`** files are **not** protected by default; reviewers should verify auth and response shape.
- **`inhand-backend-api-spec.md`** remains the notional REST map; actual Route Handlers should stay thin and delegate to shared server modules.
- If we later add many BFF routes, extract **`lib/server/api-auth.ts`** (or similar) and reference it from this ADR.

## Action Items

1. [ ] On the **first** merged `app/src/app/api/**/route.ts`, add the shared helper + unit/integration test for 401/403 paths.
2. [ ] Add a one-line item to the PR template or review checklist: “If `route.ts` added: ADR-004 auth model satisfied?”

## Related code

- [`app/middleware.ts`](../../app/middleware.ts) — early return for `pathname.startsWith("/api")`
- [`app/src/lib/supabase/client/server.ts`](../../app/src/lib/supabase/client/server.ts) — `createServerSupabaseClient`
- [`app/src/lib/supabase/middleware/update-session.ts`](../../app/src/lib/supabase/middleware/update-session.ts) — cookie refresh pattern used for pages, not `/api` today
- [`app/src/app/auth/callback/route.ts`](../../app/src/app/auth/callback/route.ts) — **public** `GET` handler: exchanges Supabase `code` from email links (`exchangeCodeForSession`), sets cookies, redirects to sanitized `next`. No API key; identity is established only by Supabase’s one-time code exchange. Documented per §2 above.

## Related ADRs

- [ADR-001: Frontend architecture](ADR-001-frontend-architecture.md)
- [ADR-002: Session save](ADR-002-session-save.md)
