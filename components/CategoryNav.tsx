"use client";

import { type MenuCategory, CATEGORIES } from "@/app/data/menu";

type Tab = MenuCategory | "All";

interface CategoryNavProps {
  active: Tab;
  onChange: (category: Tab) => void;
}

const ALL_TABS: Tab[] = ["All", ...CATEGORIES];

export default function CategoryNav({ active, onChange }: CategoryNavProps) {
  return (
    <div className="sticky top-[72px] z-30 bg-bg/95 backdrop-blur-sm border-b border-mocha/10 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {ALL_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`shrink-0 inline-flex items-center rounded-full px-5 py-2 text-sm font-body font-medium transition-all ${
                tab === active
                  ? "bg-accent text-cream shadow-warm-sm"
                  : "bg-surface text-text-body hover:text-accent hover:bg-accent/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
