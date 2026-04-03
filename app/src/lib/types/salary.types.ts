import type { CityTier } from "@/lib/constants/city-tiers";

export type TaxRegime = "old" | "new";

export interface SalaryInput {
  fullName?: string;
  email?: string;
  annualCTC: number;
  cityTier: CityTier;
  taxRegime: TaxRegime;
}

export interface SalaryComponent {
  id: string;
  name: string;
  description: string;
  monthlyValue: number;
  annualValue: number;
  type: "earning" | "deduction" | "tax-free";
}

export interface SalaryBreakdown {
  monthlyInHand: number;
  annualIncomeTax: number;
  totalMonthlyDeductions: number;
  takeHomePercent: number;
  components: SalaryComponent[];
}
