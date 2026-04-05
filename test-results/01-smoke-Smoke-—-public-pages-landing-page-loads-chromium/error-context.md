# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01-smoke.spec.ts >> Smoke — public pages >> landing page loads
- Location: tests/e2e/01-smoke.spec.ts:13:7

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
        - paragraph [ref=e24]: Free · No sign-up · No bank linking
        - heading "Your CTC is ₹18L. What actually hits your bank ?" [level=1] [ref=e25]:
          - text: Your CTC is ₹18L.
          - text: What actually hits
          - generic [ref=e26]:
            - text: your bank
            - img [ref=e27]
          - text: "?"
        - paragraph [ref=e29]: InHand calculates your exact monthly take-home—after PF, TDS, professional tax, and every deduction. No guessing, no HR spreadsheet.
        - generic [ref=e30]:
          - generic [ref=e31]:
            - img [ref=e32]
            - text: No sign-up needed
          - generic [ref=e35]:
            - img [ref=e36]
            - text: No bank linking
          - generic [ref=e39]:
            - img [ref=e40]
            - text: Old & new regime
        - generic [ref=e43]:
          - link "Calculate my take-home" [ref=e45] [cursor=pointer]:
            - /url: /salary
            - text: Calculate my take-home
            - img
          - button "Compare Free & Premium" [ref=e47] [cursor=pointer]
      - generic [ref=e49]:
        - generic [ref=e50]:
          - paragraph [ref=e51]: Example result
          - paragraph [ref=e52]: ₹1,42,500
          - paragraph [ref=e53]: monthly in-hand on ₹18L CTC
        - generic [ref=e54]:
          - paragraph [ref=e55]: Tax regime
          - paragraph [ref=e56]: Old vs New
          - paragraph [ref=e57]: side-by-side, you pick the better one
        - generic [ref=e58]:
          - paragraph [ref=e59]: Your privacy
          - paragraph [ref=e60]: Zero link
          - paragraph [ref=e61]: no bank, no Aadhaar—just your CTC
      - generic [ref=e62]:
        - generic [ref=e63]:
          - paragraph [ref=e64]: Sound familiar?
          - heading "Every salary decision comes down to one question" [level=2] [ref=e65]
        - generic [ref=e66]:
          - generic [ref=e67]:
            - paragraph [ref=e68]: “Got a ₹20L offer—what actually lands monthly?”
            - paragraph [ref=e69]:
              - img [ref=e70]
              - text: InHand shows your exact take-home in seconds.
          - generic [ref=e73]:
            - paragraph [ref=e74]: “Two offers on the table. Which pays more net?”
            - paragraph [ref=e75]:
              - img [ref=e76]
              - text: Offer comparison normalises both to the same assumptions.
          - generic [ref=e79]:
            - paragraph [ref=e80]: “Can I afford the EMI after all deductions?”
            - paragraph [ref=e81]:
              - img [ref=e82]
              - text: EMI stress-test runs against real in-hand, not CTC.
          - generic [ref=e85]:
            - paragraph [ref=e86]: “Old regime or new—which saves me more tax?”
            - paragraph [ref=e87]:
              - img [ref=e88]
              - text: Both regimes calculated side-by-side, difference shown clearly.
      - generic [ref=e91]:
        - generic [ref=e92]:
          - paragraph [ref=e93]: How it works
          - heading "Your real salary in 3 steps" [level=2] [ref=e94]
        - generic [ref=e95]:
          - generic [ref=e96]:
            - paragraph: "01"
            - paragraph [ref=e97]: "01"
            - heading "Enter your CTC" [level=3] [ref=e98]
            - paragraph [ref=e99]: Type in your annual CTC. Add basic, HRA, or let InHand auto-split it.
          - generic [ref=e100]:
            - paragraph: "02"
            - paragraph [ref=e101]: "02"
            - heading "Pick your regime" [level=3] [ref=e102]
            - paragraph [ref=e103]: Old or new tax regime—InHand calculates TDS for both so you can compare.
          - generic [ref=e104]:
            - paragraph: "03"
            - paragraph [ref=e105]: "03"
            - heading "See your in-hand" [level=3] [ref=e106]
            - paragraph [ref=e107]: Instant monthly take-home with a full breakup—PF, tax, every line item.
      - generic [ref=e108]:
        - generic [ref=e109]:
          - heading "Everything you need to understand your salary" [level=2] [ref=e110]
          - paragraph [ref=e111]: From take-home to long-term wealth—tools built around your actual numbers, not HR's CTC sheet.
        - generic [ref=e112]:
          - link "In-hand & breakup Monthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes. Open calculator→" [ref=e114] [cursor=pointer]:
            - /url: /salary
            - img [ref=e116]
            - heading "In-hand & breakup" [level=3] [ref=e118]
            - paragraph [ref=e119]: Monthly take-home, PF, tax, and every line item—so you know exactly where the CTC goes.
            - paragraph [ref=e120]: Open calculator→
          - link "Offer comparison Two or three offers, same assumptions. See which one actually pays more after deductions. Compare offers→" [ref=e122] [cursor=pointer]:
            - /url: /login?from=%2Fpaywall%3Ftool%3Doffers
            - img [ref=e124]
            - heading "Offer comparison" [level=3] [ref=e128]
            - paragraph [ref=e129]: Two or three offers, same assumptions. See which one actually pays more after deductions.
            - paragraph [ref=e130]: Compare offers→
          - link "Wealth outlook See how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc. Open forecast→" [ref=e132] [cursor=pointer]:
            - /url: /login?from=%2Fpaywall%3Ftool%3Dforecast
            - img [ref=e134]
            - heading "Wealth outlook" [level=3] [ref=e137]
            - paragraph [ref=e138]: See how today's surplus might compound over 5, 10, or 20 years. Sketch your financial arc.
            - paragraph [ref=e139]: Open forecast→
          - link "EMI stress-test Loan payments checked against in-hand after all deductions—not headline CTC. Stress-test EMI→" [ref=e141] [cursor=pointer]:
            - /url: /login?from=%2Fpaywall%3Ftool%3Demi
            - img [ref=e143]
            - heading "EMI stress-test" [level=3] [ref=e146]
            - paragraph [ref=e147]: Loan payments checked against in-hand after all deductions—not headline CTC.
            - paragraph [ref=e148]: Stress-test EMI→
      - region "Got two offers? See which one actually pays more." [ref=e150]:
        - paragraph [ref=e151]: Offer comparison
        - heading "Got two offers? See which one actually pays more." [level=2] [ref=e152]
        - paragraph [ref=e153]: Stop guessing. Paste both CTCs and instantly see real in-hand, tax drag, and first-year value — side by side. Know your answer before the call.
        - generic [ref=e154]:
          - generic [ref=e155]:
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
            - generic [ref=e157]:
              - generic [ref=e158]:
                - paragraph [ref=e159]: Sample comparison · not your data
                - generic [ref=e160]:
                  - paragraph [ref=e161]: Offer A
                  - paragraph [ref=e162]: Unicorn
                  - paragraph [ref=e163]: ₹38 LPA
                - generic [ref=e164]:
                  - paragraph [ref=e165]: Offer B
                  - paragraph [ref=e166]: MNC India
                  - paragraph [ref=e167]: ₹36 LPA
              - table [ref=e168]:
                - rowgroup [ref=e169]:
                  - row [ref=e170]:
                    - rowheader [ref=e171]: In-hand / mo
                    - cell [ref=e172]: ₹2,12,800
                    - cell [ref=e173]: ₹2,05,400
                  - row [ref=e174]:
                    - rowheader [ref=e175]: Est. tax / mo
                    - cell [ref=e176]: ₹61.0K
                    - cell [ref=e177]: ₹57.3K
                  - row [ref=e178]:
                    - rowheader [ref=e179]: 1st year value
                    - cell [ref=e180]: ₹28.4L
                    - cell [ref=e181]: ₹27.1L
                  - row [ref=e182]:
                    - rowheader [ref=e183]: Lens
                    - cell [ref=e184]: ESOP notional incl. · +₹1.3L
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
          - generic [ref=e185]:
            - paragraph: Premium unlocks live offer comparison.
            - button "Compare My Offers" [ref=e186] [cursor=pointer]:
              - text: Compare My Offers
              - img
      - region "Plans built around how you actually use salary" [ref=e188]:
        - generic [ref=e189]:
          - heading "Plans built around how you actually use salary" [level=2] [ref=e190]
          - paragraph [ref=e191]: Start free with credible in-hand estimates. Upgrade when you want breakdowns, comparisons, and planning tools that stay tied to your numbers—not generic advice.
        - generic [ref=e192]:
          - generic [ref=e193]:
            - button "Monthly" [ref=e194]
            - button "Yearly Save 20%" [ref=e195]:
              - generic [ref=e196]:
                - generic [ref=e197]: Yearly
                - generic [ref=e198]: Save 20%
          - paragraph [ref=e199]: Yearly is 20% less than twelve monthly payments.
        - generic [ref=e200]:
          - generic [ref=e201]:
            - paragraph [ref=e202]: Essentials
            - heading "Free" [level=3] [ref=e203]
            - paragraph [ref=e204]:
              - generic [ref=e205]: ₹0
              - generic [ref=e206]: / month
            - paragraph [ref=e207]: Full calculator—no card required.
            - list [ref=e208]:
              - listitem [ref=e209]:
                - img [ref=e210]
                - generic [ref=e212]: Editable fixed & variable salary inputs
              - listitem [ref=e213]:
                - img [ref=e214]
                - generic [ref=e216]: Estimated in-hand (guaranteed vs illustrative)
              - listitem [ref=e217]:
                - img [ref=e218]
                - generic [ref=e220]: Monthly & annual deduction / TDS-style view
              - listitem [ref=e221]:
                - img [ref=e222]
                - generic [ref=e224]: Regime-aware tax estimate (Old / New)
              - listitem [ref=e225]:
                - img [ref=e226]
                - generic [ref=e228]: Simple result cards & package composition
              - listitem [ref=e229]:
                - img [ref=e230]
                - generic [ref=e232]: Basic salary view—fast, no sign-in required
            - link "Continue free" [ref=e233] [cursor=pointer]:
              - /url: /salary
          - generic [ref=e234]:
            - generic [ref=e235]: Recommended
            - paragraph [ref=e236]: Full planning
            - heading "Premium" [level=3] [ref=e237]
            - paragraph [ref=e238]:
              - generic [ref=e239]: ₹159
              - generic [ref=e240]: / month
            - paragraph [ref=e241]:
              - text: Billed
              - generic [ref=e242]: ₹1,910
              - text: per year · save 20% vs monthly
            - list [ref=e243]:
              - listitem [ref=e244]:
                - img [ref=e245]
                - generic [ref=e247]: Everything in Free
              - listitem [ref=e248]:
                - img [ref=e249]
                - generic [ref=e251]: Detailed salary breakdown & component table
              - listitem [ref=e252]:
                - img [ref=e253]
                - generic [ref=e255]: Offer comparison (in-hand, tax, first-year value)
              - listitem [ref=e256]:
                - img [ref=e257]
                - generic [ref=e259]: Wealth forecast (multi-year scenarios)
              - listitem [ref=e260]:
                - img [ref=e261]
                - generic [ref=e263]: EMI analyzer vs your in-hand
              - listitem [ref=e264]:
                - img [ref=e265]
                - generic [ref=e267]: Monthly lifestyle planner & surplus view
              - listitem [ref=e268]:
                - img [ref=e269]
                - generic [ref=e271]: Deeper insights across planning screens
            - link "Upgrade to Premium" [ref=e272] [cursor=pointer]:
              - /url: /login?from=%2Fpaywall
        - generic [ref=e273]:
          - heading "Compare at a glance" [level=3] [ref=e274]
          - table [ref=e276]:
            - rowgroup [ref=e277]:
              - row "Capability Free Premium" [ref=e278]:
                - columnheader "Capability" [ref=e279]
                - columnheader "Free" [ref=e280]
                - columnheader "Premium" [ref=e281]
            - rowgroup [ref=e282]:
              - row "Basic salary calculator Included Included" [ref=e283]:
                - rowheader "Basic salary calculator" [ref=e284]
                - cell "Included" [ref=e285]:
                  - img "Included" [ref=e286]
                - cell "Included" [ref=e288]:
                  - img "Included" [ref=e289]
              - row "Fixed vs variable in-hand clarity Included Included" [ref=e291]:
                - rowheader "Fixed vs variable in-hand clarity" [ref=e292]
                - cell "Included" [ref=e293]:
                  - img "Included" [ref=e294]
                - cell "Included" [ref=e296]:
                  - img "Included" [ref=e297]
              - row "Regime-aware TDS-style estimates Included Included" [ref=e299]:
                - rowheader "Regime-aware TDS-style estimates" [ref=e300]
                - cell "Included" [ref=e301]:
                  - img "Included" [ref=e302]
                - cell "Included" [ref=e304]:
                  - img "Included" [ref=e305]
              - row "Component-wise breakdown Not included Included" [ref=e307]:
                - rowheader "Component-wise breakdown" [ref=e308]
                - cell "Not included" [ref=e309]:
                  - img "Not included" [ref=e310]
                - cell "Included" [ref=e311]:
                  - img "Included" [ref=e312]
              - row "Offer comparison Not included Included" [ref=e314]:
                - rowheader "Offer comparison" [ref=e315]
                - cell "Not included" [ref=e316]:
                  - img "Not included" [ref=e317]
                - cell "Included" [ref=e318]:
                  - img "Included" [ref=e319]
              - row "Wealth forecast Not included Included" [ref=e321]:
                - rowheader "Wealth forecast" [ref=e322]
                - cell "Not included" [ref=e323]:
                  - img "Not included" [ref=e324]
                - cell "Included" [ref=e325]:
                  - img "Included" [ref=e326]
              - row "EMI affordability analyzer Not included Included" [ref=e328]:
                - rowheader "EMI affordability analyzer" [ref=e329]
                - cell "Not included" [ref=e330]:
                  - img "Not included" [ref=e331]
                - cell "Included" [ref=e332]:
                  - img "Included" [ref=e333]
              - row "Monthly planner Not included Included" [ref=e335]:
                - rowheader "Monthly planner" [ref=e336]
                - cell "Not included" [ref=e337]:
                  - img "Not included" [ref=e338]
                - cell "Included" [ref=e339]:
                  - img "Included" [ref=e340]
              - row "Dedicated planning workspace (breakdown, lifestyle, tools) Not included Included" [ref=e342]:
                - rowheader "Dedicated planning workspace (breakdown, lifestyle, tools)" [ref=e343]
                - cell "Not included" [ref=e344]:
                  - img "Not included" [ref=e345]
                - cell "Included" [ref=e346]:
                  - img "Included" [ref=e347]
        - generic [ref=e349]:
          - heading "Straightforward & transparent" [level=3] [ref=e350]
          - paragraph [ref=e351]: You control what you enter. Estimates are for planning, not tax filing. Premium tools read from the same salary context you already trust in the free calculator—so upgrades feel like a natural next step, not a reset.
          - list [ref=e352]:
            - listitem [ref=e353]: No ads in product flows
            - listitem [ref=e354]: No bank linking required
            - listitem [ref=e355]: Built for Indian payroll context
      - generic [ref=e357]:
        - paragraph [ref=e358]: Start free, no account needed
        - heading "Know your real salary before you decide" [level=2] [ref=e359]
        - paragraph [ref=e360]: Free breakdown instantly. Upgrade to premium when you need offer comparison, forecasts, and EMI planning—all tied to your actual in-hand, not CTC.
        - generic [ref=e361]:
          - link "Calculate free" [ref=e362] [cursor=pointer]:
            - /url: /salary
            - text: Calculate free
            - img
          - button "View premium plans →" [ref=e363]
  - contentinfo [ref=e364]:
    - generic [ref=e365]:
      - generic [ref=e366]:
        - generic [ref=e367]:
          - generic [ref=e368]:
            - img [ref=e369]
            - generic [ref=e370]:
              - generic [ref=e371]: InHand
              - generic [ref=e372]: Know your real take-home
          - paragraph [ref=e373]: Salary intelligence for Indian employees—in-hand clarity, breakups, tax context, and decisions without the fluff.
        - generic [ref=e374]:
          - generic [ref=e375]:
            - heading "Product" [level=4] [ref=e376]
            - list [ref=e377]:
              - listitem [ref=e378]:
                - link "Calculator" [ref=e379] [cursor=pointer]:
                  - /url: /salary
              - listitem [ref=e380]:
                - link "Pricing" [ref=e381] [cursor=pointer]:
                  - /url: /#pricing
              - listitem [ref=e382]:
                - link "Forecast" [ref=e383] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Dforecast
              - listitem [ref=e384]:
                - link "Compare" [ref=e385] [cursor=pointer]:
                  - /url: /login?from=%2Fpaywall%3Ftool%3Doffers
          - generic [ref=e386]:
            - heading "Legal" [level=4] [ref=e387]
            - list [ref=e388]:
              - listitem [ref=e389]:
                - link "Privacy" [ref=e390] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e391]:
                - link "Terms" [ref=e392] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e393]:
                - link "Security" [ref=e394] [cursor=pointer]:
                  - /url: "#"
      - generic [ref=e395]:
        - paragraph [ref=e396]: Why InHand
        - heading "Real take-home clarity—not a generic CTC guess" [level=2] [ref=e397]
        - paragraph [ref=e398]: "Every figure below matches what the app actually helps you do: line-level salary math, regime choice, and privacy without bank linking."
        - list [ref=e399]:
          - listitem [ref=e400]:
            - generic [ref=e401]:
              - img [ref=e403]
              - heading "Full pay breakup" [level=3] [ref=e406]
              - paragraph [ref=e407]: PF, deductions, professional tax, and income-tax estimates on your CTC—so you see estimated monthly in-hand, not just the package headline.
          - listitem [ref=e408]:
            - generic [ref=e409]:
              - img [ref=e411]
              - heading "Old vs new regime" [level=3] [ref=e415]
              - paragraph [ref=e416]: Model Old and New tax treatment in the same flow. Handy for comparing which structure you’re using—not a full ITR filing wizard.
          - listitem [ref=e417]:
            - generic [ref=e418]:
              - img [ref=e420]
              - heading "Private by design" [level=3] [ref=e423]
              - paragraph [ref=e424]: Enter CTC and assumptions yourself—no bank linking or payroll import. On premium, you can keep a saved list on this device to jump between scenarios without retyping everything.
      - generic [ref=e425]:
        - generic [ref=e426]:
          - generic [ref=e427]:
            - img [ref=e428]
            - text: 256-BIT SSL
          - generic [ref=e431]:
            - img [ref=e432]
            - text: ISO CERTIFIED
          - generic [ref=e435]:
            - img [ref=e436]
            - text: GDPR COMPLIANT
        - paragraph [ref=e438]: © 2026 InHand. All rights reserved.
  - button "Open Next.js Dev Tools" [ref=e444] [cursor=pointer]:
    - img [ref=e445]
  - alert [ref=e448]
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