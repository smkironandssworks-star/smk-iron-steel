import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function ProductFilters({
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    productCounts,
    totalCount,
}) {
    return (
        <div className="mb-10 md:mb-12">
            {/* Search bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative max-w-xl mb-8"
            >
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-steel-500" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products by name..."
                    className="w-full pl-12 pr-12 py-4 rounded-xl border border-steel-200 bg-white text-navy placeholder-steel-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-steel-100 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-colors"
                    >
                        <FaTimes className="text-xs" />
                    </button>
                )}
            </motion.div>

            {/* Filter chips */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap gap-2 md:gap-3"
            >
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const count =
                        cat.id === "all" ? totalCount : productCounts[cat.id] || 0;

                    return (
                        <motion.button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className={`relative px-4 md:px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${isActive
                                    ? "bg-navy text-white shadow-lg shadow-navy/20"
                                    : "bg-white text-navy border border-steel-200 hover:border-brand-orange"
                                }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="filter-pill"
                                    className="absolute inset-0 bg-navy rounded-lg -z-10"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {cat.label}
                                <span
                                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isActive
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
        </div>
    );
}