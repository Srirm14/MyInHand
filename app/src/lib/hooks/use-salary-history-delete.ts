"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { useDeleteSalarySessionMutation } from "@/lib/supabase/hooks/use-salary-sessions";
import { queryKeys } from "@/lib/supabase/query-keys";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { isSalaryInputEquivalent } from "@/lib/utils/salary-context-match";
import { clearSalaryBreakdownScrollSave } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import { appToast } from "@/lib/notify/app-notify";
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

  const removeSalaryContext = useHistoryStore((s) => s.removeSalaryContext);
  const input = useSalaryStore((s) => s.input);
  const resetSalary = useSalaryStore((s) => s.reset);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
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
        if (wasActive) {
          const next = remaining[0];
          if (next) {
            setInput(coerceSalarySnapshot(next.snapshot));
            calculateBreakdown();
            setActiveSalaryHistoryId(next.id);
            router.push("/salary/breakdown");
          } else {
            resetSalary();
            clearSalaryBreakdownScrollSave();
            router.push("/salary");
          }
        }
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
          if (wasActive) {
            const next = mapped[0];
            if (next) {
              setActiveSalaryHistoryId(next.id);
              router.push(
                "/salary/breakdown?session=" + encodeURIComponent(next.id)
              );
            } else {
              resetSalary();
              clearSalaryBreakdownScrollSave();
              setActiveSalaryHistoryId(null);
              router.push("/salary");
            }
          }
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
      setInput,
      calculateBreakdown,
      setActiveSalaryHistoryId,
      resetSalary,
      router,
      cloud,
      deleteSalarySession,
      queryClient,
    ]
  );

  return { applyRemove };
}
