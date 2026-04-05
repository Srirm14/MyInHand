import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration for InHand E2E tests.
 * The app must be running (or `webServer` will start it).
 *
 * Run all tests:   npx playwright test
 * Run headed:      npx playwright test --headed
 * Generate report: npx playwright show-report
 *
 * For premium-gated tests the app must be started with:
 *   NEXT_PUBLIC_ACCESS_MODE=premium npm run dev --prefix app
 */

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const isPremium = process.env.NEXT_PUBLIC_ACCESS_MODE === "premium";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false, // sequential to keep Next.js server stable
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  timeout: 30_000,
  expect: { timeout: 8_000 },

  reporter: [
    ["html", { open: "never", outputFolder: "playwright-report" }],
    ["line"],
  ],

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 8_000,
    navigationTimeout: 15_000,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],

  webServer: {
    command: isPremium
      ? "NEXT_PUBLIC_ACCESS_MODE=premium npm run dev --prefix app"
      : "npm run dev --prefix app",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
