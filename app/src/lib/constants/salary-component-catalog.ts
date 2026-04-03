/**
 * Tooltip copy for salary breakdown rows (by component `id`).
 * See SALARY_COMPONENTS.md at repo root for IA and badge rules.
 */

export interface SalaryComponentTooltipCopy {
  summary: string;
  classification: string;
  cashImpact: string;
  calculationNote?: string;
  applicability: string;
}

export const SALARY_COMPONENT_TOOLTIPS: Record<string, SalaryComponentTooltipCopy> = {
  basic: {
    summary:
      "The fixed core of your salary. Many allowances, PF bases, and benefits are linked to basic (or basic + DA) as per company policy.",
    classification: "Recurring earning — typically taxable.",
    cashImpact:
      "Usually paid monthly and included in monthly gross that flows toward in-hand after deductions.",
    calculationNote:
      "Here: basic is modeled as ~40% of CTC for illustration. Your offer may use a different split.",
    applicability: "Nearly all salaried structures include a basic; the percentage varies widely.",
  },
  da: {
    summary:
      "Dearness Allowance — a cost-of-living adjustment common in government and some legacy private pay structures.",
    classification: "Recurring earning — taxable; often merged with basic for PF wage definitions where applicable.",
    cashImpact: "Paid as cash with salary when applicable.",
    calculationNote: "Not modeled in your current estimate unless your employer uses DA.",
    applicability: "Uncommon in many modern private IT packages; more typical in PSU / government-style pay.",
  },
  hra: {
    summary:
      "House Rent Allowance — a rent-related component. Tax treatment (especially in the old regime) can depend on rent paid, city, and salary structure.",
    classification: "Recurring earning — tax-sensitive.",
    cashImpact: "Typically paid monthly as part of gross salary.",
    calculationNote:
      "Shown as a % of basic by city tier here. Exemption rules are not fully simulated — this is not tax filing advice.",
    applicability: "Very common in Indian CTCs; amount and rules vary by employer.",
  },
  special_allowance: {
    summary:
      "A flexible bucket employers use for balance of fixed pay after core heads. Usually fully taxable unless specifically exempt by rules.",
    classification: "Recurring earning — typically taxable.",
    cashImpact: "Paid monthly as cash (unless labeled otherwise in your offer).",
    calculationNote:
      "Here: special allowance is the residual after illustrative basic, HRA, reimbursements, variable (if any), employer PF, and gratuity accrual are backed out of CTC.",
    applicability: "Very common; naming differs (flexi pay, other allowance, etc.).",
  },
  lta: {
    summary:
      "Leave Travel Allowance / Concession — may help cover travel costs under specific tax rules when conditions are met.",
    classification: "Often recurring in offer; actual tax benefit is conditional on claims and limits.",
    cashImpact: "May be paid as allowance or reimbursed against bills — employer-dependent.",
    applicability: "Common in many packages; not everyone claims or receives it the same way.",
  },
  conveyance: {
    summary: "Allowance for travel between home and work (or similar). Rules and tax treatment vary.",
    classification: "Recurring earning or reimbursement — employer-specific.",
    cashImpact: "Usually cash or reimbursement when offered.",
    applicability: "Less universal than HRA; many employers fold this into special allowance.",
  },
  medical: {
    summary: "Medical allowance or reimbursed medical expenses — structure and tax treatment depend on policy and limits.",
    classification: "Recurring or reimbursement — conditional.",
    cashImpact: "Cash or reimbursement per company policy.",
    applicability: "Optional; often replaced by group insurance or flexible benefits.",
  },
  meal_allowance: {
    summary:
      "Meal / food allowance or coupons. Small tax exemptions can apply under specific limits and formats — not individually modeled here.",
    classification: "Typically recurring; tax-sensitive in real life.",
    cashImpact: "Treated as part of monthly cash inflow in this estimate.",
    calculationNote:
      "Illustrative split from a generic reimbursements bucket — not your employer’s exact policy.",
    applicability: "Common in some form (coupons, cards, or allowance).",
  },
  telecom_reimbursement: {
    summary: "Telephone or internet reimbursement for work-related connectivity.",
    classification: "Often reimbursement; tax treatment depends on proof and employer policy.",
    cashImpact: "Treated as monthly inflow in this illustration.",
    calculationNote: "Illustrative portion of a generic reimbursements assumption.",
    applicability: "Optional; amounts and proof rules vary.",
  },
  books_periodicals: {
    summary: "Reimbursement for books, journals, or learning material where employers offer it.",
    classification: "Reimbursement — conditional.",
    cashImpact: "Usually reimbursement, not a fixed monthly salary line.",
    applicability: "Uncommon as a separate line for everyone.",
  },
  bonus: {
    summary: "Statutory or contractual bonus (e.g. annual bonus) separate from monthly fixed pay.",
    classification: "Often one-time or periodic — not always monthly.",
    cashImpact: "Improves cash in the payout month/year; may not be in every month’s salary.",
    applicability: "Very employer-specific; not included unless modeled from your inputs.",
  },
  performance_bonus: {
    summary: "Variable bonus tied to performance or company results.",
    classification: "Conditional / one-time or periodic.",
    cashImpact: "Paid when declared — not guaranteed monthly cash.",
    applicability: "Common in many roles; amounts vary.",
  },
  variable_pay: {
    summary:
      "Performance bonus, variable CTC slice, retention, or other pay that is conditional or lumpy — not the same as guaranteed monthly salary.",
    classification: "Variable / conditional earning.",
    cashImpact:
      "Excluded from “monthly in-hand (excluding variable pay)” here; included in annual package and “incl. variable” views. When tied to your fixed + variable split, monthly is ÷12 for display only.",
    calculationNote:
      "If you entered a fixed + variable split on the salary page, this line reflects that slice. Real payout timing differs by employer.",
    applicability: "Naming and payout timing differ widely by employer.",
  },
  joining_bonus: {
    summary: "One-time payment on joining, usually separate from regular salary.",
    classification: "One-time payout — taxable in the year received (broadly).",
    cashImpact: "Not part of regular monthly in-hand unless your employer spreads it (rare).",
    applicability: "Offer-specific; omit if you didn’t receive one.",
  },
  retention_bonus: {
    summary: "Bonus paid if you stay until a milestone date.",
    classification: "One-time / conditional.",
    cashImpact: "Cash only if conditions are met.",
    applicability: "Not universal.",
  },
  shift_allowance: {
    summary: "Extra pay for shift-based work (night shift, rotational shifts, etc.).",
    classification: "Recurring when applicable.",
    cashImpact: "Cash with payroll when applicable.",
    applicability: "Role-specific.",
  },
  overtime: {
    summary: "Pay for hours beyond normal working time per company policy and law where applicable.",
    classification: "Variable earning.",
    cashImpact: "Cash in the month earned.",
    applicability: "Not all roles have overtime pay.",
  },
  esop_rsu: {
    summary: "Equity compensation (ESOP, RSU, SARs). Value is not the same as monthly salary cash.",
    classification: "Deferred / equity — vesting and tax are complex.",
    cashImpact: "Not monthly cash unless sold after vest; liquidity and tax differ from salary.",
    applicability: "Only for offers that include equity; valuation is uncertain until liquidity events.",
  },
  employer_pf: {
    summary:
      "The employer’s contribution to provident fund (and related pension components under statutory design). This is part of CTC but not paid to you as monthly take-home cash.",
    classification: "Employer contribution — statutory (where PF applies).",
    cashImpact:
      "Increases your CTC and long-term retirement benefits; does not increase monthly bank salary like basic pay.",
    calculationNote:
      "Modeled on statutory wage ceiling assumptions; employer PF and EPS split details vary — confirm on your payslip.",
    applicability: "Most formal employees have PF; some structures differ (contractors, etc.).",
  },
  employer_eps: {
    summary:
      "Employer share that may flow to pension (EPS) under EPFO rules for eligible members — often discussed together with employer PF.",
    classification: "Employer statutory / retirement benefit.",
    cashImpact: "CTC and retirement benefit — not monthly cash in hand.",
    applicability: "Relevant when PF applies; presentation on payslips varies.",
  },
  gratuity_accrual: {
    summary:
      "A long-term statutory benefit payable on exit after qualifying service. Employers often show an accrual or provision in CTC — it is not monthly take-home.",
    classification: "Employer-side / statutory — accrual in CTC.",
    cashImpact:
      "Part of package value and future benefit; not paid each month as salary cash.",
    calculationNote:
      "Shown as an illustrative accrual % on basic for CTC packaging — not your exact gratuity math or eligibility date.",
    applicability: "Common in full-time Indian employment after eligibility; accrual presentation differs by company.",
  },
  esi_employer: {
    summary: "Employer contribution to ESI where applicable (typically below wage thresholds).",
    classification: "Employer contribution — conditional on eligibility.",
    cashImpact: "CTC / statutory — not cash in hand.",
    applicability: "Only for employees under applicable ESI wage limits; many higher CTC roles are outside ESI.",
  },
  group_insurance: {
    summary: "Group health or life cover premium often borne by the employer as part of benefits.",
    classification: "Employer benefit — may appear in CTC.",
    cashImpact: "Usually not salary cash; value is protection, not bank credit.",
    applicability: "Common but amounts and labeling vary.",
  },
  employee_pf: {
    summary:
      "Your (employee) PF deduction — typically a percentage of eligible wages subject to a statutory ceiling.",
    classification: "Deduction toward retirement savings.",
    cashImpact: "Reduces monthly in-hand but builds your PF balance.",
    calculationNote:
      "Estimated using common ceiling-based rules; eligible wages can include basic + DA + retaining allowance per policy.",
    applicability: "Standard for PF-covered employees.",
  },
  pf: {
    summary:
      "Your (employee) PF deduction — typically a percentage of eligible wages subject to a statutory ceiling.",
    classification: "Deduction toward retirement savings.",
    cashImpact: "Reduces monthly in-hand but builds your PF balance.",
    calculationNote: "Same as employee PF — legacy id.",
    applicability: "Standard for PF-covered employees.",
  },
  professional_tax: {
    summary: "State-level professional tax deducted from salary where applicable.",
    classification: "Statutory deduction.",
    cashImpact: "Reduces monthly in-hand by a small fixed amount (state rules vary).",
    calculationNote: "Illustrative fixed monthly amount — confirm your state slab.",
    applicability: "Varies by state and salary slab.",
  },
  income_tax: {
    summary:
      "Income tax deducted at source (TDS) — an estimate based on your regime and modeled gross; actual TDS depends on declarations, proofs, and payroll.",
    classification: "Statutory deduction — tax.",
    cashImpact: "Reduces monthly in-hand.",
    calculationNote:
      "Simplified tax engine — not a substitute for Form 16, CA advice, or employer payroll.",
    applicability: "Most salaried employees have TDS unless exempt under specific thresholds.",
  },
  esi_employee: {
    summary: "Employee contribution to ESI when applicable.",
    classification: "Statutory deduction — conditional.",
    cashImpact: "Reduces in-hand when applicable.",
    applicability: "Only under ESI wage eligibility.",
  },
  labor_welfare_fund: {
    summary: "Small statutory or state labour welfare deductions where applicable.",
    classification: "Statutory deduction — conditional.",
    cashImpact: "Minor reduction to in-hand when deducted.",
    applicability: "State / employer specific; not universal.",
  },
  other_recovery: {
    summary: "Any other deduction or recovery (loans, advances, notice period adjustments, etc.).",
    classification: "Deduction — employer-specific.",
    cashImpact: "Reduces in-hand when applied.",
    applicability: "Only when your employer applies specific recoveries.",
  },
  reimbursements: {
    summary: "Combined tax-free or reimbursable components (e.g. meal, internet) as modeled in a single line.",
    classification: "Recurring — tax treatment varies in practice.",
    cashImpact: "Treated as monthly inflow in this estimate.",
    applicability: "Legacy combined row if present in older breakdowns.",
  },
};

