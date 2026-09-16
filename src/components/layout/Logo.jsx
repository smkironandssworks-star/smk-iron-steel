import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../utils/constants";

// Size presets — pick one via the `size` prop
const sizeMap = {
  sm: "h-8 md:h-10",       // compact (mobile drawer)
  md: "h-10 md:h-12",      // default (navbar)
  lg: "h-12 md:h-14",      // larger (footer)
  xl: "h-14 md:h-16",      // extra large (hero/splash)
};

export default function Logo({
  variant = "dark",
  size = "md",
  className = "",
}) {
  return (
    <Link
      to="/"
      className={cn("flex items-center group shrink-0", className)}
      aria-label="SMK Iron & Steel - Home"
    >
      <motion.img
        src="/logo.png"
        alt="SMK Iron & Steel"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "w-auto object-contain select-none",
          sizeMap[size]
        )}
        style={
          variant === "light"
            ? { filter: "brightness(0) invert(1)" }
            : undefined
        }
        draggable={false}
      />
    </Link>
  );
}