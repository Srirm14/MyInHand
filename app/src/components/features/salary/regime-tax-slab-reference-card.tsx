"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CESS_RATE,
  NEW_REGIME_SLABS,
  OLD_REGIME_SLABS,
  REBATE_MAX_NEW,
  REBATE_MAX_OLD,
  REBATE_THRESHOLD_NEW,
  REBATE_THRESHOLD_OLD,
  STANDARD_DEDUCTION,
  type TaxSlab,
} from "@/lib/constants/tax-slabs";
import type { TaxRegime } from "@/lib/types/salary.types";
import { buildRegimeVisualizationModel } from "@/lib/utils/calculate-tax";
import {
  formatCurrency,
  formatCurrencyCompact,
  formatIndianNumber,
} from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

function slabIncomeLabel(slab: TaxSlab, index: number): string {
  if (slab.max === Number.POSITIVE_INFINITY) {
    return `Above ₹${formatIndianNumber(slab.min - 1)}`;
  }
  if (index === 0 && slab.min === 0) {
    return `Up to ₹${formatIndianNumber(slab.max)}`;
  }
  return `₹${formatIndianNumber(slab.min)} – ₹${formatIndianNumber(slab.max)}`;
}

function slabRateLabel(rate: number): string {
  if (rate === 0) return "Nil";
  return `${Math.round(rate * 100)}%`;
}

function slabFillTint(rate: number, isOld: boolean): string {
  if (rate <= 0) return "bg-navy-200/80";
  if (isOld) {
    if (rate <= 0.05) return "bg-amber-400/90";
    if (rate <= 0.2) return "bg-amber-500/95";
    return "bg-amber-600/95";
  }
  if (rate <= 0.05) return "bg-teal-400/90";
  if (rate <= 0.1) return "bg-teal-500/90";
  if (rate <= 0.15) return "bg-teal-600/90";
  if (rate <= 0.2) return "bg-teal-700/90";
  if (rate <= 0.25) return "bg-emerald-700/90";
  return "bg-emerald-800/95";
}

const motionFade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
};

