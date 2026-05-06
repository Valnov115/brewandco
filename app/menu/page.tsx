"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MENU_ITEMS,
  CATEGORIES,
  type MenuItem,
  type MenuCategory,
} from "@/app/data/menu";
import CategoryNav from "@/components/CategoryNav";
import MenuItemCard from "@/components/MenuItemCard";

type Tab = MenuCategory | "All";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Tab>("All");

  const sections =
    activeCategory === "All"
      ? CATEGORIES.map((cat) => ({
          category: cat,
          items: MENU_ITEMS.filter((item) => item.category === cat),
        }))
      : [
          {
            category: activeCategory as MenuCategory,
            items: MENU_ITEMS.filter(
              (item) => item.category === activeCategory
            ),
          },
        ];

  return (
    <div className="bg-bg min-h-screen">
      {/* Page header with background image */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-end">
        <Image
          src="/images/menu/menu-header-original.webp"
          alt="Brew & Co coffee shop interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={100}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(30,14,2,0.65)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 w-full">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-accent block mb-2">
            What We Serve
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight text-cream">
            Our Menu
          </h1>
          <p className="mt-2 font-body text-base text-cream/80 max-w-md">
            Hand-crafted drinks, fresh-baked pastries and made-to-order
            sandwiches. Something for every moment of the day.
          </p>
        </div>
      </section>

      {/* Sticky category tabs */}
      <CategoryNav active={activeCategory} onChange={setActiveCategory} />

      {/* Item sections */}
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col gap-16">
        {sections.map(({ category, items }) => (
          <section key={category} aria-labelledby={`cat-${category}`}>
            <h2
              id={`cat-${category}`}
              className="font-display text-2xl font-extrabold text-text mb-8"
            >
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item: MenuItem) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
