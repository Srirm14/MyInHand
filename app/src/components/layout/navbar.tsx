"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Crown, User } from "lucide-react";
import { SalaryNavItem } from "@/components/layout/salary-nav-item";
import { RecentHistoryNavButton } from "@/components/layout/recent-history-sheet";
import { buttonVariants } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { InhandLogoMark } from "@/components/layout/inhand-logo-mark";
import { NavbarAuthSkeleton, NavbarSuspenseFallback } from "@/components/shared/loading-skeletons";
import { cn } from "@/lib/utils";

function navOfferComparisonActive(
  pathname: string,
  paywallTool: string | null,
  premiumUnlocked: boolean
) {
  const href = "/premium/offer-comparison";
  const onRoute = pathname === href || pathname.startsWith(`${href}/`);
  if (premiumUnlocked) return onRoute;
  /** Plain `/paywall` (e.g. hub or global pricing modal route) must not imply “offers”. */
  return pathname === "/paywall" && paywallTool === "offers";
}

function NavbarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paywallTool = searchParams.get("tool");
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);
  const { premium, toolHref } = useTieredPremiumLinks();

  const onAuthPath =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password";

  const showProductChrome = !onAuthPath;
  const showPremiumHeader = authReady && Boolean(user) && premium;
  const showHistory = showProductChrome && showPremiumHeader;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-200/70 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-[3.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="InHand home"
          className="flex items-center gap-2.5 shrink-0 rounded-md outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
        >
          <InhandLogoMark height={34} className="h-[34px] w-auto" aria-hidden />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-navy-900 sm:text-xl">
              InHand
            </span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-navy-500 sm:block">
              Know your real take-home
            </span>
          </span>
        </Link>

        {/* Center Navigation */}
        <nav
          className="hidden min-w-0 flex-1 justify-center md:flex"
          aria-label="Primary"
        >
          <div className="flex items-center gap-7 lg:gap-8">
            <SalaryNavItem />

            {showProductChrome && (
              <Link
                href={toolHref("offers")}
                className={cn(
                  "text-sm font-medium transition-colors duration-150",
                  "rounded px-0.5 -mx-0.5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
                  navOfferComparisonActive(pathname, paywallTool, premium)
                    ? "text-navy-800 underline decoration-2 underline-offset-[18px] decoration-teal-600"
                    : "text-navy-500 hover:text-navy-800"
                )}
              >
                Offer comparison
              </Link>
            )}
          </div>
        </nav>

        {/* Right: plan status (non-interactive) + tools + account */}
        <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5 md:gap-3">
          {showPremiumHeader && showProductChrome && (
            <>
              <span
                className={cn(
                  "inline-flex max-w-full items-center gap-1 rounded-full border border-teal-200/70",
                  "bg-gradient-to-b from-teal-50/95 to-teal-50/50 px-2 py-0.5",
                  "text-[11px] font-medium leading-none tracking-tight text-teal-900/85",
                  "ring-1 ring-teal-100/80 select-none",
                  "pointer-events-none"
                )}
                aria-label="Premium plan"
              >
                <Crown
                  className="size-3 shrink-0 text-teal-600/90"
                  strokeWidth={2}
                  aria-hidden
                />
                <span>Premium</span>
              </span>
              {showHistory ? (
                <span
                  className="hidden h-5 w-px shrink-0 bg-navy-200/80 sm:block"
                  aria-hidden
                />
              ) : null}
            </>
          )}
          {showHistory ? <RecentHistoryNavButton /> : null}
          {authReady ? (
            user ? (
              <Link
                href="/profile"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-full border-navy-200/90 gap-1.5 px-3 text-xs font-semibold text-navy-700",
                  "transition-[color,background-color,border-color,box-shadow] duration-150",
                  "hover:border-navy-300/90 hover:bg-navy-50/50"
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
                  className="rounded-md px-2 text-xs font-semibold text-navy-600 transition-colors duration-150 hover:text-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
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
            <NavbarAuthSkeleton />
          )}
        </div>
      </div>
    </header>
  );
}

export function Navbar() {
  return (
    <Suspense fallback={<NavbarSuspenseFallback />}>
      <NavbarInner />
    </Suspense>
  );
}
