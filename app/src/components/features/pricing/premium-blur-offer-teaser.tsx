"use client";

import { Button } from "@/components/ui/button";
import { openPremiumPlansModal } from "@/lib/stores/use-premium-plans-modal-store";
import { cn } from "@/lib/utils";

interface PremiumBlurOfferTeaserProps {
  className?: string;
  /** Smaller copy for tight layouts (e.g. calculator aside). */
  compact?: boolean;
}

/**
 * Blurred faux offer-comparison metrics + CTA into the shared Premium plans modal.
 */
export function PremiumBlurOfferTeaser({
  className,
  compact = false,
}: Readonly<PremiumBlurOfferTeaserProps>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-teal-200/50 bg-gradient-to-b from-white to-teal-50/20",
        compact ? "p-4" : "p-5 sm:p-6",
        className
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-800">
        Offer comparison preview
      </p>
      <p
        className={cn(
          "mt-1 font-medium text-navy-800",
          compact ? "text-sm" : "text-base"
        )}
      >
        In-hand, tax drag, and first-year value—side by side
      </p>

      <div
        className={cn(
          "relative mt-4 rounded-xl border border-navy-100/80 bg-white/60",
          compact ? "py-3" : "py-4"
        )}
      >
        <div
          className="grid grid-cols-3 gap-2 px-3 text-center select-none blur-[6px] opacity-55 sm:gap-3 sm:px-4"
          aria-hidden
        >
          <div>
            <p className="text-[10px] font-semibold uppercase text-navy-400">
              Offer A
            </p>
            <p className="mt-1 font-display text-lg font-bold tabular-nums text-navy-800">
              ₹1,42,500
            </p>
            <p className="text-[10px] text-navy-500">/ mo in-hand</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase text-navy-400">
              Offer B
            </p>
            <p className="mt-1 font-display text-lg font-bold tabular-nums text-navy-800">
              ₹1,38,200
            </p>
            <p className="text-[10px] text-navy-500">/ mo in-hand</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase text-navy-400">
              Delta
            </p>
            <p className="mt-1 font-display text-lg font-bold tabular-nums text-teal-700">
              +₹4.3L
            </p>
            <p className="text-[10px] text-navy-500">1st year</p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 px-3 pb-3 pt-8 sm:pb-4">
          <p className="pointer-events-none text-center text-[11px] font-medium text-navy-600 sm:text-xs">
            Premium unlocks live comparison on your real offers.
          </p>
          <Button
            type="button"
            className="pointer-events-auto h-9 rounded-full bg-teal-700 px-5 text-xs font-semibold text-white hover:bg-teal-800"
            onClick={() => openPremiumPlansModal()}
          >
            View Premium plans
          </Button>
        </div>
      </div>
    </div>
  );
}
