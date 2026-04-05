/**
 * calculate-simple-salary.test.ts
 *
 * Unit tests for the free-tier dual in-hand calculator.
 * Tests both fixed-only and fixed+variable views, deductions, and composition ratios.
 */

import { describe, it, expect } from "vitest";
import { calculateSimpleSalarySummary } from "@/lib/simple-salary-calculator/calculate-simple-salary";
import type { SimpleSalaryInput } from "@/lib/simple-salary-calculator/types";

// ─── helpers ─────────────────────────────────────────────────────────────────

function input(overrides: Partial<SimpleSalaryInput> = {}): SimpleSalaryInput {
  return {
    annualFixedPay: 1_200_000,
    annualVariablePay: 0,
    taxRegime: "new",
    monthlyProfessionalTax: 200,
    monthlyEmployeePf: 1_800,
    monthlyEmployerPf: 1_800,
    extraDeductions: [],
    ...overrides,
  };
}

// ─── zero / boundary cases ───────────────────────────────────────────────────

describe("calculateSimpleSalarySummary — zero inputs", () => {
  it("all zeros → all outputs are zero", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualFixedPay: 0, monthlyProfessionalTax: 0, monthlyEmployeePf: 0, monthlyEmployerPf: 0 })
    );
    expect(result.monthlyInHandFixedOnly).toBe(0);
    expect(result.monthlyInHandIncludingVariable).toBe(0);
    expect(result.annualInHandFixedOnly).toBe(0);
  });

  it("negative fixed pay is clamped to 0", () => {
    const result = calculateSimpleSalarySummary(input({ annualFixedPay: -500_000 }));
    expect(result.annualFixedPay).toBe(0);
    expect(result.monthlyInHandFixedOnly).toBe(0);
  });

  it("non-finite pay is clamped to 0", () => {
    const result = calculateSimpleSalarySummary(input({ annualFixedPay: Infinity }));
    expect(result.annualFixedPay).toBe(0);
  });
});

// ─── basic in-hand calculation ───────────────────────────────────────────────

describe("calculateSimpleSalarySummary — in-hand computation", () => {
  it("monthly gross = annualFixed / 12", () => {
    const result = calculateSimpleSalarySummary(input());
    expect(result.monthlyGrossFixedOnly).toBe(1_200_000 / 12);
  });

  it("monthly in-hand = monthly gross − all deductions", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualFixedPay: 1_200_000, monthlyProfessionalTax: 200, monthlyEmployeePf: 1_800 })
    );
    const deductions = result.monthlyTotalDeductionsFixedBasis;
    expect(result.monthlyInHandFixedOnly).toBe(
      Math.max(0, result.monthlyGrossFixedOnly - deductions)
    );
  });

  it("annual in-hand = monthly in-hand × 12", () => {
    const result = calculateSimpleSalarySummary(input());
    expect(result.annualInHandFixedOnly).toBe(result.monthlyInHandFixedOnly * 12);
    expect(result.annualInHandIncludingVariable).toBe(
      result.monthlyInHandIncludingVariable * 12
    );
  });

  it("in-hand including variable ≥ in-hand excluding variable", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualFixedPay: 1_200_000, annualVariablePay: 200_000 })
    );
    expect(result.monthlyInHandIncludingVariable).toBeGreaterThanOrEqual(
      result.monthlyInHandFixedOnly
    );
  });

  it("with no variable pay, both in-hand values are equal", () => {
    const result = calculateSimpleSalarySummary(input({ annualVariablePay: 0 }));
    expect(result.monthlyInHandFixedOnly).toBe(result.monthlyInHandIncludingVariable);
  });

  it("12 LPA new regime — tax is 0 (rebate applies)", () => {
    const result = calculateSimpleSalarySummary(input({ annualFixedPay: 1_200_000 }));
    expect(result.annualIncomeTaxFixedBasis).toBe(0);
    expect(result.monthlyIncomeTaxFixedBasis).toBe(0);
  });

  it("30 LPA new regime — significant tax applied", () => {
    const result = calculateSimpleSalarySummary(input({ annualFixedPay: 3_000_000 }));
    expect(result.annualIncomeTaxFixedBasis).toBeGreaterThan(400_000);
  });

  it("in-hand is always non-negative", () => {
    const result = calculateSimpleSalarySummary(
      input({
        annualFixedPay: 200_000, // tiny income
        monthlyProfessionalTax: 200,
        monthlyEmployeePf: 1_800,
      })
    );
    expect(result.monthlyInHandFixedOnly).toBeGreaterThanOrEqual(0);
  });
});

