import type { SalaryInput } from "@/lib/types/salary.types";
import type { BreakdownRecalcContext } from "@/lib/utils/calculate-salary";

export function buildBreakdownRecalcContext(input: SalaryInput): BreakdownRecalcContext {
  const salaryResultSource = input.resultSource ?? "manual_estimated";
  return {
    annualCTC: input.annualCTC,
    cityTier: input.cityTier,
    regime: input.taxRegime,
    variableAnnual:
      input.compensationMode === "fixed_variable"
        ? (input.variableAnnual ?? 0)
        : 0,
    baseLineSource:
      salaryResultSource === "document_parsed" ? "parsed" : "estimated",
    salaryResultSource,
    documentFileName: input.documentFileName,
  };
}
