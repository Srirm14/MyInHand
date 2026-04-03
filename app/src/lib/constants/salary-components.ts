/** Legacy reference list — live breakdown + tooltips: `salary-component-catalog.ts`, SALARY_COMPONENTS.md */
export type ComponentType = "earning" | "deduction" | "tax-free";

export interface SalaryComponentDef {
  id: string;
  name: string;
  description: string;
  type: ComponentType;
  /** True if this component is always present */
  standard: boolean;
}

export const SALARY_COMPONENTS: SalaryComponentDef[] = [
  {
    id: "basic",
    name: "Basic Salary",
    description: "Core taxable income",
    type: "earning",
    standard: true,
  },
  {
    id: "hra",
    name: "House Rent Allowance (HRA)",
    description: "50% of Basic (Metro)",
    type: "earning",
    standard: true,
  },
  {
    id: "employee_pf",
    name: "Employee PF contribution",
    description: "Employee PF deduction",
    type: "deduction",
    standard: true,
  },
  {
    id: "professional_tax",
    name: "Professional Tax",
    description: "State Government Levy",
    type: "deduction",
    standard: true,
  },
  {
    id: "income_tax",
    name: "Income Tax (TDS)",
    description: "Estimated Monthly Liability",
    type: "deduction",
    standard: true,
  },
  {
    id: "reimbursements",
    name: "Reimbursements",
    description: "Internet & Food Coupons",
    type: "tax-free",
    standard: false,
  },
  {
    id: "special_allowance",
    name: "Special Allowance",
    description: "Fully taxable allowance",
    type: "earning",
    standard: false,
  },
  {
    id: "lta",
    name: "Leave Travel Allowance",
    description: "Tax exempt under Section 10(5)",
    type: "tax-free",
    standard: false,
  },
];
