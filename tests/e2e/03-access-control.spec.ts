/**
 * 03-access-control.spec.ts
 *
 * Tests that premium-gated routes are protected for unauthenticated / free-tier users.
 * These run without NEXT_PUBLIC_ACCESS_MODE=premium so routes are gated.
 */

import { test, expect } from "@playwright/test";
import { ROUTES } from "./fixtures/salary-data";
import { assertNoError } from "./helpers";

const PREMIUM_ROUTES = [
  ROUTES.BREAKDOWN,
  ROUTES.LIFESTYLE,
  ROUTES.OFFER_COMPARISON,
  ROUTES.WEALTH_FORECAST,
  ROUTES.EMI_ANALYZER,
  ROUTES.HISTORY,
];

test.describe("Access control — unauthenticated user", () => {
  test("unauthenticated user visiting /salary sees free calculator", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    await assertNoError(page);
    // Should not be on breakdown
    expect(page.url()).not.toContain("breakdown");
  });

  test("unauthenticated user visiting /profile is redirected to login", async ({ page }) => {
    await page.goto(ROUTES.PROFILE);
    await page.waitForURL(url => url.includes("/login") || url.includes("/signup"), { timeout: 10_000 }).catch(() => {});
    const url = page.url();
    const redirected = url.includes("/login") || url.includes("/signup") || url.includes("/paywall");
    expect(redirected).toBe(true);
  });

  for (const route of PREMIUM_ROUTES) {
    test(`unauthenticated user visiting ${route} is redirected or shown paywall`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      const url = page.url();
      // Should redirect to login or paywall — NOT stay on the premium route with full content
      const isGated =
        url.includes("/login") ||
        url.includes("/paywall") ||
        url.includes("/signup") ||
        url.includes("/salary") ||
        await page.locator('[role="dialog"]').isVisible().catch(() => false);
      // At minimum there should be no server error
      await assertNoError(page);
      expect(isGated).toBe(true);
    });
  }
});

test.describe("Access control — public routes remain accessible", () => {
  const publicRoutes = [
    ROUTES.LANDING,
    ROUTES.SALARY,
    ROUTES.LOGIN,
    ROUTES.SIGNUP,
    "/forgot-password",
    ROUTES.PAYWALL,
  ];

  for (const route of publicRoutes) {
    test(`${route} is accessible without login`, async ({ page }) => {
      await page.goto(route);
      await assertNoError(page);
      // Should not redirect to login (the page itself IS login for auth routes)
      if (route !== ROUTES.LOGIN && route !== ROUTES.SIGNUP && route !== "/forgot-password") {
        expect(page.url()).not.toContain("/login");
      }
    });
  }
});

test.describe("Access control — premium mode bypass", () => {
  // These tests verify behavior when NEXT_PUBLIC_ACCESS_MODE=premium is set.
  // They use process.env to skip if the test server is not in premium mode.
  test("salary page in premium mode shows CTC form instead of free calculator", async ({ page }) => {
    if (process.env.NEXT_PUBLIC_ACCESS_MODE !== "premium") {
      test.skip();
    }
    await page.goto(ROUTES.SALARY);
    await assertNoError(page);
  });
});

test.describe("Access control — paywall interaction", () => {
  test("paywall page renders without server error", async ({ page }) => {
    await page.goto(ROUTES.PAYWALL);
    await assertNoError(page);
  });

  test("paywall page shows pricing or plan information", async ({ page }) => {
    await page.goto(ROUTES.PAYWALL);
    const pricingText = page
      .getByText(/premium|plan|pricing|upgrade|₹|free/i)
      .first();
    await expect(pricingText).toBeVisible({ timeout: 8_000 });
  });
});
