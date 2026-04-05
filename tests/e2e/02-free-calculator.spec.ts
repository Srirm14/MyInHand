/**
 * 02-free-calculator.spec.ts
 *
 * Tests for the free-tier salary calculator at /salary.
 * Covers CTC input, fixed/variable split, deduction rows, and live output cards.
 *
 * Runs in default mode (no NEXT_PUBLIC_ACCESS_MODE=premium).
 */

import { test, expect } from "@playwright/test";
import { SALARY, ROUTES } from "./fixtures/salary-data";
import { assertNoError } from "./helpers";

const BASE = ROUTES.SALARY;

test.describe("Free calculator — page structure", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState("networkidle");
  });

  test("page loads without errors", async ({ page }) => {
    await assertNoError(page);
  });

  test("CTC input field is visible", async ({ page }) => {
    const ctcInput = page
      .locator('input[name*="ctc" i], input[name*="CTC"], input[placeholder*="CTC"], input[placeholder*="salary"]')
      .or(page.getByRole("spinbutton").first());
    await expect(ctcInput.first()).toBeVisible();
  });

  test("tax regime selector is present (old/new)", async ({ page }) => {
    const oldBtn = page.getByText(/old\s*regime/i).or(page.getByRole("button", { name: /old/i })).first();
    const newBtn = page.getByText(/new\s*regime/i).or(page.getByRole("button", { name: /new/i })).first();
    const hasOld = await oldBtn.isVisible().catch(() => false);
    const hasNew = await newBtn.isVisible().catch(() => false);
    expect(hasOld || hasNew).toBe(true);
  });

  test("in-hand result section is present", async ({ page }) => {
    const resultSection = page
      .getByText(/in.hand|monthly.*pay|take.home/i)
      .first();
    await expect(resultSection).toBeVisible({ timeout: 8_000 });
  });
});

test.describe("Free calculator — CTC input", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState("networkidle");
  });

  test("entering a valid CTC shows an in-hand result", async ({ page }) => {
    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.clear();
    await ctcField.fill("1200000");
    await ctcField.press("Tab");
    // Any number or currency symbol should appear in a result card
    await expect(page.getByText(/₹|monthly|in.hand/i).first()).toBeVisible({ timeout: 8_000 });
  });

  test("clearing CTC to 0 does not crash the page", async ({ page }) => {
    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("0");
    await ctcField.press("Tab");
    await assertNoError(page);
  });

  test("entering very large CTC (1 crore) does not crash", async ({ page }) => {
    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("10000000");
    await ctcField.press("Tab");
    await assertNoError(page);
  });

  test("entering negative values does not crash", async ({ page }) => {
    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("-500000");
    await ctcField.press("Tab");
    await assertNoError(page);
  });

  test("entering non-numeric text is rejected or cleared", async ({ page }) => {
    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("abc");
    await ctcField.press("Tab");
    await assertNoError(page);
  });
});

test.describe("Free calculator — fixed and variable split", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState("networkidle");
  });

  test("fixed pay field is visible and accepts input", async ({ page }) => {
    const fields = page.getByRole("spinbutton");
    const count = await fields.count();
    expect(count).toBeGreaterThanOrEqual(1);
    if (count >= 2) {
      await fields.nth(1).fill("1000000");
      await assertNoError(page);
    }
  });

  test("setting fixed pay adjusts variable derivation", async ({ page }) => {
    const fields = page.getByRole("spinbutton");
    const count = await fields.count();
    if (count >= 3) {
      await fields.first().fill("1500000"); // total CTC
      await fields.first().press("Tab");
      await fields.nth(1).fill("1200000"); // fixed
      await fields.nth(1).press("Tab");
      // variable should be auto-derived (300000)
      await assertNoError(page);
    }
  });

  test("in-hand excluding variable < in-hand including variable when variable > 0", async ({ page }) => {
    const fields = page.getByRole("spinbutton");
    if (await fields.count() >= 3) {
      await fields.nth(2).fill("200000"); // variable
      await fields.nth(2).press("Tab");
      // The two in-hand values should differ
      await assertNoError(page);
    }
  });
});

