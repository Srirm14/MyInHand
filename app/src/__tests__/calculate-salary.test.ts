/**
 * calculate-salary.test.ts
 *
 * Unit tests for the premium salary breakdown engine.
 * Covers component generation, PF math, HRA tiers, special-allowance residual,
 * tax linkage, and the recalculation-from-edits path.
 */

import { describe, it, expect } from "vitest";
import {
  calculateSalaryBreakdown,
  deriveBreakdownSummaries,
  recalculateBreakdownFromComponents,
} from "@/lib/utils/calculate-salary";
import type { BreakdownRecalcContext } from "@/lib/utils/calculate-salary";
import { EPF_RATE, EPF_WAGE_CEILING, PROFESSIONAL_TAX_MONTHLY } from "@/lib/constants/tax-slabs";

// ─── helpers ────────────────────────────────────────────────────────────────

function breakdown12LPA() {
  return calculateSalaryBreakdown(1_200_000, "tier1", "new");
}
function getComp(bd: ReturnType<typeof calculateSalaryBreakdown>, id: string) {
  return bd.components.find((c) => c.id === id)!;
}

// ─── component structure ─────────────────────────────────────────────────────

describe("calculateSalaryBreakdown — component structure", () => {
  it("always generates basic, hra, da, meal, telecom, special_allowance, employer_pf, gratuity_accrual, employee_pf, professional_tax, income_tax", () => {
    const bd = breakdown12LPA();
    const requiredIds = [
      "basic", "hra", "da", "meal_allowance", "telecom_reimbursement",
      "special_allowance", "esop_estimate", "employer_pf", "gratuity_accrual",
      "employee_pf", "professional_tax", "income_tax",
    ];
    requiredIds.forEach((id) => {
      expect(bd.components.find((c) => c.id === id)).toBeDefined();
    });
  });

  it("no variable_pay row when variableAnnual is 0 (default)", () => {
    const bd = breakdown12LPA();
    expect(bd.components.find((c) => c.id === "variable_pay")).toBeUndefined();
  });

  it("variable_pay row added when variableAnnual > 0", () => {
    const bd = calculateSalaryBreakdown(1_200_000, "tier1", "new", undefined, {
      variableAnnual: 200_000,
    });
    expect(bd.components.find((c) => c.id === "variable_pay")).toBeDefined();
  });

  it("income_tax is in deductions group", () => {
    expect(getComp(breakdown12LPA(), "income_tax").group).toBe("deductions");
  });

  it("employer_pf and gratuity_accrual are in employer_contributions group", () => {
    const bd = breakdown12LPA();
    expect(getComp(bd, "employer_pf").group).toBe("employer_contributions");
    expect(getComp(bd, "gratuity_accrual").group).toBe("employer_contributions");
  });

  it("basic, hra, da are in earnings group with section fixed_core", () => {
    const bd = breakdown12LPA();
    expect(getComp(bd, "basic").section).toBe("fixed_core");
    expect(getComp(bd, "hra").section).toBe("fixed_core");
    expect(getComp(bd, "da").section).toBe("fixed_core");
  });

  it("meal and telecom are type tax-free", () => {
    const bd = breakdown12LPA();
    expect(getComp(bd, "meal_allowance").type).toBe("tax-free");
    expect(getComp(bd, "telecom_reimbursement").type).toBe("tax-free");
  });

  it("da monthly value is 0 (private sector default)", () => {
    expect(getComp(breakdown12LPA(), "da").monthlyValue).toBe(0);
  });

  it("annual value = monthly × 12 for most components", () => {
    const bd = breakdown12LPA();
    const checkAnnual = ["basic", "hra", "employee_pf", "professional_tax"];
    checkAnnual.forEach((id) => {
      const c = getComp(bd, id);
      expect(c.annualValue).toBe(c.monthlyValue * 12);
    });
  });
});

// ─── basic and HRA math ─────────────────────────────────────────────────────

