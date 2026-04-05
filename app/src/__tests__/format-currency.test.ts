/**
 * format-currency.test.ts
 *
 * Unit tests for all currency formatting utilities used across InHand's UI.
 */

import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  formatCurrencyCompact,
  formatIndianNumber,
  formatPercentage,
  formatCTCAsLPA,
} from "@/lib/utils/format-currency";

// ─── formatCurrency (INR with ₹ symbol) ──────────────────────────────────────

describe("formatCurrency", () => {
  it("formats zero as ₹0", () => {
    const result = formatCurrency(0);
    expect(result).toContain("0");
    expect(result).toContain("₹");
  });

  it("formats 1 lakh correctly", () => {
    const result = formatCurrency(100_000);
    expect(result).toContain("₹");
    expect(result).toMatch(/1,00,000|100,000/); // en-IN vs en-US grouping
  });

  it("formats 10 lakh with Indian grouping", () => {
    const result = formatCurrency(1_000_000);
    expect(result).toContain("₹");
    expect(result.replace(/\s/g, "")).toMatch(/10,00,000|1,000,000/);
  });

  it("formats negative amounts with minus sign", () => {
    const result = formatCurrency(-50_000);
    expect(result).toContain("-");
  });

  it("returns a string", () => {
    expect(typeof formatCurrency(150_000)).toBe("string");
  });

  it("maximum fraction digits is 0 (no decimal places)", () => {
    const result = formatCurrency(1234.56);
    expect(result).not.toContain(".");
  });
});

// ─── formatCurrencyCompact ────────────────────────────────────────────────────

describe("formatCurrencyCompact", () => {
  it("formats amounts < ₹1000 as plain rupees", () => {
    expect(formatCurrencyCompact(500)).toBe("₹500");
  });

  it("formats ₹1000-₹99999 as K", () => {
    expect(formatCurrencyCompact(5_000)).toBe("₹5K");
    expect(formatCurrencyCompact(15_000)).toBe("₹15K");
    expect(formatCurrencyCompact(99_000)).toBe("₹99K");
  });

  it("formats ₹1L-₹99L as L with one decimal", () => {
    expect(formatCurrencyCompact(1_00_000)).toBe("₹1.0L");
    expect(formatCurrencyCompact(10_00_000)).toBe("₹10.0L");
    expect(formatCurrencyCompact(14_00_000)).toBe("₹14.0L");
  });

  it("formats amounts ≥ ₹1Cr as Cr", () => {
    expect(formatCurrencyCompact(1_00_00_000)).toBe("₹1.0Cr");
    expect(formatCurrencyCompact(5_00_00_000)).toBe("₹5.0Cr");
  });

  it("handles negative amounts", () => {
    const r = formatCurrencyCompact(-5_00_000);
    expect(r).toContain("-");
    expect(r).toContain("₹");
  });

  it("handles zero", () => {
    const r = formatCurrencyCompact(0);
    expect(r).toContain("₹");
    expect(r).toContain("0");
  });

  it("1.5 crore formats as Cr", () => {
    expect(formatCurrencyCompact(1_50_00_000)).toBe("₹1.5Cr");
  });

  it("₹50 formats without K (below threshold)", () => {
    const r = formatCurrencyCompact(50);
    expect(r).not.toContain("K");
    expect(r).not.toContain("L");
  });
});

// ─── formatIndianNumber ───────────────────────────────────────────────────────

describe("formatIndianNumber", () => {
  it("formats zero as '0'", () => {
    expect(formatIndianNumber(0)).toBe("0");
  });

  it("formats 1000 with comma grouping", () => {
    const r = formatIndianNumber(1000);
    expect(r).toContain(",");
  });

  it("formats 1 lakh with en-IN grouping", () => {
    const r = formatIndianNumber(100_000);
    expect(r).toMatch(/1,00,000|100,000/);
  });

  it("returns a string", () => {
    expect(typeof formatIndianNumber(500_000)).toBe("string");
  });

  it("has no decimal places", () => {
    expect(formatIndianNumber(1234.99)).not.toContain(".");
  });
});

// ─── formatPercentage ─────────────────────────────────────────────────────────

describe("formatPercentage", () => {
  it("formats 0 as '0.0%'", () => {
    expect(formatPercentage(0)).toBe("0.0%");
  });

  it("formats 12.4 as '12.4%'", () => {
    expect(formatPercentage(12.4)).toBe("12.4%");
  });

  it("defaults to 1 decimal place", () => {
    expect(formatPercentage(9)).toBe("9.0%");
  });

  it("respects custom decimal places", () => {
    expect(formatPercentage(9.123, 2)).toBe("9.12%");
    expect(formatPercentage(9.123, 0)).toBe("9%");
  });

  it("includes % symbol", () => {
    expect(formatPercentage(50)).toContain("%");
  });

  it("formats 100 as '100.0%'", () => {
    expect(formatPercentage(100)).toBe("100.0%");
  });

  it("handles negative percentages", () => {
    expect(formatPercentage(-5.5)).toBe("-5.5%");
  });
});

// ─── formatCTCAsLPA ───────────────────────────────────────────────────────────

describe("formatCTCAsLPA", () => {
  it("returns empty string for 0", () => {
    expect(formatCTCAsLPA(0)).toBe("");
  });

  it("returns empty string for negative", () => {
    expect(formatCTCAsLPA(-1_000_000)).toBe("");
  });

  it("800000 → '8 LPA'", () => {
    expect(formatCTCAsLPA(8_00_000)).toBe("8 LPA");
  });

  it("1200000 → '12 LPA'", () => {
    expect(formatCTCAsLPA(12_00_000)).toBe("12 LPA");
  });

  it("1850000 → '18.5 LPA'", () => {
    expect(formatCTCAsLPA(18_50_000)).toBe("18.5 LPA");
  });

  it("2500000 → '25 LPA'", () => {
    expect(formatCTCAsLPA(25_00_000)).toBe("25 LPA");
  });

  it("10000000 → '1 Cr'", () => {
    expect(formatCTCAsLPA(1_00_00_000)).toBe("1 Cr");
  });

  it("12500000 → '1.25 Cr'", () => {
    expect(formatCTCAsLPA(1_25_00_000)).toBe("1.25 Cr");
  });

  it("50000000 → '5 Cr'", () => {
    expect(formatCTCAsLPA(5_00_00_000)).toBe("5 Cr");
  });

  it("integer LPA drops the .0 suffix", () => {
    const result = formatCTCAsLPA(10_00_000);
    expect(result).toBe("10 LPA");
    expect(result).not.toContain(".0");
  });

  it("non-integer LPA includes one decimal", () => {
    const result = formatCTCAsLPA(7_50_000);
    expect(result).toBe("7.5 LPA");
  });

  it("150000 → '1.5 LPA'", () => {
    expect(formatCTCAsLPA(1_50_000)).toBe("1.5 LPA");
  });

  it("all LPA results end with ' LPA'", () => {
    [5_00_000, 10_00_000, 25_00_000, 50_00_000].forEach((ctc) => {
      expect(formatCTCAsLPA(ctc)).toMatch(/LPA$/);
    });
  });

  it("all Cr results end with ' Cr'", () => {
    [1_00_00_000, 2_00_00_000, 5_00_00_000].forEach((ctc) => {
      expect(formatCTCAsLPA(ctc)).toMatch(/Cr$/);
    });
  });
});
