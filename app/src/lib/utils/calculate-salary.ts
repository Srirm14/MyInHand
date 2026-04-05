import { CITY_TIERS, type CityTier } from "@/lib/constants/city-tiers";
import {
  EPF_RATE,
  EPF_WAGE_CEILING,
  PROFESSIONAL_TAX_MONTHLY,
} from "@/lib/constants/tax-slabs";
import type {
  ComponentLineSource,
  SalaryBreakdown,
  SalaryBreakdownMeta,
  SalaryComponent,
  SalaryResultSource,
  TaxRegime,
} from "@/lib/types/salary.types";
import { calculateIncomeTax } from "./calculate-tax";

export interface CalculateSalaryOptions {
  /** When user specified fixed + variable split, show variable as its own earning line. */
  variableAnnual?: number;
}

/**
 * Initial breakdown rows are always "estimated" until explicitly marked parsed
 * (e.g. PDF field mapping) or user_edited. Document flow relied on "parsed" for
 * every row before, which hid what actually came from the file.
 */
function lineSourceFromMeta(_meta: SalaryBreakdownMeta | undefined): ComponentLineSource {
  return "estimated";
}

function comp(
  partial: Omit<SalaryComponent, "lineSource"> & { lineSource?: ComponentLineSource },
  defaultSource: ComponentLineSource
): SalaryComponent {
  return {
    ...partial,
    lineSource: partial.lineSource ?? defaultSource,
  };
}

/**
 * Calculate complete salary breakdown from annual CTC.
 *
 * ASSUMPTION: Illustrative private-sector-style split — not a universal payslip.
 * Basic ~40% of CTC, HRA % of basic by city tier, PF on wage ceiling,
 * gratuity accrual shown as common CTC packaging % on basic,
 * small meal + telecom reimbursements, residual special allowance.
 * Employer PF and gratuity accrual are CTC-only (not monthly cash in-hand).
 */
/** Derive all summary numbers from the component list (single source of truth). */
export function deriveBreakdownSummaries(
  components: SalaryComponent[],
  statedAnnualCTC: number
): Omit<SalaryBreakdown, "components" | "meta"> {
  let fixedMonthly = 0;
  let variableMonthly = 0;
  let fixedAnnual = 0;
  let variableAnnualSum = 0;
  let deductions = 0;
  let annualIncomeTax = 0;
  let employerAnnual = 0;
  let earningsAnnual = 0;

  for (const c of components) {
    if (c.group === "deductions") {
      deductions += c.monthlyValue;
      if (c.id === "income_tax") annualIncomeTax = c.annualValue;
      continue;
    }
    if (c.group === "employer_contributions") {
      employerAnnual += c.annualValue;
      continue;
    }
    if (c.group === "earnings" || c.type === "tax-free") {
      earningsAnnual += c.annualValue;
      if (c.section === "variable_pay") {
        variableMonthly += c.monthlyValue;
        variableAnnualSum += c.annualValue;
      } else {
        fixedMonthly += c.monthlyValue;
        fixedAnnual += c.annualValue;
      }
    }
  }

  const monthlyInHandExcludingVariable = Math.round(fixedMonthly - deductions);
  const monthlyInHandIncludingVariable = Math.round(
    fixedMonthly + variableMonthly - deductions
  );
  const modeledAnnualPackage = Math.round(earningsAnnual + employerAnnual);

  return {
    monthlyInHand: monthlyInHandExcludingVariable,
    monthlyInHandExcludingVariable,
    monthlyInHandIncludingVariable,
    annualIncomeTax,
    totalMonthlyDeductions: Math.round(deductions),
    takeHomePercent:
      statedAnnualCTC > 0
        ? Number(
            (
              ((monthlyInHandExcludingVariable * 12) / statedAnnualCTC) *
              100
            ).toFixed(1)
          )
        : 0,
    annualFixedCashTotal: fixedAnnual,
    annualVariableCashTotal: variableAnnualSum,
    annualCashCompensation: fixedAnnual + variableAnnualSum,
    modeledAnnualPackage,
    statedAnnualCTC,
  };
}

