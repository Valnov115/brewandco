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
