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
    slug: "epsom",
    name: "Epsom",
    description: "Your local Epsom spray painting specialist. Based on Ewell By-Pass, we provide expert kitchen, window, and door respraying across the Epsom area.",
    emergencyTime: "Same Day",
    postcodes: ["KT17", "KT18", "KT19"],
    landmarks: ["Epsom Downs", "Ewell By-Pass", "Ashley Centre", "Rosebery Park"],
    neighborhoods: ["Epsom Downs", "Ewell By-Pass", "Ashley Centre", "Rosebery Park"]
  },
  {
    slug: "ewell",
    name: "Ewell",
    description: "Professional spraying services in Ewell. From kitchen resprays to UPVC transformations, we're your trusted local specialist for all property refreshes.",
    emergencyTime: "Same Day",
    postcodes: ["KT17", "KT19"],
    landmarks: ["Bourne Hall", "Ewell Village", "Hogsmill River"],
    neighborhoods: ["Bourne Hall", "Ewell Village", "Hogsmill River"]
  },
  {
    slug: "banstead",
    name: "Banstead",
    description: "Expert spraying solutions for Banstead residents. We offer a durable, high-quality alternative to replacement for your home's exterior and interior.",
    emergencyTime: "Same Day",
    postcodes: ["SM7"],
    landmarks: ["Banstead High Street", "All Saints Church", "Nork Park"],
    neighborhoods: ["Banstead High Street", "All Saints Church", "Nork Park"]
  },
  {
    slug: "leatherhead",
    name: "Leatherhead",
    description: "Dedicated local spray specialist in Leatherhead. Providing top-tier kitchen resprays, window coatings, and modern property transformations.",
    emergencyTime: "Same Day",
    postcodes: ["KT22"],
    landmarks: ["Swan Centre", "River Mole", "Leatherhead Theatre"],
    neighborhoods: ["Swan Centre", "River Mole", "Leatherhead Theatre"]
  },
  {
    slug: "sutton",
    name: "Sutton",
    description: "Reliable spraying services across Sutton. We handle everything from commercial shopfronts to residential UPVC spraying with expert care.",
    emergencyTime: "Same Day",
    postcodes: ["SM1", "SM2", "SM3"],
    landmarks: ["Sutton High Street", "Manor Park", "St Nicholas Church"],
    neighborhoods: ["Sutton High Street", "Manor Park", "St Nicholas Church"]
  }
];

export const getAreaBySlug = (slug: string): Area | undefined => {
  return areas.find(area => area.slug === slug);
};
