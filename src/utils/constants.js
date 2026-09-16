export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const COMPANY = {
  name: "SMK Iron & Steel",
  tagline: "Quality | Strength | Trust",

  phones: [
    { label: "+91 96269 90826", raw: "919626990826" },
    { label: "+91 78456 42284", raw: "917845642284" },
  ],

  phone: "+91 96269 90826",
  phoneRaw: "919626990826",

  whatsappNumber: "917845642284",
  whatsappLabel: "+91 78456 42284",
  whatsappMessage:
    "Hi SMK Iron & Steel, I would like to enquire about your products.",

  email: "smk.ironandsteelworks@gmail.com",
  address: "QP76+6X, Srikalahasti, Andhra Pradesh, India",
  addressShort: "Srikalahasti, Andhra Pradesh",

  experience: "10+",

  hours: {
    weekdays: "Mon - Sat: 8:00 AM - 8:00 PM",
    sunday: "Sunday: 8:00 AM - 2:00 PM",
  },

  whatsappNote: "Available 24x7",
};

export const WHATSAPP_LINK = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
  COMPANY.whatsappMessage
)}`;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
};