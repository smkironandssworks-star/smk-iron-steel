import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

// Validation schema
const schema = z.object({
  from_name: z.string().min(2, "Please enter your full name"),
  from_phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  from_email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      reset();

      // Reset success message after 6 seconds
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputClass = (hasError) =>
    `w-full pl-11 pr-4 py-3 rounded-lg border bg-steel-50 focus:bg-white outline-none transition-all text-navy placeholder-steel-500 ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-steel-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-steel-100"
    >
      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold text-navy mb-2">
          Send Us a Message
        </h3>
        <p className="text-sm text-steel-500">
          Fill the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500 text-sm" />
          <input
            type="text"
            {...register("from_name")}
            placeholder="Your full name"
            className={inputClass(errors.from_name)}
          />
          {errors.from_name && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.from_name.message}
            </p>
          )}
        </div>

        {/* Phone + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500 text-sm" />
              <input
                type="tel"
                {...register("from_phone")}
                placeholder="Phone number"
                className={inputClass(errors.from_phone)}
              />
            </div>
            {errors.from_phone && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.from_phone.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500 text-sm" />
              <input
                type="email"
                {...register("from_email")}
                placeholder="Email address"
                className={inputClass(errors.from_email)}
              />
            </div>
            {errors.from_email && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.from_email.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <div className="relative">
            <FaCommentDots className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500 text-sm" />
            <input
              type="text"
              {...register("subject")}
              placeholder="Subject (e.g., TMT Bars enquiry)"
              className={inputClass(errors.subject)}
            />
          </div>
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="relative">
            <FaCommentDots className="absolute left-4 top-4 text-steel-500 text-sm" />
            <textarea
              rows={5}
              {...register("message")}
              placeholder="Your message (product, quantity, delivery location...)"
              className={`${inputClass(errors.message)} resize-none`}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={status === "idle" ? { scale: 1.02, y: -2 } : {}}
          whileTap={status === "idle" ? { scale: 0.98 } : {}}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold shadow-lg transition-colors ${
            status === "sending"
              ? "bg-steel-300 text-steel-500 cursor-not-allowed"
              : "bg-brand-orange text-white hover:bg-brand-orange-dark shadow-brand-orange/30"
          }`}
        >
          {status === "sending" ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </motion.button>

        {/* Status messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200"
          >
            <FaCheckCircle className="text-green-500 text-lg shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-green-700 text-sm">
                Message sent successfully!
              </p>
              <p className="text-xs text-green-600 mt-0.5">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200"
          >
            <FaExclamationCircle className="text-red-500 text-lg shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-700 text-sm">
                Something went wrong
              </p>
              <p className="text-xs text-red-600 mt-0.5">
                Please try again or contact us directly on WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}