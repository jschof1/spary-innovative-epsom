import { Paintbrush, Home, Building2, DoorOpen, Grid, Warehouse, ChefHat, Layers, ShieldCheck, Award, Heart, Clock, Zap, type LucideIcon } from "lucide-react"

// Import local assets
import kitchenResprayImg from "../assets/photos/generated/kitchen-respray-hero.webp"
import windowSprayingImg from "../assets/photos/generated/window-spraying-hero.webp"
import doorSprayingImg from "../assets/photos/generated/door-spraying-service.webp"
import garageDoorImg from "../assets/photos/generated/garage-door-spraying.webp"
import conservatoryImg from "../assets/photos/generated/conservatory-spraying.webp"
import fasciasImg from "../assets/photos/generated/fascias-soffits-spraying.webp"
import graniteImg from "../assets/photos/generated/granite-effect-spraying.webp"
import commercialImg from "../assets/photos/generated/commercial-shopfront-spraying.webp"

export interface Service {
  id: string
  slug: string
  title: string
  shortTitle: string
  icon: LucideIcon
  image: string
  description: string
  longDescription: string
  features: string[]
  benefits: { title: string; description: string; icon: LucideIcon }[]
  processSteps: { title: string; description: string }[]
  faqs: { question: string; answer: string; category?: string }[]
  detailedContent?: string
}

