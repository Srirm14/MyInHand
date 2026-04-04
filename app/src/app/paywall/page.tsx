import { userHasPremiumEntitlement } from "@/lib/server/premium-access";
import { PaywallPageShell } from "./paywall-page-shell";
import { PaywallUnlocked } from "./paywall-unlocked";

export default async function PaywallPage() {
  if (await userHasPremiumEntitlement()) {
    return <PaywallUnlocked />;
  }

  return <PaywallPageShell />;
}
