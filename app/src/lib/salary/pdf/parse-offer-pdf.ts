"use client";

import { suggestInitialAnnualCtc } from "@/lib/salary/pdf/apply-salary-pdf-to-state";
import { parseCompensationPdf } from "@/lib/salary/pdf/parse-compensation-pdf";
import type { CompensationPdfParseResult } from "@/lib/salary/pdf/salary-pdf-parse.types";
import type { CityTier } from "@/lib/constants/city-tiers";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { TaxRegime } from "@/lib/types/salary.types";

function pickEmployerName(parse: CompensationPdfParseResult): string {
  const emp = parse.fields.find((f) => f.key === "employerName");
  if (emp?.rawSnippet?.trim()) return emp.rawSnippet.trim().slice(0, 56);
  const base = parse.fileName.replace(/\.[^.]+$/i, "");
  return base.replace(/[_-]+/g, " ").trim().slice(0, 56) || "Offer from upload";
}

function pickJoiningBonus(parse: CompensationPdfParseResult): number {
  const j = parse.fields.find((f) => f.key === "joiningBonus");
  const b = parse.fields.find((f) => f.key === "bonus");
  let annual: number | undefined = j?.amountAnnual;
  if (annual == null && j?.amountMonthly != null) annual = j.amountMonthly * 12;
  if (annual == null) annual = b?.amountAnnual;
  if (annual == null && b?.amountMonthly != null) annual = b.amountMonthly * 12;
  return annual != null ? Math.round(annual) : 0;
}

/**
 * Parse a single offer PDF for the comparison tool. Uses the same PDF.js pipeline;
 * high-signal fields are applied; ambiguous values stay conservative.
 */
export async function parseOfferPdfToDraft(
  file: File,
  defaults: { cityTier: CityTier; taxRegime: TaxRegime }
): Promise<OfferDraft> {
  const buffer = await file.arrayBuffer();
  const parse = await parseCompensationPdf(buffer, file.name);
  const annualCTC = suggestInitialAnnualCtc(parse, file.name);
  const varField = parse.fields.find((f) => f.key === "variableAnnual");
  const varAnnual =
    varField?.amountAnnual ??
    (varField?.amountMonthly != null ? varField.amountMonthly * 12 : 0);
  const fixedField = parse.fields.find((f) => f.key === "fixedAnnual");
  const fixedAnnual =
    fixedField?.amountAnnual ??
    (fixedField?.amountMonthly != null ? fixedField.amountMonthly * 12 : 0);

  const useSplit =
    varAnnual > 0 && (fixedAnnual > 0 || annualCTC > varAnnual);

  return {
    id: crypto.randomUUID(),
    companyName: pickEmployerName(parse),
    annualCTC,
    compensationMode: useSplit ? "fixed_variable" : "total_only",
    fixedAnnual: useSplit ? Math.max(0, fixedAnnual || annualCTC - varAnnual) : 0,
    variableAnnual: useSplit ? Math.max(0, varAnnual) : 0,
    cityTier: defaults.cityTier,
    taxRegime: defaults.taxRegime,
    joiningBonus: pickJoiningBonus(parse),
    esopValue: 0,
    documentFileName: file.name,
  };
}
