"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrowserSupabase } from "@/lib/supabase/client/browser";
import { queryKeys } from "@/lib/supabase/query-keys";
import {
  createSalarySession,
  deleteSalarySession,
  deleteSalarySessions,
  diffSalarySessionRow,
  getSalarySession,
  listSalarySessions,
  patchSalarySession,
  salaryRowToHistoryEntry,
  touchSalarySessionOpened,
  upsertSalarySessionPlanning,
  type SalarySessionDetail,
} from "@/lib/supabase/queries/salary-sessions";
import type { Database } from "@/lib/supabase/database.types";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { mergeSalaryInputWithProfile } from "@/lib/utils/salary-input-profile";

type SalarySessionRow = Database["public"]["Tables"]["salary_sessions"]["Row"];

const LIST_LIMIT = 40;
const LIST_STALE_MS = 5 * 60 * 1000;
const DETAIL_STALE_MS = 5 * 60 * 1000;

const calmSessionQueryOptions = {
  staleTime: LIST_STALE_MS,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
} as const;

export function useSalarySessionsListQuery(enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.salarySessions.list(LIST_LIMIT),
    queryFn: async () => {
      const sb = getBrowserSupabase();
      const rows = await listSalarySessions(sb, LIST_LIMIT);
      return rows.map(salaryRowToHistoryEntry);
    },
    enabled,
    ...calmSessionQueryOptions,
  });
}

export function useSalarySessionDetailQuery(sessionId: string | null, enabled: boolean) {
  return useQuery({
    queryKey: sessionId
      ? queryKeys.salarySessions.detail(sessionId)
      : ["salary-sessions", "detail", "none"],
    queryFn: async (): Promise<SalarySessionDetail> => {
      const sb = getBrowserSupabase();
      const d = await getSalarySession(sb, sessionId!);
      if (!d) throw new Error("Salary session not found");
      return d;
    },
    enabled: Boolean(sessionId && enabled),
    staleTime: DETAIL_STALE_MS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export function useCreateSalarySessionMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: {
      input: SalaryInput;
      breakdown: SalaryBreakdown;
      planning?: {
        lifestyle?: LifestyleExpenses | null;
        emi?: unknown;
        wealth?: unknown;
      };
    }): Promise<SalarySessionRow> => {
      const sb = getBrowserSupabase();
      const input = mergeSalaryInputWithProfile(
        args.input,
        useAuthStore.getState().user
      );
      return createSalarySession(sb, input, args.breakdown, args.planning);
    },
    onSuccess: (row: SalarySessionRow) => {
      const detail = {
        session: row,
        planning: null,
      } satisfies SalarySessionDetail;
      qc.setQueryData(queryKeys.salarySessions.detail(row.id), detail);
      qc.setQueryData(
        queryKeys.salarySessions.list(LIST_LIMIT),
        (prev: SalaryHistoryEntry[] | undefined) => {
          const entry = salaryRowToHistoryEntry(row);
          if (!prev?.length) return [entry];
          const without = prev.filter((e) => e.id !== row.id);
          return [entry, ...without];
        }
      );
    },
  });
}

export type SalarySessionUpdateResult = {
  row: SalarySessionRow;
  /** False when diff was empty and the row came from cache/fetch (no PATCH). */
  didWrite: boolean;
};

