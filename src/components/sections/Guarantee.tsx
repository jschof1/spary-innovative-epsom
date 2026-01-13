import { CheckCircle2, ShieldCheck, Award, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const promises = [
  {
    title: "Upfront Pricing",
    description: "You approve the price before I start any work. No hidden charges or surprise extras.",
    icon: Award,
  },
  {
    title: "Professional Guarantee",
    description: "My work is built to last. If any issue arises from my work within a year, I'll fix it at no extra cost.",
    icon: ShieldCheck,
  },
  {
    title: "Respect for Your Home",
    description: "I treat your property like my own. I wear shoe covers and leave your space spotless.",
    icon: Heart,
  },
]

export const Guarantee = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-900 text-white relative overflow-hidden" id="guarantee">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-dot-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-[2.5rem] blur-2xl pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Electrician shaking hands with customer" 
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="font-header font-bold text-xl uppercase tracking-wider">The "No-Nonsense"</p>
                    <p className="text-orange-500 font-extrabold text-2xl uppercase tracking-tighter">Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
              Our Commitment To You
            </div>
            <h2 className="font-header text-2xl md:text-4xl font-bold mb-8 leading-tight">
              I Stand Behind <br/>
              <span className="text-orange-500">Every Single Job</span>
            </h2>
            <p className="text-lg text-navy-100 mb-8 leading-relaxed max-w-xl">
              I know hiring a tradesman can be stressful. That’s why I’ve removed all the risk. When you hire DH Electrical Services, you’re hiring peace of mind.
            </p>
            
            <div className="space-y-8">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                    <promise.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-2 group-hover:text-orange-500 transition-colors">{promise.title}</h4>
                    <p className="text-navy-100/70 leading-relaxed">{promise.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <Link to="/contact#booking-form" className="inline-flex items-center gap-3 bg-white text-navy-900 font-bold py-4 px-10 rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-xl">
                BOOK WITH CONFIDENCE
                <CheckCircle2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
