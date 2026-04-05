/**
 * calculate-tax.test.ts
 *
 * Deterministic unit tests for income tax calculations (FY 2025-26).
 * All expected values are hand-computed from the slab definitions in
 * lib/constants/tax-slabs.ts and the algorithm in lib/utils/calculate-tax.ts.
 */

import { describe, it, expect } from "vitest";
import {
  calculateIncomeTax,
  allocateTaxableIncomeAcrossSlabs,
  buildRegimeVisualizationModel,
} from "@/lib/utils/calculate-tax";
import {
  NEW_REGIME_SLABS,
  OLD_REGIME_SLABS,
  STANDARD_DEDUCTION,
  REBATE_THRESHOLD_NEW,
  REBATE_THRESHOLD_OLD,
} from "@/lib/constants/tax-slabs";

// ─── helpers ────────────────────────────────────────────────────────────────

function newTax(gross: number, extra = 0) {
  return calculateIncomeTax(gross, "new", extra);
}
function oldTax(gross: number, extra = 0) {
  return calculateIncomeTax(gross, "old", extra);
}

// ─── NEW REGIME ─────────────────────────────────────────────────────────────

describe("calculateIncomeTax — new regime", () => {
  it("zero income → zero tax", () => {
    const r = newTax(0);
    expect(r.annualTax).toBe(0);
    expect(r.monthlyTax).toBe(0);
    expect(r.effectiveRate).toBe(0);
    expect(r.taxableIncome).toBe(0);
  });

  it("income below standard deduction → zero tax", () => {
    const r = newTax(50_000);
    expect(r.annualTax).toBe(0);
    expect(r.taxableIncome).toBe(0);
  });

  it("5 LPA — rebate wipes full tax (taxable < rebate threshold)", () => {
    const r = newTax(500_000);
    // taxableIncome = 500000 - 75000 = 425000
    // slab tax ≈ 1250 → wiped by 60000 rebate
    expect(r.taxableIncome).toBe(425_000);
    expect(r.annualTax).toBe(0);
    expect(r.monthlyTax).toBe(0);
    expect(r.effectiveRate).toBe(0);
  });

  it("8 LPA — rebate still applies (slab tax < 60000)", () => {
    const r = newTax(800_000);
    // taxable = 725000; slab tax = 16250 → wiped
    expect(r.taxableIncome).toBe(725_000);
    expect(r.annualTax).toBe(0);
    expect(r.monthlyTax).toBe(0);
  });

  it("12 LPA — rebate applies (taxable 1125000 ≤ 1200000, slab tax < 60000)", () => {
    const r = newTax(1_200_000);
    // taxable = 1125000; slab tax ≈ 52500 → wiped by rebate
    expect(r.taxableIncome).toBe(1_125_000);
    expect(r.annualTax).toBe(0);
    expect(r.monthlyTax).toBe(0);
    expect(r.effectiveRate).toBe(0);
  });

  it("12.75 LPA — taxable exactly at rebate ceiling, slab tax ≤ 60000 → zero tax", () => {
    // taxable = 1275000 - 75000 = 1200000 (exactly at threshold)
    // slab tax = 0+20000+39999.9 ≈ 59999.9 → wiped
    const r = newTax(1_275_000);
    expect(r.taxableIncome).toBe(1_200_000);
    expect(r.annualTax).toBe(0);
  });

  it("13 LPA — taxable exceeds rebate threshold (1225000 > 1200000) → tax applies", () => {
    // taxable = 1225000; slab: 0+20000+40000+3749.85 = 63749.85
    // no rebate; cess = 2549.994; total = 66300
    const r = newTax(1_300_000);
    expect(r.taxableIncome).toBe(1_225_000);
    expect(r.annualTax).toBe(66_300);
    expect(r.monthlyTax).toBe(5_525);
    expect(r.effectiveRate).toBe(5.1);
  });

  it("15 LPA new regime", () => {
    // taxable = 1500000 - 75000 = 1425000; no rebate
    // slab: 0+20000+40000+(224999*0.15)=0+20000+40000+33749.85=93749.85
    // cess = 3749.994; total = 97500
    const r = newTax(1_500_000);
    expect(r.taxableIncome).toBe(1_425_000);
    expect(r.annualTax).toBe(97_500);
    expect(r.monthlyTax).toBe(8_125);
  });

  it("20 LPA new regime — correct slab traversal through 5th bracket", () => {
    // taxable = 1925000; slabs: 0+20000+40000+60000+64999.8 = 184999.8
    // cess = 7399.992; total = 192400
    const r = newTax(2_000_000);
    expect(r.taxableIncome).toBe(1_925_000);
    expect(r.annualTax).toBe(192_400);
    expect(r.monthlyTax).toBe(16_033);
    expect(r.effectiveRate).toBe(9.6);
  });

  it("25 LPA new regime — reaches 25% and 30% slabs", () => {
    // taxable = 2425000
    // slabs: 0+20000+40000+60000+80000+100000(slab6 full)+7499.7(slab7 24999@30%) = 307499.7
    // cess = 12299.988; total = Math.round(319799.688) = 319800
    const r = newTax(2_500_000);
    expect(r.taxableIncome).toBe(2_425_000);
    expect(r.annualTax).toBe(319_800);
  });

  it("30 LPA new regime — hits top 30% slab", () => {
    // taxable = 2925000; slabs up to 2400000 = 0+20000+40000+60000+80000+100000 = 300000
    // remaining = 2925000-(400001+400000+400000+400000+400000+400000) = 2925000-2400001 = 524999
    // 524999@30% = 157499.7; total = 457499.7
    // cess = 18299.988; total = 475800
    const r = newTax(3_000_000);
    expect(r.taxableIncome).toBe(2_925_000);
    expect(r.annualTax).toBe(475_800);
    expect(r.monthlyTax).toBe(39_650);
    expect(r.effectiveRate).toBe(15.9);
  });

  it("50 LPA new regime — very high income, 30% bracket dominant", () => {
    const r = newTax(5_000_000);
    expect(r.taxableIncome).toBe(4_925_000);
    expect(r.annualTax).toBeGreaterThan(1_000_000);
    expect(r.effectiveRate).toBeGreaterThan(20);
  });

  it("taxable income is clamped to zero when gross ≤ standard deduction", () => {
    const r = newTax(75_000);
    expect(r.taxableIncome).toBe(0);
    expect(r.annualTax).toBe(0);
  });

  it("negative gross treated as zero income", () => {
    const r = newTax(-100_000);
    expect(r.taxableIncome).toBe(0);
    expect(r.annualTax).toBe(0);
  });

  it("additional deductions are ignored for new regime", () => {
    // New regime doesn't use additional deductions
    const withExtra = newTax(1_500_000, 100_000);
    const withoutExtra = newTax(1_500_000, 0);
    expect(withExtra.annualTax).toBe(withoutExtra.annualTax);
    expect(withExtra.taxableIncome).toBe(withoutExtra.taxableIncome);
  });

  it("effective rate is percentage of gross (not taxable) income", () => {
    const r = newTax(2_000_000);
    const expected = Number(((r.annualTax / 2_000_000) * 100).toFixed(1));
    expect(r.effectiveRate).toBe(expected);
  });

  it("monthly tax is exactly annual ÷ 12 rounded", () => {
    const r = newTax(3_000_000);
    expect(r.monthlyTax).toBe(Math.round(r.annualTax / 12));
  });

  it("effectiveRate is 0 for zero-tax incomes", () => {
    expect(newTax(1_000_000).effectiveRate).toBe(0);
  });

  it("1 crore new regime — extreme high income", () => {
    const r = newTax(10_000_000);
    expect(r.taxableIncome).toBe(9_925_000);
    expect(r.annualTax).toBeGreaterThan(2_500_000);
    expect(r.effectiveRate).toBeGreaterThan(25);
  });

  it("rebate threshold boundary — 1200000 taxable exactly = zero tax", () => {
    // gross = 1275000 → taxable = 1200000 exactly at threshold
    const r = newTax(1_275_000);
    expect(r.annualTax).toBe(0);
  });

  it("one rupee above rebate threshold → tax appears", () => {
    // gross = 1275001 → taxable = 1200001 > threshold
    const r = newTax(1_275_001);
    expect(r.annualTax).toBeGreaterThan(0);
  });
});

