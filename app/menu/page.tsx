"use client";

import { useState } from "react";
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
      {/* Page header */}
      <div className="py-16 bg-surface border-b border-mocha/10">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
            What We Serve
          </span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold leading-tight text-text">
            Our Menu
          </h1>
          <p className="mt-3 font-body text-base text-text-body max-w-md">
            Hand-crafted drinks, fresh-baked pastries and made-to-order
            sandwiches. Something for every moment of the day.
          </p>
        </div>
      </div>

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
