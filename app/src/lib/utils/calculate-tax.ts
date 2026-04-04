import {
  OLD_REGIME_SLABS,
  NEW_REGIME_SLABS,
  STANDARD_DEDUCTION,
  REBATE_THRESHOLD_NEW,
  REBATE_THRESHOLD_OLD,
  REBATE_MAX_NEW,
  REBATE_MAX_OLD,
  CESS_RATE,
  type TaxSlab,
} from "@/lib/constants/tax-slabs";
import type { TaxRegime } from "@/lib/types/salary.types";

/**
 * Calculate tax using progressive slab method.
 */
function calculateSlabTax(taxableIncome: number, slabs: TaxSlab[]): number {
  let tax = 0;
  for (const slab of slabs) {
    if (taxableIncome <= 0) break;
    const taxableInSlab = Math.min(
      taxableIncome,
      slab.max - slab.min + 1
    );
    tax += taxableInSlab * slab.rate;
    taxableIncome -= taxableInSlab;
  }
  return tax;
}

export interface TaxResult {
  annualTax: number;
  monthlyTax: number;
  effectiveRate: number;
  taxableIncome: number;
}

/**
 * Calculate income tax for given taxable income and regime.
 *
 * ASSUMPTION: Old regime deductions (80C, HRA) are NOT applied here.
 * Those reduce taxable income before calling this function.
 * For now, only standard deduction is applied.
 */
export function calculateIncomeTax(
  grossAnnualIncome: number,
  regime: TaxRegime,
  /** Additional deductions for old regime (80C, HRA exemption, etc.) */
  additionalDeductions = 0
): TaxResult {
  const slabs = regime === "old" ? OLD_REGIME_SLABS : NEW_REGIME_SLABS;
  const rebateThreshold =
    regime === "old" ? REBATE_THRESHOLD_OLD : REBATE_THRESHOLD_NEW;

  // Apply standard deduction
  let taxableIncome = grossAnnualIncome - STANDARD_DEDUCTION;

  // Apply additional deductions (old regime only)
  if (regime === "old") {
    taxableIncome -= additionalDeductions;
  }

  taxableIncome = Math.max(0, taxableIncome);

  // Calculate slab tax
  let tax = calculateSlabTax(taxableIncome, slabs);

  // Apply Section 87A rebate
  // Old regime: partial rebate up to ₹12,500 when taxable income ≤ ₹5L
  // New regime: full rebate up to ₹60,000 when taxable income ≤ ₹12L (at ≤12L, slab tax never exceeds ₹60K)
  if (taxableIncome <= rebateThreshold) {
    const maxRebate = regime === "old" ? REBATE_MAX_OLD : REBATE_MAX_NEW;
    tax = Math.max(0, tax - maxRebate);
  }

  // Add cess
  const cess = tax * CESS_RATE;
  const totalTax = Math.round(tax + cess);

  return {
    annualTax: totalTax,
    monthlyTax: Math.round(totalTax / 12),
    effectiveRate:
      grossAnnualIncome > 0
        ? Number(((totalTax / grossAnnualIncome) * 100).toFixed(1))
        : 0,
    taxableIncome,
  };
}
