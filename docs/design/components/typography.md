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
