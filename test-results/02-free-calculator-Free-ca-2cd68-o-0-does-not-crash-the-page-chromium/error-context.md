# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-free-calculator.spec.ts >> Free calculator — CTC input >> clearing CTC to 0 does not crash the page
- Location: tests/e2e/02-free-calculator.spec.ts:64:7

# Error details

```
Error: Channel closed
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('spinbutton').first()

```

```
Error: browserContext.close: Target page, context or browser has been closed
```