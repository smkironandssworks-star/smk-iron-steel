import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
    label: "TMT Bars",
    size: "large", // 🔥 first card is bigger
  },
  {
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    label: "MS Pipes",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&q=80",
    label: "Steel Sheets",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
    label: "Steel Sections",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    label: "Stock Yard",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    label: "Delivery",
    size: "wide", // 🔥 last card is wider
  },
];

// Container variant for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Each card's entrance
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orange glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Our Gallery"
            title="Explore Our Products & Facilities"
            light
            className="mb-0"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-white font-bold group"
            >
              <span className="border-b-2 border-transparent group-hover:border-brand-orange transition-colors pb-1">
                View All Photos
              </span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-brand-orange"
              >
                <FaArrowRight />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* 🔥 Bento Grid — first card spans 2 cols + 2 rows on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:auto-rows-[180px]"
        >
          {galleryImages.map((img, i) => {
            // Determine grid span per card
            const gridClass =
              img.size === "large"
                ? "lg:col-span-2 lg:row-span-2"
                : img.size === "wide"
                ? "lg:col-span-2"
                : "";

            return (
              <motion.div
                key={img.label}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] lg:aspect-auto ${gridClass}`}
              >
                {/* Image with slow zoom */}
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-115"
                  loading="lazy"
                />

                {/* Shine sweep on hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-out" />
                </div>

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Orange accent line at bottom — expands on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />

                {/* Label + Plus icon */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <div>
                    <motion.span
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="block text-white font-bold text-sm md:text-base"
                    >
                      {img.label}
                    </motion.span>
                    <span className="block text-[10px] text-white/60 uppercase tracking-wider mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Photos
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-brand-orange/50"
                  >
                    <FaPlus className="text-white text-xs" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}