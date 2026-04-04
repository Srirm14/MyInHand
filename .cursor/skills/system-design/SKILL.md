---
name: system-design
description: Designs systems, services, and architectures with requirements, high-level and deep-dive design, scale/reliability, and explicit trade-offs. Use when the user says "design a system for", "how should we architect", "system design for", "what's the right architecture for", or when they need API design, data modeling, or service boundaries.
---

# System Design

Help design systems and evaluate architectural decisions end-to-end. When the outcome should be recorded formally, produce or align with an ADR using the [architecture skill](../architecture/SKILL.md).

## Framework

### 1. Requirements gathering

- **Functional:** what the system must do, user-facing and internal behaviors.
- **Non-functional:** scale, latency, availability, durability, cost, compliance.
- **Constraints:** team size, timeline, existing stack, vendor lock-in, regions.

### 2. High-level design

- Component boundaries and responsibilities.
- Data flow (sync vs async, who owns what data).
- API contracts between services and clients.
- Storage choices (SQL, NoSQL, object store, cache, search) with a one-line rationale each.

### 3. Deep dive

- Data model (entities, relationships, consistency model).
- API shape (REST, GraphQL, gRPC, events) with example endpoints or event names where useful.
- Caching (what, where, TTL, invalidation).
- Queues and events (ordering, idempotency, dead-letter handling).
- Errors, retries, timeouts, and partial-failure behavior.

### 4. Scale and reliability

- Load estimation (orders of magnitude are fine if exact numbers unknown).
- Horizontal vs vertical scaling per component.
- Failover, redundancy, multi-AZ/region if relevant.
- Observability: metrics, logs, traces, alerts.

### 5. Trade-off analysis

- State trade-offs explicitly (complexity, cost, familiarity, time to market, maintainability).
- Call out what to revisit as load, team, or product assumptions change.

## Output

Deliver a clear, structured document that includes:

- **Assumptions** and **open questions** separated from firm decisions.
- **Diagrams** as ASCII, Mermaid, or concise described layouts.
- **Trade-offs** and **future evolution** (“what we’d change at 10× scale” or similar).

Avoid implementation code unless the user asks for it; focus on design clarity.
