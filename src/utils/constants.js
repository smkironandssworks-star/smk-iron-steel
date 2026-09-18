export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const COMPANY = {
  name: "SMK Iron & Steel Works",
  shortName: "SMK Iron & Steel",
  tagline: "Iron Cots • SS Fabrication • Shutters",
  businessLine: "Iron Cot Manufacturing & Stainless Steel Fabrication",

  // ---- Contact ----
  phones: [
    { label: "+91 96269 90826", raw: "919626990826" },
    { label: "+91 78456 42284", raw: "917845642284" },
  ],

  phone: "+91 96269 90826",
  phoneRaw: "919626990826",

  whatsappNumber: "917845642284",
  whatsappLabel: "+91 78456 42284",
  whatsappMessage:
    "Hi SMK Iron & Steel Works, I would like to enquire about your products/services.",

  email: "smk.ironandsteelworks@gmail.com",

  // ---- Address ----
  address: "No. 51, First Floor, Ganapathi Chettikulam, Pondicherry - 605014",
  addressShort: "Pondicherry - 605014",
  city: "Pondicherry",
  state: "Puducherry",
  pincode: "605014",

  // ---- Business meta ----
  experience: "10+",
  establishedYear: "2014",

  // ---- Working hours ----
  hours: {
    weekdays: "Mon - Sat: 8:00 AM - 8:00 PM",
    sunday: "Sunday: 8:00 AM - 2:00 PM",
  },

  whatsappNote: "Available 24x7",

  // ---- Service area ----
  serviceArea: "Pondicherry, Tamil Nadu & Andhra Pradesh",

  // ---- Trust stats ----
  stats: {
    yearsExperience: "10+",
    happyClients: "500+",
    projectsDelivered: "1000+",
    support: "24/7",
  },
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

// Google Maps directions link (reusable everywhere)
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY.address
)}`;

// Google Maps embed src for iframes (Contact page)
export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  "Ganapathi Chettikulam, Pondicherry 605014"
)}&output=embed`;