// ─── OLD REGIME ─────────────────────────────────────────────────────────────

describe("calculateIncomeTax — old regime", () => {
  it("zero income → zero tax", () => {
    const r = oldTax(0);
    expect(r.annualTax).toBe(0);
    expect(r.taxableIncome).toBe(0);
  });

  it("5 LPA — rebate applies (taxable ≤ 500000)", () => {
    // taxable = 500000 - 75000 = 425000; slab = 8750; rebate max 12500 → 0
    const r = oldTax(500_000);
    expect(r.taxableIncome).toBe(425_000);
    expect(r.annualTax).toBe(0);
  });

  it("5.75 LPA — taxable exactly at old rebate threshold → tax = 0", () => {
    // taxable = 575000 - 75000 = 500000 ≤ 500000; slab ≈ 12500 → wiped
    const r = oldTax(575_000);
    expect(r.taxableIncome).toBe(500_000);
    expect(r.annualTax).toBe(0);
  });

  it("5.8 LPA — taxable 505000 > threshold → rebate does not apply", () => {
    // taxable = 580000-75000=505000 > 500000; slab = 12500 + 999.8 = 13499.8
    // cess = 539.992; total = 14040
    const r = oldTax(580_000);
    expect(r.taxableIncome).toBe(505_000);
    expect(r.annualTax).toBe(14_040);
    expect(r.monthlyTax).toBe(1_170);
  });

  it("7.5 LPA old regime — correct 20% slab", () => {
    // taxable = 675000; slab: 250001@0% + 249999@5%=12500 + 174999@20%=35000 = 47500
    // wait: width of slab1 = 250001; slab2 = 500000-250001+1 = 250000; slab3 = 1000000-500001+1=500000
    // taxableInSlab1 = min(675000, 250001) = 250001; remaining=424999
    // taxableInSlab2 = min(424999, 250000) = 250000; 250000@5%=12500; remaining=174999
    // taxableInSlab3 = min(174999, 500000) = 174999; 174999@20%=34999.8; remaining=0
    // total = 0+12500+34999.8 = 47499.8
    // no rebate (675000>500000)
    // cess = 47499.8*0.04 = 1899.992; total = Math.round(49399.792) = 49400
    const r = oldTax(750_000);
    expect(r.taxableIncome).toBe(675_000);
    expect(r.annualTax).toBe(49_400);
    expect(r.monthlyTax).toBe(Math.round(49_400 / 12));
  });

  it("10 LPA old regime — reaches 20% but not 30% slab", () => {
    // taxable = 925000; slab: 250001@0% + 250000@5% + 424999@20%
    // = 0 + 12500 + 84999.8 = 97499.8; cess = 3899.992; total = 101400
    const r = oldTax(1_000_000);
    expect(r.taxableIncome).toBe(925_000);
    expect(r.annualTax).toBe(101_400);
    expect(r.monthlyTax).toBe(8_450);
    expect(r.effectiveRate).toBe(10.1);
  });

  it("15 LPA old regime — hits 30% slab", () => {
    // taxable = 1425000
    // slab1: 250001@0%=0; slab2: 250000@5%=12500; slab3: 500000@20%=100000; slab4: 424999@30%=127499.7
    // total = 239999.7; cess = 9599.988; Math.round(249599.688) = 249600
    const r = oldTax(1_500_000);
    expect(r.taxableIncome).toBe(1_425_000);
    expect(r.annualTax).toBe(249_600);
    expect(r.monthlyTax).toBe(20_800);
  });

  it("20 LPA old regime", () => {
    // taxable = 1925000; in 30% bracket = 924999
    // slab: 0+12500+100000+277499.7 = 389999.7
    // cess = 15599.988; total = 405600
    const r = oldTax(2_000_000);
    expect(r.taxableIncome).toBe(1_925_000);
    expect(r.annualTax).toBe(405_600);
    expect(r.monthlyTax).toBe(33_800);
  });

  it("old regime — additional deductions reduce taxable income", () => {
    const withDeductions = oldTax(1_000_000, 150_000); // 80C max
    const without = oldTax(1_000_000, 0);
    expect(withDeductions.taxableIncome).toBe(without.taxableIncome - 150_000);
    expect(withDeductions.annualTax).toBeLessThanOrEqual(without.annualTax);
  });

  it("old regime — large additional deductions can wipe tax", () => {
    // 6 LPA, 80C 150000 → taxable = 6L - 75K - 150K = 375000 ≤ 500000; slab = 6250 → wiped
    const r = oldTax(600_000, 150_000);
    expect(r.annualTax).toBe(0);
  });

  it("old regime — additional deductions capped at gross", () => {
    // 5 LPA with 10L deductions — taxable should be clamped to 0
    const r = oldTax(500_000, 10_000_000);
    expect(r.taxableIncome).toBe(0);
    expect(r.annualTax).toBe(0);
  });

  it("old rebate threshold is 500000", () => {
    expect(REBATE_THRESHOLD_OLD).toBe(500_000);
  });

  it("new rebate threshold is 1200000", () => {
    expect(REBATE_THRESHOLD_NEW).toBe(1_200_000);
  });

  it("standard deduction is 75000 for both regimes", () => {
    expect(STANDARD_DEDUCTION).toBe(75_000);
  });
});

