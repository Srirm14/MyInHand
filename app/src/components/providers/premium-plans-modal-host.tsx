"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PremiumPlansModal } from "@/components/features/pricing/premium-plans-modal";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";
import {
  closePremiumPlansModal,
  openPremiumPlansModal,
} from "@/lib/stores/use-premium-plans-modal-store";

/**
 * Mounts the global Premium plans modal and syncs `/paywall` → open,
 * and closes when navigating away from `/paywall` (in-app opens stay until dismissed).
 */
export function PremiumPlansModalHost() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathRef = useRef(pathname);

  const fromPremium = searchParams.get("from") === "premium";

  useEffect(() => {
    if (PREMIUM_UNLOCKED) return;
    if (pathname === "/paywall") {
      openPremiumPlansModal({ fromPremium });
    }
  }, [pathname, fromPremium]);

  useEffect(() => {
    if (PREMIUM_UNLOCKED) return;
    const prev = prevPathRef.current;
    if (prev === "/paywall" && pathname !== "/paywall") {
      closePremiumPlansModal();
    }
    prevPathRef.current = pathname;
  }, [pathname]);

  if (PREMIUM_UNLOCKED) return null;

  return <PremiumPlansModal />;
}
