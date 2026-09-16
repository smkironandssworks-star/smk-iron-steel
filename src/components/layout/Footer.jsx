import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import Container from "../ui/Container";
import Logo from "./Logo";
import { COMPANY, SOCIAL_LINKS, WHATSAPP_LINK } from "../../utils/constants";
import { NAV_LINKS } from "../../data/navigation";

const socials = [
  { icon: FaFacebookF, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/70 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-4 inline-block mb-5">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Your trusted partner for high-quality iron and steel products —
              serving construction and industrial sectors across India.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-brand-orange rounded-full" />
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm hover:text-brand-orange transition-colors"
                  >
                    <FaArrowRight className="text-[10px] text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-brand-orange rounded-full" />
            </h4>
            <ul className="space-y-4 text-sm">
              {COMPANY.phones.map((p) => (
                <li key={p.raw}>
                  <a
                    href={`tel:${p.raw}`}
                    className="flex items-start gap-3 hover:text-brand-orange transition-colors"
                  >
                    <FaPhoneAlt className="text-brand-orange mt-1 flex-shrink-0 text-xs" />
                    <span>{p.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 hover:text-brand-orange transition-colors break-all"
                >
                  <FaEnvelope className="text-brand-orange mt-1 flex-shrink-0 text-xs" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-orange mt-1 flex-shrink-0 text-xs" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5 relative inline-block">
              Working Hours
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-brand-orange rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaClock className="text-brand-orange mt-1 flex-shrink-0 text-xs" />
                <span>{COMPANY.hours.weekdays}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-brand-orange mt-1 flex-shrink-0 text-xs" />
                <span>{COMPANY.hours.sunday}</span>
              </li>
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-dark transition-colors"
            >
              WhatsApp — {COMPANY.whatsappNote}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {year} <span className="text-white font-semibold">{COMPANY.name}</span>. All Rights Reserved.
          </p>
          <p className="flex items-center gap-2">
            Designed for a <span className="text-brand-orange font-semibold">Stronger Tomorrow</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}