import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaFileAlt,
  FaHandshake,
  FaShippingFast,
  FaClipboardCheck,
  FaTools,
  FaIndustry,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import PageBanner from "../components/shared/PageBanner";
import SectionTitle from "../components/ui/SectionTitle";
import { COMPANY, WHATSAPP_LINK } from "../utils/constants";
import { serviceCategories } from "../data/services";

// ================= PROCESS =================
const process = [
  {
    step: "01",
    icon: FaFileAlt,
    title: "Share Your Requirement",
    text: "Send us your size, design, or reference photo via call, WhatsApp, or email.",
  },
  {
    step: "02",
    icon: FaClipboardCheck,
    title: "Get a Custom Quote",
    text: "We'll send a detailed quote with timeline and pricing within hours.",
  },
  {
    step: "03",
    icon: FaTools,
    title: "Fabrication Begins",
    text: "Skilled craftsmen build your product with precision and quality materials.",
  },
  {
    step: "04",
    icon: FaShippingFast,
    title: "Delivery & Installation",
    text: "We deliver and install — ensuring everything fits and works perfectly.",
  },
];

const features = [
  "Custom sizes — built to your exact dimensions",
  "Premium iron and stainless steel (SS 202 & 304)",
  "Skilled craftsmen with 10+ years experience",
  "On-time delivery across Pondicherry & nearby districts",
  "Installation support for shutters, doors, railings",
  "Free site visit and quote for bulk orders",
];

export default function Services() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <PageBanner
        title="Our Services"
        subtitle="Iron works, stainless steel fabrication, and rolling shutters — all under one roof."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services" },
        ]}
      />

      {/* ================= INTRO + JUMP LINKS ================= */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            eyebrow="What We Do"
            title="Complete Fabrication Services"
            subtitle="From single custom cots to full commercial fit-outs — we handle every stage in-house."
            align="center"
          />

          {/* Quick category jump */}
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-steel-50 border border-steel-200 hover:border-brand-orange hover:bg-white transition-all font-bold text-sm text-navy"
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= CATEGORY SECTIONS ================= */}
      {serviceCategories.map((category, catIdx) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding relative overflow-hidden scroll-mt-24 ${
            catIdx % 2 === 0 ? "bg-steel-50" : "bg-white"
          }`}
        >
          {/* Background dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #0A1B33 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <Container className="relative z-10">
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center shadow-lg shadow-navy/20">
                    <category.icon className="text-brand-orange text-2xl" />
                  </div>
                  <span className="text-3xl">{category.emoji}</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-3">
                  {category.label}
                </h2>
                <p className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3">
                  {category.tagline}
                </p>
                <p className="text-steel-500 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-orange text-white font-bold text-sm shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-dark transition-colors"
                >
                  <FaWhatsapp className="text-lg" />
                  Enquire Now
                </a>
              </div>
            </motion.div>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, i) => (
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

                  {/* Number badge */}
                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-steel-50 group-hover:bg-brand-orange/10 flex items-center justify-center transition-colors">
                    <span className="font-display font-black text-xs text-steel-500 group-hover:text-brand-orange transition-colors">
                      {String(catIdx * 6 + i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pr-12">
                    <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-steel-500 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* ================= PROCESS ================= */}
      <section className="section-padding bg-navy relative overflow-hidden">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
              <span className="text-brand-orange text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                How We Work
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              A Simple 4-Step Process
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              From first enquiry to final installation — smooth, transparent,
              and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-orange/30 via-brand-orange to-brand-orange/30" />

            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10"
              >
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-orange/40 rounded-2xl p-6 md:p-7 hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Icon circle */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/40 ring-4 ring-navy">
                      <item.icon className="text-white text-xl" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white text-navy text-[10px] font-black flex items-center justify-center shadow-md">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
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
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80"
                  alt="Iron & SS fabrication workshop"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -bottom-6 -right-4 md:right-6 bg-navy text-white rounded-2xl p-5 md:p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center">
                    <FaTools className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-black leading-none">
                      1000+
                    </div>
                    <div className="text-[10px] uppercase tracking-wider opacity-70 mt-1">
                      Projects Delivered
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
                title="Craftsmanship That Matches Our Materials"
                subtitle="We don't just fabricate — we deliver on promises. Here's what makes our service stand out:"
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
            Need a Custom Fabrication?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            Tell us your size, design, or reference — we'll handle the rest.
            Fast quotes, no obligation.
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