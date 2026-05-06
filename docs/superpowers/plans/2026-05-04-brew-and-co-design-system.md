# Brew & Co Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Brew & Co design token foundation in `globals.css` and produce a complete set of design documentation in `docs/design/`.

**Architecture:** All design tokens live in a single `@theme` block in `brewandco/app/globals.css` — Tailwind v4 reads this block and generates utility classes plus CSS custom properties automatically. Documentation mirrors the tokens as human-readable markdown in `docs/design/`. No new npm dependencies are added.

**Tech Stack:** Next.js 16.2.4 · React 19 · TypeScript · Tailwind CSS v4 · `next/font/google`

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Modify | `brewandco/app/globals.css` | All design tokens via `@theme` |
| Modify | `brewandco/app/layout.tsx` | Font loading: Plus Jakarta Sans + DM Sans |
| Create | `docs/design/style-guide.md` | Brand overview, palette, do/don'ts |
| Create | `docs/design/tokens.md` | Full token reference + Tailwind class mapping |
| Create | `docs/design/components/button.md` | Button spec |
| Create | `docs/design/components/input.md` | Input spec |
| Create | `docs/design/components/badge.md` | Badge spec |
| Create | `docs/design/components/typography.md` | Typography roles spec |
| Create | `docs/design/components/category-icon.md` | CategoryIcon spec |
| Create | `docs/design/components/product-card.md` | ProductCard spec |
| Create | `docs/design/components/navbar.md` | Navbar spec |
| Create | `docs/design/components/hero-section.md` | HeroSection spec |
| Create | `docs/design/components/section-header.md` | SectionHeader spec |

---

## Task 1: Check Next.js 16 font API before writing any code

**Files:** Read-only — no changes

- [ ] **Step 1: Check for Next.js 16 font docs**

Run from `brewandco/`:
```bash
ls node_modules/next/dist/docs/ 2>/dev/null || echo "no docs dir"
```

If the docs dir exists, scan for any font-related guide:
```bash
ls node_modules/next/dist/docs/ | grep -i font
```

- [ ] **Step 2: Verify the font import name for Plus Jakarta Sans**

Run:
```bash
node -e "const g = require('next/dist/compiled/next-server/app-page.runtime.dev.js'); console.log('ok')" 2>/dev/null; echo "next loads ok"
```

Then confirm the Google Fonts export name by checking:
```bash
node -e "const f = require('next/font/google'); console.log(Object.keys(f).filter(k => k.includes('Jakarta')))"
```

Expected output: `[ 'Plus_Jakarta_Sans' ]`

- [ ] **Step 3: Verify the font import name for DM Sans**

Run:
```bash
node -e "const f = require('next/font/google'); console.log(Object.keys(f).filter(k => k.includes('DM_Sans')))"
```

Expected output: `[ 'DM_Sans' ]`

If either name differs from what's shown above, use the actual exported name in Task 3.

---

## Task 2: Replace globals.css with design token foundation

**Files:**
- Modify: `brewandco/app/globals.css`

- [ ] **Step 1: Replace the full file content**

Replace `brewandco/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  /* ── Raw palette ── */
  --color-cream: #F2E8D9;
  --color-parchment: #FAF3EC;
  --color-espresso: #1E0E02;
  --color-mocha: #4A2C1A;
  --color-latte: #9B7355;
  --color-terracotta: #C85A38;
  --color-terracotta-dark: #A3451E;
  --color-charcoal: #1A1A1A;
  --color-sage: #7B8B3A;
  --color-teal-brew: #2A7A6A;
  --color-amber-brew: #D4A832;

  /* ── Semantic tokens ── */
  --color-bg: #F2E8D9;
  --color-surface: #FAF3EC;
  --color-text: #1E0E02;
  --color-text-body: #4A2C1A;
  --color-text-muted: #9B7355;
  --color-accent: #C85A38;
  --color-accent-dark: #A3451E;
  --color-cta: #1A1A1A;
  --color-category-coffee: #7B8B3A;
  --color-category-drinks: #2A7A6A;
  --color-category-tea: #C85A38;
  --color-category-bakery: #D4A832;

  /* ── Font families ── */
  --font-display: var(--font-jakarta), 'Plus Jakarta Sans', sans-serif;
  --font-body: var(--font-dmsans), 'DM Sans', sans-serif;
  --font-mono: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;

  /* ── Shadows (warm-tinted) ── */
  --shadow-warm-sm: 0 1px 3px rgba(78, 44, 26, 0.08);
  --shadow-warm-md: 0 4px 16px rgba(78, 44, 26, 0.12);
  --shadow-warm-lg: 0 8px 32px rgba(78, 44, 26, 0.16);

  /* ── Border radius overrides ── */
  --radius-sm: 4px;
  --radius-DEFAULT: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}
```

