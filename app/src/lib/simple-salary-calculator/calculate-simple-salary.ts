import { calculateIncomeTax } from "@/lib/utils/calculate-tax";
import type { SimpleSalaryInput, SimpleSalarySummary } from "./types";

function clampNonNegative(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, n);
}

/**
 * Fixed pay = dependable monthly gross base; variable = added to gross and tax when “incl. variable”.
 * Same statutory monthly deductions assumed for both views; only TDS differs by gross.
 */
export function calculateSimpleSalarySummary(
  input: SimpleSalaryInput
): SimpleSalarySummary {
  const fixedAnnual = clampNonNegative(input.annualFixedPay);
  const variableAnnual = clampNonNegative(input.annualVariablePay);
  const totalAnnual = fixedAnnual + variableAnnual;

  const monthlyGrossFixedOnly = fixedAnnual > 0 ? fixedAnnual / 12 : 0;
  const monthlyGrossIncludingVariable =
    totalAnnual > 0 ? totalAnnual / 12 : 0;

  const taxFixed = calculateIncomeTax(fixedAnnual, input.taxRegime, 0);
  const taxTotal = calculateIncomeTax(totalAnnual, input.taxRegime, 0);

  const monthlyTaxFixed = taxFixed.monthlyTax;
  const monthlyTaxTotal = taxTotal.monthlyTax;
  const monthlyAdditionalTaxFromVariable = Math.max(
    0,
    monthlyTaxTotal - monthlyTaxFixed
  );

  const pt = clampNonNegative(input.monthlyProfessionalTax);
  const epf = clampNonNegative(input.monthlyEmployeePf);
  const monthlyEmployerPf = clampNonNegative(input.monthlyEmployerPf);

  const extraMonthly = input.extraDeductions.reduce(
    (s, r) => s + clampNonNegative(r.monthlyAmount),
    0
  );

  const monthlyTotalDeductionsFixedBasis =
    pt + epf + monthlyTaxFixed + extraMonthly;
  const monthlyTotalDeductionsIncludingVariable =
    pt + epf + monthlyTaxTotal + extraMonthly;

  const monthlyInHandFixedOnly = clampNonNegative(
    monthlyGrossFixedOnly - monthlyTotalDeductionsFixedBasis
  );
  const monthlyInHandIncludingVariable = clampNonNegative(
    monthlyGrossIncludingVariable - monthlyTotalDeductionsIncludingVariable
  );

  const annualInHandFixedOnly = monthlyInHandFixedOnly * 12;
  const annualInHandIncludingVariable = monthlyInHandIncludingVariable * 12;

  const annualTotalDeductionsFixedBasis =
    monthlyTotalDeductionsFixedBasis * 12;
  const annualTotalDeductionsIncludingVariable =
    monthlyTotalDeductionsIncludingVariable * 12;

  const annualEmployerPf = monthlyEmployerPf * 12;

  const vizTotal = monthlyGrossIncludingVariable + monthlyEmployerPf;
  let compositionTakeHome = 0;
  let compositionEmployeeDeductions = 0;
  let compositionEmployerPf = 0;

  if (vizTotal > 0) {
    compositionTakeHome = monthlyInHandIncludingVariable / vizTotal;
    compositionEmployeeDeductions =
      monthlyTotalDeductionsIncludingVariable / vizTotal;
    compositionEmployerPf = monthlyEmployerPf / vizTotal;
  }

  return {
    annualFixedPay: fixedAnnual,
    annualVariablePay: variableAnnual,
    annualTotalCashComp: totalAnnual,
    monthlyGrossFixedOnly,
    monthlyGrossIncludingVariable,
    monthlyInHandFixedOnly,
    annualInHandFixedOnly,
    monthlyInHandIncludingVariable,
    annualInHandIncludingVariable,
    monthlyTotalDeductionsFixedBasis,
    monthlyTotalDeductionsIncludingVariable,
    annualTotalDeductionsFixedBasis,
    annualTotalDeductionsIncludingVariable,
    monthlyEmployerPf,
    annualEmployerPf,
    annualIncomeTaxFixedBasis: taxFixed.annualTax,
    monthlyIncomeTaxFixedBasis: monthlyTaxFixed,
    annualIncomeTaxIncludingVariable: taxTotal.annualTax,
    monthlyIncomeTaxIncludingVariable: monthlyTaxTotal,
    monthlyAdditionalTaxFromVariable,
    effectiveTaxRateFixedBasis: taxFixed.effectiveRate,
    effectiveTaxRateIncludingVariable: taxTotal.effectiveRate,
    compositionTakeHome,
    compositionEmployeeDeductions,
    compositionEmployerPf,
  };
}