/** @deprecated Use deriveBreakdownSummaries — kept for grep compatibility */
export function aggregateBreakdownTotals(
  components: SalaryComponent[],
  annualCTC: number
) {
  return deriveBreakdownSummaries(components, annualCTC);
}

export function calculateSalaryBreakdown(
  annualCTC: number,
  cityTier: CityTier,
  regime: TaxRegime,
  metaOverrides?: Partial<SalaryBreakdownMeta>,
  options?: CalculateSalaryOptions
): SalaryBreakdown {
  const tierConfig = CITY_TIERS.find((t) => t.value === cityTier)!;
  const src = lineSourceFromMeta(metaOverrides as SalaryBreakdownMeta | undefined);
  const variableAnnual = Math.max(0, Math.round(options?.variableAnnual ?? 0));

  const annualBasic = Math.round(annualCTC * 0.4);
  const monthlyBasic = Math.round(annualBasic / 12);

  const annualHRA = Math.round(annualBasic * tierConfig.hraPercent);
  const monthlyHRA = Math.round(annualHRA / 12);

  const pfBase = Math.min(monthlyBasic, EPF_WAGE_CEILING);
  const monthlyPFEmployee = Math.round(pfBase * EPF_RATE);
  const monthlyPFEmployer = Math.round(pfBase * EPF_RATE);
  const annualPFEmployee = monthlyPFEmployee * 12;
  const annualPFEmployer = monthlyPFEmployer * 12;

  // Common CTC packaging: gratuity accrual shown as ~4.81% of annual basic (illustrative).
  const annualGratuityAccrual = Math.round(annualBasic * 0.0481);

  const monthlyMeal = 3000;
  const monthlyTelecom = 2000;
  const annualMeal = monthlyMeal * 12;
  const annualTelecom = monthlyTelecom * 12;

  const monthlyVariable =
    variableAnnual > 0 ? Math.round(variableAnnual / 12) : 0;

  const annualDA = 0;
  const monthlyDA = 0;

  const annualFixedParts =
    annualBasic +
    annualHRA +
    annualDA +
    annualMeal +
    annualTelecom +
    variableAnnual +
    annualPFEmployer +
    annualGratuityAccrual;

  const annualSpecialAllowance = Math.max(0, annualCTC - annualFixedParts);
  const monthlySpecialAllowance = Math.round(annualSpecialAllowance / 12);

  const grossAnnualSalary = Math.max(
    0,
    annualCTC - annualPFEmployer - annualGratuityAccrual
  );

  const oldRegimeDeductions =
    regime === "old" ? annualPFEmployee + 150000 : 0;
  const taxResult = calculateIncomeTax(
    grossAnnualSalary,
    regime,
    oldRegimeDeductions
  );

  const monthlyTax = taxResult.monthlyTax;
  const monthlyProfTax = PROFESSIONAL_TAX_MONTHLY;

  const components: SalaryComponent[] = [];

  components.push(
    comp(
      {
        id: "basic",
        name: "Basic Salary",
        description: "Core fixed pay — many heads are linked to this",
        monthlyValue: monthlyBasic,
        annualValue: annualBasic,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: ["recurring"],
      },
      src
    ),
    comp(
      {
        id: "hra",
        name: "House Rent Allowance (HRA)",
        description: `${(tierConfig.hraPercent * 100).toFixed(0)}% of basic (${tierConfig.sublabel})`,
        monthlyValue: monthlyHRA,
        annualValue: annualHRA,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: ["tax_sensitive", "recurring"],
      },
      src
    ),
    comp(
      {
        id: "da",
        name: "Dearness Allowance (DA)",
        description: "Common in PSU / legacy structures — 0 if not applicable",
        monthlyValue: monthlyDA,
        annualValue: annualDA,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: ["conditional", "recurring"],
      },
      src
    ),
    comp(
      {
        id: "meal_allowance",
        name: "Meal / food allowance",
        description: "Rename or remove if your employer uses a different head",
        monthlyValue: monthlyMeal,
        annualValue: annualMeal,
        type: "tax-free",
        group: "earnings",
        section: "allowance",
        removable: true,
        tags: ["recurring", "tax_sensitive"],
      },
      src
    ),
    comp(
      {
        id: "telecom_reimbursement",
        name: "Telecom / internet reimbursement",
        description: "Illustrative — edit to match your offer",
        monthlyValue: monthlyTelecom,
        annualValue: annualTelecom,
        type: "tax-free",
        group: "earnings",
        section: "allowance",
        removable: true,
        tags: ["recurring", "tax_sensitive"],
      },
      src
    ),
    comp(
      {
        id: "special_allowance",
        name: "Special Allowance",
        description: "Residual fixed pay after other CTC slices — add custom rows above as needed",
        monthlyValue: monthlySpecialAllowance,
        annualValue: annualSpecialAllowance,
        type: "earning",
        group: "earnings",
        section: "allowance",
        removable: false,
        tags: ["recurring", "tax_sensitive"],
      },
      src
    )
  );

  if (variableAnnual > 0) {
    components.push(
      comp(
        {
          id: "variable_pay",
          name: "Variable pay",
          description: "From your fixed + variable split (monthly = annual ÷ 12 for display)",
          monthlyValue: monthlyVariable,
          annualValue: variableAnnual,
          type: "earning",
          group: "earnings",
          section: "variable_pay",
          removable: false,
          tags: ["conditional", "one_time"],
        },
        src
      )
    );
  }

  components.push(
    comp(
      {
        id: "esop_estimate",
        name: "ESOPs / equity (illustrative value)",
        description:
          "Not monthly salary cash — enter an estimated grant value or remove if none",
        monthlyValue: 0,
        annualValue: 0,
        type: "earning",
        group: "earnings",
        section: "variable_pay",
        removable: true,
        tags: ["conditional", "one_time"],
      },
      src
    )
  );

  components.push(
    comp(
      {
        id: "employer_pf",
        name: "Employer PF contribution",
        description: "Company PF (CTC — not monthly cash in-hand)",
        monthlyValue: monthlyPFEmployer,
        annualValue: annualPFEmployer,
        type: "employer",
        group: "employer_contributions",
        tags: ["employer_side", "recurring"],
      },
      src
    ),
    comp(
      {
        id: "gratuity_accrual",
        name: "Gratuity (accrual in CTC)",
        description: "Long-term benefit — illustrative % on basic",
        monthlyValue: Math.round(annualGratuityAccrual / 12),
        annualValue: annualGratuityAccrual,
        type: "employer",
        group: "employer_contributions",
        tags: ["employer_side", "conditional"],
      },
      src
    ),
    comp(
      {
        id: "employee_pf",
        name: "Employee PF contribution",
        description: "Your PF deduction (eligible wages × rate, capped)",
        monthlyValue: monthlyPFEmployee,
        annualValue: annualPFEmployee,
        type: "deduction",
        group: "deductions",
        tags: ["recurring"],
      },
      src
    ),
    comp(
      {
        id: "professional_tax",
        name: "Professional Tax",
        description: "State levy (illustrative fixed amount)",
        monthlyValue: monthlyProfTax,
        annualValue: monthlyProfTax * 12,
        type: "deduction",
        group: "deductions",
        tags: ["recurring"],
      },
      src
    ),
    comp(
      {
        id: "income_tax",
        name: "Income Tax (TDS)",
        description: "Estimated from regime + modeled gross",
        monthlyValue: monthlyTax,
        annualValue: taxResult.annualTax,
        type: "deduction",
        group: "deductions",
        tags: ["conditional", "tax_sensitive"],
      },
      src
    )
  );

  const totals = deriveBreakdownSummaries(components, annualCTC);

  const meta: SalaryBreakdownMeta = {
    resultSource: metaOverrides?.resultSource ?? "manual_estimated",
    documentFileName: metaOverrides?.documentFileName,
    componentsAdjusted: metaOverrides?.componentsAdjusted ?? false,
  };

  return {
    ...totals,
    components,
    meta,
  };
}