describe("calculateSalaryBreakdown — basic and HRA", () => {
  it("basic = 40% of CTC", () => {
    const bd = calculateSalaryBreakdown(1_000_000, "tier1", "new");
    expect(getComp(bd, "basic").annualValue).toBe(Math.round(1_000_000 * 0.4));
  });

  it("tier1 HRA = 50% of basic", () => {
    const bd = calculateSalaryBreakdown(1_200_000, "tier1", "new");
    const basic = getComp(bd, "basic").annualValue;
    expect(getComp(bd, "hra").annualValue).toBe(Math.round(basic * 0.5));
  });

  it("tier2 HRA = 40% of basic", () => {
    const bd = calculateSalaryBreakdown(1_200_000, "tier2", "new");
    const basic = getComp(bd, "basic").annualValue;
    expect(getComp(bd, "hra").annualValue).toBe(Math.round(basic * 0.4));
  });

  it("tier3 HRA = 30% of basic", () => {
    const bd = calculateSalaryBreakdown(1_200_000, "tier3", "new");
    const basic = getComp(bd, "basic").annualValue;
    expect(getComp(bd, "hra").annualValue).toBe(Math.round(basic * 0.3));
  });

  it("different city tiers produce different HRA for same CTC", () => {
    const t1 = calculateSalaryBreakdown(1_500_000, "tier1", "new");
    const t2 = calculateSalaryBreakdown(1_500_000, "tier2", "new");
    const t3 = calculateSalaryBreakdown(1_500_000, "tier3", "new");
    expect(getComp(t1, "hra").annualValue).toBeGreaterThan(getComp(t2, "hra").annualValue);
    expect(getComp(t2, "hra").annualValue).toBeGreaterThan(getComp(t3, "hra").annualValue);
  });
});

// ─── PF math ────────────────────────────────────────────────────────────────

describe("calculateSalaryBreakdown — EPF calculations", () => {
  it("PF wage ceiling: when basic > 15000/month, PF calculated on 15000", () => {
    // 12 LPA: basic = 40000/month > 15000 → pfBase = 15000
    const bd = breakdown12LPA();
    const expectedMonthlyPF = Math.round(EPF_WAGE_CEILING * EPF_RATE); // = 1800
    expect(getComp(bd, "employee_pf").monthlyValue).toBe(expectedMonthlyPF);
    expect(getComp(bd, "employer_pf").monthlyValue).toBe(expectedMonthlyPF);
  });

  it("when basic < 15000, PF calculated on actual basic", () => {
    // 2 LPA: basic = 200000*0.4=80000 annual, 6666/month → pfBase = 6666
    const bd = calculateSalaryBreakdown(200_000, "tier1", "new");
    const monthlyBasic = getComp(bd, "basic").monthlyValue;
    expect(monthlyBasic).toBeLessThan(EPF_WAGE_CEILING);
    const expectedPF = Math.round(monthlyBasic * EPF_RATE);
    expect(getComp(bd, "employee_pf").monthlyValue).toBe(expectedPF);
  });

  it("employee PF rate = 12%", () => {
    expect(EPF_RATE).toBe(0.12);
  });

  it("EPF wage ceiling = 15000", () => {
    expect(EPF_WAGE_CEILING).toBe(15_000);
  });

  it("employer PF = employee PF (same rate, same base)", () => {
    const bd = breakdown12LPA();
    expect(getComp(bd, "employer_pf").monthlyValue).toBe(
      getComp(bd, "employee_pf").monthlyValue
    );
  });
});

// ─── gratuity and fixed components ──────────────────────────────────────────

describe("calculateSalaryBreakdown — gratuity and fixed values", () => {
  it("gratuity accrual ≈ 4.81% of annual basic", () => {
    const bd = breakdown12LPA();
    const annualBasic = getComp(bd, "basic").annualValue;
    const expected = Math.round(annualBasic * 0.0481);
    expect(getComp(bd, "gratuity_accrual").annualValue).toBe(expected);
  });

  it("meal allowance is 3000/month fixed", () => {
    expect(getComp(breakdown12LPA(), "meal_allowance").monthlyValue).toBe(3_000);
  });

  it("telecom reimbursement is 2000/month fixed", () => {
    expect(getComp(breakdown12LPA(), "telecom_reimbursement").monthlyValue).toBe(2_000);
  });

  it("professional tax is 200/month", () => {
    expect(getComp(breakdown12LPA(), "professional_tax").monthlyValue).toBe(PROFESSIONAL_TAX_MONTHLY);
    expect(PROFESSIONAL_TAX_MONTHLY).toBe(200);
  });
});

// ─── special allowance residual ─────────────────────────────────────────────

