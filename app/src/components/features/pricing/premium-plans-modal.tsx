"use client";

import Link from "next/link";
import { useCallback, useEffect, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Crown, X } from "lucide-react";
import { SalaryPricingSection } from "@/components/features/pricing/salary-pricing-section";
import { buttonVariants } from "@/components/ui/button";
import { buildLoginUrlWithReturn } from "@/lib/auth/sanitize-internal-redirect";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import {
  closePremiumPlansModal,
  usePremiumPlansModalStore,
} from "@/lib/stores/use-premium-plans-modal-store";
import { cn } from "@/lib/utils";
import { RazorpayUpgradeFlow } from "@/components/features/billing/razorpay-upgrade-flow";

/**
 * Shared full-screen Premium pricing modal. Mounted once in the app shell;
 * visibility controlled by `usePremiumPlansModalStore`.
 */
export function PremiumPlansModal() {
  const pathname = usePathname();
  const router = useRouter();
  const isOpen = usePremiumPlansModalStore((s) => s.isOpen);
  const fromPremium = usePremiumPlansModalStore((s) => s.fromPremium);
  const [, startNav] = useTransition();

  const user = useAuthStore((s) => s.user);
  const loggedIn = Boolean(user);
  const premiumHref = loggedIn
    ? "/profile/billing"
    : buildLoginUrlWithReturn("/paywall?from=premium");

  const handleClose = useCallback(() => {
    if (pathname === "/paywall") {
      // When `/paywall` is only a modal-shell route, keep modal open during transition.
      // `PremiumPlansModalHost` will close the modal once pathname changes away from `/paywall`.
      startNav(() => {
        router.replace("/salary");
      });
      return;
    }
    closePremiumPlansModal();
  }, [pathname, router, startNav]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-md"
        aria-label="Close premium plans"
        onClick={handleClose}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(13,148,136,0.14),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto p-4 sm:p-6">
        <div
          className={cn(
            "pointer-events-auto my-auto w-full max-w-6xl max-h-[min(92dvh,calc(100dvh-2rem))] overflow-y-auto overscroll-y-contain rounded-[1.75rem]",
            "border border-navy-200/70 bg-white/95 shadow-[0_28px_90px_-24px_rgba(15,23,42,0.45)]",
            "ring-1 ring-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90"
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="premium-plans-modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-navy-100/90 bg-white/90 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-3.5">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-50 to-teal-100/90 text-teal-700 shadow-sm ring-1 ring-teal-200/60 sm:size-10 sm:rounded-xl">
                <Crown className="size-[18px] sm:size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-teal-700 sm:text-[10px]">
                  InHand
                </p>
                <h2
                  id="premium-plans-modal-title"
                  className="font-display text-base font-bold leading-tight tracking-tight text-navy-900 sm:text-lg"
                >
                  Premium plans
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "shrink-0 gap-1.5 rounded-full text-navy-600 hover:bg-navy-100/80 hover:text-navy-900"
              )}
              aria-label="Close"
            >
              <X className="size-4" aria-hidden />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>

          <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
            {fromPremium ? (
              <p className="mb-4 rounded-lg border border-teal-200/60 bg-teal-50/50 px-3 py-2.5 text-xs text-teal-950/90 leading-relaxed sm:text-sm sm:px-4 sm:py-3">
                That screen needs Premium. Pick a plan below—or continue with
                the free calculator.
              </p>
            ) : null}

            {loggedIn ? (
              <RazorpayUpgradeFlow embedded />
            ) : (
              <>
                <div className="mb-5 rounded-2xl border border-navy-200/60 bg-navy-50/40 px-4 py-4 sm:px-5">
                  <p className="text-sm font-semibold text-navy-900">
                    Sign in to upgrade
                  </p>
                  <p className="mt-1 text-xs text-navy-600 leading-relaxed">
                    Premium is tied to your account so your planners, comparisons,
                    and saved workspaces stay synced across sessions.
                  </p>
                </div>
                <SalaryPricingSection
                  premiumHref={premiumHref}
                  freeHref="/salary"
                  id="pricing-modal"
                  embedded
                />
              </>
            )}

            <div className="mt-6 flex flex-col gap-2 border-t border-navy-100 pt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
              <Link
                href={premiumHref}
                onClick={() => closePremiumPlansModal()}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-10 rounded-full border-0 bg-teal-700 px-5 text-xs font-semibold text-white shadow-sm hover:bg-teal-800 sm:h-10 sm:min-w-[200px] sm:text-sm"
                )}
              >
                {loggedIn ? "Account & billing" : "Sign in for Premium"}
              </Link>
              <Link
                href="/salary"
                onClick={() => closePremiumPlansModal()}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-10 rounded-full border-navy-200 bg-white px-5 text-xs font-semibold text-navy-800 hover:bg-navy-50 sm:h-10 sm:min-w-[200px] sm:text-sm"
                )}
              >
                Continue with Basic Salary Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
