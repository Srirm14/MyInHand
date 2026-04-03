# DESIGN_SYSTEM.md — InHand

Extracted from provided design screenshots. This is the source of truth for all UI implementation.

## Design Principles

1. **Premium calm** — Clean whites, subtle depth, no visual noise.
2. **Financial readability** — Numbers are large, well-spaced, and instantly scannable.
3. **Trust through restraint** — Minimal color, purposeful whitespace, no gimmicks.
4. **Consistent rhythm** — Same spacing, radius, and shadow across all screens.
5. **Light mode only** — No dark mode.
6. **Desktop-first** — Optimize for 1280px+ viewports. Responsive is secondary.

## Color System

Extracted directly from the design system screenshot:

```
Primary:     #0D9488   — Teal. Buttons, active states, links, accents.
Secondary:   #1E293B   — Dark navy. Headlines, inverted buttons, nav text.
Tertiary:    #10B981   — Emerald. Success states, positive indicators, earning badges.
Neutral BG:  #F9F9FB   — Light gray. Page background, card backgrounds.
White:       #FFFFFF   — Card surfaces, input backgrounds.
```

### Extended Palette (derived from screenshots)

```
primary-50:   #F0FDFA     — Teal tint for hover backgrounds, selected card borders
primary-100:  #CCFBF1     — Light teal for selected chip backgrounds (e.g., Tier 1)
primary-500:  #14B8A6     — Mid teal
primary-600:  #0D9488     — Primary brand (buttons, CTAs)
primary-700:  #0F766E     — Hover state for primary buttons
primary-800:  #115E59     — Active/pressed state

secondary-800: #1E293B    — Headlines, inverted elements
secondary-700: #334155    — Body text
secondary-500: #64748B    — Muted text, labels
secondary-300: #CBD5E1    — Borders, dividers
secondary-100: #F1F5F9    — Subtle backgrounds

red-500:     #EF4444     — Deduction badges, negative values, danger
red-50:      #FEF2F2     — Deduction badge background

green-500:   #10B981     — Earning badges, positive indicators
green-50:    #ECFDF5     — Earning badge background

amber-500:   #F59E0B     — Warning states
amber-50:    #FFFBEB     — Warning badge background
```

## Typography

From screenshots: **Plus Jakarta Sans** for headlines, **Inter** for body/labels.

```
Display:     Plus Jakarta Sans, 48px, ExtraBold (800)    — Landing hero
H1:          Plus Jakarta Sans, 36px, Bold (700)          — Page titles (Salary Breakdown, Lifestyle Check)
H2:          Plus Jakarta Sans, 28px, SemiBold (600)      — Section headings
H3:          Plus Jakarta Sans, 20px, SemiBold (600)      — Card titles
Body:        Inter, 16px, Regular (400)                   — Paragraphs, descriptions
Body-sm:     Inter, 14px, Regular (400)                   — Secondary text, table cells
Label:       Inter, 11px, SemiBold (600), uppercase, tracking-wider — Column headers, stat labels
Caption:     Inter, 12px, Regular (400)                   — Hints, sublabels

Financial Numbers:
  Large stat:  Plus Jakarta Sans, 36px, Bold              — ₹1,42,500 (summary cards)
  Table value: Inter, 16px, SemiBold (600)                — ₹80,000 (component rows)
  Small stat:  Inter, 14px, Medium (500)                  — Inline numbers
```

### Tailwind Font Config

