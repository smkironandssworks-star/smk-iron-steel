import { motion } from "framer-motion";
import { FaShieldAlt, FaRupeeSign, FaTruck, FaHeadset } from "react-icons/fa";
import Container from "../ui/Container";

const items = [
    {
        icon: FaShieldAlt,
        title: "Premium Quality",
        sub: "Certified & Tested",
    },
    {
        icon: FaRupeeSign,
        title: "Competitive Price",
        sub: "Best Value for Money",
    },
    {
        icon: FaTruck,
        title: "On Time Delivery",
        sub: "Safe & Secure Transport",
    },
    {
        icon: FaHeadset,
        title: "Customer Support",
        sub: "Always Here for You",
    },
];

export default function TrustBar() {
    return (
        <section className="bg-white py-12 md:py-16 border-b border-steel-100">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-center md:text-left p-4 md:p-0 rounded-xl md:rounded-none hover:bg-steel-50 md:hover:bg-transparent transition-colors"
                        >
                            <div className="relative shrink-0">
                                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300 shadow-lg shadow-navy/10 group-hover:shadow-brand-orange/30">
                                    <item.icon className="text-brand-orange group-hover:text-white text-xl transition-colors duration-300" />
                                </div>
                            </div>

                            <div className="md:pt-2">
                                <h3 className="font-display font-bold text-navy text-sm md:text-base mb-0.5">
                                    {item.title}
                                </h3>
                                <p className="text-xs md:text-sm text-steel-500">{item.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}