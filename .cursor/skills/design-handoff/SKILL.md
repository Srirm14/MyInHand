---
name: design-handoff
description: Generates developer handoff specs from a design covering layout, design tokens, component props, interaction states, responsive breakpoints, edge cases, and animation details. Use when a design is ready for engineering, when the user asks for a handoff spec or dev-ready documentation, or when sharing a Figma link or design description for implementation.
---

# Design handoff

Generate comprehensive developer handoff documentation from a design.

## Usage

Treat the user’s message as the design source: Figma URL, screenshot reference, file path, or written description. If only `/design-handoff` with no context, ask briefly what to spec.

**Typical input:** Figma URL, screenshot, or detailed description of the screen/feature.

## Connectors and context

- If the repo has `CONNECTORS.md` (or similar) documenting integrations, read it before assuming what is available.
- Otherwise use MCP tool descriptors in the project `mcps` folder when present, or ask which design tools are connected.
- If a **design tool** (e.g. Figma via MCP) is available: pull measurements, tokens, and component specs when possible.
- If a **project tracker** is available: link the handoff to the implementation ticket; suggest sub-tasks per spec section.

## What to include

### Visual specifications

- Exact measurements (padding, margins, widths)
- Design token references (colors, typography, spacing)
- Responsive breakpoints and behavior
- Component variants and states

### Interaction specifications

- Click/tap behavior
- Hover states
- Transitions and animations (duration, easing)
- Gesture support (swipe, pinch, long-press) when relevant

### Content specifications

- Character limits
- Truncation behavior
- Empty, loading, and error states

### Edge cases

- Minimum/maximum content
- International or long strings
- Slow connections
- Missing data

### Accessibility

- Focus order
- ARIA labels and roles
- Keyboard interactions
- Screen reader announcements

## Principles

1. **Don’t assume** — If it’s not specified, the developer will guess. Specify everything.
2. **Use tokens, not raw values** — Reference `spacing-md` rather than only `16px` when a token exists.
3. **Show all states** — Default, hover, active, disabled, loading, error, empty.
4. **Describe the why** — Short rationale (e.g. mobile collapse for one-handed use) helps engineers make consistent judgment calls.

## Output template

Use this structure unless the user asks for a different format:

```markdown
## Handoff Spec: [Feature/Screen Name]

### Overview
[What this screen/feature does, user context]

### Layout
[Grid system, breakpoints, responsive behavior]

### Design Tokens Used
| Token | Value | Usage |
|-------|-------|-------|
| `color-primary` | #[hex] | CTA buttons, links |
| `spacing-md` | [X]px | Between sections |
| `font-heading-lg` | [size/weight/family] | Page title |

### Components
| Component | Variant | Props | Notes |
|-----------|---------|-------|-------|
| [Component] | [Variant] | [Props] | [Special behavior] |

### States and Interactions
| Element | State | Behavior |
|---------|-------|----------|
| [CTA Button] | Hover | [Background darken 10%] |
| [CTA Button] | Loading | [Spinner, disabled] |
| [Form] | Error | [Red border, error message below] |

### Responsive Behavior
| Breakpoint | Changes |
|------------|---------|
| Desktop (>1024px) | [Default layout] |
| Tablet (768-1024px) | [What changes] |
| Mobile (<768px) | [What changes] |

### Edge Cases
- **Empty state**: [What to show when no data]
- **Long text**: [Truncation rules]
- **Loading**: [Skeleton or spinner]
- **Error**: [Error state appearance]

### Animation / Motion
| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| [Element] | [Trigger] | [Description] | [ms] | [easing] |

### Accessibility Notes
- [Focus order]
- [ARIA labels needed]
- [Keyboard interactions]
```

## Tips for the user (when relevant)

1. **Share the Figma link** — Enables exact measurements, tokens, and component info when connected.
2. **Mention edge cases** — e.g. “What happens with 100 items?” improves boundary specs.
3. **Name the tech stack** — e.g. React + Tailwind allows tighter implementation notes.
