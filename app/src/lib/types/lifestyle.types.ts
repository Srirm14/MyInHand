export interface LifestyleExpenses {
  rent: number;
  food: number;
  transport: number;
  misc: number;
  /** Pro: utilities / housing running costs */
  utilities: number;
  /** Pro: shopping & discretionary */
  shopping: number;
  /** Pro: planned monthly savings */
  savings: number;
  /** Pro: planned monthly investments */
  investments: number;
}

export interface SurplusResult {
  /** Consumption: rent, food, transport, utilities, shopping, misc */
  livingExpenses: number;
  plannedSavings: number;
  plannedInvestments: number;
  /** living + savings + investments */
  totalMonthlyOutflow: number;
  /** Alias for charts that expect “expenses”; equals livingExpenses */
  totalExpenses: number;
  netIncome: number;
  surplus: number;
  surplusPercent: number;
  isDeficit: boolean;
}
