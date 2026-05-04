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
