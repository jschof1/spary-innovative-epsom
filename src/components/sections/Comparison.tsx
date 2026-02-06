import { Check, X, Shield, Clock, Phone, Heart, Sparkles, PoundSterling } from "lucide-react"
import { Link } from "react-router-dom"
import { siteSettings } from "@/data/siteSettings"

const features = [
  {
    name: "Factory-Standard Finish",
    description: "Our specialist spray application provides a smooth, durable finish that is far superior to traditional brush painting. We use premium, eco-friendly water-based coatings specifically designed for high-traffic areas like kitchens and windows.",
    benefit: "A brand-new look for your home.",
    icon: Sparkles,
    us: "Spray Application",
    others: "Brush & Roller",
    usValid: true,
    othersValid: false,
  },
  {
    name: "10-Year Adhesion Guarantee",
    description: "We stand behind our work. Our specialist coatings are designed to bond permanently to UPVC, wood, and metal. If our coating fails to adhere within 10 years, we'll rectify it at zero cost.",
    benefit: "Long-term peace of mind.",
    icon: Shield,
    us: "10-Year Guarantee",
    others: "1-Year Warranty",
    usValid: true,
    othersValid: false,
  },
  {
    name: "Fixed Pricing Policy",
    description: "The price we quote is the price you pay. No hidden extras, no 'unexpected' costs, and no budget-breaking surprises. We provide clear, transparent quotes for every project.",
    benefit: "100% financial predictability.",
    icon: PoundSterling,
    us: "Fixed Quote",
    others: "Estimate Only",
    usValid: true,
    othersValid: false,
  },
  {
    name: "Minimal Disruption",
    description: "Most projects, including full kitchen resprays, are completed within just a few days. Our on-site spraying is clean, fast, and avoids the mess of a full replacement.",
    benefit: "Your home back to normal fast.",
    icon: Clock,
    us: "3-5 Day Turnaround",
    others: "Weeks of Work",
    usValid: true,
    othersValid: false,
  },
  {
    name: "Eco-Friendly Coatings",
    description: "We use high-quality water-based paints with low VOCs. They are safe for your family, pets, and the environment, with minimal odor and fast drying times.",
    benefit: "Safe for your family and home.",
    icon: Heart,
    us: "Water-Based Paint",
    others: "Oil-Based Paint",
    usValid: true,
    othersValid: false,
  },
  {
    name: "Property Care Standards",
    description: "We treat your property with respect. Our protocol includes meticulous masking of all surrounding areas, floor protection, and a thorough post-job clean.",
    benefit: "Zero mess, zero cleanup required.",
    icon: Heart,
    us: "Precision Masking",
    others: "Basic Protection",
    usValid: true,
    othersValid: false,
  },
]

