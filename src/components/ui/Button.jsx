import { motion } from "framer-motion";
import { cn } from "../../utils/constants";

const variants = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark shadow-md shadow-brand-orange/30",
  secondary:
    "bg-white text-navy border-2 border-white/30 hover:border-brand-orange hover:text-brand-orange backdrop-blur-sm",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-navy/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  href,
  ...props
}) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-300 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </Component>
  );
}