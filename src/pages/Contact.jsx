import { motion } from "framer-motion";
import {
  FaClock,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaDirections,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import PageBanner from "../components/shared/PageBanner";
import SectionTitle from "../components/ui/SectionTitle";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactForm from "../components/contact/ContactForm";
import {
  COMPANY,
  WHATSAPP_LINK,
  MAPS_LINK,
  MAPS_EMBED_SRC,
} from "../utils/constants";

export default function Contact() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <PageBanner
        title="Contact Us"
        subtitle="We're here to help. Reach out via call, WhatsApp, email, or visit our workshop in Pondicherry."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* ================= INFO CARDS ================= */}
      <section className="relative -mt-8 md:-mt-10 z-20">
        <Container>
          <ContactInfoCards />
        </Container>
      </section>

      {/* ================= FORM + SIDEBAR ================= */}
      <section className="section-padding bg-steel-50 mt-8 md:mt-12">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Working Hours Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-6 md:p-7 shadow-card border border-steel-100"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <FaClock className="text-brand-orange" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    Working Hours
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-steel-100">
                    <span className="text-sm font-semibold text-navy">
                      Monday — Saturday
                    </span>
                    <span className="text-sm text-steel-500">
                      8:00 AM — 8:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-steel-100">
                    <span className="text-sm font-semibold text-navy">
                      Sunday
                    </span>
                    <span className="text-sm text-steel-500">
                      8:00 AM — 2:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm font-semibold text-navy">
                      WhatsApp Support
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      24x7
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Quick WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative bg-navy rounded-2xl p-6 md:p-7 text-white overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-green-500/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>

                  <h3 className="font-display text-lg font-bold mb-2">
                    Need a Quick Answer?
                  </h3>
                  <p className="text-sm text-white/70 mb-5">
                    Message us on WhatsApp for instant replies — send us your
                    requirement and get a quote in minutes.
                  </p>

                  <motion.a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-colors shadow-lg"
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 md:p-7 shadow-card border border-steel-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-brand-orange" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    Visit Our Workshop
                  </h3>
                </div>

                <p className="text-sm text-steel-500 leading-relaxed mb-5">
                  {COMPANY.address}
                </p>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:underline"
                >
                  <FaDirections />
                  Get Directions
                </a>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= MAP ================= */}
      <section className="bg-white">
        <Container className="py-12 md:py-16">
          <SectionTitle
            eyebrow="Find Us"
            title="Visit Our Workshop"
            subtitle="Located in Pondicherry — easily accessible from Chennai, Villupuram, Cuddalore, and nearby districts."
            align="center"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-steel-100 mt-8"
          >
            <div className="aspect-[16/9] w-full">
              <iframe
                title="SMK Iron & Steel Works Location"
                src={MAPS_EMBED_SRC}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>

            {/* Floating info card */}
            <div className="hidden md:block absolute bottom-6 left-6 bg-white rounded-xl shadow-2xl p-5 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy text-sm mb-1">
                    SMK Iron & Steel Works
                  </div>
                  <p className="text-xs text-steel-500 leading-relaxed">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

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
            Let's Build Something Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            For quotes, bulk orders, or questions — we're just a message away.
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