import { Zap, Battery, Home, Lightbulb, Shield, Settings, Smartphone, ShieldCheck, Award, Heart, Clock, ClipboardCheck, Phone, Building2, type LucideIcon } from "lucide-react"

// Import local assets
import evImg from "../assets/photos/ev-charger-installation--sleek-wall-mounted-smart-ev-charger-on-brick-wall--electric-car-plugged-in--cinematic-lighting--professional-photography.webp"
import rewireImg from "../assets/photos/property-rewiring--tidy-electrical-wiring-inside-timber-stud-walls--modern-home-renovation--bright-natural-light--sharp-detail.webp"
import cuImg from "../assets/photos/consumer-unit-upgrade--close-up-of-modern-metal-fuse-box--neat-circuit-breakers--glowing-led-indicators--ultra-clean-installation.webp"
import maintenanceImg from "../assets/photos/electrical-maintenance--close-up-of-electrician-s-hands-using-digital-multimeter-on-white-socket--shallow-depth-of-field--technical-precision.webp"
import lightingImg from "../assets/photos/outside-lighting--residential-garden-at-dusk--warm-led-architectural-uplighting--security-floodlights--luxury-home-exterior.webp"
import smartHomeImg from "../assets/photos/smart-home-setup--close-up-of-hand-using-smartphone-app-to-dim-recessed-kitchen-lights--tech-focused-aesthetic.webp"
// import commercialImg from "../assets/photos/industrial-maintenance--clean-electrical-sub-panel-in-commercial-workshop--heavy-duty-conduit-pipes--industrial-aesthetic--bright-lighting.webp"
import emergencyImg from "../assets/photos/the-service-van--white-transit-van-on-uk-residential-street--brick-homes-in-background--shallow-depth-of-field--professional-fleet-style.webp"

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
    id: "ev-charging",
    slug: "ev-charger-installation",
    title: "EV Charger Installation",
    shortTitle: "EV Charging",
    icon: Battery,
    image: evImg,
    description: "Expert home EV charging point installations across Rugby and the Midlands.",
    longDescription: "Switching to an electric vehicle? I provide expert installation of home EV charging points, ensuring your vehicle is charged safely and efficiently. I handle everything from the initial site survey to the final testing and certification. As an OZEV registered installer, I provide high-quality installations for brands like Zappi, Pod Point, and Tesla Wall Connectors.",
    detailedContent: "Whether you're a new EV owner or looking to upgrade your home charging setup, I provide a seamless end-to-end service. I specialize in smart chargers that can integrate with your solar panels or take advantage of off-peak energy tariffs, potentially saving you hundreds of pounds a year on fuel costs. Every installation includes a comprehensive safety check of your existing consumer unit to ensure it can handle the additional load, providing you with total peace of mind.",
    features: [
      "OZEV Approved Installer Status",
      "Zappi, Pod Point & Tesla Specialist",
      "Solar PV Integration Options",
      "Smart App Control & Scheduling",
      "Dynamic Load Balancing Protection",
      "Full NICEIC Certification & Part P"
    ],
    benefits: [
      {
        title: "Cost Efficiency",
        description: "Save up to 70% on fuel costs compared to petrol or public charging networks.",
        icon: Zap
      },
      {
        title: "Smart Technology",
        description: "Control your charging via smartphone app to use cheap off-peak electricity.",
        icon: Smartphone
      },
      {
        title: "Investment",
        description: "Increase your property value by installing essential modern infrastructure.",
        icon: Home
      }
    ],
    processSteps: [
      {
        title: "Free Consultation",
        description: "Remote or on-site assessment of your electrical supply and charger location."
      },
      {
        title: "Expert Install",
        description: "Professional installation by a qualified electrician, typically within 4 hours."
      },
      {
        title: "System Demo",
        description: "I'll show you how to use the charger and set up your smart charging app."
      },
      {
        title: "Certification",
        description: "Provision of NICEIC certificates and notification to your local DNO."
      }
    ],
    faqs: [
      {
        category: "EV Charging",
        question: "How long does it take to install an EV charger?",
        answer: "A standard installation usually takes between 3 to 4 hours. However, this can vary depending on the distance between your consumer unit and the charging point."
      },
      {
        category: "EV Charging",
        question: "Do I need to upgrade my fuse box for an EV charger?",
        answer: "In some cases, yes. Modern EV chargers require a dedicated circuit with specific safety protections. I will assess your current consumer unit during the site survey."
      },
      {
        category: "EV Charging",
        question: "Can I use my solar panels to charge my car?",
        answer: "Yes! Many of the chargers I install, such as the Zappi, can be configured to use excess solar energy that would otherwise be sent back to the grid."
      }
    ]
  },
  {
    id: "eicr",
    slug: "eicr-safety-inspections",
    title: "EICR & Safety Inspections",
    shortTitle: "EICR / Testing",
    icon: ClipboardCheck,
    image: maintenanceImg,
    description: "Detailed Electrical Installation Condition Reports for landlords and homeowners.",
    longDescription: "An EICR (Electrical Installation Condition Report) is a formal document that is produced following an assessment of the electrical installation within a property. It's essential for landlords to meet legal requirements and for homeowners to ensure their family's safety. I provide thorough, honest testing that identifies any potential hazards before they become dangerous.",
    detailedContent: "Electrical installations deteriorate over time. My EICR service involves a rigorous inspection of every circuit in your property. I check for overloaded circuits, potential electric shock risks, fire hazards, and any lack of earthing or bonding. For landlords in Rugby, Coventry, and Southam, I provide a reliable service that ensures you remain compliant with the 'Electrical Safety Standards in the Private Rented Sector (England) Regulations'.",
    features: [
      "Landlord Compliance Testing",
      "Homebuyer Pre-purchase Surveys",
      "Residential Periodic Inspections",
      "Fault Identification & Reporting",
      "Remedial Quote Included",
      "Digital Reports Sent Within 24 Hours"
    ],
    benefits: [
      {
        title: "Legal Compliance",
        description: "Meet your legal obligations as a landlord and avoid heavy fines.",
        icon: ShieldCheck
      },
      {
        title: "Life Safety",
        description: "Identify hidden dangers like brittle wiring or lack of earthing.",
        icon: Heart
      },
      {
        title: "Insurance Validity",
        description: "Ensure your home insurance remains valid with a recent safety certificate.",
        icon: Award
      }
    ],
    processSteps: [
      {
        title: "Visual Check",
        description: "Initial inspection of the consumer unit, sockets, and light fittings."
      },
      {
        title: "Dead Testing",
        description: "Testing circuits while power is off to check insulation and continuity."
      },
      {
        title: "Live Testing",
        description: "Testing the system under power to ensure safety devices trip correctly."
      },
      {
        title: "Reporting",
        description: "Generating a digital PDF report with a clear Satisfactory or Unsatisfactory result."
      }
    ],
    faqs: [
      {
        category: "EICR",
        question: "How often do I need an EICR?",
        answer: "For rental properties, it's every 5 years or at the change of tenancy. For owner-occupied homes, it's recommended every 10 years."
      },
      {
        category: "EICR",
        question: "What happens if my report is 'Unsatisfactory'?",
        answer: "I will provide a detailed list of 'Observations' and a transparent quote for the remedial work required to make the installation safe."
      },
      {
        category: "EICR",
        question: "How long does the inspection take?",
        answer: "A standard 3-bedroom house typically takes 3 to 4 hours to test thoroughly."
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
    description: "Complete electrical system upgrades for modern living and safety.",
    longDescription: "Older properties often have outdated wiring that can be a safety hazard. I provide full and partial rewiring services to bring your electrical system up to modern safety standards (BS 7671), increasing safety and capacity. Whether you are renovating a property or concerned about the age of your current wiring, I provide a comprehensive service with minimal disruption to your home.",
    detailedContent: "A full rewire is one of the most significant investments you can make in your home. It involves replacing all the cables, sockets, switches, and the consumer unit. This is the perfect time to add extra sockets, integrated USB ports, or smart lighting controls. My approach focuses on efficiency and cleanliness, ensuring we get your home back to normal as quickly as possible while adhering to the latest 18th Edition wiring regulations.",
    features: [
      "New 18th Edition Consumer Unit",
      "USB Socket Upgrades Included",
      "Energy Efficient LED Lighting",
      "Kitchen & Bathroom Specialist Zones",
      "Smoke, Heat & CO2 Alarms",
      "Minimal Mess & Fast Turnaround"
    ],
    benefits: [
      {
        title: "Total Safety",
        description: "Eliminate the risk of electrical fires caused by old, degraded wiring.",
        icon: Shield
      },
      {
        title: "High Capacity",
        description: "Modern wiring handles high-load appliances like induction hobs and EV chargers.",
        icon: Battery
      },
      {
        title: "Property Value",
        description: "A fully rewired home is a massive selling point for any prospective buyer.",
        icon: Award
      }
    ],
    processSteps: [
      {
        title: "First Fix",
        description: "Chasing walls and routing all new cabling to your chosen positions."
      },
      {
        title: "Second Fix",
        description: "Installing all the sockets, switches, light fittings and the consumer unit."
      },
      {
        title: "Testing",
        description: "Rigorous testing of every new circuit to ensure total safety."
      },
      {
        title: "Handover",
        description: "Provision of full NICEIC certification and Part P building control notice."
      }
    ],
    faqs: [
      {
        category: "Rewiring",
        question: "Do I have to move out during a rewire?",
        answer: "Not necessarily. While it's easier if the property is empty, I can work room-by-room to minimize disruption for occupied homes."
      },
      {
        category: "Rewiring",
        question: "How do I know if I need a rewire?",
        answer: "Signs include old-style fuse boxes, round pin sockets, or fabric-covered cables. If your house is over 30 years old, an inspection is recommended."
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
    description: "Upgrade your old fuse box to a modern, RCD-protected consumer unit.",
    longDescription: "Your consumer unit (fuse box) is the heart of your home's electrical system. Upgrading to a modern unit with RCD and SPD protection significantly improves safety and provides better protection against electrical faults and surges. I install fire-rated metal consumer units that comply with the latest 18th Edition Amendment 2 regulations.",
    detailedContent: "Modern consumer units do much more than just hold fuses. They feature RCDs (Residual Current Devices) that cut power in milliseconds if a fault is detected, potentially saving lives. I also include SPDs (Surge Protection Devices) as standard to protect your expensive electronics from power surges. Every upgrade I perform includes a full safety test of your existing circuits to ensure they are compatible with the new safety devices.",
    features: [
      "18th Edition Compliant Units",
      "Surge Protection (SPD) as Standard",
      "Dual RCD or RCBO Configurations",
      "Fire-Rated Metal Enclosures",
      "Clearly Labelled Circuits",
      "Full Testing & Certification"
    ],
    benefits: [
      {
        title: "Fire Protection",
        description: "Modern units are housed in metal to prevent the spread of electrical fires.",
        icon: Zap
      },
      {
        title: "Device Protection",
        description: "Integrated surge protection keeps your PCs, TVs, and smart devices safe.",
        icon: ShieldCheck
      },
      {
        title: "Safety",
        description: "Sensitive RCD protection prevents fatal electric shocks in the event of a fault.",
        icon: Heart
      }
    ],
    processSteps: [
      {
        title: "Pre-Install Test",
        description: "I test your existing wiring to ensure it's safe for a modern unit."
      },
      {
        title: "Expert Fitting",
        description: "Clean removal of your old box and installation of the new unit."
      },
      {
        title: "Safety Verification",
        description: "Detailed testing of the new unit's safety devices and all circuits."
      },
      {
        title: "NICEIC Cert",
        description: "You'll receive a digital Electrical Installation Certificate via email."
      }
    ],
    faqs: [
      {
        category: "Fuse Box",
        question: "How long does a fuse box upgrade take?",
        answer: "Usually between 4 to 6 hours, including the necessary testing and certification."
      },
      {
        category: "Fuse Box",
        question: "What is an RCD and why do I need one?",
        answer: "An RCD is a life-saving device that instantly switches off electricity if it detects a fault. It's much safer than a traditional fuse."
      }
    ]
  },
  {
    id: "maintenance",
    slug: "electrical-maintenance",
    title: "Electrical Maintenance",
    shortTitle: "General Repairs",
    icon: Settings,
    image: maintenanceImg,
    description: "Prompt repairs, socket replacements, and safety checks for home and business.",
    longDescription: "From replacing broken sockets and switches to regular maintenance of residential electrical systems, I provide a full range of electrical maintenance services to keep your property running smoothly and safely. No job is too small, whether it's a flickering light or a faulty circuit breaker that keeps tripping.",
    detailedContent: "I pride myself on my fault-finding expertise. Many electrical issues are hidden behind walls or under floors, and I use advanced diagnostic equipment to locate and repair faults quickly. I offer a transparent pricing structure for maintenance and small jobs, serving residential clients across Rugby, Southam, and the wider Midlands area.",
    features: [
      "Advanced Fault Finding",
      "Socket & Switch Replacements",
      "Light Fitting & Driver Repairs",
      "Immersion Heater Wiring",
      "Shower & Cooker Circuit Repairs",
      "Emergency Call-Out Support"
    ],
    benefits: [
      {
        title: "Speedy Repairs",
        description: "I carry a wide range of spares to fix most common issues on the first visit.",
        icon: Clock
      },
      {
        title: "Transparent Cost",
        description: "Fixed rates for common tasks so you know exactly what you'll pay.",
        icon: Zap
      },
      {
        title: "Professionalism",
        description: "Fully qualified and insured work that meets all safety regulations.",
        icon: Award
      }
    ],
    processSteps: [
      {
        title: "Diagnosis",
        description: "I'll listen to your issue and perform tests to identify the root cause."
      },
      {
        title: "Clear Quote",
        description: "I'll explain the fix and provide a price before starting any repair work."
      },
      {
        title: "Expert Repair",
        description: "The issue is fixed using high-quality parts that meet British Standards."
      },
      {
        title: "Safety Check",
        description: "I'll test the circuit one last time to ensure everything is operating safely."
      }
    ],
    faqs: [
      {
        category: "Maintenance",
        question: "Do you handle small jobs like changing a socket?",
        answer: "Yes, absolutely! I am happy to help with any job, no matter how small it may seem."
      },
      {
        category: "Maintenance",
        question: "Why does my fuse keep tripping?",
        answer: "It could be a faulty appliance, an overloaded circuit, or a problem with the wiring itself. I can investigate and solve the issue for you."
      }
    ]
  },
  {
    id: "lighting",
    slug: "outside-lighting",
    title: "Outdoor & Security Lighting",
    shortTitle: "Outdoor Lighting",
    icon: Lightbulb,
    image: lightingImg,
    description: "Enhance your home's security and beauty with professional outdoor lighting.",
    longDescription: "I install everything from motion-sensor security lights to decorative garden lighting and driveway illumination. Well-designed outdoor lighting not only makes your home safer but also allows you to enjoy your outdoor spaces long after the sun goes down. I specialize in energy-efficient LED solutions that provide maximum impact with minimum power consumption.",
    detailedContent: "Security lighting is one of the most cost-effective ways to deter potential intruders. I install smart PIR sensors that can distinguish between a person and a passing cat, ensuring your lights only come on when needed. For garden lighting, I can create beautiful 'scenes' that highlight trees, water features, or patio areas, all controllable from a single switch or even your smartphone.",
    features: [
      "PIR Motion Security Lights",
      "Dusk-to-Dawn Automated Sensors",
      "Decorative LED Garden Lighting",
      "Driveway & Pathway Uplighting",
      "App-Controlled Smart Lighting",
      "Weatherproof External Sockets"
    ],
    benefits: [
      {
        title: "Home Security",
        description: "Bright, motion-activated lights are a proven deterrent for intruders.",
        icon: ShieldCheck
      },
      {
        title: "Visual Appeal",
        description: "Highlight your home's architectural features and garden beauty at night.",
        icon: Lightbulb
      },
      {
        title: "Added Safety",
        description: "Prevent trips and falls by illuminating steps, paths, and entrances.",
        icon: Zap
      }
    ],
    processSteps: [
      {
        title: "Lighting Design",
        description: "I'll help you plan the placement of lights for both beauty and security."
      },
      {
        title: "Safe Routing",
        description: "Installation of external-grade armored cables for total reliability."
      },
      {
        title: "Expert Install",
        description: "Secure mounting and wiring of your chosen light fittings."
      },
      {
        title: "Setup",
        description: "I'll adjust the sensors and timers to ensure they work exactly how you want."
      }
    ],
    faqs: [
      {
        category: "Lighting",
        question: "Are LED lights better for outdoor use?",
        answer: "Yes, LEDs are much more energy-efficient and last much longer than traditional halogen bulbs."
      },
      {
        category: "Lighting",
        question: "Can I control my garden lights from inside the house?",
        answer: "Yes, I can install remote switches, timers, or smart controllers so you never have to step outside to turn them on."
      }
    ]
  },
  {
    id: "smart-home",
    slug: "smart-home-installation",
    title: "Smart Home Installation",
    shortTitle: "Smart Home",
    icon: Smartphone,
    image: smartHomeImg,
    description: "Transform your home with intelligent lighting, heating, and security systems.",
    longDescription: "I specialize in installing and configuring intelligent systems including smart lighting (Philips Hue, Lutron), smart thermostats (Nest, Hive), video doorbells, and integrated security systems—all controllable from your smartphone. I can help you choose the right ecosystem for your needs and ensure everything is set up to work seamlessly together.",
    detailedContent: "A smart home isn't just about gadgets; it's about making your life easier and your home more efficient. Imagine your lights turning off automatically when you leave the house, or your heating turning on as you drive home from work. I provide professional installation of the hardware and ensure it's securely integrated into your home's electrical system, avoiding the mess of DIY cables and unreliable setups.",
    features: [
      "Nest & Hive Thermostats",
      "Ring & Nest Video Doorbells",
      "Philips Hue & Lutron Lighting",
      "Smart Security Camera Systems",
      "Voice Assistant Integration",
      "Whole-Home Wi-Fi Solutions"
    ],
    benefits: [
      {
        title: "Energy Savings",
        description: "Reduce your heating and lighting bills by up to 20% with smart scheduling.",
        icon: Battery
      },
      {
        title: "Pure Convenience",
        description: "Manage your entire home's environment with your voice or a simple tap.",
        icon: Smartphone
      },
      {
        title: "Enhanced Security",
        description: "Monitor your home from anywhere in the world and receive instant alerts.",
        icon: Shield
      }
    ],
    processSteps: [
      {
        title: "Product Advice",
        description: "I'll help you choose the best smart devices that work together."
      },
      {
        title: "Pro Install",
        description: "Clean, professional installation of all smart hardware and hubs."
      },
      {
        title: "App Config",
        description: "I'll set up the apps and show you how to create 'routines' and 'scenes'."
      },
      {
        title: "Final Check",
        description: "Testing all integrations to ensure your smart home is truly intelligent."
      }
    ],
    faqs: [
      {
        category: "Smart Home",
        question: "Which smart thermostat is best, Nest or Hive?",
        answer: "Both are excellent, but they have different features. I can explain the pros and cons of each based on your boiler and lifestyle."
      },
      {
        category: "Smart Home",
        question: "Do I need a hub for my smart lights?",
        answer: "Some systems like Philips Hue require a 'bridge' or hub, while others connect directly to Wi-Fi. I can help you decide which is right for your home."
      }
    ]
  },
  {
    id: "residential",
    slug: "residential-electrical-services",
    title: "Residential Electrical Services",
    shortTitle: "Residential",
    icon: Building2,
    image: maintenanceImg,
    description: "Comprehensive electrical solutions for residential clients.",
    longDescription: "I provide specialized electrical services for residential clients, from high-end retail shopfitting to industrial warehouse maintenance. Understanding the unique requirements of business environments, I deliver work that ensures operational continuity, safety compliance, and energy efficiency. Whether you need a full office rewire or ongoing planned maintenance, I offer professional, reliable service tailored to your business needs.",
    detailedContent: "Residential electrical systems require a higher level of expertise and attention to detail. I handle 3-phase installations, emergency lighting systems, residential-grade security infrastructure, and energy-efficient lighting upgrades that can significantly reduce your business's overheads. I work flexibly to minimize downtime, often performing major works outside of standard business hours to ensure your operations remain uninterrupted.",
    features: [
      "3-Phase Power Installations",
      "Emergency Lighting Testing",
      "Residential EICR & Compliance"
    ],
    benefits: [
      {
        title: "Residential Continuity",
        description: "Reliable systems and rapid support to keep your operations running smoothly.",
        icon: ShieldCheck
      },
      {
        title: "Energy Efficiency",
        description: "Reduce overheads with high-efficiency residential lighting and power solutions.",
        icon: Zap
      },
      {
        title: "Total Compliance",
        description: "Ensure your residential meets all legal health and safety electrical standards.",
        icon: Award
      }
    ],
    processSteps: [
      {
        title: "Site Survey",
        description: "Comprehensive assessment of your residential electrical infrastructure."
      },
      {
        title: "Technical Design",
        description: "Bespoke electrical planning tailored to your specific residential requirements."
      },
      {
        title: "Phased Execution",
        description: "Strategic installation scheduled to minimize disruption to your residential."
      },
      {
        title: "Certification",
        description: "Full residential certification and detailed O&M manuals provided."
      }
    ],
    faqs: [
      {
        category: "Residential",
        question: "Do you offer out-of-hours residential work?",
        answer: "Yes, I understand that many clients cannot afford downtime. I can schedule major works for evenings or weekends."
      },
      {
        category: "Residential",
        question: "Can you handle 3-phase power installations?",
        answer: "Absolutely. I am fully qualified and experienced in installing and maintaining 3-phase residential systems."
      }
    ]
  },
  {
    id: "emergency",
    slug: "emergency-electrician",
    title: "24/7 Emergency Call-Out",
    shortTitle: "Emergency 24/7",
    icon: Phone,
    image: emergencyImg,
    description: "Rapid response for electrical faults, power outages, and urgent safety issues.",
    longDescription: "Electrical emergencies don't wait for business hours. Whether it's a complete power failure, a burning smell from a socket, or a fuse box that won't reset, I provide a rapid response emergency service across Rugby, Southam, and the surrounding areas. My priority is to make your installation safe and restore power as quickly as possible, 24 hours a day, 7 days a week.",
    detailedContent: "When you call for an emergency, you'll speak directly to me, not a call center. I carry a wide range of diagnostic tools and spare parts in my van, allowing me to resolve over 90% of emergency faults on the first visit. I provide clear, upfront pricing for emergency call-outs and will always prioritize your safety, giving you peace of mind when you need it most.",
    features: [
      "24/7 Rapid Response Team",
      "Advanced Fault Diagnosis",
      "Immediate Safety Isolation",
      "Temporary Power Solutions",
      "Storm Damage Repairs",
      "Direct Engineer Contact"
    ],
    benefits: [
      {
        title: "Instant Support",
        description: "Direct access to a qualified engineer when you need it most, day or night.",
        icon: Clock
      },
      {
        title: "Peace of Mind",
        description: "Expert safety assessments to identify and isolate dangerous electrical faults.",
        icon: Shield
      },
      {
        title: "Reliable Fix",
        description: "Professional repairs that address the root cause, not just the symptoms.",
        icon: Award
      }
    ],
    processSteps: [
      {
        title: "Urgent Call",
        description: "Speak directly with an engineer to assess the severity of the issue."
      },
      {
        title: "Rapid Dispatch",
        description: "I'll be on-site as quickly as possible, usually within 60 minutes."
      },
      {
        title: "Fault Isolation",
        description: "The primary goal is to make the installation safe and identify the fault."
      },
      {
        title: "Power Restore",
        description: "Immediate repair or temporary solution to get your power back on."
      }
    ],
    faqs: [
      {
        category: "Emergency",
        question: "What should I do if I smell burning from a socket?",
        answer: "Turn off the power at the main consumer unit immediately and call me. Do not attempt to use the socket or investigate yourself."
      },
      {
        category: "Emergency",
        question: "What are your emergency call-out charges?",
        answer: "I provide transparent, fixed-rate call-out charges which I will confirm with you over the phone before I depart."
      }
    ]
  }
]

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug)
