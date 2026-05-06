import Image from "next/image";
import { type MenuItem, CATEGORY_COLORS, formatPrice, getItemImageUrl } from "@/app/data/menu";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const bgColor = CATEGORY_COLORS[item.category];

  return (
    <div className="flex flex-col rounded-2xl bg-surface shadow-warm-sm hover:shadow-warm-md transition-shadow overflow-hidden">
      {/* Image */}
      <div className={`relative h-48 w-full ${bgColor}`}>
        <Image
          src={getItemImageUrl(item, 400)}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          quality={100}
        />
        {item.badge && (
          <span
            className={`absolute top-3 left-3 inline-block rounded-full px-2.5 py-0.5 text-xs font-body font-medium ${
              item.badge === "House Favorite"
                ? "bg-accent/90 text-cream"
                : "bg-espresso/80 text-cream"
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <h3 className="font-display text-base font-semibold text-text leading-snug">
          {item.name}
        </h3>
        <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>
        <span className="font-display text-lg font-semibold text-accent mt-1">
          {formatPrice(item.price)}
        </span>
      </div>
    </div>
  );
}
