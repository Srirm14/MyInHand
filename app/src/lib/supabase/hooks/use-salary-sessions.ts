"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrowserSupabase } from "@/lib/supabase/client/browser";
import { queryKeys } from "@/lib/supabase/query-keys";
import {
  createSalarySession,
  deleteSalarySession,
  getSalarySession,
  listSalarySessions,
  salaryRowToHistoryEntry,
  touchSalarySessionOpened,
  updateSalarySession,
  upsertSalarySessionPlanning,
  type SalarySessionDetail,
} from "@/lib/supabase/queries/salary-sessions";
import type { Database } from "@/lib/supabase/database.types";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";

type SalarySessionRow = Database["public"]["Tables"]["salary_sessions"]["Row"];

const LIST_LIMIT = 40;
const DETAIL_STALE_MS = 3 * 60 * 1000;

export function useSalarySessionsListQuery(enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.salarySessions.list(LIST_LIMIT),
    queryFn: async () => {
      const sb = getBrowserSupabase();
      const rows = await listSalarySessions(sb, LIST_LIMIT);
      return rows.map(salaryRowToHistoryEntry);
    },
    enabled,
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
      return createSalarySession(sb, args.input, args.breakdown, args.planning);
    },
    onSuccess: (row: SalarySessionRow) => {
      qc.invalidateQueries({ queryKey: queryKeys.salarySessions.root });
      qc.setQueryData(queryKeys.salarySessions.detail(row.id), {
        session: row,
        planning: null,
      } satisfies SalarySessionDetail);
    },
  });
}

export function useUpdateSalarySessionMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: {
      id: string;
      input: SalaryInput;
      breakdown: SalaryBreakdown;
    }): Promise<SalarySessionRow> => {
      const sb = getBrowserSupabase();
      return updateSalarySession(sb, args.id, args.input, args.breakdown);
    },
    onSuccess: (row: SalarySessionRow) => {
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
      qc.invalidateQueries({ queryKey: queryKeys.salarySessions.root });
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