export const services: Service[] = [
  {
    id: "kitchen-resprays",
    slug: "kitchen-resprays",
    title: "Complete Kitchen Resprays",
    shortTitle: "Kitchen Resprays",
    icon: ChefHat,
    image: kitchenResprayImg,
    description: "Transform your kitchen for a fraction of the cost of replacement.",
    longDescription: "Give your kitchen a brand-new look without the stress or expense of a full renovation. Our professional kitchen respraying service uses high-durability, eco-friendly coatings to transform your existing cabinets, drawers, and panels. We provide a factory-standard finish that is both beautiful and incredibly hard-wearing, available in any color of your choice.",
    detailedContent: "Your kitchen is the heart of your home, but over time, cabinets can become dated or worn. Our respraying process involves deep cleaning, professional masking, and the application of specialist water-based coatings. This isn't just a coat of paint; it's a multi-stage industrial finish that bonds to your existing surfaces, providing a durable, wipe-clean surface that looks and feels like new. Most kitchens are completed in just a few days with minimal disruption.",
    features: [
      "Factory-Standard Durable Finish",
      "Any Color Matching (Farrow & Ball, etc.)",
      "Eco-Friendly Water-Based Coatings",
      "Minimal Disruption to Your Home",
      "Wipe-Clean, Hard-Wearing Surface",
      "Significant Cost Savings vs Replacement"
    ],
    benefits: [
      {
        title: "Cost Effective",
        description: "Save up to 80% compared to the cost of a new kitchen installation.",
        icon: Zap
      },
      {
        title: "Eco-Friendly",
        description: "Reduce waste by repurposing your existing high-quality cabinets.",
        icon: Heart
      },
      {
        title: "Fast Turnaround",
        description: "Most kitchen transformations are completed within 3-5 days.",
        icon: Clock
      }
    ],
    processSteps: [
      {
        title: "Consultation",
        description: "We assess your kitchen and help you choose the perfect color and finish."
      },
      {
        title: "Preparation",
        description: "Deep cleaning and degreasing of all surfaces to ensure perfect adhesion."
      },
      {
        title: "Professional Spray",
        description: "Multi-coat application of specialist coatings for a factory finish."
      },
      {
        title: "Final Inspection",
        description: "Quality check and re-fitting of all doors and hardware."
      }
    ],
    faqs: [
      {
        category: "Kitchen Resprays",
        question: "How long does a kitchen respray last?",
        answer: "With proper care, our kitchen resprays are designed to last 10+ years. We use industrial-grade coatings that are specifically formulated for high-traffic areas."
      },
      {
        category: "Kitchen Resprays",
        question: "Can you match any color?",
        answer: "Yes! We can match colors from all major brands including Farrow & Ball, Little Greene, Dulux, and RAL colors."
      }
    ]
  },
  {
    id: "upvc-window-spraying",
    slug: "upvc-window-spraying",
    title: "UPVC Window Spraying",
    shortTitle: "Window Spraying",
    icon: Grid,
    image: windowSprayingImg,
    description: "Modernize your home's exterior with professional UPVC window coatings.",
    longDescription: "Tired of white UPVC? Our window spraying service allows you to completely change the look of your home's exterior. We apply specialist coatings that bond directly to the UPVC, providing a durable, UV-resistant finish that won't peel or flake. It's a cost-effective way to achieve the modern 'Anthracite Grey' or 'Black' look without the high cost of new windows.",
    detailedContent: "Replacing windows is expensive and messy. Our on-site spraying service is clean, fast, and provides a stunning transformation. We use advanced masking techniques to protect your glass and brickwork, ensuring a crisp, professional finish. Our coatings are specifically designed for the expansion and contraction of UPVC, ensuring longevity in all weather conditions.",
    features: [
      "UV-Resistant Specialist Coatings",
      "Anthracite Grey & Modern Color Specialist",
      "10-Year Adhesion Guarantee",
      "No Messy Construction Work",
      "Weatherproof & Durable Finish",
      "Increases Property Curb Appeal"
    ],
    benefits: [
      {
        title: "Curb Appeal",
        description: "Instantly modernize your home with a fresh, contemporary look.",
        icon: Home
      },
      {
        title: "Durability",
        description: "Our coatings are designed to withstand the harshest UK weather.",
        icon: ShieldCheck
      },
      {
        title: "Value",
        description: "Increase your property value with a professional exterior refresh.",
        icon: Award
      }
    ],
    processSteps: [
      {
        title: "Surface Prep",
        description: "Thorough cleaning and light abrasion to ensure a perfect bond."
      },
      {
        title: "Precision Masking",
        description: "Careful masking of glass, brickwork, and handles for a clean finish."
      },
      {
        title: "Spray Application",
        description: "Application of specialized UPVC coatings in your chosen color."
      },
      {
        title: "De-Masking",
        description: "Removal of all masking and final quality inspection."
      }
    ],
    faqs: [
      {
        category: "Window Spraying",
        question: "Will the paint peel off my UPVC?",
        answer: "No. We use specialist coatings that chemically bond to the UPVC surface, ensuring they won't peel, flake, or crack over time."
      },
      {
        category: "Window Spraying",
        question: "How long does it take?",
        answer: "A standard house can usually be completed in 1-2 days, depending on the number of windows."
      }
    ]
  },
  {
    id: "upvc-door-spraying",
    slug: "upvc-door-spraying",
    title: "UPVC Door Spraying",
    shortTitle: "Door Spraying",
    icon: DoorOpen,
    image: doorSprayingImg,
    description: "Transform your front door with a durable, high-quality spray finish.",
    longDescription: "Your front door is the first thing people see. Our door spraying service provides a stunning, durable transformation for UPVC and composite doors. Whether you want a bold new color or a classic finish, we provide a factory-standard result that is far superior to hand-painting.",
    detailedContent: "We spray both the door and the frame to ensure a perfectly consistent finish. Our process includes removing or masking all hardware, deep cleaning the surface, and applying multiple coats of specialist paint. The result is a smooth, professional finish that is resistant to scratches and fading.",
    features: [
      "Composite & UPVC Specialist",
      "Smooth, Factory-Standard Finish",
      "Scratch & Fade Resistant",
      "Full Frame Spraying Included",
      "Wide Range of Colors & Sheens",
      "Fast, Same-Day Transformation"
    ],
    benefits: [
      {
        title: "First Impressions",
        description: "Create a welcoming entrance with a beautiful new door color.",
        icon: Heart
      },
      {
        title: "Quick Process",
        description: "Most doors are completed and dry within a few hours.",
        icon: Clock
      },
      {
        title: "Protection",
        description: "Our coatings provide an extra layer of protection against the elements.",
        icon: ShieldCheck
      }
    ],
    processSteps: [
      {
        title: "Cleaning",
        description: "Removal of dirt, grease, and contaminants from the door and frame."
      },
      {
        title: "Masking",
        description: "Protecting the glass, hardware, and surrounding area."
      },
      {
        title: "Spraying",
        description: "Precision application of multiple coats for a flawless finish."
      },
      {
        title: "Finishing",
        description: "Careful removal of masking and final quality check."
      }
    ],
    faqs: [
      {
        category: "Door Spraying",
        question: "Can you spray composite doors?",
        answer: "Yes, we can spray both UPVC and composite doors with excellent results."
      }
    ]
  },
  {
    id: "garage-door-spraying",
    slug: "garage-door-spraying",
    title: "Garage Door Spraying",
    shortTitle: "Garage Doors",
    icon: Warehouse,
    image: garageDoorImg,
    description: "Professional spraying for metal and UPVC garage doors.",
    longDescription: "Refresh your garage door to match your windows and front door. We provide professional spraying for all types of garage doors, including roller, up-and-over, and sectional doors. Our durable coatings provide a long-lasting finish that can withstand daily use.",
    detailedContent: "Garage doors often take up a large portion of your home's exterior. A fresh coat of professional spray paint can make a massive difference to your home's overall appearance. We use specialist metal and UPVC paints that are designed to be flexible and durable, ensuring they don't crack as the door operates.",
    features: [
      "Metal & UPVC Door Specialist",
      "Flexible, Non-Cracking Coatings",
      "Rust Protection for Metal Doors",
      "Color Matching to Windows/Doors",
      "Durable, Industrial Finish",
      "Fast On-Site Application"
    ],
    benefits: [
      {
        title: "Cohesive Look",
        description: "Match your garage door perfectly to your windows and front door.",
        icon: Home
      },
      {
        title: "Longevity",
        description: "Protect your garage door from rust and weather damage.",
        icon: ShieldCheck
      },
      {
        title: "Cost Saving",
        description: "A fraction of the cost of a new garage door installation.",
        icon: Zap
      }
    ],
    processSteps: [
      {
        title: "Prep",
        description: "Cleaning and sanding to ensure a smooth, clean surface."
      },
      {
        title: "Masking",
        description: "Protecting the driveway and surrounding brickwork."
      },
      {
        title: "Spraying",
        description: "Professional application of flexible, durable coatings."
      }
    ],
    faqs: [
      {
        category: "Garage Doors",
        question: "Can you spray metal garage doors?",
        answer: "Yes, we use specialist metal primers and topcoats that provide excellent adhesion and rust protection."
      }
    ]
  },
  {
    id: "conservatory-spraying",
    slug: "conservatory-spraying",
    title: "Conservatory Spraying",
    shortTitle: "Conservatories",
    icon: Building2,
    image: conservatoryImg,
    description: "Give your conservatory a modern makeover with professional spraying.",
    longDescription: "Is your white UPVC conservatory looking dated or discolored? Our conservatory spraying service can completely transform it, making it look like a modern aluminum installation. We spray all external and internal UPVC sections for a complete, high-quality finish.",
    detailedContent: "A conservatory is a significant feature of any home. Our spraying service allows you to update its appearance to match modern trends. We use specialist heat-reflective coatings that are ideal for conservatories, providing a beautiful finish that stays looking great for years.",
    features: [
      "Full Internal & External Spraying",
      "Heat-Reflective Coating Options",
      "Modernize Dated UPVC Structures",
      "Durable, UV-Stable Finish",
      "Precision Masking of All Glass",
      "Significant Property Transformation"
    ],
    benefits: [
      {
        title: "Modernization",
        description: "Turn an old-fashioned conservatory into a modern living space.",
        icon: Home
      },
      {
        title: "Durability",
        description: "Our coatings are designed to handle the high UV exposure of conservatories.",
        icon: ShieldCheck
      },
      {
        title: "Cost Effective",
        description: "Avoid the massive cost of replacing a whole conservatory.",
        icon: Zap
      }
    ],
    processSteps: [
      {
        title: "Cleaning",
        description: "Deep cleaning of all UPVC sections to remove dirt and algae."
      },
      {
        title: "Masking",
        description: "Extensive masking of all glass panels and surrounding areas."
      },
      {
        title: "Spraying",
        description: "Multi-stage application of specialist UPVC coatings."
      }
    ],
    faqs: [
      {
        category: "Conservatories",
        question: "Do you spray the inside of the conservatory too?",
        answer: "Yes, we can spray both the internal and external UPVC for a complete transformation."
      }
    ]
  },
  {
    id: "fascias-soffits-spraying",
    slug: "fascias-soffits-spraying",
    title: "Fascias & Soffits Spraying",
    shortTitle: "Fascias & Soffits",
    icon: Layers,
    image: fasciasImg,
    description: "Complete your home's transformation with professional roofline spraying.",
    longDescription: "Don't forget the roofline! We provide professional spraying for fascias, soffits, and guttering. Matching these to your new window color provides a truly professional and cohesive look for your home's exterior.",
    detailedContent: "Often overlooked, the roofline is a key part of your home's aesthetic. We use high-adhesion coatings that are designed for the challenging environment of the roofline, providing a durable, low-maintenance finish that looks fantastic.",
    features: [
      "Fascia, Soffit & Gutter Specialist",
      "High-Adhesion Exterior Coatings",
      "Color Matching to Windows/Doors",
      "Durable, Low-Maintenance Finish",
      "Safe Access Equipment Used",
      "Complete Roofline Refresh"
    ],
    benefits: [
      {
        title: "Cohesion",
        description: "Ensure every part of your home's exterior matches perfectly.",
        icon: Home
      },
      {
        title: "Protection",
        description: "Our coatings provide a protective barrier against the elements.",
        icon: ShieldCheck
      },
      {
        title: "Low Maintenance",
        description: "A professional spray finish is much easier to keep clean than old UPVC.",
        icon: Clock
      }
    ],
    processSteps: [
      {
        title: "Cleaning",
        description: "Removal of dirt, moss, and debris from the roofline."
      },
      {
        title: "Masking",
        description: "Protecting the roof tiles and brickwork."
      },
      {
        title: "Spraying",
        description: "Application of durable, weather-resistant coatings."
      }
    ],
    faqs: [
      {
        category: "Roofline",
        question: "Do you spray gutters as well?",
        answer: "Yes, we can spray the external surfaces of your gutters to match your fascias and soffits."
      }
    ]
  },
  {
    id: "granite-spraying",
    slug: "granite-spraying",
    title: "Granite Spraying",
    shortTitle: "Granite Spraying",
    icon: Paintbrush,
    image: graniteImg,
    description: "Unique granite-effect coatings for a premium stone finish.",
    longDescription: "Achieve the look of real granite on almost any surface. Our specialist granite-effect spraying is perfect for worktops, architectural features, and commercial spaces. It provides a stunning, multi-tonal stone finish that is both durable and beautiful.",
    detailedContent: "Our granite spraying process uses specialist multi-colored coatings to replicate the natural look of stone. It's a fantastic way to upgrade worktops or create a premium feature in your home or business. The finish is hard-wearing and provides a unique, high-end aesthetic.",
    features: [
      "Realistic Granite-Effect Finish",
      "Multi-Tonal Stone Aesthetic",
      "Durable & Hard-Wearing",
      "Suitable for Various Surfaces",
      "Unique, Premium Look",
      "Professional Application"
    ],
    benefits: [
      {
        title: "Premium Look",
        description: "Achieve a high-end stone aesthetic for a fraction of the price.",
        icon: Award
      },
      {
        title: "Versatility",
        description: "Can be applied to a wide range of surfaces and objects.",
        icon: Layers
      },
      {
        title: "Durability",
        description: "Our granite coatings are designed to be tough and long-lasting.",
        icon: ShieldCheck
      }
    ],
    processSteps: [
      {
        title: "Prep",
        description: "Thorough surface preparation and priming."
      },
      {
        title: "Base Coat",
        description: "Application of the primary color base coat."
      },
      {
        title: "Granite Spray",
        description: "Specialist application of the multi-tonal granite effect."
      },
      {
        title: "Clear Coat",
        description: "Application of a durable clear protective layer."
      }
    ],
    faqs: [
      {
        category: "Granite Spraying",
        question: "What surfaces can be granite sprayed?",
        answer: "We can apply granite-effect coatings to wood, metal, plastic, and even existing stone or laminate surfaces."
      }
    ]
  },
  {
    id: "commercial-spraying",
    slug: "commercial-spraying",
    title: "Commercial Spray Finishing",
    shortTitle: "Commercial",
    icon: Building2,
    image: commercialImg,
    description: "Professional spray painting for commercial properties and shopfronts.",
    longDescription: "We provide high-quality spray finishing for commercial clients, including shopfronts, office interiors, and industrial units. Our 7-day availability ensures we can work around your business hours to minimize downtime.",
    detailedContent: "Commercial properties require durable, professional finishes that can withstand high traffic. We use industrial-grade coatings that provide excellent longevity and a premium appearance. Whether you're refreshing a retail space or updating an office, our professional spraying service delivers results that impress.",
    features: [
      "Shopfront & Retail Specialist",
      "Industrial-Grade Durable Coatings",
      "7-Day Availability for Minimal Downtime",
      "Interior & Exterior Commercial Work",
      "Professional, Reliable Service",
      "Large-Scale Project Capacity"
    ],
    benefits: [
      {
        title: "Minimal Downtime",
        description: "We work flexibly, including weekends, to keep your business running.",
        icon: Clock
      },
      {
        title: "Professional Image",
        description: "Enhance your brand with a fresh, professional property finish.",
        icon: Award
      },
      {
        title: "Cost Efficiency",
        description: "Refresh your commercial space without expensive replacements.",
        icon: Zap
      }
    ],
    processSteps: [
      {
        title: "Site Survey",
        description: "Assessment of the commercial property and project requirements."
      },
      {
        title: "Planning",
        description: "Scheduling work to ensure minimal disruption to your operations."
      },
      {
        title: "Execution",
        description: "Professional spray application using industrial-grade coatings."
      }
    ],
    faqs: [
      {
        category: "Commercial",
        question: "Can you work outside of business hours?",
        answer: "Yes, we offer 7-day service and can schedule work for evenings or weekends to avoid disrupting your business."
      }
    ]
  }
]

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug)
