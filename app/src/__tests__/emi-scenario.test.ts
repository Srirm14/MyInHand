import { describe, expect, it } from "vitest";
import { computeEmiScenario, type EmiLoanInput } from "@/lib/premium/emi-scenario";

describe("computeEmiScenario", () => {
  it("aggregates across multiple loans", () => {
    const loans: EmiLoanInput[] = [
      { kind: "home", principal: 4_500_000, rate: 8.7, tenureYears: 20 },
      { kind: "car", principal: 800_000, rate: 10.5, tenureYears: 5 },
      { kind: "personal", principal: 200_000, rate: 14.5, tenureYears: 2 },
    ];
    const r = computeEmiScenario(loans);
    expect(r.loans).toHaveLength(3);
    expect(r.totalEmi).toBeGreaterThan(0);
    expect(r.totalInterestLifetime).toBeGreaterThan(0);
    expect(r.totalRepaymentLifetime).toBeGreaterThan(0);
    // sanity: total repayment must be >= total principal
    const principalSum = loans.reduce((s, l) => s + l.principal, 0);
    expect(r.totalRepaymentLifetime).toBeGreaterThanOrEqual(principalSum);
  });

  it("handles zero/negative principal safely", () => {
    const loans: EmiLoanInput[] = [
      { kind: "home", principal: -100, rate: 10, tenureYears: 1 },
    ];
    const r = computeEmiScenario(loans);
    expect(r.totalEmi).toBe(0);
    expect(r.totalInterestLifetime).toBe(0);
    expect(r.totalRepaymentLifetime).toBe(0);
  });
});

