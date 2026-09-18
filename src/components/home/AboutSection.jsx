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
    sub: "Of Craftsmanship",
  },
  {
    icon: FaCheckCircle,
    title: "100% Custom",
    sub: "Made to Your Size",
  },
  {
    icon: FaLayerGroup,
    title: "Wide Range",
    sub: "Iron, SS & Shutters",
  },
  {
    icon: FaTruck,
    title: "Local Delivery",
    sub: "Pondicherry & Nearby",
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image (full size) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/About_SMK.png"
                alt="SMK Iron & Steel Works — Iron Cots, SS Fabrication, Shutters"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              eyebrow="About SMK Iron & Steel Works"
              title="Your Trusted Iron & Steel Partner"
              subtitle="From a small family workshop in Pondicherry, we've grown into a trusted fabricator of iron cots, stainless steel furniture, doors, railings, and rolling shutters — serving homes, hotels, and businesses across South India."
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