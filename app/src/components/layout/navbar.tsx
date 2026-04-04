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
  const { premium, toolHref, hubHref } = useTieredPremiumLinks();

  const onAuthPath =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password";

  const showProductChrome = !onAuthPath;
  const showPremiumHeader = authReady && Boolean(user) && premium;
  const showHistory = showProductChrome && showPremiumHeader;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-navy-200/60 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
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
        <nav className="hidden md:flex items-center gap-8">
          {/* Smart Salary nav — context-aware with LPA label + premium dropdown */}
          <SalaryNavItem />

          {/* Offer comparison — paywall when not premium */}
          {showProductChrome && (
            <Link
              href={toolHref("offers")}
              className={cn(
                "text-sm font-medium transition-colors",
                navOfferComparisonActive(pathname, paywallTool, premium)
                  ? "text-navy-800 underline decoration-2 underline-offset-[20px] decoration-teal-600"
                  : "text-navy-500 hover:text-navy-800"
              )}
            >
              Offer comparison
            </Link>
          )}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {showPremiumHeader && showProductChrome && (
            <Link
              href={hubHref()}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-teal-800 hover:border-white/20"
              )}
            >
              <Crown
                className="size-3.5 shrink-0 text-white"
                strokeWidth={2}
                aria-hidden
              />
              <span>Premium</span>
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
