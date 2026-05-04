import Image from "next/image";
import { type MenuItem, CATEGORY_COLORS } from "@/app/data/menu";

function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const circleColor = CATEGORY_COLORS[item.category];

  return (
    <div className="flex flex-col rounded-xl bg-surface p-5 shadow-warm-sm hover:shadow-warm-md transition-shadow">
      {/* Image circle */}
      <div className="flex justify-center mb-4">
        <div className={`relative h-28 w-28 rounded-full ${circleColor}`}>
          <Image
            src={`https://images.pexels.com/photos/${item.pexelsId}/pexels-photo-${item.pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=224`}
            alt={`${item.name}`}
            width={112}
            height={112}
            className="absolute inset-0 h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Badge */}
      {item.badge && (
        <div className="flex justify-center mb-2">
          <span
            className={`inline-block rounded-full px-3 py-0.5 text-xs font-body font-medium uppercase tracking-widest ${
              item.badge === "House Favorite"
                ? "bg-accent/10 text-accent"
                : "bg-category-coffee/10 text-category-coffee"
            }`}
          >
            {item.badge}
          </span>
        </div>
      )}

      {/* Name */}
      <h3 className="font-display text-base font-semibold text-text text-center leading-snug mb-1">
        {item.name}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-text-muted text-center leading-relaxed flex-1 mb-3">
        {item.description}
      </p>

      {/* Price */}
      <p className="font-display text-lg font-semibold text-accent text-center">
        {formatPrice(item.price)}
      </p>
    </div>
  );
}