describe("calculateSalaryBreakdown — special allowance as residual", () => {
  it("special allowance absorbs remaining CTC after all fixed slices", () => {
    const bd = breakdown12LPA();
    const basic = getComp(bd, "basic").annualValue;
    const hra = getComp(bd, "hra").annualValue;
    const meal = getComp(bd, "meal_allowance").annualValue;
    const telecom = getComp(bd, "telecom_reimbursement").annualValue;
    const empPF = getComp(bd, "employer_pf").annualValue;
    const gratuity = getComp(bd, "gratuity_accrual").annualValue;
    const special = getComp(bd, "special_allowance").annualValue;
    // CTC = basic+hra+meal+telecom+special+empPF+gratuity (+ da=0, variable=0)
    const sumOfParts = basic + hra + meal + telecom + special + empPF + gratuity;
    expect(sumOfParts).toBe(1_200_000);
  });

  it("special allowance is non-negative", () => {
    [1_000_000, 2_000_000, 5_000_000].forEach((ctc) => {
      const bd = calculateSalaryBreakdown(ctc, "tier1", "new");
      expect(getComp(bd, "special_allowance").annualValue).toBeGreaterThanOrEqual(0);
    });
  });

  it("higher CTC → higher special allowance (all else equal)", () => {
    const bd10 = calculateSalaryBreakdown(1_000_000, "tier1", "new");
    const bd20 = calculateSalaryBreakdown(2_000_000, "tier1", "new");
    const s10 = getComp(bd10, "special_allowance").annualValue;
    const s20 = getComp(bd20, "special_allowance").annualValue;
    expect(s20).toBeGreaterThan(s10);
  });
});

// ─── summary totals ──────────────────────────────────────────────────────────

describe("calculateSalaryBreakdown — summary totals", () => {
  it("12 LPA tier1 new regime — monthly in-hand excluding variable is positive", () => {
    const bd = breakdown12LPA();
    expect(bd.monthlyInHandExcludingVariable).toBeGreaterThan(0);
    expect(bd.monthlyInHandExcludingVariable).toBe(bd.monthlyInHand);
  });

  it("in-hand increases with CTC", () => {
    const bd10 = calculateSalaryBreakdown(1_000_000, "tier1", "new");
    const bd20 = calculateSalaryBreakdown(2_000_000, "tier1", "new");
    expect(bd20.monthlyInHandExcludingVariable).toBeGreaterThan(
      bd10.monthlyInHandExcludingVariable
    );
  });

  it("take-home % is between 0 and 100", () => {
    const bd = breakdown12LPA();
    expect(bd.takeHomePercent).toBeGreaterThan(0);
    expect(bd.takeHomePercent).toBeLessThan(100);
  });

  it("statedAnnualCTC matches input", () => {
    expect(breakdown12LPA().statedAnnualCTC).toBe(1_200_000);
  });

  it("annualCashCompensation = annualFixedCashTotal + annualVariableCashTotal", () => {
    const bd = breakdown12LPA();
    expect(bd.annualCashCompensation).toBe(bd.annualFixedCashTotal + bd.annualVariableCashTotal);
  });

  it("with variable pay: monthlyInHandIncludingVariable > monthlyInHandExcludingVariable", () => {
    const bd = calculateSalaryBreakdown(1_500_000, "tier1", "new", undefined, {
      variableAnnual: 300_000,
    });
    expect(bd.monthlyInHandIncludingVariable).toBeGreaterThan(
      bd.monthlyInHandExcludingVariable
    );
  });

  it("zero CTC → graceful result without throwing", () => {
    expect(() => calculateSalaryBreakdown(0, "tier1", "new")).not.toThrow();
  });

  it("new regime tax at 12 LPA is 0 (rebate applies)", () => {
    const bd = breakdown12LPA();
    expect(getComp(bd, "income_tax").annualValue).toBe(0);
  });

  it("old regime at 20 LPA has significant tax", () => {
    const bd = calculateSalaryBreakdown(2_000_000, "tier1", "old");
    expect(getComp(bd, "income_tax").annualValue).toBeGreaterThan(200_000);
  });
});

// ─── deriveBreakdownSummaries ─────────────────────────────────────────────────

describe("deriveBreakdownSummaries", () => {
  it("empty components → all zeros", () => {
    const result = deriveBreakdownSummaries([], 1_200_000);
    expect(result.monthlyInHand).toBe(0);
    expect(result.totalMonthlyDeductions).toBe(0);
    expect(result.annualIncomeTax).toBe(0);
  });

  it("statedAnnualCTC is preserved", () => {
    expect(deriveBreakdownSummaries([], 999_999).statedAnnualCTC).toBe(999_999);
  });

  it("takeHomePercent = 0 when statedAnnualCTC is 0", () => {
    const result = deriveBreakdownSummaries([], 0);
    expect(result.takeHomePercent).toBe(0);
  });

  it("deductions group components contribute to totalMonthlyDeductions", () => {
    const bd = breakdown12LPA();
    const allDeductionMonthly = bd.components
      .filter((c) => c.group === "deductions")
      .reduce((s, c) => s + c.monthlyValue, 0);
    expect(bd.totalMonthlyDeductions).toBe(Math.round(allDeductionMonthly));
  });

  it("income_tax annual value is read directly from the income_tax component", () => {
    const bd = calculateSalaryBreakdown(2_500_000, "tier1", "new");
    const taxComp = getComp(bd, "income_tax");
    expect(bd.annualIncomeTax).toBe(taxComp.annualValue);
  });

  it("monthlyInHandExcludingVariable = fixed earnings - deductions", () => {
    const bd = breakdown12LPA();
    const fixedEarningsMonthly = bd.components
      .filter((c) => c.section !== "variable_pay" && c.group !== "employer_contributions" && c.group !== "deductions")
      .reduce((s, c) => s + c.monthlyValue, 0);
    const deductions = bd.components
      .filter((c) => c.group === "deductions")
      .reduce((s, c) => s + c.monthlyValue, 0);
    expect(bd.monthlyInHandExcludingVariable).toBe(Math.round(fixedEarningsMonthly - deductions));
  });
});

