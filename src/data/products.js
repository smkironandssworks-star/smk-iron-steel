// =====================================================
// SMK IRON & STEEL WORKS — PRODUCT CATALOG
// =====================================================

export const products = [
  // ═══════════════════════════════════════════════════
  // 1. IRON COTS  ← WITH REAL PRICE LIST
  // ═══════════════════════════════════════════════════
  {
    id: "iron-cots",
    name: "Iron Cots",
    category: "iron",
    tagline: "Square & Round • Pipe Cutting • Super Cutting",
    description:
      "Heavy-duty iron cots built for durability and comfort. Available in square and round pipe designs with pipe cutting or super cutting options. Perfect for homes, hostels, hotels, and PG accommodations.",
    image: "/Iron_Cot.png",
    images: ["/Iron_Cot.png","/Iron_Cot1.png","/Iron_Cot2.png","/Iron_Cot3.png"],
    specs: ["Square & Round", "Pipe / Super Cutting", "Powder Coated"],
    startingPrice: 2350,
    // ✅ REAL PRICE LIST FROM BUSINESS
    priceList: [
      { type: "Square", size: "6/4",      wire: "Pipe Cutting",  price: 3000 },
      { type: "Square", size: "6/3 1/2",  wire: "Pipe Cutting",  price: 2850 },
      { type: "Square", size: "6/3",      wire: "Pipe Cutting",  price: 2600 },
      { type: "Round",  size: "6/4",      wire: "Pipe Cutting",  price: 3000 },
      { type: "Round",  size: "6/3 1/2",  wire: "Pipe Cutting",  price: 2850 },
      { type: "Round",  size: "6/3",      wire: "Pipe Cutting",  price: 2600 },
      { type: "Round",  size: "6/3 - LW", wire: "Pipe Cutting",  price: 2500 },
      { type: "Round",  size: "6/3 - LW", wire: "Pipe Cutting",  price: 2400 },
      { type: "Round",  size: "6/2 - LW", wire: "Pipe Cutting",  price: 2350 },
      { type: "Square", size: "6/4",      wire: "Super Cutting", price: 3500 },
      { type: "Square", size: "6/3 1/2",  wire: "Super Cutting", price: 3200 },
      { type: "Round",  size: "6/4",      wire: "Super Cutting", price: 3300 },
      { type: "Round",  size: "6/3 1/2",  wire: "Super Cutting", price: 3200 },
    ],
    types: [
      { id: "square-cot", name: "Square Cot", desc: "Square pipe design" },
      { id: "round-cot", name: "Round Cot", desc: "Round pipe design" },
      { id: "pipe-cut", name: "Pipe Cutting", desc: "Standard finish" },
      { id: "super-cut", name: "Super Cutting", desc: "Premium finish" },
      { id: "lw-cot", name: "LW (Light Weight)", desc: "Economical option" },
      { id: "custom-cot", name: "Custom Size", desc: "Built to your spec" },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 2. STAINLESS STEEL FURNITURE
  // ═══════════════════════════════════════════════════
  {
    id: "ss-furniture",
    name: "SS Furniture",
    category: "steel",
    tagline: "Rust-Free • Modern • Durable",
    description:
      "Custom stainless steel furniture including cots, sofas, chairs, tables, and benches. Ideal for homes, hotels, hospitals, and commercial spaces. Available in SS 202 and SS 304 grades.",
    image: "/SS_COT.png",
    images: ["/SS_COT.png"],
    specs: ["SS 202 / 304", "Custom Design", "Rust-Free"],
    types: [
      { id: "ss-cot", name: "SS Cot", desc: "Hygienic & strong" },
      { id: "ss-sofa", name: "SS Sofa", desc: "Modern design" },
      { id: "ss-chair", name: "SS Chair", desc: "Cafe / home use" },
      { id: "ss-table", name: "SS Table", desc: "Dining & work" },
      { id: "ss-bench", name: "SS Bench", desc: "Public seating" },
      { id: "ss-custom", name: "Custom SS", desc: "Any design" },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 3. SS DOORS & RAILINGS
  // ═══════════════════════════════════════════════════
  {
    id: "ss-doors-railings",
    name: "SS Doors & Railings",
    category: "steel",
    tagline: "Elegant • Strong • Low Maintenance",
    description:
      "Premium stainless steel doors and railings for homes and commercial buildings. Custom designed, fabricated, and installed with precision. Available in multiple finishes.",
    image: "/SS_Doors.png",
    images: ["/SS_Doors.png"],
    specs: ["SS 304 Grade", "Custom Built", "Installation Included"],
    types: [
      { id: "ss-door", name: "SS Doors", desc: "Main / interior" },
      { id: "ss-railing", name: "Staircase Railing", desc: "Home & office" },
      { id: "ss-balcony", name: "Balcony Railing", desc: "Safety + style" },
      { id: "ss-handrail", name: "Handrails", desc: "Wall mounted" },
      { id: "ss-terrace", name: "Terrace Railing", desc: "Weather-proof" },
      { id: "ss-gate", name: "SS Gates", desc: "Main entrance" },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 4. MANUAL ROLLING SHUTTERS
  // ═══════════════════════════════════════════════════
  {
    id: "manual-shutters",
    name: "Manual Shutters",
    category: "shutters",
    tagline: "Reliable • Affordable • Strong",
    description:
      "Manual rolling shutters for shops, garages, warehouses, and buildings. Manufactured with high-grade steel, precision-fitted, and available in any size. Includes professional installation.",
    image: "/Manual_Shutters.png",
    images: ["/Manual_Shutters.png"],
    specs: ["Any Size", "Galvanized Steel", "Installation Done"],
    types: [
      { id: "shop-shutter", name: "Shop Shutters", desc: "Standard shops" },
      { id: "garage-shutter", name: "Garage Shutters", desc: "Home garage" },
      { id: "warehouse", name: "Warehouse Shutters", desc: "Large openings" },
      { id: "push-pull", name: "Push-Pull Type", desc: "Manual operation" },
      { id: "gear-type", name: "Gear Type", desc: "Chain operation" },
      { id: "custom-manual", name: "Custom Size", desc: "Any dimensions" },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 5. AUTOMATIC SHUTTERS
  // ═══════════════════════════════════════════════════
  {
    id: "automatic-shutters",
    name: "Automatic Shutters",
    category: "shutters",
    tagline: "Motorized • Convenient • Modern",
    description:
      "Motorized rolling shutters with remote control operation. Ideal for showrooms, offices, and commercial spaces. Smooth, silent operation with reliable motor systems and safety features.",
    image: "/Automatic_Shutters.png",
    images: ["/Automatic_Shutters.png"],
    specs: ["Remote Control", "Silent Motor", "Safety Sensors"],
    types: [
      { id: "remote-shutter", name: "Remote Control", desc: "Wireless operation" },
      { id: "switch-shutter", name: "Switch Operated", desc: "Wall switch" },
      { id: "sensor-shutter", name: "Sensor Type", desc: "Obstacle detection" },
      { id: "heavy-auto", name: "Heavy Duty Auto", desc: "Industrial use" },
      { id: "commercial-auto", name: "Commercial Auto", desc: "Shops / offices" },
      { id: "custom-auto", name: "Custom Size", desc: "Any dimensions" },
    ],
  },
];

// =====================================================
// CATEGORIES — used for filter tabs on Products page
// =====================================================

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "iron", label: "Iron Works" },
  { id: "steel", label: "Stainless Steel" },
  { id: "shutters", label: "Shutters" },
];

// =====================================================
// HELPERS
// =====================================================

export const getProductById = (id) =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  category === "all"
    ? products
    : products.filter((p) => p.category === category);

export const getCategoryCounts = () => {
  const counts = {};
  products.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
};

export const getRelatedProducts = (currentId, limit = 3) => {
  const current = products.find((p) => p.id === currentId);
  if (!current) return [];

  const sameCategory = products.filter(
    (p) => p.id !== currentId && p.category === current.category
  );
  const others = products.filter(
    (p) => p.id !== currentId && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
};