"use client";

import {
  useEffect,
  useRef,
  useState,
  startTransition,
  type InputHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

/** Indian grouping + exactly two decimal places (display). Internal value: whole rupees. */
export function formatInrTwoDecimals(rupees: number): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(rupees) ? rupees : 0);
}

/** Split formatted amount for calmer typography (whole vs .00). */
export function splitInrFormattedParts(rupees: number): {
  whole: string;
  decimals: string;
} {
  const s = formatInrTwoDecimals(rupees);
  const i = s.lastIndexOf(".");
  if (i < 0) return { whole: s, decimals: "" };
  return { whole: s.slice(0, i), decimals: s.slice(i) };
}

function digitsToRupeeInt(s: string): number {
  const d = s.replace(/\D/g, "");
  if (!d) return 0;
  const n = Number.parseInt(d, 10);
  if (!Number.isFinite(n)) return 0;
  return Math.min(Math.max(0, n), Number.MAX_SAFE_INTEGER);
}

export interface InrMoneyInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "onFocus" | "onBlur" | "type" | "size"
  > {
  value: number;
  onCommit: (rupees: number) => void;
  debounceMs?: number;
  /** When true, ₹ prefix uses danger tint (deductions). */
  deductionStyle?: boolean;
  onFocus?: InputHTMLAttributes<HTMLInputElement>["onFocus"];
  onBlur?: InputHTMLAttributes<HTMLInputElement>["onBlur"];
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
}

/**
 * Premium INR field: ₹ prefix, en-IN grouping, .00 on blur; digits-only while typing.
 * Commits integer rupees; display always shows two decimal places when blurred.
 */
export function InrMoneyInput({
  value,
  onCommit,
  debounceMs = 160,
  deductionStyle,
  className,
  disabled,
  "aria-label": ariaLabel,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  onChange: onChangeProp,
  ...rest
}: InrMoneyInputProps) {
  const [focused, setFocused] = useState(false);
  const focusedRef = useRef(false);
  const [draft, setDraft] = useState(() =>
    value === 0 ? "" : String(value)
  );
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (focusedRef.current) return;
    startTransition(() => {
      setDraft(value === 0 ? "" : String(value));
    });
  }, [value, focused]);

  useEffect(
    () => () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    },
    []
  );

  const shown = focused ? draft : formatInrTwoDecimals(value);

  const flush = (raw: string) => {
    const n = digitsToRupeeInt(raw);
    if (n !== value) onCommit(n);
  };

  return (
    <div
      className={cn(
        "relative flex min-w-[7.5rem] items-center justify-end",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute left-2.5 text-xs font-semibold tabular-nums",
          deductionStyle ? "text-danger-400" : "text-navy-400"
        )}
        aria-hidden
      >
        ₹
      </span>
      <input
        {...rest}
        type="text"
        inputMode="numeric"
        disabled={disabled}
        aria-label={ariaLabel}
        value={shown}
        className={cn(
          "w-full rounded-md border border-navy-200/90 bg-white/95 py-2 pr-2.5 pl-7 text-sm font-semibold tabular-nums outline-none",
          "shadow-sm shadow-navy-900/[0.02] transition-[border-color,box-shadow,background-color] duration-200",
          "hover:border-navy-300/90 hover:bg-white",
          "focus:border-teal-400/80 focus:bg-white focus:shadow-md focus:shadow-teal-900/[0.04] focus:ring-2 focus:ring-teal-200/70",
          deductionStyle
            ? "text-danger-600 border-danger-200/70 hover:border-danger-300/80"
            : "text-navy-800"
        )}
        onFocus={(e) => {
          onFocusProp?.(e);
          focusedRef.current = true;
          setFocused(true);
          setDraft(value === 0 ? "" : String(value));
        }}
        onBlur={(e) => {
          onBlurProp?.(e);
          if (debounceRef.current) {
            clearTimeout(debounceRef.current);
            debounceRef.current = null;
          }
          focusedRef.current = false;
          setFocused(false);
          const n = digitsToRupeeInt(e.target.value);
          setDraft(n === 0 ? "" : String(n));
          flush(e.target.value);
        }}
        onChange={(e) => {
          onChangeProp?.(e);
          if (!focusedRef.current) return;
          const cleaned = e.target.value.replace(/\D/g, "");
          setDraft(cleaned);
          if (debounceRef.current) clearTimeout(debounceRef.current);
          debounceRef.current = setTimeout(() => {
            debounceRef.current = null;
            flush(cleaned);
          }, debounceMs);
        }}
      />
    </div>
  );
}
