import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "../ui/Container";
import Logo from "./Logo";
import { NAV_LINKS } from "../../data/navigation";
import { WHATSAPP_LINK, COMPANY, cn } from "../../utils/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-3 md:py-4"
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Logo />

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative px-4 py-2 text-sm font-semibold transition-colors duration-300 group",
                      isActive
                        ? "text-brand-orange"
                        : "text-navy hover:text-brand-orange"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={cn(
                          "absolute left-4 right-4 -bottom-0.5 h-0.5 bg-brand-orange rounded-full origin-left transition-transform duration-300",
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-orange text-white font-semibold text-sm shadow-md shadow-brand-orange/30 hover:bg-brand-orange-dark transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Enquiry
              </motion.a>

              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-navy text-white hover:bg-brand-orange transition-colors"
              >
                <HiMenuAlt3 className="text-2xl" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[60] lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-steel-100">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-navy/5 text-navy hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <HiX className="text-xl" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.path === "/"}
                        className={({ isActive }) =>
                          cn(
                            "block px-4 py-3 rounded-lg font-semibold transition-colors",
                            isActive
                              ? "bg-brand-orange/10 text-brand-orange border-l-4 border-brand-orange"
                              : "text-navy hover:bg-steel-50"
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-5 border-t border-steel-100 space-y-3">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-navy text-white font-semibold hover:bg-navy-light transition-colors"
                >
                  <FaPhoneAlt className="text-brand-orange" />
                  {COMPANY.phone}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-brand-orange text-white font-semibold hover:bg-brand-orange-dark transition-colors"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp Enquiry
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}