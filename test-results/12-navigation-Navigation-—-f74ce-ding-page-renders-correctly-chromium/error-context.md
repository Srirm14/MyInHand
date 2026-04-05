# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12-navigation.spec.ts >> Navigation — responsive behavior >> mobile viewport — landing page renders correctly
- Location: tests/e2e/12-navigation.spec.ts:199:7

# Error details

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('body')
Expected pattern: not /500|Internal Server Error/i
Received string: "InHandKnow your real take-homeSalaryOffer comparisonLog inSign upFree · No sign-up · No bank linkingYour CTC is ₹18L.What actually hits your bank?InHand calculates your exact monthly take-home—after PF, TDS, professional tax, and every deduction. No guessing, no HR spreadsheet.No sign-up neededNo bank linkingOld & new regimeCalculate my take-homeCompare Free & PremiumExample result₹1,42,500monthly in-hand on ₹18L CTCTax regimeOld vs Newside-by-side, you pick the better oneYour privacyZero linkno bank, no Aadhaar—just your CTCSound familiar?Every salary decision comes down to one question“Got a ₹20L offer—what actually lands monthly?”InHand shows your exact take-home in seconds.“Two offers on the table. Which pays more net?”Offer comparison normalises both to the same assumptions.“Can I afford the EMI after all deductions?”EMI stress-test runs against real in-hand, not CTC.“Old regime or new—which saves me more tax?”Both regimes calculated side-by-side, difference shown clearly.How it worksYour real salary in 3 steps0101Enter your CTCType in your annual CTC. Add basic, HRA, or let InHand auto-split it.0202Pick your regimeOld or new tax regime—InHand calculates TDS for both so you can compare.0303See your in-handInstant monthly take-home with a full breakup—PF, tax, every line item.Everything you need to understand your salaryFrom take-home to long-term wealth—tools built around your actual numbers, not HR's CTC sheet.In-hand & breakupMonthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes.Open calculator→Offer comparisonTwo or three offers, same assumptions. See which one actually pays more after deductions.Compare offers→Wealth outlookSee how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc.Open forecast→EMI stress-testLoan payments checked against in-hand after all deductions—not headline CTC.Stress-test EMI→Offer comparisonGot two offers? See which one actually pays more.Stop guessing. Paste both CTCs and instantly see real in-hand, tax drag, and first-year value — side by side. Know your answer before the call.HRA / mo₹21.6KPF (employee)11.2%Gratuity (yr)₹4.3LVariable weight16.8%Special allowance₹43KLTA (annual)₹100KSample comparison · not your dataOffer AUnicorn₹38 LPAOffer BMNC India₹36 LPAIn-hand / mo₹2,12,800₹2,05,400Est. tax / mo₹61.0K₹57.3K1st year value₹28.4L₹27.1LLensESOP notional incl. · +₹1.3LJoining bonus₹1.9LESOP (1Y notional)₹2.4LTDS effective21.7%Tax regimeOldCity tierT2.2Employer PF₹32K/moPremium unlocks live offer comparison.Compare My OffersPlans built around how you actually use salaryStart free with credible in-hand estimates. Upgrade when you want breakdowns, comparisons, and planning tools that stay tied to your numbers—not generic advice.MonthlyYearlySave 20%Yearly is 20% less than twelve monthly payments.EssentialsFree₹0/ monthFull calculator—no card required.Editable fixed & variable salary inputsEstimated in-hand (guaranteed vs illustrative)Monthly & annual deduction / TDS-style viewRegime-aware tax estimate (Old / New)Simple result cards & package compositionBasic salary view—fast, no sign-in requiredContinue freeRecommendedFull planningPremium₹159/ monthBilled ₹1,910 per year · save 20% vs monthlyEverything in FreeDetailed salary breakdown & component tableOffer comparison (in-hand, tax, first-year value)Wealth forecast (multi-year scenarios)EMI analyzer vs your in-handMonthly lifestyle planner & surplus viewDeeper insights across planning screensUpgrade to PremiumCompare at a glanceCapabilityFreePremiumBasic salary calculatorFixed vs variable in-hand clarityRegime-aware TDS-style estimatesComponent-wise breakdownOffer comparisonWealth forecastEMI affordability analyzerMonthly plannerDedicated planning workspace (breakdown, lifestyle, tools)Straightforward & transparentYou control what you enter. Estimates are for planning, not tax filing. Premium tools read from the same salary context you already trust in the free calculator—so upgrades feel like a natural next step, not a reset.No ads in product flowsNo bank linking requiredBuilt for Indian payroll contextStart free, no account neededKnow your real salary before you decideFree breakdown instantly. Upgrade to premium when you need offer comparison, forecasts, and EMI planning—all tied to your actual in-hand, not CTC.Calculate freeView premium plans →InHandKnow your real take-homeSalary intelligence for Indian employees—in-hand clarity, breakups, tax context, and decisions without the fluff.ProductCalculatorPricingForecastCompareLegalPrivacyTermsSecurityWhy InHandReal take-home clarity—not a generic CTC guessEvery figure below matches what the app actually helps you do: line-level salary math, regime choice, and privacy without bank linking.Full pay breakupPF, deductions, professional tax, and income-tax estimates on your CTC—so you see estimated monthly in-hand, not just the package headline.Old vs new regimeModel Old and New tax treatment in the same flow. Handy for comparing which structure you’re using—not a full ITR filing wizard.Private by designEnter CTC and assumptions yourself—no bank linking or payroll import. On premium, you can keep a saved list on this device to jump between scenarios without retyping everything. 256-BIT SSL ISO CERTIFIED GDPR COMPLIANT© 2026 InHand. All rights reserved."
Timeout: 8000ms

