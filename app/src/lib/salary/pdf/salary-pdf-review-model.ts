import type {
  CompensationPdfParseResult,
  ExtractedSalaryField,
  SalaryPdfSemanticKey,
} from "@/lib/salary/pdf/salary-pdf-parse.types";

/**
 * Industry-style grouping: cash earnings → employee deductions → employer CTC slices.
 * Order within each group is preserved for review UI.
 */
export const SALARY_REVIEW_GROUPS: {
  id: string;
  label: string;
  description: string;
  keys: readonly SalaryPdfSemanticKey[];
}[] = [
  {
    id: "earnings",
    label: "Cash earnings & allowances",
    description:
      "Fixed and variable cash lines that flow into in-hand (basic, HRA, allowances, variable).",
    keys: [
      "basic",
      "hra",
      "specialAllowance",
      "vehicleAllowance",
      "washingAllowance",
      "ltaAllowance",
      "variablePay",
      "profitIncentive",
      "joiningBonus",
      "esop",
    ],
  },
  {
    id: "employee",
    label: "Your deductions",
    description: "Statutory or payroll deductions taken from salary (employee side).",
    keys: ["employeePf", "professionalTax"],
  },
  {
    id: "employer",
    label: "Employer / CTC packaging",
    description: "Usually part of CTC but not monthly bank salary — confirm if your letter lists them.",
    keys: ["employerPf", "gratuity"],
  },
];

/** Flat list of all review keys (derived from groups). */
export const SALARY_REVIEW_COMPONENT_KEYS: SalaryPdfSemanticKey[] =
  SALARY_REVIEW_GROUPS.flatMap((g) => [...g.keys]);

/** Sort keys: missing first, then needs review, then high confidence; stable within band. */
export function orderSalaryReviewKeysInGroup(
  groupKeys: readonly SalaryPdfSemanticKey[],
  missingKeys: readonly SalaryPdfSemanticKey[],
  parse: CompensationPdfParseResult
): SalaryPdfSemanticKey[] {
  const miss = new Set(missingKeys);
  return [...groupKeys].sort((a, b) => {
    const band = (k: SalaryPdfSemanticKey) => {
      if (miss.has(k)) return 0;
      const f = parse.fields.find((x) => x.key === k);
      if (!f) return 0;
      return f.confidence === "high" ? 2 : 1;
    };
    const d = band(a) - band(b);
    if (d !== 0) return d;
    return groupKeys.indexOf(a) - groupKeys.indexOf(b);
  });
}

export type ParsedFieldStatus = "parsed_confident" | "parsed_review";

export type CtcLineage =
  | "parsed_high"
  | "parsed_review"
  | "from_filename"
  | "from_gross"
  | "placeholder";

export function classifyParsedField(f: ExtractedSalaryField): ParsedFieldStatus {
  return f.confidence === "high" ? "parsed_confident" : "parsed_review";
}

export function getMissingComponentKeys(
  fields: ExtractedSalaryField[]
): SalaryPdfSemanticKey[] {
  const have = new Set(fields.map((f) => f.key));
  return SALARY_REVIEW_COMPONENT_KEYS.filter((k) => !have.has(k));
}

function amountFromCtcField(f: ExtractedSalaryField | undefined): number | null {
  if (!f) return null;
  if (f.amountAnnual != null) return Math.round(f.amountAnnual);
  if (f.amountMonthly != null) return Math.round(f.amountMonthly * 12);
  return null;
}

/**
 * Explains where the seeded CTC came from (for honest microcopy in the review UI).
 */
export function inferCtcLineage(
  parse: CompensationPdfParseResult,
  fileName: string
): CtcLineage {
  const ctc = parse.fields.find((f) => f.key === "annualCTC");
  if (ctc) {
    return ctc.confidence === "high" ? "parsed_high" : "parsed_review";
  }
  const gross = parse.fields.find((f) => f.key === "annualGross");
  if (gross && amountFromCtcField(gross) != null) {
    return "from_gross";
  }
  const base = fileName.replace(/\.[^.]+$/i, "");
  if (
    /(\d+(?:\.\d+)?)\s*l(?:akh)?/i.test(fileName) ||
    /(\d{6,9})/.test(base)
  ) {
    return "from_filename";
  }
  return "placeholder";
}

export type NameLineage = "parsed_text" | "not_in_document";

export function inferEmployeeNameLineage(
  fields: ExtractedSalaryField[]
): NameLineage {
  const n = fields.find((f) => f.key === "employeeName");
  if (!n?.rawSnippet?.trim()) return "not_in_document";
  return "parsed_text";
}
