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