// ─── REGIME COMPARISON ──────────────────────────────────────────────────────

describe("calculateIncomeTax — old vs new regime comparison", () => {
  it("new regime is better for 10 LPA", () => {
    const newR = newTax(1_000_000);
    const oldR = oldTax(1_000_000, 0);
    // new: 0 tax; old: 101400 → new is better
    expect(newR.annualTax).toBeLessThan(oldR.annualTax);
  });

  it("new regime is better for 8 LPA", () => {
    expect(newTax(800_000).annualTax).toBeLessThanOrEqual(oldTax(800_000).annualTax);
  });

  it("same income returns different taxable income for old regime with deductions", () => {
    const gross = 1_000_000;
    const newR = newTax(gross);
    const oldR = oldTax(gross, 150_000);
    expect(oldR.taxableIncome).toBe(newR.taxableIncome - 150_000);
  });

  it("both regimes apply cess at 4%", () => {
    // At high income where rebate doesn't apply, verify cess is included
    const r30 = newTax(3_000_000);
    // Tax without cess at 30L: ~457500; with cess: ~475800 (verified above)
    expect(r30.annualTax).toBe(475_800);
  });

  it("effective rate never exceeds 35% for any valid Indian income", () => {
    [5_000_000, 10_000_000, 50_000_000].forEach((gross) => {
      expect(newTax(gross).effectiveRate).toBeLessThan(35);
      expect(oldTax(gross).effectiveRate).toBeLessThan(35);
    });
  });

  it("tax is monotonically non-decreasing with income", () => {
    const incomes = [500_000, 1_000_000, 1_500_000, 2_000_000, 3_000_000];
    for (let i = 1; i < incomes.length; i++) {
      expect(newTax(incomes[i]!).annualTax).toBeGreaterThanOrEqual(
        newTax(incomes[i - 1]!).annualTax
      );
      expect(oldTax(incomes[i]!).annualTax).toBeGreaterThanOrEqual(
        oldTax(incomes[i - 1]!).annualTax
      );
    }
  });
});

