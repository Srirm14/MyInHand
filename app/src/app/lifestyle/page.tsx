import type { Metadata } from "next";
import { MonthlyPlanView } from "@/components/features/lifestyle/monthly-plan-view";

export const metadata: Metadata = {
  title: "Monthly plan",
  description:
    "Plan monthly spending against estimated in-hand, see surplus or deficit, and connect to wealth tools on Pro.",
};

export default function LifestylePage() {
  return <MonthlyPlanView />;
}
