"use client";

import type { ReactNode } from "react";
import {
  PremiumPlannerSalaryContextSkeleton,
  WealthForecastPlannerSkeleton,
} from "@/components/shared/loading-skeletons";

export type PremiumPlannerSalaryGateLayout = "emi" | "monthly" | "wealth";

/**
 * Single place to swap planner body content for a salary-context skeleton while
 * `useResolvedMonthlyInHand().isRestoringSalaryContext` is true (auth bootstrap,
 * cookie/`?session=` restore, or detail fetch).
 */
export function PremiumPlannerSalaryGate({
  showSkeleton,
  layout,
  children,
}: {
  showSkeleton: boolean;
  layout: PremiumPlannerSalaryGateLayout;
  children: ReactNode;
}) {
  if (showSkeleton) {
    if (layout === "wealth") {
      return <WealthForecastPlannerSkeleton />;
    }
    return (
      <PremiumPlannerSalaryContextSkeleton
        layout={layout === "emi" ? "emi" : "monthly"}
      />
    );
  }
  return children;
}
