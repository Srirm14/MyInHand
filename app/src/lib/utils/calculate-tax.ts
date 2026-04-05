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

/**
 * Mirrors {@link calculateSlabTax} allocation — rupees of taxable income falling in each slab.
 */
export function allocateTaxableIncomeAcrossSlabs(
  taxableIncome: number,
  slabs: TaxSlab[]
): number[] {
  let remaining = taxableIncome;
  const amounts: number[] = [];
  for (const slab of slabs) {
    if (remaining <= 0) {
      amounts.push(0);
      continue;
    }
    const inSlab = Math.min(remaining, slab.max - slab.min + 1);
    amounts.push(inSlab);
    remaining -= inSlab;
  }
  return amounts;
}

/** Bracket span in rupees (same formula as slab walk). Top slab uses a display cap for charts. */
export function slabBracketSpanRupees(
  slab: TaxSlab,
  opts?: { infinityCapRupees?: number }
): number {
  if (slab.max !== Number.POSITIVE_INFINITY) {
    return slab.max - slab.min + 1;
  }
  const cap = opts?.infinityCapRupees ?? 5_000_000;
  return cap;
}

export interface RegimeVisualizationModel {
  regime: TaxRegime;
  taxableIncome: number;
  estimatedAnnualTax: number;
  effectiveRatePercent: number;
  slabs: TaxSlab[];
  allocations: number[];
  topSlabIndex: number;
  topSlabIncomeSharePercent: number;
  /** Sum of visual spans used for the bar (finite + capped top). */
  totalVisualSpan: number;
  /** Per-slab horizontal weights for the utilization bar. */
  visualSpans: number[];
}

/**
 * Taxable income, slab fills, and tax — aligned with {@link calculateIncomeTax} for the same inputs.
 */
export function buildRegimeVisualizationModel(
  grossAnnualSalary: number,
  regime: TaxRegime,
  oldRegimeAdditionalDeductions = 0
): RegimeVisualizationModel | null {
  const g = Math.max(0, Math.round(grossAnnualSalary));
  if (g <= 0) return null;

  const slabs = regime === "old" ? OLD_REGIME_SLABS : NEW_REGIME_SLABS;
  const tax = calculateIncomeTax(g, regime, oldRegimeAdditionalDeductions);
  const taxableIncome = tax.taxableIncome;
  const allocations = allocateTaxableIncomeAcrossSlabs(taxableIncome, slabs);

  let topSlabIndex = -1;
  for (let i = slabs.length - 1; i >= 0; i--) {
    if (allocations[i]! > 0) {
      topSlabIndex = i;
      break;
    }
  }

  const topAlloc =
    topSlabIndex >= 0 ? allocations[topSlabIndex]! : 0;
  const topSlabIncomeSharePercent =
    taxableIncome > 0
      ? Math.round((topAlloc / taxableIncome) * 1000) / 10
      : 0;

  const spans = slabs.map((s, i) =>
    slabBracketSpanRupees(s, {
      infinityCapRupees: Math.max(
        500_000,
        Math.min(5_000_000, (allocations[i] ?? 0) * 2 || 500_000)
      ),
    })
  );
  const totalVisualSpan = spans.reduce((a, b) => a + b, 0);

  return {
    regime,
    taxableIncome,
    estimatedAnnualTax: tax.annualTax,
    effectiveRatePercent: tax.effectiveRate,
    slabs,
    allocations,
    topSlabIndex,
    topSlabIncomeSharePercent,
    totalVisualSpan,
    visualSpans: spans,
  };
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
