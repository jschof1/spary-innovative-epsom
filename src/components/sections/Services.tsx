import { type LucideIcon, ArrowRight, ShieldCheck, Gauge, Settings2 } from "lucide-react"
import { services as defaultServices } from "@/data/services"
import { Link } from "react-router-dom"

interface ServicesProps {
  title?: string
  services?: {
    icon: LucideIcon
    title: string
    description: string
    slug?: string
    id?: string
  }[]
  limit?: number
}

const getServiceFeatures = (id: string) => {
  const features: Record<string, string[]> = {
    "ev-charging": ["Expert Install", "Smart Controls", "OLEV Approved"],
    "rewires": ["Full & Partial", "Testing & Cert", "Modern Safety"],
    "consumer-unit": ["RCD Protection", "Surge Protection", "Fully Certified"],
    "maintenance": ["Safety Checks", "Socket Upgrades", "Fault Finding"],
    "lighting": ["LED Efficiency", "PIR Sensors", "Garden Lighting"],
    "smart-home": ["App Control", "Heating & Lighting", "Security Integration"]
  }
  return features[id] || ["Professional Repair", "Quality Parts", "Expert Labor"]
}

export const Services = ({ 
  services = defaultServices,
  limit
}: ServicesProps) => {
  const displayedServices = limit ? services.slice(0, limit) : services

  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden" id="services">
      {/* Background Engineering Accents */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-bold tracking-[0.3em] text-orange-600 uppercase">
                System Infrastructure
              </span>
            </div>
            <h2 className="font-header text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tight">
              Professional <br/>
              <span className="text-orange-600">Electrical Services.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
              I don't just install wires; I optimize your home's critical systems. Using advanced diagnostics 
              and precision components to ensure long-term safety and reliability.
            </p>
          </div>
          
          <div className="hidden lg:grid grid-cols-2 gap-4 w-full max-w-md">
            {[
              { icon: ShieldCheck, label: "Insurance Approved", value: "Full Coverage" },
              { icon: Gauge, label: "Response Time", value: "Under 60 Mins" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 border border-slate-200 shadow-sm">
                <stat.icon className="w-5 h-5 text-orange-600 mb-3" />
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                <div className="text-lg font-black text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid with gap-px for engineered borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl overflow-hidden rounded-sm">
          {displayedServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 hover:bg-slate-50 transition-all duration-500 relative flex flex-col h-full"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-slate-200 group-hover:bg-orange-400 transition-colors" />
                <div className="absolute top-0 right-0 w-8 h-px bg-slate-200 group-hover:bg-orange-400 transition-colors" />
              </div>

              <div className="flex-grow">
                <div className="mb-6 inline-flex items-center justify-center">
                  <div className="w-14 h-14 bg-slate-900 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-500 shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4 h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-orange-300 transition-all duration-500" />
                </div>
                
                <h3 className="font-header text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 mb-8 leading-relaxed text-[15px] font-medium">
                  {service.description}
                </p>

                {/* Technical Features List */}
                <div className="space-y-3 mb-6 pt-6 border-t border-slate-100">
                  {getServiceFeatures(service.id || "").map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <div className="w-1 h-1 bg-orange-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <Link 
                  to={service.slug ? `/services/${service.slug}` : "/contact#booking-form"} 
                  className="group/link inline-flex items-center gap-4 py-4 px-6 -ml-6 border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300"
                >
                  <span className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase">
                    {service.slug ? "Access Specifications" : "Deploy Engineer"}
                  </span>
                  <div className="w-8 h-8 bg-slate-100 flex items-center justify-center group-hover/link:bg-orange-600 group-hover/link:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Color Block Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-slate-900 text-white shadow-xl">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 border border-slate-700 flex items-center justify-center text-orange-500">
              <Settings2 className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-lg font-black uppercase tracking-tight">System Breakdown?</h4>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Immediate technical support available 24/7</p>
            </div>
          </div>
          <Link 
            to="/contact#booking-form" 
            className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-12 text-sm uppercase tracking-[0.2em] transition-all text-center shadow-[0_0_20px_rgba(234,88,12,0.3)]"
          >
            Dispatch Now
          </Link>
        </div>
      </div>
    </section>
  )
}

