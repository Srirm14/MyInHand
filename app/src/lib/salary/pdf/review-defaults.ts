import type {
  ExtractedSalaryField,
  SalaryPdfSemanticKey,
} from "@/lib/salary/pdf/salary-pdf-parse.types";

/** Whether a row should be pre-selected in the review dialog */
export function defaultIncludeExtractedField(f: ExtractedSalaryField): boolean {
  if (f.key === "employeeName" || f.key === "employerName") {
    return false;
  }
  if (f.confidence === "high") return true;
  if (f.confidence === "medium") {
    const allow: SalaryPdfSemanticKey[] = [
      "annualCTC",
      "fixedAnnual",
      "variableAnnual",
      "basic",
      "hra",
      "specialAllowance",
      "vehicleAllowance",
      "washingAllowance",
      "ltaAllowance",
      "variablePay",
      "profitIncentive",
      "employeePf",
      "employerPf",
      "gratuity",
      "professionalTax",
      "joiningBonus",
      "esop",
    ];
    return allow.includes(f.key);
  }
  return false;
}

export function confidenceLabel(c: ExtractedSalaryField["confidence"]): string {
  if (c === "high") return "High confidence";
  if (c === "medium") return "Review suggested";
  return "Low confidence";
}
