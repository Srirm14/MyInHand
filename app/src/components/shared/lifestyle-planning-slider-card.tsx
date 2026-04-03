"use client";

import { useMemo } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { InrMoneyInput } from "@/components/ui/inr-money-input";
import {
  clampLifestyleMonthlyRupees,
  computeLifestyleSliderMax,
  formatLifestyleScaleHigh,
} from "@/lib/utils/lifestyle-slider-scale";

export function LifestylePlanningSliderCard({
  icon: Icon,
  label,
  description,
  value,
  suggestedMax,
  min = 0,
  step = 500,
  onCommit,
  className,
}: {
  icon: LucideIcon;
  label: string;
  description?: string;
  value: number;
  /** Starting “typical” scale for the slider; track grows if the amount is higher. */
  suggestedMax: number;
  min?: number;
  step?: number;
  onCommit: (rupees: number) => void;
  className?: string;
}) {
  const sliderMax = useMemo(
    () => computeLifestyleSliderMax(suggestedMax, value, step),
    [suggestedMax, value, step]
  );

  const span = Math.max(1, sliderMax - min);
  /** Range inputs step in `step` rupees; thumb follows nearest step, amount field stays exact. */
  const steppedForSlider = Math.min(
    sliderMax,
    Math.max(min, Math.round(value / step) * step)
  );
  const percentage = ((steppedForSlider - min) / span) * 100;

  const commit = (n: number) => onCommit(clampLifestyleMonthlyRupees(n));

  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-200/40 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
          <Icon className="size-5" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-navy-800">{label}</p>
          {description ? (
            <p className="mt-0.5 text-[11px] leading-snug text-navy-400">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-navy-400">
          Monthly amount
        </p>
        <InrMoneyInput
          value={value}
          onCommit={(n) => commit(n)}
          aria-label={`${label} monthly amount`}
          className="w-full max-w-none [&_input]:w-full [&_input]:py-2.5 [&_input]:text-right [&_input]:text-base [&_input]:font-semibold"
          debounceMs={48}
        />
        <p className="mt-1.5 text-[11px] leading-snug text-navy-400">
          Type any realistic monthly figure. The slider is a quick nudge — not a
          limit.
        </p>
      </div>

      <div className="mt-5 border-t border-navy-100/80 pt-4">
        <p className="mb-2 text-[11px] font-medium text-navy-500">
          Quick adjust
          <span className="ml-1 font-normal text-navy-400">
            (suggested scale)
          </span>
        </p>
        <div className="relative pt-0.5">
          <input
            type="range"
            min={min}
            max={sliderMax}
            step={step}
            value={steppedForSlider}
            onChange={(e) => commit(Number(e.target.value))}
            className="w-full h-2 cursor-pointer appearance-none rounded-full bg-navy-100
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:size-5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:border-[3px]
              [&::-webkit-slider-thumb]:border-teal-600
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:shadow-md
              [&::-webkit-slider-thumb]:transition-transform
              [&::-webkit-slider-thumb]:hover:scale-110"
            style={{
              background: `linear-gradient(to right, #0D9488 0%, #0D9488 ${percentage}%, #E2E8F0 ${percentage}%, #E2E8F0 100%)`,
            }}
          />
        </div>
        <div className="mt-2 flex justify-between gap-2 text-[11px] tabular-nums text-navy-400">
          <span>{formatLifestyleScaleHigh(min)}</span>
          <span className="text-right text-navy-400">
            Scale to {formatLifestyleScaleHigh(sliderMax)}
            {sliderMax > suggestedMax && value > suggestedMax ? (
              <span className="ml-1 text-teal-600/90" aria-hidden>
                · expanded
              </span>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}
