"use client";

import type { TaxRegime } from "@/lib/types/salary.types";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "old" as const, label: "Old Regime" },
  { id: "new" as const, label: "New Regime" },
] as const;

export function TaxRegimeToggle({
  value,
  onChange,
  size = "default",
  className,
}: Readonly<{
  value: TaxRegime;
  onChange: (v: TaxRegime) => void;
  /** `compact` fits toolbars; `default` matches salary input page. */
  size?: "default" | "compact";
  className?: string;
}>) {
  const compact = size === "compact";
  return (
    <div
      className={cn(
        "inline-flex rounded-xl border border-navy-200 bg-navy-100/40 p-1",
        className
      )}
      role="group"
      aria-label="Tax regime"
    >
      {OPTIONS.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "cursor-pointer rounded-lg font-semibold transition-all",
              compact
                ? "px-3 py-1.5 text-xs min-w-[5.5rem] sm:min-w-[6.25rem]"
                : "px-8 py-2.5 text-sm min-w-[120px]",
              active
                ? "border border-teal-600 bg-teal-100 text-teal-900 shadow-sm"
                : "text-navy-600 hover:bg-white/60 hover:text-navy-800"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
