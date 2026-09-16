import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaBoxOpen } from "react-icons/fa";
import Container from "../components/ui/Container";
import PageBanner from "../components/shared/PageBanner";
import ProductCard from "../components/shared/ProductCard";
import ProductFilters from "../components/products/ProductFilters";
import { products } from "../data/products";
import { COMPANY, WHATSAPP_LINK } from "../utils/constants";

// Category config for filter tabs
const CATEGORIES = [
    { id: "all", label: "All Products" },
    { id: "tmt-bars", label: "TMT Bars" },
    { id: "ms-pipes", label: "MS Pipes" },
    { id: "steel-sections", label: "Steel Sections" },
    { id: "steel-sheets", label: "Steel Sheets" },
    { id: "angles-channels", label: "Angles & Channels" },
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Filtered products based on category + search
    const filteredProducts = useMemo(() => {
        let list = products;

        // Category filter
        if (activeCategory !== "all") {
            list = list.filter((p) => p.id === activeCategory);
        }

        // Search filter
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.tagline.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
            );
        }

        return list;
    }, [activeCategory, searchQuery]);

    // Count of products per category
    const productCounts = useMemo(() => {
        const counts = {};
        products.forEach((p) => {
            counts[p.id] = 1;
        });
        return counts;
    }, []);

    return (
        <>
            <PageBanner
                title="Our Products"
                subtitle="Premium quality iron and steel products for construction, infrastructure, and industrial applications."
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Products" },
                ]}
            />

            <section className="section-padding bg-steel-50">
                <Container>
                    {/* Filters */}
                    <ProductFilters
                        categories={CATEGORIES}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        productCounts={productCounts}
                        totalCount={products.length}
                    />

                    {/* Result count */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm text-steel-500">
                            Showing{" "}
                            <span className="font-bold text-navy">
                                {filteredProducts.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-bold text-navy">{products.length}</span>{" "}
                            products
                        </p>
                        {activeCategory !== "all" && (
                            <button
                                onClick={() => {
                                    setActiveCategory("all");
                                    setSearchQuery("");
                                }}
                                className="text-xs font-bold text-brand-orange hover:underline"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>

                    {/* Grid */}
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filteredProducts.map((product, i) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                    >
                                        <ProductCard product={product} index={i} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            // Empty state
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 mx-auto rounded-full bg-steel-100 flex items-center justify-center mb-6">
                                    <FaBoxOpen className="text-3xl text-steel-500" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-navy mb-2">
                                    No products found
                                </h3>
                                <p className="text-steel-500 mb-6">
                                    Try adjusting your filters or search terms.
                                </p>
                                <button
                                    onClick={() => {
                                        setActiveCategory("all");
                                        setSearchQuery("");
                                    }}
                                    className="px-6 py-3 rounded-lg bg-brand-orange text-white font-semibold hover:bg-brand-orange-dark transition-colors"
                                >
                                    Reset Filters
                                </button>
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
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="max-w-xl">
                                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-2">
                                    Can't find what you're looking for?
                                </h3>
                                <p className="text-white/70">
                                    We stock a wide range of steel products. Contact us with your
                                    requirements and we'll source it for you.
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
        </>
    );
}