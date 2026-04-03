import { create } from "zustand";

interface AuthState {
  /** Client-side premium gate. No real auth yet. */
  isPremium: boolean;
  setPremium: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isPremium: false,
  setPremium: (value) => set({ isPremium: value }),
}));
