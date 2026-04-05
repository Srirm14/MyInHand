import type { CityTier } from "@/lib/constants/city-tiers";
import { MIN_ANNUAL_CTC_RUPEES } from "@/lib/schemas/ctc-input.schema";
import { buildBreakdownRecalcContext } from "@/lib/stores/salary-breakdown-recalc-context";
import type {
  CompensationPdfParseResult,
  ExtractedSalaryField,
  SalaryPdfComponentId,
  SalaryPdfSemanticKey,
} from "@/lib/salary/pdf/salary-pdf-parse.types";
import type {
  CompensationMode,
  SalaryBreakdown,
  SalaryComponent,
  SalaryInput,
  TaxRegime,
} from "@/lib/types/salary.types";
import {
  calculateSalaryBreakdown,
  recalculateBreakdownFromComponents,
} from "@/lib/utils/calculate-salary";

/** User-added lines in the PDF review step (mapped to custom breakdown rows). */
export interface SalaryPdfManualLine {
  name: string;
  monthly: number;
}

export interface SalaryPdfReviewSelection {
  /** Field keys the user left enabled in the review UI */
  includedKeys: Set<SalaryPdfSemanticKey>;
  /** Optional per-field overrides (rupees, annual where applicable) */
  amountAnnualOverride?: Partial<Record<SalaryPdfSemanticKey, number>>;
  amountMonthlyOverride?: Partial<Record<SalaryPdfSemanticKey, number>>;
  /** Final annual CTC after user edits */
  annualCTC: number;
  fullName?: string;
  compensationMode: CompensationMode;
  fixedAnnual: number;
  variableAnnual: number;
  /** Extra allowance rows (e.g. parser missed a line on the annexure) */
  manualAllowances?: SalaryPdfManualLine[];
  /** Extra variable / bonus rows */
  manualVariableLines?: SalaryPdfManualLine[];
}

function fieldMap(
  fields: ExtractedSalaryField[],
  key: SalaryPdfSemanticKey
): ExtractedSalaryField | undefined {
  return fields.find((f) => f.key === key);
}

function amountAnnualRupees(f: ExtractedSalaryField | undefined): number | null {
  if (!f) return null;
  if (f.amountAnnual != null) return Math.round(f.amountAnnual);
  if (f.amountMonthly != null) return Math.round(f.amountMonthly * 12);
  return null;
}

function amountMonthlyRupees(f: ExtractedSalaryField | undefined): number | null {
  if (!f) return null;
  if (f.amountMonthly != null) return Math.round(f.amountMonthly);
  if (f.amountAnnual != null) return Math.round(f.amountAnnual / 12);
  return null;
}

/** Shown as their own allowance rows (syncs with PDF review dialog). */
const DISTINCT_ALLOWANCE_KEYS = new Set<SalaryPdfSemanticKey>([
  "vehicleAllowance",
  "washingAllowance",
  "ltaAllowance",
]);

/** Shown as their own variable rows instead of merging into “Variable pay”. */
const DISTINCT_VARIABLE_KEYS = new Set<SalaryPdfSemanticKey>([
  "profitIncentive",
  "joiningBonus",
  "bonus",
]);

const DEFAULT_DISTINCT_ALLOWANCE_NAME: Partial<Record<SalaryPdfSemanticKey, string>> =
  {
    vehicleAllowance: "Vehicle allowance",
    washingAllowance: "Washing allowance",
    ltaAllowance: "LTA",
  };

const DEFAULT_DISTINCT_VARIABLE_NAME: Partial<Record<SalaryPdfSemanticKey, string>> =
  {
    profitIncentive: "Profit incentive",
    joiningBonus: "Joining / sign-on bonus",
    bonus: "Bonus",
  };

const COMPONENT_MAP: Partial<
  Record<SalaryPdfSemanticKey, SalaryPdfComponentId>
> = {
  basic: "basic",
  hra: "hra",
  specialAllowance: "special_allowance",
  variablePay: "variable_pay",
  esop: "esop_estimate",
  employeePf: "employee_pf",
  employerPf: "employer_pf",
  gratuity: "gratuity_accrual",
  professionalTax: "professional_tax",
};

function variableFieldWhenIncluded(
  fields: ExtractedSalaryField[],
  inc: Set<SalaryPdfSemanticKey>
): ExtractedSalaryField | undefined {
  if (inc.has("variableAnnual")) return fieldMap(fields, "variableAnnual");
  if (inc.has("variablePay")) return fieldMap(fields, "variablePay");
  return undefined;
}

function annualFromField(f: ExtractedSalaryField | undefined): number | null {
  if (f === undefined) return null;
  return amountAnnualRupees(f);
}