```js
fontFamily: {
  display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## Spacing Scale

Derived from screenshot layout rhythm:

```
4px   — Inline gaps (icon to text in badges)
8px   — Tight spacing (label to input, badge padding-y)
12px  — Compact spacing (between related items)
16px  — Standard spacing (card padding internal, form gaps)
20px  — Section sub-gaps
24px  — Card padding (standard)
32px  — Section gaps within a page
40px  — Between major sections
48px  — Page section breathing room
64px  — Hero section vertical padding
```

## Border Radius

```
Buttons:       rounded-full (pill shape for primary CTAs)
Cards:         rounded-2xl (16px)
Inputs:        rounded-xl (12px)
Badges/Chips:  rounded-full
Tier selectors: rounded-xl (12px)
Modals:        rounded-2xl
```

## Shadows

From screenshots — very subtle, premium depth:

```
Card shadow:     shadow-sm              — 0 1px 2px rgba(0,0,0,0.05)
Elevated card:   shadow-md              — Summary stat cards
Input focus:     ring-2 ring-primary-200 — Teal ring on focus
Nav shadow:      shadow-sm              — Subtle bottom border feel
CTA hover:       shadow-lg              — Lift effect on primary buttons
```

## Card Patterns

### Stat Card (Summary)
- White background, rounded-2xl, shadow-sm
- Label top (11px, uppercase, text-secondary-500)
- Large number (36px bold)
- Optional sub-label or trend indicator (+4.2%)
- Optional colored underline (teal = positive, red = tax/deduction)
- Optional icon top-right (Lucide, muted)

### Feature Card (Landing)
- White background, rounded-2xl, p-6
- Lucide icon in teal circle (40px)
- Title (20px semibold)
- Description (14px, text-secondary-500)
- Optional preview illustration area

### Table Card (Salary Components)
- White background, rounded-2xl, p-6
- Column headers: 11px uppercase tracking-wider text-secondary-500
- Rows with subtle bottom borders
- Type badges: EARNING (green-50 bg, green-600 text), DEDUCTION (red-50 bg, red-600 text), TAX FREE (primary-50 bg, primary-600 text)
- Status icons: CheckCircle (green) or Info (gray)

### Insight Card
- Primary-600 background with white text (teal CTA cards)
- Or white with teal accent for inline tips

### Slider Card (Lifestyle)
- White background, rounded-2xl, p-6
- Lucide icon in teal circle (32px)
- Category label + amount right-aligned
- Slider with teal track
- Min/max labels below

## Form Patterns

### Input
- White background, rounded-xl, border border-secondary-200
- Label above: 14px semibold text-secondary-800
- Placeholder: text-secondary-400
- Focus: ring-2 ring-primary-200, border-primary-400
- Prefix support (₹ symbol in CTC input)
- Suffix support (INR/Year badge)

### Segmented Selector (City Tier, Tax Regime)
- Horizontal row of options, rounded-xl each
- Selected: primary-50 background, primary-600 border (2px), primary-700 text
- Unselected: white background, secondary-200 border, secondary-600 text
- Sub-label below main label (e.g., "Metro", "Urban")

### Primary Button
- bg-primary-600, text-white, rounded-full, px-8 py-3
- Hover: bg-primary-700, shadow-lg
- Full-width variant for form CTAs
- Arrow icon right (ArrowRight from Lucide)

### Secondary Button
- White background, border border-secondary-300, rounded-full
- text-secondary-700
- Hover: bg-secondary-50

### Inverted Button
- bg-secondary-800, text-white, rounded-full

## Navigation Pattern

- Fixed top nav, white background, shadow-sm
- Logo left: "InHand" in primary-600 font-display font-bold (tracking-tight)
- Center nav links: Salary, Offers, Forecast, EMI (14px, text-secondary-600)
- Active link: underline decoration-2 underline-offset-8 decoration-primary-600
- Right: Premium badge (bg-primary-600 text-white rounded-full px-4 py-1.5), Bell icon, User icon

## State Patterns

### Empty State
- Centered content, Lucide icon (48px, text-secondary-300)
- Heading (18px semibold), description (14px text-secondary-500)
- CTA button

### Loading
- Skeleton with bg-secondary-100 animate-pulse, matching the shape of target content

### Success/Positive
- text-green-600, bg-green-50, CheckCircle icon

### Warning
- text-amber-600, bg-amber-50, AlertTriangle icon

### Error
- text-red-600, bg-red-50, AlertCircle icon

## Data Presentation Rules

- Indian number formatting: ₹1,42,500 (not ₹142,500). Use `Intl.NumberFormat('en-IN')`.
- Always show ₹ prefix for money values.
- Percentages: one decimal (12.4%), no decimal for whole numbers.
- Trend indicators: green text with + prefix for positive, red for negative.
- Large numbers: Use L/Cr shorthand in charts (₹42L, ₹1.2Cr).

## Donut/Gauge Chart (Surplus)

- From Lifestyle Check screenshot:
- Large donut with teal segments on light gray track
- Center: "SURPLUS" label (11px uppercase), large amount (36px bold), percentage below in green
- Clean, no 3D effects

## Icon Usage

- Library: Lucide React only
- Size: 20px default, 16px for inline, 24px for cards, 32-40px for feature icons
- Feature icons: Wrapped in teal circle (bg-primary-50 or bg-primary-600 with white icon)
- Nav icons: 20px, text-secondary-500
- Table status: 20px, CheckCircle2 (green) or Info (gray)

## Responsive Approach

- Desktop-first: design for 1280px+ viewport
- Max content width: max-w-7xl (1280px) centered
- Grid: 12-column with Tailwind grid
- Cards: responsive grid, min 2-col on medium, 3-col on large
- Mobile: stack to single column, reduce padding. Secondary priority.
