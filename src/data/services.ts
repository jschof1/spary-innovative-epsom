import { Zap, Battery, Home, Lightbulb, Shield, Settings, type LucideIcon } from "lucide-react"

// For now using Unsplash placeholders for electrical services
const evImg = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
const rewireImg = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
const cuImg = "https://images.unsplash.com/photo-1558211583-d28f6109314a?auto=format&fit=crop&q=80"
const maintenanceImg = "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80"
const lightingImg = "https://images.unsplash.com/photo-1565814329452-e1efa71c57da?auto=format&fit=crop&q=80"

export interface Service {
  id: string
  slug: string
  title: string
  shortTitle: string
  icon: LucideIcon
  image: string
  description: string
  longDescription: string
  faqs: { question: string; answer: string; category?: string }[]
}

export const services: Service[] = [
  {
    id: "ev-charging",
    slug: "ev-charger-installation",
    title: "EV Charger Installation",
    shortTitle: "EV Charging",
    icon: Battery,
    image: evImg,
    description: "Professional home and business EV charging point installations.",
    longDescription: "Switching to an electric vehicle? I provide expert installation of home EV charging points, ensuring your vehicle is charged safely and efficiently. I handle everything from the initial site survey to the final testing and certification.",
    faqs: [
      {
        category: "EV Charging",
        question: "How long does it take to install an EV charger?",
        answer: "A standard installation usually takes between 3 to 4 hours. However, this can vary depending on the distance between your consumer unit and the charging point."
      },
      {
        category: "EV Charging",
        question: "Do I need to upgrade my fuse box for an EV charger?",
        answer: "In some cases, yes. I will assess your current consumer unit during the site survey to ensure it can safely handle the additional load of an EV charger."
      }
    ]
  },
  {
    id: "rewires",
    slug: "rewires",
    title: "Full & Partial Rewires",
    shortTitle: "Rewiring",
    icon: Zap,
    image: rewireImg,
    description: "Complete electrical system upgrades for older properties.",
    longDescription: "Older properties often have outdated wiring that can be a safety hazard. I provide full and partial rewiring services to bring your electrical system up to modern safety standards (BS 7671), increasing safety and capacity.",
    faqs: [
      {
        category: "Rewiring",
        question: "When should I consider a full rewire?",
        answer: "If your property is over 25 years old and hasn't been rewired, or if you're experiencing frequent circuit trips, it's worth getting an inspection. Old wiring can become brittle and pose a fire risk."
      }
    ]
  },
  {
    id: "consumer-unit",
    slug: "consumer-unit-upgrades",
    title: "Consumer Unit Upgrades",
    shortTitle: "Fuse Box Upgrades",
    icon: Shield,
    image: cuImg,
    description: "Upgrading old fuse boxes to modern RCD-protected consumer units.",
    longDescription: "Your consumer unit (fuse box) is the heart of your home's electrical system. Upgrading to a modern unit with RCD and SPD protection significantly improves safety and provides better protection against electrical faults and surges.",
    faqs: [
      {
        category: "Fuse Box",
        question: "Why should I upgrade my fuse box?",
        answer: "Modern consumer units provide much better protection against electric shocks and fires. They also include surge protection devices (SPDs) to protect your electronic equipment."
      }
    ]
  },
  {
    id: "maintenance",
    slug: "electrical-maintenance",
    title: "Electrical Maintenance",
    shortTitle: "Maintenance",
    icon: Settings,
    image: maintenanceImg,
    description: "General repairs, socket replacements, and routine safety checks.",
    longDescription: "From replacing broken sockets and switches to regular maintenance of commercial electrical systems, I provide a full range of electrical maintenance services to keep your property running smoothly and safely.",
    faqs: [
      {
        category: "Maintenance",
        question: "How often should I have my electrics checked?",
        answer: "For domestic properties, it's recommended to have an EICR (Electrical Installation Condition Report) every 10 years, or when you move house."
      }
    ]
  },
  {
    id: "lighting",
    slug: "outside-lighting",
    title: "Outdoor & Security Lighting",
    shortTitle: "Outside Lighting",
    icon: Lightbulb,
    image: lightingImg,
    description: "Decorative and security lighting for gardens and driveways.",
    longDescription: "Enhance your home's security and curb appeal with professional outdoor lighting. I install everything from motion-sensor security lights to decorative garden lighting and driveway illumination.",
    faqs: [
      {
        category: "Lighting",
        question: "Are LED lights better for outdoor use?",
        answer: "Yes, LEDs are more energy-efficient, longer-lasting, and perform better in cold temperatures compared to traditional bulbs."
      }
    ]
  }
]

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug)
