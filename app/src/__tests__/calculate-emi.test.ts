/**
 * calculate-emi.test.ts
 *
 * Unit tests for EMI (Equated Monthly Installment) calculation using
 * the standard reducing-balance (monthly-rest) formula.
 */

import { describe, it, expect } from "vitest";
import { calculateEmi, totalInterestPayable } from "@/lib/utils/calculate-emi";

// ─── calculateEmi ────────────────────────────────────────────────────────────

describe("calculateEmi — basic correctness", () => {
  it("zero principal → zero EMI", () => {
    expect(calculateEmi(0, 10, 60)).toBe(0);
  });

  it("negative principal → zero EMI", () => {
    expect(calculateEmi(-100_000, 10, 60)).toBe(0);
  });

  it("zero tenure → zero EMI", () => {
    expect(calculateEmi(500_000, 10, 0)).toBe(0);
  });

  it("negative tenure → zero EMI", () => {
    expect(calculateEmi(500_000, 10, -12)).toBe(0);
  });

  it("zero interest rate → principal ÷ tenure (ceiling)", () => {
    // 120000 at 0% for 12 months → 10000/month exactly
    expect(calculateEmi(120_000, 0, 12)).toBe(10_000);
  });

  it("zero interest, non-divisible → rounds to nearest rupee", () => {
    // 100000 / 12 = 8333.33 → rounded to 8333
    expect(calculateEmi(100_000, 0, 12)).toBe(8_333);
  });

  it("1 lakh at 12% for 12 months — well-known value ≈ 8885", () => {
    // r=0.01, factor=(1.01)^12≈1.12682503
    // EMI = 100000*0.01*1.12682503/(1.12682503-1)
    //     = 1126.82503/0.12682503 ≈ 8884.88 → 8885
    const emi = calculateEmi(100_000, 12, 12);
    expect(emi).toBe(8_885);
  });

  it("10 lakh at 10% for 60 months — ≈ 21247", () => {
    // Standard home loan benchmark
    const emi = calculateEmi(1_000_000, 10, 60);
    expect(emi).toBeGreaterThanOrEqual(21_240);
    expect(emi).toBeLessThanOrEqual(21_260);
  });

  it("50 lakh at 8.5% for 240 months (20 year home loan)", () => {
    // Approximate: ~43391
    const emi = calculateEmi(5_000_000, 8.5, 240);
    expect(emi).toBeGreaterThanOrEqual(43_000);
    expect(emi).toBeLessThanOrEqual(44_000);
  });

  it("higher rate → higher EMI for same principal and tenure", () => {
    const emi7 = calculateEmi(1_000_000, 7, 60);
    const emi10 = calculateEmi(1_000_000, 10, 60);
    const emi15 = calculateEmi(1_000_000, 15, 60);
    expect(emi7).toBeLessThan(emi10);
    expect(emi10).toBeLessThan(emi15);
  });

  it("longer tenure → lower EMI for same principal and rate", () => {
    const emi60 = calculateEmi(1_000_000, 10, 60);
    const emi120 = calculateEmi(1_000_000, 10, 120);
    const emi240 = calculateEmi(1_000_000, 10, 240);
    expect(emi240).toBeLessThan(emi120);
    expect(emi120).toBeLessThan(emi60);
  });

  it("higher principal → proportionally higher EMI", () => {
    const emi1 = calculateEmi(1_000_000, 10, 60);
    const emi2 = calculateEmi(2_000_000, 10, 60);
    expect(emi2).toBe(emi1 * 2);
  });

  it("1 month tenure → EMI ≈ principal + first month interest", () => {
    const principal = 100_000;
    const rate = 12; // 1%/month
    const emi = calculateEmi(principal, rate, 1);
    // EMI for 1 month = principal*(1+r) ≈ 101000
    expect(emi).toBeGreaterThan(principal);
    expect(emi).toBeLessThan(principal * 1.02);
  });

  it("very high rate (30% per annum) → EMI > principal/tenure", () => {
    const principal = 100_000;
    const tenure = 12;
    const emi = calculateEmi(principal, 30, tenure);
    const flatInstallment = principal / tenure;
    expect(emi).toBeGreaterThan(flatInstallment);
  });

  it("car loan 5 lakh at 9% for 60 months", () => {
    // r=0.0075; factor=(1.0075)^60≈1.56568
    // EMI = 500000*0.0075*1.56568/(1.56568-1)
    //     = 500000*0.011742/0.56568 ≈ 10376
    const emi = calculateEmi(500_000, 9, 60);
    expect(emi).toBeGreaterThanOrEqual(10_350);
    expect(emi).toBeLessThanOrEqual(10_400);
  });

  it("education loan 2 lakh at 11% for 84 months (7 years)", () => {
    const emi = calculateEmi(200_000, 11, 84);
    expect(emi).toBeGreaterThan(3_000);
    expect(emi).toBeLessThan(5_000);
  });

  it("personal loan 50000 at 18% for 24 months", () => {
    const emi = calculateEmi(50_000, 18, 24);
    expect(emi).toBeGreaterThan(2_400);
    expect(emi).toBeLessThan(2_600);
  });

  it("EMI is always a rounded integer", () => {
    const cases = [
      [100_000, 10, 12],
      [500_000, 8.5, 60],
      [2_000_000, 7.25, 180],
    ] as const;
    cases.forEach(([p, r, t]) => {
      const emi = calculateEmi(p, r, t);
      expect(emi).toBe(Math.round(emi));
    });
  });
});

