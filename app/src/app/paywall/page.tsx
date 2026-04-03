import { PREMIUM_UNLOCKED, type PaywallTool } from "@/lib/config/access-mode";
import { PaywallLocked } from "./paywall-locked";
import { PaywallUnlocked } from "./paywall-unlocked";

const TOOLS: PaywallTool[] = ["offers", "forecast", "emi"];

function parseTool(raw: string | undefined): PaywallTool {
  if (raw && TOOLS.includes(raw as PaywallTool)) return raw as PaywallTool;
  return "offers";
}

export default async function PaywallPage({
  searchParams,
}: {
  searchParams: Promise<{ tool?: string; from?: string }>;
}) {
  const sp = await searchParams;

  if (PREMIUM_UNLOCKED) {
    return <PaywallUnlocked />;
  }

  return (
    <PaywallLocked
      tool={parseTool(sp.tool)}
      fromPremium={sp.from === "premium"}
    />
  );
}
