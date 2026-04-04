"use client";

import Link from "next/link";
import { Crown, Lock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { openPremiumPlansModal } from "@/lib/stores/use-premium-plans-modal-store";
import { cn } from "@/lib/utils";

interface SalaryCalculatorPremiumTeaserProps {
  locked: boolean;
  onRequestUnlock: () => void;
  className?: string;
}

function BlurredBreakdownPreview() {
  const bars = [72, 45, 88, 52, 68, 40];
  return (
    <div
      className="space-y-2.5 opacity-50"
      aria-hidden
    >
      <div className="h-2 w-3/4 rounded-full bg-navy-200" />
      <div className="grid grid-cols-3 gap-2">
        {bars.map((w) => (
          <div
            key={w}
            className="h-16 rounded-lg bg-gradient-to-t from-teal-100 to-teal-200/80"
            style={{ opacity: w / 100 }}
          />
        ))}
      </div>
      <div className="space-y-1.5 pt-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex justify-between gap-2 border-b border-navy-100/80 pb-1.5"
          >
            <div className="h-2 w-24 rounded bg-navy-200" />
            <div className="h-2 w-16 rounded bg-navy-200/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Soft premium teaser below the free calculator summary—does not block the main flow.
 */
export function SalaryCalculatorPremiumTeaser({
  locked,
  onRequestUnlock,
  className,
}: Readonly<SalaryCalculatorPremiumTeaserProps>) {
  if (!locked) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-teal-200/40 bg-gradient-to-b from-white via-teal-50/20 to-navy-50/40 p-4 shadow-sm sm:p-5",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(13,148,136,0.12),transparent)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-4 right-4 top-[4.5rem] select-none sm:top-[5rem]"
        aria-hidden
      >
        <div className="blur-[5px] sm:blur-[6px]">
          <BlurredBreakdownPreview />
        </div>
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-200/80 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy-600 shadow-sm backdrop-blur-sm">
            <Lock className="size-3 text-navy-500" strokeWidth={2} aria-hidden />
            Premium
          </span>
          <Crown
            className="size-5 shrink-0 text-teal-600/80"
            strokeWidth={1.75}
            aria-hidden
          />
        </div>

        <h3 className="mt-3 font-display text-base font-bold tracking-tight text-navy-800 sm:text-lg">
          Unlock detailed salary breakdown
        </h3>
        <p className="mt-1.5 text-xs text-navy-600 leading-relaxed sm:text-sm">
          Get a more precise read on your compensation with component-level
          breakup and deeper payroll insights—when you are ready to go further.
        </p>

        <ul className="mt-4 space-y-2 text-[11px] text-navy-600 leading-snug sm:text-xs">
          <li className="flex gap-2">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-teal-500" />
            <span>View component-level breakup and allowances in context</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-teal-500" />
            <span>Understand deductions and cash path with richer detail</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-teal-500" />
            <span>Connect this salary to premium planning when you upgrade</span>
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-2 sm:mt-7">
          <Button
            type="button"
            className="h-10 w-full rounded-full bg-teal-700 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
            onClick={onRequestUnlock}
          >
            Unlock Premium
          </Button>
          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "h-9 w-full rounded-full text-xs font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800"
            )}
            onClick={() => openPremiumPlansModal()}
          >
            Compare Free &amp; Premium plans
          </button>
        </div>
      </div>
    </div>
  );
}
