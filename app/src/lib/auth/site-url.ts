/**
 * Canonical site origin for auth redirects (emails, recovery links).
 * Prefer NEXT_PUBLIC_SITE_URL in all environments; fallback for local dev only.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

/** Build absolute URL for auth callbacks (client). */
export function authCallbackUrl(nextPath: string): string {
  const base = getSiteUrl();
  const path = nextPath.startsWith("/") ? nextPath : `/${nextPath}`;
  const params = new URLSearchParams();
  params.set("next", path);
  return `${base}/auth/callback?${params.toString()}`;
}
