import { cn } from "@/lib/utils";
import { CurrencyDisplay } from "./currency-display";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  amount: number;
  /** Optional sublabel like "Old Regime" or "Per Month" */
  sublabel?: string;
  /** Optional trend like "+4.2% vs LW" */
  trend?: string;
  /** Positive = teal underline, negative = red */
  sentiment?: "positive" | "negative" | "neutral";
  /** Optional icon — aligned top-right of the label row (same row as label on all breakpoints) */
  icon?: LucideIcon;
  className?: string;
}

export function StatCard({
  label,
  amount,
  sublabel,
  trend,
  sentiment = "neutral",
  icon: Icon,
  className,
}: StatCardProps) {
  const underlineColor = {
    positive: "bg-teal-600",
    negative: "bg-danger-500",
    neutral: "bg-navy-300",
  }[sentiment];

  const iconWrapClass = {
    positive:
      "rounded-md bg-teal-50/75 p-1 text-teal-700/90 ring-1 ring-inset ring-teal-200/40",
    negative:
      "rounded-md bg-danger-50/70 p-1 text-danger-600/95 ring-1 ring-inset ring-danger-100/50",
    neutral:
      "rounded-md bg-navy-100/55 p-1 text-navy-600/90 ring-1 ring-inset ring-navy-200/40",
  }[sentiment];

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-navy-200/40 bg-white p-5 shadow-sm sm:p-6",
        className
      )}
    >
      {/* Label + icon: explicit row so long labels never collide with the icon */}
      <div className="mb-2 flex items-start justify-between gap-3">
        <p className="min-w-0 flex-1 text-label leading-snug text-navy-400">
          {label}
        </p>
        {Icon ? (
          <div className={cn("shrink-0", iconWrapClass)} aria-hidden>
            <Icon className="size-4" strokeWidth={1.5} />
          </div>
        ) : null}
      </div>

      {/* Amount */}
      <div className="flex min-w-0 flex-wrap items-baseline gap-2">
        <CurrencyDisplay amount={amount} className="text-stat text-navy-800" />
        {trend ? (
          <span className="text-xs font-medium text-emerald-600">{trend}</span>
        ) : null}
      </div>

      {/* Sublabel */}
      {sublabel ? (
        <p className="mt-1 text-xs leading-snug text-navy-400">{sublabel}</p>
      ) : null}

      {/* Underline accent */}
      <div className={cn("mt-auto pt-4")}>
        <div className={cn("h-1 w-12 rounded-full", underlineColor)} />
      </div>
    </div>
  );
}