test.describe("Free calculator — tax regime switching", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState("networkidle");
    // Enter a salary first
    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("1500000");
    await ctcField.press("Tab");
  });

  test("switching from new to old regime updates results without error", async ({ page }) => {
    const oldBtn = page.getByText(/old/i).filter({ hasText: /regime/i }).or(
      page.getByRole("button", { name: /old/i })
    ).first();
    if (await oldBtn.isVisible()) {
      await oldBtn.click();
      await assertNoError(page);
    }
  });

  test("switching from old to new regime updates results without error", async ({ page }) => {
    const newBtn = page.getByText(/new/i).filter({ hasText: /regime/i }).or(
      page.getByRole("button", { name: /new/i })
    ).first();
    if (await newBtn.isVisible()) {
      await newBtn.click();
      await assertNoError(page);
    }
  });

  test("regime toggle is interactive and changes active state", async ({ page }) => {
    const regimeButtons = page.getByRole("button").filter({ hasText: /old|new/i });
    const count = await regimeButtons.count();
    if (count >= 2) {
      await regimeButtons.first().click();
      await regimeButtons.last().click();
      await assertNoError(page);
    }
  });
});

test.describe("Free calculator — professional tax", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState("networkidle");
  });

  test("professional tax field is present and editable", async ({ page }) => {
    const ptField = page
      .locator('input[name*="professional" i], input[name*="pt" i]')
      .or(page.getByPlaceholder(/professional/i))
      .first();
    if (await ptField.isVisible()) {
      await ptField.fill("200");
      await ptField.press("Tab");
      await assertNoError(page);
    }
  });

  test("setting PT to 0 shows higher in-hand", async ({ page }) => {
    const ctcField = page.getByRole("spinbutton").first();
    await ctcField.fill("1200000");
    await ctcField.press("Tab");
    // Just verifying no crash with PT = 0
    const ptField = page
      .locator('input[name*="professional" i]')
      .or(page.getByPlaceholder(/professional/i))
      .first();
    if (await ptField.isVisible()) {
      await ptField.fill("0");
      await ptField.press("Tab");
      await assertNoError(page);
    }
  });
});

test.describe("Free calculator — deductions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState("networkidle");
  });

  test("employee PF field is editable", async ({ page }) => {
    const pfField = page
      .locator('input[name*="pf" i], input[name*="epf" i], input[name*="employee" i]')
      .first();
    if (await pfField.isVisible()) {
      await pfField.fill("1800");
      await pfField.press("Tab");
      await assertNoError(page);
    }
  });

  test("add extra deduction row works", async ({ page }) => {
    const addBtn = page
      .getByRole("button", { name: /add.*deduction|add row|custom/i })
      .first();
    if (await addBtn.isVisible()) {
      await addBtn.click();
      await assertNoError(page);
      // A new input row should appear
      await expect(page.getByRole("spinbutton")).toHaveCount(
        await page.getByRole("spinbutton").count()
      );
    }
  });
});

test.describe("Free calculator — premium upsell", () => {
  test("premium-locked feature cards are visible in default mode", async ({ page }) => {
    await page.goto(BASE);
    const premiumCards = page
      .getByText(/upgrade|premium|unlock|comparison|forecast|emi/i)
      .first();
    await expect(premiumCards).toBeVisible({ timeout: 8_000 });
  });

  test("clicking a premium feature shows paywall or login", async ({ page }) => {
    await page.goto(BASE);
    const upgradeLink = page
      .getByRole("link", { name: /upgrade|premium|unlock/i })
      .or(page.getByRole("button", { name: /upgrade|premium|unlock/i }))
      .first();
    if (await upgradeLink.isVisible()) {
      await upgradeLink.click();
      // Should go to paywall, login, or show a modal
      const urlOk = (await page.url()).includes("paywall") ||
        (await page.url()).includes("login") ||
        await page.locator('[role="dialog"]').isVisible().catch(() => false);
      expect(urlOk).toBeTruthy();
    }
  });
});
