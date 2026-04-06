/**
 * Auth + premium gating. Complements `sanitize-internal-redirect.ts` (same `from` rules).
 * - Premium salary/tool URLs: no session → `/login?from=…`; session but no plan → `/paywall?from=premium` (when not env-unlocked)
 * - `/paywall`: no session → `/login?from=/paywall…` (preserve query e.g. `tool=offers`)
 * - `/login` or `/signup` while already signed in → redirect to sanitized `from`, else `/salary`
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sanitizeInternalAuthRedirect } from "@/lib/auth/sanitize-internal-redirect";
import { getPremiumUnlockedFromEnv } from "@/lib/config/access-mode";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { updateSession } from "@/lib/supabase/middleware/update-session";

const PUBLIC_EXACT = new Set([
  "/",
  "/login",
  "/signup",
  "/forgot-password",
  "/auth/reset-password",
]);

function isPremiumSalaryDeepPath(pathname: string) {
  if (pathname === "/salary/detailed" || pathname.startsWith("/salary/detailed/"))
    return true;
  if (pathname === "/salary/breakdown" || pathname.startsWith("/salary/breakdown/"))
    return true;
  if (pathname === "/salary/premium" || pathname.startsWith("/salary/premium/"))
    return true;
  return false;
}

function requiresPremiumToolAccess(pathname: string) {
  return pathname === "/premium" || pathname.startsWith("/premium/");
}

function requiresPremiumAccess(pathname: string) {
  return requiresPremiumToolAccess(pathname) || isPremiumSalaryDeepPath(pathname);
}

function isProtectedProfile(pathname: string) {
  return pathname === "/profile" || pathname.startsWith("/profile/");
}

async function hasPremiumPlan(
  userId: string,
  supabase: NonNullable<Awaited<ReturnType<typeof updateSession>>["supabase"]>
): Promise<boolean> {
  if (getPremiumUnlockedFromEnv()) return true;
  const { data, error } = await supabase
    .from("profiles")
    .select("plan_tier")
    .eq("id", userId)
    .maybeSingle();
  if (error) return false;
  const tier = (data as { plan_tier: string } | null)?.plan_tier;
  return tier === "premium";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const { response, user, supabase } = await updateSession(request);
  const premiumEnv = getPremiumUnlockedFromEnv();

  if (requiresPremiumAccess(pathname)) {
    if (!isSupabaseConfigured() || !user) {
      const login = new URL("/login", request.url);
      login.searchParams.set("from", pathname);
      return NextResponse.redirect(login);
    }
    if (!premiumEnv && supabase) {
      const ok = await hasPremiumPlan(user.id, supabase);
      if (!ok) {
        const paywall = new URL("/paywall", request.url);
        paywall.searchParams.set("from", "premium");
        return NextResponse.redirect(paywall);
      }
    }
  }

  if (isProtectedProfile(pathname)) {
    if (!isSupabaseConfigured() || !user) {
      const login = new URL("/login", request.url);
      login.searchParams.set("from", pathname);
      return NextResponse.redirect(login);
    }
  }

  /** Premium purchase UI requires an account — anonymous users cannot browse /paywall. */
  if (pathname === "/paywall" && isSupabaseConfigured() && !user) {
    const login = new URL("/login", request.url);
    const dest = pathname + request.nextUrl.search;
    const safe = sanitizeInternalAuthRedirect(dest) ?? "/paywall";
    login.searchParams.set("from", safe);
    return NextResponse.redirect(login);
  }

  if (user && (pathname === "/login" || pathname === "/signup")) {
    const rawFrom = request.nextUrl.searchParams.get("from");
    const from = sanitizeInternalAuthRedirect(rawFrom);
    if (from) {
      return NextResponse.redirect(new URL(from, request.url));
    }
    return NextResponse.redirect(new URL("/salary", request.url));
  }

  if (PUBLIC_EXACT.has(pathname)) {
    return response;
  }

  if (pathname === "/paywall") {
    return response;
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
