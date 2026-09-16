import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from "react-icons/fa";

export default function ProductImageGallery({ images = [], alt = "Product" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images.length) return null;

  return (
    <>
      <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-steel-100">
        {/* ========== MAIN IMAGE ========== */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-steel-100 overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${alt} ${activeIndex + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Badges — smaller on mobile */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex gap-1.5 sm:gap-2 z-10 flex-wrap">
            <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-brand-orange text-white text-[10px] sm:text-xs font-bold shadow-lg">
              In Stock
            </span>
            <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-navy text-[10px] sm:text-xs font-bold shadow-lg">
              Certified
            </span>
          </div>

          {/* Expand button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Expand image"
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white transition-colors z-10 shadow-lg"
          >
            <FaExpand className="text-xs sm:text-sm" />
          </button>

          {/* Prev / Next arrows — always visible on mobile, hover on desktop */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white transition-all shadow-lg z-10 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <FaChevronLeft className="text-xs sm:text-sm" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white transition-all shadow-lg z-10 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <FaChevronRight className="text-xs sm:text-sm" />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-navy/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold z-10">
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        {/* ========== THUMBNAILS ========== */}
        {images.length > 1 && (
          <div className="p-2 sm:p-3 md:p-4 border-t border-steel-100 bg-steel-50">
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-1 -mb-1 snap-x snap-mandatory scrollbar-thin">
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                    activeIndex === i
                      ? "border-brand-orange shadow-lg shadow-brand-orange/30"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${alt} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========== LIGHTBOX ========== */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 bg-navy/95 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4"
          >
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center text-lg sm:text-xl transition-colors"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <FaChevronLeft className="text-sm sm:text-base" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <FaChevronRight className="text-sm sm:text-base" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-bold">
              {activeIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}