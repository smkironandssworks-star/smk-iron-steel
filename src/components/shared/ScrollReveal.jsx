import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../../utils/animations";

export default function ScrollReveal({
  children,
  variant = fadeUp,
  delay = 0,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}