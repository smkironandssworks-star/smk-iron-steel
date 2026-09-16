import { motion } from "framer-motion";
import { cn } from "../../utils/constants";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-flex items-center gap-2 mb-4",
            isCenter && "justify-center"
          )}
        >
          <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
          <span className="text-brand-orange text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "text-base md:text-lg leading-relaxed",
            light ? "text-white/70" : "text-steel-500"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}