export const Comparison = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden" id="why-us">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] text-orange-600 uppercase bg-orange-50 border border-orange-100 rounded-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Operational Standards Comparison
            </div>
            <h2 className="font-header text-4xl md:text-6xl font-bold text-navy-900 mb-8 leading-[0.9] tracking-tighter">
              Engineered for <br/>
              <span className="text-orange-500 italic">Premium Results.</span>
            </h2>
            <p className="text-navy-900/60 text-lg md:text-xl max-w-2xl leading-tight font-medium">
              Don't gamble with your home's appearance. We've systematized our spraying process to ensure every transformation is permanent and flawless.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 text-navy-900/40 font-mono text-sm uppercase tracking-widest">
              <span>System v4.2</span>
              <div className="w-12 h-[1px] bg-navy-900/10" />
              <span>Ref: SLP-2024</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Comparison Table */}
          <div className="border border-navy-900/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] bg-white">
            
            {/* Table Header */}
            <div className="hidden lg:grid grid-cols-12 border-b border-navy-900/10">
              <div className="col-span-6 p-8 bg-slate-50/30 flex items-center">
                <span className="text-[10px] font-bold text-navy-900/40 uppercase tracking-[0.2em]">Quality Benchmark Parameters</span>
              </div>
              <div className="col-span-3 p-8 bg-navy-900 text-center border-x border-navy-900/10">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.3em] mb-4 block">Professional Standard</span>
                <h3 className="text-white font-bold text-2xl tracking-tight">Spray Innovative</h3>
              </div>
              <div className="col-span-3 p-8 bg-slate-50 text-center flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold text-navy-900/30 uppercase tracking-[0.2em] mb-4 block">Market Average</span>
                <h3 className="text-navy-900/40 font-bold text-xl uppercase tracking-tighter">Typical Tradesman</h3>
              </div>
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-navy-900/10">
              {features.map((feature, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 group">
                  {/* Feature Description Block */}
                  <div className="col-span-1 lg:col-span-6 p-6 md:p-8 border-l-4 border-transparent group-hover:border-orange-500 transition-all duration-500 bg-white">
                    <div className="flex gap-8">
                      <div className="flex-shrink-0 w-14 h-14 rounded-none border border-navy-900/10 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-all duration-500">
                        <feature.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="font-bold text-navy-900 text-xl tracking-tight">{feature.name}</h4>
                          <span className="text-[10px] font-bold text-orange-600 px-2 py-0.5 bg-orange-50 border border-orange-100 uppercase">Param {index + 1}</span>
                        </div>
                        <p className="text-navy-900/60 text-base leading-relaxed mb-4 max-w-lg">{feature.description}</p>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-navy-900 uppercase tracking-wider bg-slate-50 self-start px-3 py-1.5 border border-slate-200">
                          <Sparkles className="w-3 h-3 text-orange-500" />
                          Benefit: {feature.benefit}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Our Standard Block */}
                  <div className="col-span-1 lg:col-span-3 p-6 md:p-8 bg-orange-50/50 flex flex-col items-center justify-center border-x border-navy-900/10 relative overflow-hidden group/us">
                    <div className="absolute inset-0 bg-orange-500/0 group-hover/us:bg-orange-500/[0.02] transition-colors" />
                    <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center ${feature.usValid ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'} shadow-xl shadow-orange-500/20`}>
                      <Check className="w-7 h-7" />
                    </div>
                    <span className="text-navy-900 font-bold text-sm uppercase tracking-widest">{feature.us}</span>
                    <div className="mt-4 w-16 h-[2px] bg-orange-500/20" />
                  </div>

                  {/* Competition Block */}
                  <div className="col-span-1 lg:col-span-3 p-6 md:p-8 bg-slate-50/30 flex flex-col items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <div className={`mb-4 w-10 h-10 rounded-full border-2 flex items-center justify-center ${feature.othersValid ? 'border-navy-900/20 text-navy-900/40' : 'border-red-200 text-red-300'}`}>
                      {feature.othersValid ? <Check className="w-5 h-5" /> : <X className="w-6 h-6" />}
                    </div>
                    <span className="text-navy-900/40 font-bold text-xs uppercase tracking-wider">{feature.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decision Support Footer */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-navy-900 text-white flex flex-col justify-between group hover:bg-navy-800 transition-colors">
              <div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">Ready to transform your home?</h4>
                <p className="text-navy-100/60 text-sm leading-relaxed mb-8">Available 7 days a week for professional spraying services in Epsom and surrounding areas.</p>
              </div>
              <a href={`tel:${siteSettings.phoneFormatted}`} className="flex items-center justify-between group/btn">
                <span className="text-orange-400 font-bold uppercase tracking-widest text-xs">Call Our Team</span>
                <div className="w-10 h-10 bg-orange-500 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
              </a>
            </div>
            
            <div className="p-6 border border-navy-900/10 flex flex-col justify-between group hover:border-orange-500 transition-colors">
              <div>
                <h4 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">Request Free Quote</h4>
                <p className="text-navy-900/40 text-sm leading-relaxed mb-8">Upload photos of your kitchen or windows for a guaranteed digital quote within 24 hours.</p>
              </div>
              <Link to="/contact#booking-form" className="flex items-center justify-between group/btn">
                <span className="text-navy-900 font-bold uppercase tracking-widest text-xs">Start Digital Quote</span>
                <div className="w-10 h-10 bg-navy-900 text-white flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
              </Link>
            </div>

            <div className="p-6 bg-orange-50 border border-orange-100 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="w-24 h-24" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">Verified Reviews</h4>
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-navy-900/60 text-sm italic leading-relaxed">"The transparency is what sold me. I knew exactly what I was paying before they arrived."</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-white text-[10px] font-bold">MS</div>
                <span className="text-[11px] font-bold uppercase text-navy-900 tracking-wider">James M., Epsom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
