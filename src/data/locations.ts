export interface Location {
  id: string
  slug: string
  name: string
  postcodes: string[]
  description: string
  nearbyAreas: string[]
}

export const locations: Location[] = [
  {
    id: "greenwich",
    slug: "greenwich",
    name: "Greenwich",
    postcodes: ["SE10"],
    description: "Greenwich's local plumbing experts. From historic homes to modern apartments, we provide top-tier plumbing services throughout the Royal Borough.",
    nearbyAreas: ["Blackheath", "Deptford", "Charlton"]
  },
  {
    id: "croydon",
    slug: "croydon",
    name: "Croydon",
    postcodes: ["CR0", "CR2"],
    description: "Reliable plumbing and heating services across Croydon. We have local engineers ready to help with any emergency or planned maintenance.",
    nearbyAreas: ["Purley", "Thornton Heath", "Addiscombe"]
  },
  {
    id: "brixton",
    slug: "brixton",
    name: "Brixton",
    postcodes: ["SW2", "SW9"],
    description: "Fast-response plumbers serving the heart of Brixton. We handle everything from leaky taps to full boiler installations in the Lambeth area.",
    nearbyAreas: ["Clapham", "Stockwell", "Herne Hill"]
  },
  {
    id: "bromley",
    slug: "bromley",
    name: "Bromley",
    postcodes: ["BR1", "BR2"],
    description: "Expert plumbing solutions for Bromley residents. Our Gas Safe registered engineers are available for all your heating and plumbing needs.",
    nearbyAreas: ["Beckenham", "Orpington", "Hayes"]
  },
  {
    id: "lewisham",
    slug: "lewisham",
    name: "Lewisham",
    postcodes: ["SE13"],
    description: "Dedicated local plumbers in Lewisham. We offer 24/7 emergency support and high-quality installations for kitchens and bathrooms.",
    nearbyAreas: ["Catford", "Hither Green", "Ladywell"]
  }
]

export const getLocationBySlug = (slug: string) => locations.find(l => l.slug === slug)

