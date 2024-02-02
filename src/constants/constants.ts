import { generateSlug } from "@/utils/generateSlug";

export const navbarLinks = [
  { id: crypto.randomUUID(), link: "/home", children: "Home" },
  { id: crypto.randomUUID(), link: "/about", children: "About" },
  { id: crypto.randomUUID(), link: "/services", children: "Services" },
  { id: crypto.randomUUID(), link: "/contact", children: "Contact" },
];

export const cleaningServices = [
  {
    id: crypto.randomUUID(),
    image: "/images/carpet-cleaning.jpeg",
    service: "commercial carpet cleaning",
    description:
      "We utilize advanced extraction and adaptive low-moisture techniques for tailored carper care. Our approach cleanses and prolongs carpet life, maintaining a fresh, professional appearance.",
    shortDescription: "Tailored carpet care with advanced extraction methods.",
    cta: "learn more",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/floor-renewal.jpeg",
    service: "floor renewal and restoration",
    description:
      "Using advanced techniques, we strip floors of old finishes, revealing their original beauty, then meticulously refinish for a renewed shine and extended protection, maintaining a consistently polished ambiance.",
    shortDescription:
      "Restoration and renewal of floors with advanced techniques.",
    cta: "learn more",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/pressure-washing.jpeg",
    service: "pressure washing",
    description:
      "Through high-pressure washing techniques, we deeply cleanse and refresh tile, grout, and various surfaces effectively reviving their inherent beauty for consistently pristine results. grout, and various surfaces effectively reviving their inherent beauty for consistently pristine results",
    shortDescription: "High-pressure washing for deep cleansing of surfaces.",
    cta: "learn more",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/electrostatic-disinfection.jpeg",
    service: "electrostatic disinfection",
    description:
      "Using electrostatic sprayers, we achieve thorough disinfection by releasing charged droplets that adhere to surfaces. This method, paired with EPA-approved disinfectants, ensures a safe and sanitized environment.",
    shortDescription:
      "High-tech disinfection method for comprehensive surface coverage.",
    cta: "learn more",
  },
  {
    id: crypto.randomUUID(),
    service: "day porter",
    image: "/images/day-porter.jpeg",
    description:
      "Our attentive porters diligently maintain cleanliness, swiftly addressing unexpected spills and ensuring an always inviting, professional environment throughout bustling peak hours.",
    shortDescription:
      "Dedicated on-site cleaning and maintenance for continuous upkeep.",
    cta: "learn more",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/office-clean.jpeg",
    service: "office cleaning janitorial services",
    description:
      "Experience unmatched cleanliness with our office cleaning and janitorial services. Our expert team ensures every workspace is spotless and hygienic, using eco-friendly products for daily upkeep.",
    shortDescription:
      "Professional cleaning services for a pristine and hygienic office environment.",
    cta: "learn more",
  },
].map((service) => ({
  ...service,
  slug: generateSlug(service.service),
}));
