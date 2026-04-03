/**
 * Lightweight session marker for middleware (non-HttpOnly).
 * ASSUMPTION: Production should use HttpOnly cookies + server session from your auth API.
 */
const COOKIE = "fl_session_email";

export function setSessionEmailCookie(email: string): void {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 7;
  document.cookie = `${COOKIE}=${encodeURIComponent(email)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function clearSessionCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE}=; path=/; max-age=0`;
}
