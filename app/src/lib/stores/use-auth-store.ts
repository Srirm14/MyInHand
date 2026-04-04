import { create } from "zustand";
import { getBrowserSupabase } from "@/lib/supabase/client/browser";
import { mapProfileToUser } from "@/lib/supabase/auth/map-user";
import { fetchProfileRow, updateProfileRow } from "@/lib/supabase/queries/profile";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { clearAllWorkspaceSessionCookies } from "@/lib/persistence/workspace-session-cookies";
import type { UserProfile } from "@/lib/types/user.types";

interface AuthState {
  user: UserProfile | null;
  /** True after first Supabase `getUser` / auth listener pass (or immediately if Supabase disabled). */
  authReady: boolean;
  setSessionUser: (user: UserProfile | null) => void;
  markAuthReady: () => void;
  refreshProfileFromAuthUser: () => Promise<void>;
  login: (
    email: string,
    password: string
  ) => Promise<{ ok: true } | { ok: false; error: string }>;
  signup: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<{ ok: true } | { ok: false; error: string }>;
  logout: () => Promise<void>;
  updateProfile: (
    patch: Partial<Pick<UserProfile, "displayName" | "company" | "role">>
  ) => Promise<{ ok: true } | { ok: false; error: string }>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  authReady: false,

  setSessionUser: (user) => set({ user }),

  markAuthReady: () => set({ authReady: true }),

  refreshProfileFromAuthUser: async () => {
    if (!isSupabaseConfigured()) {
      set({ user: null, authReady: true });
      return;
    }
    try {
      const supabase = getBrowserSupabase();
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();
      if (!authUser) {
        set({ user: null, authReady: true });
        return;
      }
      const row = await fetchProfileRow(supabase, authUser.id);
      set({ user: mapProfileToUser(authUser, row), authReady: true });
    } catch {
      set({ user: null, authReady: true });
    }
  },

  login: async (email, password) => {
    if (!isSupabaseConfigured()) {
      return { ok: false, error: "Supabase is not configured." };
    }
    try {
      const supabase = getBrowserSupabase();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });
      if (error) return { ok: false, error: error.message };
      if (!data.user) return { ok: false, error: "No user returned." };
      const row = await fetchProfileRow(supabase, data.user.id);
      set({ user: mapProfileToUser(data.user, row), authReady: true });
      return { ok: true };
    } catch (e) {
      return {
        ok: false,
        error: e instanceof Error ? e.message : "Sign in failed.",
      };
    }
  },

  signup: async (email, password, displayName) => {
    if (!isSupabaseConfigured()) {
      return { ok: false, error: "Supabase is not configured." };
    }
    try {
      const supabase = getBrowserSupabase();
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: { display_name: displayName.trim() },
        },
      });
      if (error) return { ok: false, error: error.message };
      if (!data.session?.user) {
        return {
          ok: false,
          error:
            "Check your email to confirm your account, then sign in.",
        };
      }
      const row = await fetchProfileRow(supabase, data.session.user.id);
      set({
        user: mapProfileToUser(data.session.user, row),
        authReady: true,
      });
      return { ok: true };
    } catch (e) {
      return {
        ok: false,
        error: e instanceof Error ? e.message : "Sign up failed.",
      };
    }
  },

  logout: async () => {
    clearAllWorkspaceSessionCookies();
    if (isSupabaseConfigured()) {
      const supabase = getBrowserSupabase();
      await supabase.auth.signOut();
    }
    set({ user: null });
  },

  updateProfile: async (patch) => {
    const u = get().user;
    if (!u) return { ok: false, error: "Not signed in." };
    if (!isSupabaseConfigured()) {
      return { ok: false, error: "Supabase is not configured." };
    }
    try {
      const supabase = getBrowserSupabase();
      const row = await updateProfileRow(supabase, u.id, {
        display_name: patch.displayName ?? u.displayName,
        company: patch.company ?? u.company,
        role: patch.role === undefined ? u.role ?? null : patch.role || null,
      });
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();
      if (!authUser) return { ok: false, error: "Session lost." };
      set({ user: mapProfileToUser(authUser, row) });
      return { ok: true };
    } catch (e) {
      return {
        ok: false,
        error: e instanceof Error ? e.message : "Update failed.",
      };
    }
  },
}));
