"use client";

import { cn } from "@/lib/utils";
import { CurrencyDisplay } from "./currency-display";

interface DonutGaugeProps {
  /** Value 0–100 representing fill percentage */
  percentage: number;
  /** Amount to display in center */
  amount: number;
  label: string;
  /** Trend text like "+12.4%" */
  trend?: string;
  /** positive = teal, negative = red */
  sentiment?: "positive" | "negative";
  size?: number;
  className?: string;
}

export function DonutGauge({
  percentage,
  amount,
  label,
  trend,
  sentiment = "positive",
  size = 220,
  className,
}: DonutGaugeProps) {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  const strokeColor =
    sentiment === "positive" ? "#0D9488" : "#EF4444";
  const trendColor =
    sentiment === "positive" ? "text-emerald-600" : "text-danger-500";

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={strokeWidth}
        />
        {/* Filled arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* Center content */}
      <div
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
        aria-hidden
      >
        <span className="text-label text-navy-400">{label}</span>
        <CurrencyDisplay
          amount={amount}
          format={Math.abs(amount) >= 100000 ? "compact" : "full"}
          className="text-stat text-navy-800 mt-1"
        />
        {trend && (
          <span className={cn("text-sm font-medium mt-1", trendColor)}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
