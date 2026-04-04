import type { LocalAccountRecord } from "@/lib/types/user.types";

/** Always available for local / QA login; persisted accounts override the same email if present. */
export const DEMO_LOGIN_EMAIL = "demo@fluidledger.app";
export const DEMO_LOGIN_PASSWORD = "password123";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function getDemoSeedAccounts(): Record<string, LocalAccountRecord> {
  const email = normalizeEmail(DEMO_LOGIN_EMAIL);
  return {
    [email]: {
      password: DEMO_LOGIN_PASSWORD,
      profile: {
        id: "00000000-0000-4000-8000-000000000001",
        email,
        displayName: "Demo User",
        company: "Acme India Pvt Ltd",
        role: "Product Manager",
        planTier: "premium",
      },
    },
  };
}