function reconcileCompensationSplit(
  mode: CompensationMode,
  annualCTC: number,
  fixedAnnual: number,
  variableAnnual: number,
  fixedAnnualFromField: number | null,
  varAnnualFromField: number | null
): { compensationMode: CompensationMode; fixedAnnual: number; variableAnnual: number } {
  let nextMode = mode;
  let fixed = fixedAnnual;
  let variable = variableAnnual;

  if (
    nextMode === "fixed_variable" &&
    variable === 0 &&
    varAnnualFromField !== null
  ) {
    variable = varAnnualFromField;
  }
  if (
    nextMode === "fixed_variable" &&
    fixed === 0 &&
    fixedAnnualFromField !== null
  ) {
    fixed = fixedAnnualFromField;
  }

  if (
    nextMode === "total_only" &&
    varAnnualFromField !== null &&
    varAnnualFromField > 0 &&
    annualCTC > 0
  ) {
    nextMode = "fixed_variable";
    variable = varAnnualFromField;
    fixed = Math.max(0, annualCTC - variable);
  }

  if (nextMode === "fixed_variable" && annualCTC > 0) {
    if (fixed === 0 && variable > 0) {
      fixed = Math.max(0, annualCTC - variable);
    }
    if (variable === 0 && fixed > 0) {
      variable = Math.max(0, annualCTC - fixed);
    }
  }

  return {
    compensationMode: nextMode,
    fixedAnnual: fixed,
    variableAnnual: variable,
  };
}

/**
 * Resolve CTC and compensation split from extracted fields + user review state.
 */
export function resolveSalaryInputFromPdfReview(
  parse: CompensationPdfParseResult,
  selection: SalaryPdfReviewSelection,
  defaults: { cityTier: CityTier; taxRegime: TaxRegime }
): SalaryInput {
  const { fields } = parse;
  const inc = selection.includedKeys;

  const ctcField = inc.has("annualCTC") ? fieldMap(fields, "annualCTC") : undefined;
  const fixedF = inc.has("fixedAnnual") ? fieldMap(fields, "fixedAnnual") : undefined;
  const varF = variableFieldWhenIncluded(fields, inc);

  let annualCTC = Math.max(0, Math.round(selection.annualCTC));
  if (annualCTC <= 0 && ctcField) {
    annualCTC = amountAnnualRupees(ctcField) ?? 0;
  }
  if (annualCTC <= 0 && fixedF !== undefined && varF !== undefined) {
    annualCTC =
      (amountAnnualRupees(fixedF) ?? 0) + (amountAnnualRupees(varF) ?? 0);
  }

  const fixedAnnualFromField = annualFromField(fixedF);
  const varAnnualFromField = annualFromField(varF);

  const split = reconcileCompensationSplit(
    selection.compensationMode,
    annualCTC,
    Math.max(0, Math.round(selection.fixedAnnual)),
    Math.max(0, Math.round(selection.variableAnnual)),
    fixedAnnualFromField,
    varAnnualFromField
  );

  const fullName = selection.fullName?.trim() ?? "";

  return {
    fullName,
    email: "",
    annualCTC: Math.max(0, Math.round(annualCTC)),
    cityTier: defaults.cityTier,
    taxRegime: defaults.taxRegime,
    compensationMode: split.compensationMode,
    fixedAnnual: split.fixedAnnual,
    variableAnnual: split.variableAnnual,
    resultSource: "document_parsed",
    documentFileName: parse.fileName,
  };
}

function resolveIncludedMonthlyRupees(
  fields: ExtractedSalaryField[],
  key: SalaryPdfSemanticKey,
  overrides: {
    amountAnnual?: Partial<Record<SalaryPdfSemanticKey, number>>;
    amountMonthly?: Partial<Record<SalaryPdfSemanticKey, number>>;
  }
): number | null {
  const f = fields.find((x) => x.key === key);
  const oa = overrides.amountAnnual?.[key];
  const om = overrides.amountMonthly?.[key];

  let monthly: number | null = null;
  if (om != null && Number.isFinite(om)) monthly = Math.round(om);
  else if (oa != null && Number.isFinite(oa)) monthly = Math.round(oa / 12);
  else if (f) monthly = amountMonthlyRupees(f);

  if (monthly == null || monthly < 0) return null;
  return monthly;
}

