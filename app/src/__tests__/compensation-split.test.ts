/**
 * compensation-split.test.ts
 *
 * Unit tests for both compensation split utilities:
 * - lib/utils/compensation-split.ts (premium/offer forms)
 * - lib/simple-salary-calculator/sync-compensation-split.ts (free calculator)
 */

import { describe, it, expect } from "vitest";
import {
  applyTotalInSplit,
  applyFixedInSplit,
  applyVariableInSplit,
  initialSplitFromTotal,
  isSplitBalanced,
} from "@/lib/utils/compensation-split";
import {
  reconcileAfterTotalCtc,
  reconcileAfterFixedPay,
  reconcileAfterVariablePay,
  annualPackageTotal,
} from "@/lib/simple-salary-calculator/sync-compensation-split";

// ─── applyTotalInSplit ────────────────────────────────────────────────────────

describe("applyTotalInSplit", () => {
  it("sets annualCTC and fixedAnnual to total, variableAnnual = 0", () => {
    const r = applyTotalInSplit(1_500_000);
    expect(r.annualCTC).toBe(1_500_000);
    expect(r.fixedAnnual).toBe(1_500_000);
    expect(r.variableAnnual).toBe(0);
  });

  it("derived field is 'variable'", () => {
    expect(applyTotalInSplit(1_000_000).derived).toBe("variable");
  });

  it("negative total is clamped to 0", () => {
    const r = applyTotalInSplit(-500_000);
    expect(r.annualCTC).toBe(0);
    expect(r.fixedAnnual).toBe(0);
  });

  it("fractional total is floored", () => {
    const r = applyTotalInSplit(1_200_000.9);
    expect(r.annualCTC).toBe(1_200_000);
  });

  it("zero total → all zeros", () => {
    const r = applyTotalInSplit(0);
    expect(r.annualCTC).toBe(0);
    expect(r.fixedAnnual).toBe(0);
    expect(r.variableAnnual).toBe(0);
  });
});

// ─── applyFixedInSplit ────────────────────────────────────────────────────────

describe("applyFixedInSplit", () => {
  it("variable = total − fixed when fixed ≤ total", () => {
    const r = applyFixedInSplit(1_500_000, 1_200_000);
    expect(r.variableAnnual).toBe(300_000);
    expect(r.fixedAnnual).toBe(1_200_000);
    expect(r.annualCTC).toBe(1_500_000);
  });

  it("fixed > total → fixed capped at total, variable = 0", () => {
    const r = applyFixedInSplit(1_000_000, 1_500_000);
    expect(r.fixedAnnual).toBe(1_000_000);
    expect(r.variableAnnual).toBe(0);
  });

  it("fixed = total → variable = 0", () => {
    const r = applyFixedInSplit(1_200_000, 1_200_000);
    expect(r.variableAnnual).toBe(0);
  });

  it("derived field is 'variable'", () => {
    expect(applyFixedInSplit(1_000_000, 800_000).derived).toBe("variable");
  });

  it("negative fixed clamped to 0, variable = total", () => {
    const r = applyFixedInSplit(1_000_000, -200_000);
    expect(r.fixedAnnual).toBe(0);
    expect(r.variableAnnual).toBe(1_000_000);
  });

  it("total preserved in annualCTC output", () => {
    const r = applyFixedInSplit(2_000_000, 1_500_000);
    expect(r.annualCTC).toBe(2_000_000);
  });
});

// ─── applyVariableInSplit ─────────────────────────────────────────────────────

describe("applyVariableInSplit", () => {
  it("fixed = total − variable when variable ≤ total", () => {
    const r = applyVariableInSplit(1_500_000, 300_000);
    expect(r.fixedAnnual).toBe(1_200_000);
    expect(r.variableAnnual).toBe(300_000);
  });

  it("variable > total → variable capped at total, fixed = 0", () => {
    const r = applyVariableInSplit(1_000_000, 2_000_000);
    expect(r.variableAnnual).toBe(1_000_000);
    expect(r.fixedAnnual).toBe(0);
  });

  it("derived field is 'fixed'", () => {
    expect(applyVariableInSplit(1_000_000, 200_000).derived).toBe("fixed");
  });

  it("variable = 0 → fixed = total", () => {
    const r = applyVariableInSplit(1_200_000, 0);
    expect(r.fixedAnnual).toBe(1_200_000);
    expect(r.variableAnnual).toBe(0);
  });

  it("total preserved in annualCTC output", () => {
    const r = applyVariableInSplit(2_000_000, 400_000);
    expect(r.annualCTC).toBe(2_000_000);
  });
});

// ─── initialSplitFromTotal ────────────────────────────────────────────────────

describe("initialSplitFromTotal", () => {
  it("fixedAnnual = total, variableAnnual = 0", () => {
    const r = initialSplitFromTotal(1_500_000);
    expect(r.fixedAnnual).toBe(1_500_000);
    expect(r.variableAnnual).toBe(0);
  });

  it("negative total → fixedAnnual = 0", () => {
    const r = initialSplitFromTotal(-100);
    expect(r.fixedAnnual).toBe(0);
  });
});

