import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { COMPANY, WHATSAPP_LINK, MAPS_LINK } from "../../utils/constants";

const cards = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    primary: COMPANY.phones[0].label,
    secondary: COMPANY.phones[1]?.label,
    href: `tel:${COMPANY.phones[0].raw}`,
    color: "from-blue-500 to-blue-600",
    action: "Call Now",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    primary: COMPANY.whatsappLabel,
    secondary: "Available 24x7",
    href: WHATSAPP_LINK,
    external: true,
    color: "from-green-500 to-green-600",
    action: "Chat Now",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    primary: COMPANY.email,
    secondary: "Replies within 24 hours",
    href: `mailto:${COMPANY.email}`,
    color: "from-purple-500 to-purple-600",
    action: "Send Email",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    primary: "Pondicherry",
    secondary: COMPANY.address,
    href: MAPS_LINK,
    external: true,
    color: "from-orange-500 to-orange-600",
    action: "Get Directions",
  },
];

export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <motion.a
          key={card.title}
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ y: -8 }}
          className="group relative bg-white rounded-2xl p-6 border border-steel-100 shadow-card hover:shadow-card-hover hover:border-brand-orange/40 transition-all overflow-hidden"
        >
          {/* Gradient glow top-right */}
          <div
            className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
          />

          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <card.icon className="text-white text-xl" />
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-navy mb-3">
            {card.title}
          </h3>

          {/* Primary */}
          <p className="font-semibold text-navy text-sm mb-1 break-words">
            {card.primary}
          </p>

          {/* Secondary */}
          <p className="text-xs text-steel-500 leading-relaxed mb-4">
            {card.secondary}
          </p>

          {/* Action link */}
          <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider">
            {card.action}
            {card.external && (
              <FaExternalLinkAlt className="text-[10px] opacity-70" />
            )}
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />
        </motion.a>
      ))}
    </div>
  );
}