Call log:
  - Expect "not toContainText" with timeout 8000ms
  - waiting for locator('body')
    12 × locator resolved to <body class="min-h-full flex flex-col bg-neutral-bg">…</body>
       - unexpected value "InHandKnow your real take-homeSalaryOffer comparisonLog inSign upFree · No sign-up · No bank linkingYour CTC is ₹18L.What actually hits your bank?InHand calculates your exact monthly take-home—after PF, TDS, professional tax, and every deduction. No guessing, no HR spreadsheet.No sign-up neededNo bank linkingOld & new regimeCalculate my take-homeCompare Free & PremiumExample result₹1,42,500monthly in-hand on ₹18L CTCTax regimeOld vs Newside-by-side, you pick the better oneYour privacyZero linkno bank, no Aadhaar—just your CTCSound familiar?Every salary decision comes down to one question“Got a ₹20L offer—what actually lands monthly?”InHand shows your exact take-home in seconds.“Two offers on the table. Which pays more net?”Offer comparison normalises both to the same assumptions.“Can I afford the EMI after all deductions?”EMI stress-test runs against real in-hand, not CTC.“Old regime or new—which saves me more tax?”Both regimes calculated side-by-side, difference shown clearly.How it worksYour real salary in 3 steps0101Enter your CTCType in your annual CTC. Add basic, HRA, or let InHand auto-split it.0202Pick your regimeOld or new tax regime—InHand calculates TDS for both so you can compare.0303See your in-handInstant monthly take-home with a full breakup—PF, tax, every line item.Everything you need to understand your salaryFrom take-home to long-term wealth—tools built around your actual numbers, not HR's CTC sheet.In-hand & breakupMonthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes.Open calculator→Offer comparisonTwo or three offers, same assumptions. See which one actually pays more after deductions.Compare offers→Wealth outlookSee how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc.Open forecast→EMI stress-testLoan payments checked against in-hand after all deductions—not headline CTC.Stress-test EMI→Offer comparisonGot two offers? See which one actually pays more.Stop guessing. Paste both CTCs and instantly see real in-hand, tax drag, and first-year value — side by side. Know your answer before the call.HRA / mo₹21.6KPF (employee)11.2%Gratuity (yr)₹4.3LVariable weight16.8%Special allowance₹43KLTA (annual)₹100KSample comparison · not your dataOffer AUnicorn₹38 LPAOffer BMNC India₹36 LPAIn-hand / mo₹2,12,800₹2,05,400Est. tax / mo₹61.0K₹57.3K1st year value₹28.4L₹27.1LLensESOP notional incl. · +₹1.3LJoining bonus₹1.9LESOP (1Y notional)₹2.4LTDS effective21.7%Tax regimeOldCity tierT2.2Employer PF₹32K/moPremium unlocks live offer comparison.Compare My OffersPlans built around how you actually use salaryStart free with credible in-hand estimates. Upgrade when you want breakdowns, comparisons, and planning tools that stay tied to your numbers—not generic advice.MonthlyYearlySave 20%Yearly is 20% less than twelve monthly payments.EssentialsFree₹0/ monthFull calculator—no card required.Editable fixed & variable salary inputsEstimated in-hand (guaranteed vs illustrative)Monthly & annual deduction / TDS-style viewRegime-aware tax estimate (Old / New)Simple result cards & package compositionBasic salary view—fast, no sign-in requiredContinue freeRecommendedFull planningPremium₹159/ monthBilled ₹1,910 per year · save 20% vs monthlyEverything in FreeDetailed salary breakdown & component tableOffer comparison (in-hand, tax, first-year value)Wealth forecast (multi-year scenarios)EMI analyzer vs your in-handMonthly lifestyle planner & surplus viewDeeper insights across planning screensUpgrade to PremiumCompare at a glanceCapabilityFreePremiumBasic salary calculatorFixed vs variable in-hand clarityRegime-aware TDS-style estimatesComponent-wise breakdownOffer comparisonWealth forecastEMI affordability analyzerMonthly plannerDedicated planning workspace (breakdown, lifestyle, tools)Straightforward & transparentYou control what you enter. Estimates are for planning, not tax filing. Premium tools read from the same salary context you already trust in the free calculator—so upgrades feel like a natural next step, not a reset.No ads in product flowsNo bank linking requiredBuilt for Indian payroll contextStart free, no account neededKnow your real salary before you decideFree breakdown instantly. Upgrade to premium when you need offer comparison, forecasts, and EMI planning—all tied to your actual in-hand, not CTC.Calculate freeView premium plans →InHandKnow your real take-homeSalary intelligence for Indian employees—in-hand clarity, breakups, tax context, and decisions without the fluff.ProductCalculatorPricingForecastCompareLegalPrivacyTermsSecurityWhy InHandReal take-home clarity—not a generic CTC guessEvery figure below matches what the app actually helps you do: line-level salary math, regime choice, and privacy without bank linking.Full pay breakupPF, deductions, professional tax, and income-tax estimates on your CTC—so you see estimated monthly in-hand, not just the package headline.Old vs new regimeModel Old and New tax treatment in the same flow. Handy for comparing which structure you’re using—not a full ITR filing wizard.Private by designEnter CTC and assumptions yourself—no bank linking or payroll import. On premium, you can keep a saved list on this device to jump between scenarios without retyping everything. 256-BIT SSL ISO CERTIFIED GDPR COMPLIANT© 2026 InHand. All rights reserved."

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
        - generic [ref=e7]: InHand
      - generic [ref=e9]:
        - link "Log in" [ref=e10] [cursor=pointer]:
          - /url: /login
        - link "Sign up" [ref=e11] [cursor=pointer]:
          - /url: /signup
  - main [ref=e12]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - paragraph [ref=e18]: Free · No sign-up · No bank linking
        - heading "Your CTC is ₹18L. What actually hits your bank ?" [level=1] [ref=e19]:
          - text: Your CTC is ₹18L.
          - text: What actually hits
          - generic [ref=e20]:
            - text: your bank
            - img [ref=e21]
          - text: "?"
        - paragraph [ref=e23]: InHand calculates your exact monthly take-home—after PF, TDS, professional tax, and every deduction. No guessing, no HR spreadsheet.
        - generic [ref=e24]:
          - generic [ref=e25]:
            - img [ref=e26]
            - text: No sign-up needed
          - generic [ref=e29]:
            - img [ref=e30]
            - text: No bank linking
          - generic [ref=e33]:
            - img [ref=e34]
            - text: Old & new regime
        - generic [ref=e37]:
          - link "Calculate my take-home" [ref=e39] [cursor=pointer]:
            - /url: /salary
            - text: Calculate my take-home
            - img
          - button "Compare Free & Premium" [ref=e41] [cursor=pointer]
      - generic [ref=e43]:
        - generic [ref=e44]:
          - paragraph [ref=e45]: Example result
          - paragraph [ref=e46]: ₹1,42,500
          - paragraph [ref=e47]: monthly in-hand on ₹18L CTC
        - generic [ref=e48]:
          - paragraph [ref=e49]: Tax regime
          - paragraph [ref=e50]: Old vs New
          - paragraph [ref=e51]: side-by-side, you pick the better one
        - generic [ref=e52]:
          - paragraph [ref=e53]: Your privacy
          - paragraph [ref=e54]: Zero link
          - paragraph [ref=e55]: no bank, no Aadhaar—just your CTC
      - generic [ref=e56]:
        - generic [ref=e57]:
          - paragraph [ref=e58]: Sound familiar?
          - heading "Every salary decision comes down to one question" [level=2] [ref=e59]
        - generic [ref=e60]:
          - generic [ref=e61]:
            - paragraph [ref=e62]: “Got a ₹20L offer—what actually lands monthly?”
            - paragraph [ref=e63]:
              - img [ref=e64]
              - text: InHand shows your exact take-home in seconds.
          - generic [ref=e67]:
            - paragraph [ref=e68]: “Two offers on the table. Which pays more net?”
            - paragraph [ref=e69]:
              - img [ref=e70]
              - text: Offer comparison normalises both to the same assumptions.
          - generic [ref=e73]:
            - paragraph [ref=e74]: “Can I afford the EMI after all deductions?”
            - paragraph [ref=e75]:
              - img [ref=e76]
              - text: EMI stress-test runs against real in-hand, not CTC.
          - generic [ref=e79]:
            - paragraph [ref=e80]: “Old regime or new—which saves me more tax?”
            - paragraph [ref=e81]:
              - img [ref=e82]
              - text: Both regimes calculated side-by-side, difference shown clearly.
      - generic [ref=e85]:
        - generic [ref=e86]:
          - paragraph [ref=e87]: How it works
          - heading "Your real salary in 3 steps" [level=2] [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e90]:
            - paragraph: "01"
            - paragraph [ref=e91]: "01"
            - heading "Enter your CTC" [level=3] [ref=e92]
            - paragraph [ref=e93]: Type in your annual CTC. Add basic, HRA, or let InHand auto-split it.
          - generic [ref=e94]:
            - paragraph: "02"
            - paragraph [ref=e95]: "02"
            - heading "Pick your regime" [level=3] [ref=e96]
            - paragraph [ref=e97]: Old or new tax regime—InHand calculates TDS for both so you can compare.
          - generic [ref=e98]:
            - paragraph: "03"
            - paragraph [ref=e99]: "03"
            - heading "See your in-hand" [level=3] [ref=e100]
            - paragraph [ref=e101]: Instant monthly take-home with a full breakup—PF, tax, every line item.
      - generic [ref=e102]:
        - generic [ref=e103]:
          - heading "Everything you need to understand your salary" [level=2] [ref=e104]
          - paragraph [ref=e105]: From take-home to long-term wealth—tools built around your actual numbers, not HR's CTC sheet.
        - generic [ref=e106]:
          - link "In-hand & breakup Monthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes. Open calculator→" [ref=e108] [cursor=pointer]:
            - /url: /salary
            - img [ref=e110]
            - heading "In-hand & breakup" [level=3] [ref=e112]
            - paragraph [ref=e113]: Monthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes.
            - paragraph [ref=e114]: Open calculator→
          - link "Offer comparison Two or three offers, same assumptions. See which one actually pays more after deductions. Compare offers→" [ref=e116] [cursor=pointer]:
            - /url: /login?from=%2Fpaywall%3Ftool%3Doffers
            - img [ref=e118]
            - heading "Offer comparison" [level=3] [ref=e122]
            - paragraph [ref=e123]: Two or three offers, same assumptions. See which one actually pays more after deductions.
            - paragraph [ref=e124]: Compare offers→
          - link "Wealth outlook See how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc. Open forecast→" [ref=e126] [cursor=pointer]:
            - /url: /login?from=%2Fpaywall%3Ftool%3Dforecast
            - img [ref=e128]
            - heading "Wealth outlook" [level=3] [ref=e131]
            - paragraph [ref=e132]: See how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc.
            - paragraph [ref=e133]: Open forecast→
          - link "EMI stress-test Loan payments checked against in-hand after all deductions—not headline CTC. Stress-test EMI→" [ref=e135] [cursor=pointer]:
            - /url: /login?from=%2Fpaywall%3Ftool%3Demi
            - img [ref=e137]
            - heading "EMI stress-test" [level=3] [ref=e140]
            - paragraph [ref=e141]: Loan payments checked against in-hand after all deductions—not headline CTC.
            - paragraph [ref=e142]: Stress-test EMI→
      - region "Got two offers? See which one actually pays more." [ref=e144]:
        - paragraph [ref=e145]: Offer comparison
        - heading "Got two offers? See which one actually pays more." [level=2] [ref=e146]
        - paragraph [ref=e147]: Stop guessing. Paste both CTCs and instantly see real in-hand, tax drag, and first-year value — side by side. Know your answer before the call.
        - generic [ref=e148]:
          - generic [ref=e149]:
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
              - generic:
                - paragraph: Special allowance
                - paragraph: ₹43K
              - generic:
                - paragraph: LTA (annual)
                - paragraph: ₹100K
            - generic [ref=e151]:
              - generic [ref=e152]:
                - paragraph [ref=e153]: Sample comparison · not your data
                - generic [ref=e154]:
                  - paragraph [ref=e155]: Offer A
                  - paragraph [ref=e156]: Unicorn
                  - paragraph [ref=e157]: ₹38 LPA
                - generic [ref=e158]:
                  - paragraph [ref=e159]: Offer B
                  - paragraph [ref=e160]: MNC India
                  - paragraph [ref=e161]: ₹36 LPA
              - table [ref=e162]:
                - rowgroup [ref=e163]:
                  - row [ref=e164]:
                    - rowheader [ref=e165]: In-hand / mo
                    - cell [ref=e166]: ₹2,12,800
                    - cell [ref=e167]: ₹2,05,400
                  - row [ref=e168]:
                    - rowheader [ref=e169]: Est. tax / mo
                    - cell [ref=e170]: ₹61.0K
                    - cell [ref=e171]: ₹57.3K
                  - row [ref=e172]:
                    - rowheader [ref=e173]: 1st year value
                    - cell [ref=e174]: ₹28.4L
                    - cell [ref=e175]: ₹27.1L
                  - row [ref=e176]:
                    - rowheader [ref=e177]: Lens
                    - cell [ref=e178]: ESOP notional incl. · +₹1.3L
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
              - generic:
                - paragraph: City tier
                - paragraph: T2.2
              - generic:
                - paragraph: Employer PF
                - paragraph: ₹32K/mo
          - generic [ref=e179]:
            - paragraph: Premium unlocks live offer comparison.
            - button "Compare My Offers" [ref=e180] [cursor=pointer]:
              - text: Compare My Offers
              - img
      - region "Plans built around how you actually use salary" [ref=e182]:
        - generic [ref=e183]:
          - heading "Plans built around how you actually use salary" [level=2] [ref=e184]
          - paragraph [ref=e185]: Start free with credible in-hand estimates. Upgrade when you want breakdowns, comparisons, and planning tools that stay tied to your numbers—not generic advice.
        - generic [ref=e186]:
          - generic [ref=e187]:
            - button "Monthly" [ref=e188]
            - button "Yearly Save 20%" [ref=e189]:
              - generic [ref=e190]:
                - generic [ref=e191]: Yearly
                - generic [ref=e192]: Save 20%
          - paragraph [ref=e193]: Yearly is 20% less than twelve monthly payments.
        - generic [ref=e194]:
          - generic [ref=e195]:
            - paragraph [ref=e196]: Essentials
            - heading "Free" [level=3] [ref=e197]
            - paragraph [ref=e198]:
              - generic [ref=e199]: ₹0
              - generic [ref=e200]: / month
            - paragraph [ref=e201]: Full calculator—no card required.
            - list [ref=e202]:
              - listitem [ref=e203]:
                - img [ref=e204]
                - generic [ref=e206]: Editable fixed & variable salary inputs
              - listitem [ref=e207]:
                - img [ref=e208]
                - generic [ref=e210]: Estimated in-hand (guaranteed vs illustrative)
              - listitem [ref=e211]:
                - img [ref=e212]
                - generic [ref=e214]: Monthly & annual deduction / TDS-style view
              - listitem [ref=e215]:
                - img [ref=e216]
                - generic [ref=e218]: Regime-aware tax estimate (Old / New)
              - listitem [ref=e219]:
                - img [ref=e220]
                - generic [ref=e222]: Simple result cards & package composition
              - listitem [ref=e223]:
                - img [ref=e224]
                - generic [ref=e226]: Basic salary view—fast, no sign-in required
            - link "Continue free" [ref=e227] [cursor=pointer]:
              - /url: /salary
          - generic [ref=e228]:
            - generic [ref=e229]: Recommended
            - paragraph [ref=e230]: Full planning
            - heading "Premium" [level=3] [ref=e231]
            - paragraph [ref=e232]:
              - generic [ref=e233]: ₹159
              - generic [ref=e234]: / month
            - paragraph [ref=e235]:
              - text: Billed
              - generic [ref=e236]: ₹1,910
              - text: per year · save 20% vs monthly
            - list [ref=e237]:
              - listitem [ref=e238]:
                - img [ref=e239]
                - generic [ref=e241]: Everything in Free
              - listitem [ref=e242]:
                - img [ref=e243]
                - generic [ref=e245]: Detailed salary breakdown & component table
              - listitem [ref=e246]:
                - img [ref=e247]
                - generic [ref=e249]: Offer comparison (in-hand, tax, first-year value)
              - listitem [ref=e250]:
                - img [ref=e251]
                - generic [ref=e253]: Wealth forecast (multi-year scenarios)
              - listitem [ref=e254]:
                - img [ref=e255]
                - generic [ref=e257]: EMI analyzer vs your in-hand
              - listitem [ref=e258]:
                - img [ref=e259]
                - generic [ref=e261]: Monthly lifestyle planner & surplus view
              - listitem [ref=e262]:
                - img [ref=e263]
                - generic [ref=e265]: Deeper insights across planning screens
            - link "Upgrade to Premium" [ref=e266] [cursor=pointer]:
              - /url: /login?from=%2Fpaywall
        - generic [ref=e267]:
          - heading "Compare at a glance" [level=3] [ref=e268]
          - table [ref=e270]:
            - rowgroup [ref=e271]:
              - row "Capability Free Premium" [ref=e272]:
                - columnheader "Capability" [ref=e273]
                - columnheader "Free" [ref=e274]
                - columnheader "Premium" [ref=e275]
            - rowgroup [ref=e276]:
              - row "Basic salary calculator Included Included" [ref=e277]:
                - rowheader "Basic salary calculator" [ref=e278]
                - cell "Included" [ref=e279]:
                  - img "Included" [ref=e280]
                - cell "Included" [ref=e282]:
                  - img "Included" [ref=e283]
              - row "Fixed vs variable in-hand clarity Included Included" [ref=e285]:
                - rowheader "Fixed vs variable in-hand clarity" [ref=e286]
                - cell "Included" [ref=e287]:
                  - img "Included" [ref=e288]
                - cell "Included" [ref=e290]:
                  - img "Included" [ref=e291]
              - row "Regime-aware TDS-style estimates Included Included" [ref=e293]:
                - rowheader "Regime-aware TDS-style estimates" [ref=e294]
                - cell "Included" [ref=e295]:
                  - img "Included" [ref=e296]
                - cell "Included" [ref=e298]:
                  - img "Included" [ref=e299]
              - row "Component-wise breakdown Not included Included" [ref=e301]:
                - rowheader "Component-wise breakdown" [ref=e302]
                - cell "Not included" [ref=e303]:
                  - img "Not included" [ref=e304]
                - cell "Included" [ref=e305]:
                  - img "Included" [ref=e306]
              - row "Offer comparison Not included Included" [ref=e308]:
                - rowheader "Offer comparison" [ref=e309]
                - cell "Not included" [ref=e310]:
                  - img "Not included" [ref=e311]
                - cell "Included" [ref=e312]:
                  - img "Included" [ref=e313]
              - row "Wealth forecast Not included Included" [ref=e315]:
                - rowheader "Wealth forecast" [ref=e316]
                - cell "Not included" [ref=e317]:
                  - img "Not included" [ref=e318]
                - cell "Included" [ref=e319]:
                  - img "Included" [ref=e320]
              - row "EMI affordability analyzer Not included Included" [ref=e322]:
                - rowheader "EMI affordability analyzer" [ref=e323]
                - cell "Not included" [ref=e324]:
                  - img "Not included" [ref=e325]
                - cell "Included" [ref=e326]:
                  - img "Included" [ref=e327]
              - row "Monthly planner Not included Included" [ref=e329]:
                - rowheader "Monthly planner" [ref=e330]
                - cell "Not included" [ref=e331]:
                  - img "Not included" [ref=e332]
                - cell "Included" [ref=e333]:
                  - img "Included" [ref=e334]
              - row "Dedicated planning workspace (breakdown, lifestyle, tools) Not included Included" [ref=e336]:
                - rowheader "Dedicated planning workspace (breakdown, lifestyle, tools)" [ref=e337]
                - cell "Not included" [ref=e338]:
                  - img "Not included" [ref=e339]
                - cell "Included" [ref=e340]:
                  - img "Included" [ref=e341]
        - generic [ref=e343]:
          - heading "Straightforward & transparent" [level=3] [ref=e344]
          - paragraph [ref=e345]: You control what you enter. Estimates are for planning, not tax filing. Premium tools read from the same salary context you already trust in the free calculator—so upgrades feel like a natural next step, not a reset.
          - list [ref=e346]:
            - listitem [ref=e347]: No ads in product flows
            - listitem [ref=e348]: No bank linking required
            - listitem [ref=e349]: Built for Indian payroll context
      - generic [ref=e351]:
        - paragraph [ref=e352]: Start free, no account needed
        - heading "Know your real salary before you decide" [level=2] [ref=e353]
        - paragraph [ref=e354]: Free breakdown instantly. Upgrade to premium when you need offer comparison, forecasts, and EMI planning—all tied to your actual in-hand, not CTC.
        - generic [ref=e355]:
          - link "Calculate free" [ref=e356] [cursor=pointer]:
            - /url: /salary
            - text: Calculate free
            - img
          - button "View premium plans →" [ref=e357]
  - contentinfo [ref=e358]:
    - generic [ref=e359]:
      - generic [ref=e360]:
        - generic [ref=e361]:
          - generic [ref=e362]:
            - img [ref=e363]
            - generic [ref=e364]:
              - generic [ref=e365]: InHand
              - generic [ref=e366]: Know your real take-home
          - paragraph [ref=e367]: Salary intelligence for Indian employees—in-hand clarity, breakups, tax context, and decisions without the fluff.
        - generic [ref=e368]:
          - generic [ref=e369]:
            - heading "Product" [level=4] [ref=e370]
            - list [ref=e371]:
              - listitem [ref=e372]:
                - link "Calculator" [ref=e373] [cursor=pointer]:
                  - /url: /salary
              - listitem [ref=e374]:
                - link "Pricing" [ref=e375] [cursor=pointer]:
                  - /url: /#pricing
              - listitem [ref=e376]:
                - link "Forecast" [ref=e377] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Dforecast
              - listitem [ref=e378]:
                - link "Compare" [ref=e379] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Doffers
          - generic [ref=e380]:
            - heading "Legal" [level=4] [ref=e381]
            - list [ref=e382]:
              - listitem [ref=e383]:
                - link "Privacy" [ref=e384] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e385]:
                - link "Terms" [ref=e386] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e387]:
                - link "Security" [ref=e388] [cursor=pointer]:
                  - /url: "#"
      - generic [ref=e389]:
        - paragraph [ref=e390]: Why InHand
        - heading "Real take-home clarity—not a generic CTC guess" [level=2] [ref=e391]
        - paragraph [ref=e392]: "Every figure below matches what the app actually helps you do: line-level salary math, regime choice, and privacy without bank linking."
        - list [ref=e393]:
          - listitem [ref=e394]:
            - generic [ref=e395]:
              - img [ref=e397]
              - heading "Full pay breakup" [level=3] [ref=e400]
              - paragraph [ref=e401]: PF, deductions, professional tax, and income-tax estimates on your CTC—so you see estimated monthly in-hand, not just the package headline.
          - listitem [ref=e402]:
            - generic [ref=e403]:
              - img [ref=e405]
              - heading "Old vs new regime" [level=3] [ref=e409]
              - paragraph [ref=e410]: Model Old and New tax treatment in the same flow. Handy for comparing which structure you’re using—not a full ITR filing wizard.
          - listitem [ref=e411]:
            - generic [ref=e412]:
              - img [ref=e414]
              - heading "Private by design" [level=3] [ref=e417]
              - paragraph [ref=e418]: Enter CTC and assumptions yourself—no bank linking or payroll import. On premium, you can keep a saved list on this device to jump between scenarios without retyping everything.
      - generic [ref=e419]:
        - generic [ref=e420]:
          - generic [ref=e421]:
            - img [ref=e422]
            - text: 256-BIT SSL
          - generic [ref=e425]:
            - img [ref=e426]
            - text: ISO CERTIFIED
          - generic [ref=e429]:
            - img [ref=e430]
            - text: GDPR COMPLIANT
        - paragraph [ref=e432]: © 2026 InHand. All rights reserved.
  - button "Open Next.js Dev Tools" [ref=e438] [cursor=pointer]:
    - img [ref=e439]
  - alert [ref=e442]
