import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database, Json } from "@/lib/supabase/database.types";

type SalarySessionUpdate = Database["public"]["Tables"]["salary_sessions"]["Update"];
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";

export type SalarySessionDetail = {
  session: Database["public"]["Tables"]["salary_sessions"]["Row"];
  planning: Database["public"]["Tables"]["salary_session_planning"]["Row"] | null;
};

export function salaryRowToHistoryEntry(
  row: Database["public"]["Tables"]["salary_sessions"]["Row"]
): SalaryHistoryEntry {
  const input = row.input_json as unknown as SalaryInput;
  return {
    kind: "salary",
    id: row.id,
    at: new Date(row.updated_at).getTime(),
    title: row.title,
    annualCTC: row.annual_ctc,
    monthlyInHand: row.monthly_in_hand,
    regimeLabel: row.regime_label,
    snapshot: input,
    resultSource:
      (row.result_source as SalaryHistoryEntry["resultSource"]) ?? undefined,
  };
}

function deriveTitle(input: SalaryInput): string {
  return (
    input.fullName?.trim() ||
    `₹${(input.annualCTC / 100_000).toFixed(1)}L CTC`
  );
}

export async function listSalarySessions(
  supabase: SupabaseClient<Database>,
  limit = 40
) {
  const { data, error } = await supabase
    .from("salary_sessions")
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data ?? [];
}

export async function getSalarySession(
  supabase: SupabaseClient<Database>,
  id: string
): Promise<SalarySessionDetail | null> {
  const { data: session, error: sErr } = await supabase
    .from("salary_sessions")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (sErr) throw sErr;
  if (!session) return null;

  const { data: planning, error: pErr } = await supabase
    .from("salary_session_planning")
    .select("*")
    .eq("salary_session_id", id)
    .maybeSingle();
  if (pErr) throw pErr;

  return { session, planning };
}

export async function createSalarySession(
  supabase: SupabaseClient<Database>,
  input: SalaryInput,
  breakdown: SalaryBreakdown,
  planning?: {
    lifestyle?: LifestyleExpenses | null;
    emi?: unknown;
    wealth?: unknown;
  }
): Promise<Database["public"]["Tables"]["salary_sessions"]["Row"]> {
  const title = deriveTitle(input);
  const { data: session, error: sErr } = await supabase
    .from("salary_sessions")
    .insert({
      title,
      annual_ctc: input.annualCTC,
      monthly_in_hand: breakdown.monthlyInHand,
      regime_label: input.taxRegime === "old" ? "Old regime" : "New regime",
      result_source: input.resultSource ?? null,
      input_json: input as unknown as Database["public"]["Tables"]["salary_sessions"]["Row"]["input_json"],
      breakdown_json:
        breakdown as unknown as Database["public"]["Tables"]["salary_sessions"]["Row"]["breakdown_json"],
      last_opened_at: new Date().toISOString(),
    })
    .select("*")
    .single();
  if (sErr) throw sErr;

  const hasPlanning =
    planning &&
    (planning.lifestyle != null || planning.emi != null || planning.wealth != null);
  if (hasPlanning) {
    const { error: pErr } = await supabase.from("salary_session_planning").insert({
      salary_session_id: session.id,
      lifestyle_json: (planning?.lifestyle ?? null) as Json | null,
      emi_json: (planning?.emi ?? null) as Json | null,
      wealth_json: (planning?.wealth ?? null) as Json | null,
    });
    if (pErr) throw pErr;
  }

  return session;
}

/** Shapes a PATCH body with only columns that changed vs baseline. */
export function diffSalarySessionRow(
  baselineInput: SalaryInput,
  baselineBreakdown: SalaryBreakdown,
  input: SalaryInput,
  breakdown: SalaryBreakdown
): SalarySessionUpdate | null {
  const inputChanged =
    JSON.stringify(baselineInput) !== JSON.stringify(input);
  const breakdownChanged =
    JSON.stringify(baselineBreakdown) !== JSON.stringify(breakdown);
  if (!inputChanged && !breakdownChanged) return null;

  const patch: SalarySessionUpdate = {};
  if (inputChanged) {
    patch.title = deriveTitle(input);
    patch.annual_ctc = input.annualCTC;
    patch.regime_label = input.taxRegime === "old" ? "Old regime" : "New regime";
    patch.result_source = input.resultSource ?? null;
    patch.input_json =
      input as unknown as Database["public"]["Tables"]["salary_sessions"]["Row"]["input_json"];
  }
  if (breakdownChanged) {
    patch.breakdown_json =
      breakdown as unknown as Database["public"]["Tables"]["salary_sessions"]["Row"]["breakdown_json"];
  }
  if (inputChanged || breakdownChanged) {
    patch.monthly_in_hand = breakdown.monthlyInHand;
  }
  return patch;
}

export async function patchSalarySession(
  supabase: SupabaseClient<Database>,
  id: string,
  patch: SalarySessionUpdate
): Promise<Database["public"]["Tables"]["salary_sessions"]["Row"]> {
  const { data, error } = await supabase
    .from("salary_sessions")
    .update(patch)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw error;
  return data;
}

export async function updateSalarySession(
  supabase: SupabaseClient<Database>,
  id: string,
  input: SalaryInput,
  breakdown: SalaryBreakdown
): Promise<Database["public"]["Tables"]["salary_sessions"]["Row"]> {
  const title = deriveTitle(input);
  const { data, error } = await supabase
    .from("salary_sessions")
    .update({
      title,
      annual_ctc: input.annualCTC,
      monthly_in_hand: breakdown.monthlyInHand,
      regime_label: input.taxRegime === "old" ? "Old regime" : "New regime",
      result_source: input.resultSource ?? null,
      input_json: input as unknown as Database["public"]["Tables"]["salary_sessions"]["Row"]["input_json"],
      breakdown_json:
        breakdown as unknown as Database["public"]["Tables"]["salary_sessions"]["Row"]["breakdown_json"],
    })
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw error;
  return data;
}

export async function touchSalarySessionOpened(
  supabase: SupabaseClient<Database>,
  id: string
) {
  await supabase
    .from("salary_sessions")
    .update({ last_opened_at: new Date().toISOString() })
    .eq("id", id);
}

export async function deleteSalarySession(
  supabase: SupabaseClient<Database>,
  id: string
) {
  const { error } = await supabase.from("salary_sessions").delete().eq("id", id);
  if (error) throw error;
}

/** Deletes many sessions in one request. Planning rows cascade (ON DELETE CASCADE). */
export async function deleteSalarySessions(
  supabase: SupabaseClient<Database>,
  ids: string[]
) {
  if (ids.length === 0) return;
  const { error } = await supabase.from("salary_sessions").delete().in("id", ids);
  if (error) throw error;
}

export async function upsertSalarySessionPlanning(
  supabase: SupabaseClient<Database>,
  salarySessionId: string,
  patch: {
    lifestyle_json?: Database["public"]["Tables"]["salary_session_planning"]["Row"]["lifestyle_json"];
    emi_json?: Database["public"]["Tables"]["salary_session_planning"]["Row"]["emi_json"];
    wealth_json?: Database["public"]["Tables"]["salary_session_planning"]["Row"]["wealth_json"];
  }
) {
  const { error } = await supabase.from("salary_session_planning").upsert(
    {
      salary_session_id: salarySessionId,
      ...patch,
    },
    { onConflict: "salary_session_id" }
  );
  if (error) throw error;
}
