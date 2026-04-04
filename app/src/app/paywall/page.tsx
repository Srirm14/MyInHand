import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";
import { PaywallPageShell } from "./paywall-page-shell";
import { PaywallUnlocked } from "./paywall-unlocked";

export default async function PaywallPage() {
  if (PREMIUM_UNLOCKED) {
    return <PaywallUnlocked />;
  }

  return <PaywallPageShell />;
}
