import { create } from "zustand";
import { persist } from "zustand/middleware";
import { clearSessionCookie, setSessionEmailCookie } from "@/lib/auth/session-cookie";
import type { LocalAccountRecord, UserProfile } from "@/lib/types/user.types";

interface AuthState {
  /** Current session user (null when logged out). */
  user: UserProfile | null;
  /** Demo-only local account book — not for production. */
  accounts: Record<string, LocalAccountRecord>;
  login: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  signup: (
    email: string,
    password: string,
    displayName: string
  ) => { ok: true } | { ok: false; error: string };
  logout: () => void;
  updateProfile: (patch: Partial<Pick<UserProfile, "displayName" | "company" | "role">>) => void;
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accounts: {},

      login: (email, password) => {
        const key = normalizeEmail(email);
        const row = get().accounts[key];
        if (!row || row.password !== password) {
          return { ok: false, error: "Invalid email or password." };
        }
        set({ user: { ...row.profile, email: row.profile.email } });
        setSessionEmailCookie(row.profile.email);
        return { ok: true };
      },

      signup: (email, password, displayName) => {
        const key = normalizeEmail(email);
        if (get().accounts[key]) {
          return { ok: false, error: "An account with this email already exists." };
        }
        const profile: UserProfile = {
          id: crypto.randomUUID(),
          email: key,
          displayName: displayName.trim(),
          company: "",
          role: undefined,
        };
        set((s) => ({
          accounts: {
            ...s.accounts,
            [key]: { password, profile },
          },
          user: profile,
        }));
        setSessionEmailCookie(key);
        return { ok: true };
      },

      logout: () => {
        set({ user: null });
        clearSessionCookie();
      },

      updateProfile: (patch) => {
        const u = get().user;
        if (!u) return;
        const next: UserProfile = {
          ...u,
          ...patch,
          email: u.email,
          id: u.id,
        };
        const key = normalizeEmail(u.email);
        set((s) => {
          const row = s.accounts[key];
          const accounts = row
            ? {
                ...s.accounts,
                [key]: { ...row, profile: next },
              }
            : s.accounts;
          return { user: next, accounts };
        });
      },
    }),
    {
      name: "fluid-ledger-auth",
      partialize: (s) => ({ accounts: s.accounts, user: s.user }),
    }
  )
);
