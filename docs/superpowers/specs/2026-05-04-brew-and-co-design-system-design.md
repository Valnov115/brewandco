# Brew & Co Design System — Spec

**Date:** 2026-05-04  
**Status:** Approved  
**Approach:** Tailwind CSS v4 Native Token System (Approach A)  
**Stack:** Next.js 16.2.4 · React 19 · TypeScript · Tailwind CSS v4 · App Router

---

## Overview

A complete design system for Brew & Co, a coffee/beverage e-commerce platform. All design tokens are defined in `globals.css` using Tailwind v4's `@theme` directive as the single source of truth. Documentation lives in `Docs/Design/` as markdown files. No additional dependencies are introduced.

The visual reference is a warm, artisanal coffee-shop aesthetic: cream/parchment backgrounds, espresso dark headings, terracotta accents, rounded and circular UI elements, generous whitespace.

---

## 1. Color Tokens

### Raw Palette

| Token name | Hex | Description |
|---|---|---|
| `cream` | `#F2E8D9` | Page background |
| `parchment` | `#FAF3EC` | Card / surface background |
| `espresso` | `#1E0E02` | Headings, logo, bold text |
| `mocha` | `#4A2C1A` | Body text |
| `latte` | `#9B7355` | Muted / secondary text |
| `terracotta` | `#C85A38` | Primary accent — CTAs, prices, active states |
| `terracotta-dark` | `#A3451E` | Accent hover / pressed state |
| `charcoal` | `#1A1A1A` | Dark pill CTA button fill |
| `sage` | `#7B8B3A` | Category icon: Coffee |
| `teal` | `#2A7A6A` | Category icon: Drinks |
| `amber` | `#D4A832` | Category icon: Bakery |

### Semantic Layer

Components always reference semantic tokens, never raw palette values directly.

| Semantic token | Maps to | Usage |
|---|---|---|
| `color-bg` | `cream` | Page background |
| `color-surface` | `parchment` | Cards, panels |
| `color-text` | `espresso` | Primary text, headings |
| `color-text-body` | `mocha` | Paragraphs, body copy |
| `color-text-muted` | `latte` | Captions, metadata, placeholders |
| `color-accent` | `terracotta` | Accent elements, prices, active nav |
| `color-accent-dark` | `terracotta-dark` | Hover and pressed states on accent |
| `color-cta` | `charcoal` | Dark pill button background |
| `color-category-coffee` | `sage` | Category: Coffee |
| `color-category-drinks` | `teal` | Category: Drinks |
| `color-category-tea` | `terracotta` | Category: Tea (shares accent) |
| `color-category-bakery` | `amber` | Category: Bakery |

---

## 2. Typography

### Font Families

Loaded via `next/font/google`. Replaces the current Geist pairing.

| Role | Font | Weights loaded |
|---|---|---|
| Display / Headings | `Plus Jakarta Sans` | 400, 500, 600, 800 |
| Body / UI | `DM Sans` | 400, 500 |

### Type Scale

| Token | px | rem | Usage |
|---|---|---|---|
| `text-xs` | 12px | 0.75rem | Badges, labels |
| `text-sm` | 14px | 0.875rem | Captions, metadata |
| `text-base` | 16px | 1rem | Body paragraphs |
| `text-lg` | 18px | 1.125rem | Lead text, nav links |
| `text-xl` | 20px | 1.25rem | Card titles, prices |
| `text-2xl` | 24px | 1.5rem | Section headings |
| `text-4xl` | 36px | 2.25rem | Page headings |
| `text-6xl` | 60px | 3.75rem | Hero display headline |

### Font Weights in Use

| Weight | Value | Usage |
|---|---|---|
| Regular | 400 | Body paragraphs |
| Medium | 500 | Nav links, UI labels |
| Semibold | 600 | Card titles, prices |
| Extrabold | 800 | Headings, hero display |

### Letter Spacing

| Usage | Value |
|---|---|
| Large headings | `-0.02em` (tighten) |
| Category labels (uppercase) | `0.06em` (open up) |
| Body | `0` (default) |

---

## 3. Spacing

Standard Tailwind spacing scale. Key stops used across the design:

