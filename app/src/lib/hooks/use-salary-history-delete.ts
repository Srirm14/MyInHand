"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import {
  useDeleteSalarySessionMutation,
  useDeleteSalarySessionsMutation,
} from "@/lib/supabase/hooks/use-salary-sessions";
import { queryKeys } from "@/lib/supabase/query-keys";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { isSalaryInputEquivalent } from "@/lib/utils/salary-context-match";
import { clearSalaryBreakdownScrollSave } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import { appToast } from "@/lib/notify/app-notify";
import { salaryPremiumBreakdownHref } from "@/lib/config/salary-premium-paths";
import { clearSalarySessionIdCookie } from "@/lib/persistence/workspace-session-cookies";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";

const LIST_LIMIT = 40;

/**
 * Shared removal + active-context reconciliation for salary history (nav dropdown,
 * recent-activity sheet, /salary/history page).
 */
export function useSalaryHistoryDelete(onAfterRemove?: () => void) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const user = useAuthStore((s) => s.user);
  const cloud = shouldPersistSessions(user);
  const deleteSalarySession = useDeleteSalarySessionMutation();
  const deleteSalarySessions = useDeleteSalarySessionsMutation();

  const removeSalaryContext = useHistoryStore((s) => s.removeSalaryContext);
  const removeSalaryContexts = useHistoryStore((s) => s.removeSalaryContexts);
  const input = useSalaryStore((s) => s.input);
  const resetSalary = useSalaryStore((s) => s.reset);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );

  const reconcileAfterRemoval = useCallback(
    (wasActive: boolean, mappedOrRemaining: SalaryHistoryEntry[]) => {
      if (!wasActive) return;
      const next = mappedOrRemaining[0];
      if (next) {
        if (cloud) {
          setActiveSalaryHistoryId(next.id);
          router.push(salaryPremiumBreakdownHref(next.id));
        } else {
          setInput(coerceSalarySnapshot(next.snapshot));
          calculateBreakdown();
          setActiveSalaryHistoryId(next.id);
          router.push(salaryPremiumBreakdownHref());
        }
      } else {
        resetSalary();
        clearSalaryBreakdownScrollSave();
        clearSalarySessionIdCookie();
        setActiveSalaryHistoryId(null);
        router.push("/salary");
      }
    },
    [
      cloud,
      calculateBreakdown,
      resetSalary,
      router,
      setActiveSalaryHistoryId,
      setInput,
    ]
  );

  const applyRemove = useCallback(
    async (entry: SalaryHistoryEntry): Promise<void> => {
      const wasActive =
        entry.id === activeSalaryHistoryId ||
        (activeSalaryHistoryId == null &&
          isSalaryInputEquivalent(entry.snapshot, input));

      const finishLocal = () => {
        removeSalaryContext(entry.id);
        onAfterRemove?.();
        appToast.persistence.removedFromDevice();
        const remaining = useHistoryStore.getState().salaryContexts;
        reconcileAfterRemoval(wasActive, remaining);
      };

      if (cloud) {
        try {
          await deleteSalarySession.mutateAsync(entry.id);
          appToast.salarySession.deleted();
          const mapped =
            queryClient.getQueryData<SalaryHistoryEntry[]>(
              queryKeys.salarySessions.list(LIST_LIMIT)
            ) ?? [];
          onAfterRemove?.();
          reconcileAfterRemoval(wasActive, mapped);
        } catch {
          appToast.errors.salarySessionDeleteFailed();
        }
        return;
      }

      finishLocal();
    },
    [
      activeSalaryHistoryId,
      input,
      removeSalaryContext,
      onAfterRemove,
      reconcileAfterRemoval,
      cloud,
      deleteSalarySession,
      queryClient,
    ]
  );

  const applyRemoveMany = useCallback(
    async (entries: SalaryHistoryEntry[]): Promise<void> => {
      if (entries.length === 0) return;
      const ids = entries.map((e) => e.id);
      const idSet = new Set(ids);
      const wasActive =
        (activeSalaryHistoryId != null && idSet.has(activeSalaryHistoryId)) ||
        (activeSalaryHistoryId == null &&
          entries.some((e) => isSalaryInputEquivalent(e.snapshot, input)));

      const finishLocalMany = () => {
        removeSalaryContexts(ids);
        onAfterRemove?.();
        appToast.salarySession.bulkDeleted(ids.length);
        const remaining = useHistoryStore.getState().salaryContexts;
        reconcileAfterRemoval(wasActive, remaining);
      };

      if (cloud) {
        try {
          await deleteSalarySessions.mutateAsync(ids);
          appToast.salarySession.bulkDeleted(ids.length);
          const mapped =
            queryClient.getQueryData<SalaryHistoryEntry[]>(
              queryKeys.salarySessions.list(LIST_LIMIT)
            ) ?? [];
          onAfterRemove?.();
          reconcileAfterRemoval(wasActive, mapped);
        } catch {
          appToast.errors.salarySessionDeleteFailed();
        }
        return;
      }

      finishLocalMany();
    },
    [
      activeSalaryHistoryId,
      input,
      removeSalaryContexts,
      onAfterRemove,
      reconcileAfterRemoval,
      cloud,
      deleteSalarySessions,
      queryClient,
    ]
  );

  return { applyRemove, applyRemoveMany };
}
