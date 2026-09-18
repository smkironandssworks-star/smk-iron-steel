import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaTruck,
  FaAward,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import ProductCard from "../components/shared/ProductCard";
import EnquiryForm from "../components/products/EnquiryForm";
import ProductNotFound from "../components/products/ProductNotFound";
import ProductImageGallery from "../components/products/ProductImageGallery";
import {
  products,
  getProductById,
  getRelatedProducts,
} from "../data/products";
import { COMPANY, WHATSAPP_LINK } from "../utils/constants";
import { fadeUp, staggerContainer } from "../utils/animations";

// =====================================================
// HELPER — converts "6/4" → "6 ft × 4 ft"
// =====================================================
function formatSize(size) {
  const clean = size.replace(" - LW", "").trim();
  const parts = clean.split("/");
  if (parts.length !== 2) return size;
  const len = parts[0].trim();
  const wid = parts[1].trim();
  return `${len} ft × ${wid} ft`;
}

// =====================================================
// HELPER — generates 2-line description
// =====================================================
function getCotDescription(row) {
  const typeText = row.type === "Square" ? "Square pipe frame" : "Round pipe frame";
  const cuttingText =
    row.wire === "Super Cutting"
      ? "premium smooth finish"
      : "standard finish";
  const sizeText = row.size.includes("LW")
    ? "lightweight build"
    : "heavy-duty build";

  return `${typeText} with ${cuttingText}. ${sizeText} — ideal for daily use.`;
}

