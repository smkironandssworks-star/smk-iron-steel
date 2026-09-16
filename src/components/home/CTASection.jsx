import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBolt } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { COMPANY, WHATSAPP_LINK } from "../../utils/constants";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange-dark to-brand-orange" />

      {/* Animated grid pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating animated blobs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-navy/25 rounded-full blur-3xl pointer-events-none"
      />

      {/* Sparkle dots */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 bg-white rounded-full pointer-events-none"
          style={{
            top: `${15 + i * 12}%`,
            left: `${10 + i * 14}%`,
          }}
        />
      ))}

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Small badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm mb-6"
          >
            <FaBolt className="text-white text-xs" />
            <span className="text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">
              Get a Free Quote Today
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Ready to Build with{" "}
            <span className="relative inline-block">
              Strength?
              {/* Animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-white/80 rounded-full origin-left"
              />
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-white/90 text-base md:text-lg mb-10 leading-relaxed"
          >
            Get in touch with us today for the best quality steel products and
            competitive pricing. Our team is ready to assist you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                size="lg"
                variant="outline"
                href={`tel:${COMPANY.phoneRaw}`}
                className="!border-white !text-white hover:!bg-white hover:!text-brand-orange shadow-xl"
              >
                <FaPhoneAlt className="mr-2" />
                {COMPANY.phone}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                size="lg"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-white !text-brand-orange hover:!bg-navy hover:!text-white shadow-xl"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                WhatsApp Enquiry
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust line below buttons */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-white/70 text-xs md:text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Quick Response
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Best Price Guarantee
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Pan-India Delivery
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}