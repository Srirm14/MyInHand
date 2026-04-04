"use client";

import { cn } from "@/lib/utils";
import { formatPercentage } from "@/lib/utils/format-currency";

interface SalaryCompositionPanelProps {
  readonly takeHomeShare: number;
  readonly employeeDeductionsShare: number;
  readonly employerPfShare: number;
  readonly className?: string;
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
  size = 88,
}: Readonly<{
  takeHomePct: number;
  deductionsPct: number;
  employerPct: number;
  size?: number;
}>) {
  const a = Math.max(0, takeHomePct);
  const b = Math.max(0, deductionsPct);
  const c = Math.max(0, employerPct);
  const sum = a + b + c;

  if (sum < 0.001) {
    return (
      <div
        className="shrink-0 rounded-full border-2 border-dashed border-navy-200 bg-navy-50/50"
        style={{ width: size, height: size }}
        aria-hidden
      />
    );
  }

  const p1 = (a / sum) * 100;
  const p2 = ((a + b) / sum) * 100;

  // SVG donut approach — more control over stroke width and gaps
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const seg = (from: number, to: number) => {
    const start = (from / 100) * circumference;
    const length = ((to - from) / 100) * circumference;
    // Small gap between segments
    const gap = circumference * 0.012;
    return {
      dasharray: `${Math.max(0, length - gap)} ${circumference - Math.max(0, length - gap)}`,
      dashoffset: -(start),
    };
  };

  const segs = [
    { id: "take", color: COLORS.takeHome, ...seg(0, p1) },
    { id: "ded",  color: COLORS.deductions, ...seg(p1, p2) },
    { id: "er",   color: COLORS.employer, ...seg(p2, 100) },
  ].filter((s) => Number(s.dasharray.split(" ")[0]) > 0);

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        style={{ display: "block" }}
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        {segs.map((s) => (
          <circle
            key={s.id}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={s.color}
            strokeWidth={strokeWidth}
            strokeDasharray={s.dasharray}
            strokeDashoffset={s.dashoffset}
            strokeLinecap="butt"
          />
        ))}
      </svg>
      {/* White center hole */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="rounded-full bg-white shadow-sm ring-1 ring-navy-100/60"
          style={{ width: size * 0.52, height: size * 0.52 }}
        />
      </div>
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
      color: COLORS.takeHome,
      dotClass: "bg-teal-500",
    },
    {
      key: "ded",
      label: "Deductions + tax",
      sub: "of monthly viz. total",
      pct: pd,
      color: COLORS.deductions,
      dotClass: "bg-rose-400",
    },
    {
      key: "er",
      label: "Employer PF",
      sub: "in package (viz. total)",
      pct: pe,
      color: COLORS.employer,
      dotClass: "bg-violet-400",
    },
  ] as const;

  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm",
        className
      )}
    >
      <h3 className="text-sm font-semibold text-navy-800">
        Package composition
      </h3>
      <p className="mt-0.5 text-[10px] leading-snug text-navy-400">
        Uses the same monthly basis as your illustrative in-hand (fixed +
        variable gross + employer PF). Visual split only—not a payslip.
      </p>

      {/* Stacked bar */}
      <div
        className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-navy-100"
        role="img"
        aria-label="Package split: take-home, deductions including tax, employer PF"
      >
        {pt > 0.5 && (
          <div
            className="h-full transition-[width] duration-500 ease-out"
            style={{ width: `${pt}%`, backgroundColor: COLORS.takeHome }}
          />
        )}
        {pd > 0.5 && (
          <div
            className="h-full transition-[width] duration-500 ease-out"
            style={{ width: `${pd}%`, backgroundColor: COLORS.deductions }}
          />
        )}
        {pe > 0.5 && (
          <div
            className="h-full transition-[width] duration-500 ease-out"
            style={{ width: `${pe}%`, backgroundColor: COLORS.employer }}
          />
        )}
      </div>

      <div className="mt-4 flex gap-4">
        <DonutChart
          takeHomePct={pt}
          deductionsPct={pd}
          employerPct={pe}
          size={88}
        />

        <ul className="min-w-0 flex-1 space-y-2.5 self-center">
          {rows.map((row) => (
            <li
              key={row.key}
              className="flex items-center justify-between gap-3 border-b border-navy-50 pb-2 last:border-0 last:pb-0"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className={cn("size-2 shrink-0 rounded-full", row.dotClass)}
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-navy-800 leading-tight">
                    {row.label}
                  </p>
                  <p className="text-[10px] text-navy-400 leading-tight truncate">
                    {row.sub}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-bold tabular-nums text-navy-700">
                {formatPercentage(row.pct, 0)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
