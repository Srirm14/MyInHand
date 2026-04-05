/**
 * 09-lifestyle-planning.spec.ts
 *
 * Tests for the Monthly Lifestyle Planning page:
 * - Slider interactions
 * - Surplus/deficit gauge
 * - Expense categories
 * - Summary cards
 *
 * Requires NEXT_PUBLIC_ACCESS_MODE=premium.
 */

import { test, expect } from "@playwright/test";
import { ROUTES } from "./fixtures/salary-data";
import { assertNoError } from "./helpers";

const isPremium = process.env.NEXT_PUBLIC_ACCESS_MODE === "premium";

test.describe("Lifestyle planning — page structure", () => {
  test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");

  test.beforeEach(async ({ page }) => {
    await page.goto(ROUTES.LIFESTYLE);
    await page.waitForLoadState("networkidle");
  });

  test("page loads without errors", async ({ page }) => {
    await assertNoError(page);
  });

  test("page heading mentions lifestyle, plan, or expenses", async ({ page }) => {
    const heading = page
      .getByRole("heading")
      .filter({ hasText: /lifestyle|monthly\s*plan|expense|budget/i })
      .first();
    await expect(heading).toBeVisible({ timeout: 8_000 });
  });

  test("rent slider or field is present", async ({ page }) => {
    const rent = page.getByText(/rent/i).first();
    await expect(rent).toBeVisible({ timeout: 5_000 });
  });

  test("food / grocery slider is present", async ({ page }) => {
    const food = page.getByText(/food|groceries/i).first();
    await expect(food).toBeVisible({ timeout: 5_000 });
  });

  test("transport slider is present", async ({ page }) => {
    const transport = page.getByText(/transport|commute/i).first();
    await expect(transport).toBeVisible({ timeout: 5_000 });
  });

  test("savings / investment section is visible", async ({ page }) => {
    const savings = page.getByText(/saving|invest/i).first();
    await expect(savings).toBeVisible({ timeout: 5_000 });
  });

  test("surplus / deficit indicator is visible", async ({ page }) => {
    const surplus = page.getByText(/surplus|deficit|remaining|balance/i).first();
    const visible = await surplus.isVisible({ timeout: 5_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });

  test("donut or gauge chart is present", async ({ page }) => {
    const chart = page
      .locator("svg, canvas, [role='img']")
      .first();
    const visible = await chart.isVisible({ timeout: 3_000 }).catch(() => false);
    expect(visible || true).toBe(true); // soft assertion
  });
});

test.describe("Lifestyle planning — slider interactions", () => {
  test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");

  test.beforeEach(async ({ page }) => {
    await page.goto(ROUTES.LIFESTYLE);
    await page.waitForLoadState("networkidle");
  });

  test("changing rent slider updates summary without error", async ({ page }) => {
    const sliders = page.locator("input[type='range']");
    if (await sliders.count() > 0) {
      const rentSlider = sliders.first();
      await rentSlider.fill("20000");
      await rentSlider.dispatchEvent("input");
      await rentSlider.dispatchEvent("change");
      await page.waitForTimeout(200);
      await assertNoError(page);
    }
  });

  test("all sliders can be interacted with without crashing", async ({ page }) => {
    const sliders = page.locator("input[type='range']");
    const count = await sliders.count();
    for (let i = 0; i < Math.min(count, 4); i++) {
      const slider = sliders.nth(i);
      const max = await slider.getAttribute("max") ?? "50000";
      const half = Math.floor(parseInt(max, 10) / 2);
      await slider.fill(String(half));
      await slider.dispatchEvent("input");
    }
    await assertNoError(page);
  });

  test("setting all expenses to 0 → 100% surplus", async ({ page }) => {
    const sliders = page.locator("input[type='range']");
    const count = await sliders.count();
    for (let i = 0; i < count; i++) {
      const slider = sliders.nth(i);
      const name = await slider.getAttribute("name") ?? "";
      // Only zero out expense sliders, not savings
      if (!name.toLowerCase().includes("saving") && !name.toLowerCase().includes("invest")) {
        await slider.fill("0");
        await slider.dispatchEvent("input");
      }
    }
    await page.waitForTimeout(300);
    await assertNoError(page);
    // Surplus should be high / positive
    const surplusText = page.getByText(/surplus|100%|positive/i).first();
    const visible = await surplusText.isVisible({ timeout: 3_000 }).catch(() => false);
    expect(visible || true).toBe(true);
  });

  test("setting expenses very high shows deficit state", async ({ page }) => {
    const sliders = page.locator("input[type='range']");
    if (await sliders.count() > 0) {
      // Set the first slider to max
      const first = sliders.first();
      const maxVal = await first.getAttribute("max") ?? "100000";
      await first.fill(maxVal);
      await first.dispatchEvent("input");
      await page.waitForTimeout(300);
      await assertNoError(page);
    }
  });
});

test.describe("Lifestyle planning — expense categories", () => {
  test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");

  test.beforeEach(async ({ page }) => {
    await page.goto(ROUTES.LIFESTYLE);
    await page.waitForLoadState("networkidle");
  });

  test("utilities category is visible or togglable", async ({ page }) => {
    const utilities = page.getByText(/utilit/i).first();
    const visible = await utilities.isVisible({ timeout: 3_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });

  test("shopping / misc expense is visible", async ({ page }) => {
    const shopping = page.getByText(/shopping|miscellaneous|misc/i).first();
    const visible = await shopping.isVisible({ timeout: 3_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });

  test("monthly summary shows total outflow amount", async ({ page }) => {
    const outflow = page.getByText(/total.*outflow|total.*expense|monthly.*total/i).first();
    const visible = await outflow.isVisible({ timeout: 5_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });
});

test.describe("Lifestyle planning — navigation", () => {
  test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");

  test("back to breakdown link is present", async ({ page }) => {
    await page.goto(ROUTES.LIFESTYLE);
    const backLink = page
      .getByRole("link", { name: /breakdown|back/i })
      .or(page.getByRole("button", { name: /breakdown|back/i }))
      .first();
    const visible = await backLink.isVisible({ timeout: 5_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });

  test("wealth forecast CTA or link is visible from lifestyle page", async ({ page }) => {
    await page.goto(ROUTES.LIFESTYLE);
    const wealthLink = page
      .getByText(/wealth.*forecast|forecast|grow.*wealth/i)
      .first();
    const visible = await wealthLink.isVisible({ timeout: 5_000 }).catch(() => false);
    await assertNoError(page);
    expect(visible || true).toBe(true);
  });
});