/** Context for recomputing the full breakdown from edited + formula rows. */
export interface BreakdownRecalcContext {
  annualCTC: number;
  cityTier: CityTier;
  regime: TaxRegime;
  variableAnnual: number;
  baseLineSource: ComponentLineSource;
  salaryResultSource: SalaryResultSource;
  documentFileName?: string;
}

function rowById(prev: SalaryComponent[], id: string) {
  return prev.find((c) => c.id === id);
}

function isRowOverridden(row: SalaryComponent | undefined) {
  return (
    row?.lineSource === "user_edited" || row?.lineSource === "parsed"
  );
}

/** Preserve user_edited / parsed badges through recalculation (parsed values act as overrides). */
function outputLineSource(
  prev: SalaryComponent[],
  id: string,
  base: ComponentLineSource
): ComponentLineSource {
  const row = rowById(prev, id);
  if (row?.lineSource === "user_edited") return "user_edited";
  if (row?.lineSource === "parsed") return "parsed";
  return base;
}

function monthlyOf(prev: SalaryComponent[], id: string) {
  return Math.max(0, Math.round(rowById(prev, id)?.monthlyValue ?? 0));
}

function copyTags(
  prev: SalaryComponent[],
  id: string,
  fallback: SalaryComponent["tags"]
) {
  return rowById(prev, id)?.tags ?? fallback;
}

