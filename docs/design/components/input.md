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
