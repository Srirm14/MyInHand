import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

// Mock server auth to avoid real Supabase cookies/session.
vi.mock("@/lib/server/api-auth", () => ({
  requireUser: vi.fn(async () => ({
    ok: true,
    user: { id: "user-1" },
  })),
}));

// Mock Supabase admin client (service role).
const insertMock = vi.fn();
const updateMock = vi.fn();
const maybeSingleMock = vi.fn();

function resetDbMocks() {
  insertMock.mockReset();
  updateMock.mockReset();
  maybeSingleMock.mockReset();
}

vi.mock("@/lib/supabase/client/admin", () => ({
  createSupabaseAdminClient: vi.fn(() => ({
    from: vi.fn(() => {
      const builder: {
        insert: typeof insertMock;
        update: (...args: unknown[]) => typeof builder;
        select: (...args: unknown[]) => typeof builder;
        eq: (...args: unknown[]) => typeof builder;
        order: (...args: unknown[]) => typeof builder;
        limit: (...args: unknown[]) => typeof builder;
        maybeSingle: typeof maybeSingleMock;
        then: (resolve: (v: { error: null }) => void) => void;
      } = {
        insert: insertMock,
        update: (...args: unknown[]) => {
          updateMock(...args as [unknown]);
          return builder;
        },
        select: (..._args: unknown[]) => {
          return builder;
        },
        eq: (..._args: unknown[]) => builder,
        order: (..._args: unknown[]) => builder,
        limit: (..._args: unknown[]) => builder,
        maybeSingle: maybeSingleMock,
        // Allow `await builder` in route handlers to yield a supabase-like response.
        then: (resolve: (v: { error: null }) => void) => resolve({ error: null }),
      };
      return builder;
    }),
  })),
}));

// Mock access-mode env unlock.
vi.mock("@/lib/config/access-mode", async (orig) => {
  const actual = (await orig()) as Record<string, unknown>;
  return {
    ...actual,
    getPremiumUnlockedFromEnv: vi.fn(() => false),
  };
});

// Mock Razorpay client.
const plansFetchMock = vi.fn();
const subscriptionsCreateMock = vi.fn();
const subscriptionsFetchMock = vi.fn();

vi.mock("@/lib/server/razorpay/razorpay-client", () => ({
  createRazorpayClient: vi.fn(() => ({
    plans: {
      fetch: plansFetchMock,
    },
    subscriptions: {
      create: subscriptionsCreateMock,
      fetch: subscriptionsFetchMock,
    },
  })),
}));

import { POST as createSubscription } from "@/app/api/billing/razorpay/subscription/route";
import { POST as verifySubscription } from "@/app/api/billing/razorpay/verify/route";
import { getRazorpayServerEnv } from "@/lib/server/razorpay/razorpay-env";

describe("Razorpay billing integration", () => {
  const envBackup = { ...process.env };

  beforeEach(() => {
    resetDbMocks();
    plansFetchMock.mockReset();
    subscriptionsCreateMock.mockReset();
    subscriptionsFetchMock.mockReset();
    process.env = { ...envBackup };
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID = "rzp_test_123";
    process.env.RAZORPAY_KEY_SECRET = "secret";
    process.env.RAZORPAY_PLAN_ID_MONTHLY = "plan_monthly";
    process.env.RAZORPAY_PLAN_ID_YEARLY = "plan_yearly";
    process.env.SUPABASE_SERVICE_ROLE_KEY = "svc";
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  });

  afterEach(() => {
    process.env = { ...envBackup };
  });

  it("getRazorpayServerEnv throws with missing vars", () => {
    delete process.env.RAZORPAY_PLAN_ID_MONTHLY;
    expect(() => getRazorpayServerEnv()).toThrow(/Missing:.*RAZORPAY_PLAN_ID_MONTHLY/);
  });

  it("subscription creation returns actionable error when plan not found", async () => {
    // profile is free (duplicate protection check)
    maybeSingleMock.mockResolvedValueOnce({ data: { plan_tier: "free" }, error: null });
    plansFetchMock.mockImplementation((_planId: string, cb: (err: unknown, plan: unknown) => void) =>
      cb({ error: { description: "not found" } }, null)
    );

    const req = new Request("http://localhost/api/billing/razorpay/subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: "pro_yearly" }),
    });
    const res = await createSubscription(req);
    const json = await res.json();
    expect(res.status).toBe(500);
    expect(json.ok).toBe(false);
    expect(String(json.error)).toMatch(/RAZORPAY_PLAN_ID_YEARLY=plan_yearly/);
  });

  it("subscription creation inserts billing row and returns checkout payload", async () => {
    // plan exists
    plansFetchMock.mockImplementation(
      (_planId: string, cb: (err: unknown, plan: unknown) => void) =>
        cb(null, { id: "plan_yearly" })
    );
    // subscription created
    subscriptionsCreateMock.mockImplementation(
      (_body: unknown, cb: (err: unknown, sub: unknown) => void) =>
      cb(null, { id: "sub_1", status: "created", created_at: 1, short_url: null })
    );
    // profile is free (duplicate protection check)
    maybeSingleMock.mockResolvedValueOnce({ data: { plan_tier: "free" }, error: null });
    // insert ok
    insertMock.mockResolvedValueOnce({ error: null });

    const req = new Request("http://localhost/api/billing/razorpay/subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: "pro_yearly" }),
    });
    const res = await createSubscription(req);
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.checkout.subscriptionId).toBe("sub_1");
    expect(json.checkout.keyId).toBe("rzp_test_123");
  });

  it("verify returns 403 if subscription does not belong to user", async () => {
    const crypto = await import("node:crypto");
    const sig = crypto
      .createHmac("sha256", "secret")
      .update("pay_1|sub_1")
      .digest("hex");

    // billing row belongs to someone else
    maybeSingleMock.mockResolvedValueOnce({
      data: { user_id: "user-2", plan_code: "pro_monthly", status: "created" },
      error: null,
    });

    const req = new Request("http://localhost/api/billing/razorpay/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_payment_id: "pay_1",
        razorpay_subscription_id: "sub_1",
        razorpay_signature: sig,
      }),
    });
    const res = await verifySubscription(req);
    const json = await res.json();
    expect(res.status).toBe(403);
    expect(json.ok).toBe(false);
  });

  it("verify upgrades profile on valid signature", async () => {
    // generate correct signature for pay|sub with secret
    const crypto = await import("node:crypto");
    const sig = crypto
      .createHmac("sha256", "secret")
      .update("pay_1|sub_1")
      .digest("hex");

    // billing row matches user
    maybeSingleMock.mockResolvedValueOnce({
      data: { user_id: "user-1", plan_code: "pro_monthly", status: "created" },
      error: null,
    });

    // fetch subscription
    subscriptionsFetchMock.mockResolvedValueOnce({
      status: "active",
      current_start: 1,
      current_end: 2,
      notes: null,
      charge_at: null,
      short_url: null,
    });
    updateMock.mockImplementation(() => undefined);

    const req = new Request("http://localhost/api/billing/razorpay/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_payment_id: "pay_1",
        razorpay_subscription_id: "sub_1",
        razorpay_signature: sig,
      }),
    });
    const res = await verifySubscription(req);
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.planTier).toBe("premium");
  });
});