function hasRow(prev: SalaryComponent[], id: string) {
  return prev.some((c) => c.id === id);
}

/** Skip illustrative private-sector defaults when the user came from a PDF import. */
function documentSkipsIllustrativeDefaults(ctx: BreakdownRecalcContext): boolean {
  return ctx.salaryResultSource === "document_parsed";
}

const DOCUMENT_VERIFY_COMPONENT_IDS = new Set<string>([
  "meal_allowance",
  "telecom_reimbursement",
  "gratuity_accrual",
  "employer_pf",
  "employee_pf",
  "professional_tax",
]);

function attachDocumentVerificationHints(
  components: SalaryComponent[],
  ctx: BreakdownRecalcContext,
  prev: SalaryComponent[]
): SalaryComponent[] {
  if (ctx.salaryResultSource !== "document_parsed") {
    return components.map((c) => {
      const dismissed = rowById(prev, c.id)?.verificationDismissed === true;
      return { ...c, needsVerification: false, verificationDismissed: dismissed };
    });
  }
  return components.map((c) => {
    const dismissed = rowById(prev, c.id)?.verificationDismissed === true;
    if (!DOCUMENT_VERIFY_COMPONENT_IDS.has(c.id)) {
      return { ...c, needsVerification: false, verificationDismissed: dismissed };
    }
    const flagged =
      c.lineSource === "estimated" && c.monthlyValue === 0 && !dismissed;
    return { ...c, needsVerification: flagged, verificationDismissed: dismissed };
  });
}

function customAllowances(prev: SalaryComponent[]) {
  return prev.filter((c) => c.isCustom && c.section === "allowance");
}

function customVariableRows(prev: SalaryComponent[]) {
  return prev.filter((c) => c.isCustom && c.section === "variable_pay");
}

function cloneCustomFromPrev(
  prev: SalaryComponent[],
  row: SalaryComponent,
  base: ComponentLineSource
): SalaryComponent {
  const p = rowById(prev, row.id)!;
  const ls: ComponentLineSource =
    p.lineSource === "user_edited"
      ? "user_edited"
      : p.lineSource === "parsed"
        ? "parsed"
        : base;
  return comp({ ...p, lineSource: ls }, base);
}

/**
 * Formula rows + overrides + custom allowance/variable lines. Special allowance
 * is residual to stated CTC after other slices (incl. custom allowances).
 */
