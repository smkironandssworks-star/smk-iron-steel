import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);

  // 🔒 Safety guard — prevents crash if product is missing
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 border border-steel-100"
    >
      <Link to={`/products/${product.id}`} className="block">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-steel-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Types overlay */}
          <AnimatePresence>
            {hovered && product.types && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 p-4 flex flex-col justify-end"
              >
                <div className="mb-2">
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">
                    Available Types
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {product.types.slice(0, 6).map((type, i) => (
                    <motion.span
                      key={type.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/95 text-navy text-[10px] font-bold backdrop-blur-sm"
                    >
                      <FaCheckCircle className="text-brand-orange text-[8px]" />
                      {type.name}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-orange text-white text-xs font-bold w-full justify-between"
                >
                  <span>View All {product.types.length} Types</span>
                  <FaArrowRight className="text-[10px]" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-lg font-bold text-navy mb-1 group-hover:text-brand-orange transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-steel-500 mb-4 font-medium">
            {product.tagline}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">
              {product.types?.length || 0} Types Available
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="w-9 h-9 rounded-full bg-brand-orange/10 group-hover:bg-brand-orange flex items-center justify-center transition-colors duration-300"
            >
              <FaArrowRight className="w-3 h-3 text-brand-orange group-hover:text-white transition-colors" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500 z-10" />
      </Link>
    </motion.div>
  );
}