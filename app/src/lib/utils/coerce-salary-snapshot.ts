import type { SalaryInput } from "@/lib/types/salary.types";

/** Fills compensation fields when restoring persisted history (older entries may omit them). */
export function coerceSalarySnapshot(snapshot: SalaryInput): SalaryInput {
  return {
    ...snapshot,
    compensationMode: snapshot.compensationMode ?? "total_only",
    fixedAnnual: snapshot.fixedAnnual ?? 0,
    variableAnnual: snapshot.variableAnnual ?? 0,
  };
}