export function recalculateBreakdownFromComponents(
  prev: SalaryComponent[],
  ctx: BreakdownRecalcContext
): SalaryBreakdown {
  const tierConfig = CITY_TIERS.find((t) => t.value === ctx.cityTier)!;
  const base = ctx.baseLineSource;

  let monthlyBasic: number;
  let annualBasic: number;
  if (isRowOverridden(rowById(prev, "basic"))) {
    monthlyBasic = monthlyOf(prev, "basic");
    annualBasic = monthlyBasic * 12;
  } else {
    annualBasic = Math.round(ctx.annualCTC * 0.4);
    monthlyBasic = Math.round(annualBasic / 12);
  }

  let monthlyHRA: number;
  let annualHRA: number;
  if (isRowOverridden(rowById(prev, "hra"))) {
    monthlyHRA = monthlyOf(prev, "hra");
    annualHRA = monthlyHRA * 12;
  } else {
    annualHRA = Math.round(annualBasic * tierConfig.hraPercent);
    monthlyHRA = Math.round(annualHRA / 12);
  }

  let monthlyDA: number;
  let annualDA: number;
  if (!hasRow(prev, "da")) {
    monthlyDA = 0;
    annualDA = 0;
  } else if (isRowOverridden(rowById(prev, "da"))) {
    monthlyDA = monthlyOf(prev, "da");
    annualDA = monthlyDA * 12;
  } else {
    monthlyDA = 0;
    annualDA = 0;
  }

  const DEF_MEAL = 3000;
  const DEF_TELE = 2000;
  const docPlain = documentSkipsIllustrativeDefaults(ctx);

  let monthlyMeal = 0;
  let annualMeal = 0;
  if (hasRow(prev, "meal_allowance")) {
    if (isRowOverridden(rowById(prev, "meal_allowance"))) {
      monthlyMeal = monthlyOf(prev, "meal_allowance");
      annualMeal = monthlyMeal * 12;
    } else {
      monthlyMeal = docPlain ? 0 : DEF_MEAL;
      annualMeal = monthlyMeal * 12;
    }
  }

  let monthlyTelecom = 0;
  let annualTelecom = 0;
  if (hasRow(prev, "telecom_reimbursement")) {
    if (isRowOverridden(rowById(prev, "telecom_reimbursement"))) {
      monthlyTelecom = monthlyOf(prev, "telecom_reimbursement");
      annualTelecom = monthlyTelecom * 12;
    } else {
      monthlyTelecom = docPlain ? 0 : DEF_TELE;
      annualTelecom = monthlyTelecom * 12;
    }
  }

  const ctxVariableAnnual = Math.max(0, Math.round(ctx.variableAnnual));
  let monthlyVariable = 0;
  let variableAnnualStandard = 0;
  if (hasRow(prev, "variable_pay")) {
    if (
      ctxVariableAnnual > 0 &&
      !isRowOverridden(rowById(prev, "variable_pay"))
    ) {
      variableAnnualStandard = ctxVariableAnnual;
      monthlyVariable = Math.round(ctxVariableAnnual / 12);
    } else {
      monthlyVariable = monthlyOf(prev, "variable_pay");
      variableAnnualStandard = monthlyVariable * 12;
    }
  } else if (ctxVariableAnnual > 0) {
    variableAnnualStandard = ctxVariableAnnual;
    monthlyVariable = Math.round(ctxVariableAnnual / 12);
  }

  const allowCustoms = customAllowances(prev);
  const customAllowAnnualSum = allowCustoms.reduce(
    (s, c) => s + (rowById(prev, c.id)?.annualValue ?? 0),
    0
  );

  const varCustoms = customVariableRows(prev);
  const customVarAnnualSum = varCustoms.reduce(
    (s, c) => s + (rowById(prev, c.id)?.annualValue ?? 0),
    0
  );

  let monthlyEsop = 0;
  let annualEsop = 0;
  if (hasRow(prev, "esop_estimate")) {
    if (isRowOverridden(rowById(prev, "esop_estimate"))) {
      monthlyEsop = monthlyOf(prev, "esop_estimate");
      annualEsop = monthlyEsop * 12;
    }
  }

  const variableBlockAnnual =
    variableAnnualStandard + customVarAnnualSum + annualEsop;

  const pfBase = Math.min(monthlyBasic, EPF_WAGE_CEILING);

  let monthlyPFEmployee: number;
  let annualPFEmployee: number;
  if (isRowOverridden(rowById(prev, "employee_pf"))) {
    monthlyPFEmployee = monthlyOf(prev, "employee_pf");
    annualPFEmployee = monthlyPFEmployee * 12;
  } else if (docPlain) {
    monthlyPFEmployee = 0;
    annualPFEmployee = 0;
  } else {
    monthlyPFEmployee = Math.round(pfBase * EPF_RATE);
    annualPFEmployee = monthlyPFEmployee * 12;
  }

  let monthlyPFEmployer: number;
  let annualPFEmployer: number;
  if (isRowOverridden(rowById(prev, "employer_pf"))) {
    monthlyPFEmployer = monthlyOf(prev, "employer_pf");
    annualPFEmployer = monthlyPFEmployer * 12;
  } else if (docPlain) {
    monthlyPFEmployer = 0;
    annualPFEmployer = 0;
  } else {
    monthlyPFEmployer = Math.round(pfBase * EPF_RATE);
    annualPFEmployer = monthlyPFEmployer * 12;
  }

  let annualGratuityAccrual: number;
  let monthlyGratuity: number;
  if (isRowOverridden(rowById(prev, "gratuity_accrual"))) {
    monthlyGratuity = monthlyOf(prev, "gratuity_accrual");
    annualGratuityAccrual = monthlyGratuity * 12;
  } else if (docPlain) {
    monthlyGratuity = 0;
    annualGratuityAccrual = 0;
  } else {
    annualGratuityAccrual = Math.round(annualBasic * 0.0481);
    monthlyGratuity = Math.round(annualGratuityAccrual / 12);
  }

  let monthlySpecial: number;
  let annualSpecial: number;
  if (isRowOverridden(rowById(prev, "special_allowance"))) {
    monthlySpecial = monthlyOf(prev, "special_allowance");
    annualSpecial = monthlySpecial * 12;
  } else {
    annualSpecial = Math.max(
      0,
      ctx.annualCTC -
        annualBasic -
        annualHRA -
        annualDA -
        annualMeal -
        annualTelecom -
        customAllowAnnualSum -
        variableBlockAnnual -
        annualPFEmployer -
        annualGratuityAccrual
    );
    monthlySpecial = Math.round(annualSpecial / 12);
  }

  const grossAnnualSalary = Math.max(
    0,
    ctx.annualCTC - annualPFEmployer - annualGratuityAccrual
  );

  const oldRegimeDeductions =
    ctx.regime === "old" ? annualPFEmployee + 150000 : 0;
  const taxResult = calculateIncomeTax(
    grossAnnualSalary,
    ctx.regime,
    oldRegimeDeductions
  );

  let monthlyTax: number;
  let annualTax: number;
  if (isRowOverridden(rowById(prev, "income_tax"))) {
    monthlyTax = monthlyOf(prev, "income_tax");
    annualTax = monthlyTax * 12;
  } else {
    monthlyTax = taxResult.monthlyTax;
    annualTax = taxResult.annualTax;
  }

  let monthlyProfTax: number;
  let annualProfTax: number;
  if (isRowOverridden(rowById(prev, "professional_tax"))) {
    monthlyProfTax = monthlyOf(prev, "professional_tax");
    annualProfTax = monthlyProfTax * 12;
  } else if (docPlain) {
    monthlyProfTax = 0;
    annualProfTax = 0;
  } else {
    monthlyProfTax = PROFESSIONAL_TAX_MONTHLY;
    annualProfTax = monthlyProfTax * 12;
  }

  const daRow = rowById(prev, "da");
  const components: SalaryComponent[] = [
    comp(
      {
        id: "basic",
        name: "Basic Salary",
        description: "Core fixed pay — many heads are linked to this",
        monthlyValue: monthlyBasic,
        annualValue: annualBasic,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: copyTags(prev, "basic", ["recurring"]),
        lineSource: outputLineSource(prev, "basic", base),
      },
      base
    ),
    comp(
      {
        id: "hra",
        name: "House Rent Allowance (HRA)",
        description: `${(tierConfig.hraPercent * 100).toFixed(0)}% of basic (${tierConfig.sublabel})`,
        monthlyValue: monthlyHRA,
        annualValue: annualHRA,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: copyTags(prev, "hra", ["tax_sensitive", "recurring"]),
        lineSource: outputLineSource(prev, "hra", base),
      },
      base
    ),
    comp(
      {
        id: "da",
        name: daRow?.name ?? "Dearness Allowance (DA)",
        description:
          daRow?.description ??
          "Common in PSU / legacy structures — 0 if not applicable",
        monthlyValue: monthlyDA,
        annualValue: annualDA,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: copyTags(prev, "da", ["conditional", "recurring"]),
        lineSource: outputLineSource(prev, "da", base),
      },
      base
    ),
  ];

  if (hasRow(prev, "meal_allowance")) {
    components.push(
      comp(
        {
          id: "meal_allowance",
          name: rowById(prev, "meal_allowance")?.name ?? "Meal / food allowance",
          description:
            rowById(prev, "meal_allowance")?.description ??
            "Rename or remove if your employer uses a different head",
          monthlyValue: monthlyMeal,
          annualValue: annualMeal,
          type: "tax-free",
          group: "earnings",
          section: "allowance",
          removable: true,
          tags: copyTags(prev, "meal_allowance", ["recurring", "tax_sensitive"]),
          lineSource: outputLineSource(prev, "meal_allowance", base),
        },
        base
      )
    );
  }

  if (hasRow(prev, "telecom_reimbursement")) {
    components.push(
      comp(
        {
          id: "telecom_reimbursement",
          name:
            rowById(prev, "telecom_reimbursement")?.name ??
            "Telecom / internet reimbursement",
          description:
            rowById(prev, "telecom_reimbursement")?.description ??
            "Illustrative — edit to match your offer",
          monthlyValue: monthlyTelecom,
          annualValue: annualTelecom,
          type: "tax-free",
          group: "earnings",
          section: "allowance",
          removable: true,
          tags: copyTags(prev, "telecom_reimbursement", [
            "recurring",
            "tax_sensitive",
          ]),
          lineSource: outputLineSource(prev, "telecom_reimbursement", base),
        },
        base
      )
    );
  }

  for (const c of allowCustoms) {
    components.push(cloneCustomFromPrev(prev, c, base));
  }

  components.push(
    comp(
      {
        id: "special_allowance",
        name:
          rowById(prev, "special_allowance")?.name ?? "Special Allowance",
        description: isRowOverridden(rowById(prev, "special_allowance"))
          ? "Your entered amount"
          : "Residual after other CTC slices — add custom allowance rows above",
        monthlyValue: monthlySpecial,
        annualValue: annualSpecial,
        type: "earning",
        group: "earnings",
        section: "allowance",
        removable: false,
        tags: copyTags(prev, "special_allowance", ["recurring", "tax_sensitive"]),
        lineSource: outputLineSource(prev, "special_allowance", base),
      },
      base
    )
  );

  if (ctxVariableAnnual > 0 || hasRow(prev, "variable_pay")) {
    components.push(
      comp(
        {
          id: "variable_pay",
          name: rowById(prev, "variable_pay")?.name ?? "Variable pay",
          description:
            ctxVariableAnnual > 0
              ? "From your fixed + variable split (monthly = annual ÷ 12 for display)"
              : "Variable / performance component (edit annual or monthly)",
          monthlyValue: monthlyVariable,
          annualValue: variableAnnualStandard,
          type: "earning",
          group: "earnings",
          section: "variable_pay",
          removable: false,
          tags: copyTags(prev, "variable_pay", ["conditional", "one_time"]),
          lineSource: outputLineSource(prev, "variable_pay", base),
        },
        base
      )
    );
  }

  for (const c of varCustoms) {
    components.push(cloneCustomFromPrev(prev, c, base));
  }

  if (hasRow(prev, "esop_estimate")) {
    components.push(
      comp(
        {
          id: "esop_estimate",
          name:
            rowById(prev, "esop_estimate")?.name ??
            "ESOPs / equity (illustrative value)",
          description:
            rowById(prev, "esop_estimate")?.description ??
            "Not monthly salary cash — enter an estimated value or remove if none",
          monthlyValue: monthlyEsop,
          annualValue: annualEsop,
          type: "earning",
          group: "earnings",
          section: "variable_pay",
          removable: true,
          tags: copyTags(prev, "esop_estimate", ["conditional", "one_time"]),
          lineSource: outputLineSource(prev, "esop_estimate", base),
        },
        base
      )
    );
  }

  components.push(
    comp(
      {
        id: "employer_pf",
        name: "Employer PF contribution",
        description: "Company PF (CTC — not monthly cash in-hand)",
        monthlyValue: monthlyPFEmployer,
        annualValue: annualPFEmployer,
        type: "employer",
        group: "employer_contributions",
        tags: copyTags(prev, "employer_pf", ["employer_side", "recurring"]),
        lineSource: outputLineSource(prev, "employer_pf", base),
      },
      base
    ),
    comp(
      {
        id: "gratuity_accrual",
        name: "Gratuity (accrual in CTC)",
        description: "Long-term benefit — illustrative % on basic",
        monthlyValue: monthlyGratuity,
        annualValue: annualGratuityAccrual,
        type: "employer",
        group: "employer_contributions",
        tags: copyTags(prev, "gratuity_accrual", ["employer_side", "conditional"]),
        lineSource: outputLineSource(prev, "gratuity_accrual", base),
      },
      base
    ),
    comp(
      {
        id: "employee_pf",
        name: "Employee PF contribution",
        description: "Your PF deduction (eligible wages × rate, capped)",
        monthlyValue: monthlyPFEmployee,
        annualValue: annualPFEmployee,
        type: "deduction",
        group: "deductions",
        tags: copyTags(prev, "employee_pf", ["recurring"]),
        lineSource: outputLineSource(prev, "employee_pf", base),
      },
      base
    ),
    comp(
      {
        id: "professional_tax",
        name: "Professional Tax",
        description: "State levy (illustrative fixed amount)",
        monthlyValue: monthlyProfTax,
        annualValue: annualProfTax,
        type: "deduction",
        group: "deductions",
        tags: copyTags(prev, "professional_tax", ["recurring"]),
        lineSource: outputLineSource(prev, "professional_tax", base),
      },
      base
    ),
    comp(
      {
        id: "income_tax",
        name: "Income Tax (TDS)",
        description: isRowOverridden(rowById(prev, "income_tax"))
          ? "Your entered monthly TDS"
          : "Estimated from regime + modeled gross",
        monthlyValue: monthlyTax,
        annualValue: annualTax,
        type: "deduction",
        group: "deductions",
        tags: copyTags(prev, "income_tax", ["conditional", "tax_sensitive"]),
        lineSource: outputLineSource(prev, "income_tax", base),
      },
      base
    )
  );

  const componentsWithHints = attachDocumentVerificationHints(components, ctx, prev);
  const totals = deriveBreakdownSummaries(componentsWithHints, ctx.annualCTC);

  const editBasis =
    ctx.salaryResultSource === "document_parsed"
      ? ("user_edited_after_parse" as const)
      : ("user_edited_after_estimate" as const);

  const meta: SalaryBreakdownMeta = {
    resultSource: ctx.salaryResultSource,
    documentFileName: ctx.documentFileName,
    componentsAdjusted: true,
    breakdownEditBasis: editBasis,
  };

  return {
    ...totals,
    components: componentsWithHints,
    meta,
  };
}
