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
