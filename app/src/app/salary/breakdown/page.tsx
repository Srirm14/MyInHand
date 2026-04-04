import { Suspense } from "react";
import { SalaryBreakdownView } from "@/components/features/salary/salary-breakdown-view";
import { SalaryBreakdownSkeleton } from "@/components/shared/loading-skeletons";
import { redirectToSalaryUnlessPremiumEnv } from "@/lib/server/redirect-free-tier-salary-routes";

export const dynamic = "force-dynamic";

export default async function SalaryBreakdownPage() {
  await redirectToSalaryUnlessPremiumEnv();
  return (
    <Suspense fallback={<SalaryBreakdownSkeleton />}>
      <SalaryBreakdownView />
    </Suspense>
  );
}