// ─── allocateTaxableIncomeAcrossSlabs ───────────────────────────────────────

describe("allocateTaxableIncomeAcrossSlabs", () => {
  it("zero income → all zeros", () => {
    const alloc = allocateTaxableIncomeAcrossSlabs(0, NEW_REGIME_SLABS);
    expect(alloc.every((a) => a === 0)).toBe(true);
    expect(alloc).toHaveLength(NEW_REGIME_SLABS.length);
  });

  it("allocations sum to taxable income", () => {
    const taxableIncome = 1_500_000;
    const alloc = allocateTaxableIncomeAcrossSlabs(taxableIncome, NEW_REGIME_SLABS);
    const sum = alloc.reduce((a, b) => a + b, 0);
    expect(sum).toBe(taxableIncome);
  });

  it("income only in first slab → only first element is non-zero", () => {
    const alloc = allocateTaxableIncomeAcrossSlabs(100_000, NEW_REGIME_SLABS);
    expect(alloc[0]).toBeGreaterThan(0);
    expect(alloc.slice(1).every((a) => a === 0)).toBe(true);
  });

  it("allocations count matches slab count for old regime", () => {
    const alloc = allocateTaxableIncomeAcrossSlabs(500_000, OLD_REGIME_SLABS);
    expect(alloc).toHaveLength(OLD_REGIME_SLABS.length);
  });

  it("no allocation exceeds slab width (except infinite top slab)", () => {
    const taxableIncome = 5_000_000;
    const alloc = allocateTaxableIncomeAcrossSlabs(taxableIncome, NEW_REGIME_SLABS);
    NEW_REGIME_SLABS.forEach((slab, i) => {
      if (slab.max !== Infinity) {
        const width = slab.max - slab.min + 1;
        expect(alloc[i]).toBeLessThanOrEqual(width);
      }
    });
  });
});

