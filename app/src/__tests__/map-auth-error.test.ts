import { describe, expect, it } from "vitest";
import { mapAuthError, isUnconfirmedEmailError } from "@/lib/auth/map-auth-error";

describe("mapAuthError", () => {
  it("maps invalid credentials", () => {
    expect(
      mapAuthError({ message: "Invalid login credentials", name: "AuthError" } as Error)
    ).toMatch(/invalid email or password/i);
  });

  it("maps unconfirmed email", () => {
    const msg = mapAuthError({
      message: "Email not confirmed",
      name: "AuthError",
    } as Error);
    expect(msg.toLowerCase()).toContain("confirm");
  });

  it("maps rate limit", () => {
    expect(
      mapAuthError({ message: "email rate limit exceeded", name: "AuthError" } as Error)
    ).toMatch(/too many attempts/i);
  });
});

describe("isUnconfirmedEmailError", () => {
  it("detects unconfirmed", () => {
    expect(
      isUnconfirmedEmailError({
        message: "not confirmed",
        name: "AuthError",
      } as Error)
    ).toBe(true);
  });

  it("rejects other errors", () => {
    expect(
      isUnconfirmedEmailError({
        message: "Invalid login credentials",
        name: "AuthError",
      } as Error)
    ).toBe(false);
  });
});
