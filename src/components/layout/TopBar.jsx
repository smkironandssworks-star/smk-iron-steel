import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import Container from "../ui/Container";
import { COMPANY, SOCIAL_LINKS } from "../../utils/constants";

const socials = [
    { icon: FaFacebookF, href: SOCIAL_LINKS.facebook, label: "Facebook" },
    { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
    { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
];

export default function TopBar() {
    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-navy text-white/90 text-xs md:text-sm border-b border-white/10"
        >
            <Container>
                <div className="flex items-center justify-between py-2 gap-4">
                    <div className="flex items-center gap-3 md:gap-6 flex-wrap">
                        <a
                            href={`mailto:${COMPANY.email}`}
                            className="hidden md:flex items-center gap-2 hover:text-brand-orange transition-colors"
                        >
                            <FaEnvelope className="text-brand-orange text-[10px]" />
                            <span>{COMPANY.email}</span>
                        </a>

                        <a
                            href={`tel:${COMPANY.phoneRaw}`}
                            className="flex items-center gap-2 hover:text-brand-orange transition-colors"
                        >
                            <FaPhoneAlt className="text-brand-orange text-[10px]" />
                            <span>{COMPANY.phone}</span>
                        </a>

                        <div className="hidden lg:flex items-center gap-2">
                            <FaMapMarkerAlt className="text-brand-orange text-[10px]" />
                            <span>{COMPANY.addressShort}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ y: -2, scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-brand-orange transition-colors duration-300"
                            >
                                <Icon className="text-xs" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Container>
        </motion.div>
    );
}