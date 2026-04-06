"use client";

import { buildLoginUrlWithReturn } from "@/lib/auth/sanitize-internal-redirect";
import {
  openPremiumPlansModal,
  type OpenPremiumPlansModalOptions,
} from "@/lib/stores/use-premium-plans-modal-store";

/**
 * Single entry for “upgrade / compare plans” buttons: **not signed in** → `router.push` to login with
 * return to `/paywall` (or `/paywall?from=premium`); **signed in** → open the global Premium plans modal.
 * Do not call `openPremiumPlansModal()` directly from CTAs unless the UI already guarantees a session.
 */
export function requestPremiumPurchase(
  router: { push: (href: string) => void },
  opts: { loggedIn: boolean } & OpenPremiumPlansModalOptions
): void {
  const { loggedIn, ...modalOpts } = opts;
  if (!loggedIn) {
    const returnPath = modalOpts.fromPremium
      ? "/paywall?from=premium"
      : "/paywall";
    router.push(buildLoginUrlWithReturn(returnPath));
    return;
  }
  openPremiumPlansModal(modalOpts);
}
