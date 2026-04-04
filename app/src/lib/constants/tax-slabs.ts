/**
 * Indian Income Tax Slabs — FY 2025-26 (AY 2026-27)
 * Source: Income Tax Act. Update these when new budget is announced.
 */

export interface TaxSlab {
  min: number;
  max: number;
  rate: number;
}

/** Old Tax Regime — with deductions (80C, HRA, etc.) */
export const OLD_REGIME_SLABS: TaxSlab[] = [
  { min: 0, max: 250000, rate: 0 },
  { min: 250001, max: 500000, rate: 0.05 },
  { min: 500001, max: 1000000, rate: 0.2 },
  { min: 1000001, max: Infinity, rate: 0.3 },
];

/** New Tax Regime — lower rates, no deductions */
export const NEW_REGIME_SLABS: TaxSlab[] = [
  { min: 0, max: 400000, rate: 0 },
  { min: 400001, max: 800000, rate: 0.05 },
  { min: 800001, max: 1200000, rate: 0.1 },
  { min: 1200001, max: 1600000, rate: 0.15 },
  { min: 1600001, max: 2000000, rate: 0.2 },
  { min: 2000001, max: 2400000, rate: 0.25 },
  { min: 2400001, max: Infinity, rate: 0.3 },
];

/** Standard Deduction available in both regimes */
export const STANDARD_DEDUCTION = 75000;

/** Section 87A Rebate — New Regime FY 2025-26: full rebate up to ₹60,000 for taxable income ≤ ₹12L */
export const REBATE_THRESHOLD_NEW = 1200000;
export const REBATE_MAX_NEW = 60000;

/** Section 87A Rebate — Old Regime: max ₹12,500 rebate if taxable income ≤ ₹5L */
export const REBATE_THRESHOLD_OLD = 500000;
export const REBATE_MAX_OLD = 12500;

/** Health & Education Cess */
export const CESS_RATE = 0.04;

/** Professional Tax (monthly max across states) */
export const PROFESSIONAL_TAX_MONTHLY = 200;

/** EPF Employee Contribution Rate */
export const EPF_RATE = 0.12;

/** EPF Wage Ceiling (monthly) — PF calculated on min(basic, this ceiling) for some companies */
export const EPF_WAGE_CEILING = 15000;
