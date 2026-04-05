# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-access-control.spec.ts >> Access control — unauthenticated user >> unauthenticated user visiting /profile is redirected to login
- Location: tests/e2e/03-access-control.spec.ts:29:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
        - link "Salary" [ref=e12] [cursor=pointer]:
          - /url: /salary
      - generic [ref=e14]:
        - link "Log in" [ref=e15] [cursor=pointer]:
          - /url: /login
        - link "Sign up" [ref=e16] [cursor=pointer]:
          - /url: /signup
  - main [ref=e17]:
    - generic [ref=e18]:
      - link "InHand home" [ref=e20] [cursor=pointer]:
        - /url: /
        - img [ref=e21]
        - generic [ref=e22]: InHand
        - generic [ref=e23]: Know your real take-home
      - generic [ref=e24]:
        - heading "Sign in" [level=1] [ref=e25]
        - paragraph [ref=e26]: Use your work email to continue to your salary workspace.
        - generic [ref=e27]:
          - generic [ref=e28]:
            - generic [ref=e29]: Email
            - textbox "Email" [ref=e30]
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: Password
              - link "Forgot password?" [ref=e34] [cursor=pointer]:
                - /url: /forgot-password
            - textbox "Password" [ref=e35]
          - button "Sign in" [ref=e36] [cursor=pointer]
      - generic [ref=e37]:
        - text: Don't have an account?
        - link "Sign up" [ref=e38] [cursor=pointer]:
          - /url: /signup
  - contentinfo [ref=e39]:
    - generic [ref=e40]:
      - generic [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]:
            - img [ref=e44]
            - generic [ref=e45]:
              - generic [ref=e46]: InHand
              - generic [ref=e47]: Know your real take-home
          - paragraph [ref=e48]: Salary intelligence for Indian employees—in-hand clarity, breakups, tax context, and decisions without the fluff.
        - generic [ref=e49]:
          - generic [ref=e50]:
            - heading "Product" [level=4] [ref=e51]
            - list [ref=e52]:
              - listitem [ref=e53]:
                - link "Calculator" [ref=e54] [cursor=pointer]:
                  - /url: /salary
              - listitem [ref=e55]:
                - link "Pricing" [ref=e56] [cursor=pointer]:
                  - /url: /#pricing
              - listitem [ref=e57]:
                - link "Forecast" [ref=e58] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Dforecast
              - listitem [ref=e59]:
                - link "Compare" [ref=e60] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Doffers
          - generic [ref=e61]:
            - heading "Legal" [level=4] [ref=e62]
            - list [ref=e63]:
              - listitem [ref=e64]:
                - link "Privacy" [ref=e65] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e66]:
                - link "Terms" [ref=e67] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e68]:
                - link "Security" [ref=e69] [cursor=pointer]:
                  - /url: "#"
      - generic [ref=e70]:
        - paragraph [ref=e71]: Why InHand
        - heading "Real take-home clarity—not a generic CTC guess" [level=2] [ref=e72]
        - paragraph [ref=e73]: "Every figure below matches what the app actually helps you do: line-level salary math, regime choice, and privacy without bank linking."
        - list [ref=e74]:
          - listitem [ref=e75]:
            - generic [ref=e76]:
              - img [ref=e78]
              - heading "Full pay breakup" [level=3] [ref=e81]
              - paragraph [ref=e82]: PF, deductions, professional tax, and income-tax estimates on your CTC—so you see estimated monthly in-hand, not just the package headline.
          - listitem [ref=e83]:
            - generic [ref=e84]:
              - img [ref=e86]
              - heading "Old vs new regime" [level=3] [ref=e90]
              - paragraph [ref=e91]: Model Old and New tax treatment in the same flow. Handy for comparing which structure you’re using—not a full ITR filing wizard.
          - listitem [ref=e92]:
            - generic [ref=e93]:
              - img [ref=e95]
              - heading "Private by design" [level=3] [ref=e98]
              - paragraph [ref=e99]: Enter CTC and assumptions yourself—no bank linking or payroll import. On premium, you can keep a saved list on this device to jump between scenarios without retyping everything.
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - img [ref=e103]
            - text: 256-BIT SSL
          - generic [ref=e106]:
            - img [ref=e107]
            - text: ISO CERTIFIED
          - generic [ref=e110]:
            - img [ref=e111]
            - text: GDPR COMPLIANT
        - paragraph [ref=e113]: © 2026 InHand. All rights reserved.
  - button "Open Next.js Dev Tools" [ref=e119] [cursor=pointer]:
    - img [ref=e120]
  - alert [ref=e123]