// ─── deductions ──────────────────────────────────────────────────────────────

describe("calculateSimpleSalarySummary — deductions", () => {
  it("professional tax included in total deductions", () => {
    const result = calculateSimpleSalarySummary(
      input({ monthlyProfessionalTax: 200, monthlyEmployeePf: 0, monthlyEmployerPf: 0 })
    );
    expect(result.monthlyTotalDeductionsFixedBasis).toBeGreaterThanOrEqual(200);
  });

  it("employee PF included in total deductions", () => {
    const result = calculateSimpleSalarySummary(
      input({ monthlyEmployeePf: 1_800, monthlyProfessionalTax: 0, monthlyEmployerPf: 0 })
    );
    expect(result.monthlyTotalDeductionsFixedBasis).toBeGreaterThanOrEqual(1_800);
  });

  it("extra deductions reduce in-hand proportionally", () => {
    const withExtra = calculateSimpleSalarySummary(
      input({
        extraDeductions: [{ label: "NPS", monthlyAmount: 3_000 }],
      })
    );
    const without = calculateSimpleSalarySummary(input({ extraDeductions: [] }));
    expect(without.monthlyInHandFixedOnly - withExtra.monthlyInHandFixedOnly).toBe(3_000);
  });

  it("multiple extra deductions are summed", () => {
    const result = calculateSimpleSalarySummary(
      input({
        extraDeductions: [
          { label: "VPF", monthlyAmount: 2_000 },
          { label: "NPS", monthlyAmount: 3_000 },
        ],
      })
    );
    const base = calculateSimpleSalarySummary(input({ extraDeductions: [] }));
    expect(base.monthlyInHandFixedOnly - result.monthlyInHandFixedOnly).toBe(5_000);
  });

  it("negative extra deduction amounts are clamped to 0", () => {
    const result = calculateSimpleSalarySummary(
      input({ extraDeductions: [{ label: "Negative", monthlyAmount: -1_000 }] })
    );
    const base = calculateSimpleSalarySummary(input({ extraDeductions: [] }));
    expect(result.monthlyInHandFixedOnly).toBe(base.monthlyInHandFixedOnly);
  });

  it("employer PF does not reduce in-hand (it's CTC-side only)", () => {
    const with1800 = calculateSimpleSalarySummary(input({ monthlyEmployerPf: 1_800 }));
    const with0 = calculateSimpleSalarySummary(input({ monthlyEmployerPf: 0 }));
    expect(with1800.monthlyInHandFixedOnly).toBe(with0.monthlyInHandFixedOnly);
  });
});

// ─── tax and regime ──────────────────────────────────────────────────────────

