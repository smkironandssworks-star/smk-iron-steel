import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}) {
  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Touch swipe
  let touchStartX = 0;
  const onTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? onNext() : onPrev();
    }
  };

  const current = items[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="fixed inset-0 bg-navy/95 backdrop-blur-md z-[100] flex items-center justify-center p-4"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center text-lg transition-colors z-10"
        >
          <FaTimes />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-bold z-10">
          {activeIndex + 1} / {items.length}
        </div>

        {/* Prev / Next */}
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors z-10"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Main image */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-6xl w-full"
        >
          <img
            src={current.src}
            alt={current.label}
            className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />

          {/* Caption */}
          <div className="text-center mt-6">
            <p className="text-white font-display font-bold text-lg md:text-xl">
              {current.label}
            </p>
            <p className="text-brand-orange text-xs md:text-sm uppercase tracking-wider mt-1">
              {current.category}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}