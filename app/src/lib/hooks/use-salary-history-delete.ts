"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { isSalaryInputEquivalent } from "@/lib/utils/salary-context-match";
import { clearSalaryBreakdownScrollSave } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";

/**
 * Shared removal + active-context reconciliation for salary history (nav dropdown,
 * recent-activity sheet, /salary/history page).
 */
export function useSalaryHistoryDelete(onAfterRemove?: () => void) {
  const router = useRouter();
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
    (entry: SalaryHistoryEntry) => {
      const wasActive =
        entry.id === activeSalaryHistoryId ||
        (activeSalaryHistoryId == null &&
          isSalaryInputEquivalent(entry.snapshot, input));

      removeSalaryContext(entry.id);
      onAfterRemove?.();

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
    ]
  );

  return { applyRemove };
}
