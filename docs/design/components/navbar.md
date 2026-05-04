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