- [ ] **Step 2: Verify the file saved correctly**

Run:
```bash
head -5 brewandco/app/globals.css
```

Expected: first line is `@import "tailwindcss";`

---

## Task 3: Update layout.tsx with Plus Jakarta Sans and DM Sans

**Files:**
- Modify: `brewandco/app/layout.tsx`

- [ ] **Step 1: Replace the full file content**

Replace `brewandco/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Brew & Co",
  description: "Premium coffee and beverages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

---

## Task 4: Verify the build and commit the token foundation

**Files:** No new changes — verification + commit only

- [ ] **Step 1: Run the dev build from the brewandco directory**

Run from `brewandco/`:
```bash
npm run build 2>&1 | tail -20
```

Expected: build completes with no errors. If you see a font name error (e.g. `Plus_Jakarta_Sans is not exported`), go back to Task 1 Step 2 and use the correct export name.

- [ ] **Step 2: Spot-check that Tailwind picks up the tokens**

Run:
```bash
npm run build 2>&1 | grep -i "error\|warning" | head -10
```

Expected: no CSS parsing errors mentioning `@theme` or `--color-`.

- [ ] **Step 3: Commit the foundation**

Run from the repo root (`D:\Claude Playground\brew-and-co\` or wherever the .git lives — note: the .git is inside `brewandco/`):
```bash
cd brewandco && git add app/globals.css app/layout.tsx && git commit -m "feat: add design token foundation and replace fonts"
```

---

## Task 5: Create docs/design/ structure and write style-guide.md

**Files:**
- Create: `docs/design/style-guide.md`
- Create dir: `docs/design/components/`

- [ ] **Step 1: Create the components subdirectory**

Run from the repo root:
```bash
mkdir -p "docs/design/components"
```

- [ ] **Step 2: Write docs/design/style-guide.md**

Create `docs/design/style-guide.md` with this content:

```markdown
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

