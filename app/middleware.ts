import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getPremiumUnlockedFromEnv } from "@/lib/config/access-mode";

const SESSION_COOKIE = "fl_session_email";

const PUBLIC_EXACT = new Set([
  "/",
  "/login",
  "/signup",
  "/forgot-password",
  "/paywall",
]);

/**
 * Salary “deep” routes and monthly plan — not available on free env.
 * Free users are sent to `/salary` (URL + experience), not paywall/login.
 */
function isPremiumSalaryOrLifestylePath(pathname: string) {
  if (pathname === "/salary/detailed" || pathname.startsWith("/salary/detailed/"))
    return true;
  if (pathname === "/salary/breakdown" || pathname.startsWith("/salary/breakdown/"))
    return true;
  if (pathname === "/lifestyle" || pathname.startsWith("/lifestyle/")) return true;
  return false;
}

/** Premium hub only — paywall when env is default; salary deep routes handled above. */
function requiresPremiumHubAccess(pathname: string) {
  return pathname === "/premium" || pathname.startsWith("/premium/");
}

/**
 * With env premium: salary deep flows + lifestyle still require a session (same as hub).
 */
function requiresPremiumAccess(pathname: string) {
  return (
    requiresPremiumHubAccess(pathname) || isPremiumSalaryOrLifestylePath(pathname)
  );
}

function isProtectedProfile(pathname: string) {
  return pathname === "/profile" || pathname.startsWith("/profile/");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const premiumEnv = getPremiumUnlockedFromEnv();

  // Default/free env: no detailed input, breakdown, or lifestyle — always `/salary`.
  if (!premiumEnv && isPremiumSalaryOrLifestylePath(pathname)) {
    return NextResponse.redirect(new URL("/salary", request.url));
  }

  if (requiresPremiumAccess(pathname)) {
    if (!session) {
      const login = new URL("/login", request.url);
      login.searchParams.set("from", pathname);
      return NextResponse.redirect(login);
    }
    if (!premiumEnv) {
      const paywall = new URL("/paywall", request.url);
      paywall.searchParams.set("from", "premium");
      return NextResponse.redirect(paywall);
    }
  }

  if (isProtectedProfile(pathname) && !session) {
    const login = new URL("/login", request.url);
    login.searchParams.set("from", pathname);
    return NextResponse.redirect(login);
  }

  if (session && (pathname === "/login" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/salary", request.url));
  }

  if (PUBLIC_EXACT.has(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