```

# Test source

```ts
  29  |  */
  30  | export async function selectTaxRegime(page: Page, regime: "old" | "new") {
  31  |   const label = regime === "new" ? /new/i : /old/i;
  32  |   const btn = page.getByRole("button", { name: label }).or(
  33  |     page.getByRole("radio", { name: label })
  34  |   ).first();
  35  |   await btn.click();
  36  | }
  37  | 
  38  | /**
  39  |  * Select a city tier from the segmented selector or dropdown.
  40  |  */
  41  | export async function selectCityTier(page: Page, tier: "tier1" | "tier2" | "tier3") {
  42  |   const labels: Record<string, RegExp> = {
  43  |     tier1: /tier\s*1|metro/i,
  44  |     tier2: /tier\s*2|urban/i,
  45  |     tier3: /tier\s*3|semi/i,
  46  |   };
  47  |   await page.getByRole("button", { name: labels[tier] }).first().click();
  48  | }
  49  | 
  50  | // ─── Premium form helpers ─────────────────────────────────────────────────────
  51  | 
  52  | /**
  53  |  * Fill the premium CTC input form and submit.
  54  |  * Requires NEXT_PUBLIC_ACCESS_MODE=premium.
  55  |  */
  56  | export async function fillPremiumCTCForm(
  57  |   page: Page,
  58  |   opts: {
  59  |     ctc: number;
  60  |     tier?: "tier1" | "tier2" | "tier3";
  61  |     regime?: "old" | "new";
  62  |     name?: string;
  63  |   }
  64  | ) {
  65  |   const { ctc, tier = "tier1", regime = "new", name } = opts;
  66  | 
  67  |   if (name) {
  68  |     const nameField = page.locator('input[name="fullName"], input[placeholder*="name"]').first();
  69  |     if (await nameField.isVisible()) {
  70  |       await nameField.fill(name);
  71  |     }
  72  |   }
  73  | 
  74  |   await fillCTC(page, ctc);
  75  |   await selectCityTier(page, tier);
  76  |   await selectTaxRegime(page, regime);
  77  | }
  78  | 
  79  | /**
  80  |  * Click the "Show estimated breakdown" button on the CTC form.
  81  |  */
  82  | export async function submitCTCForm(page: Page) {
  83  |   await page.getByRole("button", { name: /show.*breakdown|calculate|estimate/i }).click();
  84  |   await page.waitForURL(/breakdown/);
  85  |   await page.waitForLoadState("networkidle");
  86  | }
  87  | 
  88  | // ─── Breakdown helpers ────────────────────────────────────────────────────────
  89  | 
  90  | /**
  91  |  * Wait for the salary breakdown page to finish loading KPI cards.
  92  |  */
  93  | export async function waitForBreakdown(page: Page) {
  94  |   await page.waitForSelector('[data-testid="kpi-monthly-inhand"], .stat-card, [class*="stat"], h2, h3', { timeout: 10_000 });
  95  | }
  96  | 
  97  | /**
  98  |  * Read displayed currency value from a stat card or element containing the selector.
  99  |  */
  100 | export async function readCurrencyValue(locator: Locator): Promise<string> {
  101 |   const text = await locator.textContent();
  102 |   return text?.replace(/[^\d,₹.]/g, "").trim() ?? "";
  103 | }
  104 | 
  105 | // ─── Assertion helpers ────────────────────────────────────────────────────────
  106 | 
  107 | /**
  108 |  * Assert a page heading is visible.
  109 |  */
  110 | export async function assertHeading(page: Page, pattern: RegExp | string) {
  111 |   await expect(
  112 |     page.getByRole("heading", { name: pattern })
  113 |       .or(page.locator("h1, h2").filter({ hasText: pattern }))
  114 |       .first()
  115 |   ).toBeVisible({ timeout: 8_000 });
  116 | }
  117 | 
  118 | /**
  119 |  * Assert that a given amount (as text pattern) appears somewhere on the page.
  120 |  */
  121 | export async function assertAmountVisible(page: Page, amountPattern: RegExp) {
  122 |   await expect(page.getByText(amountPattern).first()).toBeVisible({ timeout: 5_000 });
  123 | }
  124 | 
  125 | /**
  126 |  * Assert that the page is not showing an error boundary or 404.
  127 |  */
  128 | export async function assertNoError(page: Page) {
> 129 |   await expect(page.locator("body")).not.toContainText(/500|Internal Server Error/i);
      |                                          ^ Error: expect(locator).not.toContainText(expected) failed
  130 |   await expect(page.locator("body")).not.toContainText(/Page not found|404/i);
  131 | }
  132 | 
  133 | // ─── EMI form helpers ─────────────────────────────────────────────────────────
  134 | 
  135 | export async function fillEMIForm(
  136 |   page: Page,
  137 |   opts: {
  138 |     principal: number;
  139 |     rate: number;
  140 |     tenureYears: number;
  141 |   }
  142 | ) {
  143 |   const principalField = page.locator('input[name="principal"], input[placeholder*="loan amount"], input[placeholder*="principal"]').first();
  144 |   const rateField = page.locator('input[name="rate"], input[placeholder*="interest"], input[placeholder*="rate"]').first();
  145 |   const tenureField = page.locator('input[name="tenure"], input[placeholder*="year"], input[placeholder*="tenure"]').first();
  146 | 
  147 |   await principalField.fill(String(opts.principal));
  148 |   await rateField.fill(String(opts.rate));
  149 |   await tenureField.fill(String(opts.tenureYears));
  150 |   await tenureField.press("Tab");
  151 | }
  152 | 
  153 | // ─── Lifestyle helpers ────────────────────────────────────────────────────────
  154 | 
  155 | export async function fillSlider(page: Page, sliderLabel: RegExp, value: number) {
  156 |   const input = page.locator("input[type=range]")
  157 |     .filter({ has: page.locator("..", { hasText: sliderLabel }) })
  158 |     .or(
  159 |       page.locator(`label:has-text("${sliderLabel}") + * input[type=range]`)
  160 |     )
  161 |     .first();
  162 | 
  163 |   await input.fill(String(value));
  164 |   await input.dispatchEvent("input");
  165 |   await input.dispatchEvent("change");
  166 | }
  167 | 
```