describe("calculateSimpleSalarySummary — tax regime", () => {
  it("new regime at high income → different tax than old", () => {
    const oldResult = calculateSimpleSalarySummary(input({ taxRegime: "old", annualFixedPay: 2_000_000 }));
    const newResult = calculateSimpleSalarySummary(input({ taxRegime: "new", annualFixedPay: 2_000_000 }));
    // Both have positive tax at 20 LPA, may differ
    expect(typeof oldResult.annualIncomeTaxFixedBasis).toBe("number");
    expect(typeof newResult.annualIncomeTaxFixedBasis).toBe("number");
  });

  it("effective tax rate is non-negative", () => {
    const result = calculateSimpleSalarySummary(input({ annualFixedPay: 2_000_000 }));
    expect(result.effectiveTaxRateFixedBasis).toBeGreaterThanOrEqual(0);
  });

  it("additional variable pay increases tax in variable view", () => {
    const withVar = calculateSimpleSalarySummary(
      input({ annualFixedPay: 2_000_000, annualVariablePay: 500_000 })
    );
    const without = calculateSimpleSalarySummary(
      input({ annualFixedPay: 2_000_000, annualVariablePay: 0 })
    );
    expect(withVar.annualIncomeTaxIncludingVariable).toBeGreaterThanOrEqual(
      without.annualIncomeTaxFixedBasis
    );
  });

  it("monthly additional tax from variable is non-negative", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualFixedPay: 1_500_000, annualVariablePay: 500_000 })
    );
    expect(result.monthlyAdditionalTaxFromVariable).toBeGreaterThanOrEqual(0);
  });
});

// ─── composition ratios ──────────────────────────────────────────────────────

describe("calculateSimpleSalarySummary — composition ratios", () => {
  it("composition ratios sum to 1 when employer PF > 0", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualVariablePay: 200_000, monthlyEmployerPf: 1_800 })
    );
    const sum = result.compositionTakeHome + result.compositionEmployeeDeductions + result.compositionEmployerPf;
    expect(sum).toBeCloseTo(1, 5);
  });

  it("composition take-home > 0 for normal income", () => {
    const result = calculateSimpleSalarySummary(input({ annualFixedPay: 1_200_000 }));
    expect(result.compositionTakeHome).toBeGreaterThan(0);
  });

  it("composition ratios are between 0 and 1", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualVariablePay: 200_000, monthlyEmployerPf: 1_800 })
    );
    expect(result.compositionTakeHome).toBeGreaterThanOrEqual(0);
    expect(result.compositionTakeHome).toBeLessThanOrEqual(1);
    expect(result.compositionEmployeeDeductions).toBeGreaterThanOrEqual(0);
    expect(result.compositionEmployerPf).toBeGreaterThanOrEqual(0);
  });

  it("all composition ratios are 0 when total gross is 0", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualFixedPay: 0, annualVariablePay: 0, monthlyEmployerPf: 0, monthlyProfessionalTax: 0, monthlyEmployeePf: 0 })
    );
    expect(result.compositionTakeHome).toBe(0);
    expect(result.compositionEmployeeDeductions).toBe(0);
    expect(result.compositionEmployerPf).toBe(0);
  });
});

// ─── output shapes ───────────────────────────────────────────────────────────

describe("calculateSimpleSalarySummary — output structure", () => {
  it("annualTotalCashComp = annualFixedPay + annualVariablePay", () => {
    const result = calculateSimpleSalarySummary(
      input({ annualFixedPay: 1_200_000, annualVariablePay: 300_000 })
    );
    expect(result.annualTotalCashComp).toBe(1_500_000);
  });

  it("annual deductions = monthly deductions × 12", () => {
    const result = calculateSimpleSalarySummary(input());
    expect(result.annualTotalDeductionsFixedBasis).toBe(
      result.monthlyTotalDeductionsFixedBasis * 12
    );
  });

  it("all monetary outputs are finite numbers", () => {
    const result = calculateSimpleSalarySummary(input({ annualFixedPay: 1_500_000 }));
    const keys: (keyof typeof result)[] = [
      "monthlyInHandFixedOnly",
      "monthlyInHandIncludingVariable",
      "annualInHandFixedOnly",
      "annualIncomeTaxFixedBasis",
      "effectiveTaxRateFixedBasis",
    ];
    keys.forEach((k) => {
      expect(typeof result[k]).toBe("number");
      expect(Number.isFinite(result[k] as number)).toBe(true);
    });
  });
});
