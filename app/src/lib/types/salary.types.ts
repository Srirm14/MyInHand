import type { CityTier } from "@/lib/constants/city-tiers";

export type TaxRegime = "old" | "new";

/** Manual CTC: single total vs fixed + variable (total = fixed + variable). */
export type CompensationMode = "total_only" | "fixed_variable";

/** Manual CTC path uses estimates; upload path uses mock parser until a real doc API exists. */
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
  lineSource: ComponentLineSource;
  tags?: SalaryComponentTag[];
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
  monthlyInHand: number;
  annualIncomeTax: number;
  totalMonthlyDeductions: number;
  takeHomePercent: number;
  components: SalaryComponent[];
  meta?: SalaryBreakdownMeta;
}
