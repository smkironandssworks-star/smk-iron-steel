import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaArrowLeft } from "react-icons/fa";
import Container from "../ui/Container";

export default function ProductNotFound() {
    return (
        <section className="section-padding bg-steel-50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-lg mx-auto text-center py-20"
                >
                    <div className="w-20 h-20 mx-auto rounded-full bg-brand-orange/10 flex items-center justify-center mb-6">
                        <FaBoxOpen className="text-3xl text-brand-orange" />
                    </div>

                    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-navy mb-3">
                        Product Not Found
                    </h1>
                    <p className="text-steel-500 mb-8">
                        The product you're looking for doesn't exist or has been removed.
                    </p>

                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy text-white font-bold hover:bg-brand-orange transition-colors"
                    >
                        <FaArrowLeft />
                        Back to Products
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}