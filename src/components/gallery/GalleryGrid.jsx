import { motion } from "framer-motion";
import { FaExpand } from "react-icons/fa";

export default function GalleryGrid({ items, onImageClick }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
          className="break-inside-avoid"
        >
          <div
            onClick={() => onImageClick(i)}
            className="group relative rounded-xl overflow-hidden cursor-pointer bg-navy"
          >
            {/* Image */}
            <img
              src={item.thumb}
              alt={item.label}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Orange accent line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />

            {/* Expand icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <FaExpand className="text-sm" />
            </div>

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="text-white font-display font-bold text-base md:text-lg mt-1">
                {item.label}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}