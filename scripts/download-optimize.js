// scripts/download-optimize.js
// Downloads stock images and optimizes them to responsive WebP breakpoints.
// Usage: node scripts/download-optimize.js
// Requires: npm install --save-dev sharp  (Node 18+ native fetch used)

'use strict';

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');

// ── Configuration ─────────────────────────────────────────────────────────────

const OUT_BASE = path.join(__dirname, '..', 'public', 'images');
const QUALITY  = 80;
const DELAY_MS = 350;

const SIZES = [
  { name: 'thumbnail', width: 400  },
  { name: 'medium',    width: 800  },
  { name: 'large',     width: 1200 },
  { name: 'original',  width: 1920 },
];

// ── Manifest ──────────────────────────────────────────────────────────────────

const MANIFEST_ITEMS = [
  // Espresso Drinks
  { slug: 'espresso',                     pexelsId: 312418,   category: 'menu' },
  { slug: 'doppio',                        pexelsId: 302899,   category: 'menu' },
  { slug: 'flat-white',                    pexelsId: 350478,   category: 'menu' },
  { slug: 'caramel-macchiato',   localSrc: 'public/menu/Caramel_Macchiato.png',  category: 'menu' },
  { slug: 'hazelnut-latte',      localSrc: 'public/menu/Hazelnut_Latte.png',     category: 'menu' },
  { slug: 'dirty-chai',                    pexelsId: 2396220,  category: 'menu' },
  // Cold Drinks
  { slug: 'cold-brew',                     pexelsId: 1194030,  category: 'menu' },
  { slug: 'caramel-frappuccino',           pexelsId: 17558646, category: 'menu' },
  { slug: 'nutella-mudslide',    localSrc: 'public/menu/Nutella_Mudslide.png',   category: 'menu' },
  { slug: 'strawberry-matcha-latte', localSrc: 'public/menu/Strawberry_Matcha.png', category: 'menu' },
  { slug: 'iced-horchata-latte', localSrc: 'public/menu/Iced_Horchata_Latte.png',  category: 'menu' },
  { slug: 'hot-chocolate',                 pexelsId: 3309670,  category: 'menu' },
  // Pastries
  { slug: 'almond-croissant',              pexelsId: 8105045,  category: 'menu' },
  { slug: 'cardamom-morning-bun',          pexelsId: 1775043,  category: 'menu' },
  { slug: 'blueberry-scone',               pexelsId: 3450560,  category: 'menu' },
  { slug: 'chocolate-babka',     localSrc: 'public/menu/Chocolate_Babka.png',    category: 'menu' },
  { slug: 'pistachio-danish',              pexelsId: 1586942,  category: 'menu' },
  // Sandwiches
  { slug: 'prosciutto-brie-baguette',      pexelsId: 17498978, category: 'menu' },
  { slug: 'smashed-avocado-ciabatta',      pexelsId: 1656685,  category: 'menu' },
  { slug: 'roasted-chicken-pesto-panini',  pexelsId: 1279330,  category: 'menu' },
  // Hero images (local PNGs — process only, no download)
  { slug: 'menu-header', localSrc: 'public/menu/menu-header.png', category: 'menu' },
  // HeroSection.tsx uses pexelsId 302899 (same photo as doppio, reuse)
  { slug: 'hero-bg',                       pexelsId: 302899,   category: 'hero' },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function pexelsUrl(id) {
  return (
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg` +
    `?auto=compress&cs=tinysrgb&w=original`
  );
}

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ── Core ──────────────────────────────────────────────────────────────────────

async function processItem(item) {
  const dir = path.join(OUT_BASE, item.category);
  fs.mkdirSync(dir, { recursive: true });

  // Skip if all output files already exist
  const allExist = SIZES.every(size =>
    fs.existsSync(path.join(dir, `${item.slug}-${size.name}.webp`))
  );
  if (allExist) { console.log('  (already done, skipping)'); return; }

  let srcBuffer;
  if (item.pexelsId) {
    console.log(`  downloading pexels:${item.pexelsId} …`);
    srcBuffer = await fetchBuffer(pexelsUrl(item.pexelsId));
    await sleep(DELAY_MS);
  } else {
    const abs = path.resolve(__dirname, '..', item.localSrc);
    console.log(`  reading local: ${item.localSrc}`);
    srcBuffer = fs.readFileSync(abs);
  }

  for (const size of SIZES) {
    const outFile = path.join(dir, `${item.slug}-${size.name}.webp`);
    await sharp(srcBuffer)
      .resize({ width: size.width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outFile);
    const kb = Math.round(fs.statSync(outFile).size / 1024);
    console.log(`    ✓ ${item.slug}-${size.name}.webp  (${kb} KB)`);
  }
}

// ── Entry point ───────────────────────────────────────────────────────────────

async function main() {
  console.log(`Processing ${MANIFEST_ITEMS.length} image(s) → ${OUT_BASE}\n`);
  for (const item of MANIFEST_ITEMS) {
    console.log(`[${item.slug}]`);
    await processItem(item);
  }
  console.log('\nDone.');
}

main().catch(err => { console.error(err); process.exit(1); });
