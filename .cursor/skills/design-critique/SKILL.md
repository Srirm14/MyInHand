---
name: design-critique
description: Delivers structured design feedback on usability, hierarchy, and consistency. Use when the user says "review this design", "critique this mockup", "what do you think of this screen?", or shares a Figma link, screenshot, or description for feedback at any stage from exploration to final polish.
---

# Design critique

Provide structured design feedback across multiple dimensions.

## Usage

Treat the user’s message as the design source: Figma URL, image path, file reference, or description. If the design isn’t provided, ask for a link, screenshot, or detailed description.

**Typical input:** Figma URL, screenshot, or description.

## Connectors and context

- If the repo has `CONNECTORS.md` (or similar), read it before assuming available integrations.
- Otherwise use MCP descriptors in `mcps/` when present.
- If a **design tool** is connected: inspect components, tokens, and layers; compare to the existing design system when the codebase or docs expose one.
- If **user feedback** tools are connected: cross-reference decisions with recent feedback or support themes when relevant.

## What to gather

- **The design:** Figma URL, screenshot, or detailed description
- **Context:** What it is, who it’s for, stage (exploration, refinement, final)
- **Focus** (optional): e.g. mobile-only, onboarding flow only

## Critique framework

### 1. First impression (~2 seconds)

- What draws the eye first? Is that intentional?
- Emotional reaction and whether purpose is immediately clear

### 2. Usability

- Can the user accomplish the goal?
- Navigation clarity, affordances, unnecessary steps

### 3. Visual hierarchy

- Reading order, emphasis, whitespace, typography hierarchy

### 4. Consistency

- Design system alignment; spacing, color, type; similar elements behaving similarly

### 5. Accessibility

- Contrast, touch targets, readability, alt text for meaningful images

## How to give feedback

- **Specific:** e.g. “The CTA competes with the nav” not “layout is confusing”
- **Explain why:** Tie to principles or user needs
- **Suggest alternatives:** Problems plus plausible fixes
- **Acknowledge strengths:** Include what works
- **Match the stage:** Exploration vs final polish differ in tone and depth

## Output template

```markdown
## Design Critique: [Design Name]

### Overall Impression
[1-2 sentence first reaction — what works, biggest opportunity]

### Usability
| Finding | Severity | Recommendation |
|---------|----------|----------------|
| [Issue] | 🔴 Critical / 🟡 Moderate / 🟢 Minor | [Fix] |

### Visual Hierarchy
- **What draws the eye first**: [Element] — [Is this correct?]
- **Reading flow**: [How the eye moves through the layout]
- **Emphasis**: [Are the right things emphasized?]

### Consistency
| Element | Issue | Recommendation |
|---------|-------|----------------|
| [Typography/spacing/color] | [Inconsistency] | [Fix] |

### Accessibility
- **Color contrast**: [Pass/fail for key text]
- **Touch targets**: [Adequate size?]
- **Text readability**: [Font size, line height]

### What Works Well
- [Positive observation 1]
- [Positive observation 2]

### Priority Recommendations
1. **[Most impactful change]** — [Why and how]
2. **[Second priority]** — [Why and how]
3. **[Third priority]** — [Why and how]
```

## Tips for the user (when relevant)

1. **Share context** — e.g. “B2B SaaS checkout” sharpens feedback.
2. **State the stage** — Exploration vs polish changes expectations.
3. **Narrow focus** — e.g. “Only navigation” yields deeper critique there.
