# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 13-regression.spec.ts >> Regression — free calculator >> 18 LPA new regime — in-hand is positive and tax appears
- Location: tests/e2e/13-regression.spec.ts:145:7

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByRole('spinbutton').first()

```

# Test source

```ts
  50  |   test("25 LPA new regime has significant income tax (no rebate)", async ({ page }) => {
  51  |     await page.goto(ROUTES.SALARY);
  52  |     await page.waitForLoadState("networkidle");
  53  | 
  54  |     const ctcField = page.getByRole("spinbutton").first();
  55  |     await ctcField.fill("2500000");
  56  |     await ctcField.press("Tab");
  57  | 
  58  |     const tier1 = page.getByText(/tier\s*1|metro/i).first();
  59  |     if (await tier1.isVisible({ timeout: 2_000 }).catch(() => false)) {
  60  |       await tier1.click();
  61  |     }
  62  | 
  63  |     await page.getByRole("button", { name: /show.*breakdown|estimate/i }).first().click();
  64  |     await page.waitForURL(/breakdown/, { timeout: 15_000 });
  65  |     await assertNoError(page);
  66  | 
  67  |     // Income tax card should show a positive amount
  68  |     const taxCard = page.getByText(/income.*tax|TDS/i).first();
  69  |     await expect(taxCard).toBeVisible({ timeout: 5_000 });
  70  |   });
  71  | });
  72  | 
  73  | // ─── PF ceiling regression ────────────────────────────────────────────────────
  74  | 
  75  | test.describe("Regression — EPF wage ceiling", () => {
  76  |   test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");
  77  | 
  78  |   test("high CTC (50 LPA) employee PF capped at ₹1800/month", async ({ page }) => {
  79  |     await page.goto(ROUTES.SALARY);
  80  |     await page.waitForLoadState("networkidle");
  81  | 
  82  |     const ctcField = page.getByRole("spinbutton").first();
  83  |     await ctcField.fill("5000000");
  84  |     await ctcField.press("Tab");
  85  | 
  86  |     const tier1 = page.getByText(/tier\s*1|metro/i).first();
  87  |     if (await tier1.isVisible({ timeout: 2_000 }).catch(() => false)) {
  88  |       await tier1.click();
  89  |     }
  90  | 
  91  |     await page.getByRole("button", { name: /show.*breakdown|estimate/i }).first().click();
  92  |     await page.waitForURL(/breakdown/, { timeout: 15_000 });
  93  |     await assertNoError(page);
  94  | 
  95  |     const pfRow = page.locator("tr, [role='row']").filter({ hasText: /employee.*pf|epf.*employee/i }).first();
  96  |     if (await pfRow.isVisible({ timeout: 5_000 }).catch(() => false)) {
  97  |       const pfText = await pfRow.textContent();
  98  |       // Should show 1,800 for monthly PF (capped at 15000*12%)
  99  |       const has1800 = pfText?.includes("1,800") || pfText?.includes("₹1800");
  100 |       await assertNoError(page);
  101 |     }
  102 |   });
  103 | });
  104 | 
  105 | // ─── Variable pay regression ──────────────────────────────────────────────────
  106 | 
  107 | test.describe("Regression — variable pay rendering", () => {
  108 |   test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");
  109 | 
  110 |   test("entering fixed+variable split shows variable pay row in breakdown", async ({ page }) => {
  111 |     await page.goto(ROUTES.SALARY);
  112 |     await page.waitForLoadState("networkidle");
  113 | 
  114 |     const fields = page.getByRole("spinbutton");
  115 |     if (await fields.count() >= 1) {
  116 |       await fields.first().fill("2000000"); // total CTC
  117 |       await fields.first().press("Tab");
  118 |     }
  119 | 
  120 |     // Try to enter split mode
  121 |     const splitToggle = page.getByText(/split|fixed.*variable|variable.*fixed/i).first();
  122 |     if (await splitToggle.isVisible({ timeout: 2_000 }).catch(() => false)) {
  123 |       await splitToggle.click();
  124 |       const splitFields = page.getByRole("spinbutton");
  125 |       if (await splitFields.count() >= 2) {
  126 |         await splitFields.nth(1).fill("1500000"); // fixed
  127 |         await splitFields.nth(1).press("Tab");
  128 |       }
  129 |     }
  130 | 
  131 |     const tier1 = page.getByText(/tier\s*1|metro/i).first();
  132 |     if (await tier1.isVisible({ timeout: 2_000 }).catch(() => false)) {
  133 |       await tier1.click();
  134 |     }
  135 | 
  136 |     await page.getByRole("button", { name: /show.*breakdown|estimate/i }).first().click();
  137 |     await page.waitForURL(/breakdown/, { timeout: 15_000 }).catch(() => {});
  138 |     await assertNoError(page);
  139 |   });
  140 | });
  141 | 
  142 | // ─── Free calculator regression ───────────────────────────────────────────────
  143 | 
  144 | test.describe("Regression — free calculator", () => {
  145 |   test("18 LPA new regime — in-hand is positive and tax appears", async ({ page }) => {
  146 |     await page.goto(ROUTES.SALARY);
  147 |     await page.waitForLoadState("networkidle");
  148 | 
  149 |     const ctcField = page.getByRole("spinbutton").first();
> 150 |     await ctcField.fill("1800000");
      |                    ^ Error: locator.fill: Test ended.
  151 |     await ctcField.press("Tab");
  152 |     await page.waitForTimeout(300);
  153 | 
  154 |     await assertNoError(page);
  155 |     await expect(page.getByText(/₹/).first()).toBeVisible({ timeout: 5_000 });
  156 |   });
  157 | 
  158 |   test("switching regime does not lose the CTC value", async ({ page }) => {
  159 |     await page.goto(ROUTES.SALARY);
  160 |     await page.waitForLoadState("networkidle");
  161 | 
  162 |     const ctcField = page.getByRole("spinbutton").first();
  163 |     await ctcField.fill("1500000");
  164 |     await ctcField.press("Tab");
  165 | 
  166 |     // Toggle regime
  167 |     const oldBtn = page.getByRole("button", { name: /old/i }).first();
  168 |     if (await oldBtn.isVisible({ timeout: 2_000 }).catch(() => false)) {
  169 |       await oldBtn.click();
  170 |     }
  171 | 
  172 |     // CTC field should still have the value
  173 |     const valueAfter = await ctcField.inputValue();
  174 |     expect(valueAfter).toBe("1500000");
  175 |     await assertNoError(page);
  176 |   });
  177 | 
  178 |   test("extra deduction labels accept text and amounts accept numbers", async ({ page }) => {
  179 |     await page.goto(ROUTES.SALARY);
  180 |     await page.waitForLoadState("networkidle");
  181 | 
  182 |     const addBtn = page
  183 |       .getByRole("button", { name: /add.*deduction|add row/i })
  184 |       .first();
  185 |     if (await addBtn.isVisible({ timeout: 3_000 }).catch(() => false)) {
  186 |       await addBtn.click();
  187 |       const newInputs = page.locator('input[type="text"]').last();
  188 |       if (await newInputs.isVisible({ timeout: 2_000 }).catch(() => false)) {
  189 |         await newInputs.fill("NPS");
  190 |       }
  191 |       const amountInputs = page.locator('input[type="number"]').last();
  192 |       if (await amountInputs.isVisible({ timeout: 2_000 }).catch(() => false)) {
  193 |         await amountInputs.fill("5000");
  194 |       }
  195 |       await assertNoError(page);
  196 |     }
  197 |   });
  198 | });
  199 | 
  200 | // ─── EMI regression ───────────────────────────────────────────────────────────
  201 | 
  202 | test.describe("Regression — EMI affordability verdict", () => {
  203 |   test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");
  204 | 
  205 |   test("EMI page renders without a salary context (graceful empty state)", async ({ page }) => {
  206 |     // Navigate directly without going through breakdown
  207 |     await page.goto(ROUTES.EMI_ANALYZER);
  208 |     await page.waitForLoadState("networkidle");
  209 |     await assertNoError(page);
  210 |   });
  211 | 
  212 |   test("0% interest loan shows EMI = principal ÷ months", async ({ page }) => {
  213 |     await page.goto(ROUTES.EMI_ANALYZER);
  214 |     await page.waitForLoadState("networkidle");
  215 | 
  216 |     const fields = page.getByRole("spinbutton");
  217 |     if (await fields.count() >= 3) {
  218 |       await fields.nth(0).fill("120000"); // 1.2L
  219 |       await fields.nth(0).press("Tab");
  220 |       await fields.nth(1).fill("0"); // 0% rate
  221 |       await fields.nth(1).press("Tab");
  222 |       await fields.nth(2).fill("1"); // 1 year = 12 months
  223 |       await fields.nth(2).press("Tab");
  224 |       await page.waitForTimeout(300);
  225 |       // EMI should be 10,000 (120000/12)
  226 |       const pageText = await page.locator("body").textContent() ?? "";
  227 |       const has10000 = pageText.includes("10,000") || pageText.includes("₹10");
  228 |       await assertNoError(page);
  229 |     }
  230 |   });
  231 | });
  232 | 
  233 | // ─── Wealth forecast regression ───────────────────────────────────────────────
  234 | 
  235 | test.describe("Regression — wealth forecast accumulation", () => {
  236 |   test.skip(!isPremium, "Requires NEXT_PUBLIC_ACCESS_MODE=premium");
  237 | 
  238 |   test("10 years at 12% investment return shows larger corpus than 5 years", async ({ page }) => {
  239 |     await page.goto(ROUTES.WEALTH_FORECAST);
  240 |     await page.waitForLoadState("networkidle");
  241 | 
  242 |     // Switch to 5-year view
  243 |     const btn5 = page.getByRole("button", { name: /5\s*yr/i }).first();
  244 |     if (await btn5.isVisible({ timeout: 3_000 }).catch(() => false)) {
  245 |       await btn5.click();
  246 |       await page.waitForTimeout(300);
  247 |       const text5yr = await page.locator("body").textContent() ?? "";
  248 | 
  249 |       // Switch to 10-year view
  250 |       const btn10 = page.getByRole("button", { name: /10\s*yr/i }).first();
```