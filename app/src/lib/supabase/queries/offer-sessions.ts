import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import type { OfferComparisonHistoryEntry } from "@/lib/types/history.types";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { SalaryBreakdown } from "@/lib/types/salary.types";

export type OfferSessionDetail = {
  session: Database["public"]["Tables"]["offer_sessions"]["Row"];
  offers: Database["public"]["Tables"]["offer_session_offers"]["Row"][];
};

export function offerListRowToHistoryEntry(
  row: Database["public"]["Tables"]["offer_sessions"]["Row"]
): OfferComparisonHistoryEntry {
  return {
    kind: "offer_comparison",
    id: row.id,
    at: new Date(row.updated_at).getTime(),
    title: row.title,
    offerCount: row.offer_count,
    winnerSummary: row.winner_summary,
    offersSnapshot: [],
    hydrateFromServer: true,
  };
}

export async function listOfferSessions(
  supabase: SupabaseClient<Database>,
  limit = 40
) {
  const { data, error } = await supabase
    .from("offer_sessions")
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data ?? [];
}

export async function getOfferSession(
  supabase: SupabaseClient<Database>,
  id: string
): Promise<OfferSessionDetail | null> {
  const { data: session, error: sErr } = await supabase
    .from("offer_sessions")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (sErr) throw sErr;
  if (!session) return null;

  const { data: offers, error: oErr } = await supabase
    .from("offer_session_offers")
    .select("*")
    .eq("offer_session_id", id)
    .order("sort_order", { ascending: true });
  if (oErr) throw oErr;

  return { session, offers: offers ?? [] };
}

export type OfferSavePayload = {
  offers: OfferDraft[];
  /** Edited breakdowns keyed by offer id; persisted only when inputKey matches current draft fingerprint. */
  breakdownEdits: Record<string, { breakdown: SalaryBreakdown; inputKey: string } | undefined>;
  summary: {
    title: string;
    offerCount: number;
    winnerSummary: string;
  };
};

function buildChildRows(
  sessionId: string,
  payload: OfferSavePayload
): Database["public"]["Tables"]["offer_session_offers"]["Insert"][] {
  return payload.offers.map((draft, index) => {
    const currentKey = makeOfferInputKeyFromDraft(draft);
    const ed = payload.breakdownEdits[draft.id];
    const useOverride = ed && ed.inputKey === currentKey;

    return {
      offer_session_id: sessionId,
      sort_order: index,
      draft_json: draft as unknown as Database["public"]["Tables"]["offer_session_offers"]["Row"]["draft_json"],
      breakdown_override_json:
        useOverride && ed
          ? (ed.breakdown as unknown as Database["public"]["Tables"]["offer_session_offers"]["Row"]["breakdown_override_json"])
          : null,
    };
  });
}

export async function createOfferSession(
  supabase: SupabaseClient<Database>,
  payload: OfferSavePayload
): Promise<OfferSessionDetail> {
  const { data: session, error: sErr } = await supabase
    .from("offer_sessions")
    .insert({
      title: payload.summary.title,
      offer_count: payload.summary.offerCount,
      winner_summary: payload.summary.winnerSummary,
    })
    .select("*")
    .single();
  if (sErr) throw sErr;

  const children = buildChildRows(session.id, payload);
  let offers: Database["public"]["Tables"]["offer_session_offers"]["Row"][] = [];
  if (children.length) {
    const { data, error: cErr } = await supabase
      .from("offer_session_offers")
      .insert(children)
      .select("*");
    if (cErr) throw cErr;
    offers = data ?? [];
  }

  return { session, offers };
}

export async function replaceOfferSessionContent(
  supabase: SupabaseClient<Database>,
  sessionId: string,
  payload: OfferSavePayload
): Promise<OfferSessionDetail> {
  const { data: session, error: uErr } = await supabase
    .from("offer_sessions")
    .update({
      title: payload.summary.title,
      offer_count: payload.summary.offerCount,
      winner_summary: payload.summary.winnerSummary,
    })
    .eq("id", sessionId)
    .select("*")
    .single();
  if (uErr) throw uErr;

  const { error: dErr } = await supabase
    .from("offer_session_offers")
    .delete()
    .eq("offer_session_id", sessionId);
  if (dErr) throw dErr;

  const children = buildChildRows(sessionId, payload);
  let offers: Database["public"]["Tables"]["offer_session_offers"]["Row"][] = [];
  if (children.length) {
    const { data, error: cErr } = await supabase
      .from("offer_session_offers")
      .insert(children)
      .select("*");
    if (cErr) throw cErr;
    offers = data ?? [];
  }

  return { session, offers };
}

export async function deleteOfferSession(
  supabase: SupabaseClient<Database>,
  id: string
) {
  const { error } = await supabase.from("offer_sessions").delete().eq("id", id);
  if (error) throw error;
}

/** Map stored rows back to client state for OfferComparisonView */
export function hydrateOfferComparisonFromDetail(detail: OfferSessionDetail): {
  offers: OfferDraft[];
  breakdownEdits: Record<string, { breakdown: SalaryBreakdown; inputKey: string }>;
} {
  const breakdownEdits: Record<
    string,
    { breakdown: SalaryBreakdown; inputKey: string }
  > = {};
  const offers: OfferDraft[] = detail.offers.map((row) => {
    const draft = row.draft_json as unknown as OfferDraft;
    if (row.breakdown_override_json) {
      const bd = row.breakdown_override_json as unknown as SalaryBreakdown;
      const inputKey = makeOfferInputKeyFromDraft(draft);
      breakdownEdits[draft.id] = { breakdown: bd, inputKey };
    }
    return draft;
  });
  return { offers, breakdownEdits };
}

function makeOfferInputKeyFromDraft(o: OfferDraft): string {
  return [
    o.annualCTC,
    o.cityTier,
    o.taxRegime,
    o.compensationMode,
    o.fixedAnnual ?? 0,
    o.variableAnnual ?? 0,
    o.documentFileName ?? "",
  ].join("|");
}
