import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../shared/ProductCard";
import { products } from "../../data/products";

export default function ProductGrid() {
  return (
    <section className="section-padding bg-steel-50 relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-40" />

      <Container>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Our Products"
            title="Crafted for Strength & Style"
            subtitle="From iron cots and stainless steel furniture to custom doors, railings, and rolling shutters — every product is built to your size and design."
            className="mb-0"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-navy font-bold group"
            >
              <span className="border-b-2 border-transparent group-hover:border-brand-orange transition-colors pb-1">
                View All Products
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}