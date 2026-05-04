import Image from "next/image";
import Link from "next/link";
import { POPULAR_ITEMS, CATEGORY_COLORS, formatPrice, getItemImageUrl, type MenuItem } from "@/app/data/menu";

const FEATURED = POPULAR_ITEMS.slice(0, 6);

export default function PopularItemsSection() {
  return (
    <section className="py-20 bg-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
            Fan Favourites
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-text">
            Most Loved Items
          </h2>
          <p className="font-body text-base text-text-body max-w-md">
            Our regulars keep coming back for these. Here&apos;s what they
            can&apos;t stop ordering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED.map((item: MenuItem) => {
            const circleColor = CATEGORY_COLORS[item.category];
            return (
              <div
                key={item.id}
                className="flex flex-col rounded-2xl bg-surface shadow-warm-md overflow-hidden hover:shadow-warm-lg transition-shadow"
              >
                {/* Large image area */}
                <div className={`relative h-56 w-full ${circleColor}`}>
                  <Image
                    src={getItemImageUrl(item, 600)}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 inline-block rounded-full bg-espresso/80 backdrop-blur-sm px-3 py-1 text-xs font-body font-medium text-cream">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 p-5">
                  <span className="font-display text-lg font-semibold text-text leading-snug">
                    {item.name}
                  </span>
                  <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <span className="font-display text-xl font-semibold text-accent mt-1">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-body font-medium text-accent hover:bg-accent/10 active:scale-95 transition-all border border-accent/30"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
