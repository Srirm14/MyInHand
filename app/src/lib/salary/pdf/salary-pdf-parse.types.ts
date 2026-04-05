/** Confidence tier for autofill vs review UX */
export type PdfFieldConfidence = "high" | "medium" | "low";

/** Semantic buckets used for mapping + review (not necessarily 1:1 with UI rows). */
export type SalaryPdfSemanticKey =
  | "employeeName"
  | "employerName"
  | "annualCTC"
  | "fixedAnnual"
  | "variableAnnual"
  | "basic"
  | "hra"
  | "specialAllowance"
  | "vehicleAllowance"
  | "washingAllowance"
  | "ltaAllowance"
  | "variablePay"
  | "bonus"
  | "joiningBonus"
  | "profitIncentive"
  | "esop"
  | "employeePf"
  | "employerPf"
  | "gratuity"
  | "professionalTax"
  | "monthlyGross"
  | "monthlyInHand"
  | "annualGross"
  | "deductionsTotal";

/** Canonical breakdown row ids we can patch after PDF review */
export type SalaryPdfComponentId =
  | "basic"
  | "hra"
  | "special_allowance"
  | "variable_pay"
  | "esop_estimate"
  | "employer_pf"
  | "employee_pf"
  | "gratuity_accrual"
  | "professional_tax"
  | "income_tax"
  | "meal_allowance"
  | "telecom_reimbursement";

export interface PdfTextItem {
  str: string;
  x: number;
  y: number;
  width: number;
  height: number;
  pageNumber: number;
}

/** One visual text line on a page (left → right). */
export interface PdfTextLine {
  pageNumber: number;
  y: number;
  xMin: number;
  xMax: number;
  text: string;
  items: PdfTextItem[];
}

export interface ExtractedSalaryField {
  key: SalaryPdfSemanticKey;
  labelMatched: string;
  confidence: PdfFieldConfidence;
  amountMonthly?: number;
  amountAnnual?: number;
  /** Short quote for the review UI */
  rawSnippet: string;
}

export interface CompensationPdfParseResult {
  fileName: string;
  pages: {
    pageNumber: number;
    lines: PdfTextLine[];
    plainText: string;
  }[];
  fields: ExtractedSalaryField[];
  warnings: string[];
}

export class SalaryPdfParseError extends Error {
  constructor(
    message: string,
    public readonly code:
      | "not_pdf"
      | "too_large"
      | "empty"
      | "corrupt"
      | "password_required"
      | "unsupported"
  ) {
    super(message);
    this.name = "SalaryPdfParseError";
  }
}
