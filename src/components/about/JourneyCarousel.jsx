import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const AUTOPLAY_DURATION = 5000; // 5 seconds

export default function JourneyCarousel({ milestones = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());

  const total = milestones.length;

  // Next / Prev
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const goTo = (index) => {
    setActiveIndex(index);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  // Autoplay + progress
  useEffect(() => {
    if (isPaused) return;

    let animationFrame;
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        next();
      } else {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [activeIndex, isPaused]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe
  const touchStartX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setIsPaused(false);
  };

  const current = milestones[activeIndex];

  return (
    <section className="section-padding bg-steel-50 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #0A1B33 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Our Journey"
          title="Milestones That Shaped Us"
          subtitle="From a small workshop in Pondicherry to a trusted iron & steel works across Tamil Nadu and Andhra Pradesh."
          align="center"
        />

        {/* ============ CAROUSEL ============ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative mt-12 md:mt-16"
        >
          {/* Main card */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-steel-100">
            {/* 50/50 split — no forced height so images display fully */}
            <div className="grid lg:grid-cols-2">
              {/* Image side — 50% width, full image visible */}
              <div className="relative overflow-hidden bg-white min-h-[280px] lg:min-h-[560px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={current.image}
                    alt={current.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-contain object-center"
                  />
                </AnimatePresence>

                {/* Year badge */}
                <motion.div
                  key={`year-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10"
                >
                  <div className="bg-brand-orange text-white rounded-2xl px-5 py-3 shadow-2xl shadow-brand-orange/40">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                      Year
                    </div>
                    <div className="font-display text-3xl md:text-4xl font-black leading-none">
                      {current.year}
                    </div>
                  </div>
                </motion.div>

                {/* Tag chip */}
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/60 backdrop-blur-sm border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    {current.tag}
                  </span>
                </div>
              </div>

              {/* Content side — 50% width */}
              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                {/* Big faded number background */}
                <div className="absolute top-4 right-4 md:top-6 md:right-8 font-display text-[120px] md:text-[180px] font-black text-navy/[0.04] leading-none select-none pointer-events-none">
                  {String(activeIndex + 1).padStart(2, "0")}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    {/* Counter */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em]">
                        Milestone {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(total).padStart(2, "0")}
                      </span>
                      <span className="flex-1 h-px bg-steel-200 max-w-[80px]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
                      {current.title}
                    </h3>

                    {/* Text */}
                    <p className="text-steel-500 leading-relaxed mb-6 max-w-2xl">
                      {current.text}
                    </p>

                    {/* Points */}
                    <ul className="space-y-2.5">
                      {current.points.map((point, i) => (
                        <motion.li
                          key={point}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="text-brand-orange mt-1 shrink-0 text-sm" />
                          <span className="text-sm font-semibold text-navy">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ============ PROGRESS BAR ============ */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-steel-100">
              <motion.div
                className="h-full bg-brand-orange"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>

          {/* ============ CONTROLS ============ */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {milestones.map((m, i) => (
                <button
                  key={m.year}
                  onClick={() => goTo(i)}
                  aria-label={`Go to milestone ${i + 1}`}
                  className="group relative"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-500 ${
                      i === activeIndex
                        ? "w-10 bg-brand-orange"
                        : "w-2 bg-steel-200 group-hover:bg-steel-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Prev/Next + Pause */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused((p) => !p)}
                aria-label={isPaused ? "Play" : "Pause"}
                className="w-10 h-10 rounded-full bg-white border border-steel-200 flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors"
              >
                {isPaused ? (
                  <FaPlay className="text-xs" />
                ) : (
                  <FaPause className="text-xs" />
                )}
              </button>

              <button
                onClick={prev}
                aria-label="Previous milestone"
                className="w-11 h-11 rounded-full bg-white border border-steel-200 flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors shadow-sm"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              <button
                onClick={next}
                aria-label="Next milestone"
                className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center hover:bg-brand-orange transition-colors shadow-md"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}