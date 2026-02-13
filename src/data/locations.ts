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
    id: "kingston",
    slug: "kingston",
    name: "Kingston upon Thames",
    postcodes: ["KT1", "KT2"],
    description: "Professional spray painting in Kingston upon Thames. We serve homes and businesses across Kingston with expert kitchen resprays, UPVC spraying, and property transformations.",
    nearbyAreas: ["Surbiton", "New Malden", "Richmond"]
  },
  {
    id: "surbiton",
    slug: "surbiton",
    name: "Surbiton",
    postcodes: ["KT5", "KT6"],
    description: "Expert spray painting services in Surbiton. From kitchen resprays to UPVC window and door spraying, we bring factory-quality finishes to your Surbiton home.",
    nearbyAreas: ["Kingston", "Tolworth", "Wimbledon"]
  },
  {
    id: "new-malden",
    slug: "new-malden",
    name: "New Malden",
    postcodes: ["KT3"],
    description: "Your local spray painting specialist in New Malden. We provide durable, eco-friendly coatings for kitchens, UPVC, and garage doors across the area.",
    nearbyAreas: ["Kingston", "Wimbledon", "Raynes Park"]
  },
  {
    id: "wimbledon",
    slug: "wimbledon",
    name: "Wimbledon",
    postcodes: ["SW19", "SW20"],
    description: "Professional spraying services in Wimbledon. We transform homes with expert kitchen resprays, UPVC spraying, and premium coatings throughout Wimbledon and Wimbledon Park.",
    nearbyAreas: ["Raynes Park", "Morden", "Surbiton"]
  },
  {
    id: "richmond",
    slug: "richmond",
    name: "Richmond",
    postcodes: ["TW9", "TW10"],
    description: "Expert spray painting in Richmond upon Thames. We serve Richmond residents with top-tier kitchen resprays, window spraying, and property transformations.",
    nearbyAreas: ["Twickenham", "Kew", "Kingston"]
  },
  {
    id: "hampton",
    slug: "hampton",
    name: "Hampton",
    postcodes: ["TW12"],
    description: "Professional spray painting services in Hampton. From Hampton Court to Hampton Hill, we provide expert coatings for kitchens, UPVC, and garage doors.",
    nearbyAreas: ["Teddington", "Sunbury", "Hampton Court"]
  },
  {
    id: "teddington",
    slug: "teddington",
    name: "Teddington",
    postcodes: ["TW11"],
    description: "Your local spray painting specialist in Teddington. We offer expert kitchen resprays and UPVC transformations with a factory-standard finish.",
    nearbyAreas: ["Hampton", "Twickenham", "Kingston"]
  },
  {
    id: "tolworth",
    slug: "tolworth",
    name: "Tolworth",
    postcodes: ["KT5"],
    description: "Reliable spraying services across Tolworth. We handle everything from conservatory spraying to garage door refreshes with expert care.",
    nearbyAreas: ["Surbiton", "Chessington", "New Malden"]
  },
  {
    id: "raynes-park",
    slug: "raynes-park",
    name: "Raynes Park",
    postcodes: ["SW20"],
    description: "Professional spray painting in Raynes Park. We serve local residents with expert kitchen resprays, UPVC window and door spraying, and property transformations.",
    nearbyAreas: ["Wimbledon", "New Malden", "Morden"]
  },
  {
    id: "worcester-park",
    slug: "worcester-park",
    name: "Worcester Park",
    postcodes: ["KT4"],
    description: "Expert spraying solutions for Worcester Park. We provide durable, high-quality coatings for your kitchen, windows, doors, and exterior surfaces.",
    nearbyAreas: ["Stoneleigh", "Cheam", "Sutton"]
  },
  {
    id: "morden",
    slug: "morden",
    name: "Morden",
    postcodes: ["SM4"],
    description: "Professional spray painting services in Morden. We transform homes with expert kitchen resprays, UPVC spraying, and premium coatings.",
    nearbyAreas: ["Wimbledon", "Mitcham", "Sutton"]
  },
  {
    id: "mitcham",
    slug: "mitcham",
    name: "Mitcham",
    postcodes: ["CR4"],
    description: "Your local spray painting specialist in Mitcham. We provide expert kitchen resprays, UPVC transformations, and garage door spraying across the area.",
    nearbyAreas: ["Morden", "Croydon", "Tooting"]
  },
  {
    id: "croydon",
    slug: "croydon",
    name: "Croydon",
    postcodes: ["CR0", "CR2"],
    description: "Expert spray painting in Croydon. We serve Croydon residents with professional kitchen resprays, UPVC window and door spraying, and commercial coatings.",
    nearbyAreas: ["Purley", "Mitcham", "Sanderstead"]
  },
  {
    id: "purley",
    slug: "purley",
    name: "Purley",
    postcodes: ["CR8"],
    description: "Professional spraying services in Purley. We provide durable, eco-friendly coatings for kitchens, UPVC, and garage doors across Purley and surrounding areas.",
    nearbyAreas: ["Croydon", "Coulsdon", "Kenley"]
  },
  {
    id: "coulsdon",
    slug: "coulsdon",
    name: "Coulsdon",
    postcodes: ["CR5"],
    description: "Expert spray painting in Coulsdon. We transform homes with factory-quality kitchen resprays, UPVC spraying, and premium property coatings.",
    nearbyAreas: ["Purley", "Banstead", "Caterham"]
  },
  {
    id: "cheam",
    slug: "cheam",
    name: "Cheam",
    postcodes: ["SM2", "SM3"],
    description: "Professional spray painting services in Cheam. We offer expert kitchen resprays, UPVC transformations, and garage door spraying for Cheam residents.",
    nearbyAreas: ["Sutton", "Worcester Park", "Belmont"]
  },
  {
    id: "carshalton",
    slug: "carshalton",
    name: "Carshalton",
    postcodes: ["SM5"],
    description: "Your local spray painting specialist in Carshalton. We provide durable coatings for kitchens, windows, doors, and conservatories across the area.",
    nearbyAreas: ["Sutton", "Wallington", "Mitcham"]
  },
  {
    id: "wallington",
    slug: "wallington",
    name: "Wallington",
    postcodes: ["SM6"],
    description: "Expert spraying services in Wallington. We handle everything from kitchen resprays to UPVC window and door spraying with professional care.",
    nearbyAreas: ["Carshalton", "Sutton", "Croydon"]
  },
  {
    id: "esher",
    slug: "esher",
    name: "Esher",
    postcodes: ["KT10"],
    description: "Premium spray painting services in Esher. We specialize in high-quality, eco-friendly coatings for kitchens, UPVC, and luxury property transformations.",
    nearbyAreas: ["Cobham", "Leatherhead", "Walton-on-Thames"]
  },
  {
    id: "walton-on-thames",
    slug: "walton-on-thames",
    name: "Walton-on-Thames",
    postcodes: ["KT12"],
    description: "Professional spray painting in Walton-on-Thames. We serve local residents with expert kitchen resprays, UPVC spraying, and property transformations.",
    nearbyAreas: ["Weybridge", "Esher", "Shepperton"]
  },
  {
    id: "weybridge",
    slug: "weybridge",
    name: "Weybridge",
    postcodes: ["KT13"],
    description: "Expert spray painting services in Weybridge. We provide factory-standard finishes for kitchens, UPVC windows, doors, and garage doors.",
    nearbyAreas: ["Walton-on-Thames", "Cobham", "Addlestone"]
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
