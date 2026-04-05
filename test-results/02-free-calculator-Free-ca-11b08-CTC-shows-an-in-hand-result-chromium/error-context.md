# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-free-calculator.spec.ts >> Free calculator — CTC input >> entering a valid CTC shows an in-hand result
- Location: tests/e2e/02-free-calculator.spec.ts:55:7

# Error details

```
TimeoutError: locator.clear: Timeout 8000ms exceeded.
Call log:
  - waiting for getByRole('spinbutton').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications alt+T"
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "InHand home" [ref=e4] [cursor=pointer]:
        - /url: /
        - img [ref=e5]
        - generic [ref=e6]:
          - generic [ref=e7]: InHand
          - generic [ref=e8]: Know your real take-home
      - navigation "Primary" [ref=e9]:
        - generic [ref=e10]:
          - link "Salary" [ref=e12] [cursor=pointer]:
            - /url: /salary
          - link "Offer comparison" [ref=e13] [cursor=pointer]:
            - /url: /login?from=%2Fpaywall%3Ftool%3Doffers
      - generic [ref=e15]:
        - link "Log in" [ref=e16] [cursor=pointer]:
          - /url: /login
        - link "Sign up" [ref=e17] [cursor=pointer]:
          - /url: /signup
  - main [ref=e18]:
    - generic [ref=e20]:
      - generic [ref=e21]:
        - paragraph [ref=e22]: Calculator
        - heading "Salary calculator" [level=1] [ref=e23]
        - paragraph [ref=e24]:
          - text: Enter
          - strong [ref=e25]: guaranteed
          - text: fixed pay and optional
          - strong [ref=e26]: variable
          - text: pay. The summary shows what is dependable every month versus an illustrative view if variable is included, plus
          - strong [ref=e27]: regime-aware TDS
          - text: tied to your Old / New regime selection.
      - generic [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]:
                - heading "Salary details" [level=2] [ref=e34]
                - paragraph [ref=e35]:
                  - text: Enter
                  - strong [ref=e36]: total CTC
                  - text: to fill fixed pay and clear variable; add variable if part of your package—or edit fixed/variable directly so totals stay in sync.
              - button "Reset salary details to defaults" [ref=e37] [cursor=pointer]:
                - img
                - text: Reset
            - generic [ref=e38]:
              - generic [ref=e39]: Tax regime
              - generic [ref=e41]:
                - button "Old regime Slabs + rebates (no 80C/HRA in this quick calc)" [ref=e42]:
                  - generic [ref=e43]: Old regime
                  - generic [ref=e44]: Slabs + rebates (no 80C/HRA in this quick calc)
                - button "New regime Lower slabs; standard deduction only here" [ref=e45]:
                  - generic [ref=e46]: New regime
                  - generic [ref=e47]: Lower slabs; standard deduction only here
              - paragraph [ref=e48]: In-hand and TDS estimates in the summary follow this regime (Old vs New slabs).
            - generic [ref=e49]:
              - generic "Total package (CTC)" [ref=e50]:
                - heading "Total package (CTC)" [level=3] [ref=e51]
                - paragraph [ref=e52]: Annual cash compensation (fixed + variable). Updating this sets fixed to the full amount and clears variable until you add it.
                - generic [ref=e53]:
                  - generic [ref=e54]: Annual CTC
                  - generic [ref=e55]:
                    - generic: ₹
                    - textbox "Annual total CTC" [ref=e56]: 18,00,000.00
                  - paragraph [ref=e57]: Fixed ₹18,00,000 + variable ₹0 = ₹18,00,000
              - generic "Fixed pay" [ref=e58]:
                - heading "Fixed pay" [level=3] [ref=e59]
                - paragraph [ref=e60]: Core salary you can treat as dependable monthly cash (before statutory deductions and TDS).
                - generic [ref=e61]:
                  - generic [ref=e62]: Annual fixed pay
                  - generic [ref=e63]:
                    - generic: ₹
                    - textbox "Annual fixed pay" [ref=e64]: 18,00,000.00
              - generic "Variable pay" [ref=e65]:
                - heading "Variable pay" [level=3] [ref=e66]
                - paragraph [ref=e67]: Variable CTC, performance bonus, or incentives—often not paid every month and not guaranteed. We still spread it over 12 months for an "illustrative" in-hand next to your fixed-only number.
                - generic [ref=e68]:
                  - generic [ref=e69]: Annual variable pay (expected)
                  - generic [ref=e70]:
                    - generic: ₹
                    - textbox "Annual variable pay" [ref=e71]: "0.00"
              - generic [ref=e72]:
                - paragraph [ref=e73]: Standard monthly deductions
                - generic [ref=e74]:
                  - generic [ref=e75]:
                    - generic [ref=e76]: Professional tax
                    - generic [ref=e77]:
                      - generic: ₹
                      - textbox "Monthly professional tax" [ref=e78]: "200.00"
                  - generic [ref=e79]:
                    - generic [ref=e80]: Employee PF
                    - generic [ref=e81]:
                      - generic: ₹
                      - textbox "Monthly employee PF" [ref=e82]: 1,800.00
                  - generic [ref=e83]:
                    - generic [ref=e84]: Employer PF (monthly)
                    - generic [ref=e85]:
                      - generic: ₹
                      - textbox "Monthly employer PF contribution" [ref=e86]: 1,800.00
                    - paragraph [ref=e87]: Does not reduce in-hand; shown in the composition chart as part of your package.
              - button "Add deduction" [ref=e89]:
                - img [ref=e90]
                - text: Add deduction
          - generic [ref=e92]:
            - generic [ref=e93]:
              - generic [ref=e94]:
                - img [ref=e95]
                - text: Premium
              - img [ref=e98]
            - heading "Unlock detailed salary breakdown" [level=2] [ref=e100]
            - paragraph [ref=e101]: Get a more precise read on your compensation with component-level breakup and deeper payroll insights—when you are ready to go further.
            - list [ref=e125]:
              - listitem [ref=e126]:
                - generic [ref=e128]: View component-level breakup and allowances in context
              - listitem [ref=e129]:
                - generic [ref=e131]: Understand deductions and cash path with richer detail
              - listitem [ref=e132]:
                - generic [ref=e134]: Connect this salary to premium planning when you upgrade
            - generic [ref=e135]:
              - button "Unlock Premium" [ref=e136] [cursor=pointer]
              - button "Compare Free & Premium plans" [ref=e137] [cursor=pointer]
        - complementary [ref=e138]:
          - generic [ref=e140]:
            - generic [ref=e141]:
              - generic [ref=e142]:
                - paragraph [ref=e143]: Summary
                - heading "Estimated in-hand" [level=2] [ref=e144]
              - generic "Income tax calculated using the New regime" [ref=e145]: New regime
            - paragraph [ref=e146]: Guaranteed figures use fixed pay only—what you can typically count on each month. Illustrative numbers add variable pay spread over 12 months; they are a broader estimate only (variable may be lumpy, conditional, or not guaranteed).
            - generic [ref=e147]:
              - generic [ref=e148]:
                - paragraph [ref=e149]: Guaranteed monthly in-hand
                - paragraph [ref=e150]: Fixed pay only — dependable baseline
                - paragraph [ref=e151]: ₹1,35,433
              - generic [ref=e154]:
                - paragraph [ref=e155]: Illustrative monthly in-hand
                - paragraph [ref=e156]: Including variable, averaged per month
                - paragraph [ref=e157]: ₹1,35,433
              - generic [ref=e160]:
                - paragraph [ref=e161]: Guaranteed annual in-hand
                - paragraph [ref=e162]: Fixed pay basis, ×12
                - paragraph [ref=e163]: ₹16,25,196
              - generic [ref=e166]:
                - paragraph [ref=e167]: Illustrative annual in-hand
                - paragraph [ref=e168]: Including variable, full year view
                - paragraph [ref=e169]: ₹16,25,196
            - generic [ref=e172]:
              - paragraph [ref=e173]: Regime-aware TDS estimate
              - paragraph [ref=e174]:
                - text: Income tax below follows the
                - generic [ref=e175]: New regime
                - text: slabs used in this calculator (standard deduction; no 80C/HRA in this quick view). Same regime applies to both guaranteed and illustrative views—only the gross base changes when variable is included.
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - term [ref=e178]: Monthly tax (fixed gross)
                  - definition [ref=e179]: ₹12,567
                - generic [ref=e180]:
                  - term [ref=e181]: Annual (fixed)
                  - definition [ref=e182]: ₹1,50,800
              - generic [ref=e183]:
                - generic [ref=e184]: "Effective rate on gross:"
                - generic [ref=e185]: Fixed 8.4%
            - generic [ref=e186]:
              - generic [ref=e187]: Live estimate
              - generic [ref=e188]: Updates as you edit fixed, variable, deductions, or regime.
          - complementary "New tax regime breakdown for FY 2025-26" [ref=e190]:
            - generic [ref=e192]:
              - paragraph [ref=e193]: New regime · FY 2025-26
              - paragraph [ref=e194]: AY 2026-27 · resident slabs = in-app TDS basis
              - paragraph [ref=e195]: New regime — seven concessional slabs; no separate deduction stack in this model beyond std. deduction.
              - generic [ref=e197]:
                - generic [ref=e198]:
                  - generic [ref=e199]: Slab (₹/yr)
                  - generic [ref=e200]: Rate
                - list [ref=e201]:
                  - listitem [ref=e202]:
                    - generic [ref=e203]: Up to ₹4,00,000
                    - generic [ref=e204]: Nil
                  - listitem [ref=e205]:
                    - generic [ref=e206]: ₹4,00,001 – ₹8,00,000
                    - generic [ref=e207]: 5%
                  - listitem [ref=e208]:
                    - generic [ref=e209]: ₹8,00,001 – ₹12,00,000
                    - generic [ref=e210]: 10%
                  - listitem [ref=e211]:
                    - generic [ref=e212]: ₹12,00,001 – ₹16,00,000
                    - generic [ref=e213]: 15%
                  - listitem [ref=e214]:
                    - generic [ref=e215]: ₹16,00,001 – ₹20,00,000
                    - generic [ref=e216]: 20%
                  - listitem [ref=e217]:
                    - generic [ref=e218]: ₹20,00,001 – ₹24,00,000
                    - generic [ref=e219]: 25%
                  - listitem [ref=e220]:
                    - generic [ref=e221]: Above ₹24,00,000
                    - generic [ref=e222]: 30%
                - generic [ref=e223]:
                  - paragraph [ref=e224]: FY 2025-26 reference. In-hand and tax above follow these slabs after ₹75,000 standard deduction.
                  - paragraph [ref=e225]: Slab rates shown are before cess; your summary applies 4% cess and eligible rebate.
            - generic [ref=e227]:
              - paragraph [ref=e228]: "Taxable: cash minus std. deduction ₹75,000. · TDS: slabs + 4% cess; 87A if below ₹12,00,000."
              - paragraph [ref=e229]: Indicative — not tax advice.
          - generic [ref=e231]:
            - heading "Package composition" [level=3] [ref=e232]
            - paragraph [ref=e233]: Uses the same monthly basis as your illustrative in-hand (fixed + variable gross + employer PF). Visual split only—not a payslip.
            - 'img "Package split: take-home, deductions including tax, employer PF" [ref=e234]'
            - generic [ref=e238]:
              - img [ref=e240]
              - list [ref=e244]:
                - listitem [ref=e245]:
                  - generic [ref=e248]:
                    - paragraph [ref=e249]: Take-home
                    - paragraph [ref=e250]: of monthly viz. total
                  - generic [ref=e251]: 89%
                - listitem [ref=e252]:
                  - generic [ref=e255]:
                    - paragraph [ref=e256]: Deductions + tax
                    - paragraph [ref=e257]: of monthly viz. total
                  - generic [ref=e258]: 10%
                - listitem [ref=e259]:
                  - generic [ref=e262]:
                    - paragraph [ref=e263]: Employer PF
                    - paragraph [ref=e264]: in package (viz. total)
                  - generic [ref=e265]: 1%
          - region "Got two offers? See which one actually pays more." [ref=e267]:
            - paragraph [ref=e268]: Offer comparison
            - heading "Got two offers? See which one actually pays more." [level=2] [ref=e269]
            - paragraph [ref=e270]: Stop guessing. Paste both CTCs—see in-hand, tax, and first-year value side by side before the call.
            - generic [ref=e271]:
              - generic [ref=e272]:
                - generic:
                  - generic:
                    - paragraph: HRA / mo
                    - paragraph: ₹21.6K
                  - generic:
                    - paragraph: PF (employee)
                    - paragraph: 11.2%
                  - generic:
                    - paragraph: Gratuity (yr)
                    - paragraph: ₹4.3L
                  - generic:
                    - paragraph: Variable weight
                    - paragraph: 16.8%
                - generic [ref=e274]:
                  - generic [ref=e275]:
                    - paragraph [ref=e276]: Sample comparison · not your data
                    - generic [ref=e277]:
                      - paragraph [ref=e278]: Offer A
                      - paragraph [ref=e279]: Unicorn
                      - paragraph [ref=e280]: ₹38 LPA
                    - generic [ref=e281]:
                      - paragraph [ref=e282]: Offer B
                      - paragraph [ref=e283]: MNC India
                      - paragraph [ref=e284]: ₹36 LPA
                  - table [ref=e285]:
                    - rowgroup [ref=e286]:
                      - row [ref=e287]:
                        - rowheader [ref=e288]: In-hand / mo
                        - cell [ref=e289]: ₹2,12,800
                        - cell [ref=e290]: ₹2,05,400
                      - row [ref=e291]:
                        - rowheader [ref=e292]: Est. tax / mo
                        - cell [ref=e293]: ₹61.0K
                        - cell [ref=e294]: ₹57.3K
                      - row [ref=e295]:
                        - rowheader [ref=e296]: 1st year value
                        - cell [ref=e297]: ₹28.4L
                        - cell [ref=e298]: ₹27.1L
                      - row [ref=e299]:
                        - rowheader [ref=e300]: Lens
                        - cell [ref=e301]: ESOP notional incl. · +₹1.3L
                - generic:
                  - generic:
                    - paragraph: Joining bonus
                    - paragraph: ₹1.9L
                  - generic:
                    - paragraph: ESOP (1Y notional)
                    - paragraph: ₹2.4L
                  - generic:
                    - paragraph: TDS effective
                    - paragraph: 21.7%
                  - generic:
                    - paragraph: Tax regime
                    - paragraph: Old
              - generic [ref=e302]:
                - paragraph: Premium unlocks live offer comparison.
                - button "Compare My Offers" [ref=e303] [cursor=pointer]:
                  - text: Compare My Offers
                  - img
      - generic [ref=e305]:
        - generic [ref=e306]:
          - paragraph [ref=e307]: Premium planning
          - heading "What you can do with this salary" [level=2] [ref=e308]
          - paragraph [ref=e309]: Forecasts, debt fit, and monthly allocation build on your in-hand estimate—available on Premium when you are ready.
        - generic [ref=e310]:
          - generic [ref=e312]:
            - generic [ref=e313]:
              - generic [ref=e314]:
                - img [ref=e316]
                - generic [ref=e319]:
                  - img [ref=e320]
                  - text: Premium
              - heading "Wealth Forecast" [level=3] [ref=e323]
              - paragraph [ref=e324]: See how your salary can turn into savings and net worth over the next few years.
            - button "Go Premium" [ref=e333] [cursor=pointer]:
              - text: Go Premium
              - img
          - generic [ref=e335]:
            - generic [ref=e336]:
              - generic [ref=e337]:
                - img [ref=e339]
                - generic [ref=e341]:
                  - img [ref=e342]
                  - text: Premium
              - heading "EMI Analyzer" [level=3] [ref=e345]
              - paragraph [ref=e346]: Check what EMI is realistically affordable based on your actual in-hand salary.
            - button "Go Premium" [ref=e355] [cursor=pointer]:
              - text: Go Premium
              - img
          - generic [ref=e357]:
            - generic [ref=e358]:
              - generic [ref=e359]:
                - img [ref=e361]
                - generic [ref=e366]:
                  - img [ref=e367]
                  - text: Premium
              - heading "Monthly Planner" [level=3] [ref=e370]
              - paragraph [ref=e371]: Turn your salary into a realistic monthly spending and savings plan.
            - button "Go Premium" [ref=e380] [cursor=pointer]:
              - text: Go Premium
              - img
  - contentinfo [ref=e381]:
    - generic [ref=e382]:
      - generic [ref=e383]:
        - generic [ref=e384]:
          - generic [ref=e385]:
            - img [ref=e386]
            - generic [ref=e387]:
              - generic [ref=e388]: InHand
              - generic [ref=e389]: Know your real take-home
          - paragraph [ref=e390]: Salary intelligence for Indian employees—in-hand clarity, breakups, tax context, and decisions without the fluff.
        - generic [ref=e391]:
          - generic [ref=e392]:
            - heading "Product" [level=4] [ref=e393]
            - list [ref=e394]:
              - listitem [ref=e395]:
                - link "Calculator" [ref=e396] [cursor=pointer]:
                  - /url: /salary
              - listitem [ref=e397]:
                - link "Pricing" [ref=e398] [cursor=pointer]:
                  - /url: /#pricing
              - listitem [ref=e399]:
                - link "Forecast" [ref=e400] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Dforecast
              - listitem [ref=e401]:
                - link "Compare" [ref=e402] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Doffers
          - generic [ref=e403]:
            - heading "Legal" [level=4] [ref=e404]
            - list [ref=e405]:
              - listitem [ref=e406]:
                - link "Privacy" [ref=e407] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e408]:
                - link "Terms" [ref=e409] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e410]:
                - link "Security" [ref=e411] [cursor=pointer]:
                  - /url: "#"
      - generic [ref=e412]:
        - paragraph [ref=e413]: Why InHand
        - heading "Real take-home clarity—not a generic CTC guess" [level=2] [ref=e414]
        - paragraph [ref=e415]: "Every figure below matches what the app actually helps you do: line-level salary math, regime choice, and privacy without bank linking."
        - list [ref=e416]:
          - listitem [ref=e417]:
            - generic [ref=e418]:
              - img [ref=e420]
              - heading "Full pay breakup" [level=3] [ref=e423]
              - paragraph [ref=e424]: PF, deductions, professional tax, and income-tax estimates on your CTC—so you see estimated monthly in-hand, not just the package headline.
          - listitem [ref=e425]:
            - generic [ref=e426]:
              - img [ref=e428]
              - heading "Old vs new regime" [level=3] [ref=e432]
              - paragraph [ref=e433]: Model Old and New tax treatment in the same flow. Handy for comparing which structure you’re using—not a full ITR filing wizard.
          - listitem [ref=e434]:
            - generic [ref=e435]:
              - img [ref=e437]
              - heading "Private by design" [level=3] [ref=e440]
              - paragraph [ref=e441]: Enter CTC and assumptions yourself—no bank linking or payroll import. On premium, you can keep a saved list on this device to jump between scenarios without retyping everything.
      - generic [ref=e442]:
        - generic [ref=e443]:
          - generic [ref=e444]:
            - img [ref=e445]
            - text: 256-BIT SSL
          - generic [ref=e448]:
            - img [ref=e449]
            - text: ISO CERTIFIED
          - generic [ref=e452]:
            - img [ref=e453]
            - text: GDPR COMPLIANT
        - paragraph [ref=e455]: © 2026 InHand. All rights reserved.
  - button "Open Next.js Dev Tools" [ref=e461] [cursor=pointer]:
    - img [ref=e462]
  - alert [ref=e465]
```