// ─── recalculateBreakdownFromComponents ─────────────────────────────────────

describe("recalculateBreakdownFromComponents", () => {
  function makeCtx(overrides: Partial<BreakdownRecalcContext> = {}): BreakdownRecalcContext {
    return {
      annualCTC: 1_200_000,
      cityTier: "tier1",
      regime: "new",
      variableAnnual: 0,
      baseLineSource: "estimated",
      salaryResultSource: "manual_estimated",
      ...overrides,
    };
  }

  it("recalculating from fresh components = same result as calculateSalaryBreakdown", () => {
    const fresh = calculateSalaryBreakdown(1_200_000, "tier1", "new");
    const recalc = recalculateBreakdownFromComponents(fresh.components, makeCtx());
    expect(recalc.monthlyInHandExcludingVariable).toBe(fresh.monthlyInHandExcludingVariable);
  });

  it("user-editing basic updates in-hand and marks componentsAdjusted = true", () => {
    const fresh = calculateSalaryBreakdown(1_200_000, "tier1", "new");
    const edited = fresh.components.map((c) => {
      if (c.id === "basic") {
        return { ...c, monthlyValue: 50_000, annualValue: 600_000, lineSource: "user_edited" as const };
      }
      return c;
    });
    const recalc = recalculateBreakdownFromComponents(edited, makeCtx());
    expect(recalc.meta?.componentsAdjusted).toBe(true);
    const newBasic = recalc.components.find((c) => c.id === "basic")!;
    expect(newBasic.monthlyValue).toBe(50_000);
    expect(newBasic.lineSource).toBe("user_edited");
  });

  it("removing meal_allowance row is honoured", () => {
    const fresh = calculateSalaryBreakdown(1_200_000, "tier1", "new");
    const withoutMeal = fresh.components.filter((c) => c.id !== "meal_allowance");
    const recalc = recalculateBreakdownFromComponents(withoutMeal, makeCtx());
    expect(recalc.components.find((c) => c.id === "meal_allowance")).toBeUndefined();
  });

  it("regime change in context updates income tax", () => {
    const fresh = calculateSalaryBreakdown(2_000_000, "tier1", "new");
    const newCtx = makeCtx({ annualCTC: 2_000_000, regime: "new" });
    const oldCtx = makeCtx({ annualCTC: 2_000_000, regime: "old" });
    const newRecalc = recalculateBreakdownFromComponents(fresh.components, newCtx);
    const oldRecalc = recalculateBreakdownFromComponents(fresh.components, oldCtx);
    // Old regime at 20L has more tax
    expect(oldRecalc.annualIncomeTax).toBeGreaterThan(newRecalc.annualIncomeTax);
  });

  it("breakdownEditBasis is set from salaryResultSource", () => {
    const fresh = calculateSalaryBreakdown(1_200_000, "tier1", "new");
    const recalc = recalculateBreakdownFromComponents(
      fresh.components,
      makeCtx({ salaryResultSource: "document_parsed" })
    );
    expect(recalc.meta?.breakdownEditBasis).toBe("user_edited_after_parse");
  });

  it("document_parsed recalc skips illustrative meal, telecom, PF, gratuity, prof tax defaults", () => {
    const fresh = calculateSalaryBreakdown(1_200_000, "tier1", "new");
    const recalc = recalculateBreakdownFromComponents(
      fresh.components,
      makeCtx({ salaryResultSource: "document_parsed" })
    );
    expect(getComp(recalc, "meal_allowance").monthlyValue).toBe(0);
    expect(getComp(recalc, "telecom_reimbursement").monthlyValue).toBe(0);
    expect(getComp(recalc, "employee_pf").monthlyValue).toBe(0);
    expect(getComp(recalc, "employer_pf").monthlyValue).toBe(0);
    expect(getComp(recalc, "gratuity_accrual").monthlyValue).toBe(0);
    expect(getComp(recalc, "professional_tax").monthlyValue).toBe(0);
    expect(getComp(recalc, "meal_allowance").needsVerification).toBe(true);
  });
});
