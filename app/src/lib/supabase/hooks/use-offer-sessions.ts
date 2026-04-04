"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrowserSupabase } from "@/lib/supabase/client/browser";
import { queryKeys } from "@/lib/supabase/query-keys";
import type { OfferComparisonHistoryEntry } from "@/lib/types/history.types";
import {
  createOfferSession,
  deleteOfferSession,
  getOfferSession,
  listOfferSessions,
  offerListRowToHistoryEntry,
  replaceOfferSessionContent,
  type OfferSavePayload,
  type OfferSessionDetail,
} from "@/lib/supabase/queries/offer-sessions";

const LIST_LIMIT = 40;
const LIST_STALE_MS = 5 * 60 * 1000;
const DETAIL_STALE_MS = 5 * 60 * 1000;

const calmSessionQueryOptions = {
  staleTime: LIST_STALE_MS,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
} as const;

export function useOfferSessionsListQuery(enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.offerSessions.list(LIST_LIMIT),
    queryFn: async () => {
      const sb = getBrowserSupabase();
      const rows = await listOfferSessions(sb, LIST_LIMIT);
      return rows.map(offerListRowToHistoryEntry);
    },
    enabled,
    ...calmSessionQueryOptions,
  });
}

export function useOfferSessionDetailQuery(sessionId: string | null, enabled: boolean) {
  return useQuery({
    queryKey: sessionId
      ? queryKeys.offerSessions.detail(sessionId)
      : ["offer-sessions", "detail", "none"],
    queryFn: async (): Promise<OfferSessionDetail> => {
      const sb = getBrowserSupabase();
      const d = await getOfferSession(sb, sessionId!);
      if (!d) throw new Error("Offer session not found");
      return d;
    },
    enabled: Boolean(sessionId && enabled),
    staleTime: DETAIL_STALE_MS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export function useUpsertOfferSessionMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: {
      sessionId: string | null;
      payload: OfferSavePayload;
    }): Promise<OfferSessionDetail> => {
      const sb = getBrowserSupabase();
      if (args.sessionId) {
        return replaceOfferSessionContent(sb, args.sessionId, args.payload);
      }
      return createOfferSession(sb, args.payload);
    },
    onSuccess: (detail) => {
      const listKey = queryKeys.offerSessions.list(LIST_LIMIT);
      qc.setQueryData(queryKeys.offerSessions.detail(detail.session.id), detail);
      qc.setQueryData(
        listKey,
        (prev: OfferComparisonHistoryEntry[] | undefined) => {
          const entry = offerListRowToHistoryEntry(detail.session);
          if (!prev?.length) return [entry];
          const idx = prev.findIndex((e) => e.id === detail.session.id);
          if (idx === -1) return [entry, ...prev];
          const next = prev.filter((_, i) => i !== idx);
          return [entry, ...next];
        }
      );
    },
  });
}

export function useDeleteOfferSessionMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const sb = getBrowserSupabase();
      await deleteOfferSession(sb, id);
      return id;
    },
    onSuccess: (id) => {
      qc.removeQueries({ queryKey: queryKeys.offerSessions.detail(id) });
      qc.setQueryData(
        queryKeys.offerSessions.list(LIST_LIMIT),
        (prev: OfferComparisonHistoryEntry[] | undefined) =>
          prev?.filter((e) => e.id !== id)
      );
    },
  });
}
