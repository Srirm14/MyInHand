"use client";

import { cn } from "@/lib/utils";
import { formatPercentage } from "@/lib/utils/format-currency";

interface SalaryCompositionPanelProps {
  takeHomeShare: number;
  employeeDeductionsShare: number;
  employerPfShare: number;
  className?: string;
}

const COLORS = {
  takeHome: "#0d9488",
  deductions: "#fb7185",
  employer: "#a78bfa",
} as const;

function DonutChart({
  takeHomePct,
  deductionsPct,
  employerPct,
  sizeClass = "size-20",
}: {
  takeHomePct: number;
  deductionsPct: number;
  employerPct: number;
  sizeClass?: string;
}) {
  const a = Math.max(0, takeHomePct);
  const b = Math.max(0, deductionsPct);
  const c = Math.max(0, employerPct);
  const sum = a + b + c;
  if (sum < 0.001) {
    return (
      <div
        className={cn(
          "shrink-0 rounded-full border-2 border-dashed border-navy-200 bg-navy-50/50",
          sizeClass
        )}
        aria-hidden
      />
    );
  }
  const p1 = (a / sum) * 100;
  const p2 = ((a + b) / sum) * 100;
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full shadow-inner shadow-navy-900/5 ring-1 ring-navy-100",
        sizeClass
      )}
      style={{
        background: `conic-gradient(from -90deg, ${COLORS.takeHome} 0% ${p1}%, ${COLORS.deductions} ${p1}% ${p2}%, ${COLORS.employer} ${p2}% 100%)`,
      }}
      aria-hidden
    >
      <div className="absolute inset-[26%] rounded-full bg-white shadow-sm ring-1 ring-navy-100/80" />
    </div>
  );
}

export function SalaryCompositionPanel({
  takeHomeShare,
  employeeDeductionsShare,
  employerPfShare,
  className,
}: SalaryCompositionPanelProps) {
  const t = Math.max(0, takeHomeShare);
  const d = Math.max(0, employeeDeductionsShare);
  const e = Math.max(0, employerPfShare);
  const sum = t + d + e;
  const safe = sum > 0 ? 1 / sum : 0;
  const pt = t * safe * 100;
  const pd = d * safe * 100;
  const pe = e * safe * 100;

  const rows = [
    {
      key: "take",
      label: "Take-home",
      sub: "of monthly viz. total",
      pct: pt,
      dot: "bg-teal-500",
    },
    {
      key: "ded",
      label: "Deductions + tax",
      sub: "of monthly viz. total",
      pct: pd,
      dot: "bg-rose-400",
    },
    {
      key: "er",
      label: "Employer PF",
      sub: "in package (viz. total)",
      pct: pe,
      dot: "bg-violet-400",
    },
  ] as const;

  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm",
        className
      )}
    >
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-navy-800">
          Package composition
        </h3>
        <p className="mt-0.5 text-[10px] leading-snug text-navy-400">
          Uses the same monthly basis as your illustrative in-hand (fixed +
          variable gross + employer PF). Visual split only—not a payslip.
        </p>
      </div>

      <div className="mt-3 flex gap-3">
        <DonutChart
          takeHomePct={pt}
          deductionsPct={pd}
          employerPct={pe}
          sizeClass="size-20 sm:size-[5.25rem]"
        />

        <div className="min-w-0 flex-1 space-y-2.5">
          <div
            className="flex h-2 w-full overflow-hidden rounded-full bg-navy-100"
            role="img"
            aria-label="Package split: take-home, deductions including tax, employer PF"
          >
            {pt > 0.5 ? (
              <div
                className="h-full bg-teal-500 transition-[width] duration-300 ease-out"
                style={{ width: `${pt}%` }}
              />
            ) : null}
            {pd > 0.5 ? (
              <div
                className="h-full bg-rose-400 transition-[width] duration-300 ease-out"
                style={{ width: `${pd}%` }}
              />
            ) : null}
            {pe > 0.5 ? (
              <div
                className="h-full bg-violet-400 transition-[width] duration-300 ease-out"
                style={{ width: `${pe}%` }}
              />
            ) : null}
          </div>

          <ul className="space-y-2">
            {rows.map((row) => (
              <li
                key={row.key}
                className="flex items-center justify-between gap-3 border-b border-navy-50 pb-2 last:border-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className={cn("size-2 shrink-0 rounded-full", row.dot)}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-navy-800 leading-tight">
                      {row.label}
                    </p>
                    <p className="text-[10px] text-navy-400 leading-tight truncate">
                      {row.sub}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-semibold tabular-nums text-navy-700">
                  {formatPercentage(row.pct, 0)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
