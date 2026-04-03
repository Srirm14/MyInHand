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

function lineSourceFromMeta(
  meta: SalaryBreakdownMeta | undefined
): ComponentLineSource {
  return meta?.resultSource === "document_parsed" ? "parsed" : "estimated";
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
export function aggregateBreakdownTotals(
  components: SalaryComponent[],
  annualCTC: number
): Pick<
  SalaryBreakdown,
  "monthlyInHand" | "annualIncomeTax" | "totalMonthlyDeductions" | "takeHomePercent"
> {
  let inflow = 0;
  let deductions = 0;
  let annualIncomeTax = 0;
  for (const c of components) {
    if (c.group === "deductions") {
      deductions += c.monthlyValue;
      if (c.id === "income_tax") annualIncomeTax = c.annualValue;
    } else if (c.group === "employer_contributions") {
      continue;
    } else {
      inflow += c.monthlyValue;
    }
  }
  const monthlyInHand = Math.round(inflow - deductions);
  const takeHomePercent =
    annualCTC > 0
      ? Number((((monthlyInHand * 12) / annualCTC) * 100).toFixed(1))
      : 0;
  return {
    monthlyInHand,
    annualIncomeTax,
    totalMonthlyDeductions: Math.round(deductions),
    takeHomePercent,
  };
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

  const annualFixedParts =
    annualBasic +
    annualHRA +
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
        tags: ["tax_sensitive", "recurring"],
      },
      src
    ),
    comp(
      {
        id: "special_allowance",
        name: "Special Allowance",
        description: "Residual fixed pay after illustrative CTC slices",
        monthlyValue: monthlySpecialAllowance,
        annualValue: annualSpecialAllowance,
        type: "earning",
        group: "earnings",
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
          description: "From your fixed + variable split (÷12 for display only)",
          monthlyValue: monthlyVariable,
          annualValue: variableAnnual,
          type: "earning",
          group: "earnings",
          tags: ["conditional", "one_time"],
        },
        src
      )
    );
  }

  components.push(
    comp(
      {
        id: "meal_allowance",
        name: "Meal / food allowance",
        description: "Illustrative portion of reimbursements",
        monthlyValue: monthlyMeal,
        annualValue: annualMeal,
        type: "tax-free",
        group: "earnings",
        tags: ["recurring", "tax_sensitive"],
      },
      src
    ),
    comp(
      {
        id: "telecom_reimbursement",
        name: "Telecom / internet reimbursement",
        description: "Illustrative portion of reimbursements",
        monthlyValue: monthlyTelecom,
        annualValue: annualTelecom,
        type: "tax-free",
        group: "earnings",
        tags: ["recurring", "tax_sensitive"],
      },
      src
    ),
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

  const totals = aggregateBreakdownTotals(components, annualCTC);

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
  return row?.lineSource === "user_edited";
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

/**
 * Single source of truth: component rows (with `user_edited` = manual override).
 * Re-applies formulas for non-overridden lines (basic→HRA→PF→gratuity→special residual→TDS), then aggregates.
 */
export function recalculateBreakdownFromComponents(
  prev: SalaryComponent[],
  ctx: BreakdownRecalcContext
): SalaryBreakdown {
  const tierConfig = CITY_TIERS.find((t) => t.value === ctx.cityTier)!;
  const base = ctx.baseLineSource;

  const lineSrc = (id: string): ComponentLineSource =>
    isRowOverridden(rowById(prev, id)) ? "user_edited" : base;

  // —— Basic ——
  let monthlyBasic: number;
  let annualBasic: number;
  if (isRowOverridden(rowById(prev, "basic"))) {
    monthlyBasic = monthlyOf(prev, "basic");
    annualBasic = monthlyBasic * 12;
  } else {
    annualBasic = Math.round(ctx.annualCTC * 0.4);
    monthlyBasic = Math.round(annualBasic / 12);
  }

  // —— HRA ——
  let monthlyHRA: number;
  let annualHRA: number;
  if (isRowOverridden(rowById(prev, "hra"))) {
    monthlyHRA = monthlyOf(prev, "hra");
    annualHRA = monthlyHRA * 12;
  } else {
    annualHRA = Math.round(annualBasic * tierConfig.hraPercent);
    monthlyHRA = Math.round(annualHRA / 12);
  }

  const DEF_MEAL = 3000;
  const DEF_TELE = 2000;

  let monthlyMeal: number;
  let annualMeal: number;
  if (isRowOverridden(rowById(prev, "meal_allowance"))) {
    monthlyMeal = monthlyOf(prev, "meal_allowance");
    annualMeal = monthlyMeal * 12;
  } else {
    monthlyMeal = DEF_MEAL;
    annualMeal = DEF_MEAL * 12;
  }

  let monthlyTelecom: number;
  let annualTelecom: number;
  if (isRowOverridden(rowById(prev, "telecom_reimbursement"))) {
    monthlyTelecom = monthlyOf(prev, "telecom_reimbursement");
    annualTelecom = monthlyTelecom * 12;
  } else {
    monthlyTelecom = DEF_TELE;
    annualTelecom = DEF_TELE * 12;
  }

  const variableAnnual = Math.max(0, Math.round(ctx.variableAnnual));
  let monthlyVariable = 0;
  let variableAnnualEff = variableAnnual;
  if (variableAnnual > 0) {
    if (isRowOverridden(rowById(prev, "variable_pay"))) {
      monthlyVariable = monthlyOf(prev, "variable_pay");
      variableAnnualEff = monthlyVariable * 12;
    } else {
      monthlyVariable = Math.round(variableAnnual / 12);
      variableAnnualEff = variableAnnual;
    }
  }

  const pfBase = Math.min(monthlyBasic, EPF_WAGE_CEILING);

  let monthlyPFEmployee: number;
  let annualPFEmployee: number;
  if (isRowOverridden(rowById(prev, "employee_pf"))) {
    monthlyPFEmployee = monthlyOf(prev, "employee_pf");
    annualPFEmployee = monthlyPFEmployee * 12;
  } else {
    monthlyPFEmployee = Math.round(pfBase * EPF_RATE);
    annualPFEmployee = monthlyPFEmployee * 12;
  }

  let monthlyPFEmployer: number;
  let annualPFEmployer: number;
  if (isRowOverridden(rowById(prev, "employer_pf"))) {
    monthlyPFEmployer = monthlyOf(prev, "employer_pf");
    annualPFEmployer = monthlyPFEmployer * 12;
  } else {
    monthlyPFEmployer = Math.round(pfBase * EPF_RATE);
    annualPFEmployer = monthlyPFEmployer * 12;
  }

  let annualGratuityAccrual: number;
  let monthlyGratuity: number;
  if (isRowOverridden(rowById(prev, "gratuity_accrual"))) {
    monthlyGratuity = monthlyOf(prev, "gratuity_accrual");
    annualGratuityAccrual = monthlyGratuity * 12;
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
    const annualFixedParts =
      annualBasic +
      annualHRA +
      annualMeal +
      annualTelecom +
      variableAnnualEff +
      annualPFEmployer +
      annualGratuityAccrual;
    annualSpecial = Math.max(0, ctx.annualCTC - annualFixedParts);
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
  } else {
    monthlyProfTax = PROFESSIONAL_TAX_MONTHLY;
    annualProfTax = monthlyProfTax * 12;
  }

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
        tags: copyTags(prev, "basic", ["recurring"]),
        lineSource: lineSrc("basic"),
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
        tags: copyTags(prev, "hra", ["tax_sensitive", "recurring"]),
        lineSource: lineSrc("hra"),
      },
      base
    ),
    comp(
      {
        id: "special_allowance",
        name: "Special Allowance",
        description: isRowOverridden(rowById(prev, "special_allowance"))
          ? "Your entered amount"
          : "Residual fixed pay after illustrative CTC slices",
        monthlyValue: monthlySpecial,
        annualValue: annualSpecial,
        type: "earning",
        group: "earnings",
        tags: copyTags(prev, "special_allowance", ["recurring", "tax_sensitive"]),
        lineSource: lineSrc("special_allowance"),
      },
      base
    ),
  ];

  if (variableAnnual > 0) {
    components.push(
      comp(
        {
          id: "variable_pay",
          name: "Variable pay",
          description: "From your fixed + variable split (÷12 for display only)",
          monthlyValue: monthlyVariable,
          annualValue: variableAnnualEff,
          type: "earning",
          group: "earnings",
          tags: copyTags(prev, "variable_pay", ["conditional", "one_time"]),
          lineSource: lineSrc("variable_pay"),
        },
        base
      )
    );
  }

  components.push(
    comp(
      {
        id: "meal_allowance",
        name: "Meal / food allowance",
        description: "Illustrative portion of reimbursements",
        monthlyValue: monthlyMeal,
        annualValue: annualMeal,
        type: "tax-free",
        group: "earnings",
        tags: copyTags(prev, "meal_allowance", ["recurring", "tax_sensitive"]),
        lineSource: lineSrc("meal_allowance"),
      },
      base
    ),
    comp(
      {
        id: "telecom_reimbursement",
        name: "Telecom / internet reimbursement",
        description: "Illustrative portion of reimbursements",
        monthlyValue: monthlyTelecom,
        annualValue: annualTelecom,
        type: "tax-free",
        group: "earnings",
        tags: copyTags(prev, "telecom_reimbursement", [
          "recurring",
          "tax_sensitive",
        ]),
        lineSource: lineSrc("telecom_reimbursement"),
      },
      base
    ),
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
        lineSource: lineSrc("employer_pf"),
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
        lineSource: lineSrc("gratuity_accrual"),
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
        lineSource: lineSrc("employee_pf"),
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
        lineSource: lineSrc("professional_tax"),
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
        lineSource: lineSrc("income_tax"),
      },
      base
    )
  );

  // comp() overwrites lineSource with second arg when partial omits it — we passed lineSource in partial, check comp():
  // function comp(partial, defaultSource) { return { ...partial, lineSource: partial.lineSource ?? defaultSource } }
  // Good — our lineSource is preserved.

  const totals = aggregateBreakdownTotals(components, ctx.annualCTC);

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
    components,
    meta,
  };
}
