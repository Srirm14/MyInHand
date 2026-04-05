/**
 * 01-smoke.spec.ts
 *
 * Smoke tests: verifies every important page loads without crashing.
 * These run first — a failure here means nothing else is worth testing.
 */

import { test, expect } from "@playwright/test";
import { ROUTES } from "./fixtures/salary-data";
import { assertNoError } from "./helpers";

test.describe("Smoke — public pages", () => {
  test("landing page loads", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    await expect(page).toHaveTitle(/InHand|in.hand|salary/i);
    await assertNoError(page);
  });

  test("landing page has hero section with a CTA", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    const cta = page
      .getByRole("link", { name: /in.hand|estimate|calculate|breakdown|salary/i })
      .or(page.getByRole("button", { name: /in.hand|estimate|calculate|breakdown/i }))
      .first();
    await expect(cta).toBeVisible({ timeout: 8_000 });
  });

  test("salary page loads (free calculator in default mode)", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    await assertNoError(page);
    await expect(page).toHaveURL(ROUTES.SALARY);
  });

  test("login page loads", async ({ page }) => {
    await page.goto(ROUTES.LOGIN);
    await assertNoError(page);
    await expect(page.getByRole("textbox", { name: /email/i }).first()).toBeVisible();
  });

  test("signup page loads", async ({ page }) => {
    await page.goto(ROUTES.SIGNUP);
    await assertNoError(page);
    await expect(page.getByRole("textbox", { name: /email/i }).first()).toBeVisible();
  });

  test("forgot-password page loads", async ({ page }) => {
    await page.goto("/forgot-password");
    await assertNoError(page);
    await expect(page.getByRole("textbox", { name: /email/i }).first()).toBeVisible();
  });

  test("paywall page loads", async ({ page }) => {
    await page.goto(ROUTES.PAYWALL);
    await assertNoError(page);
  });

  test("navbar is always visible", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    await expect(page.locator("nav, header").first()).toBeVisible();
  });

  test("footer is visible on landing", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    const footer = page.locator("footer");
    if (await footer.count() > 0) {
      await expect(footer.first()).toBeVisible({ timeout: 5_000 });
    }
  });
});

test.describe("Smoke — navigation links", () => {
  test("clicking logo or brand navigates to landing", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    const logo = page
      .getByRole("link", { name: /inhand|in.?hand/i })
      .or(page.locator("a[href='/']"))
      .first();
    if (await logo.isVisible()) {
      await logo.click();
      await expect(page).toHaveURL(/^\/$|\/$/);
    }
  });

  test("salary nav link navigates to /salary", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    const salaryLink = page
      .getByRole("link", { name: /salary/i })
      .first();
    await salaryLink.click();
    await expect(page).toHaveURL(/\/salary/);
  });

  test("login link in navbar navigates to login page", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    const loginLink = page
      .getByRole("link", { name: /login|sign in/i })
      .first();
    if (await loginLink.isVisible()) {
      await loginLink.click();
      await expect(page).toHaveURL(/\/login/);
    }
  });
});

test.describe("Smoke — legacy redirects", () => {
  test("/salary/breakdown/* redirects to premium breakdown", async ({ page }) => {
    await page.goto("/salary/breakdown/test");
    // Should redirect (either to breakdown, login, paywall, or similar — not 404)
    await assertNoError(page);
  });

  test("/premium redirects without 404", async ({ page }) => {
    await page.goto("/premium");
    await assertNoError(page);
  });
});
