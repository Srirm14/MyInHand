/**
 * ASSUMPTION: No server-side OCR/PDF parsing yet. This simulates extraction from
 * filename patterns and returns the same tax engine as manual entry, labeled as document-based.
 */
import type { CityTier } from "@/lib/constants/city-tiers";
import type { SalaryBreakdown, SalaryInput, TaxRegime } from "@/lib/types/salary.types";
import { calculateSalaryBreakdown } from "@/lib/utils/calculate-salary";

function inferAnnualCTCFromFileName(name: string): number {
  const lakh = name.match(/(\d+(?:\.\d+)?)\s*l(?:akh)?/i);
  if (lakh) return Math.round(parseFloat(lakh[1]) * 100_000);
  const digits = name.match(/(\d{6,9})/);
  if (digits) return Math.min(parseInt(digits[1], 10), 999_999_999);
  return 1_800_000;
}

export async function mockParseSalaryDocument(
  file: File,
  defaults: { cityTier: CityTier; taxRegime: TaxRegime }
): Promise<{ input: SalaryInput; breakdown: SalaryBreakdown }> {
  await new Promise((r) => setTimeout(r, 750));

  const annualCTC = inferAnnualCTCFromFileName(file.name);
  const taxRegime: TaxRegime = file.name.toLowerCase().includes("old")
    ? "old"
    : file.name.toLowerCase().includes("new")
      ? "new"
      : defaults.taxRegime;

  const input: SalaryInput = {
    fullName: "",
    email: "",
    annualCTC,
    compensationMode: "total_only",
    fixedAnnual: 0,
    variableAnnual: 0,
    cityTier: defaults.cityTier,
    taxRegime,
    resultSource: "document_parsed",
    documentFileName: file.name,
  };

  const breakdown = calculateSalaryBreakdown(
    annualCTC,
    input.cityTier,
    input.taxRegime,
    {
      resultSource: "document_parsed",
      documentFileName: file.name,
    }
  );

  return { input, breakdown };
}
