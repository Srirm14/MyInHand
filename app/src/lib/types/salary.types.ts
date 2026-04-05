import type { CityTier } from "@/lib/constants/city-tiers";

export type TaxRegime = "old" | "new";

/** Manual CTC: single total vs fixed + variable (total = fixed + variable). */
export type CompensationMode = "total_only" | "fixed_variable";

/** Manual CTC path uses estimates; upload path uses client-side PDF parsing (PDF.js). */
export type SalaryResultSource = "manual_estimated" | "document_parsed";

export interface SalaryInput {
  fullName?: string;
  email?: string;
  annualCTC: number;
  cityTier: CityTier;
  taxRegime: TaxRegime;
  /** Manual entry: how CTC was specified (document flow ignores split). */
  compensationMode?: CompensationMode;
  fixedAnnual?: number;
  variableAnnual?: number;
  /** Set when last result came from document flow */
  resultSource?: SalaryResultSource;
  documentFileName?: string;
}

/** Table grouping on breakdown screen */
export type SalaryComponentGroup =
  | "earnings"
  | "employer_contributions"
  | "deductions";

/**
 * UI / logic section — fixed vs flexible allowances vs variable pay.
 * Employer + deductions omit section.
 */
export type SalaryBreakdownSection =
  | "fixed_core"
  | "allowance"
  | "variable_pay";

/** Provenance for badges (Estimated / Parsed / Edited) */
export type ComponentLineSource = "estimated" | "parsed" | "user_edited";

/** Optional chips next to component name */
export type SalaryComponentTag =
  | "employer_side"
  | "one_time"
  | "tax_sensitive"
  | "conditional"
  | "recurring";

export interface SalaryComponent {
  id: string;
  name: string;
  description: string;
  monthlyValue: number;
  annualValue: number;
  /** Badge coloring */
  type: "earning" | "deduction" | "tax-free" | "employer";
  group: SalaryComponentGroup;
  /** Earnings-only subdivision; omit for employer/deduction rows */
  section?: SalaryBreakdownSection;
  lineSource: ComponentLineSource;
  tags?: SalaryComponentTag[];
  /** User-added allowance or variable line */
  isCustom?: boolean;
  /** Row can be removed from the table */
  removable?: boolean;
  /**
   * Document-import flow: row was not on the PDF and illustrative defaults were skipped —
   * prompt the user to confirm or enter an amount.
   */
  needsVerification?: boolean;
  /** User confirmed a zero / missing line is correct (clears needs-verification without changing amounts). */
  verificationDismissed?: boolean;
}

/** Set when user edits any line after the initial breakdown was built */
export type BreakdownEditBasis =
  | "user_edited_after_estimate"
  | "user_edited_after_parse";

export interface SalaryBreakdownMeta {
  resultSource: SalaryResultSource;
  documentFileName?: string;
  /** User edited line items — summaries are derived from current rows */
  componentsAdjusted?: boolean;
  /** Explicit edit lineage for banners and trust copy */
  breakdownEditBasis?: BreakdownEditBasis;
}

export interface SalaryBreakdown {
  /**
   * Practical monthly bank salary from fixed core + allowances − deductions.
   * Excludes variable-pay section (bonuses / variable CTC slice shown separately).
   */
  monthlyInHand: number;
  /** Same as monthlyInHand — explicit alias for UI copy */
  monthlyInHandExcludingVariable: number;
  /** Fixed + variable cash inflow − deductions (illustrative if variable paid unevenly) */
  monthlyInHandIncludingVariable: number;
  annualIncomeTax: number;
  totalMonthlyDeductions: number;
  takeHomePercent: number;
  /** Annual sum of fixed core + allowance cash components */
  annualFixedCashTotal: number;
  /** Annual sum of variable-pay section cash */
  annualVariableCashTotal: number;
  /** Fixed + variable annual cash (before employer-only CTC slices) */
  annualCashCompensation: number;
  /** Earnings + employer contributions annual (sanity-check vs stated CTC) */
  modeledAnnualPackage: number;
  /** Input CTC for comparison line */
  statedAnnualCTC: number;
  components: SalaryComponent[];
  meta?: SalaryBreakdownMeta;
}
