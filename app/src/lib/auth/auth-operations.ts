"use client";

import { getBrowserSupabase } from "@/lib/supabase/client/browser";
import { mapProfileToUser } from "@/lib/supabase/auth/map-user";
import { fetchProfileRow } from "@/lib/supabase/queries/profile";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { UserProfile } from "@/lib/types/user.types";
import { mapAuthError, isUnconfirmedEmailError } from "@/lib/auth/map-auth-error";
import { getSiteUrl } from "@/lib/auth/site-url";

export type LoginResult =
  | { ok: true; profile: UserProfile }
  | { ok: false; error: string; unconfirmedEmail: boolean };

export type SignupResult =
  | { ok: true; kind: "session"; profile: UserProfile }
  | { ok: true; kind: "needs_email_confirmation"; email: string }
  | { ok: false; error: string };

function authCallbackRedirect(nextPath: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const path = nextPath.startsWith("/") ? nextPath : `/${nextPath}`;
  return `${base}/auth/callback?next=${encodeURIComponent(path)}`;
}

export async function loginWithPassword(
  email: string,
  password: string
): Promise<LoginResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase is not configured.", unconfirmedEmail: false };
  }
  try {
    const supabase = getBrowserSupabase();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    if (error) {
      return {
        ok: false,
        error: mapAuthError(error),
        unconfirmedEmail: isUnconfirmedEmailError(error),
      };
    }
    if (!data.user) {
      return { ok: false, error: "No user returned.", unconfirmedEmail: false };
    }
    const row = await fetchProfileRow(supabase, data.user.id);
    return { ok: true, profile: mapProfileToUser(data.user, row) };
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e));
    return {
      ok: false,
      error: mapAuthError(err),
      unconfirmedEmail: false,
    };
  }
}

export async function signupWithPassword(
  email: string,
  password: string,
  displayName: string
): Promise<SignupResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase is not configured." };
  }
  try {
    const supabase = getBrowserSupabase();
    const emailRedirectTo = authCallbackRedirect("/salary");
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { display_name: displayName.trim() },
        emailRedirectTo,
      },
    });
    if (error) {
      return { ok: false, error: mapAuthError(error) };
    }
    const u = data.user;
    const session = data.session;
    if (u && session?.user) {
      const row = await fetchProfileRow(supabase, session.user.id);
      return {
        ok: true,
        kind: "session",
        profile: mapProfileToUser(session.user, row),
      };
    }
    if (u?.email) {
      return {
        ok: true,
        kind: "needs_email_confirmation",
        email: u.email,
      };
    }
    return {
      ok: false,
      error: "Could not create account. Try again.",
    };
  } catch (e) {
    return {
      ok: false,
      error: mapAuthError(e instanceof Error ? e : new Error(String(e))),
    };
  }
}

export async function resendSignupConfirmation(email: string): Promise<{
  ok: boolean;
  error?: string;
}> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase is not configured." };
  }
  try {
    const supabase = getBrowserSupabase();
    const emailRedirectTo = authCallbackRedirect("/salary");
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email.trim().toLowerCase(),
      options: { emailRedirectTo },
    });
    if (error) return { ok: false, error: mapAuthError(error) };
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: mapAuthError(e instanceof Error ? e : new Error(String(e))),
    };
  }
}

export async function requestPasswordReset(email: string): Promise<{
  ok: boolean;
  error?: string;
}> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase is not configured." };
  }
  try {
    const supabase = getBrowserSupabase();
    const redirectTo = authCallbackRedirect("/auth/reset-password");
    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim().toLowerCase(),
      { redirectTo }
    );
    if (error) return { ok: false, error: mapAuthError(error) };
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: mapAuthError(e instanceof Error ? e : new Error(String(e))),
    };
  }
}

export async function updatePassword(newPassword: string): Promise<{
  ok: boolean;
  error?: string;
}> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase is not configured." };
  }
  try {
    const supabase = getBrowserSupabase();
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) return { ok: false, error: mapAuthError(error) };
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: mapAuthError(e instanceof Error ? e : new Error(String(e))),
    };
  }
}
