/**
 * First-party cookies: last active salary session (local or cloud UUID) and
 * offer-comparison workspace. Cleared on sign-out; long max-age survives restarts.
 */

export const SALARY_SESSION_COOKIE_PRIMARY = "inhand_last_salary_session";
const LEGACY_SALARY_LOCAL = "inhand_active_salary_local";
const LEGACY_SALARY_CLOUD = "inhand_active_salary_cloud";
const OFFER_COOKIE = "inhand_active_offer_workspace";
const MAX_AGE_SEC = 60 * 60 * 24 * 180;

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function readRaw(name: string): string | null {
  if (typeof document === "undefined") return null;
  const prefix = `${name}=`;
  for (const part of document.cookie.split(";")) {
    const p = part.trim();
    if (p.startsWith(prefix)) {
      try {
        return decodeURIComponent(p.slice(prefix.length));
      } catch {
        return null;
      }
    }
  }
  return null;
}

function writeRaw(name: string, value: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${MAX_AGE_SEC}; SameSite=Lax`;
}

function expireRaw(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; max-age=0`;
}

/** Read unified cookie, migrating from legacy names once if needed. */
export function readSalarySessionIdFromCookie(): string | null {
  const primary = readRaw(SALARY_SESSION_COOKIE_PRIMARY);
  if (primary && primary.length > 0) return primary;
  const local = readRaw(LEGACY_SALARY_LOCAL);
  if (local && local.length > 0) {
    writeRaw(SALARY_SESSION_COOKIE_PRIMARY, local);
    expireRaw(LEGACY_SALARY_LOCAL);
    return local;
  }
  const cloud = readRaw(LEGACY_SALARY_CLOUD);
  if (cloud && cloud.length > 0) {
    writeRaw(SALARY_SESSION_COOKIE_PRIMARY, cloud);
    expireRaw(LEGACY_SALARY_CLOUD);
    return cloud;
  }
  return null;
}

export function writeSalarySessionIdCookie(id: string): void {
  writeRaw(SALARY_SESSION_COOKIE_PRIMARY, id);
  expireRaw(LEGACY_SALARY_LOCAL);
  expireRaw(LEGACY_SALARY_CLOUD);
}

export function clearSalarySessionIdCookie(): void {
  expireRaw(SALARY_SESSION_COOKIE_PRIMARY);
  expireRaw(LEGACY_SALARY_LOCAL);
  expireRaw(LEGACY_SALARY_CLOUD);
}

export function getOfferWorkspaceCookie(): string | null {
  const v = readRaw(OFFER_COOKIE);
  return v && v.length > 0 ? v : null;
}

export function setOfferWorkspaceCookie(id: string): void {
  writeRaw(OFFER_COOKIE, id);
}

export function clearOfferWorkspaceCookie(): void {
  expireRaw(OFFER_COOKIE);
}

export function clearAllWorkspaceSessionCookies(): void {
  clearSalarySessionIdCookie();
  expireRaw(OFFER_COOKIE);
}

export function isLikelyUuid(id: string): boolean {
  return UUID_RE.test(id);
}