// ─── totalInterestPayable ────────────────────────────────────────────────────

describe("totalInterestPayable", () => {
  it("total interest = emi × tenure − principal", () => {
    const principal = 1_000_000;
    const emi = calculateEmi(principal, 10, 60);
    const interest = totalInterestPayable(principal, emi, 60);
    expect(interest).toBe(emi * 60 - principal);
  });

  it("zero interest loan → total interest ≈ 0", () => {
    // At 0% rate, EMI = principal/tenure (floored), so there may be minor rounding
    const principal = 120_000;
    const emi = calculateEmi(principal, 0, 12); // = 10000
    const interest = totalInterestPayable(principal, emi, 12);
    expect(interest).toBe(0); // 10000*12 - 120000 = 0
  });

  it("longer tenure → more total interest for same principal", () => {
    const p = 1_000_000;
    const r = 10;
    const i60 = totalInterestPayable(p, calculateEmi(p, r, 60), 60);
    const i120 = totalInterestPayable(p, calculateEmi(p, r, 120), 120);
    expect(i120).toBeGreaterThan(i60);
  });

  it("total interest is non-negative", () => {
    const cases: [number, number, number][] = [
      [100_000, 12, 12],
      [500_000, 8, 60],
      [2_000_000, 15, 240],
    ];
    cases.forEach(([p, r, t]) => {
      const emi = calculateEmi(p, r, t);
      expect(totalInterestPayable(p, emi, t)).toBeGreaterThanOrEqual(0);
    });
  });

  it("higher rate → more total interest", () => {
    const p = 1_000_000;
    const t = 60;
    const i8 = totalInterestPayable(p, calculateEmi(p, 8, t), t);
    const i12 = totalInterestPayable(p, calculateEmi(p, 12, t), t);
    expect(i12).toBeGreaterThan(i8);
  });

  it("negative difference clamped to zero", () => {
    // If EMI × tenure < principal (shouldn't happen for reducing-balance but test the guard)
    expect(totalInterestPayable(100_000, 5_000, 12)).toBeGreaterThanOrEqual(0);
  });

  it("total repayment = principal + total interest", () => {
    const p = 500_000;
    const emi = calculateEmi(p, 10, 60);
    const interest = totalInterestPayable(p, emi, 60);
    expect(emi * 60).toBe(p + interest);
  });
});
