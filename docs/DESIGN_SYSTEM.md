# DESIGN_SYSTEM.md — InHand

Extracted from provided design screenshots. Source of truth for all UI.

## Design Principles

1. **Premium calm** — Clean whites, subtle depth, no visual noise.
2. **Financial readability** — Numbers are large, well-spaced, instantly scannable.
3. **Trust through restraint** — Minimal color, purposeful whitespace, no gimmicks.
4. **Consistent rhythm** — Same spacing, radius, shadow across all screens.
5. **Light mode only** — No dark mode.
6. **Desktop-first** — Optimize for 1280px+. Responsive secondary.

## Color System

```
Primary:     #0D9488   — Teal. Buttons, active states, links, accents.
Secondary:   #1E293B   — Dark navy. Headlines, inverted buttons, nav text.
Tertiary:    #10B981   — Emerald. Success states, positive indicators, earning badges.
Neutral BG:  #F9F9FB   — Page background.
White:       #FFFFFF   — Card surfaces, input backgrounds.
```

### Extended Palette

```
teal-50:  #F0FDFA    teal-100: #CCFBF1    teal-200: #99F6E4
teal-500: #14B8A6    teal-600: #0D9488    teal-700: #0F766E    teal-800: #115E59

navy-50:  #F8FAFC    navy-100: #F1F5F9    navy-200: #E2E8F0    navy-300: #CBD5E1
navy-400: #94A3B8    navy-500: #64748B    navy-600: #475569    navy-700: #334155    navy-800: #1E293B

emerald-50: #ECFDF5  emerald-500: #10B981  emerald-600: #059669
danger-50:  #FEF2F2  danger-500: #EF4444   danger-600: #DC2626
amber-50:   #FFFBEB  amber-500:  #F59E0B   amber-600:  #D97706
```

## Typography

**Plus Jakarta Sans** for headlines/numbers, **Inter** for body/labels. Loaded via `next/font/google`.

```
Display:   Plus Jakarta Sans 48px 800    — Landing hero
H1:        Plus Jakarta Sans 36px 700    — Page titles
H2:        Plus Jakarta Sans 28px 600    — Section headings
H3:        Plus Jakarta Sans 20px 600    — Card titles
Body:      Inter 16px 400                — Paragraphs
Body-sm:   Inter 14px 400                — Secondary text, table cells
Label:     Inter 11px 600 uppercase      — Column headers, stat labels
Caption:   Inter 12px 400                — Hints, sublabels

Financial Numbers:
  Large stat: Plus Jakarta Sans 36px 700 — ₹1,42,500 summary cards
  Table val:  Inter 16px 600             — ₹80,000 component rows
  Nav LPA:    Inter 14px 500             — "Salary (25 LPA)" in navbar
```

Custom utility classes in `globals.css`: `.text-display`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-label`, `.text-stat`, `.text-stat-sm`.

## Spacing

```
4px  — Inline gaps          8px  — Tight spacing      12px — Compact
16px — Standard card padding 20px — Sub-gaps           24px — Card padding
32px — Section gaps          40px — Major sections      48px — Page breathing
64px — Hero vertical
```

## Border Radius

```
Buttons: rounded-full          Cards: rounded-2xl (16px)
Inputs: rounded-xl (12px)      Badges: rounded-full
Tier selectors: rounded-xl     Dropdowns: rounded-2xl
```

## Shadows

```
Card:     shadow-sm         Elevated card: shadow-md
Nav:      shadow-sm         CTA hover: shadow-lg
Dropdown: shadow-lg         Input focus: ring-2 ring-teal-200
```

## Card Patterns

### Stat Card
White, rounded-2xl, shadow-sm, border-navy-200/40. Label (11px uppercase), large number (36px), optional trend, colored underline (teal/red/navy).

### Feature Card
White, rounded-2xl, p-6, shadow-sm. Teal icon circle → title → description → optional CTA. Supports `href` for Link wrapping.

### Table Card (Salary Components)
White, rounded-2xl, p-6. Column headers: 11px uppercase. Type badges: EARNING (green), DEDUCTION (red), TAX FREE (teal), EMPLOYER (navy). Rows with bottom borders. Editable cells with inline input.

### Slider Card (Lifestyle)
White, rounded-2xl, p-6. Lucide icon in teal circle + label + amount. Range input with teal track. Min/max labels below.

### Free salary calculator — results column (`/salary`)
Use a **fixed max-width** aside (`xl:max-w-[420px]`, `min-w-0`). Stack **`FixedVariableInHandPanel`** (2×2 grid: monthly/annual × fixed-only vs incl. variable; teal emphasis on **fixed-only** when variable > 0) → package composition (donut + bar + vertical legend). Form uses a **teal-bordered** block for fixed pay and **dashed amber** block for variable pay.

## Form Patterns

### Input
White, rounded-xl, border-navy-200. Focus: ring-2 ring-teal-200, border-teal-400. Prefix (₹) and suffix (INR/Year badge) support.

### Segmented Selector (City Tier, Tax Regime)
Horizontal options, rounded-xl. Selected: teal-100 bg, teal-600 border-2, teal-900 text, shadow-sm. Unselected: white, navy-200 border.

### Compensation CTC Block
Primary row: large ₹ input + INR/Year pill. Optional mode toggle (Total only | Fixed + variable). Split panel: nested card, two columns, Auto/You-edit chips.

### Buttons
- Primary: bg-teal-600 text-white rounded-full px-8 py-3, hover bg-teal-700 shadow-lg
- Secondary: white bg, border-navy-300, rounded-full
- Inverted: bg-navy-800 text-white rounded-full

## Navigation Pattern

- Fixed top, white bg, shadow-sm, border-b navy-200/60
- Logo: "InHand" teal-600 font-display font-bold tracking-tight
- **SalaryNavItem:** Context-aware. Shows "Salary" or "Salary (25 LPA)". Premium build: dropdown chevron (last 5 salary contexts). Default/free build: static link, no chevron.
- Premium nav: Offers, Forecast, EMI (visible only for premium signed-in)
- Active link: underline decoration-2 underline-offset-[20px] decoration-teal-600
- Right: Premium badge (Crown + teal-700 pill), History button (premium), Profile/Login

## State Patterns

- **Empty:** Centered icon (48px, navy-300) + heading + description + CTA
- **Loading:** Skeleton bg-navy-100 animate-pulse matching target shape
- **Success:** text-emerald-600, bg-emerald-50, CheckCircle
- **Error:** text-danger-500, bg-danger-50, AlertCircle
- **Warning:** text-amber-600, bg-amber-50, AlertTriangle

## Data Presentation

- Indian formatting: ₹1,42,500 via `Intl.NumberFormat('en-IN')`
- LPA format: "25 LPA", "18.5 LPA", "1.25 Cr" via `formatCTCAsLPA()`
- Always ₹ prefix for money. Percentages: one decimal.
- Trend: green + prefix for positive, red for negative.
- Compact: ₹42L, ₹1.2Cr for charts.

## Donut/Gauge (Surplus)

Teal segments on navy-200 track. Center: label (11px uppercase), amount (36px bold), percentage below. Clean SVG, no 3D.

## Icon Usage

Lucide React only. Default 20px, inline 16px, cards 24px, features 32–40px. Feature icons: teal circle wrap. Nav: 20px navy-400/500.
