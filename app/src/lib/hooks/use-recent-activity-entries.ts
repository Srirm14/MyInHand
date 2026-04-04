"use client";

import { useMemo } from "react";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useOfferSessionsListQuery } from "@/lib/supabase/hooks/use-offer-sessions";
import { useSalarySessionsListQuery } from "@/lib/supabase/hooks/use-salary-sessions";
import type { HistoryEntry } from "@/lib/types/history.types";

const MIXED_LIMIT = 5;
const FETCH_LIMIT = 8;

/**
 * Recent activity: merged server lists when cloud persistence is on, otherwise the
 * local Zustand `entries` list (device-only).
 */
export function useRecentActivityEntries(cloud: boolean): {
  entries: HistoryEntry[];
  isLoading: boolean;
} {
  const localEntries = useHistoryStore((s) => s.entries);
  const salaryQ = useSalarySessionsListQuery(cloud);
  const offerQ = useOfferSessionsListQuery(cloud);

  const merged = useMemo((): HistoryEntry[] => {
    if (!cloud) return localEntries;

    const salaryRows = salaryQ.data ?? [];
    const offerRows = offerQ.data ?? [];
    const combined: HistoryEntry[] = [...salaryRows, ...offerRows];
    combined.sort((a, b) => b.at - a.at);
    return combined.slice(0, MIXED_LIMIT);
  }, [cloud, localEntries, salaryQ.data, offerQ.data]);

  const isLoading =
    cloud && (salaryQ.isPending || offerQ.isPending);

  return { entries: merged, isLoading };
}

export { FETCH_LIMIT };
