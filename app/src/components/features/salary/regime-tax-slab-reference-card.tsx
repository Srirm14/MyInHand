"use client";

import { Info } from "lucide-react";
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
import { formatIndianNumber } from "@/lib/utils/format-currency";
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

export function RegimeTaxSlabReferenceCard({
  regime,
  engineNotes = "simple",
  className,
}: Readonly<{
  regime: TaxRegime;
  /** `simple` = free calculator copy; `breakdown` = premium breakdown engine. */
  engineNotes?: "simple" | "breakdown";
  className?: string;
}>) {
  const isOld = regime === "old";
  const slabs = isOld ? OLD_REGIME_SLABS : NEW_REGIME_SLABS;
  const shell = isOld
    ? "border-navy-200/70 from-amber-50/40 to-white"
    : "border-navy-200/70 from-teal-50/35 to-white";
  const iconBg = isOld ? "bg-amber-100/90 text-amber-800" : "bg-teal-100/90 text-teal-800";
  const title = isOld
    ? "Old regime · FY 2025-26"
    : "New regime · FY 2025-26";
  const aria = isOld
    ? "Old tax regime reference for FY 2025-26"
    : "New tax regime reference for FY 2025-26";

  const declaredCopy =
    engineNotes === "breakdown" ? (
      isOld ? (
        <p>
          <span className="font-semibold text-navy-700">How tax is modeled:</span>{" "}
          gross salary (cash components) minus standard deduction, then for old
          regime           an illustrative{" "}
          <span className="font-semibold tabular-nums text-navy-800">
            ₹{formatIndianNumber(150_000)}
          </span>{" "}
          deduction-style adjustment plus employee PF before slabs—simplified vs a
          full ITR. Slabs below are the statutory rates applied to taxable income.
        </p>
      ) : (
        <p>
          <span className="font-semibold text-navy-700">How tax is modeled:</span>{" "}
          gross salary after standard deduction (
          <span className="font-semibold tabular-nums text-navy-800">
            ₹{formatIndianNumber(STANDARD_DEDUCTION)}
          </span>
          ), then new-regime slabs progressively; fewer chapter VI-A deductions than
          old regime in real filings.
        </p>
      )
    ) : (
      <p>
        <span className="font-semibold text-navy-700">Declared income:</span>{" "}
        this calculator starts from your cash package, subtracts{" "}
        <span className="font-semibold tabular-nums text-navy-800">
          ₹{formatIndianNumber(STANDARD_DEDUCTION)}
        </span>{" "}
        standard deduction, then applies slabs progressively. It does{" "}
        <span className="font-semibold text-navy-700">not</span> model 80C, HRA,
        or other deductions—those lower taxable income in real filings.
      </p>
    );

  const taxTdsCopy = isOld ? (
    <p>
      <span className="font-semibold text-navy-700">Tax and TDS:</span> base tax
      from slabs, then{" "}
      <span className="font-semibold tabular-nums">
        {Math.round(CESS_RATE * 100)}%
      </span>{" "}
      health and education cess. Section 87A can reduce tax by up to{" "}
      <span className="font-semibold tabular-nums text-navy-800">
        ₹{formatIndianNumber(REBATE_MAX_OLD)}
      </span>{" "}
      when taxable income is within{" "}
      <span className="font-semibold tabular-nums text-navy-800">
        ₹{formatIndianNumber(REBATE_THRESHOLD_OLD)}
      </span>
      . Employers withhold{" "}
      <abbr title="Tax Deducted at Source" className="no-underline">
        TDS
      </abbr>{" "}
      through the year; numbers here are estimates only—not tax advice.
    </p>
  ) : (
    <p>
      <span className="font-semibold text-navy-700">Tax and TDS:</span> base tax
      from slabs, then{" "}
      <span className="font-semibold tabular-nums">
        {Math.round(CESS_RATE * 100)}%
      </span>{" "}
      cess. Section 87A can reduce tax by up to{" "}
      <span className="font-semibold tabular-nums text-navy-800">
        ₹{formatIndianNumber(REBATE_MAX_NEW)}
      </span>{" "}
      when taxable income is within{" "}
      <span className="font-semibold tabular-nums text-navy-800">
        ₹{formatIndianNumber(REBATE_THRESHOLD_NEW)}
      </span>
      .{" "}
      <abbr title="Tax Deducted at Source" className="no-underline">
        TDS
      </abbr>{" "}
      is withheld monthly; figures here are indicative—not tax advice.
    </p>
  );

  return (
    <aside
      className={cn(
        "rounded-xl border bg-gradient-to-b p-4 shadow-sm shadow-navy-900/[0.02]",
        shell,
        className
      )}
      aria-label={aria}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={cn(
            "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg",
            iconBg
          )}
        >
          <Info className="size-3.5" aria-hidden />
        </span>
        <div className="min-w-0">
          <p
            className={cn(
              "text-[11px] font-bold uppercase tracking-wide",
              isOld ? "text-amber-900/90" : "text-teal-900/90"
            )}
          >
            {title}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-navy-500">
            AY 2026-27 indicative slabs (individual, resident). These match the
            rates used for your TDS estimate in this app.
          </p>
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-navy-200/60 bg-white/80 px-3 py-2.5">
        <div className="mb-2 flex items-baseline justify-between gap-2 border-b border-navy-100 pb-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">
            Income slab (₹ / year)
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">
            Rate
          </span>
        </div>
        <ul className="space-y-1">
          {slabs.map((slab, i) => (
            <li
              key={`${slab.min}-${slab.max}-${slab.rate}`}
              className="flex items-start justify-between gap-3 text-[11px] leading-snug"
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
      </div>

      <div className="mt-3 space-y-2 text-[10px] leading-relaxed text-navy-600">
        {declaredCopy}
        {taxTdsCopy}
      </div>
    </aside>
  );
}
