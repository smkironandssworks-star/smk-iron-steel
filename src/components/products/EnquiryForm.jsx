import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUser, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { COMPANY } from "../../utils/constants";

export default function EnquiryForm({ product }) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();

        // Compose a WhatsApp message
        const text = `Hi SMK Iron & Steel,%0A%0AI'm interested in *${product.name}*.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Requirement:* ${form.message}`;
        const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;

        window.open(url, "_blank");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-steel-100"
        >
            <h3 className="font-display text-xl md:text-2xl font-bold text-navy mb-2">
                Quick Enquiry
            </h3>
            <p className="text-sm text-steel-500 mb-6">
                Send us your requirement — we'll reply on WhatsApp within minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500 text-sm" />
                    <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-steel-200 bg-steel-50 focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-navy placeholder-steel-500"
                    />
                </div>

                {/* Phone */}
                <div className="relative">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500 text-sm" />
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-steel-200 bg-steel-50 focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-navy placeholder-steel-500"
                    />
                </div>

                {/* Message */}
                <div className="relative">
                    <FaCommentDots className="absolute left-4 top-4 text-steel-500 text-sm" />
                    <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your requirement (quantity, size, delivery location...)"
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-steel-200 bg-steel-50 focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-navy placeholder-steel-500 resize-none"
                    />
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-dark transition-colors"
                >
                    <FaWhatsapp className="text-xl" />
                    Send on WhatsApp
                </motion.button>
            </form>
        </motion.div>
    );
}