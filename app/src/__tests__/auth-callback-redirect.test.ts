import { describe, expect, it } from "vitest";
import { sanitizeInternalAuthRedirect } from "@/lib/auth/sanitize-internal-redirect";

describe("sanitizeInternalAuthRedirect (auth callback next)", () => {
  it("allows paywall with query", () => {
    expect(sanitizeInternalAuthRedirect("/paywall?tool=offers")).toBe(
      "/paywall?tool=offers"
    );
  });

  it("rejects external URLs", () => {
    expect(sanitizeInternalAuthRedirect("https://evil.com")).toBeNull();
  });

  it("rejects protocol-relative", () => {
    expect(sanitizeInternalAuthRedirect("//evil.com")).toBeNull();
  });

  it("allows reset password path", () => {
    expect(sanitizeInternalAuthRedirect("/auth/reset-password")).toBe(
      "/auth/reset-password"
    );
  });
});
