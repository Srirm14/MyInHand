"use client";

import type { TaxRegime } from "@/lib/types/salary.types";
import { cn } from "@/lib/utils";
import { formatCurrency, formatPercentage } from "@/lib/utils/format-currency";

interface FixedVariableInHandPanelProps {
  taxRegime: TaxRegime;
  monthlyInHandFixedOnly: number;
  monthlyInHandIncludingVariable: number;
  annualInHandFixedOnly: number;
  annualInHandIncludingVariable: number;
  monthlyIncomeTaxFixedBasis: number;
  monthlyIncomeTaxIncludingVariable: number;
  annualIncomeTaxFixedBasis: number;
  annualIncomeTaxIncludingVariable: number;
  effectiveTaxRateFixedBasis: number;
  effectiveTaxRateIncludingVariable: number;
  annualVariablePay: number;
  className?: string;
}

function MetricCell({
  title,
  subtitle,
  amount,
  emphasize,
  sentiment = "neutral",
}: Readonly<{
  title: string;
  subtitle?: string;
  amount: number;
  emphasize?: boolean;
  sentiment?: "positive" | "neutral";
}>) {
  return (
    <div
      className={cn(
        "relative min-w-0 flex flex-col rounded-xl border p-3 sm:p-3.5 overflow-hidden",
        emphasize
          ? "border-teal-200/80 bg-teal-50/40 shadow-sm ring-1 ring-teal-100/60"
          : "border-navy-200/60 bg-white"
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-500 leading-snug">
        {title}
      </p>
      {subtitle ? (
        <p className="mt-0.5 text-[10px] leading-snug text-navy-400">{subtitle}</p>
      ) : null}
      <p
        className={cn(
          "mt-1.5 break-words font-display text-lg font-bold tabular-nums leading-tight sm:text-xl",
          emphasize ? "text-teal-800" : "text-navy-800"
        )}
        aria-live="polite"
      >
        {formatCurrency(amount)}
      </p>
      {/* Coloured bottom accent matching StatCard style */}
      <div className="mt-auto pt-3">
        <div
          className={cn(
            "h-0.5 w-8 rounded-full",
            sentiment === "positive" ? "bg-teal-500" : "bg-navy-300"
          )}
        />
      </div>
    </div>
  );
}

export function FixedVariableInHandPanel({
  taxRegime,
  monthlyInHandFixedOnly,
  monthlyInHandIncludingVariable,
  annualInHandFixedOnly,
  annualInHandIncludingVariable,
  monthlyIncomeTaxFixedBasis,
  monthlyIncomeTaxIncludingVariable,
  annualIncomeTaxFixedBasis,
  annualIncomeTaxIncludingVariable,
  effectiveTaxRateFixedBasis,
  effectiveTaxRateIncludingVariable,
  annualVariablePay,
  className,
}: Readonly<FixedVariableInHandPanelProps>) {
  const regimeShort = taxRegime === "new" ? "New" : "Old";
  const regimeBadge = taxRegime === "new" ? "New regime" : "Old regime";
  const hasVariable = annualVariablePay > 0;

  return (
    <div
      className={cn(
        "min-w-0 overflow-hidden rounded-2xl border border-navy-200/60 bg-white p-4 shadow-sm sm:p-5",
        className
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-navy-100 pb-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-400">
            Summary
          </p>
          <h2 className="mt-1 text-sm font-semibold text-navy-800 sm:text-base">
            Estimated in-hand
          </h2>
        </div>
        <span
          className="shrink-0 rounded-full border border-navy-200/80 bg-navy-50/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-700"
          title={`Income tax calculated using the ${regimeBadge}`}
        >
          {regimeBadge}
        </span>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-navy-600 sm:text-xs">
        <span className="font-semibold text-teal-800">Guaranteed</span> figures
        use <span className="font-medium text-navy-800">fixed pay only</span>
        —what you can typically count on each month.{" "}
        <span className="font-semibold text-navy-800">Illustrative</span> numbers
        add variable pay spread over 12 months; they are a broader estimate only
        (variable may be lumpy, conditional, or not guaranteed).
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MetricCell
          title="Guaranteed monthly in-hand"
          subtitle="Fixed pay only — dependable baseline"
          amount={monthlyInHandFixedOnly}
          emphasize
          sentiment="positive"
        />
        <MetricCell
          title="Illustrative monthly in-hand"
          subtitle="Including variable, averaged per month"
          amount={monthlyInHandIncludingVariable}
          sentiment="positive"
        />
        <MetricCell
          title="Guaranteed annual in-hand"
          subtitle="Fixed pay basis, ×12"
          amount={annualInHandFixedOnly}
        />
        <MetricCell
          title="Illustrative annual in-hand"
          subtitle="Including variable, full year view"
          amount={annualInHandIncludingVariable}
        />
      </div>

      <div className="mt-5 rounded-xl border border-navy-200/70 bg-navy-50/35 p-3.5 sm:p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">
          Regime-aware TDS estimate
        </p>
        <p className="mt-1 text-[10px] leading-snug text-navy-500 sm:text-[11px]">
          Income tax below follows the{" "}
          <span className="font-semibold text-navy-700">{regimeShort} regime</span>{" "}
          slabs used in this calculator (standard deduction; no 80C/HRA in this
          quick view). Same regime applies to both guaranteed and illustrative
          views—only the gross base changes when variable is included.
        </p>

        <dl className="mt-3 space-y-2.5 border-t border-navy-200/50 pt-3 text-xs">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="font-medium text-navy-700">
              Monthly tax (fixed gross)
            </dt>
            <dd className="tabular-nums font-semibold text-navy-900">
              {formatCurrency(monthlyIncomeTaxFixedBasis)}
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 text-[11px] text-navy-500">
            <dt>Annual (fixed)</dt>
            <dd className="tabular-nums">
              {formatCurrency(annualIncomeTaxFixedBasis)}
            </dd>
          </div>
          {hasVariable ? (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-navy-100/80 pt-2.5">
                <dt className="font-medium text-navy-700">
                  Monthly tax (fixed + variable)
                </dt>
                <dd className="tabular-nums font-semibold text-navy-900">
                  {formatCurrency(monthlyIncomeTaxIncludingVariable)}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 text-[11px] text-navy-500">
                <dt>Annual (incl. variable)</dt>
                <dd className="tabular-nums">
                  {formatCurrency(annualIncomeTaxIncludingVariable)}
                </dd>
              </div>
            </>
          ) : null}
        </dl>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-navy-200/50 pt-3 text-[10px] text-navy-500">
          <span className="font-medium text-navy-600">Effective rate on gross:</span>
          <span className="tabular-nums">
            Fixed {formatPercentage(effectiveTaxRateFixedBasis, 1)}
          </span>
          {hasVariable ? (
            <span className="tabular-nums">
              · Fixed + variable{" "}
              {formatPercentage(effectiveTaxRateIncludingVariable, 1)}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-navy-500">
        <span className="inline-flex items-center rounded-full border border-teal-200/80 bg-teal-50/80 px-2 py-0.5 font-medium text-teal-900">
          Live estimate
        </span>
        <span className="leading-snug">
          Updates as you edit fixed, variable, deductions, or regime.
        </span>
      </div>
    </div>
  );
}
