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
