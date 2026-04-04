import type { Metadata } from "next";
import { MonthlyPlanView } from "@/components/features/lifestyle/monthly-plan-view";
import { redirectToSalaryUnlessPremiumEnv } from "@/lib/server/redirect-free-tier-salary-routes";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Monthly plan",
  description:
    "Plan monthly spending against estimated in-hand, see surplus or deficit, and connect to wealth tools on Pro.",
};

export default async function LifestylePage() {
  await redirectToSalaryUnlessPremiumEnv();
  return <MonthlyPlanView />;
}
