import { MapPin, CheckCircle2, ArrowRight, Gauge, Clock, ShieldCheck, Activity } from "lucide-react";
import { Link } from "react-router-dom";

// Import local assets
import kitchenResprayProject from "../../assets/photos/generated/kitchen-respray-hero.webp";
import windowSprayingProject from "../../assets/photos/generated/window-spraying-hero.webp";
import doorSprayingProject from "../../assets/photos/generated/door-spraying-service.webp";
import commercialProjectImg from "../../assets/photos/generated/commercial-shopfront-spraying.webp";
import garageDoorProject from "../../assets/photos/generated/garage-door-spraying.webp";
import conservatoryProject from "../../assets/photos/generated/conservatory-spraying.webp";

const projects = [
  {
    title: "Modern Kitchen Transformation",
    location: "Epsom KT17, Epsom",
    category: "Kitchen Respray",
    description: "Full kitchen respray from dated wood to modern Anthracite Grey. Factory-standard finish with high-durability coatings.",
    specs: ["Water-Based Paint", "Precision Masking", "10-Year Guarantee"],
    impact: "80% Cost Saving",
    status: "Completed",
    image: kitchenResprayProject
  },
  {
    title: "UPVC Window Refresh",
    location: "Ewell KT19",
    category: "Window Spraying",
    description: "Complete exterior window transformation for a modern look. UV-resistant coatings that bond permanently to UPVC.",
    specs: ["Anthracite Grey", "UV Protection", "Seamless Finish"],
    impact: "Modernized Exterior",
    status: "Guaranteed",
    image: windowSprayingProject
  },
  {
    title: "Front Door Makeover",
    location: "Stoneleigh KT17",
    category: "Door Spraying",
    description: "Composite door respray with a high-durability finish. Same-day transformation with a wide range of color options.",
    specs: ["Composite Specialist", "Fade Resistant", "Hardware Masking"],
    impact: "Instant Curb Appeal",
    status: "Verified",
    image: doorSprayingProject
  },
  {
    title: "Retail Shopfront Spray",
    location: "Sutton SM1",
    category: "Commercial",
    description: "Professional commercial spray finish for a local business. Industrial-grade coatings applied with minimal downtime.",
    specs: ["Industrial Coatings", "7-Day Service", "Professional Image"],
    impact: "Brand Refresh",
    status: "Certified",
    image: commercialProjectImg
  },
  {
    title: "Garage Door Spraying",
    location: "Banstead SM7",
    category: "Garage Doors",
    description: "Metal garage door respray to match property windows. Flexible, non-cracking coatings with rust protection.",
    specs: ["Metal Specialist", "Rust Protection", "Color Match"],
    impact: "Cohesive Look", 
    status: "Completed",
    image: garageDoorProject
  },
  {
    title: "Conservatory Transformation",
    location: "Epsom KT18",
    category: "Conservatory Spraying",
    description: "Full UPVC conservatory respray in a contemporary color. Heat-reflective coatings for a complete property refresh.",
    specs: ["Heat Reflective", "Full Masking", "UV Stable"],
    impact: "Modern Living Space",
    status: "Verified",
    image: conservatoryProject
  }
]

const stats = [
  { label: "7 Day Service", value: "7 Days", icon: Clock },
  { label: "Total Projects", value: "500+", icon: Gauge },
  { label: "Google Rating", value: "5.0/5", icon: Activity },
  { label: "Work Guarantee", value: "10 Yrs", icon: ShieldCheck },
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
              Spraying <span className="text-orange-500">Excellence</span> Across Surrey
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              We don't just apply paint; we engineer long-term property transformations. Every project is executed to strict technical standards with a factory-standard finish.
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
              <h3 className="text-navy-900 font-header text-3xl font-bold mb-3 tracking-tight">Need a similar transformation?</h3>
              <p className="text-gray-500 font-medium">Get a professional assessment and fixed quote for your project.</p>
            </div>
            <Link 
              to="/contact#booking-form" 
              className="whitespace-nowrap bg-navy-900 text-white font-bold py-4 px-10 rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              REQUEST FREE QUOTE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
