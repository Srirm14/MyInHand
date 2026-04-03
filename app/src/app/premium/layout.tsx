import { redirect } from "next/navigation";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";

export default function PremiumSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!PREMIUM_UNLOCKED) {
    redirect("/paywall?from=premium");
  }
  return children;
}
