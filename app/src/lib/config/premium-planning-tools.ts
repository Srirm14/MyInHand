import type { LucideIcon } from "lucide-react";
import { Calculator, LayoutGrid, TrendingUp } from "lucide-react";

export type PlanningToolId = "wealth_forecast" | "emi_analyzer" | "monthly_planner";

export interface PremiumPlanningToolMeta {
  id: PlanningToolId;
  title: string;
  /** One-line value for cards. */
  valueStatement: string;
  /** Longer copy for upgrade sheet. */
  sheetDescription: string;
  icon: LucideIcon;
}

/**
 * Metadata-driven premium modules on the salary calculator (order = display order).
 */
export const PREMIUM_PLANNING_TOOLS: readonly PremiumPlanningToolMeta[] = [
  {
    id: "wealth_forecast",
    title: "Wealth Forecast",
    valueStatement:
      "See how your salary can turn into savings and net worth over the next few years.",
    sheetDescription:
      "Model salary growth, savings rate, and investment returns to project corpus over 5–20 years—grounded in your in-hand baseline.",
    icon: TrendingUp,
  },
  {
    id: "emi_analyzer",
    title: "EMI Analyzer",
    valueStatement:
      "Check what EMI is realistically affordable based on your actual in-hand salary.",
    sheetDescription:
      "Stress-test loan amounts and tenures against post-EMI disposable income so new debt stays within a safe band.",
    icon: Calculator,
  },
  {
    id: "monthly_planner",
    title: "Monthly Planner",
    valueStatement:
      "Turn your salary into a realistic monthly spending and savings plan.",
    sheetDescription:
      "Allocate rent, essentials, and discretionary spend with sliders—see monthly surplus or shortfall before you commit.",
    icon: LayoutGrid,
  },
] as const;
