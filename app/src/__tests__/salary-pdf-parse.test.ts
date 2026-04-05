import { describe, expect, it } from "vitest";
import { buildSalaryStateFromPdfReview } from "@/lib/salary/pdf/apply-salary-pdf-to-state";
import {
  clusterTextItemsIntoLines,
  rawItemsToPdfTextItems,
} from "@/lib/salary/pdf/extract-pdf-text-structure";
import { mapPdfLinesToSalaryFields } from "@/lib/salary/pdf/map-text-to-salary-fields";
import {
  inferMonthlyAnnualPair,
  parseMoneyTokens,
} from "@/lib/salary/pdf/parse-money-from-text";
import type { CompensationPdfParseResult } from "@/lib/salary/pdf/salary-pdf-parse.types";
import type { SalaryPdfSemanticKey } from "@/lib/salary/pdf/salary-pdf-parse.types";
import { SalaryPdfParseError } from "@/lib/salary/pdf/salary-pdf-parse.types";
import { inferCtcLineage } from "@/lib/salary/pdf/salary-pdf-review-model";
import { defaultIncludeExtractedField } from "@/lib/salary/pdf/review-defaults";
import {
  assertPdfMagicBytes,
  assertValidSalaryPdfFile,
} from "@/lib/salary/pdf/validate-pdf-upload";

describe("validate-pdf-upload", () => {
  it("rejects empty file", () => {
    expect(() =>
      assertValidSalaryPdfFile(new File([], "x.pdf", { type: "application/pdf" }))
    ).toThrow(SalaryPdfParseError);
  });

  it("rejects non-pdf", () => {
    expect(() =>
      assertValidSalaryPdfFile(
        new File(["hi"], "note.txt", { type: "text/plain" })
      )
    ).toThrow(SalaryPdfParseError);
  });

  it("accepts pdf mime", () => {
    expect(() =>
      assertValidSalaryPdfFile(
        new File([new Uint8Array([1])], "doc.pdf", {
          type: "application/pdf",
        })
      )
    ).not.toThrow();
  });

  it("assertPdfMagicBytes requires %PDF", () => {
    expect(() => assertPdfMagicBytes(new ArrayBuffer(8))).toThrow(
      SalaryPdfParseError
    );
    const ok = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]).buffer;
    expect(() => assertPdfMagicBytes(ok)).not.toThrow();
  });
});

describe("parse-money-from-text", () => {
  it("parses lakhs and rupee symbols", () => {
    expect(parseMoneyTokens("CTC 24.5 Lakhs")).toContain(2_450_000);
    expect(parseMoneyTokens("₹12,34,567")).toContain(1_234_567);
  });

  it("detects monthly/annual pair", () => {
    const p = inferMonthlyAnnualPair([50_000, 600_000]);
    expect(p).toEqual({ monthly: 50_000, annual: 600_000 });
  });
});

describe("extract-pdf-text-structure", () => {
  it("clusters items on the same baseline into one line", () => {
    const items = rawItemsToPdfTextItems(
      [
        { str: "Basic", transform: [1, 0, 0, 1, 10, 100], width: 20, height: 10 },
        {
          str: "50,000",
          transform: [1, 0, 0, 1, 80, 102],
          width: 30,
          height: 10,
        },
      ],
      1
    );
    const lines = clusterTextItemsIntoLines(items);
    expect(lines).toHaveLength(1);
    expect(lines[0]!.text).toMatch(/Basic.*50,000/);
  });
});

describe("map-text-to-salary-fields", () => {
  it("maps labeled compensation lines", () => {
    const lines = clusterTextItemsIntoLines(
      rawItemsToPdfTextItems(
        [
          {
            str: "Annual CTC",
            transform: [1, 0, 0, 1, 20, 200],
            width: 40,
            height: 11,
          },
          {
            str: "₹18,00,000",
            transform: [1, 0, 0, 1, 200, 200],
            width: 50,
            height: 11,
          },
          {
            str: "Basic Salary",
            transform: [1, 0, 0, 1, 20, 170],
            width: 40,
            height: 11,
          },
          {
            str: "60,000",
            transform: [1, 0, 0, 1, 200, 170],
            width: 35,
            height: 11,
          },
        ],
        1
      )
    );
    const fields = mapPdfLinesToSalaryFields(lines);
    const ctc = fields.find((f) => f.key === "annualCTC");
    expect(ctc?.amountAnnual).toBe(1_800_000);
    const basic = fields.find((f) => f.key === "basic");
    expect(basic?.amountMonthly === 60_000 || basic?.amountAnnual === 720_000).toBe(
      true
    );
  });
});

