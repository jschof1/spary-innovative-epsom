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
    id: "epsom",
    slug: "epsom",
    name: "Epsom",
    postcodes: ["KT17", "KT18", "KT19"],
    description: "Professional spray painting services in Epsom. Based locally on Ewell By-Pass, we provide expert kitchen, window, and door respraying across the Epsom area.",
    nearbyAreas: ["Ewell", "Stoneleigh", "Ashtead"]
  },
  {
    id: "ewell",
    slug: "ewell",
    name: "Ewell",
    postcodes: ["KT17", "KT19"],
    description: "Your local Ewell spray painting specialist. We transform homes in Ewell with durable, eco-friendly coatings for UPVC windows, doors, and kitchens.",
    nearbyAreas: ["Epsom", "Stoneleigh", "Chessington"]
  },
  {
    id: "banstead",
    slug: "banstead",
    name: "Banstead",
    postcodes: ["SM7"],
    description: "Expert spraying services for Banstead residents. We offer a cost-effective alternative to replacement for your windows, doors, and kitchen cabinets.",
    nearbyAreas: ["Nork", "Woodmansterne", "Chipstead"]
  },
  {
    id: "leatherhead",
    slug: "leatherhead",
    name: "Leatherhead",
    postcodes: ["KT22"],
    description: "Dedicated spray painting specialist in Leatherhead. Providing top-tier kitchen resprays and UPVC transformations with a factory-standard finish.",
    nearbyAreas: ["Ashtead", "Fetcham", "Bookham"]
  },
  {
    id: "chessington",
    slug: "chessington",
    name: "Chessington",
    postcodes: ["KT9"],
    description: "Reliable spraying services across Chessington. We handle everything from conservatory spraying to garage door refreshes with expert care.",
    nearbyAreas: ["Hook", "Malden Rushett", "Ewell"]
  },
  {
    id: "stoneleigh",
    slug: "stoneleigh",
    name: "Stoneleigh",
    postcodes: ["KT17", "KT19"],
    description: "Professional home transformations in Stoneleigh. Our expert spraying services provide a durable, modern look for your UPVC and kitchen surfaces.",
    nearbyAreas: ["Ewell", "Worcester Park", "Epsom"]
  },
  {
    id: "ashtead",
    slug: "ashtead",
    name: "Ashtead",
    postcodes: ["KT21"],
    description: "Premium spray painting services for Ashtead homes. We specialize in high-quality, eco-friendly coatings that transform your property's appearance.",
    nearbyAreas: ["Epsom", "Leatherhead", "Headley"]
  },
  {
    id: "sutton",
    slug: "sutton",
    name: "Sutton",
    postcodes: ["SM1", "SM2", "SM3"],
    description: "Expert spraying solutions for Sutton residents. We provide a wide range of on-site and off-site spraying services to modernize your home.",
    nearbyAreas: ["Cheam", "Carshalton", "Belmont"]
  }
]

export const getLocationBySlug = (slug: string) => locations.find(l => l.slug === slug)
