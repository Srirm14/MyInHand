# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14-calculation-consistency.spec.ts >> Calculation consistency — free calculator outputs >> changing CTC always updates the displayed in-hand value
- Location: tests/e2e/14-calculation-consistency.spec.ts:18:7

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByRole('spinbutton').first()

```

# Test source

```ts
  1   | /**
  2   |  * 14-calculation-consistency.spec.ts
  3   |  *
  4   |  * Integration-style E2E tests that verify the UI output is consistent with
  5   |  * the known calculation logic. These tests act as a bridge between unit tests
  6   |  * (which verify the pure functions) and the full E2E experience.
  7   |  *
  8   |  * These mostly run in free-calculator mode (no premium required).
  9   |  */
  10  | 
  11  | import { test, expect } from "@playwright/test";
  12  | import { ROUTES } from "./fixtures/salary-data";
  13  | import { assertNoError } from "./helpers";
  14  | 
  15  | const isPremium = process.env.NEXT_PUBLIC_ACCESS_MODE === "premium";
  16  | 
  17  | test.describe("Calculation consistency — free calculator outputs", () => {
  18  |   test("changing CTC always updates the displayed in-hand value", async ({ page }) => {
  19  |     await page.goto(ROUTES.SALARY);
  20  |     await page.waitForLoadState("networkidle");
  21  | 
  22  |     const ctcField = page.getByRole("spinbutton").first();
  23  | 
> 24  |     await ctcField.fill("1000000");
      |                    ^ Error: locator.fill: Test ended.
  25  |     await ctcField.press("Tab");
  26  |     await page.waitForTimeout(200);
  27  |     const text1 = await page.locator("body").textContent();
  28  | 
  29  |     await ctcField.fill("2000000");
  30  |     await ctcField.press("Tab");
  31  |     await page.waitForTimeout(200);
  32  |     const text2 = await page.locator("body").textContent();
  33  | 
  34  |     // The displayed totals should differ between 10L and 20L CTC
  35  |     expect(text1).not.toBe(text2);
  36  |     await assertNoError(page);
  37  |   });
  38  | 
  39  |   test("higher CTC always shows higher in-hand (monotonic)", async ({ page }) => {
  40  |     await page.goto(ROUTES.SALARY);
  41  |     await page.waitForLoadState("networkidle");
  42  | 
  43  |     const ctcField = page.getByRole("spinbutton").first();
  44  | 
  45  |     // Low CTC
  46  |     await ctcField.fill("600000");
  47  |     await ctcField.press("Tab");
  48  |     await page.waitForTimeout(300);
  49  |     const lowPageText = await page.locator("body").textContent() ?? "";
  50  |     const lowAmounts = (lowPageText.match(/₹[\d,]+/g) ?? [])
  51  |       .map(s => parseInt(s.replace(/[₹,]/g, ""), 10))
  52  |       .filter(n => n > 0 && n < 1_000_000); // monthly in-hand range
  53  | 
  54  |     // High CTC
  55  |     await ctcField.fill("3000000");
  56  |     await ctcField.press("Tab");
  57  |     await page.waitForTimeout(300);
  58  |     const highPageText = await page.locator("body").textContent() ?? "";
  59  |     const highAmounts = (highPageText.match(/₹[\d,]+/g) ?? [])
  60  |       .map(s => parseInt(s.replace(/[₹,]/g, ""), 10))
  61  |       .filter(n => n > 0 && n < 1_000_000);
  62  | 
  63  |     if (lowAmounts.length > 0 && highAmounts.length > 0) {
  64  |       // Max monthly in-hand at 30L should exceed max at 6L
  65  |       expect(Math.max(...highAmounts)).toBeGreaterThan(Math.max(...lowAmounts));
  66  |     }
  67  |     await assertNoError(page);
  68  |   });
  69  | 
  70  |   test("old regime at very high income shows more tax than new regime", async ({ page }) => {
  71  |     await page.goto(ROUTES.SALARY);
  72  |     await page.waitForLoadState("networkidle");
  73  | 
  74  |     const ctcField = page.getByRole("spinbutton").first();
  75  |     await ctcField.fill("5000000");
  76  |     await ctcField.press("Tab");
  77  |     await page.waitForTimeout(200);
  78  | 
  79  |     // Read new regime tax (default)
  80  |     const newPageText = await page.locator("body").textContent() ?? "";
  81  | 
  82  |     // Switch to old regime
  83  |     const oldBtn = page.getByRole("button", { name: /old/i }).first();
  84  |     if (await oldBtn.isVisible({ timeout: 2_000 }).catch(() => false)) {
  85  |       await oldBtn.click();
  86  |       await page.waitForTimeout(300);
  87  |       const oldPageText = await page.locator("body").textContent() ?? "";
  88  |       // Pages should differ — old regime has more tax at 50L
  89  |       expect(oldPageText).not.toBe(newPageText);
  90  |     }
  91  |     await assertNoError(page);
  92  |   });
  93  | 
  94  |   test("adding a deduction row reduces the effective in-hand shown", async ({ page }) => {
  95  |     await page.goto(ROUTES.SALARY);
  96  |     await page.waitForLoadState("networkidle");
  97  | 
  98  |     const ctcField = page.getByRole("spinbutton").first();
  99  |     await ctcField.fill("1500000");
  100 |     await ctcField.press("Tab");
  101 |     await page.waitForTimeout(200);
  102 | 
  103 |     const addBtn = page.getByRole("button", { name: /add.*deduction|add row/i }).first();
  104 |     if (await addBtn.isVisible({ timeout: 2_000 }).catch(() => false)) {
  105 |       const textBefore = await page.locator("body").textContent();
  106 |       await addBtn.click();
  107 |       const amountField = page.getByRole("spinbutton").last();
  108 |       if (await amountField.isVisible({ timeout: 1_000 }).catch(() => false)) {
  109 |         await amountField.fill("5000");
  110 |         await amountField.press("Tab");
  111 |         await page.waitForTimeout(300);
  112 |         const textAfter = await page.locator("body").textContent();
  113 |         // Text should change (deduction affects totals)
  114 |         expect(textAfter).not.toBe(textBefore);
  115 |       }
  116 |     }
  117 |     await assertNoError(page);
  118 |   });
  119 | 
  120 |   test("variable pay shows in-hand result different from fixed-only", async ({ page }) => {
  121 |     await page.goto(ROUTES.SALARY);
  122 |     await page.waitForLoadState("networkidle");
  123 | 
  124 |     const fields = page.getByRole("spinbutton");
```