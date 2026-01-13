import { Clock, Flame, Droplets, Zap, Home, Search, type LucideIcon } from "lucide-react"

// Import service images
import emergencyImg from "@/assets/services/service-24-7-emergency-plumbing.webp"
import boilerImg from "@/assets/services/service-boiler-repair---installation.webp"
import drainsImg from "@/assets/services/service-blocked-drains-clearing.webp"
import cylindersImg from "@/assets/services/service-hot-water-cylinder-services.webp"
import tapsToiletsImg from "@/assets/services/service-tap---toilet-repairs.webp"
import leaksImg from "@/assets/services/service-advanced-leak-detection.webp"

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
    id: "emergency",
    slug: "emergency-plumbing",
    title: "24/7 Emergency Plumbing",
    shortTitle: "Emergency Repairs",
    icon: Clock,
    image: emergencyImg,
    description: "Burst pipes, water shut-off, and major leaks. We arrive fast to minimize damage.",
    longDescription: "Plumbing emergencies don't wait for business hours. Our team is available 24/7 across South London to handle burst pipes, severe leaks, and water shut-off emergencies. We aim to be on-site within 60 minutes to minimize damage to your property.",
    faqs: [
      {
        category: "Emergency",
        question: "How fast can you arrive for an emergency?",
        answer: "We typically arrive within 60 minutes for emergencies across South London, including Croydon, Brixton, and Bromley."
      },
      {
        category: "Emergency",
        question: "Do you charge extra for night call-outs?",
        answer: "We have a transparent fixed hourly rate for emergency work which is agreed upon before we dispatch an engineer."
      },
      {
        category: "Emergency",
        question: "What should I do while waiting for an emergency plumber?",
        answer: "The most important step is to turn off your main water stopcock. If the leak is near electrical appliances, turn off your electricity at the consumer unit. Our team will guide you over the phone until we arrive."
      }
    ]
  },
  {
    id: "boiler",
    slug: "boiler-repair",
    title: "Boiler Repair & Installation",
    shortTitle: "Boiler Services",
    icon: Flame,
    image: boilerImg,
    description: "Gas Safe registered diagnostics and replacement. Worcester Bosch & Vaillant experts.",
    longDescription: "Our Gas Safe registered engineers specialize in all types of boiler repairs and installations. Whether you have a breakdown or need a high-efficiency replacement, we work with leading brands like Worcester Bosch and Vaillant to keep your home warm.",
    faqs: [
      {
        category: "Boilers",
        question: "Are your boiler engineers Gas Safe registered?",
        answer: "Yes, every engineer working on a boiler or gas appliance carries a valid Gas Safe ID card. This is a legal requirement for your safety."
      },
      {
        category: "Boilers",
        question: "Which boiler brands do you install and repair?",
        answer: "We are experts in Worcester Bosch, Vaillant, Ideal, and Baxi systems. However, our engineers are trained to diagnose and repair almost any make or model of domestic boiler."
      },
      {
        category: "Boilers",
        question: "How long does a new boiler installation take?",
        answer: "A standard combi-to-combi boiler swap usually takes one day. More complex installations, such as system conversions, may take 2-3 days."
      }
    ]
  },
  {
    id: "drains",
    slug: "blocked-drains",
    title: "Blocked Drains Clearing",
    shortTitle: "Blocked Drains",
    icon: Droplets,
    image: drainsImg,
    description: "High-pressure jetting for internal and external drains. We clear blocks fast.",
    longDescription: "Blocked drains can be more than just a nuisance; they can lead to health hazards and property damage. We use high-pressure water jetting and CCTV surveys to identify and clear blockages in internal and external drainage systems quickly and effectively.",
    faqs: [
      {
        category: "Drains",
        question: "What methods do you use to clear blocked drains?",
        answer: "We primarily use high-pressure water jetting, which is the most effective way to clear stubborn blockages and clean the pipe walls. For internal clogs, we use specialized manual and electric machinery."
      },
      {
        category: "Drains",
        question: "Do you offer CCTV drain surveys?",
        answer: "Yes, we use advanced CCTV equipment to inspect the condition of your drains and identify the exact cause of recurring blockages or structural issues."
      }
    ]
  },
  {
    id: "cylinders",
    slug: "hot-water-cylinders",
    title: "Hot Water Cylinder Services",
    shortTitle: "Hot Water",
    icon: Zap,
    image: cylindersImg,
    description: "Repairing immersion heaters, thermostats, and unvented cylinders.",
    longDescription: "We provide comprehensive services for hot water cylinders, including unvented systems. From immersion heater replacements to thermostat repairs and annual safety checks, we ensure you have reliable hot water when you need it.",
    faqs: [
      {
        category: "Hot Water",
        question: "Are you qualified to work on unvented hot water cylinders?",
        answer: "Yes, our engineers hold the necessary G3 Unvented Hot Water qualification required by law to install and service these high-pressure systems."
      },
      {
        category: "Hot Water",
        question: "Why is my hot water cylinder making a humming noise?",
        answer: "This is often caused by 'scale' buildup on the immersion heater or a faulty thermostat. We can diagnose and replace these components quickly to restore quiet operation."
      }
    ]
  },
  {
    id: "taps-toilets",
    slug: "tap-toilet-repair",
    title: "Tap & Toilet Repairs",
    shortTitle: "Taps & Toilets",
    icon: Home,
    image: tapsToiletsImg,
    description: "Dripping taps, running toilets, ball valve and siphon replacement.",
    longDescription: "Leaking taps and running toilets can waste thousands of liters of water. We fix all common plumbing fixtures, replacing washers, cartridges, siphons, and ball valves to stop leaks and restore full functionality to your bathroom and kitchen.",
    faqs: [
      {
        category: "Repairs",
        question: "Can you fix any type of leaking tap?",
        answer: "We can repair or replace almost all types of taps, including traditional pillar taps, modern mixer taps, and ceramic disk models. If a repair isn't cost-effective, we can install a new tap of your choice."
      },
      {
        category: "Repairs",
        question: "Why does my toilet keep running after flushing?",
        answer: "This is usually due to a faulty flush valve (siphon) or an inlet valve that won't shut off. Both are common repairs that our plumbers can handle in a single visit."
      }
    ]
  },
  {
    id: "leaks",
    slug: "leak-detection",
    title: "Advanced Leak Detection",
    shortTitle: "Leak Detection",
    icon: Search,
    image: leaksImg,
    description: "Tracing hidden leaks behind walls and under floors using thermal imaging.",
    longDescription: "Hidden leaks can cause significant structural damage before they are even noticed. We use non-destructive methods, including thermal imaging and acoustic sensors, to pinpoint the exact location of leaks behind walls and under floors.",
    faqs: [
      {
        category: "Leak Detection",
        question: "Is your leak detection service non-destructive?",
        answer: "Yes, our primary goal is to find the leak without damaging your property. We use thermal imaging, acoustic microphones, and tracer gases to find the leak before any floorboards or tiles are removed."
      },
      {
        category: "Leak Detection",
        question: "Will my insurance cover the cost of leak detection?",
        answer: "Most home insurance policies include 'Trace and Access' cover, which usually covers the cost of finding the leak. We can provide a detailed report for your insurance claim."
      }
    ]
  }
]

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug)