export function RegimeTaxSlabReferenceCard({
  regime,
  engineNotes = "simple",
  className,
  grossAnnualSalary,
  oldRegimeAdditionalDeductions = 0,
}: Readonly<{
  regime: TaxRegime;
  /** `simple` = free calculator copy; `breakdown` = premium breakdown engine. */
  engineNotes?: "simple" | "breakdown";
  className?: string;
  /** When set (e.g. sum of cash earnings), shows utilization + tax for the selected regime. */
  grossAnnualSalary?: number;
  /** Old regime only: PF + illustrative ₹1.5L — must match breakdown engine. */
  oldRegimeAdditionalDeductions?: number;
}>) {
  const isOld = regime === "old";
  const slabs = isOld ? OLD_REGIME_SLABS : NEW_REGIME_SLABS;
  const shell = isOld
    ? "border-navy-200/70 from-amber-50/45 via-white to-white"
    : "border-navy-200/70 from-teal-50/40 via-white to-white";
  const accentText = isOld ? "text-amber-950/90" : "text-teal-950/90";
  const title = isOld ? "Old regime" : "New regime";
  const aria = isOld
    ? "Old tax regime breakdown for FY 2025-26"
    : "New tax regime breakdown for FY 2025-26";

  const viz = useMemo(() => {
    if (grossAnnualSalary == null || grossAnnualSalary <= 0) return null;
    return buildRegimeVisualizationModel(
      grossAnnualSalary,
      regime,
      oldRegimeAdditionalDeductions
    );
  }, [grossAnnualSalary, regime, oldRegimeAdditionalDeductions]);

  const markerPercent =
    viz && viz.totalVisualSpan > 0
      ? Math.min(
          100,
          Math.max(0, (viz.taxableIncome / viz.totalVisualSpan) * 100)
        )
      : 0;

  const insight =
    viz && viz.taxableIncome <= 0
      ? "After standard deduction and (for old regime) illustrative adjustments, taxable income is nil in this model."
      : viz && viz.topSlabIndex >= 0
        ? (() => {
            const s = viz.slabs[viz.topSlabIndex]!;
            const a = viz.allocations[viz.topSlabIndex]!;
            const rateLabel = slabRateLabel(s.rate);
            return `Taxable income ends in the ${rateLabel} slab. ${formatCurrencyCompact(a)} sits in this bracket${
              viz.topSlabIncomeSharePercent > 0
                ? ` — about ${viz.topSlabIncomeSharePercent}% of your taxable income.`
                : "."
            }`;
          })()
        : null;

  const footSimple = (
    <div className="space-y-1 text-[10px] leading-snug text-navy-500">
      <p>
        <span className="font-semibold text-navy-600">Taxable:</span> cash minus
        std. deduction ₹{formatIndianNumber(STANDARD_DEDUCTION)}
        {engineNotes === "breakdown" && isOld
          ? ", PF + illustrative ₹1.5L (old)"
          : ""}
        .{" "}
        <span className="text-navy-300">·</span>{" "}
        <span className="font-semibold text-navy-600">TDS:</span> slabs +{" "}
        {Math.round(CESS_RATE * 100)}% cess; 87A if below{" "}
        {isOld
          ? `₹${formatIndianNumber(REBATE_THRESHOLD_OLD)}`
          : `₹${formatIndianNumber(REBATE_THRESHOLD_NEW)}`}
        .
      </p>
      <p className="text-[9px] text-navy-400">
        Indicative — not tax advice.
      </p>
    </div>
  );

  const footBreakdown = (
    <div className="space-y-1 text-[10px] leading-snug text-navy-500">
      <p>
        <span className="font-semibold text-navy-600">Model:</span> cash earnings →
        std. deduction
        {isOld
          ? ` → PF + ₹${formatIndianNumber(150_000)} → slabs`
          : " → slabs"}
        .{" "}
        <span className="text-navy-300">·</span>{" "}
        <span className="font-semibold text-navy-600">TDS card:</span> same walk +{" "}
        {Math.round(CESS_RATE * 100)}% cess
        {isOld
          ? `; 87A ≤₹${formatIndianNumber(REBATE_MAX_OLD)} below ₹${formatIndianNumber(REBATE_THRESHOLD_OLD)}`
          : `; 87A ≤₹${formatIndianNumber(REBATE_MAX_NEW)} below ₹${formatIndianNumber(REBATE_THRESHOLD_NEW)}`}
        .
      </p>
      <p className="text-[9px] text-navy-400">Estimates — not tax advice.</p>
    </div>
  );

  return (
    <aside
      className={cn(
        "rounded-xl border bg-gradient-to-b p-3 shadow-sm shadow-navy-900/[0.03] sm:p-3.5",
        shell,
        className
      )}
      aria-label={aria}
    >
      <div className="min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={regime} {...motionFade} className="min-w-0">
              <p
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.07em] leading-none",
                  accentText
                )}
              >
                {title}{" "}
                <span className="font-semibold text-navy-500">· FY 2025-26</span>
              </p>
              <p className="mt-1.5 text-[10px] leading-snug text-navy-500">
                AY 2026-27 · resident slabs = in-app TDS basis
              </p>

              <div className="mt-3 min-w-0">
          {viz ? (
            <>
              <div className="flex items-stretch gap-2.5 rounded-md bg-white/70 px-2.5 py-2 ring-1 ring-navy-900/[0.05]">
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-navy-500">
                    Taxable income
                  </p>
                  <p className="text-[13px] font-bold tabular-nums leading-tight text-navy-900">
                    {formatCurrency(viz.taxableIncome)}
                  </p>
                </div>
                <div className="w-px shrink-0 bg-navy-200/60" aria-hidden />
                <div className="min-w-0 flex-1 text-right">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-navy-500">
                    Est. tax / yr
                  </p>
                  <p className="text-[13px] font-bold tabular-nums leading-tight text-navy-900">
                    {formatCurrency(viz.estimatedAnnualTax)}
                  </p>
                  <p className="mt-0.5 text-[9px] leading-none text-navy-500">
                    ~{viz.effectiveRatePercent}% gross
                  </p>
                </div>
              </div>

              {insight ? (
                <p
                  className={cn(
                    "mt-2.5 rounded-md px-2.5 py-1.5 text-[10px] font-medium leading-snug",
                    isOld
                      ? "bg-amber-100/40 text-amber-950/95"
                      : "bg-teal-100/35 text-teal-950/95"
                  )}
                >
                  {insight}
                </p>
              ) : null}

              <div className="mt-2.5">
                <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-navy-400">
                  Utilization{" "}
                  <span className="font-normal normal-case text-navy-400">
                    · bracket width · fill · line = income end
                  </span>
                </p>
                <div className="relative">
                  <div
                    className="flex h-6 w-full overflow-hidden rounded border border-navy-200/50 bg-navy-100/40"
                    role="img"
                    aria-label="Tax slab utilization"
                  >
                    {viz.slabs.map((slab, i) => {
                      const span = viz.visualSpans[i] ?? 1;
                      const alloc = viz.allocations[i] ?? 0;
                      const pctOfBar = (span / viz.totalVisualSpan) * 100;
                      const fillPct =
                        span > 0 ? Math.min(100, (alloc / span) * 100) : 0;
                      return (
                        <div
                          key={`seg-${slab.min}-${slab.max}-${i}`}
                          className="relative h-full border-r border-navy-200/40 last:border-r-0"
                          style={{ width: `${pctOfBar}%` }}
                        >
                          <div
                            className={cn(
                              "absolute bottom-0 left-0 top-0 opacity-35",
                              slabFillTint(slab.rate, isOld)
                            )}
                            style={{ width: "100%" }}
                          />
                          <div
                            className={cn(
                              "absolute bottom-0 left-0 top-0 transition-[width] duration-300",
                              slabFillTint(slab.rate, isOld)
                            )}
                            style={{ width: `${fillPct}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  {viz.taxableIncome > 0 ? (
                    <div
                      className="pointer-events-none absolute -top-1 bottom-0 w-px bg-navy-900"
                      style={{
                        left: `calc(${markerPercent}% - 0.5px)`,
                        boxShadow: "0 0 0 2px rgba(255,255,255,0.95)",
                      }}
                      aria-hidden
                    />
                  ) : null}
                </div>
              </div>

              <div className="mt-2.5 border-t border-navy-100/90 pt-2.5">
                <div className="mb-2 flex items-baseline justify-between gap-2 text-[9px] font-semibold uppercase tracking-wide text-navy-500">
                  <span>Slab</span>
                  <span>Rate · Used</span>
                </div>
                <ul
                  className={cn(
                    "space-y-0.5 overflow-y-auto overscroll-contain",
                    "max-h-[8.75rem] min-h-0 sm:max-h-[9.25rem]"
                  )}
                >
                  {viz.slabs.map((slab, i) => {
                    const alloc = viz.allocations[i] ?? 0;
                    const active = alloc > 0;
                    return (
                      <li
                        key={`row-${slab.min}-${slab.max}-${i}`}
                        className={cn(
                          "flex items-center justify-between gap-2 rounded-md px-1.5 py-1 text-[10px] leading-snug",
                          active
                            ? isOld
                              ? "bg-amber-50/70"
                              : "bg-teal-50/55"
                            : "text-navy-600/75"
                        )}
                      >
                        <span className="min-w-0 font-medium tabular-nums text-navy-800">
                          {slabIncomeLabel(slab, i)}
                        </span>
                        <span
                          className={cn(
                            "shrink-0 text-right font-semibold tabular-nums",
                            active
                              ? isOld
                                ? "text-amber-950"
                                : "text-teal-900"
                              : "text-navy-500"
                          )}
                        >
                          {slabRateLabel(slab.rate)}
                          <span className="font-medium text-navy-500"> · </span>
                          <span>
                            {active ? formatCurrencyCompact(alloc) : "—"}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            <div className="rounded-md bg-white/60 px-2.5 py-2 ring-1 ring-navy-900/[0.04]">
              <div className="mb-1.5 flex items-baseline justify-between gap-2 text-[9px] font-semibold uppercase tracking-wide text-navy-500">
                <span>Slab (₹/yr)</span>
                <span>Rate</span>
              </div>
              <ul
                className={cn(
                  "space-y-0.5 overflow-y-auto",
                  "max-h-[8.75rem] sm:max-h-[9.25rem]"
                )}
              >
                {slabs.map((slab, i) => (
                  <li
                    key={`ref-${slab.min}-${slab.max}-${slab.rate}`}
                    className="flex items-center justify-between gap-2 py-1 text-[10px] leading-snug"
                  >
                    <span className="min-w-0 font-medium text-navy-800 tabular-nums">
                      {slabIncomeLabel(slab, i)}
                    </span>
                    <span className="shrink-0 font-semibold tabular-nums text-navy-700">
                      {slabRateLabel(slab.rate)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-1.5 text-[9px] leading-snug text-navy-500">
                Estimate salary to see utilization.
              </p>
            </div>
          )}
              </div>
            </motion.div>
          </AnimatePresence>
      </div>

      <div className="mt-3 border-t border-navy-100/70 pt-2.5">
        {engineNotes === "breakdown" ? footBreakdown : footSimple}
      </div>
    </aside>
  );
}
