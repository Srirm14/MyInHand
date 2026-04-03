/**
 * ASSUMPTION: Mock extraction from offer letter uploads until a document API exists.
 */
import type { CityTier } from "@/lib/constants/city-tiers";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { TaxRegime } from "@/lib/types/salary.types";

function inferAnnualCTCFromFileName(name: string): number {
  const lakh = name.match(/(\d+(?:\.\d+)?)\s*l(?:akh)?/i);
  if (lakh) return Math.round(parseFloat(lakh[1]) * 100_000);
  const digits = name.match(/(\d{6,9})/);
  if (digits) return Math.min(parseInt(digits[1], 10), 999_999_999);
  return 1_800_000;
}

export async function mockParseOfferDocument(
  file: File,
  defaults: { cityTier: CityTier; taxRegime: TaxRegime }
): Promise<OfferDraft> {
  await new Promise((r) => setTimeout(r, 500));

  const base = file.name.replace(/\.[^.]+$/i, "");
  const companyName =
    base.replace(/[_-]+/g, " ").trim().slice(0, 56) || "Offer from upload";

  const taxRegime: TaxRegime = file.name.toLowerCase().includes("old")
    ? "old"
    : file.name.toLowerCase().includes("new")
      ? "new"
      : defaults.taxRegime;

  return {
    id: crypto.randomUUID(),
    companyName,
    annualCTC: inferAnnualCTCFromFileName(file.name),
    compensationMode: "total_only",
    fixedAnnual: 0,
    variableAnnual: 0,
    cityTier: defaults.cityTier,
    taxRegime,
    joiningBonus: 0,
    esopValue: 0,
    documentFileName: file.name,
  };
}