describe("apply-salary-pdf-to-state", () => {
  it("builds breakdown without breaking tax recalculation", () => {
    const parse: CompensationPdfParseResult = {
      fileName: "offer.pdf",
      pages: [],
      fields: [
        {
          key: "annualCTC",
          labelMatched: "Annual CTC",
          confidence: "high",
          amountAnnual: 1_800_000,
          rawSnippet: "Annual CTC 1800000",
        },
        {
          key: "basic",
          labelMatched: "Basic",
          confidence: "high",
          amountMonthly: 60_000,
          rawSnippet: "Basic 60000",
        },
      ],
      warnings: [],
    };
    const selection = {
      includedKeys: new Set(
        parse.fields.filter((f) => defaultIncludeExtractedField(f)).map((f) => f.key)
      ),
      annualCTC: 1_800_000,
      fullName: "",
      compensationMode: "total_only" as const,
      fixedAnnual: 0,
      variableAnnual: 0,
    };
    const { input, breakdown } = buildSalaryStateFromPdfReview(parse, selection, {
      cityTier: "tier1",
      taxRegime: "new",
    });
    expect(input.annualCTC).toBe(1_800_000);
    expect(input.resultSource).toBe("document_parsed");
    expect(breakdown.components.some((c) => c.id === "basic")).toBe(true);
    const basic = breakdown.components.find((c) => c.id === "basic");
    expect(basic?.monthlyValue).toBe(60_000);
    expect(basic?.lineSource).toBe("parsed");
    expect(breakdown.statedAnnualCTC).toBe(1_800_000);
  });

  it("applies manual basic when that line was not present in the parse", () => {
    const parse: CompensationPdfParseResult = {
      fileName: "sparse.pdf",
      pages: [],
      fields: [
        {
          key: "annualCTC",
          labelMatched: "CTC",
          confidence: "high",
          amountAnnual: 1_200_000,
          rawSnippet: "CTC",
        },
      ],
      warnings: [],
    };
    const selection = {
      includedKeys: new Set<SalaryPdfSemanticKey>(["annualCTC", "basic"]),
      amountAnnualOverride: { basic: 600_000 },
      amountMonthlyOverride: {} as Partial<Record<SalaryPdfSemanticKey, number>>,
      annualCTC: 1_200_000,
      fullName: "",
      compensationMode: "total_only" as const,
      fixedAnnual: 0,
      variableAnnual: 0,
    };
    const { breakdown } = buildSalaryStateFromPdfReview(parse, selection, {
      cityTier: "tier1",
      taxRegime: "new",
    });
    const basic = breakdown.components.find((c) => c.id === "basic");
    expect(basic?.monthlyValue).toBe(50_000);
    expect(basic?.lineSource).toBe("parsed");
  });

  it("creates separate breakdown rows for vehicle / washing / LTA and for profit incentive", () => {
    const parse: CompensationPdfParseResult = {
      fileName: "annexure.pdf",
      pages: [],
      fields: [
        {
          key: "annualCTC",
          labelMatched: "Annual CTC",
          confidence: "high",
          amountAnnual: 1_500_025,
          rawSnippet: "",
        },
        {
          key: "specialAllowance",
          labelMatched: "Special Allowance",
          confidence: "high",
          amountMonthly: 100,
          rawSnippet: "",
        },
        {
          key: "vehicleAllowance",
          labelMatched: "Vehicle Allowance",
          confidence: "high",
          amountMonthly: 34_314,
          rawSnippet: "",
        },
        {
          key: "washingAllowance",
          labelMatched: "Washing Allowance",
          confidence: "high",
          amountMonthly: 2_000,
          rawSnippet: "",
        },
        {
          key: "profitIncentive",
          labelMatched: "Profit Incentive (PI)",
          confidence: "high",
          amountAnnual: 103_450,
          rawSnippet: "",
        },
      ],
      warnings: [],
    };
    const keys = parse.fields.map((f) => f.key);
    const selection = {
      includedKeys: new Set<SalaryPdfSemanticKey>(keys),
      annualCTC: 1_500_025,
      fullName: "",
      compensationMode: "total_only" as const,
      fixedAnnual: 0,
      variableAnnual: 0,
    };
    const { breakdown } = buildSalaryStateFromPdfReview(parse, selection, {
      cityTier: "tier1",
      taxRegime: "new",
    });
    const customs = breakdown.components.filter((c) => c.isCustom);
    expect(customs.some((c) => c.name.includes("Vehicle"))).toBe(true);
    expect(customs.some((c) => c.name.includes("Washing"))).toBe(true);
    expect(customs.some((c) => c.name.includes("Profit"))).toBe(true);
    const special = breakdown.components.find((c) => c.id === "special_allowance");
    expect(special?.monthlyValue).toBe(100);
  });
});

describe("salary-pdf-review-model", () => {
  it("infers CTC lineage from document vs filename", () => {
    const base = {
      fileName: "x.pdf",
      pages: [],
      warnings: [],
    } satisfies Partial<CompensationPdfParseResult>;
    expect(
      inferCtcLineage(
        {
          ...base,
          fields: [
            {
              key: "annualCTC",
              labelMatched: "CTC",
              confidence: "high",
              amountAnnual: 1,
              rawSnippet: "",
            },
          ],
        } as CompensationPdfParseResult,
        "x.pdf"
      )
    ).toBe("parsed_high");

    expect(
      inferCtcLineage(
        { ...base, fields: [] } as CompensationPdfParseResult,
        "24L_offer.pdf"
      )
    ).toBe("from_filename");

    expect(
      inferCtcLineage(
        { ...base, fields: [] } as CompensationPdfParseResult,
        "letter.pdf"
      )
    ).toBe("placeholder");
  });
});
