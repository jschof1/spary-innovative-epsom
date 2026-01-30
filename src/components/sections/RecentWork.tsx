import { MapPin, CheckCircle2, ArrowRight, Gauge, Clock, ShieldCheck, Activity } from "lucide-react";
import { Link } from "react-router-dom";

// Import local assets
import evProjectImg from "../../assets/photos/ev-charger-installation--sleek-wall-mounted-smart-ev-charger-on-brick-wall--electric-car-plugged-in--cinematic-lighting--professional-photography.webp";
import cuProjectImg from "../../assets/photos/consumer-unit-upgrade--close-up-of-modern-metal-fuse-box--neat-circuit-breakers--glowing-led-indicators--ultra-clean-installation.webp";
import lightProjectImg from "../../assets/photos/outside-lighting--residential-garden-at-dusk--warm-led-architectural-uplighting--security-floodlights--luxury-home-exterior.webp";
import smartHomeProjectImg from "../../assets/photos/smart-home-setup--close-up-of-hand-using-smartphone-app-to-dim-recessed-kitchen-lights--tech-focused-aesthetic.webp";
import commercialProjectImg from "../../assets/photos/industrial-maintenance--clean-electrical-sub-panel-in-commercial-workshop--heavy-duty-conduit-pipes--industrial-aesthetic--bright-lighting.webp";
import emergencyProjectImg from "../../assets/photos/van-picture.webp";

const projects = [
  {
    title: "EV Charger Home Installation",
    location: "Rugby CV21, Rugby",
    category: "EV Charging",
    description: "Installation of Ohme ePod smart charger. Full integration with home Wi-Fi and setup of dynamic tariff charging for maximum cost efficiency.",
    specs: ["Ohme ePod Charger", "Surge Protection", "Smart Integration"],
    impact: "60% Fuel Savings",
    status: "Certified",
    image: evProjectImg
  },
  {
    title: "Consumer Unit Upgrade",
    location: "Southam CV47",
    category: "Safety",
    description: "Replacement of outdated fuse box with a modern 18th Edition RCD-protected consumer unit. Full testing and certification of all domestic circuits.",
    specs: ["Dual RCD Board", "Surge Protection", "Circuit Testing"],
    impact: "Enhanced Safety",
    status: "Secured",
    image: cuProjectImg
  },
  {
    title: "Smart Security Lighting",
    location: "Leamington Spa CV32",
    category: "Lighting",
    description: "Design and installation of high-efficiency LED security lighting with PIR sensors and remote override for improved property security and curb appeal.",
    specs: ["LED Floodlights", "PIR Sensors", "Remote Access"],
    impact: "Improved Security",
    status: "Completed",
    image: lightProjectImg
  },
  {
    title: "Smart Home Integration",
    location: "Warwick CV34",
    category: "Smart Home",
    description: "Full residential smart home transformation. Installation of Hive smart heating, Philips Hue adaptive lighting, and Ring security infrastructure with central app control.",
    specs: ["Smart Heating", "Adaptive Lighting", "Security Hub"],
    impact: "25% Energy Reduction",
    status: "Verified",
    image: smartHomeProjectImg
  },
  {
    title: "Residential Lighting Upgrade",
    location: "Coventry CV1",
    category: "Residential",
    description: "Complete LED lighting overhaul for a modern residential space. Implementation of automated motion sensors and daylight harvesting to reduce energy costs by 40%.",
    specs: ["LED Panel Lighting", "Motion Sensors", "Daylight Sensors"],
    impact: "40% Energy Savings", 
    status: "Certified",
    image: commercialProjectImg
  },
  {
    title: "Emergency Power Restoration",
    location: "Rugby CV22",
    category: "Emergency",
    description: "Rapid response to a major power failure in a residential property. Identified a faulty main isolator, replaced components, and restored full power within 90 minutes.",
    specs: ["Fault Diagnosis", "Isolator Replacement", "Safety Certification"],
    impact: "Power Restored",
    status: "Verified",
    image: emergencyProjectImg
  }
]

const stats = [
  { label: "Rapid Response", value: "24/7", icon: Clock },
  { label: "Total Projects", value: "500+", icon: Gauge },
  { label: "Google Rating", value: "5.0/5", icon: Activity },
  { label: "Work Guarantee", value: "12 Mo", icon: ShieldCheck },
];

export const RecentWork = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="work">
      {/* Background accents similar to Comparison.tsx */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-900/10 to-transparent" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-navy-900 uppercase bg-white border border-navy-900/10 rounded-md shadow-sm">
              <Activity className="w-3 h-3 text-orange-500" />
              Live Project Log
            </div>
            <h2 className="font-header text-3xl md:text-5xl font-bold text-navy-900 mb-8 tracking-tight">
              Electrical <span className="text-orange-500">Excellence</span> Across the Midlands
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              We don't just install wires; I engineer long-term safety and reliability. Every project is executed to strict technical standards with verifiable performance outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <stat.icon className="w-5 h-5 text-orange-500 mb-2" />
                <span className="text-navy-900 font-bold text-lg leading-tight">{stat.value}</span>
                <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group"
            >
              {/* Image Section - Color Blocked */}
              <div className="relative h-64 overflow-hidden bg-slate-100 border-b border-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="bg-navy-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
                    {project.category.toUpperCase()}
                  </span>
                  <div className="bg-white/90 backdrop-blur-md text-navy-900 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 border border-white/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Data Section */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-wide uppercase">{project.location}</span>
                </div>
                
                <h3 className="font-header font-bold text-navy-900 text-2xl mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Spec Grid - Engineered look */}
                <div className="grid grid-cols-1 gap-2 mb-8">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-[13px] font-semibold text-navy-900">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome Block - Color Blocked */}
                <div className="mt-auto bg-orange-500 rounded-2xl p-4 flex items-center justify-between group-hover:bg-navy-900 transition-colors duration-300">
                  <div>
                    <span className="block text-[10px] font-bold text-white/70 uppercase tracking-widest mb-0.5">Performance Outcome</span>
                    <span className="text-white font-bold text-sm">{project.impact}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-1 bg-white rounded-[2.5rem] border border-gray-200 shadow-xl max-w-4xl mx-auto overflow-hidden">
          <div className="bg-slate-50 rounded-[2.25rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white">
            <div className="text-center md:text-left">
              <h3 className="text-navy-900 font-header text-3xl font-bold mb-3 tracking-tight">Need a similar solution?</h3>
              <p className="text-gray-500 font-medium">Get a technical assessment and fixed quote for your project.</p>
            </div>
            <Link 
              to="/contact#booking-form" 
              className="whitespace-nowrap bg-navy-900 text-white font-bold py-4 px-10 rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              REQUEST TECHNICAL QUOTE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
