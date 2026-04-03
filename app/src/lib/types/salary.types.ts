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

export interface SalaryComponent {
  id: string;
  name: string;
  description: string;
  monthlyValue: number;
  annualValue: number;
  type: "earning" | "deduction" | "tax-free";
}

export interface SalaryBreakdownMeta {
  resultSource: SalaryResultSource;
  documentFileName?: string;
  /** User edited line items in the breakup table */
  componentsAdjusted?: boolean;
}

export interface SalaryBreakdown {
  monthlyInHand: number;
  annualIncomeTax: number;
  totalMonthlyDeductions: number;
  takeHomePercent: number;
  components: SalaryComponent[];
  meta?: SalaryBreakdownMeta;
}
