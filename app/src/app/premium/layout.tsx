import { redirect } from "next/navigation";
import { userHasPremiumEntitlement } from "@/lib/server/premium-access";

export default async function PremiumSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await userHasPremiumEntitlement())) {
    redirect("/paywall?from=premium");
  }
  return children;
}
