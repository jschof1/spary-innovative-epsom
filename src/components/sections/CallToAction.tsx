import { Phone } from "lucide-react"
import { siteSettings } from "@/data/siteSettings"
import { Link } from "react-router-dom"

export const CallToAction = () => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-orange-500" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-10 skew-x-[-20deg] translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="text-center lg:text-left">
            <h2 className="font-header text-2xl md:text-4xl font-bold mb-4">Need an Emergency Plumber?</h2>
            <p className="text-lg text-white/90">We have engineers stationed across South London ready to help you 24/7.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${siteSettings.phoneFormatted}`} 
              className="inline-flex items-center justify-center gap-3 bg-navy-900 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-navy-800 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              {siteSettings.phone}
            </a>
            <Link 
              to="/contact#booking-form" 
              className="inline-flex items-center justify-center bg-white text-orange-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-50 transition-all shadow-xl hover:scale-105 active:scale-95 border-2 border-transparent"
            >
              BOOK ONLINE
            </Link>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-white/80 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE: 4 Engineers Available in SE/SW
          </div>
          <div className="flex items-center gap-2">
            <span>✓ No Call-out Fee</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓ Arrival in &lt; 60 Mins</span>
          </div>
        </div>
      </div>
    </section>
  )
}

