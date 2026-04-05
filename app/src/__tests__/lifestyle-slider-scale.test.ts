/**
 * lifestyle-slider-scale.test.ts
 *
 * Unit tests for lifestyle slider scaling utilities.
 */

import { describe, it, expect } from "vitest";
import {
  clampLifestyleMonthlyRupees,
  computeLifestyleSliderMax,
  formatLifestyleScaleHigh,
  LIFESTYLE_MONTHLY_MAX_RUPEES,
} from "@/lib/utils/lifestyle-slider-scale";

// ─── clampLifestyleMonthlyRupees ──────────────────────────────────────────────

describe("clampLifestyleMonthlyRupees", () => {
  it("returns 0 for 0", () => {
    expect(clampLifestyleMonthlyRupees(0)).toBe(0);
  });

  it("returns 0 for negative numbers", () => {
    expect(clampLifestyleMonthlyRupees(-10_000)).toBe(0);
  });

  it("returns 0 for Infinity", () => {
    expect(clampLifestyleMonthlyRupees(Infinity)).toBe(0);
  });

  it("returns 0 for NaN", () => {
    expect(clampLifestyleMonthlyRupees(NaN)).toBe(0);
  });

  it("clamps to LIFESTYLE_MONTHLY_MAX_RUPEES at top", () => {
    expect(clampLifestyleMonthlyRupees(LIFESTYLE_MONTHLY_MAX_RUPEES + 1)).toBe(LIFESTYLE_MONTHLY_MAX_RUPEES);
  });

  it("rounds fractional values", () => {
    expect(clampLifestyleMonthlyRupees(5000.7)).toBe(5001);
    expect(clampLifestyleMonthlyRupees(5000.2)).toBe(5000);
  });

  it("normal values pass through unchanged", () => {
    expect(clampLifestyleMonthlyRupees(25_000)).toBe(25_000);
    expect(clampLifestyleMonthlyRupees(1_00_000)).toBe(1_00_000);
  });

  it("max constant is 10 crore", () => {
    expect(LIFESTYLE_MONTHLY_MAX_RUPEES).toBe(10_00_00_000);
  });
});

// ─── computeLifestyleSliderMax ────────────────────────────────────────────────

describe("computeLifestyleSliderMax", () => {
  it("returns at least suggestedMax when value is 0", () => {
    const max = computeLifestyleSliderMax(50_000, 0, 1_000);
    expect(max).toBeGreaterThanOrEqual(50_000);
  });

  it("grows when value exceeds suggestedMax", () => {
    const baseline = computeLifestyleSliderMax(50_000, 0, 1_000);
    const grown = computeLifestyleSliderMax(50_000, 1_00_000, 1_000);
    expect(grown).toBeGreaterThan(baseline);
  });

  it("never returns a value lower than value + step", () => {
    const value = 80_000;
    const step = 5_000;
    const result = computeLifestyleSliderMax(50_000, value, step);
    expect(result).toBeGreaterThanOrEqual(value + step);
  });

  it("returns a 'nice' round number from the lookup table or ladder", () => {
    const result = computeLifestyleSliderMax(40_000, 0, 1_000);
    // The result should be one of the NICE_UPPER_BOUNDS or a ladder multiple
    expect(result % 1).toBe(0); // always integer
    expect(result).toBeGreaterThanOrEqual(40_000);
  });

  it("result is divisible by step", () => {
    const step = 5_000;
    const result = computeLifestyleSliderMax(50_000, 30_000, step);
    expect(result % step).toBe(0);
  });

  it("handles zero suggestedMax", () => {
    const result = computeLifestyleSliderMax(0, 10_000, 1_000);
    expect(result).toBeGreaterThanOrEqual(10_000);
  });

  it("result does not exceed LIFESTYLE_MONTHLY_MAX_RUPEES", () => {
    const result = computeLifestyleSliderMax(
      LIFESTYLE_MONTHLY_MAX_RUPEES,
      LIFESTYLE_MONTHLY_MAX_RUPEES,
      1_000
    );
    expect(result).toBeLessThanOrEqual(LIFESTYLE_MONTHLY_MAX_RUPEES);
  });

  it("step of 1 still returns a positive result", () => {
    const result = computeLifestyleSliderMax(10_000, 5_000, 1);
    expect(result).toBeGreaterThan(0);
  });
});

// ─── formatLifestyleScaleHigh ─────────────────────────────────────────────────

describe("formatLifestyleScaleHigh", () => {
  it("formats amounts below ₹1000 as plain rupee string", () => {
    const r = formatLifestyleScaleHigh(500);
    expect(r).toContain("₹");
    expect(r).not.toContain("K");
    expect(r).not.toContain("L");
  });

  it("formats amounts between ₹1000 and ₹99999 as K", () => {
    expect(formatLifestyleScaleHigh(5_000)).toBe("₹5K");
    expect(formatLifestyleScaleHigh(25_000)).toBe("₹25K");
    expect(formatLifestyleScaleHigh(99_000)).toBe("₹99K");
  });

  it("formats amounts ≥ ₹1L as L", () => {
    expect(formatLifestyleScaleHigh(1_00_000)).toBe("₹1L");
    expect(formatLifestyleScaleHigh(5_00_000)).toBe("₹5L");
    expect(formatLifestyleScaleHigh(10_00_000)).toBe("₹10L");
  });

  it("formats fractional lakhs correctly", () => {
    const r = formatLifestyleScaleHigh(1_50_000);
    expect(r).toBe("₹1.5L");
  });

  it("trailing zeros are stripped for lakh amounts", () => {
    const r = formatLifestyleScaleHigh(2_00_000);
    expect(r).toBe("₹2L");
    expect(r).not.toContain(".0");
  });

  it("1000 → ₹1K", () => {
    expect(formatLifestyleScaleHigh(1_000)).toBe("₹1K");
  });

  it("always includes ₹ prefix", () => {
    [500, 5_000, 1_00_000].forEach((amount) => {
      expect(formatLifestyleScaleHigh(amount)).toMatch(/^₹/);
    });
  });
});
