"use client";

type EmailExistsResponse =
  | { ok: true; exists: boolean }
  | { ok: false; error: string };

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function checkEmailExists(email: string): Promise<EmailExistsResponse> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return { ok: false, error: "Enter a valid email." };

  try {
    const res = await fetch("/api/auth/email-exists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: normalized }),
    });

    const text = await res.text();
    const json = safeJsonParse(text) as
      | { ok?: boolean; exists?: boolean; error?: string }
      | null;

    if (!res.ok || !json?.ok) {
      return { ok: false, error: json?.error || "Could not validate email." };
    }

    return { ok: true, exists: Boolean(json.exists) };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Network error.",
    };
  }
}

