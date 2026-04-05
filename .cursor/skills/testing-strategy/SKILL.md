---
name: testing-strategy
description: Designs test strategies and test plans balancing unit, integration, and E2E coverage. Use when the user asks how to test a feature, for a test strategy or test plan, what tests are needed, or when discussing coverage, test architecture, or risk-based testing.
---

# Testing strategy

Help design **what** to test, **at which layer**, and **how much**—balancing confidence, speed, and maintenance.

## Usage

Infer scope from the prompt (whole product, one service, one PR, one screen). If unclear, ask: risk tolerance, release cadence, existing test stack, and critical user journeys.

## Testing pyramid (default mental model)

```
        /  E2E  \         Few, slow, high confidence on critical paths
       / Integration \    Some, DB/wire/API boundaries
      /   Unit tests   \   Many, fast, pure logic and edge cases
```

**Bias:** More tests at the bottom unless the risk is entirely integration/UI.

## Strategy by component type

| Area | Typical layers | Notes |
|------|----------------|--------|
| **API / server** | Unit (logic), integration (HTTP + DB), contract (consumers) | Prefer testing handlers + domain separately where possible |
| **Data / jobs** | Unit (transforms), integration (fixtures), idempotency | Replay failures; property-based where valuable |
| **Frontend** | Unit (utils), component/interaction, a11y, optional E2E | Avoid duplicating the same behavior at every layer |
| **Infra** | Smoke, health checks, optional load/chaos | After core paths are covered |

## What to cover (priority)

**Favor:** Business-critical paths, money/auth/security boundaries, error handling, data integrity, regressions that have burned the team.

**Deprioritize:** Trivial getters/setters, third-party internals, generated boilerplate, one-off scripts unless they affect production.

## Output template

Unless the user wants a different format, produce:

1. **Scope & assumptions** — What is in/out of this plan
2. **Risk / priority map** — What must never break vs nice-to-have
3. **Layered plan** — Per area: **unit / integration / E2E** (or project equivalents) with brief rationale
4. **Concrete examples** — 3–7 example test cases (Given / When / Then or name + assertion idea)
5. **Coverage targets** — Qualitative or numeric only if the user specifies (avoid arbitrary % worship)
6. **Gaps** — What exists today vs what’s missing; ordering for next work

## Principles

- **Test behavior, not implementation** — Prefer public contracts and user-visible outcomes
- **Determinism** — Control time, randomness, and I/O in unit tests
- **Fast feedback** — Keep the default developer loop under heavy E2E
- **Maintainability** — Shared fixtures and builders; avoid brittle selectors in UI tests

## Connectors and context

- If the repo documents test commands or CI in `README`, `package.json`, or CI config, align recommendations with them.
- If `CONNECTORS.md` or team QA docs exist, read before inventing tooling.

## Examples

**User:** “Test strategy for the salary breakdown save flow.”

**Response shape:** List critical paths (validation, PATCH payload, optimistic UI, error toast), propose unit tests for pure calculators, integration tests for API + store, one E2E for happy path; call out edge cases (offline, concurrent edit, invalid session).
