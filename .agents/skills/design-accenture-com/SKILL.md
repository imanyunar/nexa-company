---
name: design-accenture-com
description: Design system extracted from Reinvented with Accenture (https://www.accenture.com/en). Use when building UI that should match this brand's visual identity.
triggers:
  - "Reinvented with Accenture"
  - "accenture-com"
  - "design like Reinvented with Accenture"
  - "Reinvented with Accenture風"
source: https://www.accenture.com/en
extractedAt: 2026-09-22T03:53:56.071Z
tags: ["dark", "rounded", "colorful", "sans-serif"]
---
# Design System Inspired by Reinvented with Accenture

> Auto-extracted from `https://www.accenture.com/en` on 2026-09-22

## 1. Visual Theme & Atmosphere

High-contrast dark mode with vivid accents — feels modern, technical, and focused.

The hero section leads with "Together We Reinvented".

**Key Characteristics:**
- Graphik as the heading font (custom web font loaded via @font-face)
- Graphik as the body font for all running text
- Heading weight 500, letter-spacing -1.90196px
- Dark background (#000000) as the primary canvas
- Primary accent `#0041f0` used for CTAs and brand highlights
- 4 shadow level(s) detected — tinted shadows
- Rounded corners (2px+) creating a friendly, approachable feel
- Tags: dark, rounded, colorful, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#0041f0`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#e2062e`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#000000`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#ffffff`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#ffffff`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#999999`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#f1f1ef`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#000000` | `--palette-1` | block | large | text-light |
| 2 | `#ffffff` | `--palette-2` | block | large | text-dark |
| 3 | `#f1f1ef` | `--palette-3` | block | large | text-dark |
| 4 | `#0041f0` | `--palette-4` | block | large | text-light |
| 5 | `#e2062e` | `--palette-5` | block | large | text-light |
| 6 | `#460073` | `--palette-6` | block | large | text-light |
| 7 | `#a600ff` | `--palette-7` | button | medium | text-light |
| 8 | `#2b2b2b` | `--palette-8` | button | small | text-light |
| 9 | `#004dff` | `--palette-9` | text-accent | small | text-light |
| 10 | `#3860be` | `--palette-10` | text-accent | small | text-light |

## 3. Typography Rules

- **Heading Font:** `Graphik` (web font)
- **Body Font:** `Graphik` (web font)

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Graphik | 63.3988px | 500 | 72.9086px | -1.90196px |
| H2 | Graphik | 22.3596px | 700 | 33.5393px | normal |
| H3 | GT Sectra Fine | 29.586px | 300 | 36.9825px | normal |
| H4 | Graphik | 25.3596px | 500 | 32.9674px | -0.507191px |
| Body | Graphik | 16px | 400 | 16px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `105.665px` | headings |
| H1 | `100px` | headings |
| H2 | `63.3988px` | headings |
| H3 | `50.719px` | headings |
| H4 | `42.2659px` | headings |
| Body L | `29.586px` | body / supporting text |
| Body | `25.3596px` | body / supporting text |
| Small | `24px` | body / supporting text |
| XS | `22.3596px` | body / supporting text |
| Caption | `21.1329px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: transparent;
  color: #ffffff;
  border-radius: 0px;
  padding: 8px 8px;
  font-size: 14px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

## 5. Layout Principles

- **Base spacing unit:** `8px` — use multiples (16px, 24px, 32px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `8px` | element |
| spacing-2 | `12px` | element |
| spacing-3 | `16px` | element |
| spacing-4 | `29.586px` | card |
| spacing-5 | `32px` | card |
| spacing-6 | `63.3988px` | section |
| spacing-7 | `11.2px` | element |
| spacing-8 | `8.45324px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-subtle | `2px` | subtle |
| radius-subtle | `1px` | subtle |
| radius-card | `20px` | card |
| radius-subtle | `3px` | subtle |
| radius-card | `17px` | card |
| radius-card | `50px` | card |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| High | `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px` | Modals, floating elements |
| Mid | `rgb(153, 153, 153) 0px 2px 10px -3px` | Dropdowns, popovers |
| Low | `rgb(199, 197, 199) -3px -3px 5px -2px` | Cards, subtle elevation |
| Mid | `rgb(199, 197, 199) 0px 0px 12px 2px` | Dropdowns, popovers |


## 7. Do's and Don'ts

### Do
- Use `#000000` as the primary background color
- Use `Graphik` for all headings and `Graphik` for body text
- Use `#0041f0` as the single dominant accent/CTA color
- Maintain `8px` as the base spacing unit — all gaps should be multiples
- Keep the overall feel dark — use dark surfaces throughout
- Use rounded corners (`2px`+) consistently for all interactive elements
- Embrace bold color combinations — playful energy is the point
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 500 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Graphik/Graphik with generic alternatives
- Don't use irregular spacing — stick to 8px grid
- Don't introduce bright white surfaces — they break the dark palette
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#ffffff` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 8px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #000000
Text:        #ffffff
Accent:      #0041f0
Secondary:   #e2062e
Border:      #f1f1ef
```

### Example Prompts

1. "Build a hero section with a `#000000` background, `Graphik` heading in `#ffffff`, and a `#0041f0` CTA button."
2. "Create a pricing card using background `#ffffff`, border `#f1f1ef`, `Graphik` for text, and 24px padding."
3. "Design a navigation bar — `#000000` background, `#ffffff` links, `#0041f0` for active state."
4. "Build a feature grid with 3 columns, 24px gap, each card using the card component style."
5. "Create a footer with `#ffffff` background, `#ffffff` text, and 16px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 14 custom properties extracted from `:root` / `html` stylesheets.

### Spacing Variables

| Variable | Value |
|---|---|
| `--rad-global-header-height` | `72px` |
| `--rad-nav-height` | `56px` |
| `--rad-spacing-sm` | `16px` |
| `--rad-spacing-md` | `32px` |
| `--rad-spacing-lg` | `48px` |
| `--rad-spacing-xl` | `96px` |
| `--rad-spacing-xxl` | `160px` |
| `--rad-component-spacing-none` | `0` |
| `--rad-component-spacing-small` | `10px` |
| `--rad-component-spacing-medium` | `20px` |
| `--rad-component-spacing-large` | `40px` |
| `--rad-subnav-margin-tablet` | `48px` |
| `--rad-subnav-margin-desktop` | `80px` |
| `--rad-subnav-margin-wide-desktop` | `107px` |
