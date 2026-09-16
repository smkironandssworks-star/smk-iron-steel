import { motion } from "framer-motion";
import {
    FaCalendarAlt,
    FaCheckCircle,
    FaLayerGroup,
    FaTruck,
    FaArrowRight,
} from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const features = [
    {
        icon: FaCalendarAlt,
        title: "10+ Years",
        sub: "Of Industry Experience",
    },
    {
        icon: FaCheckCircle,
        title: "100% Genuine",
        sub: "Products",
    },
    {
        icon: FaLayerGroup,
        title: "Wide Range",
        sub: "Of Steel Products",
    },
    {
        icon: FaTruck,
        title: "Pan India Supply",
        sub: "Transport Available",
    },
];

export default function AboutSection() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=80"
                                alt="Steel pipes in industrial warehouse"
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                        </div>

                        {/* Floating experience badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute -bottom-6 -right-4 md:right-6 bg-brand-orange text-white rounded-2xl p-5 md:p-6 shadow-2xl shadow-brand-orange/40"
                        >
                            <div className="font-display text-3xl md:text-4xl font-black leading-none">
                                10+
                            </div>
                            <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1 opacity-90">
                                Years of Trust
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <SectionTitle
                            eyebrow="About SMK Iron & Steel"
                            title="Your Trusted Steel Partner"
                            subtitle="SMK Iron & Steel is a leading supplier of high-quality iron and steel products for the construction, infrastructure and industrial sectors. With a commitment to quality, timely delivery, and customer satisfaction, we have built long-term relationships with our clients across the region."
                        />

                        {/* Feature grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -3 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-steel-50 border border-steel-100 hover:border-brand-orange/30 transition-colors"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                                        <f.icon className="text-brand-orange text-lg" />
                                    </div>
                                    <div>
                                        <div className="font-display font-bold text-navy text-sm md:text-base">
                                            {f.title}
                                        </div>
                                        <div className="text-xs text-steel-500">{f.sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Button variant="primary" size="lg" href="/about">
                            Know More
                            <FaArrowRight className="ml-2 text-sm" />
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}