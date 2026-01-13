import { Phone, MessageSquare } from "lucide-react"
import { siteSettings } from "@/data/siteSettings"
import { Link } from "react-router-dom"

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden pointer-events-none">
      <div className="flex gap-3 pointer-events-auto">
        <a 
          href={`tel:${siteSettings.phoneFormatted}`}
          className="flex-1 bg-navy-900 text-white font-bold py-4 rounded-xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 fill-current text-orange-500 animate-pulse" />
          CALL NOW
        </a>
        <Link 
          to="/contact#booking-form"
          className="flex-1 bg-orange-500 text-white font-bold py-4 rounded-xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          GET QUOTE
        </Link>
      </div>
    </div>
  )
}

