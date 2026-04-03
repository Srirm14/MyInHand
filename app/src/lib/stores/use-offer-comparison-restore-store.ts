import { create } from "zustand";
import type { OfferDraft } from "@/lib/types/offer.types";

/**
 * One-shot restore when opening offer comparison from Recent Activity.
 */
interface RestoreState {
  pendingOffers: OfferDraft[] | null;
  queueRestore: (offers: OfferDraft[]) => void;
  takeRestore: () => OfferDraft[] | null;
}

export const useOfferComparisonRestoreStore = create<RestoreState>((set, get) => ({
  pendingOffers: null,
  queueRestore: (offers) =>
    set({ pendingOffers: offers.map((o) => ({ ...o })) }),
  takeRestore: () => {
    const p = get().pendingOffers;
    set({ pendingOffers: null });
    return p;
  },
}));
