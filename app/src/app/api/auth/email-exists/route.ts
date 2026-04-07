import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/client/admin";

type RateLimitState = { count: number; resetAt: number };
const rl = new Map<string, RateLimitState>();
const RL_WINDOW_MS = 60_000;
const RL_MAX = 25;

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimitKey(req: Request, email: string): string {
  // Protect both per-IP and per-email; do not log email.
  return `${clientIp(req)}|${email}`;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const prev = rl.get(key);
  if (!prev || prev.resetAt <= now) {
    rl.set(key, { count: 1, resetAt: now + RL_WINDOW_MS });
    return true;
  }
  if (prev.count >= RL_MAX) return false;
  prev.count += 1;
  return true;
}

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

  if (!checkRateLimit(rateLimitKey(req, email))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again in a minute." },
      { status: 429 }
    );
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await (supabase as unknown as {
      rpc: (
        fn: string,
        args: Record<string, unknown>
      ) => Promise<{ data: unknown; error: unknown }>;
    }).rpc("inhand_email_exists", { p_email: email });

    if (error) {
      console.error("[email-exists] rpc failed", { error });
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

