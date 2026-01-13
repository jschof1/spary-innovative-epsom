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
    slug: "greenwich",
    name: "Greenwich",
    description: "Greenwich's local plumbing experts. From historic homes to modern apartments, we provide top-tier plumbing services throughout the Royal Borough.",
    emergencyTime: "30 minutes",
    postcodes: ["SE10"],
    landmarks: ["Greenwich Park", "Royal Observatory", "Cutty Sark", "Greenwich Market"],
    neighborhoods: ["Blackheath", "Deptford", "Charlton"]
  },
  {
    slug: "croydon",
    name: "Croydon",
    description: "Reliable plumbing and heating services across Croydon. We have local engineers ready to help with any emergency or planned maintenance.",
    emergencyTime: "35 minutes",
    postcodes: ["CR0", "CR2"],
    landmarks: ["Croydon High Street", "East Croydon Station", "Fairfield Halls"],
    neighborhoods: ["Purley", "Thornton Heath", "Addiscombe"]
  },
  {
    slug: "brixton",
    name: "Brixton",
    description: "Fast-response plumbers serving the heart of Brixton. We handle everything from leaky taps to full boiler installations in the Lambeth area.",
    emergencyTime: "25 minutes",
    postcodes: ["SW2", "SW9"],
    landmarks: ["Brixton Market", "Brixton Academy", "Brockwell Park"],
    neighborhoods: ["Clapham", "Stockwell", "Herne Hill"]
  },
  {
    slug: "bromley",
    name: "Bromley",
    description: "Expert plumbing solutions for Bromley residents. Our Gas Safe registered engineers are available for all your heating and plumbing needs.",
    emergencyTime: "40 minutes",
    postcodes: ["BR1", "BR2"],
    landmarks: ["Bromley High Street", "Bromley South Station", "Churchill Theatre"],
    neighborhoods: ["Beckenham", "Orpington", "Hayes"]
  },
  {
    slug: "lewisham",
    name: "Lewisham",
    description: "Dedicated local plumbers in Lewisham. We offer 24/7 emergency support and high-quality installations for kitchens and bathrooms.",
    emergencyTime: "30 minutes",
    postcodes: ["SE13"],
    landmarks: ["Lewisham Shopping Centre", "Lewisham Station", "Lewisham Park"],
    neighborhoods: ["Catford", "Hither Green", "Ladywell"]
  }
];

export const getAreaBySlug = (slug: string): Area | undefined => {
  return areas.find(area => area.slug === slug);
};