// ─── buildRegimeVisualizationModel ──────────────────────────────────────────

describe("buildRegimeVisualizationModel", () => {
  it("returns null for zero income", () => {
    expect(buildRegimeVisualizationModel(0, "new")).toBeNull();
  });

  it("returns null for negative income", () => {
    expect(buildRegimeVisualizationModel(-500, "new")).toBeNull();
  });

  it("returns model for positive income", () => {
    const model = buildRegimeVisualizationModel(1_000_000, "new");
    expect(model).not.toBeNull();
    expect(model!.regime).toBe("new");
  });

  it("model taxableIncome matches calculateIncomeTax result", () => {
    const gross = 2_000_000;
    const model = buildRegimeVisualizationModel(gross, "new");
    const tax = calculateIncomeTax(gross, "new", 0);
    expect(model!.taxableIncome).toBe(tax.taxableIncome);
    expect(model!.estimatedAnnualTax).toBe(tax.annualTax);
  });

  it("allocations sum to taxableIncome in the model", () => {
    const model = buildRegimeVisualizationModel(2_500_000, "new");
    const sum = model!.allocations.reduce((a, b) => a + b, 0);
    expect(sum).toBe(model!.taxableIncome);
  });

  it("topSlabIndex points to highest filled slab", () => {
    const model = buildRegimeVisualizationModel(3_000_000, "new");
    expect(model!.topSlabIndex).toBeGreaterThan(0);
    // For 30L, should be in the top (30%) bracket
    expect(model!.topSlabIndex).toBe(NEW_REGIME_SLABS.length - 1);
  });

  it("effectiveRatePercent is non-negative", () => {
    const model = buildRegimeVisualizationModel(1_500_000, "new");
    expect(model!.effectiveRatePercent).toBeGreaterThanOrEqual(0);
  });

  it("visualSpans array has same length as slabs", () => {
    const model = buildRegimeVisualizationModel(1_000_000, "old");
    expect(model!.visualSpans).toHaveLength(OLD_REGIME_SLABS.length);
  });

  it("totalVisualSpan is sum of visualSpans", () => {
    const model = buildRegimeVisualizationModel(1_000_000, "new");
    const sum = model!.visualSpans.reduce((a, b) => a + b, 0);
    expect(model!.totalVisualSpan).toBe(sum);
  });

  it("topSlabIncomeSharePercent is between 0 and 100", () => {
    const model = buildRegimeVisualizationModel(2_000_000, "new");
    expect(model!.topSlabIncomeSharePercent).toBeGreaterThanOrEqual(0);
    expect(model!.topSlabIncomeSharePercent).toBeLessThanOrEqual(100);
  });
});