function buildComponentMonthlyPatches(
  fields: ExtractedSalaryField[],
  inc: Set<SalaryPdfSemanticKey>,
  overrides: {
    amountAnnual?: Partial<Record<SalaryPdfSemanticKey, number>>;
    amountMonthly?: Partial<Record<SalaryPdfSemanticKey, number>>;
  }
): Partial<Record<SalaryPdfComponentId, number>> {
  const out: Partial<Record<SalaryPdfComponentId, number>> = {};

  for (const key of inc) {
    if (DISTINCT_ALLOWANCE_KEYS.has(key) || DISTINCT_VARIABLE_KEYS.has(key)) {
      continue;
    }
    const compId = COMPONENT_MAP[key];
    if (!compId) continue;

    const monthly = resolveIncludedMonthlyRupees(fields, key, overrides);
    if (monthly == null) continue;

    const existing = out[compId];
    if (existing == null) {
      out[compId] = monthly;
    } else if (compId === "variable_pay" || compId === "special_allowance") {
      out[compId] = existing + monthly;
    }
  }
  return out;
}

function pdfDistinctAllowanceIdSuffix(): string {
  return crypto.randomUUID().replaceAll("-", "").slice(0, 10);
}

function buildDistinctParsedAllowanceComponents(
  fields: ExtractedSalaryField[],
  inc: Set<SalaryPdfSemanticKey>,
  overrides: {
    amountAnnual?: Partial<Record<SalaryPdfSemanticKey, number>>;
    amountMonthly?: Partial<Record<SalaryPdfSemanticKey, number>>;
  }
): SalaryComponent[] {
  const out: SalaryComponent[] = [];
  for (const key of DISTINCT_ALLOWANCE_KEYS) {
    if (!inc.has(key)) continue;
    const monthly = resolveIncludedMonthlyRupees(fields, key, overrides);
    if (monthly == null || monthly <= 0) continue;
    const f = fields.find((x) => x.key === key);
    const label = f?.labelMatched?.trim();
    const name =
      label && label.length > 0
        ? label
        : DEFAULT_DISTINCT_ALLOWANCE_NAME[key] ?? "Allowance";
    out.push({
      id: `pdf_allow_${key}_${pdfDistinctAllowanceIdSuffix()}`,
      name,
      description: "From your uploaded document",
      monthlyValue: monthly,
      annualValue: monthly * 12,
      type: "earning",
      group: "earnings",
      section: "allowance",
      lineSource: "parsed",
      isCustom: true,
      removable: true,
      tags: ["recurring", "tax_sensitive"],
      needsVerification: false,
    });
  }
  return out;
}

function buildDistinctParsedVariableComponents(
  fields: ExtractedSalaryField[],
  inc: Set<SalaryPdfSemanticKey>,
  overrides: {
    amountAnnual?: Partial<Record<SalaryPdfSemanticKey, number>>;
    amountMonthly?: Partial<Record<SalaryPdfSemanticKey, number>>;
  }
): SalaryComponent[] {
  const out: SalaryComponent[] = [];
  for (const key of DISTINCT_VARIABLE_KEYS) {
    if (!inc.has(key)) continue;
    const monthly = resolveIncludedMonthlyRupees(fields, key, overrides);
    if (monthly == null || monthly <= 0) continue;
    const f = fields.find((x) => x.key === key);
    const label = f?.labelMatched?.trim();
    const name =
      label && label.length > 0
        ? label
        : DEFAULT_DISTINCT_VARIABLE_NAME[key] ?? "Variable pay";
    out.push({
      id: `pdf_var_${key}_${pdfDistinctAllowanceIdSuffix()}`,
      name,
      description: "From your uploaded document",
      monthlyValue: monthly,
      annualValue: monthly * 12,
      type: "earning",
      group: "earnings",
      section: "variable_pay",
      lineSource: "parsed",
      isCustom: true,
      removable: true,
      tags: ["conditional", "one_time"],
      needsVerification: false,
    });
  }
  return out;
}

function buildManualAllowanceAndVariableComponents(
  manualAllow: SalaryPdfManualLine[],
  manualVar: SalaryPdfManualLine[]
): SalaryComponent[] {
  const extra: SalaryComponent[] = [];
  for (const row of manualAllow) {
    const name = row.name.trim() || "Custom allowance";
    const monthly = Math.max(0, Math.round(row.monthly));
    if (monthly <= 0) continue;
    extra.push({
      id: `allow_pdf_${crypto.randomUUID().replaceAll("-", "").slice(0, 12)}`,
      name,
      description: "Added from document review",
      monthlyValue: monthly,
      annualValue: monthly * 12,
      type: "earning",
      group: "earnings",
      section: "allowance",
      lineSource: "parsed",
      isCustom: true,
      removable: true,
      tags: ["recurring", "tax_sensitive"],
      needsVerification: false,
    });
  }
  for (const row of manualVar) {
    const name = row.name.trim() || "Variable / bonus";
    const monthly = Math.max(0, Math.round(row.monthly));
    if (monthly <= 0) continue;
    extra.push({
      id: `var_pdf_${crypto.randomUUID().replaceAll("-", "").slice(0, 12)}`,
      name,
      description: "Added from document review",
      monthlyValue: monthly,
      annualValue: monthly * 12,
      type: "earning",
      group: "earnings",
      section: "variable_pay",
      lineSource: "parsed",
      isCustom: true,
      removable: true,
      tags: ["conditional", "one_time"],
      needsVerification: false,
    });
  }
  return extra;
}

