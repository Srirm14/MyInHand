---
name: architecture
description: Creates or evaluates Architecture Decision Records (ADRs) with options, trade-offs, and consequences. Use when choosing between technologies (e.g. Kafka vs SQS), documenting a design decision, reviewing a system design proposal, or framing a new component from requirements and constraints.
---

# Architecture (ADR)

Create an Architecture Decision Record (ADR) or evaluate a system design. If the user names a decision or system in the message, use it as the primary subject.

## Usage

Treat the user’s message as the decision topic unless they specify otherwise. If they only say “/architecture” or “use the architecture skill,” ask briefly what decision or design to analyze.

## Modes

| Mode | Example prompt |
|------|----------------|
| **Create an ADR** | “Should we use Kafka or SQS for our event bus?” |
| **Evaluate a design** | “Review this microservices proposal” |
| **System design framing** | “Design the notification system for our app” |

For structured requirements gathering, scalability breakdowns, and deep-dive design steps, follow the [system-design skill](../system-design/SKILL.md).

## Connectors and context

- If the repo has a `CONNECTORS.md` (or similar) documenting knowledge bases, trackers, or integrations, read it before assuming what is available.
- Otherwise, use MCP tool descriptors in the project `mcps` folder when present, or ask the user which tools are connected.
- When a **knowledge base** is available: search for prior ADRs and design docs; reuse terminology and decisions where still valid.
- When a **project tracker** is available: link related epics or tickets; suggest concrete implementation tasks.

## Output — ADR format

Use this structure unless the user asks for a different template:

```markdown
# ADR-[number]: [Title]

**Status:** Proposed | Accepted | Deprecated | Superseded
**Date:** [Date]
**Deciders:** [Who needs to sign off]

## Context
[What is the situation? What forces are at play?]

## Decision
[What is the change we're proposing?]

## Options Considered

### Option A: [Name]
| Dimension | Assessment |
|-----------|------------|
| Complexity | [Low/Med/High] |
| Cost | [Assessment] |
| Scalability | [Assessment] |
| Team familiarity | [Assessment] |

**Pros:** [List]
**Cons:** [List]

### Option B: [Name]
[Same format]

## Trade-off Analysis
[Key trade-offs between options with clear reasoning]

## Consequences
- [What becomes easier]
- [What becomes harder]
- [What we'll need to revisit]

## Action Items
1. [ ] [Implementation step]
2. [ ] [Follow-up]
```

If no ADR number exists, use `ADR-NNN` or ask which numbering scheme the team uses.

## Tips (apply in the narrative)

1. **State constraints upfront** — timeline, scale (e.g. RPS), budget, and compliance shape viable options.
2. **Name explicit options** — even with a preferred choice, compare at least two real alternatives.
3. **Include non-functional requirements** — latency, cost, team expertise, and operational burden matter as much as features.
