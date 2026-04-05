/**
 * project-wealth.test.ts
 *
 * Unit tests for wealth projection calculations.
 * Expected values verified by manual year-by-year accumulation.
 */

import { describe, it, expect } from "vitest";
import { projectWealth } from "@/lib/utils/project-wealth";
import type { WealthProjectionParams } from "@/lib/utils/project-wealth";

function params(overrides: Partial<WealthProjectionParams> = {}): WealthProjectionParams {
  return {
    monthlyInHand: 50_000,
    savingsRatePercent: 20,
    salaryGrowthPercentPerYear: 10,
    investmentReturnPercentPerYear: 12,
    horizonYears: 3,
    ...overrides,
  };
}

// ─── basic correctness ───────────────────────────────────────────────────────

describe("projectWealth — basic correctness", () => {
  it("returns array with length == horizonYears", () => {
    const rows = projectWealth(params({ horizonYears: 5 }));
    expect(rows).toHaveLength(5);
  });

  it("year numbers are sequential starting from 1", () => {
    const rows = projectWealth(params({ horizonYears: 4 }));
    rows.forEach((r, i) => expect(r.year).toBe(i + 1));
  });

  it("year 1 monthly income equals starting monthlyInHand (no growth applied)", () => {
    const rows = projectWealth(params({ monthlyInHand: 80_000 }));
    expect(rows[0]!.monthlyInHand).toBe(80_000);
  });

  it("year 2 monthly income = year1 × (1 + growthRate)", () => {
    const rows = projectWealth(params({ salaryGrowthPercentPerYear: 10 }));
    const expected = Math.round(rows[0]!.monthlyInHand * 1.1);
    expect(rows[1]!.monthlyInHand).toBe(expected);
  });

  it("annual contribution = monthlyInHand × 12 × savingsRate", () => {
    const rows = projectWealth(params({ savingsRatePercent: 25 }));
    const expected = Math.round(rows[0]!.monthlyInHand * 12 * 0.25);
    expect(rows[0]!.annualContribution).toBe(expected);
  });

  it("corpus compounds correctly (year 1)", () => {
    // corpus_1 = (0 + annualContrib) × (1 + inv)
    const invRate = 12;
    const rows = projectWealth(params({ investmentReturnPercentPerYear: invRate }));
    const expected = Math.round(rows[0]!.annualContribution * (1 + invRate / 100));
    expect(rows[0]!.corpusEnd).toBe(expected);
  });

  it("deterministic 3-year scenario", () => {
    // monthly=50000, savings=20%, growth=10%, inv=12%
    // Y1: monthly=50000, contrib=120000, corpus=(0+120000)*1.12=134400
    // Y2: monthly=55000, contrib=132000, corpus=(134400+132000)*1.12=298368
    // Y3: monthly=60500, contrib=145200, corpus=(298368+145200)*1.12=496796
    const rows = projectWealth(params({ horizonYears: 3 }));
    expect(rows[0]!.monthlyInHand).toBe(50_000);
    expect(rows[0]!.annualContribution).toBe(120_000);
    expect(rows[0]!.corpusEnd).toBe(134_400);
    expect(rows[1]!.monthlyInHand).toBe(55_000);
    expect(rows[1]!.annualContribution).toBe(132_000);
    expect(rows[1]!.corpusEnd).toBe(298_368);
    expect(rows[2]!.monthlyInHand).toBe(60_500);
    expect(rows[2]!.annualContribution).toBe(145_200);
    expect(rows[2]!.corpusEnd).toBe(496_796);
  });

  it("corpus is monotonically increasing with positive returns and contributions", () => {
    const rows = projectWealth(params({ horizonYears: 10 }));
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i]!.corpusEnd).toBeGreaterThan(rows[i - 1]!.corpusEnd);
    }
  });

  it("monthly income grows monotonically with positive salary growth", () => {
    const rows = projectWealth(params({ horizonYears: 10, salaryGrowthPercentPerYear: 8 }));
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i]!.monthlyInHand).toBeGreaterThan(rows[i - 1]!.monthlyInHand);
    }
  });

  it("zero savings rate → zero contributions and zero corpus", () => {
    const rows = projectWealth(params({ savingsRatePercent: 0 }));
    rows.forEach((r) => {
      expect(r.annualContribution).toBe(0);
      expect(r.corpusEnd).toBe(0);
    });
  });

  it("100% savings rate — all in-hand goes to corpus", () => {
    const rows = projectWealth(params({ savingsRatePercent: 100, investmentReturnPercentPerYear: 0 }));
    // With 0% investment return, corpus = sum of all contributions
    let cumulative = 0;
    rows.forEach((r) => {
      cumulative += r.annualContribution;
      expect(r.corpusEnd).toBe(cumulative);
    });
  });

  it("zero salary growth → monthly income constant at starting value", () => {
    const rows = projectWealth(params({ salaryGrowthPercentPerYear: 0 }));
    const start = rows[0]!.monthlyInHand;
    rows.forEach((r) => expect(r.monthlyInHand).toBe(start));
  });

  it("zero investment return → corpus = cumulative contributions", () => {
    const rows = projectWealth(params({
      investmentReturnPercentPerYear: 0,
      salaryGrowthPercentPerYear: 0,
    }));
    let cumulative = 0;
    rows.forEach((r) => {
      cumulative += r.annualContribution;
      expect(r.corpusEnd).toBe(cumulative);
    });
  });

  it("zero monthly income → all values are zero", () => {
    const rows = projectWealth(params({ monthlyInHand: 0 }));
    rows.forEach((r) => {
      expect(r.annualContribution).toBe(0);
      expect(r.corpusEnd).toBe(0);
    });
  });

  it("negative monthly income is clamped to zero", () => {
    const rows = projectWealth(params({ monthlyInHand: -10_000 }));
    rows.forEach((r) => {
      expect(r.monthlyInHand).toBeGreaterThanOrEqual(0);
      expect(r.annualContribution).toBeGreaterThanOrEqual(0);
    });
  });
});

