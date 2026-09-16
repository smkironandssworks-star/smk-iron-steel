import { motion } from "framer-motion";
import {
  FaTruck,
  FaCut,
  FaBoxes,
  FaWarehouse,
  FaHeadset,
  FaClipboardCheck,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaFileAlt,
  FaHandshake,
  FaShippingFast,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import PageBanner from "../components/shared/PageBanner";
import SectionTitle from "../components/ui/SectionTitle";
import { COMPANY, WHATSAPP_LINK } from "../utils/constants";
import { fadeUp, staggerContainer } from "../utils/animations";

// ================= DATA =================

const services = [
  {
    icon: FaTruck,
    title: "Pan-India Delivery",
    text: "Fast, secure transport with our dedicated fleet across all major cities and industrial zones in South India.",
    tag: "Most Popular",
  },
  {
    icon: FaCut,
    title: "Custom Cutting & Sizing",
    text: "Precision cutting to your exact specifications — lengths, angles, and shapes for immediate installation.",
  },
  {
    icon: FaBoxes,
    title: "Bulk Supply",
    text: "Ready stock for large projects. Wholesale pricing with guaranteed quality for contractors and builders.",
  },
  {
    icon: FaWarehouse,
    title: "Warehouse & Storage",
    text: "Safe, dry storage for your steel — we hold inventory until your project is ready for delivery.",
  },
  {
    icon: FaHeadset,
    title: "Expert Consultation",
    text: "Free guidance from experienced staff to help you choose the right grade, size, and quantity.",
  },
  {
    icon: FaClipboardCheck,
    title: "Quality Assurance",
    text: "Every batch is inspected and certified. Mill test certificates available on request.",
  },
];

const process = [
  {
    step: "01",
    icon: FaFileAlt,
    title: "Share Your Requirement",
    text: "Call, WhatsApp, or email us with your product list, quantity, and delivery location.",
  },
  {
    step: "02",
    icon: FaClipboardCheck,
    title: "Get a Custom Quote",
    text: "We'll send you a detailed quote within hours, including delivery timeline and pricing.",
  },
  {
    step: "03",
    icon: FaHandshake,
    title: "Confirm & Schedule",
    text: "Once approved, we lock in your order and schedule dispatch at your convenience.",
  },
  {
    step: "04",
    icon: FaShippingFast,
    title: "Fast Delivery",
    text: "Your order is loaded, dispatched, and tracked until it reaches your site.",
  },
];

const features = [
  "ISI-certified products from trusted mills",
  "Transparent pricing — no hidden charges",
  "Same-day dispatch for ready stock",
  "Real-time updates on delivery status",
  "Dedicated account manager for B2B clients",
  "Mill test certificates with every order",
];

export default function Services() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <PageBanner
        title="Our Services"
        subtitle="More than just steel supply — we're your complete steel partner from enquiry to delivery."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services" },
        ]}
      />

      {/* ================= INTRO + SERVICES GRID ================= */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            eyebrow="What We Offer"
            title="Complete Steel Solutions Under One Roof"
            subtitle="From sourcing to delivery, we handle every step so you can focus on your project."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 md:p-7 border border-steel-100 shadow-card hover:shadow-card-hover hover:border-brand-orange/40 transition-all overflow-hidden"
              >
                {/* Hover accent bar */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />

                {/* Optional tag */}
                {service.tag && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-bold uppercase tracking-wider">
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy group-hover:bg-brand-orange flex items-center justify-center mb-5 transition-colors duration-300 shadow-lg shadow-navy/10 group-hover:shadow-brand-orange/30">
                  <service.icon className="text-brand-orange group-hover:text-white text-xl transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-steel-500 leading-relaxed mb-4">
                  {service.text}
                </p>

                {/* Learn more link */}
                <div className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More
                  <FaArrowRight className="text-[10px]" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-padding bg-steel-50 relative overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #0A1B33 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          <SectionTitle
            eyebrow="How We Work"
            title="A Simple 4-Step Process"
            subtitle="From first enquiry to final delivery — smooth, transparent, and fast."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-orange/30 via-brand-orange to-brand-orange/30 -z-0" />

            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10"
              >
                <div className="group bg-white rounded-2xl p-6 md:p-7 border border-steel-100 hover:border-brand-orange/40 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Icon on circle */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-navy group-hover:bg-brand-orange flex items-center justify-center shadow-lg shadow-navy/20 group-hover:shadow-brand-orange/40 transition-all duration-300 ring-4 ring-steel-50">
                      <item.icon className="text-white text-xl" />
                    </div>

                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-orange text-white text-[10px] font-black flex items-center justify-center shadow-md">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-steel-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= WHY CHOOSE OUR SERVICES ================= */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80"
                  alt="Steel delivery truck"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -bottom-6 -right-4 md:right-6 bg-navy text-white rounded-2xl p-5 md:p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center">
                    <FaTruck className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-black leading-none">
                      500+
                    </div>
                    <div className="text-[10px] uppercase tracking-wider opacity-70 mt-1">
                      Deliveries / Year
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionTitle
                eyebrow="Why Our Services"
                title="Reliable Service That Matches Our Steel"
                subtitle="We don't just supply steel — we deliver on promises. Here's what makes our service stand out:"
              />

              <div className="space-y-4 mb-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-steel-50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-orange/15 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheckCircle className="text-brand-orange text-xs" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-navy">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-dark transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                Request a Quote
                <FaArrowRight className="text-xs" />
              </motion.a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
        />

        <Container className="relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl mx-auto"
          >
            Need a Custom Steel Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            Tell us what you need — we'll handle the sourcing, cutting, and
            delivery. Fast quotes, no obligation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href={`tel:${COMPANY.phoneRaw}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-orange text-white font-bold shadow-xl hover:bg-brand-orange-dark transition-colors"
            >
              <FaPhoneAlt />
              {COMPANY.phone}
            </motion.a>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-navy font-bold shadow-xl hover:bg-brand-orange hover:text-white transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Us
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}