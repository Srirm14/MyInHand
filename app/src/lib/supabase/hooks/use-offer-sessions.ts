"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrowserSupabase } from "@/lib/supabase/client/browser";
import { queryKeys } from "@/lib/supabase/query-keys";
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
const DETAIL_STALE_MS = 3 * 60 * 1000;

export function useOfferSessionsListQuery(enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.offerSessions.list(LIST_LIMIT),
    queryFn: async () => {
      const sb = getBrowserSupabase();
      const rows = await listOfferSessions(sb, LIST_LIMIT);
      return rows.map(offerListRowToHistoryEntry);
    },
    enabled,
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
  });
}

export function useUpsertOfferSessionMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: {
      sessionId: string | null;
      payload: OfferSavePayload;
    }) => {
      const sb = getBrowserSupabase();
      if (args.sessionId) {
        await replaceOfferSessionContent(sb, args.sessionId, args.payload);
        return args.sessionId;
      }
      const row = await createOfferSession(sb, args.payload);
      return row.id;
    },
    onSuccess: (sessionId) => {
      qc.invalidateQueries({ queryKey: queryKeys.offerSessions.root });
      qc.invalidateQueries({ queryKey: queryKeys.offerSessions.detail(sessionId) });
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
      qc.invalidateQueries({ queryKey: queryKeys.offerSessions.root });
    },
  });
}
