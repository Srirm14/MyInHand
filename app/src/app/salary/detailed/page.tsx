import { CtcInputForm } from "@/components/features/salary/ctc-input-form";
import { redirectToSalaryUnlessPremiumEnv } from "@/lib/server/redirect-free-tier-salary-routes";

export const dynamic = "force-dynamic";

export default async function SalaryDetailedInputPage() {
  await redirectToSalaryUnlessPremiumEnv();
  return <CtcInputForm />;
}
