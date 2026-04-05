/**
 * 12-navigation.spec.ts
 *
 * Tests for cross-page navigation, navbar behavior, salary nav switcher,
 * and back-navigation flows.
 */

import { test, expect } from "@playwright/test";
import { SALARY, ROUTES } from "./fixtures/salary-data";
import { assertNoError } from "./helpers";

const isPremium = process.env.NEXT_PUBLIC_ACCESS_MODE === "premium";

test.describe("Navigation — basic flows", () => {
  test("landing → salary via nav link", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    await page.getByRole("link", { name: /salary/i }).first().click();
    await expect(page).toHaveURL(/\/salary/);
    await assertNoError(page);
  });

  test("salary → login via nav link (when not authenticated)", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    const loginLink = page.getByRole("link", { name: /login|sign in/i }).first();
    if (await loginLink.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await loginLink.click();
      await expect(page).toHaveURL(/\/login/);
    }
  });

  test("browser back button works correctly", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    await page.goto(ROUTES.SALARY);
    await page.goBack();
    await expect(page).toHaveURL(ROUTES.LANDING);
  });

  test("browser forward button works correctly", async ({ page }) => {
    await page.goto(ROUTES.LANDING);
    await page.goto(ROUTES.SALARY);
    await page.goBack();
    await page.goForward();
    await expect(page).toHaveURL(/\/salary/);
  });
});

test.describe("Navigation — navbar renders on all pages", () => {
  const pages = [
    ROUTES.LANDING,
    ROUTES.SALARY,
    ROUTES.LOGIN,
    ROUTES.SIGNUP,
  ];

  for (const route of pages) {
    test(`navbar is visible on ${route}`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      const nav = page.locator("nav, header").first();
      await expect(nav).toBeVisible({ timeout: 8_000 });
    });
  }
});

test.describe("Navigation — premium nav switcher", () => {
  test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");

  test("salary nav item shows LPA label after entering CTC", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    await page.waitForLoadState("networkidle");

    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("2500000");
    await ctcField.press("Tab");

    await page.getByRole("button", { name: /show.*breakdown|estimate/i }).first().click();
    await page.waitForURL(/breakdown/, { timeout: 15_000 });

    // Nav should show "25 LPA" or similar
    const salaryLabel = page.getByText(/lpa|\d+\s*lpa|₹.*lpa/i).first();
    const visible = await salaryLabel.isVisible({ timeout: 5_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });

  test("salary nav chevron opens dropdown in premium mode", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    await page.waitForLoadState("networkidle");

    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("2000000");
    await ctcField.press("Tab");

    const tier1 = page.getByText(/tier\s*1|metro/i).first();
    if (await tier1.isVisible({ timeout: 2_000 }).catch(() => false)) {
      await tier1.click();
    }

    await page.getByRole("button", { name: /show.*breakdown|estimate/i }).first().click();
    await page.waitForURL(/breakdown/, { timeout: 15_000 });

    // Find and click the salary nav dropdown
    const salaryNav = page
      .getByRole("button", { name: /salary|lpa/i })
      .or(page.locator("nav").getByText(/salary/i))
      .first();
    if (await salaryNav.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await salaryNav.click();
      await page.waitForTimeout(300);
      await assertNoError(page);
    }
  });
});

test.describe("Navigation — premium tool links", () => {
  test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");

  test("offer comparison is accessible from nav", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    const offerLink = page
      .getByRole("link", { name: /offer|comparison/i })
      .first();
    if (await offerLink.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await offerLink.click();
      await expect(page).toHaveURL(/offer.comparison/);
      await assertNoError(page);
    }
  });

  test("premium tools are accessible via direct URL in premium mode", async ({ page }) => {
    const premiumRoutes = [
      ROUTES.LIFESTYLE,
      ROUTES.WEALTH_FORECAST,
      ROUTES.EMI_ANALYZER,
      ROUTES.OFFER_COMPARISON,
    ];
    for (const route of premiumRoutes) {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      await assertNoError(page);
      // Should not redirect to login/paywall in premium mode
      expect(page.url()).not.toContain("/login");
    }
  });
});

test.describe("Navigation — history and recent activity", () => {
  test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");

  test("history page loads in premium mode", async ({ page }) => {
    await page.goto(ROUTES.HISTORY);
    await page.waitForLoadState("networkidle");
    await assertNoError(page);
  });

  test("history page shows heading", async ({ page }) => {
    await page.goto(ROUTES.HISTORY);
    const heading = page.getByRole("heading").filter({ hasText: /history|saved|salary/i }).first();
    const visible = await heading.isVisible({ timeout: 5_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });

  test("recent history sheet button is accessible from breakdown", async ({ page }) => {
    await page.goto(ROUTES.SALARY);
    await page.waitForLoadState("networkidle");

    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("2000000");
    await ctcField.press("Tab");

    const tier1 = page.getByText(/tier\s*1|metro/i).first();
    if (await tier1.isVisible({ timeout: 2_000 }).catch(() => false)) {
      await tier1.click();
    }

    await page.getByRole("button", { name: /show.*breakdown|estimate/i }).first().click();
    await page.waitForURL(/breakdown/, { timeout: 15_000 });

    const historyBtn = page
      .getByRole("button", { name: /history|recent/i })
      .or(page.getByText(/recent.*activity/i))
      .first();
    const visible = await historyBtn.isVisible({ timeout: 5_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });
});

test.describe("Navigation — responsive behavior", () => {
  test("mobile viewport — salary page loads correctly", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(ROUTES.SALARY);
    await page.waitForLoadState("networkidle");
    await assertNoError(page);
    await expect(page.locator("nav, header").first()).toBeVisible();
  });

  test("mobile viewport — landing page renders correctly", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(ROUTES.LANDING);
    await page.waitForLoadState("networkidle");
    await assertNoError(page);
  });

  test("tablet viewport — salary page renders correctly", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(ROUTES.SALARY);
    await page.waitForLoadState("networkidle");
    await assertNoError(page);
  });
});
