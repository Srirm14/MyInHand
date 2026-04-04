"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PremiumPlansModal } from "@/components/features/pricing/premium-plans-modal";
import { usePremiumProductAccess } from "@/lib/hooks/use-premium-product-access";
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
  const hasPremium = usePremiumProductAccess();

  const fromPremium = searchParams.get("from") === "premium";

  useEffect(() => {
    if (hasPremium) return;
    if (pathname === "/paywall") {
      openPremiumPlansModal({ fromPremium });
    }
  }, [pathname, fromPremium, hasPremium]);

  useEffect(() => {
    if (hasPremium) return;
    const prev = prevPathRef.current;
    if (prev === "/paywall" && pathname !== "/paywall") {
      closePremiumPlansModal();
    }
    prevPathRef.current = pathname;
  }, [pathname, hasPremium]);

  if (hasPremium) return null;

  return <PremiumPlansModal />;
}
