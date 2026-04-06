"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { RazorpayUpgradeFlow } from "@/components/features/billing/razorpay-upgrade-flow";
import { useAuthStore } from "@/lib/stores/use-auth-store";

export default function BillingUpgradePage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);

  useEffect(() => {
    if (!authReady) return;
    if (!user) router.replace("/login?from=/billing/upgrade");
  }, [authReady, user, router]);

  return (
    <PageShell className="py-8 md:py-10">
      <SectionHeader
        title="Upgrade to Premium"
        subtitle="Unlock deeper insights: detailed breakdowns, offer comparisons, wealth outlook, EMI checks, and monthly planning—tied to the same salary context you already trust."
      />

      <div className="mt-8">
        <RazorpayUpgradeFlow />
      </div>
    </PageShell>
  );
}

