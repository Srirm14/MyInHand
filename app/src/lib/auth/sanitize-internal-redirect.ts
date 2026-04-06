/**
 * Internal-only post-auth redirects (`?from=` on login/signup, middleware).
 *
 * **Premium purchase funnel (intended flow):**
 * 1. Logged out → links use `buildLoginUrlWithReturn("/paywall?tool=…")` or tiered `toolHref` → `/login?from=…`
 * 2. After sign-in, middleware and login/signup pages send the user to the sanitized `from` URL
 * 3. `/paywall` is only reachable signed-in (middleware); anonymous users are bounced to step 1
 *
 * Same validation rules as `middleware.ts` for `from`. Allows path + query; rejects open redirects.
 */
export function sanitizeInternalAuthRedirect(
  raw: string | null | undefined
): string | null {
  if (raw == null || raw === "") return null;
  const trimmed = raw.trim();
  if (!trimmed.startsWith("/") || trimmed.startsWith("//")) return null;
  if (trimmed.includes("://")) return null;
  const pathPart = trimmed.split("?")[0] ?? "";
  if (!pathPart || pathPart.includes("..")) return null;
  if (trimmed.length > 2048) return null;
  return trimmed;
}

/**
 * Builds `/login?from=<encoded safe path>`. Use for any CTA that must require login before paywall/checkout.
 * If `returnPath` fails validation, falls back to `/paywall`.
 */
export function buildLoginUrlWithReturn(returnPath: string): string {
  const safe = sanitizeInternalAuthRedirect(returnPath) ?? "/paywall";
  return `/login?from=${encodeURIComponent(safe)}`;
}
