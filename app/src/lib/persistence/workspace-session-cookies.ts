/**
 * First-party cookies for last active local salary row and offer-comparison workspace.
 * Cleared on sign-out; long max-age survives browser restarts until then.
 */

const SALARY_COOKIE = "inhand_active_salary_local";
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

export function getLocalSalarySessionCookie(): string | null {
  const v = readRaw(SALARY_COOKIE);
  return v && v.length > 0 ? v : null;
}

export function setLocalSalarySessionCookie(id: string): void {
  writeRaw(SALARY_COOKIE, id);
}

export function clearLocalSalarySessionCookie(): void {
  expireRaw(SALARY_COOKIE);
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
  expireRaw(SALARY_COOKIE);
  expireRaw(OFFER_COOKIE);
}

export function isLikelyUuid(id: string): boolean {
  return UUID_RE.test(id);
}
