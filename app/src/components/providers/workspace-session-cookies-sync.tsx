"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import {
  clearLocalSalarySessionCookie,
  getLocalSalarySessionCookie,
  setLocalSalarySessionCookie,
} from "@/lib/persistence/workspace-session-cookies";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";

/** Match salary workspace / nav: meaningful CTC for breakdown. */
const MIN_CTC_BREAKDOWN = 100_000;

const SALARY_PATHS = new Set(["/salary", "/salary/breakdown", "/salary/detailed"]);

/**
 * Local tier: persist last selected salary history id in a cookie; restore after
 * reload once `inhand-history` has rehydrated. Cleared when active id is null or
 * on premium (cloud) tier.
 */
export function WorkspaceSessionCookiesSync() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const restoredRef = useRef(false);

  useEffect(() => {
    if (shouldPersistSessions(user)) {
      clearLocalSalarySessionCookie();
      return;
    }
    if (activeSalaryHistoryId == null) {
      clearLocalSalarySessionCookie();
      return;
    }
    const ok = useHistoryStore
      .getState()
      .salaryContexts.some((e) => e.id === activeSalaryHistoryId);
    if (!ok) {
      clearLocalSalarySessionCookie();
      return;
    }
    setLocalSalarySessionCookie(activeSalaryHistoryId);
  }, [user, activeSalaryHistoryId]);

  useEffect(() => {
    function tryRestore() {
      if (restoredRef.current) return;
      if (!useAuthStore.getState().authReady) return;
      if (!useHistoryStore.persist.hasHydrated()) return;
      if (!SALARY_PATHS.has(pathname)) return;

      const u = useAuthStore.getState().user;
      if (shouldPersistSessions(u)) return;

      const cookieId = getLocalSalarySessionCookie();
      if (!cookieId) return;

      const entry = useHistoryStore
        .getState()
        .salaryContexts.find((e) => e.id === cookieId);
      if (!entry) {
        clearLocalSalarySessionCookie();
        return;
      }

      restoredRef.current = true;
      const store = useSalaryStore.getState();
      store.setInput(coerceSalarySnapshot(entry.snapshot));
      store.calculateBreakdown();
      store.setActiveSalaryHistoryId(cookieId);

      if (pathname === "/salary" && entry.annualCTC >= MIN_CTC_BREAKDOWN) {
        router.replace("/salary/breakdown");
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