| Token | Value | Usage |
|---|---|---|
| `space-2` | 8px | Tight gaps, icon internal padding |
| `space-4` | 16px | Component internal padding |
| `space-6` | 24px | Card padding, nav item gaps |
| `space-8` | 32px | Section row gaps |
| `space-12` | 48px | Between major content blocks |
| `space-20` | 80px | Vertical section padding |
| `max-w-7xl` | 1280px | Global container max-width |

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-sm` | 4px | Tags, small badges |
| `rounded-lg` | 12px | Inputs, small buttons |
| `rounded-xl` | 16px | Product cards |
| `rounded-2xl` | 24px | Main content panels |
| `rounded-full` | 9999px | Pill buttons, search bar, category circles, product image circles |

---

## 5. Shadows

Warm-tinted — uses espresso/mocha brown base to stay on-palette rather than generic grey.

| Token | Value | Usage |
|---|---|---|
| `shadow-warm-sm` | `0 1px 3px rgba(78,44,26,0.08)` | Subtle card lift |
| `shadow-warm-md` | `0 4px 16px rgba(78,44,26,0.12)` | Elevated cards, dropdowns |
| `shadow-warm-lg` | `0 8px 32px rgba(78,44,26,0.16)` | Modals, hero focal elements |

---

## 6. Component Inventory

### Foundation Components

These are atomic — no dependencies on each other.

#### Button
- **Variants:** Primary (dark charcoal pill), Accent (terracotta pill), Ghost (transparent, terracotta text), Icon (square/circle icon-only)
- **States:** Default, Hover (accent-dark), Active (scale down), Disabled (latte text, no interaction)
- **Radius:** `rounded-full` on all except Icon which uses `rounded-xl`
- **Sizing:** sm (`px-4 py-2 text-sm`), md (`px-6 py-3 text-base`), lg (`px-8 py-4 text-lg`)

#### Input
- **Variants:** Default (text input), Search (with leading search icon)
- **States:** Default, Focus (accent border), Error (terracotta-dark border)
- **Radius:** `rounded-full`
- **Background:** `parchment`
- **Sizing:** Full-width by default, constrained by parent

#### Badge
- **Variants:** Category (uppercase label, small), Price (terracotta, semibold)
- **Radius:** `rounded-full`
- **Font:** `text-xs`, weight 500–600

#### Typography
- **Variants:** Display (6xl, extrabold, espresso), Heading (2xl–4xl, extrabold), Body (base, regular, mocha), Muted (sm, regular, latte), Price (xl, semibold, terracotta)
- Not a rendered component — documents which Tailwind classes compose each role

---

### Composite Components

Built from foundation components.

#### CategoryIcon
- **Anatomy:** Colored circle background + beverage/food icon illustration + uppercase label below
- **Variants:** Coffee (sage), Drinks (teal), Tea (terracotta), Bakery (amber)
- **Circle size:** 56×56px (desktop), 44×44px (mobile)
- **Label:** `text-xs`, uppercase, `tracking-wide`, `color-text-body`
- **Stacking:** Vertical, centered — displayed in a column on the right of the hero

#### ProductCard
- **Anatomy:** Circular product image (on colored circle bg) + product name + price
- **Variants:** Horizontal (reference row layout — image left, text right), Vertical (grid layout — image top, text below)
- **Image circle:** 80×80px with category-matched background color
- **Name:** `text-xl`, semibold, espresso
- **Price:** `text-xl`, semibold, terracotta
- **Card bg:** parchment, `rounded-xl`, `shadow-warm-sm`

#### Navbar
- **Anatomy:** Logo (left) · Nav links (center) · Search input (right)
- **Logo:** Cup icon + "Brew & Co." wordmark, espresso color, `text-lg` extrabold
- **Nav links:** `text-lg`, weight 500, mocha — active state uses terracotta underline
- **Search:** Pill input, `max-w-xs`, parchment bg, latte placeholder
- **Height:** 72px, full-width, cream background, hairline bottom border

#### HeroSection
- **Anatomy:** Left col (headline + body + CTA) · Center (product hero image on terracotta circle) · Right col (CategoryIcon stack)
- **Headline:** Display variant (6xl, extrabold, espresso, tracking-tight)
- **Body text:** `text-base`, mocha, `max-w-sm`
- **CTA:** Primary button (charcoal pill) with accent icon dot
- **Hero circle:** Terracotta-colored, ~320px diameter, positioned center-slightly-right
- **Vertical padding:** `py-20`

#### SectionHeader
- **Anatomy:** Optional eyebrow label + heading + optional subtitle
- **Eyebrow:** `text-sm`, uppercase, `tracking-wide`, terracotta
- **Heading:** `text-4xl`, extrabold, espresso
- **Subtitle:** `text-base`, mocha

---

## 7. File Structure

All documentation output goes into `Docs/Design/`. All token definitions go into `brewandco/app/globals.css`.

```
Docs/Design/
  style-guide.md              ← Brand overview, color palette, do/don't rules
  tokens.md                   ← Full token reference (mirrors globals.css)
  components/
    button.md
    input.md
    badge.md
    typography.md
    category-icon.md
    product-card.md
    navbar.md
    hero-section.md
    section-header.md

brewandco/app/
  globals.css                 ← @theme block with all tokens (single source of truth)
  layout.tsx                  ← Updated font loading (Plus Jakarta Sans + DM Sans)
```

---

## 8. Implementation Notes

- Tailwind v4 uses `@theme` inside `globals.css` — no `tailwind.config.js` needed
- Custom shadow tokens use Tailwind v4's `--shadow-*` custom property syntax inside `@theme`
- Font loading: use `next/font/google` with `variable` option, apply CSS variables to `<html>` in `layout.tsx`
- The `@/*` path alias in `tsconfig.json` maps to project root — components live at `@/components/`
- Dark mode is currently disabled in the design system — the warm palette does not have a dark variant defined; add later if needed
- Remove the existing `@media (prefers-color-scheme: dark)` block from `globals.css` — it conflicts with the cream/warm palette and sets `--background: #0a0a0a`