export default function ProductDetail() {
  const { id } = useParams();

  const product = useMemo(() => getProductById(id), [id]);
  const relatedProducts = useMemo(() => getRelatedProducts(id, 3), [id]);

  // Not found
  if (!product) return <ProductNotFound />;

  const hasSizeList = product.sizeList && product.sizeList.length > 0;
  const hasPriceList = product.priceList && product.priceList.length > 0;

  // Build display list — prefer sizeList, fall back to priceList (without prices)
  const displayList = useMemo(() => {
    if (hasSizeList) return product.sizeList;
    if (hasPriceList) {
      return product.priceList.map(({ type, size, wire }) => ({
        type,
        size,
        wire,
      }));
    }
    return [];
  }, [product, hasSizeList, hasPriceList]);

  // Group by "wire" type
  const sizeGroups = useMemo(() => {
    if (!displayList.length) return [];
    const groups = {};
    displayList.forEach((row) => {
      if (!groups[row.wire]) groups[row.wire] = [];
      groups[row.wire].push(row);
    });
    return Object.entries(groups).map(([wire, items]) => ({
      wire,
      items,
      isPremium: wire === "Super Cutting",
    }));
  }, [displayList]);

  return (
    <>
      {/* ========== BANNER ========== */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-16 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-orange/15 rounded-full blur-3xl pointer-events-none"
        />

        <Container className="relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-xs md:text-sm mb-4 flex-wrap">
            <Link to="/" className="hover:text-brand-orange transition-colors">
              Home
            </Link>
            <FaChevronRight className="text-[8px] opacity-50" />
            <Link
              to="/products"
              className="hover:text-brand-orange transition-colors"
            >
              Products
            </Link>
            <FaChevronRight className="text-[8px] opacity-50" />
            <span className="text-brand-orange font-semibold">
              {product.name}
            </span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-orange font-semibold mt-2 text-sm md:text-base"
          >
            {product.tagline}
          </motion.p>
        </Container>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="section-padding bg-steel-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* ----- LEFT ----- */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <ProductImageGallery
                  images={product.images || [product.image]}
                  alt={product.name}
                />
              </motion.div>

              {/* Product Overview */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-steel-100"
              >
                <motion.h2
                  variants={fadeUp}
                  className="font-display text-2xl font-bold text-navy mb-4"
                >
                  Product Overview
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-steel-500 leading-relaxed mb-6"
                >
                  {product.description}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-steel-50 border border-steel-100"
                    >
                      <FaCheckCircle className="text-brand-orange shrink-0" />
                      <span className="text-sm font-semibold text-navy">
                        {spec}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* ✅ SIZES & OPTIONS — cards with NO prices */}
              {displayList.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Section header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-1">
                        Available Sizes
                      </h2>
                      <p className="text-xs md:text-sm text-steel-500">
                        All cot sizes & cutting options — contact us for best
                        price
                      </p>
                    </div>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider px-3 py-1.5 rounded-full bg-brand-orange/10">
                      {displayList.length} Options
                    </span>
                  </div>

                  {/* Group by Wire Type */}
                  {sizeGroups.map((group) => (
                    <div key={group.wire}>
                      {/* Group header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                            group.isPremium
                              ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                              : "bg-navy text-white"
                          }`}
                        >
                          {group.isPremium && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          )}
                          {group.wire}
                        </span>
                        <span className="flex-1 h-px bg-steel-200" />
                        <span className="text-xs text-steel-500 font-semibold">
                          {group.items.length} options
                        </span>
                      </div>

                      {/* Cards grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {group.items.map((row, i) => (
                          <motion.div
                            key={`${group.wire}-${i}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            whileHover={{ y: -4 }}
                            className={`group relative bg-white rounded-2xl p-5 border transition-all overflow-hidden ${
                              group.isPremium
                                ? "border-brand-orange/30 hover:border-brand-orange shadow-card hover:shadow-card-hover"
                                : "border-steel-100 hover:border-brand-orange/40 shadow-card hover:shadow-card-hover"
                            }`}
                          >
                            {/* Premium badge */}
                            {group.isPremium && (
                              <div className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
                                Premium
                              </div>
                            )}

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />

                            {/* Type row */}
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${
                                  group.isPremium ? "bg-brand-orange" : "bg-navy"
                                }`}
                              >
                                <span className="font-display font-black text-white text-base">
                                  {row.type === "Square" ? "⬛" : "⬤"}
                                </span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-display font-bold text-navy text-base leading-tight">
                                    {row.type} Cot
                                  </span>
                                  {row.size.includes("LW") && (
                                    <span className="text-[9px] font-black uppercase tracking-wider text-navy bg-steel-100 px-1.5 py-0.5 rounded">
                                      Light Weight
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10px] text-steel-500 uppercase tracking-wider">
                                  {group.wire}
                                </div>
                              </div>
                            </div>

                            {/* 2-line description */}
                            <p className="text-xs text-steel-500 leading-relaxed mb-4">
                              {getCotDescription(row)}
                            </p>

                            {/* ✅ SIZE — shown clearly */}
                            <div className="p-3 rounded-lg bg-navy/5 border border-navy/10">
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] uppercase tracking-wider text-steel-500 font-bold">
                                    Size
                                  </span>
                                  <span className="font-display font-bold text-navy text-sm">
                                    {row.size}
                                  </span>
                                </div>
                                <div className="text-[11px] text-navy font-bold">
                                  {formatSize(row.size)}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Note — NO price mention */}
                  <div className="p-5 rounded-2xl bg-navy text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl" />
                    <div className="relative z-10 flex items-start gap-3">
                      <FaShieldAlt className="text-brand-orange text-lg shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm mb-1">Need a Quote?</p>
                        <p className="text-xs text-white/70 leading-relaxed">
                          Contact us for pricing on any size or cutting type.
                          We offer bulk order discounts and custom fabrication
                          on request.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
                      `Hi SMK Iron & Steel Works, I would like to enquire about ${product.name}. Please share the details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-dark transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    Enquire on WhatsApp
                  </a>
                </motion.div>
              )}

              {/* Available Types — only if no size/price list */}
              {displayList.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-steel-100"
                >
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                    <h2 className="font-display text-2xl font-bold text-navy">
                      Available Types
                    </h2>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                      {product.types.length} Types
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.types.map((type, i) => (
                      <motion.div
                        key={type.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="group flex items-start gap-4 p-4 rounded-xl bg-steel-50 border border-steel-100 hover:border-brand-orange/40 hover:bg-white transition-all cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-lg bg-navy group-hover:bg-brand-orange flex items-center justify-center shrink-0 transition-colors">
                          <span className="font-display font-black text-white text-sm">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <div className="font-display font-bold text-navy mb-0.5">
                            {type.name}
                          </div>
                          <div className="text-xs text-steel-500">
                            {type.desc}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[
                  { icon: FaShieldAlt, title: "Premium Materials" },
                  { icon: FaTruck, title: "Fast Delivery" },
                  { icon: FaAward, title: "Custom Built" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-steel-100"
                  >
                    <item.icon className="text-brand-orange text-xl" />
                    <span className="text-sm font-bold text-navy">
                      {item.title}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ----- RIGHT: Sticky Sidebar ----- */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <EnquiryForm product={product} />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-navy rounded-2xl p-6 text-white relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl" />

                  <h3 className="font-display text-lg font-bold mb-2 relative z-10">
                    Prefer to Call?
                  </h3>
                  <p className="text-sm text-white/70 mb-4 relative z-10">
                    Talk to our team directly — we're here Mon-Sat, 8 AM to 8
                    PM.
                  </p>

                  <div className="space-y-3 relative z-10">
                    <a
                      href={`tel:${COMPANY.phoneRaw}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-dark transition-colors"
                    >
                      <FaPhoneAlt />
                      {COMPANY.phone}
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <FaWhatsapp className="text-lg" />
                      WhatsApp — 24x7
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== RELATED PRODUCTS ========== */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-brand-orange text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2 inline-block">
                — You May Also Like
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy">
                Related Products
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}