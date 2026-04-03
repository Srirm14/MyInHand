"use client";

import { cn } from "@/lib/utils";
import { formatCurrency, formatCurrencyCompact } from "@/lib/utils/format-currency";

interface CurrencyDisplayProps {
  amount: number;
  /** "full" = ₹1,42,500 | "compact" = ₹1.4L */
  format?: "full" | "compact";
  className?: string;
  /** Show + or - prefix */
  showSign?: boolean;
  /** Color based on positive/negative */
  colorize?: boolean;
}

export function CurrencyDisplay({
  amount,
  format = "full",
  className,
  showSign = false,
  colorize = false,
}: CurrencyDisplayProps) {
  const formatted =
    format === "compact" ? formatCurrencyCompact(amount) : formatCurrency(amount);
  const sign = showSign && amount > 0 ? "+" : "";

  return (
    <span
      className={cn(
        colorize && amount > 0 && "text-emerald-600",
        colorize && amount < 0 && "text-danger-500",
        className
      )}
    >
      {sign}
      {formatted}
    </span>
  );
}
