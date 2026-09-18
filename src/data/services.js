// =====================================================
// SMK IRON & STEEL WORKS — SERVICES CATALOG
// =====================================================

import { FaIndustry, FaLayerGroup, FaDoorClosed } from "react-icons/fa";

export const serviceCategories = [
  // ═══════════════════════════════════════════════════
  // 🔩 IRON WORKS
  // ═══════════════════════════════════════════════════
  {
    id: "iron-works",
    label: "Iron Works",
    emoji: "🔩",
    icon: FaIndustry,
    tagline: "Strong • Custom • Durable",
    description:
      "Complete iron fabrication — from custom cots and furniture to heavy-duty structures and repairs.",
    services: [
      {
        title: "Iron Cot Manufacturing",
        text: "Custom-made iron cots in different sizes, designs, and quality levels.",
      },
      {
        title: "Custom Iron Fabrication",
        text: "Iron fabrication for furniture, frames, structures, and custom requirements.",
      },
      {
        title: "Iron Furniture Works",
        text: "Manufacturing of iron chairs, tables, benches, racks, and other furniture.",
      },
      {
        title: "Heavy-Duty Iron Works",
        text: "Strong iron structures and products for commercial and heavy-use applications.",
      },
      {
        title: "Custom Design & Fabrication",
        text: "Fabrication based on customer-provided designs, sizes, and requirements.",
      },
      {
        title: "Iron Repair & Modification",
        text: "Repair, alteration, strengthening, and modification of existing iron products.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 🪑 STAINLESS STEEL WORKS
  // ═══════════════════════════════════════════════════
  {
    id: "ss-works",
    label: "Stainless Steel Works",
    emoji: "🪑",
    icon: FaLayerGroup,
    tagline: "Rust-Free • Modern • Premium",
    description:
      "Premium stainless steel fabrication for homes, hotels, offices, and commercial spaces.",
    services: [
      {
        title: "SS Furniture Fabrication",
        text: "Custom stainless steel cots, sofas, chairs, tables, and benches.",
      },
      {
        title: "SS Door Fabrication",
        text: "Stainless steel doors designed and fabricated according to your requirements.",
      },
      {
        title: "SS Railing & Handrail Works",
        text: "SS staircase, balcony, terrace, and handrail fabrication.",
      },
      {
        title: "Custom SS Fabrication",
        text: "Customized stainless steel products for homes, shops, hotels, offices, and commercial spaces.",
      },
      {
        title: "SS Structure & Framework",
        text: "Stainless steel frames, supports, and other customized structural work.",
      },
      {
        title: "SS Repair & Modification",
        text: "Repair, replacement, modification, and improvement of existing SS products.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 🚪 SHUTTER WORKS
  // ═══════════════════════════════════════════════════
  {
    id: "shutter-works",
    label: "Shutter Works",
    emoji: "🚪",
    icon: FaDoorClosed,
    tagline: "Manual • Automatic • Installed",
    description:
      "Supply, installation, and repair of manual and automatic rolling shutters for any size opening.",
    services: [
      {
        title: "Manual Rolling Shutters",
        text: "Supply and installation of manual rolling shutters for shops, garages, warehouses, and buildings.",
      },
      {
        title: "Automatic / Motorized Shutters",
        text: "Motorized rolling shutters with convenient automatic operation.",
      },
      {
        title: "Rolling Shutter Installation",
        text: "Professional installation with proper measurement and fitting.",
      },
      {
        title: "Shutter Repair & Service",
        text: "Repair and maintenance for damaged, stuck, or malfunctioning shutters.",
      },
      {
        title: "Shutter Replacement",
        text: "Replacement of old or damaged rolling shutters with new shutter systems.",
      },
      {
        title: "Custom-Size Shutters",
        text: "Shutters fabricated according to your required opening size and application.",
      },
    ],
  },
];

// =====================================================
// HELPERS
// =====================================================

// Total service count
export const TOTAL_SERVICES = serviceCategories.reduce(
  (sum, cat) => sum + cat.services.length,
  0
);

// Get category by id
export const getServiceCategoryById = (id) =>
  serviceCategories.find((cat) => cat.id === id);

// Get all service titles as flat array (for search / sitemap)
export const getAllServiceTitles = () =>
  serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({
      title: s.title,
      category: cat.label,
      categoryId: cat.id,
    }))
  );