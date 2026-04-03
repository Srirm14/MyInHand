import type { CompensationMode } from "@/lib/types/salary.types";

export type DerivedCompField = "fixed" | "variable";

/** Total CTC changed in fixed+variable mode: keep fixed (clamped), derive variable. */
export function applyTotalInSplit(
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

/** Fixed changed: derive variable from total − fixed. */
export function applyFixedInSplit(
  total: number,
  fixed: number
): { annualCTC: number; fixedAnnual: number; variableAnnual: number; derived: DerivedCompField } {
  return applyTotalInSplit(total, fixed);
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
  return { fixedAnnual: 0, variableAnnual: t };
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
