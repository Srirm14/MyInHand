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
  /** Optional icon in top-right */
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

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-white p-6 shadow-sm border border-navy-200/40",
        className
      )}
    >
      {/* Icon */}
      {Icon && (
        <div className="absolute top-5 right-5 text-navy-300">
          <Icon className="size-6" />
        </div>
      )}

      {/* Label */}
      <p className="text-label text-navy-400 mb-2">{label}</p>

      {/* Amount */}
      <div className="flex items-baseline gap-2">
        <CurrencyDisplay amount={amount} className="text-stat text-navy-800" />
        {trend && (
          <span className="text-xs font-medium text-emerald-600">{trend}</span>
        )}
      </div>

      {/* Sublabel */}
      {sublabel && (
        <p className="mt-1 text-xs text-navy-400">{sublabel}</p>
      )}

      {/* Underline accent */}
      <div className={cn("mt-4 h-1 w-12 rounded-full", underlineColor)} />
    </div>
  );
}