```

# Test source

```ts
  1   | /**
  2   |  * 03-access-control.spec.ts
  3   |  *
  4   |  * Tests that premium-gated routes are protected for unauthenticated / free-tier users.
  5   |  * These run without NEXT_PUBLIC_ACCESS_MODE=premium so routes are gated.
  6   |  */
  7   | 
  8   | import { test, expect } from "@playwright/test";
  9   | import { ROUTES } from "./fixtures/salary-data";
  10  | import { assertNoError } from "./helpers";
  11  | 
  12  | const PREMIUM_ROUTES = [
  13  |   ROUTES.BREAKDOWN,
  14  |   ROUTES.LIFESTYLE,
  15  |   ROUTES.OFFER_COMPARISON,
  16  |   ROUTES.WEALTH_FORECAST,
  17  |   ROUTES.EMI_ANALYZER,
  18  |   ROUTES.HISTORY,
  19  | ];
  20  | 
  21  | test.describe("Access control — unauthenticated user", () => {
  22  |   test("unauthenticated user visiting /salary sees free calculator", async ({ page }) => {
  23  |     await page.goto(ROUTES.SALARY);
  24  |     await assertNoError(page);
  25  |     // Should not be on breakdown
  26  |     expect(page.url()).not.toContain("breakdown");
  27  |   });
  28  | 
  29  |   test("unauthenticated user visiting /profile is redirected to login", async ({ page }) => {
  30  |     await page.goto(ROUTES.PROFILE);
  31  |     await page.waitForURL(url => url.includes("/login") || url.includes("/signup"), { timeout: 10_000 }).catch(() => {});
  32  |     const url = page.url();
  33  |     const redirected = url.includes("/login") || url.includes("/signup") || url.includes("/paywall");
> 34  |     expect(redirected).toBe(true);
      |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  35  |   });
  36  | 
  37  |   for (const route of PREMIUM_ROUTES) {
  38  |     test(`unauthenticated user visiting ${route} is redirected or shown paywall`, async ({ page }) => {
  39  |       await page.goto(route);
  40  |       await page.waitForLoadState("networkidle");
  41  |       const url = page.url();
  42  |       // Should redirect to login or paywall — NOT stay on the premium route with full content
  43  |       const isGated =
  44  |         url.includes("/login") ||
  45  |         url.includes("/paywall") ||
  46  |         url.includes("/signup") ||
  47  |         url.includes("/salary") ||
  48  |         await page.locator('[role="dialog"]').isVisible().catch(() => false);
  49  |       // At minimum there should be no server error
  50  |       await assertNoError(page);
  51  |       expect(isGated).toBe(true);
  52  |     });
  53  |   }
  54  | });
  55  | 
  56  | test.describe("Access control — public routes remain accessible", () => {
  57  |   const publicRoutes = [
  58  |     ROUTES.LANDING,
  59  |     ROUTES.SALARY,
  60  |     ROUTES.LOGIN,
  61  |     ROUTES.SIGNUP,
  62  |     "/forgot-password",
  63  |     ROUTES.PAYWALL,
  64  |   ];
  65  | 
  66  |   for (const route of publicRoutes) {
  67  |     test(`${route} is accessible without login`, async ({ page }) => {
  68  |       await page.goto(route);
  69  |       await assertNoError(page);
  70  |       // Should not redirect to login (the page itself IS login for auth routes)
  71  |       if (route !== ROUTES.LOGIN && route !== ROUTES.SIGNUP && route !== "/forgot-password") {
  72  |         expect(page.url()).not.toContain("/login");
  73  |       }
  74  |     });
  75  |   }
  76  | });
  77  | 
  78  | test.describe("Access control — premium mode bypass", () => {
  79  |   // These tests verify behavior when NEXT_PUBLIC_ACCESS_MODE=premium is set.
  80  |   // They use process.env to skip if the test server is not in premium mode.
  81  |   test("salary page in premium mode shows CTC form instead of free calculator", async ({ page }) => {
  82  |     if (process.env.NEXT_PUBLIC_ACCESS_MODE !== "premium") {
  83  |       test.skip();
  84  |     }
  85  |     await page.goto(ROUTES.SALARY);
  86  |     await assertNoError(page);
  87  |   });
  88  | });
  89  | 
  90  | test.describe("Access control — paywall interaction", () => {
  91  |   test("paywall page renders without server error", async ({ page }) => {
  92  |     await page.goto(ROUTES.PAYWALL);
  93  |     await assertNoError(page);
  94  |   });
  95  | 
  96  |   test("paywall page shows pricing or plan information", async ({ page }) => {
  97  |     await page.goto(ROUTES.PAYWALL);
  98  |     const pricingText = page
  99  |       .getByText(/premium|plan|pricing|upgrade|₹|free/i)
  100 |       .first();
  101 |     await expect(pricingText).toBeVisible({ timeout: 8_000 });
  102 |   });
  103 | });
  104 | 
```