| Swatch | Name | Hex | Tailwind class |
|---|---|---|---|
| ![](https://via.placeholder.com/16/F2E8D9/F2E8D9) | Cream | `#F2E8D9` | `bg-cream` |
| ![](https://via.placeholder.com/16/FAF3EC/FAF3EC) | Parchment | `#FAF3EC` | `bg-parchment` |
| ![](https://via.placeholder.com/16/1E0E02/1E0E02) | Espresso | `#1E0E02` | `bg-espresso` |
| ![](https://via.placeholder.com/16/4A2C1A/4A2C1A) | Mocha | `#4A2C1A` | `bg-mocha` |
| ![](https://via.placeholder.com/16/9B7355/9B7355) | Latte | `#9B7355` | `bg-latte` |
| ![](https://via.placeholder.com/16/C85A38/C85A38) | Terracotta | `#C85A38` | `bg-terracotta` |
| ![](https://via.placeholder.com/16/A3451E/A3451E) | Terracotta Dark | `#A3451E` | `bg-terracotta-dark` |
| ![](https://via.placeholder.com/16/1A1A1A/1A1A1A) | Charcoal | `#1A1A1A` | `bg-charcoal` |
| ![](https://via.placeholder.com/16/7B8B3A/7B8B3A) | Sage | `#7B8B3A` | `bg-sage` |
| ![](https://via.placeholder.com/16/2A7A6A/2A7A6A) | Teal Brew | `#2A7A6A` | `bg-teal-brew` |
| ![](https://via.placeholder.com/16/D4A832/D4A832) | Amber Brew | `#D4A832` | `bg-amber-brew` |

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

| Class | Size | Weight | Usage |
|---|---|---|---|
| `text-6xl font-display font-extrabold` | 60px | 800 | Hero headlines only |
| `text-4xl font-display font-extrabold` | 36px | 800 | Page-level headings |
| `text-2xl font-display font-extrabold` | 24px | 800 | Section headings |
| `text-xl font-display font-semibold` | 20px | 600 | Card titles, prices |
| `text-lg font-body font-medium` | 18px | 500 | Nav links, lead text |
| `text-base font-body font-normal` | 16px | 400 | Body paragraphs |
| `text-sm font-body font-normal` | 14px | 400 | Captions, metadata |
| `text-xs font-body font-medium tracking-widest uppercase` | 12px | 500 | Category labels, badges |

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
```

---

## Task 6: Write docs/design/tokens.md

**Files:**
- Create: `docs/design/tokens.md`

- [ ] **Step 1: Write the file**

Create `docs/design/tokens.md` with this content:

```markdown
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
| `--radius-DEFAULT` | `8px` | `rounded` |
| `--radius-lg` | `12px` | `rounded-lg` |
| `--radius-xl` | `16px` | `rounded-xl` |
| `--radius-2xl` | `24px` | `rounded-2xl` |
| (built-in) | `9999px` | `rounded-full` |

---

## Shadow Tokens

Custom shadows — not Tailwind defaults. Reference as utility classes.

| CSS variable | Value | Tailwind class | Usage |
|---|---|---|---|
| `--shadow-warm-sm` | `0 1px 3px rgba(78,44,26,0.08)` | `shadow-warm-sm` | Subtle card lift |
| `--shadow-warm-md` | `0 4px 16px rgba(78,44,26,0.12)` | `shadow-warm-md` | Elevated cards, dropdowns |
| `--shadow-warm-lg` | `0 8px 32px rgba(78,44,26,0.16)` | `shadow-warm-lg` | Modals, focal elements |
```

---

## Task 7: Write docs/design/components/button.md

**Files:**
- Create: `docs/design/components/button.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/button.md` with this content:

```markdown
# Button

Buttons trigger actions. All buttons are pill-shaped (`rounded-full`). The four variants cover the full range of use cases on the site.

---

## Anatomy

```
┌──────────────────────────────┐
│  [optional icon]  Label      │
└──────────────────────────────┘
     ^                ^
     icon slot        label (required)
```

---

## Variants

### Primary (dark pill)

The default CTA button — used for the main action on a page or section.

```tsx
<button className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-base font-body font-medium text-cream hover:bg-espresso active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none">
  Get Promo
</button>
```

### Accent (terracotta)

Used for secondary CTAs and confirmations.

```tsx
<button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-body font-medium text-cream hover:bg-accent-dark active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none">
  Add to Cart
</button>
```

### Ghost

Used for low-emphasis actions (cancel, back, view all).

```tsx
<button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-body font-medium text-accent hover:bg-accent/10 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none">
  View All
</button>
```

### Icon

Square-ish rounded button for icon-only actions (search, close, play).

```tsx
<button className="inline-flex items-center justify-center rounded-xl p-3 text-text-body hover:bg-surface active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none" aria-label="Search">
  {/* icon svg here */}
</button>
```

---

## Sizes

| Size | Classes |
|---|---|
| sm | `px-4 py-2 text-sm` |
| md (default) | `px-6 py-3 text-base` |
| lg | `px-8 py-4 text-lg` |

Replace the size portion of the variant class string to switch sizes.

---

## States

| State | Visual |
|---|---|
| Default | As shown above |
| Hover | Darker bg or tinted bg (`hover:bg-*`) |
| Active/Pressed | `active:scale-95` — slight scale-down |
| Disabled | `opacity-40 pointer-events-none` — no interaction |
| Focus | Browser default focus ring — do not suppress |

---

## Do / Don't

**Do:** Use Primary for one action per screen section. There should never be two Primary buttons competing for attention.

**Don't:** Use multiple Accent buttons in a row — it creates visual noise. Mix Accent + Ghost instead.

**Do:** Always provide `aria-label` on Icon buttons — there's no visible label for screen readers.

**Don't:** Change the border-radius. All buttons are pill-shaped — this is non-negotiable brand shape.
```

---

## Task 8: Write docs/design/components/input.md

**Files:**
- Create: `docs/design/components/input.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/input.md` with:

```markdown
# Input

Text inputs for user data entry. All inputs are pill-shaped and use the parchment surface.

---

## Anatomy

```
┌─────────────────────────────────────────┐
│  [leading icon]   placeholder text      │
└─────────────────────────────────────────┘
       ^                    ^
       icon slot (optional) value/placeholder
```

---

## Variants

### Default

```tsx
<input
  type="text"
  placeholder="Your email"
  className="w-full rounded-full bg-surface px-5 py-3 text-base font-body text-text-body placeholder:text-text-muted outline-none border border-transparent focus:border-accent transition-colors"
/>
```

### Search

```tsx
<div className="relative flex items-center">
  <svg className="absolute left-4 h-4 w-4 text-text-muted" /* search icon */ />
  <input
    type="search"
    placeholder="Search"
    className="w-full rounded-full bg-surface pl-10 pr-5 py-3 text-base font-body text-text-body placeholder:text-text-muted outline-none border border-transparent focus:border-accent transition-colors"
  />
</div>
```

---

## States

| State | Visual |
|---|---|
| Default | `bg-surface`, transparent border |
| Focus | `border-accent` |
| Error | `border-terracotta-dark` |
| Disabled | `opacity-40 pointer-events-none` |

---

## Do / Don't

**Do:** Always include a visible label element above the input for accessibility — placeholder text is not a label.

**Don't:** Remove the focus ring (`outline-none` is set, but the `border-accent` focus state replaces it — keep the `focus:border-accent` class).
```

---

## Task 9: Write docs/design/components/badge.md

**Files:**
- Create: `docs/design/components/badge.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/badge.md` with:

```markdown
# Badge

Small labels that convey category or price information. Always pill-shaped.

---

## Variants

### Category Label

Used under category icons and as section labels.

```tsx
<span className="inline-block rounded-full px-3 py-1 text-xs font-body font-medium uppercase tracking-widest text-text-body bg-surface">
  Coffee
</span>
```

### Price

Used on product cards to display the item price.

```tsx
<span className="text-xl font-display font-semibold text-accent">
  $30.00
</span>
```

Price is not wrapped in a pill — it's a styled text element, not a container.

---

## Do / Don't

**Do:** Use `uppercase tracking-widest` on category labels — it creates the premium visual register.

**Don't:** Use the Price variant for anything other than monetary values — `text-accent` is reserved for prices.
```

---

## Task 10: Write docs/design/components/typography.md

**Files:**
- Create: `docs/design/components/typography.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/typography.md` with:

```markdown
# Typography

Typography roles define how text is styled across the UI. These are not React components — they are documented class combinations that map to specific semantic roles.

---

## Roles

### Display

Hero headline. Used once per page, in the hero section only.

```tsx
<h1 className="font-display text-6xl font-extrabold leading-tight tracking-tight text-text">
  When Life Gives You Lemons, Trade Them For Coffee!!
</h1>
```

### Heading

Page-level and section headings.

```tsx
// Page heading (h2)
<h2 className="font-display text-4xl font-extrabold leading-tight text-text">
  Our Menu
</h2>

// Section heading (h3)
<h3 className="font-display text-2xl font-extrabold leading-snug text-text">
  Featured Drinks
</h3>
```

### Body

Standard paragraph text.

```tsx
<p className="font-body text-base font-normal leading-relaxed text-text-body">
  Shake up your taste buds with a chocolate delight. Chill out with our chocolicious shakes.
</p>
```

### Muted

Secondary text — captions, metadata, subtitles.

```tsx
<span className="font-body text-sm font-normal text-text-muted">
  12 oz · Hot or Iced
</span>
```

### Price

Product price display. Always terracotta.

```tsx
<span className="font-display text-xl font-semibold text-accent">
  $30.00
</span>
```

---

## Do / Don't

**Do:** Use `font-display` (Plus Jakarta Sans) for all headings.

**Don't:** Use `font-display` for body copy — it becomes heavy and hard to read at 16px.

**Do:** Pair `text-6xl` with `tracking-tight` — at large sizes, default tracking looks too loose.

**Don't:** Use `text-text-muted` (latte) for anything that must pass WCAG AA contrast — it is intentionally low-contrast for decorative use.
```

---

## Task 11: Write docs/design/components/category-icon.md

**Files:**
- Create: `docs/design/components/category-icon.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/category-icon.md` with:

```markdown
# CategoryIcon

A colored circle containing a product-category illustration with a label underneath. Used as a vertical stack on the right side of the hero section.

---

## Anatomy

```
    ┌──────────┐
    │          │  ← colored circle (bg-category-*)
    │   icon   │  ← illustration/icon centered inside
    │          │
    └──────────┘
      CATEGORY   ← uppercase label below
```

---

## Variants

| Variant | Circle color class | Label |
|---|---|---|
| Coffee | `bg-category-coffee` | COFFEE |
| Drinks | `bg-category-drinks` | DRINKS |
| Tea | `bg-category-tea` | TEA |
| Bakery | `bg-category-bakery` | BAKERY |

---

## Tailwind Composition

```tsx
<div className="flex flex-col items-center gap-2">
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-category-coffee shadow-warm-sm">
    {/* illustration or icon svg */}
  </div>
  <span className="font-body text-xs font-medium uppercase tracking-widest text-text-body">
    Coffee
  </span>
</div>
```

For the Drinks variant, swap `bg-category-coffee` → `bg-category-drinks`, and so on.

---

## Dimensions

| Breakpoint | Circle size |
|---|---|
| Desktop (md+) | `h-14 w-14` (56×56px) |
| Mobile | `h-11 w-11` (44×44px) |

Apply: `h-11 w-11 md:h-14 md:w-14`

---

## Usage

Always rendered as a vertical stack. In the hero, render four stacked vertically with `gap-6` between each.

---

## Do / Don't

**Do:** Keep the circle perfectly square with equal `h-` and `w-` values — `rounded-full` only produces a circle on a square element.

**Don't:** Add text inside the circle — the category label lives below, not inside.
```

---

## Task 12: Write docs/design/components/product-card.md

**Files:**
- Create: `docs/design/components/product-card.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/product-card.md` with:

```markdown
# ProductCard

Displays a single product with its image circle, name, and price. Two layout variants: horizontal (reference row) and vertical (grid).

---

## Anatomy

```
Horizontal variant:
┌────────────────────────────────────┐
│  ┌────┐   Product Name             │
│  │ ○  │   $30.00                   │
│  └────┘                            │
└────────────────────────────────────┘
   ^ image circle (80×80px)

Vertical variant:
┌───────────────┐
│    ┌────┐     │
│    │ ○  │     │
│    └────┘     │
│  Product Name │
│  $30.00       │
└───────────────┘
```

---

## Horizontal Variant

Used in the product row on the home page.

```tsx
<div className="flex items-center gap-4 rounded-xl bg-surface p-6 shadow-warm-sm">
  <div className="relative h-20 w-20 shrink-0">
    <div className="h-20 w-20 rounded-full bg-category-coffee" />
    {/* product image positioned absolutely over the circle */}
    <img
      src="/products/nutella-mudslide.png"
      alt="Nutella Mudslide"
      className="absolute inset-0 h-full w-full object-contain"
    />
  </div>
  <div className="flex flex-col gap-1">
    <span className="font-display text-xl font-semibold text-text">Nutella Mudslide</span>
    <span className="font-display text-xl font-semibold text-accent">$30.00</span>
  </div>
</div>
```

## Vertical Variant

Used in grid layouts (shop page, category pages).

```tsx
<div className="flex flex-col items-center gap-3 rounded-xl bg-surface p-6 shadow-warm-sm">
  <div className="relative h-20 w-20">
    <div className="h-20 w-20 rounded-full bg-category-coffee" />
    <img
      src="/products/nutella-mudslide.png"
      alt="Nutella Mudslide"
      className="absolute inset-0 h-full w-full object-contain"
    />
  </div>
  <div className="flex flex-col items-center gap-1 text-center">
    <span className="font-display text-xl font-semibold text-text">Nutella Mudslide</span>
    <span className="font-display text-xl font-semibold text-accent">$30.00</span>
  </div>
</div>
```

---

## Image Circle

The product image floats over a solid-color circle. Circle color matches the product category:

| Category | Circle class |
|---|---|
| Coffee | `bg-category-coffee` |
| Drinks | `bg-category-drinks` |
| Tea | `bg-category-tea` |
| Bakery | `bg-category-bakery` |

---

## Do / Don't

**Do:** Keep image and circle the same `h-` and `w-` values so the circle is perfectly round.

**Don't:** Clip the product image to the circle — the illustration should overflow the circle boundary for visual interest (see reference image).

**Do:** Use the horizontal variant for featured/hero product rows (max 3 per row). Use vertical for browse grids.
```

---

## Task 13: Write docs/design/components/navbar.md

**Files:**
- Create: `docs/design/components/navbar.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/navbar.md` with:

```markdown
# Navbar

The site header. Full-width, 72px tall, cream background. Three zones: logo (left), nav links (center), search (right).

---

## Anatomy

```
┌─────────────────────────────────────────────────────────┐
│  ☕ Brew & Co.    Home  Shop  Vendor  Pages  Blog   [🔍] │
└─────────────────────────────────────────────────────────┘
   ^logo            ^nav links (center)          ^search
```

---

## Tailwind Composition

```tsx
<header className="w-full h-18 bg-bg border-b border-mocha/10">
  <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between gap-8">

    {/* Logo */}
    <a href="/" className="flex items-center gap-2 shrink-0">
      {/* cup icon svg */}
      <span className="font-display text-lg font-extrabold text-text">Brew &amp; Co.</span>
    </a>

    {/* Nav links */}
    <nav className="flex items-center gap-8">
      {["Home","Shop","Vendor","Pages","Blog"].map(link => (
        <a
          key={link}
          href="#"
          className="font-body text-lg font-medium text-text-body hover:text-accent transition-colors"
        >
          {link}
        </a>
      ))}
    </nav>

    {/* Search */}
    <div className="relative flex items-center shrink-0 w-48">
      <svg className="absolute left-4 h-4 w-4 text-text-muted" /* search icon */ />
      <input
        type="search"
        placeholder="Search"
        className="w-full rounded-full bg-surface pl-10 pr-4 py-2 text-sm font-body text-text-body placeholder:text-text-muted outline-none border border-transparent focus:border-accent transition-colors"
      />
    </div>

  </div>
</header>
```

---

## Active State

The active nav link uses `text-accent` and a bottom border:

```tsx
className="font-body text-lg font-medium text-accent border-b-2 border-accent pb-0.5"
```

---

## Do / Don't

**Do:** Keep the nav links in the exact order: Home, Shop, Vendor, Pages, Blog — this is the canonical nav order from the reference.

**Don't:** Stack the three zones vertically on mobile without a separate mobile menu design — the three-zone layout only works at ≥768px.
```

---

## Task 14: Write docs/design/components/hero-section.md

**Files:**
- Create: `docs/design/components/hero-section.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/hero-section.md` with:

```markdown
# HeroSection

The above-the-fold section of the home page. Three-column layout: left (headline + CTA), center (product image on terracotta circle), right (category icon stack).

---

## Anatomy

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  When Life Gives You      [hero drink img]   ☕ COFFEE   │
│  Lemons, Trade Them                          🥤 DRINKS   │
│  For Coffee!!             (terracotta        🍵 TEA      │
│                            circle bg)        🧁 BAKERY   │
│  Shake up your taste buds                               │
│  with a chocolate delight.                              │
│                                                          │
│  [Get Promo  ▶]                                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Layout Grid

Three columns with `grid-cols-[1fr_auto_auto]` at desktop:

```tsx
<section className="bg-bg py-20">
  <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] items-center gap-12">

    {/* Left: copy */}
    <div className="flex flex-col gap-6 max-w-lg">
      <h1 className="font-display text-6xl font-extrabold leading-tight tracking-tight text-text">
        When Life Gives You Lemons, Trade Them For Coffee!!
      </h1>
      <p className="font-body text-base font-normal leading-relaxed text-text-body max-w-sm">
        Shake up your taste buds with a chocolate delight. Chill out with our chocolicious shakes. Pure cocoa goodness in every sip.
      </p>
      <div className="flex items-center gap-4">
        <button className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-base font-body font-medium text-cream hover:bg-espresso active:scale-95 transition-all">
          Get Promo
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
            ▶
          </span>
        </button>
      </div>
    </div>

    {/* Center: hero product image */}
    <div className="relative flex items-center justify-center">
      <div className="h-80 w-80 rounded-full bg-terracotta/80" />
      <img
        src="/products/hero-drink.png"
        alt="Featured drink"
        className="absolute h-96 w-auto object-contain"
      />
    </div>

    {/* Right: category icons */}
    <div className="flex flex-col items-center gap-6">
      {/* Render 4 CategoryIcon components: Coffee, Drinks, Tea, Bakery */}
    </div>

  </div>
</section>
```

---

## Hero Circle

- Background: `bg-terracotta/80` (80% opacity terracotta for a slightly washed look)
- Size: `h-80 w-80` (320×320px)
- Product image overflows the circle — do not clip it

---

## Do / Don't

**Do:** Keep the hero headline at 3 lines maximum — the three-line rhythm from the reference is intentional.

**Don't:** Center-align the left copy column — it is left-aligned to create visual tension with the centered hero image.

**Do:** Render all 4 CategoryIcon variants in the right column, in order: Coffee, Drinks, Tea, Bakery.
```

---

## Task 15: Write docs/design/components/section-header.md

**Files:**
- Create: `docs/design/components/section-header.md`

- [ ] **Step 1: Write the file**

Create `docs/design/components/section-header.md` with:

```markdown
# SectionHeader

A reusable heading block for content sections. Optional eyebrow label above the heading and optional subtitle below.

---

## Anatomy

```
  EYEBROW LABEL       ← optional, terracotta, uppercase
  Section Heading     ← required, espresso, extrabold
  Subtitle text here  ← optional, mocha, body
```

---

## Variants

### Heading only

```tsx
<div className="flex flex-col gap-2">
  <h2 className="font-display text-4xl font-extrabold leading-tight text-text">
    Our Menu
  </h2>
</div>
```

### With eyebrow + subtitle

```tsx
<div className="flex flex-col gap-3">
  <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
    What We Offer
  </span>
  <h2 className="font-display text-4xl font-extrabold leading-tight text-text">
    Our Menu
  </h2>
  <p className="font-body text-base font-normal text-text-body max-w-md">
    Handcrafted drinks made with love, sourced from the best beans around the world.
  </p>
</div>
```

---

## Do / Don't

**Do:** Use the eyebrow label to add context when the section heading alone is too generic (e.g. "Products" needs context — "What We Offer / Products" does not).

**Don't:** Use the eyebrow label on every section — it loses meaning when overused.
```

---

## Task 16: Commit all design documentation

**Files:** No new changes — commit only

- [ ] **Step 1: Stage all new docs**

Run from the repo root:
```bash
cd brewandco && git add ../docs/design/ && git status
```

Verify the staged files include:
- `docs/design/style-guide.md`
- `docs/design/tokens.md`
- `docs/design/components/button.md`
- `docs/design/components/input.md`
- `docs/design/components/badge.md`
- `docs/design/components/typography.md`
- `docs/design/components/category-icon.md`
- `docs/design/components/product-card.md`
- `docs/design/components/navbar.md`
- `docs/design/components/hero-section.md`
- `docs/design/components/section-header.md`

- [ ] **Step 2: Commit**

```bash
git commit -m "docs: add complete Brew & Co design system documentation"
```

---

## Self-Review Notes

**Spec coverage:**
- ✅ Color tokens (raw + semantic) — Tasks 2, 6
- ✅ Typography (fonts + scale) — Tasks 3, 6, 10
- ✅ Spacing — Tasks 5, 6
- ✅ Border radius — Task 2
- ✅ Shadows — Tasks 2, 6
- ✅ Button — Task 7
- ✅ Input — Task 8
- ✅ Badge — Task 9
- ✅ Typography roles — Task 10
- ✅ CategoryIcon — Task 11
- ✅ ProductCard — Task 12
- ✅ Navbar — Task 13
- ✅ HeroSection — Task 14
- ✅ SectionHeader — Task 15
- ✅ style-guide.md — Task 5
- ✅ tokens.md — Task 6
- ✅ File structure as specced — all paths match the spec

**Type consistency:** No shared types across tasks — each task is self-contained markup/CSS.

**No placeholders found.**
