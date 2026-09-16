import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Container from "../ui/Container";

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-navy">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Orange glow */}
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-orange/15 rounded-full blur-3xl pointer-events-none"
            />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Breadcrumb */}
                    {breadcrumbs.length > 0 && (
                        <nav className="flex items-center gap-2 text-white/60 text-xs md:text-sm mb-4">
                            {breadcrumbs.map((crumb, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    {crumb.path ? (
                                        <Link
                                            to={crumb.path}
                                            className="hover:text-brand-orange transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-brand-orange font-semibold">
                                            {crumb.label}
                                        </span>
                                    )}
                                    {i < breadcrumbs.length - 1 && (
                                        <FaChevronRight className="text-[8px] opacity-50" />
                                    )}
                                </div>
                            ))}
                        </nav>
                    )}

                    {/* Title */}
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-white/70 text-base md:text-lg max-w-2xl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </Container>
        </section>
    );
}