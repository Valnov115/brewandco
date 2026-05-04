# Brew & Co — Style Guide

Brew & Co is a coffee and beverage e-commerce brand. The visual language is warm, artisanal, and approachable — inspired by specialty coffee culture. Every design decision should feel handcrafted and inviting, never corporate or cold.

---

## Brand Voice

- **Warm** — like a knowledgeable barista who's happy to chat
- **Direct** — no filler words; every sentence earns its place
- **Inviting** — makes you want to linger

---

## Color Palette

### Raw Palette

| Name | Hex | Tailwind bg class |
|---|---|---|
| Cream | `#F2E8D9` | `bg-cream` |
| Parchment | `#FAF3EC` | `bg-parchment` |
| Espresso | `#1E0E02` | `bg-espresso` |
| Mocha | `#4A2C1A` | `bg-mocha` |
| Latte | `#9B7355` | `bg-latte` |
| Terracotta | `#C85A38` | `bg-terracotta` |
| Terracotta Dark | `#A3451E` | `bg-terracotta-dark` |
| Charcoal | `#1A1A1A` | `bg-charcoal` |
| Sage | `#7B8B3A` | `bg-sage` |
| Teal Brew | `#2A7A6A` | `bg-teal-brew` |
| Amber Brew | `#D4A832` | `bg-amber-brew` |

### Semantic Usage Rules

Always use the semantic token class, not the raw palette class. Raw classes exist for building the semantic layer — components never reference them directly.

| Semantic token | Use it for | Never use it for |
|---|---|---|
| `bg-bg` | Page background | Card or component backgrounds |
| `bg-surface` | Cards, panels, inputs | Page background |
| `text-text` | Headings, logo | Body paragraphs |
| `text-text-body` | Paragraphs, descriptions | Headings |
| `text-text-muted` | Captions, placeholders, metadata | Anything that must be readable at small sizes |
| `text-accent` / `bg-accent` | Prices, active states, CTA icons | Backgrounds of large areas |
| `bg-cta` | Dark pill button background | Text color |

### Do / Don't

**Do:** Use `text-accent` for prices — it creates a consistent visual signal for value across every product card.

**Don't:** Use terracotta as a background for large content areas — it's an accent color, not a field color.

**Do:** Keep the page background cream (`bg-bg`) and card surfaces parchment (`bg-surface`). The slight warmth difference creates natural depth without shadows.

**Don't:** Introduce grey. There are no grey tones in this palette — use latte (`#9B7355`) for muted content instead.

---

## Typography

### Fonts

| Role | Font | Weights |
|---|---|---|
| Display / Headings | Plus Jakarta Sans | 400, 500, 600, 800 |
| Body / UI | DM Sans | 400, 500 |

Both fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables `--font-jakarta` and `--font-dmsans`. The Tailwind tokens `font-display` and `font-body` map to these variables.

### Type Scale

| Classes | Size | Usage |
|---|---|---|
| `text-6xl font-display font-extrabold` | 60px | Hero headlines only |
| `text-4xl font-display font-extrabold` | 36px | Page-level headings |
| `text-2xl font-display font-extrabold` | 24px | Section headings |
| `text-xl font-display font-semibold` | 20px | Card titles, prices |
| `text-lg font-body font-medium` | 18px | Nav links, lead text |
| `text-base font-body font-normal` | 16px | Body paragraphs |
| `text-sm font-body font-normal` | 14px | Captions, metadata |
| `text-xs font-body font-medium tracking-widest uppercase` | 12px | Category labels, badges |

### Do / Don't

**Do:** Always pair `font-display` with extrabold (`font-extrabold`) for headings — the weight contrast is what gives the brand its bold personality.

**Don't:** Use `font-display` for body text. It's too heavy and reduces readability at paragraph sizes.

**Don't:** Use `font-extrabold` with `font-body` — DM Sans at heavy weights looks out of place with the warm palette.

---

## Spacing & Layout

- Max container width: `max-w-7xl` (1280px), centered with `mx-auto px-6`
- Vertical section padding: `py-20`
- Card internal padding: `p-6`
- Gap between cards in a row: `gap-8`
- Gap between tight UI elements (icon + label): `gap-2`

---

## Shape & Elevation

- **Pill shape** (`rounded-full`): All buttons, search bar, category icons, product image circles
- **Card shape** (`rounded-xl`): Product cards, panels
- **Large panel** (`rounded-2xl`): Major content sections

Shadows are warm-tinted (brown base, not grey). Use `shadow-warm-sm` for cards, `shadow-warm-md` for elevated dropdowns, `shadow-warm-lg` for modals.

---

## Reference Image

`docs/design/reference/1.png.webp` — the primary visual reference for the UI aesthetic.
