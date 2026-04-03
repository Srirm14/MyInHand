import { CITY_TIERS, type CityTier } from "@/lib/constants/city-tiers";
import {
  EPF_RATE,
  EPF_WAGE_CEILING,
  PROFESSIONAL_TAX_MONTHLY,
} from "@/lib/constants/tax-slabs";
import type { TaxRegime, SalaryBreakdown, SalaryComponent } from "@/lib/types/salary.types";
import { calculateIncomeTax } from "./calculate-tax";

/**
 * Calculate complete salary breakdown from annual CTC.
 *
 * ASSUMPTION: Standard CTC structure:
 *   Basic = 40% of CTC
 *   HRA = city-tier-based % of Basic
 *   PF (employer) = 12% of min(Basic, 15000/month)
 *   Reimbursements = ₹5,000/month (food + internet)
 *   Special Allowance = remaining
 *
 * These assumptions match common Indian IT company structures.
 * A future version can accept custom component splits.
 */
export function calculateSalaryBreakdown(
  annualCTC: number,
  cityTier: CityTier,
  regime: TaxRegime
): SalaryBreakdown {
  const tierConfig = CITY_TIERS.find((t) => t.value === cityTier)!;

  // ── Derive components from CTC ──
  const annualBasic = Math.round(annualCTC * 0.4);
  const monthlyBasic = Math.round(annualBasic / 12);

  const annualHRA = Math.round(annualBasic * tierConfig.hraPercent);
  const monthlyHRA = Math.round(annualHRA / 12);

  // PF on min(basic, ceiling)
  const pfBase = Math.min(monthlyBasic, EPF_WAGE_CEILING);
  const monthlyPFEmployee = Math.round(pfBase * EPF_RATE);
  const monthlyPFEmployer = Math.round(pfBase * EPF_RATE);
  const annualPFEmployee = monthlyPFEmployee * 12;

  const monthlyReimbursements = 5000;
  const annualReimbursements = monthlyReimbursements * 12;

  // Special Allowance = CTC - Basic - HRA - PF(employer) - Reimbursements
  const annualSpecialAllowance =
    annualCTC - annualBasic - annualHRA - monthlyPFEmployer * 12 - annualReimbursements;
  const monthlySpecialAllowance = Math.round(annualSpecialAllowance / 12);

  // ── Gross salary (for tax purposes) = CTC - employer PF ──
  const grossAnnualSalary = annualCTC - monthlyPFEmployer * 12;

  // ── Tax calculation ──
  // Old regime: apply 80C (PF) + HRA exemption as deductions
  const oldRegimeDeductions = regime === "old" ? annualPFEmployee + 150000 : 0; // 80C cap 1.5L
  const taxResult = calculateIncomeTax(grossAnnualSalary, regime, oldRegimeDeductions);

  const monthlyTax = taxResult.monthlyTax;
  const monthlyProfTax = PROFESSIONAL_TAX_MONTHLY;

  // ── Build component list ──
  const components: SalaryComponent[] = [
    {
      id: "basic",
      name: "Basic Salary",
      description: "Core taxable income",
      monthlyValue: monthlyBasic,
      annualValue: annualBasic,
      type: "earning",
    },
    {
      id: "hra",
      name: "House Rent Allowance (HRA)",
      description: `${(tierConfig.hraPercent * 100).toFixed(0)}% of Basic (${tierConfig.sublabel})`,
      monthlyValue: monthlyHRA,
      annualValue: annualHRA,
      type: "earning",
    },
    {
      id: "special_allowance",
      name: "Special Allowance",
      description: "Fully taxable allowance",
      monthlyValue: Math.max(0, monthlySpecialAllowance),
      annualValue: Math.max(0, annualSpecialAllowance),
      type: "earning",
    },
    {
      id: "pf",
      name: "Provident Fund (PF)",
      description: "Employee Contribution",
      monthlyValue: monthlyPFEmployee,
      annualValue: annualPFEmployee,
      type: "deduction",
    },
    {
      id: "professional_tax",
      name: "Professional Tax",
      description: "State Government Levy",
      monthlyValue: monthlyProfTax,
      annualValue: monthlyProfTax * 12,
      type: "deduction",
    },
    {
      id: "income_tax",
      name: "Income Tax (TDS)",
      description: "Estimated Monthly Liability",
      monthlyValue: monthlyTax,
      annualValue: taxResult.annualTax,
      type: "deduction",
    },
    {
      id: "reimbursements",
      name: "Reimbursements",
      description: "Internet & Food Coupons",
      monthlyValue: monthlyReimbursements,
      annualValue: annualReimbursements,
      type: "tax-free",
    },
  ];

  // ── Calculate in-hand ──
  const totalMonthlyEarnings = monthlyBasic + monthlyHRA + Math.max(0, monthlySpecialAllowance) + monthlyReimbursements;
  const totalMonthlyDeductions = monthlyPFEmployee + monthlyProfTax + monthlyTax;
  const monthlyInHand = totalMonthlyEarnings - totalMonthlyDeductions;

  const takeHomePercent =
    annualCTC > 0
      ? Number(((monthlyInHand * 12 / annualCTC) * 100).toFixed(1))
      : 0;

  return {
    monthlyInHand: Math.round(monthlyInHand),
    annualIncomeTax: taxResult.annualTax,
    totalMonthlyDeductions: Math.round(totalMonthlyDeductions),
    takeHomePercent,
    components,
  };
}
