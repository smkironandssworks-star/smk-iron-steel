export const products = [
  {
    id: "tmt-bars",
    name: "TMT Bars",
    tagline: "Strong | Durable | Reliable",
    description:
      "High-strength thermo-mechanically treated bars for RCC construction. Ribbed surface ensures superior bonding with concrete. Manufactured to IS 1786 standards for structural strength and earthquake resistance.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
    ],
    specs: ["Fe500D", "8mm - 32mm", "IS 1786 Certified"],
    types: [
      { id: "fe415", name: "Fe 415", desc: "Standard grade" },
      { id: "fe500", name: "Fe 500", desc: "High strength" },
      { id: "fe500d", name: "Fe 500D", desc: "Ductile grade" },
      { id: "fe550", name: "Fe 550", desc: "Extra strength" },
      { id: "fe600", name: "Fe 600", desc: "Heavy load" },
      { id: "cut-bend", name: "Cut & Bend", desc: "Custom fabrication" },
    ],
  },
  {
    id: "ms-pipes",
    name: "MS Pipes",
    tagline: "For Construction & Industrial Use",
    description:
      "Mild steel pipes available in round, square, and rectangular sections. Ideal for structural applications, water lines, and industrial piping systems. Corrosion-resistant options available.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
    ],
    specs: ["Round / Square / Rect", "20mm - 200mm", "IS 1239"],
    types: [
      { id: "round", name: "Round Pipes", desc: "20mm - 200mm" },
      { id: "square", name: "Square Pipes", desc: "12mm - 150mm" },
      { id: "rect", name: "Rectangular Pipes", desc: "Custom sizes" },
      { id: "seamless", name: "Seamless Pipes", desc: "High pressure" },
      { id: "gi", name: "GI Pipes", desc: "Galvanized" },
      { id: "erw", name: "ERW Pipes", desc: "Electric welded" },
    ],
  },
  {
    id: "steel-sections",
    name: "Steel Sections",
    tagline: "Angles | Channels | Beams",
    description:
      "Structural steel sections for heavy-duty fabrication and construction. Includes beams, channels, and angles manufactured to IS standards for load-bearing capacity.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
    ],
    specs: ["ISMB / ISMC", "ISA Angles", "Custom cuts"],
    types: [
      { id: "ismb", name: "ISMB Beams", desc: "I-Beams" },
      { id: "ismc", name: "ISMC Channels", desc: "C-Channels" },
      { id: "isa", name: "ISA Angles", desc: "Equal/Unequal" },
      { id: "np", name: "NP Sections", desc: "Narrow parallel" },
      { id: "joists", name: "Joists", desc: "Steel joists" },
      { id: "built-up", name: "Built-up Sections", desc: "Custom" },
    ],
  },
  {
    id: "steel-sheets",
    name: "Steel Sheets",
    tagline: "Sheets | Plates | Coils",
    description:
      "HR/CR sheets, plates, and coils in various thicknesses. Galvanized and chequered options available for industrial, roofing, and fabrication requirements.",
    image:
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=1200&q=80",
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
    ],
    specs: ["0.5mm - 25mm", "HR / CR / GI", "Custom sizes"],
    types: [
      { id: "hr", name: "HR Sheets", desc: "Hot rolled" },
      { id: "cr", name: "CR Sheets", desc: "Cold rolled" },
      { id: "gi", name: "GI Sheets", desc: "Galvanized" },
      { id: "chequered", name: "Chequered Plates", desc: "Anti-slip" },
      { id: "coils", name: "Coils", desc: "Rolled coils" },
      { id: "plates", name: "Plates", desc: "Heavy gauge" },
    ],
  },
  {
    id: "angles-channels",
    name: "Angles & Channels",
    tagline: "For Stronger Structures",
    description:
      "Precision-engineered angles and channels for structural frameworks. Available in MS and GI variants, various sizes, and bulk quantities for large projects.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=1200&q=80",
    ],
    specs: ["MS & GI", "Various Sizes", "Bulk supply"],
    types: [
      { id: "ms-angle", name: "MS Angles", desc: "Mild steel" },
      { id: "gi-angle", name: "GI Angles", desc: "Galvanized" },
      { id: "ms-channel", name: "MS Channels", desc: "MS U-channel" },
      { id: "gi-channel", name: "GI Channels", desc: "Galvanized U" },
      { id: "flat", name: "Flat Bars", desc: "MS flats" },
      { id: "custom", name: "Custom Fabrication", desc: "On request" },
    ],
  },
];