"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import {
  clearSalarySessionIdCookie,
  isLikelyUuid,
  readSalarySessionIdFromCookie,
  writeSalarySessionIdCookie,
} from "@/lib/persistence/workspace-session-cookies";
import { SALARY_PREMIUM_BREAKDOWN } from "@/lib/config/salary-premium-paths";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";

/** Match salary workspace / nav: meaningful CTC for breakdown. */
const MIN_CTC_BREAKDOWN = 100_000;

const LOCAL_SALARY_RESTORE_EXACT = new Set(["/salary", "/salary/detailed"]);

function shouldAttemptLocalSalaryRestore(pathname: string): boolean {
  if (LOCAL_SALARY_RESTORE_EXACT.has(pathname)) return true;
  if (pathname === "/salary/premium" || pathname.startsWith("/salary/premium/"))
    return true;
  return false;
}

/**
 * Persist last active salary session id (local + cloud) in a cookie; restore
 * local tier after `inhand-history` rehydrates. Cloud tier writes when active id
 * is set and does not clear the cookie when active is null (avoids races with
 * cookie restore).
 */
export function WorkspaceSessionCookiesSync() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const restoredRef = useRef(false);

  /**
   * Until auth + profile are resolved, `shouldPersistSessions(null)` is false.
   * Treating that as "local" used to run `clearSalarySessionIdCookie()` while
   * `activeSalaryHistoryId` was still null — wiping `inhand_last_salary_session`
   * before `CloudSalaryWorkspaceSync` could read it (breakdown often "worked"
   * only due to timing / `?session=`). Never clear or local-restore until we
   * know the signed-in tier.
   */
  useEffect(() => {
    if (!authReady) return;

    const cloud = shouldPersistSessions(user);
    if (cloud) {
      if (
        activeSalaryHistoryId != null &&
        isLikelyUuid(activeSalaryHistoryId)
      ) {
        writeSalarySessionIdCookie(activeSalaryHistoryId);
      }
      return;
    }

    if (user == null) return;

    if (activeSalaryHistoryId == null) {
      clearSalarySessionIdCookie();
      return;
    }
    const ok = useHistoryStore
      .getState()
      .salaryContexts.some((e) => e.id === activeSalaryHistoryId);
    if (!ok) {
      clearSalarySessionIdCookie();
      return;
    }
    writeSalarySessionIdCookie(activeSalaryHistoryId);
  }, [authReady, user, activeSalaryHistoryId]);

  useEffect(() => {
    function tryRestore() {
      if (restoredRef.current) return;
      if (!useAuthStore.getState().authReady) return;
      if (!useHistoryStore.persist.hasHydrated()) return;
      if (!shouldAttemptLocalSalaryRestore(pathname)) return;

      const u = useAuthStore.getState().user;
      if (u == null) return;
      if (shouldPersistSessions(u)) return;

      const cookieId = readSalarySessionIdFromCookie();
      if (!cookieId) return;

      const entry = useHistoryStore
        .getState()
        .salaryContexts.find((e) => e.id === cookieId);
      if (!entry) {
        clearSalarySessionIdCookie();
        return;
      }

      restoredRef.current = true;
      const store = useSalaryStore.getState();
      store.setInput(coerceSalarySnapshot(entry.snapshot));
      store.calculateBreakdown();
      store.setActiveSalaryHistoryId(cookieId);

      if (pathname === "/salary" && entry.annualCTC >= MIN_CTC_BREAKDOWN) {
        router.replace(SALARY_PREMIUM_BREAKDOWN);
      }
    }

    const unsub = useHistoryStore.persist.onFinishHydration(() => {
      tryRestore();
    });
    tryRestore();
    return unsub;
  }, [pathname, router]);

  return null;
}
