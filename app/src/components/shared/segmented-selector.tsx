"use client";

import { cn } from "@/lib/utils";

interface SegmentOption {
  value: string;
  label: string;
  sublabel?: string;
}

interface SegmentedSelectorProps {
  options: SegmentOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedSelector({
  options,
  value,
  onChange,
  className,
}: SegmentedSelectorProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 px-6 py-3 text-sm font-medium transition-all min-w-[100px]",
              isSelected
                ? "border-teal-600 bg-teal-100 text-teal-900 shadow-sm"
                : "border-navy-200 bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50"
            )}
          >
            <span className={cn(isSelected ? "font-semibold" : "font-medium")}>
              {option.label}
            </span>
            {option.sublabel && (
              <span
                className={cn(
                  "text-xs mt-0.5",
                  isSelected ? "text-teal-800" : "text-navy-400"
                )}
              >
                {option.sublabel}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
