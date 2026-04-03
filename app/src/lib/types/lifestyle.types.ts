export interface LifestyleExpenses {
  rent: number;
  food: number;
  transport: number;
  misc: number;
}

export interface SurplusResult {
  totalExpenses: number;
  netIncome: number;
  surplus: number;
  surplusPercent: number;
  isDeficit: boolean;
}
