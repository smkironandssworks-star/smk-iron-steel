import { motion } from "framer-motion";
import {
  FaEye,
  FaBullseye,
  FaShieldAlt,
  FaHandshake,
  FaTruck,
  FaAward,
  FaUsers,
  FaHammer,
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
    text: "To craft durable iron and stainless steel products that serve families, businesses, and communities across South India — with honest pricing and quality craftsmanship.",
    accent: "from-brand-orange/20 to-transparent",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    text: "To become the most trusted iron works and SS fabrication partner for homes, hotels, and commercial spaces in Tamil Nadu, Puducherry, and Andhra Pradesh.",
    accent: "from-navy/20 to-transparent",
  },
];

const whyChooseUs = [
  {
    icon: FaShieldAlt,
    title: "Premium Materials",
    text: "We use high-grade iron and stainless steel (SS 202 & SS 304) — built to last for years.",
  },
  {
    icon: FaHandshake,
    title: "Trusted Service",
    text: "10+ years of relationships built on transparency, honest pricing, and on-time delivery.",
  },
  {
    icon: FaTruck,
    title: "Local + Outstation Delivery",
    text: "Fast delivery across Pondicherry, Tamil Nadu, and Andhra Pradesh with our own transport.",
  },
  {
    icon: FaHammer,
    title: "Custom Fabrication",
    text: "Iron cots, SS furniture, doors, railings, and shutters — all made to your exact size and design.",
  },
  {
    icon: FaUsers,
    title: "Skilled Craftsmen",
    text: "Experienced fabricators who bring precision, strength, and finish to every product.",
  },
  {
    icon: FaAward,
    title: "Installation Support",
    text: "Complete installation for shutters, railings, and doors — handled by our own team.",
  },
];

const stats = [
  { num: "10+", label: "Years Experience" },
  { num: "500+", label: "Happy Clients" },
  { num: "1000+", label: "Products Delivered" },
  { num: "24/7", label: "Support" },
];

const timeline = [
  {
    year: "2014",
    title: "Company Founded",
    tag: "Beginning",
    text: "SMK Iron & Steel Works opened its doors in Pondicherry with a small workshop and a big vision — to build quality iron products for local families.",
    image:
      "/public/Company_Founded1.png",
    points: [
      "Started as a small iron works workshop",
      "First 10 iron cots delivered",
      "Set up base in Ganapathi Chettikulam",
    ],
  },
  {
    year: "2017",
    title: "Stainless Steel Division",
    tag: "Growth",
    text: "Added stainless steel fabrication to our services — SS cots, sofas, chairs, tables, and custom SS work for homes and businesses.",
    image:
      "/public/Stainless_Steel_Division.png",
    points: [
      "Launched SS fabrication services",
      "Serving hotels & hostels",
      "Crossed 100+ happy clients",
    ],
  },
  {
    year: "2020",
    title: "Rolling Shutters & Doors",
    tag: "Expansion",
    text: "Expanded into rolling shutter supply and installation — both manual and automatic — for shops, garages, and commercial buildings.",
    image:
      "/public/Rolling_Shutters_Doors.png",
    points: [
      "Manual & automatic shutters",
      "Professional installation team",
      "Serving Pondicherry & nearby districts",
    ],
  },
  {
    year: "2024",
    title: "10 Years of Trust",
    tag: "Milestone",
    text: "Crossed 500+ completed projects and celebrated a decade of trusted fabrication across Tamil Nadu and Andhra Pradesh.",
    image:
      "/public/10_years.png",
    points: [
      "500+ projects delivered",
      "10+ years of experience",
      "Iron, SS & Shutters under one roof",
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
        subtitle="A decade of crafting quality iron cots, SS furniture, and rolling shutters — building trust one project at a time."
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
          {/* Wider image column: 3/5 for image, 2/5 for text */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            {/* Image side — takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/About1_SMK.png"
                  alt="SMK Iron & Steel Works workshop"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text side — takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <SectionTitle
                eyebrow="Our Story"
                title="Crafting Strength Since 2014"
                subtitle="SMK Iron & Steel Works began as a small family workshop in Pondicherry. Over a decade later, we're a trusted fabricator of iron cots, stainless steel furniture, doors, railings, and rolling shutters for homes, hotels, and businesses across South India."
              />

              <p className="text-steel-500 leading-relaxed mb-6">
                Every product we make is built from carefully selected materials,
                crafted by skilled hands, and finished with the same personal care
                that started it all. Whether you need a single cot or a full shop
                fit-out, you get the same attention.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Premium Iron & SS",
                  "Custom Sizes",
                  "On-Time Delivery",
                  "Installation Support",
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
                    <span className="text-sm font-semibold text-navy">{item}</span>
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
            subtitle="Six reasons why homes, hotels, and businesses across South India choose SMK Iron & Steel Works."
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
            Ready to Build Something with Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            Whether it's a custom iron cot, SS railing, or rolling shutter —
            our team is ready to help you find the right solution at the best
            price.
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