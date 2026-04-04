import { create } from "zustand";

export interface OpenPremiumPlansModalOptions {
  /** True when user hit a Premium-only route or deep link. */
  fromPremium?: boolean;
}

interface PremiumPlansModalState {
  isOpen: boolean;
  fromPremium: boolean;
  openPremiumPlansModal: (opts?: OpenPremiumPlansModalOptions) => void;
  closePremiumPlansModal: () => void;
}

/**
 * Global Premium plans modal (pricing + CTAs). Open from any screen via
 * `usePremiumPlansModalStore.getState().openPremiumPlansModal()` or the hook.
 */
export const usePremiumPlansModalStore = create<PremiumPlansModalState>((set) => ({
  isOpen: false,
  fromPremium: false,
  openPremiumPlansModal: (opts) =>
    set({
      isOpen: true,
      fromPremium: Boolean(opts?.fromPremium),
    }),
  closePremiumPlansModal: () =>
    set({
      isOpen: false,
      fromPremium: false,
    }),
}));

/** Imperative open (usable outside React). */
export function openPremiumPlansModal(opts?: OpenPremiumPlansModalOptions): void {
  usePremiumPlansModalStore.getState().openPremiumPlansModal(opts);
}

export function closePremiumPlansModal(): void {
  usePremiumPlansModalStore.getState().closePremiumPlansModal();
}
