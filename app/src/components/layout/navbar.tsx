"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Crown, User } from "lucide-react";
import { RecentHistoryNavButton } from "@/components/layout/recent-history-sheet";
import { buttonVariants } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { PREMIUM_UNLOCKED, type PaywallTool } from "@/lib/config/access-mode";
import { cn } from "@/lib/utils";

const PREMIUM_NAV: { label: string; tool: PaywallTool }[] = [
  { label: "Offers", tool: "offers" },
  { label: "Forecast", tool: "forecast" },
  { label: "EMI", tool: "emi" },
];

const PREMIUM_TOOL_HREF: Record<PaywallTool, string> = {
  offers: "/premium/offer-comparison",
  forecast: "/premium/wealth-forecast",
  emi: "/premium/emi-analyzer",
};

function navSalaryActive(pathname: string) {
  return pathname === "/salary" || pathname.startsWith("/salary/");
}

function navPremiumItemActive(
  pathname: string,
  tool: PaywallTool,
  paywallTool: string | null
) {
  const href = PREMIUM_TOOL_HREF[tool];
  const onPremiumRoute = pathname === href || pathname.startsWith(`${href}/`);
  if (PREMIUM_UNLOCKED) {
    return onPremiumRoute;
  }
  return pathname === "/paywall" && (paywallTool ?? "offers") === tool;
}

function NavbarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paywallTool = searchParams.get("tool");
  const user = useAuthStore((s) => s.user);
  const [authReady, setAuthReady] = useState(
    () => globalThis.window !== undefined && useAuthStore.persist.hasHydrated()
  );

  useEffect(() => {
    return useAuthStore.persist.onFinishHydration(() => {
      setAuthReady(true);
    });
  }, []);

  const onAuthPath =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password";

  const showProductChrome = !onAuthPath;
  const showPremiumHeader = authReady && Boolean(user) && PREMIUM_UNLOCKED;
  /** History is a premium-only utility; free signed-in users do not see it. */
  const showHistory = showProductChrome && showPremiumHeader;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-navy-200/60 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-teal-600">
            The Fluid Ledger
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/salary"
            className={cn(
              "text-sm font-medium transition-colors",
              navSalaryActive(pathname)
                ? "text-navy-800 underline decoration-2 underline-offset-[20px] decoration-teal-600"
                : "text-navy-500 hover:text-navy-800"
            )}
          >
            Salary
          </Link>
          {showPremiumHeader &&
            PREMIUM_NAV.map(({ label, tool }) => {
              const href = PREMIUM_TOOL_HREF[tool];
              const active = navPremiumItemActive(pathname, tool, paywallTool);
              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-navy-800 underline decoration-2 underline-offset-[20px] decoration-teal-600"
                      : "text-navy-500 hover:text-navy-800"
                  )}
                >
                  {label}
                </Link>
              );
            })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {showPremiumHeader && showProductChrome && (
            <Link
              href="/premium"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-full bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-800 gap-1.5 shadow-sm"
              )}
            >
              <Crown
                className="size-3.5 shrink-0 text-amber-300"
                strokeWidth={2.25}
              />
              Premium
            </Link>
          )}
          {showHistory ? <RecentHistoryNavButton /> : null}
          {authReady ? (
            user ? (
              <Link
                href="/profile"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-full border-navy-200 gap-1.5 px-3 text-xs font-semibold text-navy-700"
                )}
              >
                <User className="size-4 shrink-0" />
                <span className="max-w-[100px] truncate hidden sm:inline">
                  {user.displayName.split(" ")[0] || "Profile"}
                </span>
                <span className="sm:hidden">Profile</span>
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="text-xs font-semibold text-navy-600 hover:text-navy-800 px-2"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "rounded-full bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-700"
                  )}
                >
                  Sign up
                </Link>
              </div>
            )
          ) : (
            <div className="h-9 w-24 rounded-full bg-navy-100 animate-pulse" aria-hidden />
          )}
        </div>
      </div>
    </header>
  );
}

export function Navbar() {
  return (
    <Suspense
      fallback={
        <div className="sticky top-0 z-50 h-16 w-full bg-white border-b border-navy-200/60 shadow-sm" />
      }
    >
      <NavbarInner />
    </Suspense>
  );
}
