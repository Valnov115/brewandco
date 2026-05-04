# Brew & Co — Design Tokens

All tokens are defined in `brewandco/app/globals.css` inside the `@theme` block. Tailwind v4 reads this block and:
1. Generates utility classes (e.g. `bg-cream`, `text-accent`, `shadow-warm-md`)
2. Exposes the values as CSS custom properties in `:root` (e.g. `var(--color-cream)`)

Use utility classes in TSX. Use `var()` only in CSS when no Tailwind utility exists for that property.

---

## Color Tokens

### Raw Palette

| CSS variable | Hex | Tailwind bg | Tailwind text |
|---|---|---|---|
| `--color-cream` | `#F2E8D9` | `bg-cream` | `text-cream` |
| `--color-parchment` | `#FAF3EC` | `bg-parchment` | `text-parchment` |
| `--color-espresso` | `#1E0E02` | `bg-espresso` | `text-espresso` |
| `--color-mocha` | `#4A2C1A` | `bg-mocha` | `text-mocha` |
| `--color-latte` | `#9B7355` | `bg-latte` | `text-latte` |
| `--color-terracotta` | `#C85A38` | `bg-terracotta` | `text-terracotta` |
| `--color-terracotta-dark` | `#A3451E` | `bg-terracotta-dark` | `text-terracotta-dark` |
| `--color-charcoal` | `#1A1A1A` | `bg-charcoal` | `text-charcoal` |
| `--color-sage` | `#7B8B3A` | `bg-sage` | `text-sage` |
| `--color-teal-brew` | `#2A7A6A` | `bg-teal-brew` | `text-teal-brew` |
| `--color-amber-brew` | `#D4A832` | `bg-amber-brew` | `text-amber-brew` |

### Semantic Tokens

| CSS variable | Hex | Tailwind class | Role |
|---|---|---|---|
| `--color-bg` | `#F2E8D9` | `bg-bg` | Page background |
| `--color-surface` | `#FAF3EC` | `bg-surface` | Cards, panels |
| `--color-text` | `#1E0E02` | `text-text` | Primary text (headings) |
| `--color-text-body` | `#4A2C1A` | `text-text-body` | Body paragraphs |
| `--color-text-muted` | `#9B7355` | `text-text-muted` | Captions, placeholders |
| `--color-accent` | `#C85A38` | `text-accent` / `bg-accent` | Prices, active states |
| `--color-accent-dark` | `#A3451E` | `bg-accent-dark` | Hover/pressed on accent |
| `--color-cta` | `#1A1A1A` | `bg-cta` | Dark pill button |
| `--color-category-coffee` | `#7B8B3A` | `bg-category-coffee` | Coffee category circle |
| `--color-category-drinks` | `#2A7A6A` | `bg-category-drinks` | Drinks category circle |
| `--color-category-tea` | `#C85A38` | `bg-category-tea` | Tea category circle |
| `--color-category-bakery` | `#D4A832` | `bg-category-bakery` | Bakery category circle |

---

## Typography Tokens

### Font Family

| CSS variable | Value | Tailwind class |
|---|---|---|
| `--font-display` | Plus Jakarta Sans | `font-display` |
| `--font-body` | DM Sans | `font-body` |
| `--font-mono` | System monospace stack | `font-mono` |

Fonts are loaded in `layout.tsx` via `next/font/google` and injected as `--font-jakarta` and `--font-dmsans` CSS variables on `<html>`.

### Type Scale (standard Tailwind — no overrides needed)

| Tailwind class | Size |
|---|---|
| `text-xs` | 12px |
| `text-sm` | 14px |
| `text-base` | 16px |
| `text-lg` | 18px |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-4xl` | 36px |
| `text-6xl` | 60px |

---

## Spacing Tokens

Standard Tailwind spacing scale — no overrides. Key stops:

| Tailwind class | Value | Usage |
|---|---|---|
| `p-2` / `gap-2` | 8px | Tight gaps |
| `p-4` / `gap-4` | 16px | Internal component padding |
| `p-6` / `gap-6` | 24px | Card padding, nav gaps |
| `gap-8` | 32px | Row gaps between cards |
| `gap-12` | 48px | Between content blocks |
| `py-20` | 80px | Vertical section padding |
| `max-w-7xl` | 1280px | Container max-width |

---

## Border Radius Tokens

| CSS variable | Value | Tailwind class |
|---|---|---|
| `--radius-sm` | `4px` | `rounded-sm` |
| `--radius` | `8px` | `rounded` |
| `--radius-lg` | `12px` | `rounded-lg` |
| `--radius-xl` | `16px` | `rounded-xl` |
| `--radius-2xl` | `24px` | `rounded-2xl` |
| (built-in) | `9999px` | `rounded-full` |

---

## Shadow Tokens

Custom shadows — not Tailwind defaults. Reference as utility classes.

| CSS variable | Value | Tailwind class | Usage |
|---|---|---|---|
| `--shadow-warm-sm` | `0 1px 3px rgba(74,44,26,0.08)` | `shadow-warm-sm` | Subtle card lift |
| `--shadow-warm-md` | `0 4px 16px rgba(74,44,26,0.12)` | `shadow-warm-md` | Elevated cards, dropdowns |
| `--shadow-warm-lg` | `0 8px 32px rgba(74,44,26,0.16)` | `shadow-warm-lg` | Modals, focal elements |
