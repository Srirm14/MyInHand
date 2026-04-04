import type { TaxRegime } from "@/lib/types/salary.types";

export interface SimpleSalaryDeductionRow {
  id: string;
  label: string;
  monthlyAmount: number;
}

/**
 * Editable inputs for the freemium quick calculator (no full payroll line-item table).
 * Fixed pay = guaranteed annual cash; variable = performance / bonus / variable CTC (non-monthly).
 */
export interface SimpleSalaryInput {
  /** Guaranteed annual fixed / core salary (cash). */
  annualFixedPay: number;
  /** Variable, bonus, or performance-linked annual expectation (may not be monthly or guaranteed). */
  annualVariablePay: number;
  monthlyProfessionalTax: number;
  monthlyEmployerPf: number;
  monthlyEmployeePf: number;
  extraDeductions: SimpleSalaryDeductionRow[];
  taxRegime: TaxRegime;
}

export interface SimpleSalarySummary {
  annualFixedPay: number;
  annualVariablePay: number;
  /** Fixed + variable (total cash comp basis). */
  annualTotalCashComp: number;
  monthlyGrossFixedOnly: number;
  monthlyGrossIncludingVariable: number;
  monthlyInHandFixedOnly: number;
  annualInHandFixedOnly: number;
  monthlyInHandIncludingVariable: number;
  annualInHandIncludingVariable: number;
  monthlyTotalDeductionsFixedBasis: number;
  monthlyTotalDeductionsIncludingVariable: number;
  annualTotalDeductionsFixedBasis: number;
  annualTotalDeductionsIncludingVariable: number;
  monthlyEmployerPf: number;
  annualEmployerPf: number;
  annualIncomeTaxFixedBasis: number;
  monthlyIncomeTaxFixedBasis: number;
  annualIncomeTaxIncludingVariable: number;
  monthlyIncomeTaxIncludingVariable: number;
  monthlyAdditionalTaxFromVariable: number;
  effectiveTaxRateFixedBasis: number;
  effectiveTaxRateIncludingVariable: number;
  compositionTakeHome: number;
  compositionEmployeeDeductions: number;
  compositionEmployerPf: number;
}

export const defaultSimpleSalaryInput: SimpleSalaryInput = {
  annualFixedPay: 1_800_000,
  annualVariablePay: 0,
  monthlyProfessionalTax: 200,
  monthlyEmployerPf: 1_800,
  monthlyEmployeePf: 1_800,
  extraDeductions: [],
  taxRegime: "new",
};
