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

function isPremiumPath(pathname: string) {
  return pathname === "/premium" || pathname.startsWith("/premium/");
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

  if (isPremiumPath(pathname)) {
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