export function useUpdateSalarySessionMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: {
      id: string;
      input: SalaryInput;
      breakdown: SalaryBreakdown;
      baselineInput: SalaryInput;
      baselineBreakdown: SalaryBreakdown;
    }): Promise<SalarySessionUpdateResult> => {
      const sb = getBrowserSupabase();
      const user = useAuthStore.getState().user;
      const input = mergeSalaryInputWithProfile(args.input, user);
      const baselineInput = mergeSalaryInputWithProfile(
        args.baselineInput,
        user
      );
      const patch = diffSalarySessionRow(
        baselineInput,
        args.baselineBreakdown,
        input,
        args.breakdown
      );
      if (!patch) {
        const cached = qc.getQueryData<SalarySessionDetail>(
          queryKeys.salarySessions.detail(args.id)
        );
        if (cached?.session) {
          return { row: cached.session, didWrite: false };
        }
        const d = await getSalarySession(sb, args.id);
        if (!d?.session) throw new Error("Salary session not found");
        return { row: d.session, didWrite: false };
      }
      const row = await patchSalarySession(sb, args.id, patch);
      return { row, didWrite: true };
    },
    onSuccess: ({ row }) => {
      qc.setQueryData(queryKeys.salarySessions.detail(row.id), (prev) => {
        if (!prev) {
          return { session: row, planning: null } satisfies SalarySessionDetail;
        }
        return { ...prev, session: row };
      });
      qc.setQueryData(
        queryKeys.salarySessions.list(LIST_LIMIT),
        (prev: SalaryHistoryEntry[] | undefined) => {
          if (!prev?.length) return prev;
          const entry = salaryRowToHistoryEntry(row);
          const idx = prev.findIndex((e) => e.id === row.id);
          if (idx === -1) return prev;
          const next = [...prev];
          next[idx] = entry;
          return next;
        }
      );
    },
  });
}

export function useDeleteSalarySessionMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const sb = getBrowserSupabase();
      await deleteSalarySession(sb, id);
      return id;
    },
    onSuccess: (id) => {
      qc.removeQueries({ queryKey: queryKeys.salarySessions.detail(id) });
      qc.setQueryData(
        queryKeys.salarySessions.list(LIST_LIMIT),
        (prev: SalaryHistoryEntry[] | undefined) => prev?.filter((e) => e.id !== id)
      );
    },
  });
}

export function useDeleteSalarySessionsMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (ids: string[]) => {
      if (ids.length === 0) return [];
      const sb = getBrowserSupabase();
      await deleteSalarySessions(sb, ids);
      return ids;
    },
    onSuccess: (ids) => {
      const idSet = new Set(ids);
      for (const id of ids) {
        qc.removeQueries({ queryKey: queryKeys.salarySessions.detail(id) });
      }
      qc.setQueryData(
        queryKeys.salarySessions.list(LIST_LIMIT),
        (prev: SalaryHistoryEntry[] | undefined) =>
          prev?.filter((e) => !idSet.has(e.id))
      );
    },
  });
}

export function useTouchSalarySessionMutation() {
  return useMutation({
    mutationFn: async (id: string) => {
      const sb = getBrowserSupabase();
      await touchSalarySessionOpened(sb, id);
    },
  });
}

export function useUpsertSalaryPlanningMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: {
      salarySessionId: string;
      lifestyle: import("@/lib/types/lifestyle.types").LifestyleExpenses;
    }) => {
      const sb = getBrowserSupabase();
      await upsertSalarySessionPlanning(sb, args.salarySessionId, {
        lifestyle_json: args.lifestyle as unknown as Database["public"]["Tables"]["salary_session_planning"]["Row"]["lifestyle_json"],
      });
    },
    onSuccess: (_void, args) => {
      const lj =
        args.lifestyle as unknown as Database["public"]["Tables"]["salary_session_planning"]["Row"]["lifestyle_json"];
      const now = new Date().toISOString();
      qc.setQueryData(
        queryKeys.salarySessions.detail(args.salarySessionId),
        (prev: SalarySessionDetail | undefined): SalarySessionDetail | undefined => {
          if (!prev) return prev;
          if (prev.planning) {
            return {
              ...prev,
              planning: { ...prev.planning, lifestyle_json: lj, updated_at: now },
            };
          }
          return {
            ...prev,
            planning: {
              salary_session_id: args.salarySessionId,
              lifestyle_json: lj,
              emi_json: null,
              wealth_json: null,
              updated_at: now,
            },
          };
        }
      );
    },
  });
}