const CUSTOM_ALLOWANCE_TOOLTIP: SalaryComponentTooltipCopy = {
  summary:
    "An allowance line you added to mirror your employer’s structure (e.g. vehicle, washing, telephone). Rename and set amounts to match your letter or payslip.",
  classification: "Recurring earning — typically taxable unless specifically exempt under rules.",
  cashImpact: "Included in fixed monthly cash before deductions in this model.",
  applicability: "Fully user-defined — confirm tax treatment with your employer or advisor.",
};

const CUSTOM_VARIABLE_TOOLTIP: SalaryComponentTooltipCopy = {
  summary:
    "A variable or annual line you added (e.g. joining bonus, profit incentive). Use it when your package doesn’t fit the default rows.",
  classification: "Variable / conditional earning.",
  cashImpact:
    "Counted in variable-pay totals and annual package views; not in monthly in-hand excluding variable.",
  applicability: "Fully user-defined — payout rules are employer-specific.",
};

export function getSalaryComponentTooltip(
  id: string
): SalaryComponentTooltipCopy | null {
  const known =
    SALARY_COMPONENT_TOOLTIPS[id as keyof typeof SALARY_COMPONENT_TOOLTIPS];
  if (known) return known;
  if (id.startsWith("allow_")) return CUSTOM_ALLOWANCE_TOOLTIP;
  if (id.startsWith("var_")) return CUSTOM_VARIABLE_TOOLTIP;
  return null;
}
