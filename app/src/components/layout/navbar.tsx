"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { User } from "lucide-react";
import { RecentHistoryNavButton } from "@/components/layout/recent-history-sheet";
import { buttonVariants } from "@/components/ui/button";
import {
  PREMIUM_UNLOCKED,
  premiumHubHref,
  premiumToolHref,
  type PaywallTool,
} from "@/lib/config/access-mode";
import { cn } from "@/lib/utils";

const PREMIUM_NAV: { label: string; tool: PaywallTool }[] = [
  { label: "Offers", tool: "offers" },
  { label: "Forecast", tool: "forecast" },
  { label: "EMI", tool: "emi" },
];

function navSalaryActive(pathname: string) {
  return pathname === "/salary" || pathname.startsWith("/salary/");
}

function navPremiumItemActive(
  pathname: string,
  tool: PaywallTool,
  paywallTool: string | null
) {
  if (PREMIUM_UNLOCKED) {
    const href = premiumToolHref(tool);
    return pathname === href || pathname.startsWith(`${href}/`);
  }
  return pathname === "/paywall" && (paywallTool ?? "offers") === tool;
}

function NavbarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paywallTool = searchParams.get("tool");

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
          {PREMIUM_NAV.map(({ label, tool }) => {
            const href = premiumToolHref(tool);
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

        <div className="flex items-center gap-3">
          <Link
            href={premiumHubHref()}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "rounded-full bg-teal-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-teal-700"
            )}
          >
            Premium
          </Link>
          <RecentHistoryNavButton />
          <button
            type="button"
            className="p-2 text-navy-400 hover:text-navy-600 transition-colors"
          >
            <User className="size-5" />
          </button>
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
