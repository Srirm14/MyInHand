import type { CompensationMode } from "@/lib/types/salary.types";

export type DerivedCompField = "fixed" | "variable";

/**
 * Headline total changed in fixed+variable mode: put the full amount in fixed by default;
 * variable stays empty (0) until the user adds variable pay.
 */
export function applyTotalInSplit(total: number): {
  annualCTC: number;
  fixedAnnual: number;
  variableAnnual: number;
  derived: DerivedCompField;
} {
  const t = Math.max(0, Math.floor(total));
  return {
    annualCTC: t,
    fixedAnnual: t,
    variableAnnual: 0,
    derived: "variable",
  };
}

/** Fixed changed: keep total, derive variable from total − fixed. */
export function applyFixedInSplit(
  total: number,
  fixed: number
): { annualCTC: number; fixedAnnual: number; variableAnnual: number; derived: DerivedCompField } {
  const t = Math.max(0, Math.floor(total));
  const f = Math.min(Math.max(0, Math.floor(fixed)), t);
  return {
    annualCTC: t,
    fixedAnnual: f,
    variableAnnual: t - f,
    derived: "variable",
  };
}

/** Variable changed: derive fixed from total − variable. */
export function applyVariableInSplit(
  total: number,
  variable: number
): { annualCTC: number; fixedAnnual: number; variableAnnual: number; derived: DerivedCompField } {
  const t = Math.max(0, Math.floor(total));
  const v = Math.min(Math.max(0, Math.floor(variable)), t);
  return {
    annualCTC: t,
    fixedAnnual: t - v,
    variableAnnual: v,
    derived: "fixed",
  };
}

/** Defaults when switching into split mode from a known total. */
export function initialSplitFromTotal(total: number): {
  fixedAnnual: number;
  variableAnnual: number;
} {
  const t = Math.max(0, Math.floor(total));
  return { fixedAnnual: t, variableAnnual: 0 };
}

export function isSplitBalanced(
  mode: CompensationMode,
  total: number,
  fixed: number,
  variable: number
): boolean {
  if (mode === "total_only") return true;
  return Math.abs(fixed + variable - total) <= 1;
}
