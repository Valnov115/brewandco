export type MenuBadge = "Popular" | "House Favorite";

export type MenuCategory =
  | "Espresso Drinks"
  | "Cold Drinks"
  | "Pastries"
  | "Sandwiches";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  badge?: MenuBadge;
  pexelsId: number;
}

export const CATEGORY_COLORS: Record<MenuCategory, string> = {
  "Espresso Drinks": "bg-category-coffee",
  "Cold Drinks": "bg-category-drinks",
  "Pastries": "bg-category-bakery",
  "Sandwiches": "bg-category-tea",
};

export const MENU_ITEMS: MenuItem[] = [
  // ── Espresso Drinks ──────────────────────────────────────────────
  {
    id: "espresso",
    category: "Espresso Drinks",
    name: "Espresso",
    description: "A single shot of rich dark espresso with a velvety crema.",
    price: 3.5,
    badge: "House Favorite",
    pexelsId: 312418,
  },
  {
    id: "doppio",
    category: "Espresso Drinks",
    name: "Doppio",
    description: "Double shot espresso — bold and concentrated for the serious coffee lover.",
    price: 4.0,
    pexelsId: 302899,
  },
  {
    id: "flat-white",
    category: "Espresso Drinks",
    name: "Flat White",
    description: "Two ristretto shots topped with silky steamed whole milk in a smaller ratio.",
    price: 5.5,
    badge: "Popular",
    pexelsId: 350478,
  },
  {
    id: "caramel-macchiato",
    category: "Espresso Drinks",
    name: "Caramel Macchiato",
    description: "Vanilla-sweetened milk topped with espresso shots and a drizzle of house caramel.",
    price: 6.5,
    badge: "Popular",
    pexelsId: 1695052,
  },
  {
    id: "hazelnut-latte",
    category: "Espresso Drinks",
    name: "Hazelnut Latte",
    description: "Espresso blended with house-made hazelnut syrup and steamed oat milk.",
    price: 6.0,
    pexelsId: 1251175,
  },
  {
    id: "dirty-chai",
    category: "Espresso Drinks",
    name: "Dirty Chai",
    description: "Double espresso pulled through our spiced masala chai concentrate with steamed milk.",
    price: 6.5,
    badge: "House Favorite",
    pexelsId: 4109903,
  },
  // ── Cold Drinks ───────────────────────────────────────────────────
  {
    id: "cold-brew",
    category: "Cold Drinks",
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours — smooth and low-acid served over ice.",
    price: 5.5,
    badge: "Popular",
    pexelsId: 1194030,
  },
  {
    id: "caramel-frappuccino",
    category: "Cold Drinks",
    name: "Caramel Frappuccino",
    description: "Blended espresso with caramel sauce, milk and ice topped with whipped cream.",
    price: 7.5,
    badge: "Popular",
    pexelsId: 3679715,
  },
  {
    id: "nutella-mudslide",
    category: "Cold Drinks",
    name: "Nutella Mudslide",
    description: "Rich blended shake with Nutella, espresso and a chocolate drizzle.",
    price: 8.0,
    badge: "House Favorite",
    pexelsId: 3727250,
  },
  {
    id: "strawberry-matcha-latte",
    category: "Cold Drinks",
    name: "Strawberry Matcha Latte",
    description: "Ceremonial grade matcha layered over house strawberry milk, served iced.",
    price: 7.0,
    pexelsId: 5946059,
  },
  {
    id: "iced-horchata-latte",
    category: "Cold Drinks",
    name: "Iced Horchata Latte",
    description: "Espresso poured over creamy cinnamon-rice milk on ice.",
    price: 6.5,
    badge: "House Favorite",
    pexelsId: 2067396,
  },
  {
    id: "hot-chocolate",
    category: "Cold Drinks",
    name: "Hot Chocolate",
    description: "Velvety blend of single-origin dark chocolate and steamed whole milk.",
    price: 5.0,
    pexelsId: 3727249,
  },
  // ── Pastries ──────────────────────────────────────────────────────
  {
    id: "almond-croissant",
    category: "Pastries",
    name: "Almond Croissant",
    description: "Butter croissant filled with frangipane and finished with toasted almond flakes.",
    price: 4.5,
    badge: "Popular",
    pexelsId: 3892469,
  },
  {
    id: "cardamom-morning-bun",
    category: "Pastries",
    name: "Cardamom Morning Bun",
    description: "Flaky laminated dough dusted with cardamom sugar and orange zest.",
    price: 4.0,
    badge: "House Favorite",
    pexelsId: 1775043,
  },
  {
    id: "blueberry-scone",
    category: "Pastries",
    name: "Blueberry Scone",
    description: "Tender buttermilk scone studded with fresh blueberries and a vanilla glaze.",
    price: 4.0,
    pexelsId: 1775043,
  },
  {
    id: "chocolate-babka",
    category: "Pastries",
    name: "Chocolate Babka",
    description: "Twisted brioche swirled with rich dark chocolate and a hint of sea salt.",
    price: 5.5,
    badge: "Popular",
    pexelsId: 4110101,
  },
  {
    id: "pistachio-danish",
    category: "Pastries",
    name: "Pistachio Danish",
    description: "Buttery pastry filled with rose-scented pistachio cream and candied pistachios.",
    price: 5.0,
    badge: "House Favorite",
    pexelsId: 1586942,
  },
  // ── Sandwiches ────────────────────────────────────────────────────
  {
    id: "prosciutto-brie-baguette",
    category: "Sandwiches",
    name: "Prosciutto & Brie Baguette",
    description: "Crispy sourdough baguette with prosciutto di Parma, brie, fig jam and rocket.",
    price: 12.0,
    badge: "Popular",
    pexelsId: 1633578,
  },
  {
    id: "smashed-avocado-ciabatta",
    category: "Sandwiches",
    name: "Smashed Avocado Ciabatta",
    description: "Herbed avocado on toasted ciabatta with pickled red onion, chilli flakes and a poached egg.",
    price: 11.0,
    badge: "House Favorite",
    pexelsId: 1640777,
  },
  {
    id: "roasted-chicken-pesto-panini",
    category: "Sandwiches",
    name: "Roasted Chicken Pesto Panini",
    description: "Grilled panini with herb-roasted chicken, sun-dried tomato pesto and provolone.",
    price: 13.0,
    badge: "Popular",
    pexelsId: 3607284,
  },
];

export const POPULAR_ITEMS: MenuItem[] = MENU_ITEMS.filter(
  (item) => item.badge !== undefined
);

export const CATEGORIES: MenuCategory[] = [
  "Espresso Drinks",
  "Cold Drinks",
  "Pastries",
  "Sandwiches",
];
