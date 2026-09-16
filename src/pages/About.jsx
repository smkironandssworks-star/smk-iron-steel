import { motion } from "framer-motion";
import {
  FaEye,
  FaBullseye,
  FaShieldAlt,
  FaHandshake,
  FaTruck,
  FaAward,
  FaUsers,
  FaBoxes,
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import PageBanner from "../components/shared/PageBanner";
import SectionTitle from "../components/ui/SectionTitle";
import JourneyCarousel from "../components/about/JourneyCarousel";
import { COMPANY, WHATSAPP_LINK } from "../utils/constants";

// ================= DATA =================

const values = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    text: "To supply high-quality iron and steel products that empower India's construction and infrastructure growth.",
    accent: "from-brand-orange/20 to-transparent",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    text: "To become the most trusted steel partner for businesses of every size across South India.",
    accent: "from-navy/20 to-transparent",
  },
];

const whyChooseUs = [
  {
    icon: FaShieldAlt,
    title: "Certified Quality",
    text: "Every product is sourced from ISI-certified mills and tested for strength and durability.",
  },
  {
    icon: FaHandshake,
    title: "Trusted Service",
    text: "10+ years of relationships built on transparency, honest pricing, and reliable delivery.",
  },
  {
    icon: FaTruck,
    title: "Pan-India Delivery",
    text: "Fast and secure transport with real-time coordination from our Srikalahasti facility.",
  },
  {
    icon: FaAward,
    title: "Wide Range",
    text: "TMT Bars, MS Pipes, Sections, Sheets, Angles & Channels — all under one roof.",
  },
  {
    icon: FaUsers,
    title: "Dedicated Team",
    text: "Experienced staff to help you pick the right product for your specific application.",
  },
  {
    icon: FaBoxes,
    title: "Bulk Supply",
    text: "Ready stock for large projects with competitive wholesale pricing.",
  },
];

const stats = [
  { num: "10+", label: "Years Experience" },
  { num: "500+", label: "Happy Clients" },
  { num: "50+", label: "Product Types" },
  { num: "24/7", label: "Support" },
];

const timeline = [
  {
    year: "2014",
    title: "Company Founded",
    tag: "Beginning",
    text: "SMK Iron & Steel opened its doors in Srikalahasti, Andhra Pradesh with a small warehouse and big ambitions.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    points: [
      "Started with 3 product categories",
      "First 10 clients signed in month one",
      "Set up base in Srikalahasti",
    ],
  },
  {
    year: "2017",
    title: "Expanded Product Range",
    tag: "Growth",
    text: "Added MS Pipes, Steel Sheets, and Sections to meet growing demand from construction clients.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
    points: [
      "Introduced MS Pipes & Sections",
      "Warehouse doubled in size",
      "Crossed 100+ active clients",
    ],
  },
  {
    year: "2020",
    title: "Pan-India Delivery",
    tag: "Expansion",
    text: "Started supplying to clients across multiple states with a dedicated transport fleet.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    points: [
      "Own fleet of delivery trucks",
      "Serving 5+ states",
      "24/7 dispatch support",
    ],
  },
  {
    year: "2024",
    title: "10 Years of Trust",
    tag: "Milestone",
    text: "Crossed 500+ happy clients and celebrated a decade of trusted service across South India.",
    image:
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=1200&q=80",
    points: [
      "500+ happy clients",
      "10+ years of service",
      "Full product portfolio",
    ],
  },
];

// ================= COMPONENTS =================

export default function About() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <PageBanner
        title="About Us"
        subtitle="A decade of supplying quality steel — building trust one delivery at a time."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About Us" },
        ]}
      />

      {/* ================= STORY ================= */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div
          className="absolute top-20 right-0 w-96 h-96 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #0A1B33 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

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
              <div className="absolute -inset-4 bg-brand-orange/10 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=80"
                  alt="SMK Iron & Steel warehouse"
                  className="w-full h-[400px] md:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>

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

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 -left-4 md:left-6 bg-white rounded-xl shadow-xl p-3 md:p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <FaShieldAlt className="text-brand-orange" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy text-sm">
                    ISI Certified
                  </div>
                  <div className="text-[10px] text-steel-500">
                    Quality Assured
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
                eyebrow="Our Story"
                title="Building Strength Since 2014"
                subtitle="SMK Iron & Steel began as a small family business in Srikalahasti, Andhra Pradesh. Over a decade later, we're a trusted supplier of high-quality iron and steel products to construction companies, fabricators, and industrial clients across South India."
              />

              <p className="text-steel-500 leading-relaxed mb-6">
                Every product we sell is carefully sourced from certified mills,
                inspected for quality, and delivered with the same personal
                service that started it all. Whether you need a single length of
                pipe or a bulk order of TMT bars, you get the same attention.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "ISI Certified Mills",
                  "On-Time Delivery",
                  "Bulk Discounts",
                  "Expert Guidance",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <FaCheckCircle className="text-brand-orange shrink-0" />
                    <span className="text-sm font-semibold text-navy">
                      {item}
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-dark transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                Talk to Our Team
                <FaArrowRight className="text-xs" />
              </motion.a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="section-padding bg-steel-50 relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all border border-steel-100 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-orange to-brand-orange-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br ${item.accent} transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-navy group-hover:bg-brand-orange flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg shadow-navy/10 group-hover:shadow-brand-orange/30">
                    <item.icon className="text-brand-orange group-hover:text-white text-2xl transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-steel-500 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-padding bg-white relative overflow-hidden">
        <Container>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Reasons Our Clients Trust Us"
            subtitle="Six reasons why businesses across South India choose SMK Iron & Steel."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-steel-50 rounded-2xl p-6 border border-steel-100 hover:border-brand-orange/40 hover:bg-white hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-brand-orange flex items-center justify-center mb-4 transition-colors shadow-sm">
                  <item.icon className="text-brand-orange group-hover:text-white text-lg transition-colors" />
                </div>

                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-steel-500 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative py-16 md:py-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-orange/15 rounded-full blur-3xl pointer-events-none"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-black text-brand-orange leading-none mb-2">
                  {stat.num}
                </div>
                <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= JOURNEY CAROUSEL ================= */}
      <JourneyCarousel milestones={timeline} />

      {/* ================= CTA ================= */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange-dark to-brand-orange" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <Container className="relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl mx-auto"
          >
            Ready to Work with Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            Let's discuss your steel requirements. Our team is ready to help you
            find the right products at the best price.
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-navy text-white font-bold shadow-xl hover:bg-navy-dark transition-colors"
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-brand-orange font-bold shadow-xl hover:bg-navy hover:text-white transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Enquiry
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}