import { Suspense } from "react";
import { redirect } from "next/navigation";
import { PremiumSalaryWorkflowSwitcher } from "@/components/shared/premium-salary-workflow-switcher";
import { userHasPremiumEntitlement } from "@/lib/server/premium-access";

export default async function SalaryPremiumSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await userHasPremiumEntitlement())) {
    redirect("/paywall?from=premium");
  }
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <PremiumSalaryWorkflowSwitcher />
      </Suspense>
    </>
  );
}
