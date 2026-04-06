import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

const rpcMock = vi.fn();

vi.mock("@/lib/supabase/client/admin", () => ({
  createSupabaseAdminClient: vi.fn(() => ({
    rpc: rpcMock,
  })),
}));

import { POST } from "@/app/api/auth/email-exists/route";

describe("auth email-exists endpoint", () => {
  const envBackup = { ...process.env };

  beforeEach(() => {
    rpcMock.mockReset();
    process.env = { ...envBackup };
    process.env.SUPABASE_SERVICE_ROLE_KEY = "svc";
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon";
  });

  afterEach(() => {
    process.env = { ...envBackup };
  });

  it("returns 400 for invalid email", async () => {
    const req = new Request("http://localhost/api/auth/email-exists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "not-an-email" }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.ok).toBe(false);
  });

  it("returns exists=true when rpc returns true", async () => {
    rpcMock.mockResolvedValueOnce({ data: true, error: null });
    const req = new Request("http://localhost/api/auth/email-exists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "a@b.com" }),
    });
    const res = await POST(req);
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.exists).toBe(true);
    expect(rpcMock).toHaveBeenCalledWith("inhand_email_exists", { p_email: "a@b.com" });
  });

  it("returns exists=false when rpc returns false", async () => {
    rpcMock.mockResolvedValueOnce({ data: false, error: null });
    const req = new Request("http://localhost/api/auth/email-exists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "a@b.com" }),
    });
    const res = await POST(req);
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.exists).toBe(false);
  });
});

