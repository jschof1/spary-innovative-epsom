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
    id: "rugby",
    slug: "rugby",
    name: "Rugby",
    postcodes: ["CV21", "CV22", "CV23"],
    description: "Your local Rugby electrician. Based nearby, I provide rapid response for all electrical installations and emergencies across the Rugby area.",
    nearbyAreas: ["Dunchurch", "Hillmorton", "Bilton"]
  },
  {
    id: "southam",
    slug: "southam",
    name: "Southam",
    postcodes: ["CV47"],
    description: "Professional electrical services in Southam. From EV chargers to full rewires, I'm your trusted local electrician for all residential work.",
    nearbyAreas: ["Long Itchington", "Harbury", "Napton"]
  },
  {
    id: "leamington-spa",
    slug: "leamington-spa",
    name: "Leamington Spa",
    postcodes: ["CV31", "CV32"],
    description: "Expert electrical solutions for Leamington Spa residents. I offer safe, reliable, and certified electrical work for homes and businesses.",
    nearbyAreas: ["Whitnash", "Lillington", "Cubbington"]
  },
  {
    id: "warwick",
    slug: "warwick",
    name: "Warwick",
    postcodes: ["CV34"],
    description: "Dedicated local electrician in Warwick. Providing top-tier electrical maintenance, safety checks, and modern installations.",
    nearbyAreas: ["Barford", "Hampton on the Hill", "Sherbourne"]
  },
  {
    id: "coventry",
    slug: "coventry",
    name: "Coventry",
    postcodes: ["CV1", "CV2", "CV3", "CV4", "CV5", "CV6"],
    description: "Reliable electrical services across Coventry. I handle everything from consumer unit upgrades to security lighting with expert care.",
    nearbyAreas: ["Kenilworth", "Bedworth", "Allesley"]
  }
]

export const getLocationBySlug = (slug: string) => locations.find(l => l.slug === slug)