// ─── isSplitBalanced ─────────────────────────────────────────────────────────

describe("isSplitBalanced", () => {
  it("total_only mode is always balanced", () => {
    expect(isSplitBalanced("total_only", 1_000_000, 0, 0)).toBe(true);
    expect(isSplitBalanced("total_only", 1_000_000, 600_000, 200_000)).toBe(true);
  });

  it("fixed_variable mode: balanced when fixed + variable = total ± 1", () => {
    expect(isSplitBalanced("fixed_variable", 1_200_000, 1_000_000, 200_000)).toBe(true);
    expect(isSplitBalanced("fixed_variable", 1_200_000, 1_000_000, 200_001)).toBe(true);
    expect(isSplitBalanced("fixed_variable", 1_200_000, 1_000_000, 199_999)).toBe(true);
  });

  it("fixed_variable mode: unbalanced when gap > 1", () => {
    expect(isSplitBalanced("fixed_variable", 1_200_000, 1_000_000, 100_000)).toBe(false);
  });

  it("fixed_variable with all zeros → balanced", () => {
    expect(isSplitBalanced("fixed_variable", 0, 0, 0)).toBe(true);
  });
});

// ─── reconcileAfterTotalCtc (free calculator) ────────────────────────────────

describe("reconcileAfterTotalCtc", () => {
  it("fixed = total, variable = 0", () => {
    const r = reconcileAfterTotalCtc(1_500_000);
    expect(r.annualFixedPay).toBe(1_500_000);
    expect(r.annualVariablePay).toBe(0);
  });

  it("negative total → both 0", () => {
    const r = reconcileAfterTotalCtc(-100_000);
    expect(r.annualFixedPay).toBe(0);
    expect(r.annualVariablePay).toBe(0);
  });

  it("zero → both 0", () => {
    const r = reconcileAfterTotalCtc(0);
    expect(r.annualFixedPay).toBe(0);
    expect(r.annualVariablePay).toBe(0);
  });
});

// ─── reconcileAfterFixedPay (free calculator) ────────────────────────────────

describe("reconcileAfterFixedPay", () => {
  it("fixed ≤ total: variable = total − fixed", () => {
    const r = reconcileAfterFixedPay(800_000, 1_000_000, 200_000);
    expect(r.annualFixedPay).toBe(800_000);
    expect(r.annualVariablePay).toBe(400_000); // total=1200000-800000=400000
  });

  it("fixed > total: variable = 0", () => {
    const r = reconcileAfterFixedPay(2_000_000, 1_000_000, 200_000);
    expect(r.annualFixedPay).toBe(2_000_000);
    expect(r.annualVariablePay).toBe(0);
  });

  it("fixed = total: variable = 0", () => {
    const r = reconcileAfterFixedPay(1_200_000, 1_200_000, 0);
    expect(r.annualVariablePay).toBe(0);
  });

  it("negative new fixed clamped to 0", () => {
    const r = reconcileAfterFixedPay(-100_000, 1_000_000, 200_000);
    expect(r.annualFixedPay).toBe(0);
    expect(r.annualVariablePay).toBe(1_200_000);
  });
});

// ─── reconcileAfterVariablePay (free calculator) ─────────────────────────────

describe("reconcileAfterVariablePay", () => {
  it("variable ≤ total: fixed = total − variable", () => {
    const r = reconcileAfterVariablePay(300_000, 1_000_000, 200_000);
    expect(r.annualVariablePay).toBe(300_000);
    expect(r.annualFixedPay).toBe(900_000); // total=1200000-300000=900000
  });

  it("variable > total: fixed = 0", () => {
    const r = reconcileAfterVariablePay(2_000_000, 1_000_000, 200_000);
    expect(r.annualVariablePay).toBe(2_000_000);
    expect(r.annualFixedPay).toBe(0);
  });

  it("variable = 0: fixed stays at total", () => {
    const r = reconcileAfterVariablePay(0, 1_200_000, 0);
    expect(r.annualFixedPay).toBe(1_200_000);
    expect(r.annualVariablePay).toBe(0);
  });

  it("negative new variable clamped to 0", () => {
    const r = reconcileAfterVariablePay(-500_000, 1_000_000, 200_000);
    expect(r.annualVariablePay).toBe(0);
    expect(r.annualFixedPay).toBe(1_200_000);
  });
});

// ─── annualPackageTotal ───────────────────────────────────────────────────────

describe("annualPackageTotal", () => {
  it("returns sum of fixed + variable", () => {
    expect(annualPackageTotal(1_000_000, 200_000)).toBe(1_200_000);
  });

  it("zero values → 0", () => {
    expect(annualPackageTotal(0, 0)).toBe(0);
  });

  it("negative values are clamped to 0", () => {
    expect(annualPackageTotal(-100_000, 200_000)).toBe(200_000);
  });

  it("fractional inputs are rounded", () => {
    expect(annualPackageTotal(1_000_000.7, 200_000.3)).toBe(1_200_001);
  });
});
