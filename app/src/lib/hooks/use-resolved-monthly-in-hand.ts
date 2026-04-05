"use client";

import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import {
  isLikelyUuid,
  readSalarySessionIdFromCookie,
} from "@/lib/persistence/workspace-session-cookies";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { useSalarySessionDetailQuery } from "@/lib/supabase/hooks/use-salary-sessions";

/**
 * Single display path for “in-hand” on premium planners: Zustand breakdown wins when set;
 * otherwise fall back to `salary_sessions.monthly_in_hand` from the active session query
 * so reload does not flash ₹0 while `breakdown_json` hydrates.
 */
export function useResolvedMonthlyInHand(): {
  monthlyInHand: number;
  /** Cloud user has an active session id but detail not yet merged into Zustand. */
  isHydratingCloudSalary: boolean;
  /**
   * True while auth is not ready, cookie / URL session is restoring into Zustand, or detail
   * is loading before in-hand is known — use planner skeletons instead of empty CTAs.
   */
  isRestoringSalaryContext: boolean;
} {
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);
  const persist = shouldPersistSessions(user);
  const searchParams = useSearchParams();
  const urlSession = searchParams.get("session");

  const breakdownInHand = useSalaryStore((s) => s.breakdown?.monthlyInHand ?? 0);
  const activeId = useSalaryStore((s) => s.activeSalaryHistoryId);

  const queryEnabled = Boolean(persist && activeId);
  const { data: detail, isPending, isFetching, isError } =
    useSalarySessionDetailQuery(activeId, queryEnabled);

  const serverRow =
    detail?.session?.id === activeId ? detail.session : undefined;
  const serverInHand = serverRow?.monthly_in_hand ?? 0;

  const monthlyInHand =
    breakdownInHand > 0 ? breakdownInHand : Math.max(0, serverInHand);

  const isHydratingCloudSalary =
    persist &&
    Boolean(activeId) &&
    breakdownInHand <= 0 &&
    serverInHand <= 0 &&
    !isError &&
    (isPending || isFetching);

  const waitingForActiveId =
    persist &&
    authReady &&
    activeId == null &&
    (Boolean(readSalarySessionIdFromCookie()) ||
      (urlSession != null &&
        urlSession.length > 0 &&
        isLikelyUuid(urlSession)));

  const isRestoringSalaryContext =
    !authReady || waitingForActiveId || isHydratingCloudSalary;

  return { monthlyInHand, isHydratingCloudSalary, isRestoringSalaryContext };
}
