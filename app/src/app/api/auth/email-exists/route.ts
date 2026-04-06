import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/client/admin";

const requestSchema = z.object({
  // Avoid `z.string().email()` to keep Sonar happy (deprecated signature in upstream typings).
  email: z
    .string()
    .trim()
    .min(3)
    .max(254)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email."),
});

/**
 * Public endpoint (no auth) used as a preflight check on login/signup.
 * Uses service-role + DB function to avoid fetching user lists.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email." },
      { status: 400 }
    );
  }

  const email = parsed.data.email.trim().toLowerCase();

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await (supabase as unknown as {
      rpc: (
        fn: string,
        args: Record<string, unknown>
      ) => Promise<{ data: unknown; error: unknown }>;
    }).rpc("inhand_email_exists", { p_email: email });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "Could not validate email. Try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, exists: Boolean(data) });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Server error.";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

