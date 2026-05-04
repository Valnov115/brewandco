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
