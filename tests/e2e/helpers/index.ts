/**
 * Shared Playwright helpers for InHand E2E tests.
 */

import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

// ─── Navigation ───────────────────────────────────────────────────────────────

export async function gotoAndWait(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

// ─── Salary form helpers ──────────────────────────────────────────────────────

/**
 * Fill the annual CTC field. Works with both free calculator and premium form.
 */
export async function fillCTC(page: Page, amount: number, selector?: string) {
  const field = page.locator(selector ?? 'input[name="annualCTC"], input[placeholder*="CTC"], input[placeholder*="salary"], input[placeholder*="1,00,00,000"]').first();
  await field.clear();
  await field.fill(String(amount));
  await field.press("Tab");
}

/**
 * Select a tax regime via the toggle buttons (old/new).
 */
export async function selectTaxRegime(page: Page, regime: "old" | "new") {
  const label = regime === "new" ? /new/i : /old/i;
  const btn = page.getByRole("button", { name: label }).or(
    page.getByRole("radio", { name: label })
  ).first();
  await btn.click();
}

/**
 * Select a city tier from the segmented selector or dropdown.
 */
export async function selectCityTier(page: Page, tier: "tier1" | "tier2" | "tier3") {
  const labels: Record<string, RegExp> = {
    tier1: /tier\s*1|metro/i,
    tier2: /tier\s*2|urban/i,
    tier3: /tier\s*3|semi/i,
  };
  await page.getByRole("button", { name: labels[tier] }).first().click();
}

// ─── Premium form helpers ─────────────────────────────────────────────────────

/**
 * Fill the premium CTC input form and submit.
 * Requires NEXT_PUBLIC_ACCESS_MODE=premium.
 */
export async function fillPremiumCTCForm(
  page: Page,
  opts: {
    ctc: number;
    tier?: "tier1" | "tier2" | "tier3";
    regime?: "old" | "new";
    name?: string;
  }
) {
  const { ctc, tier = "tier1", regime = "new", name } = opts;

  if (name) {
    const nameField = page.locator('input[name="fullName"], input[placeholder*="name"]').first();
    if (await nameField.isVisible()) {
      await nameField.fill(name);
    }
  }

  await fillCTC(page, ctc);
  await selectCityTier(page, tier);
  await selectTaxRegime(page, regime);
}

/**
 * Click the "Show estimated breakdown" button on the CTC form.
 */
export async function submitCTCForm(page: Page) {
  await page.getByRole("button", { name: /show.*breakdown|calculate|estimate/i }).click();
  await page.waitForURL(/breakdown/);
  await page.waitForLoadState("networkidle");
}

// ─── Breakdown helpers ────────────────────────────────────────────────────────

/**
 * Wait for the salary breakdown page to finish loading KPI cards.
 */
export async function waitForBreakdown(page: Page) {
  await page.waitForSelector('[data-testid="kpi-monthly-inhand"], .stat-card, [class*="stat"], h2, h3', { timeout: 10_000 });
}

/**
 * Read displayed currency value from a stat card or element containing the selector.
 */
export async function readCurrencyValue(locator: Locator): Promise<string> {
  const text = await locator.textContent();
  return text?.replace(/[^\d,₹.]/g, "").trim() ?? "";
}

// ─── Assertion helpers ────────────────────────────────────────────────────────

/**
 * Assert a page heading is visible.
 */
export async function assertHeading(page: Page, pattern: RegExp | string) {
  await expect(
    page.getByRole("heading", { name: pattern })
      .or(page.locator("h1, h2").filter({ hasText: pattern }))
      .first()
  ).toBeVisible({ timeout: 8_000 });
}

/**
 * Assert that a given amount (as text pattern) appears somewhere on the page.
 */
export async function assertAmountVisible(page: Page, amountPattern: RegExp) {
  await expect(page.getByText(amountPattern).first()).toBeVisible({ timeout: 5_000 });
}

/**
 * Assert that the page is not showing an error boundary or 404.
 */
export async function assertNoError(page: Page) {
  await expect(page.locator("body")).not.toContainText(/500|Internal Server Error/i);
  await expect(page.locator("body")).not.toContainText(/Page not found|404/i);
}

// ─── EMI form helpers ─────────────────────────────────────────────────────────

export async function fillEMIForm(
  page: Page,
  opts: {
    principal: number;
    rate: number;
    tenureYears: number;
  }
) {
  const principalField = page.locator('input[name="principal"], input[placeholder*="loan amount"], input[placeholder*="principal"]').first();
  const rateField = page.locator('input[name="rate"], input[placeholder*="interest"], input[placeholder*="rate"]').first();
  const tenureField = page.locator('input[name="tenure"], input[placeholder*="year"], input[placeholder*="tenure"]').first();

  await principalField.fill(String(opts.principal));
  await rateField.fill(String(opts.rate));
  await tenureField.fill(String(opts.tenureYears));
  await tenureField.press("Tab");
}

// ─── Lifestyle helpers ────────────────────────────────────────────────────────

export async function fillSlider(page: Page, sliderLabel: RegExp, value: number) {
  const input = page.locator("input[type=range]")
    .filter({ has: page.locator("..", { hasText: sliderLabel }) })
    .or(
      page.locator(`label:has-text("${sliderLabel}") + * input[type=range]`)
    )
    .first();

  await input.fill(String(value));
  await input.dispatchEvent("input");
  await input.dispatchEvent("change");
}
