import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaImages } from "react-icons/fa";
import Container from "../components/ui/Container";
import PageBanner from "../components/shared/PageBanner";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryLightbox from "../components/gallery/GalleryLightbox";
import { galleryItems } from "../data/gallery";
import { COMPANY, WHATSAPP_LINK } from "../utils/constants";

// Filter categories
const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "products", label: "Products" },
  { id: "stockyard", label: "Stockyard" },
  { id: "delivery", label: "Delivery" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Lightbox handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  const prevImage = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );

  return (
    <>
      {/* ============ BANNER ============ */}
      <PageBanner
        title="Gallery"
        subtitle="A glimpse into our products, facility, and daily operations."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Gallery" },
        ]}
      />

      {/* ============ GALLERY ============ */}
      <section className="section-padding bg-steel-50">
        <Container>
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12 justify-center"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === cat.id).length;

              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 md:px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    isActive
                      ? "bg-navy text-white shadow-lg shadow-navy/20"
                      : "bg-white text-navy border border-steel-200 hover:border-brand-orange"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {cat.label}
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-brand-orange text-white"
                          : "bg-steel-100 text-steel-500"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Result counter */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <p className="text-steel-500">
              Showing{" "}
              <span className="font-bold text-navy">{filteredItems.length}</span>{" "}
              of{" "}
              <span className="font-bold text-navy">{galleryItems.length}</span>{" "}
              photos
            </p>
          </div>

          {/* Grid or Empty state */}
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryGrid
                  items={filteredItems}
                  onImageClick={openLightbox}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-steel-100 flex items-center justify-center mb-6">
                  <FaImages className="text-3xl text-steel-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-2">
                  No photos in this category
                </h3>
                <p className="text-steel-500">
                  Try a different filter to see more.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 relative rounded-2xl overflow-hidden bg-navy p-8 md:p-12"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-2">
                  Want to see more?
                </h3>
                <p className="text-white/70">
                  Visit our stockyard or request photos of specific products.
                  We're happy to help.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-orange text-white font-semibold hover:bg-brand-orange-dark transition-colors"
                >
                  <FaPhoneAlt />
                  Call Us
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-navy font-semibold hover:bg-steel-100 transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            items={filteredItems}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}