# Test source

```ts
  1   | /**
  2   |  * 02-free-calculator.spec.ts
  3   |  *
  4   |  * Tests for the free-tier salary calculator at /salary.
  5   |  * Covers CTC input, fixed/variable split, deduction rows, and live output cards.
  6   |  *
  7   |  * Runs in default mode (no NEXT_PUBLIC_ACCESS_MODE=premium).
  8   |  */
  9   | 
  10  | import { test, expect } from "@playwright/test";
  11  | import { SALARY, ROUTES } from "./fixtures/salary-data";
  12  | import { assertNoError } from "./helpers";
  13  | 
  14  | const BASE = ROUTES.SALARY;
  15  | 
  16  | test.describe("Free calculator — page structure", () => {
  17  |   test.beforeEach(async ({ page }) => {
  18  |     await page.goto(BASE);
  19  |     await page.waitForLoadState("networkidle");
  20  |   });
  21  | 
  22  |   test("page loads without errors", async ({ page }) => {
  23  |     await assertNoError(page);
  24  |   });
  25  | 
  26  |   test("CTC input field is visible", async ({ page }) => {
  27  |     const ctcInput = page
  28  |       .locator('input[name*="ctc" i], input[name*="CTC"], input[placeholder*="CTC"], input[placeholder*="salary"]')
  29  |       .or(page.getByRole("spinbutton").first());
  30  |     await expect(ctcInput.first()).toBeVisible();
  31  |   });
  32  | 
  33  |   test("tax regime selector is present (old/new)", async ({ page }) => {
  34  |     const oldBtn = page.getByText(/old\s*regime/i).or(page.getByRole("button", { name: /old/i })).first();
  35  |     const newBtn = page.getByText(/new\s*regime/i).or(page.getByRole("button", { name: /new/i })).first();
  36  |     const hasOld = await oldBtn.isVisible().catch(() => false);
  37  |     const hasNew = await newBtn.isVisible().catch(() => false);
  38  |     expect(hasOld || hasNew).toBe(true);
  39  |   });
  40  | 
  41  |   test("in-hand result section is present", async ({ page }) => {
  42  |     const resultSection = page
  43  |       .getByText(/in.hand|monthly.*pay|take.home/i)
  44  |       .first();
  45  |     await expect(resultSection).toBeVisible({ timeout: 8_000 });
  46  |   });
  47  | });
  48  | 
  49  | test.describe("Free calculator — CTC input", () => {
  50  |   test.beforeEach(async ({ page }) => {
  51  |     await page.goto(BASE);
  52  |     await page.waitForLoadState("networkidle");
  53  |   });
  54  | 
  55  |   test("entering a valid CTC shows an in-hand result", async ({ page }) => {
  56  |     const ctcField = page.getByRole("spinbutton").first();
> 57  |     await ctcField.clear();
      |                    ^ TimeoutError: locator.clear: Timeout 8000ms exceeded.
  58  |     await ctcField.fill("1200000");
  59  |     await ctcField.press("Tab");
  60  |     // Any number or currency symbol should appear in a result card
  61  |     await expect(page.getByText(/₹|monthly|in.hand/i).first()).toBeVisible({ timeout: 8_000 });
  62  |   });
  63  | 
  64  |   test("clearing CTC to 0 does not crash the page", async ({ page }) => {
  65  |     const ctcField = page.getByRole("spinbutton").first();
  66  |     await ctcField.fill("0");
  67  |     await ctcField.press("Tab");
  68  |     await assertNoError(page);
  69  |   });
  70  | 
  71  |   test("entering very large CTC (1 crore) does not crash", async ({ page }) => {
  72  |     const ctcField = page.getByRole("spinbutton").first();
  73  |     await ctcField.fill("10000000");
  74  |     await ctcField.press("Tab");
  75  |     await assertNoError(page);
  76  |   });
  77  | 
  78  |   test("entering negative values does not crash", async ({ page }) => {
  79  |     const ctcField = page.getByRole("spinbutton").first();
  80  |     await ctcField.fill("-500000");
  81  |     await ctcField.press("Tab");
  82  |     await assertNoError(page);
  83  |   });
  84  | 
  85  |   test("entering non-numeric text is rejected or cleared", async ({ page }) => {
  86  |     const ctcField = page.getByRole("spinbutton").first();
  87  |     await ctcField.fill("abc");
  88  |     await ctcField.press("Tab");
  89  |     await assertNoError(page);
  90  |   });
  91  | });
  92  | 
  93  | test.describe("Free calculator — fixed and variable split", () => {
  94  |   test.beforeEach(async ({ page }) => {
  95  |     await page.goto(BASE);
  96  |     await page.waitForLoadState("networkidle");
  97  |   });
  98  | 
  99  |   test("fixed pay field is visible and accepts input", async ({ page }) => {
  100 |     const fields = page.getByRole("spinbutton");
  101 |     const count = await fields.count();
  102 |     expect(count).toBeGreaterThanOrEqual(1);
  103 |     if (count >= 2) {
  104 |       await fields.nth(1).fill("1000000");
  105 |       await assertNoError(page);
  106 |     }
  107 |   });
  108 | 
  109 |   test("setting fixed pay adjusts variable derivation", async ({ page }) => {
  110 |     const fields = page.getByRole("spinbutton");
  111 |     const count = await fields.count();
  112 |     if (count >= 3) {
  113 |       await fields.first().fill("1500000"); // total CTC
  114 |       await fields.first().press("Tab");
  115 |       await fields.nth(1).fill("1200000"); // fixed
  116 |       await fields.nth(1).press("Tab");
  117 |       // variable should be auto-derived (300000)
  118 |       await assertNoError(page);
  119 |     }
  120 |   });
  121 | 
  122 |   test("in-hand excluding variable < in-hand including variable when variable > 0", async ({ page }) => {
  123 |     const fields = page.getByRole("spinbutton");
  124 |     if (await fields.count() >= 3) {
  125 |       await fields.nth(2).fill("200000"); // variable
  126 |       await fields.nth(2).press("Tab");
  127 |       // The two in-hand values should differ
  128 |       await assertNoError(page);
  129 |     }
  130 |   });
  131 | });
  132 | 
  133 | test.describe("Free calculator — tax regime switching", () => {
  134 |   test.beforeEach(async ({ page }) => {
  135 |     await page.goto(BASE);
  136 |     await page.waitForLoadState("networkidle");
  137 |     // Enter a salary first
  138 |     const ctcField = page.getByRole("spinbutton").first();
  139 |     await ctcField.fill("1500000");
  140 |     await ctcField.press("Tab");
  141 |   });
  142 | 
  143 |   test("switching from new to old regime updates results without error", async ({ page }) => {
  144 |     const oldBtn = page.getByText(/old/i).filter({ hasText: /regime/i }).or(
  145 |       page.getByRole("button", { name: /old/i })
  146 |     ).first();
  147 |     if (await oldBtn.isVisible()) {
  148 |       await oldBtn.click();
  149 |       await assertNoError(page);
  150 |     }
  151 |   });
  152 | 
  153 |   test("switching from old to new regime updates results without error", async ({ page }) => {
  154 |     const newBtn = page.getByText(/new/i).filter({ hasText: /regime/i }).or(
  155 |       page.getByRole("button", { name: /new/i })
  156 |     ).first();
  157 |     if (await newBtn.isVisible()) {
```