// ─── clamping and boundary cases ─────────────────────────────────────────────

describe("projectWealth — clamping and edge cases", () => {
  it("horizonYears clamped to 1 minimum", () => {
    const rows = projectWealth(params({ horizonYears: 0 }));
    expect(rows).toHaveLength(1);
  });

  it("horizonYears clamped to 40 maximum", () => {
    const rows = projectWealth(params({ horizonYears: 100 }));
    expect(rows).toHaveLength(40);
  });

  it("negative horizonYears → 1 row", () => {
    const rows = projectWealth(params({ horizonYears: -5 }));
    expect(rows).toHaveLength(1);
  });

  it("salaryGrowthPercentPerYear clamped to 0 at minimum", () => {
    // Negative growth should be treated as 0
    const rowsNeg = projectWealth(params({ salaryGrowthPercentPerYear: -10 }));
    const rowsZero = projectWealth(params({ salaryGrowthPercentPerYear: 0 }));
    rowsNeg.forEach((r, i) => {
      expect(r.monthlyInHand).toBe(rowsZero[i]!.monthlyInHand);
    });
  });

  it("salaryGrowthPercentPerYear clamped to 30 at maximum", () => {
    const rows30 = projectWealth(params({ salaryGrowthPercentPerYear: 30 }));
    const rowsHigh = projectWealth(params({ salaryGrowthPercentPerYear: 50 }));
    rowsHigh.forEach((r, i) => {
      expect(r.monthlyInHand).toBe(rows30[i]!.monthlyInHand);
    });
  });

  it("investmentReturnPercentPerYear clamped to 0 at minimum", () => {
    const rowsNeg = projectWealth(params({ investmentReturnPercentPerYear: -5 }));
    const rowsZero = projectWealth(params({ investmentReturnPercentPerYear: 0 }));
    rowsNeg.forEach((r, i) => {
      expect(r.corpusEnd).toBe(rowsZero[i]!.corpusEnd);
    });
  });

  it("investmentReturnPercentPerYear clamped to 30 at maximum", () => {
    const rows30 = projectWealth(params({ investmentReturnPercentPerYear: 30 }));
    const rowsHigh = projectWealth(params({ investmentReturnPercentPerYear: 100 }));
    rowsHigh.forEach((r, i) => {
      expect(r.corpusEnd).toBe(rows30[i]!.corpusEnd);
    });
  });

  it("savingsRatePercent > 100 is clamped to 100", () => {
    const rows100 = projectWealth(params({ savingsRatePercent: 100 }));
    const rowsOver = projectWealth(params({ savingsRatePercent: 150 }));
    rowsOver.forEach((r, i) => {
      expect(r.annualContribution).toBe(rows100[i]!.annualContribution);
    });
  });

  it("savingsRatePercent < 0 is clamped to 0", () => {
    const rowsNeg = projectWealth(params({ savingsRatePercent: -20 }));
    const rowsZero = projectWealth(params({ savingsRatePercent: 0 }));
    rowsNeg.forEach((r, i) => {
      expect(r.annualContribution).toBe(rowsZero[i]!.annualContribution);
    });
  });

  it("fractional horizon (2.9) is floored to 2 years", () => {
    const rows = projectWealth(params({ horizonYears: 2.9 }));
    expect(rows).toHaveLength(2);
  });

  it("higher investment return → higher corpus for same savings", () => {
    const rows8 = projectWealth(params({ investmentReturnPercentPerYear: 8, horizonYears: 10 }));
    const rows15 = projectWealth(params({ investmentReturnPercentPerYear: 15, horizonYears: 10 }));
    expect(rows15[9]!.corpusEnd).toBeGreaterThan(rows8[9]!.corpusEnd);
  });

  it("higher salary growth → higher corpus (more contributions each year)", () => {
    const rows5 = projectWealth(params({ salaryGrowthPercentPerYear: 5, horizonYears: 10 }));
    const rows15 = projectWealth(params({ salaryGrowthPercentPerYear: 15, horizonYears: 10 }));
    expect(rows15[9]!.corpusEnd).toBeGreaterThan(rows5[9]!.corpusEnd);
  });

  it("all output values are rounded integers", () => {
    const rows = projectWealth(params({ horizonYears: 5 }));
    rows.forEach((r) => {
      expect(r.monthlyInHand).toBe(Math.round(r.monthlyInHand));
      expect(r.annualContribution).toBe(Math.round(r.annualContribution));
      expect(r.corpusEnd).toBe(Math.round(r.corpusEnd));
    });
  });
});

// ─── 20-year long-horizon scenario ───────────────────────────────────────────

describe("projectWealth — 20-year scenario", () => {
  it("20 years with typical Indian middle-class params → corpus > 1 crore", () => {
    const rows = projectWealth({
      monthlyInHand: 80_000,
      savingsRatePercent: 30,
      salaryGrowthPercentPerYear: 8,
      investmentReturnPercentPerYear: 12,
      horizonYears: 20,
    });
    expect(rows).toHaveLength(20);
    expect(rows[19]!.corpusEnd).toBeGreaterThan(1_00_00_000); // > 1 crore
  });

  it("wealth at 20 years is much larger than at 5 years (compounding effect)", () => {
    const p: WealthProjectionParams = {
      monthlyInHand: 60_000,
      savingsRatePercent: 25,
      salaryGrowthPercentPerYear: 7,
      investmentReturnPercentPerYear: 10,
      horizonYears: 20,
    };
    const rows = projectWealth(p);
    expect(rows[19]!.corpusEnd).toBeGreaterThan(rows[4]!.corpusEnd * 3);
  });
});