/**
 * Build salary input + breakdown from a reviewed parse. Keeps tax engine + recalc paths intact.
 */
export function buildSalaryStateFromPdfReview(
  parse: CompensationPdfParseResult,
  selection: SalaryPdfReviewSelection,
  defaults: { cityTier: CityTier; taxRegime: TaxRegime }
): { input: SalaryInput; breakdown: SalaryBreakdown } {
  const input = resolveSalaryInputFromPdfReview(parse, selection, defaults);

  const variableAnnual =
    input.compensationMode === "fixed_variable"
      ? Math.max(0, Math.round(input.variableAnnual ?? 0))
      : 0;

  const monthlyPatches = buildComponentMonthlyPatches(
    parse.fields,
    selection.includedKeys,
    {
      amountAnnual: selection.amountAnnualOverride,
      amountMonthly: selection.amountMonthlyOverride,
    }
  );

  let breakdown = calculateSalaryBreakdown(
    input.annualCTC,
    input.cityTier,
    input.taxRegime,
    {
      resultSource: "document_parsed",
      documentFileName: parse.fileName,
      componentsAdjusted: false,
    },
    { variableAnnual }
  );
  /** Apply document-specific rules (no illustrative meal/PF/gratuity until parsed). */
  breakdown = recalculateBreakdownFromComponents(
    breakdown.components,
    buildBreakdownRecalcContext(input)
  );

  const patchIds = Object.keys(monthlyPatches) as SalaryPdfComponentId[];
  if (patchIds.length > 0) {
    const next = breakdown.components.map((c) => {
      const m = monthlyPatches[c.id as SalaryPdfComponentId];
      if (m === undefined) return c;
      const monthly = Math.max(0, Math.round(m));
      return {
        ...c,
        monthlyValue: monthly,
        annualValue: monthly * 12,
        lineSource: "parsed" as const,
      };
    });
    breakdown = recalculateBreakdownFromComponents(
      next,
      buildBreakdownRecalcContext(input)
    );
  }

  const overridePayload = {
    amountAnnual: selection.amountAnnualOverride,
    amountMonthly: selection.amountMonthlyOverride,
  };

  const distinctFromParse = [
    ...buildDistinctParsedAllowanceComponents(
      parse.fields,
      selection.includedKeys,
      overridePayload
    ),
    ...buildDistinctParsedVariableComponents(
      parse.fields,
      selection.includedKeys,
      overridePayload
    ),
  ];

  const manualExtra = buildManualAllowanceAndVariableComponents(
    selection.manualAllowances ?? [],
    selection.manualVariableLines ?? []
  );

  const appended = [...distinctFromParse, ...manualExtra];
  if (appended.length > 0) {
    breakdown = recalculateBreakdownFromComponents(
      [...breakdown.components, ...appended],
      buildBreakdownRecalcContext(input)
    );
  }

  return { input, breakdown };
}

/** Seed review dialog CTC from parse (filename fallback keeps UX safe). */
export function suggestInitialAnnualCtc(
  parse: CompensationPdfParseResult,
  fileName: string
): number {
  const ctc = parse.fields.find((f) => f.key === "annualCTC");
  const a = ctc ? amountAnnualRupees(ctc) : null;
  if (a != null && a >= MIN_ANNUAL_CTC_RUPEES) return a;

  const lakhMatch = /(\d+(?:\.\d+)?)\s*l(?:akh)?/i.exec(fileName);
  if (lakhMatch) {
    return Math.round(Number.parseFloat(lakhMatch[1]) * 100_000);
  }
  const digitMatch = /(\d{6,9})/.exec(fileName);
  if (digitMatch) {
    return Math.min(Number.parseInt(digitMatch[1], 10), 999_999_999);
  }

  const gross = parse.fields.find((f) => f.key === "annualGross");
  const g = gross ? amountAnnualRupees(gross) : null;
  if (g != null && g >= MIN_ANNUAL_CTC_RUPEES) return g;

  return MIN_ANNUAL_CTC_RUPEES;
}
