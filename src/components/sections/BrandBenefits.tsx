import { Shield, Zap, HeartHandshake, Banknote, Star } from "lucide-react"

const benefits = [
  {
    title: "Emergency 24/7 Support",
    description: "Burst pipe at 3 AM? No problem. We have engineers on standby 24 hours a day, 365 days a year.",
    icon: Zap,
    accent: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "No Hidden Costs",
    description: "The price we quote is the price you pay. We provide clear, itemized digital invoices for every job.",
    icon: Banknote,
    accent: "text-green-400",
    bg: "bg-green-500/10"
  },
  {
    title: "100% Licensed & Insured",
    description: "Every engineer is Gas Safe registered and we carry £5M in public liability insurance for your peace of mind.",
    icon: Shield,
    accent: "text-orange-400",
    bg: "bg-orange-500/10"
  },
  {
    title: "Local & Friendly",
    description: "We're not a national franchise. We're a family-run South London business that cares about our community.",
    icon: HeartHandshake,
    accent: "text-purple-400",
    bg: "bg-purple-500/10"
  }
]

export const BrandBenefits = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-400 uppercase bg-orange-400/10 rounded-full border border-orange-400/20">
              Why Choose South London Plumbers
            </div>
            <h2 className="font-header text-2xl md:text-4xl font-bold mb-8 leading-tight">
              South London's Most Reliable <br/>
              <span className="text-orange-500">Plumbing Team</span>
            </h2>
            <p className="text-lg text-navy-100 mb-8 leading-relaxed max-w-xl">
              We've built our reputation on honesty, speed, and quality. Whether it's a dripping tap or a full boiler installation, we treat every job with the same level of professionalism.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-5 group">
                  <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.accent}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white group-hover:text-orange-400 transition-colors">{benefit.title}</h4>
                    <p className="text-navy-100/70 leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Plumbing work in progress" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-navy-900/50 backdrop-blur-md border-t border-orange-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold tracking-wider uppercase">150+ 5-Star Reviews</span>
                </div>
                <blockquote className="font-header italic text-xl mb-4 leading-relaxed">
                  "The most professional tradesmen I've ever had in my house. Prompt, clean, and honest."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white shadow-lg">J</div>
                  <div>
                    <p className="font-bold text-white">James Wilson</p>
                    <p className="text-sm text-orange-400">Dulwich, SE21</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-2xl hidden md:block animate-bounce-slow">
              <div className="text-center">
                <p className="text-navy-900 font-extrabold text-3xl mb-1">15+</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
