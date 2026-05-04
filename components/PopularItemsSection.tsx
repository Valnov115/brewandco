import Image from "next/image";
import Link from "next/link";
import { POPULAR_ITEMS, CATEGORY_COLORS, type MenuItem } from "@/app/data/menu";

function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED.map((item: MenuItem) => {
            const circleColor = CATEGORY_COLORS[item.category];
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl bg-surface p-5 shadow-warm-sm hover:shadow-warm-md transition-shadow"
              >
                {/* Image circle */}
                <div className={`relative h-20 w-20 shrink-0 rounded-full ${circleColor}`}>
                  <Image
                    src={`https://images.pexels.com/photos/${item.pexelsId}/pexels-photo-${item.pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=160`}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="absolute inset-0 h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 min-w-0">
                  {item.badge && (
                    <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-body font-medium text-accent self-start">
                      {item.badge}
                    </span>
                  )}
                  <span className="font-display text-base font-semibold text-text leading-snug">
                    {item.name}
                  </span>
                  <span className="font-display text-base font-semibold text-accent">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
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
