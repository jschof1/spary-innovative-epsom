export interface Area {
  slug: string;
  name: string;
  description: string;
  emergencyTime: string;
  postcodes: string[];
  metaTitle?: string;
  metaDescription?: string;
  localContext?: string;
  landmarks?: string[];
  neighborhoods?: string[];
}

export const areas: Area[] = [
  {
    slug: "rugby",
    name: "Rugby",
    description: "Your local Rugby electrician. Based nearby, I provide rapid response for all electrical installations and emergencies across the Rugby area.",
    emergencyTime: "30 minutes",
    postcodes: ["CV21", "CV22", "CV23"],
    landmarks: ["Rugby School", "Rugby Art Gallery", "Caldecott Park", "Elliott's Field"],
    neighborhoods: ["Dunchurch", "Hillmorton", "Bilton", "Cawston"]
  },
  {
    slug: "southam",
    name: "Southam",
    description: "Professional electrical services in Southam. From EV chargers to full rewires, I'm your trusted local electrician for all residential work.",
    emergencyTime: "25 minutes",
    postcodes: ["CV47"],
    landmarks: ["St James Church", "Southam Library", "Grange Hall"],
    neighborhoods: ["Long Itchington", "Harbury", "Napton", "Ladbroke"]
  },
  {
    slug: "leamington-spa",
    name: "Leamington Spa",
    description: "Expert electrical solutions for Leamington Spa residents. I offer safe, reliable, and certified electrical work for homes and businesses.",
    emergencyTime: "35 minutes",
    postcodes: ["CV31", "CV32"],
    landmarks: ["Royal Pump Rooms", "Jephson Gardens", "Victoria Park"],
    neighborhoods: ["Whitnash", "Lillington", "Cubbington", "Radford Semele"]
  },
  {
    slug: "warwick",
    name: "Warwick",
    description: "Dedicated local electrician in Warwick. Providing top-tier electrical maintenance, safety checks, and modern installations.",
    emergencyTime: "30 minutes",
    postcodes: ["CV34"],
    landmarks: ["Warwick Castle", "Lord Leycester Hospital", "Market Hall Museum"],
    neighborhoods: ["Barford", "Hampton on the Hill", "Sherbourne", "Hatton"]
  },
  {
    slug: "coventry",
    name: "Coventry",
    description: "Reliable electrical services across Coventry. I handle everything from consumer unit upgrades to security lighting with expert care.",
    emergencyTime: "40 minutes",
    postcodes: ["CV1", "CV2", "CV3", "CV4", "CV5", "CV6"],
    landmarks: ["Coventry Cathedral", "Transport Museum", "War Memorial Park"],
    neighborhoods: ["Kenilworth", "Bedworth", "Allesley", "Stivichall"]
  }
];

export const getAreaBySlug = (slug: string): Area | undefined => {
  return areas.find(area => area.slug === slug);
};
