import type { AuthError } from "@supabase/supabase-js";

const UNCONFIRMED_HINT =
  /email not confirmed|confirm your email|not confirmed/i;

/**
 * Maps Supabase Auth errors to stable, user-facing English strings.
 */
export function mapAuthError(error: AuthError | Error | null | undefined): string {
  if (!error) return "Something went wrong. Try again.";
  const msg = "message" in error && typeof error.message === "string" ? error.message : String(error);

  if (UNCONFIRMED_HINT.test(msg)) {
    return "Confirm your email before signing in. Check your inbox for the link we sent.";
  }
  if (/invalid login credentials|invalid credentials/i.test(msg)) {
    return "Invalid email or password.";
  }
  if (/user already registered|already been registered|already exists/i.test(msg)) {
    return "An account with this email already exists. Sign in instead.";
  }
  if (/password/i.test(msg) && /weak|short|least/i.test(msg)) {
    return "Password does not meet requirements. Use at least 8 characters.";
  }
  if (/rate limit|too many requests|email rate limit/i.test(msg)) {
    return "Too many attempts. Wait a minute and try again.";
  }
  if (/session|expired|invalid.*token/i.test(msg)) {
    return "This link expired or is invalid. Request a new one from the sign-in page.";
  }

  return msg.length > 200 ? `${msg.slice(0, 197)}…` : msg;
}

export function isUnconfirmedEmailError(error: AuthError | Error | null | undefined): boolean {
  if (!error || !("message" in error)) return false;
  const msg = typeof error.message === "string" ? error.message : "";
  return UNCONFIRMED_HINT.test(msg);
}
