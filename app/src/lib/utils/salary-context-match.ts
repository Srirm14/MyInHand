import type { SalaryInput } from "@/lib/types/salary.types";

/** Whether two inputs represent the same saved salary context (for nav highlight). */
export function isSalaryInputEquivalent(a: SalaryInput, b: SalaryInput): boolean {
  return (
    a.annualCTC === b.annualCTC &&
    a.taxRegime === b.taxRegime &&
    a.cityTier === b.cityTier &&
    (a.compensationMode ?? "total_only") === (b.compensationMode ?? "total_only") &&
    (a.fixedAnnual ?? 0) === (b.fixedAnnual ?? 0) &&
    (a.variableAnnual ?? 0) === (b.variableAnnual ?? 0) &&
    (a.resultSource ?? "manual_estimated") ===
      (b.resultSource ?? "manual_estimated")
  );
}
