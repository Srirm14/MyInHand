"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { useSalarySessionDetailQuery } from "@/lib/supabase/hooks/use-salary-sessions";
import { applySalarySessionDetailToStores } from "@/lib/salary/apply-salary-session-detail-to-stores";
import { isSalaryPremiumBreakdownPath } from "@/lib/config/salary-premium-paths";
import {
  clearSalarySessionIdCookie,
  isLikelyUuid,
  readSalarySessionIdFromCookie,
} from "@/lib/persistence/workspace-session-cookies";

/**
 * Premium (cloud): restore active session from `?session=` or cookie, fetch
 * detail once, and hydrate Zustand on every route — not only the breakdown page.
 */
export function CloudSalaryWorkspaceSync() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);
  const persist = shouldPersistSessions(user);
  const urlSession = searchParams.get("session");

  const activeId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActive = useSalaryStore((s) => s.setActiveSalaryHistoryId);

  useEffect(() => {
    if (!persist || !authReady) return;
    if (urlSession) {
      setActive(urlSession);
      return;
    }
    const fromCookie = readSalarySessionIdFromCookie();
    if (
      fromCookie &&
      isLikelyUuid(fromCookie) &&
      useSalaryStore.getState().activeSalaryHistoryId == null
    ) {
      setActive(fromCookie);
    }
  }, [persist, authReady, urlSession, setActive]);

  const effectiveId = persist && urlSession ? urlSession : activeId;

  const { data: detail, isError } = useSalarySessionDetailQuery(
    effectiveId,
    Boolean(persist && effectiveId)
  );

  useEffect(() => {
    if (!persist || !effectiveId || !isError) return;
    setActive(null);
    clearSalarySessionIdCookie();
    if (isSalaryPremiumBreakdownPath(pathname)) {
      router.replace("/salary");
    }
  }, [persist, effectiveId, isError, setActive, router, pathname]);

  useEffect(() => {
    if (!persist || !effectiveId || !detail?.session) return;
    applySalarySessionDetailToStores(detail, effectiveId);
  }, [persist, effectiveId, detail]);

  return null;
}
