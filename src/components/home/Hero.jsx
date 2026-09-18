import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaChevronDown,
  FaShieldAlt,
} from "react-icons/fa";
import Button from "../ui/Button";
import { COMPANY, WHATSAPP_LINK } from "../../utils/constants";
import { fadeUp, staggerContainer } from "../../utils/animations";

const stats = [
  { num: "10+", label: "Years Experience" },
  { num: "1000+", label: "Projects Delivered" },
  { num: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/Home_Bg.png"
          alt="Iron & steel fabrication workshop"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />

      <div
        className="absolute inset-0 z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-3xl z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl text-left"
          style={{ marginRight: "auto" }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/40 mb-6 backdrop-blur-sm"
          >
            <FaShieldAlt className="text-brand-orange text-[10px]" />
            <span className="text-brand-orange text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase">
              Trusted Since {COMPANY.experience} Years
            </span>
          </motion.div>

          {/* Heading — SHORTER to prevent overflow */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          >
            Iron, Steel
            <br />
            <span className="text-brand-orange">& Shutters</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base md:text-lg text-white/75 mb-8 max-w-lg leading-relaxed"
          >
            Custom iron cots, stainless steel furniture, doors, railings, and
            rolling shutters — manufactured and installed by our expert team in
            Pondicherry.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-3 md:gap-4 mb-12 justify-start"
          >
            <Button size="lg" variant="primary" href={`tel:${COMPANY.phoneRaw}`}>
              <FaPhoneAlt className="mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg pt-8 border-t border-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "left" }}>
                <div className="font-display text-2xl md:text-3xl font-extrabold text-brand-orange leading-none">
                  {stat.num}
                </div>
                <div className="text-[10px] md:text-xs text-white/55 uppercase tracking-wider mt-2 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 0.5 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/40 hidden md:block"
      >
        <FaChevronDown className="text-2xl" />
      </motion.div>
    </section>
  );
}