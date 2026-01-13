import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { siteSettings } from "@/data/siteSettings"
import { services } from "@/data/services"
import { Menu, X, ChevronDown, Phone, Clock, MapPin } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import slLogo from "@/assets/sl-logo.png"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAreasOpen, setIsAreasOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300" id="main-header">
      <div className="container mx-auto px-4 py-3 lg:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 group relative z-50 w-fit">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src={slLogo} alt="South London Plumbers" className="h-full w-auto object-contain" />
            </div>
            <div className="leading-tight">
              <span className="block font-header font-bold text-navy-900 text-base uppercase tracking-tight">South London</span>
              <span className="block font-header font-bold text-orange-500 text-xs tracking-widest -mt-1">PLUMBERS</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-navy-900">
          <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
          <div className="relative group">
            <button type="button" className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg p-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100 translate-y-2 group-hover:translate-y-0">
              <Link to="/services" className="block py-2 hover:text-orange-500 transition-colors font-semibold border-b border-gray-100 mb-2">All Services</Link>
              {services.map((service) => (
                <Link key={service.id} to={`/services/${service.slug}`} className="block py-2 hover:text-orange-500 transition-colors">
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/reviews" className="hover:text-orange-500 transition-colors">Reviews</Link>
          <div className="relative group">
            <button type="button" className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
              Areas <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg p-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100 translate-y-2 group-hover:translate-y-0">
              <Link to="/locations/greenwich" className="block py-2 hover:text-orange-500 transition-colors">Greenwich</Link>
              <Link to="/locations/croydon" className="block py-2 hover:text-orange-500 transition-colors">Croydon</Link>
              <Link to="/locations/brixton" className="block py-2 hover:text-orange-500 transition-colors">Brixton</Link>
              <Link to="/locations/bromley" className="block py-2 hover:text-orange-500 transition-colors">Bromley</Link>
              <Link to="/locations/lewisham" className="block py-2 hover:text-orange-500 transition-colors">Lewisham</Link>
            </div>
          </div>
        </nav>

        {/* CTA Right */}
        <div className="flex-1 flex items-center justify-end gap-4 relative z-50">
          <a href={`tel:${siteSettings.phoneFormatted}`} className="hidden lg:flex flex-col items-end group">
            <span className="text-xs text-gray-500 font-semibold uppercase">24/7 Helpline</span>
            <span className="font-header font-bold text-navy-900 text-xl group-hover:text-orange-500 transition-colors">{siteSettings.phone}</span>
          </a>
          <Button asChild className="hidden sm:flex bg-navy-900 hover:bg-navy-800 text-white font-bold py-6 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
            <Link to="/contact#booking-form">BOOK NOW</Link>
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="md:hidden p-2 text-navy-900 hover:text-orange-500 transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-navy-900/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-50 md:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
            >
              <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                <nav className="flex flex-col gap-4">
                  <Link to="/about" className="text-xl font-bold text-navy-900 hover:text-orange-500 flex items-center justify-between group">
                    About
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </div>
                  </Link>
                  
                  {/* Mobile Services Accordion */}
                  <div className="flex flex-col gap-2">
                    <button 
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-xl font-bold text-navy-900 hover:text-orange-500 flex items-center justify-between w-full text-left group"
                    >
                      Services
                      <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-all duration-200 transform ${isServicesOpen ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-3 pl-4 border-l-2 border-orange-500 mt-2 overflow-hidden"
                        >
                          <Link to="/services" className="text-lg text-gray-600 hover:text-orange-500 font-semibold">All Services</Link>
                          {services.map((service) => (
                            <Link key={service.id} to={`/services/${service.slug}`} className="text-lg text-gray-600 hover:text-orange-500">
                              {service.shortTitle}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <Link to="/reviews" className="text-xl font-bold text-navy-900 hover:text-orange-500 flex items-center justify-between group">
                    Reviews
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </div>
                  </Link>
                  
                  {/* Mobile Areas Accordion */}
                  <div className="flex flex-col gap-2">
                    <button 
                      type="button"
                      onClick={() => setIsAreasOpen(!isAreasOpen)}
                      className="text-xl font-bold text-navy-900 hover:text-orange-500 flex items-center justify-between w-full text-left group"
                    >
                      Areas
                      <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-all duration-200 transform ${isAreasOpen ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isAreasOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-3 pl-4 border-l-2 border-orange-500 mt-2 overflow-hidden"
                        >
                          <Link to="/locations/greenwich" className="text-lg text-gray-600 hover:text-orange-500">Greenwich</Link>
                          <Link to="/locations/croydon" className="text-lg text-gray-600 hover:text-orange-500">Croydon</Link>
                          <Link to="/locations/brixton" className="text-lg text-gray-600 hover:text-orange-500">Brixton</Link>
                          <Link to="/locations/bromley" className="text-lg text-gray-600 hover:text-orange-500">Bromley</Link>
                          <Link to="/locations/lewisham" className="text-lg text-gray-600 hover:text-orange-500">Lewisham</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>

                <hr className="border-gray-100" />

                <div className="flex flex-col gap-4">
                  <a 
                    href={`tel:${siteSettings.phoneFormatted}`} 
                    className="flex items-center gap-4 p-4 bg-navy-900 text-white rounded-xl shadow-lg hover:bg-navy-800 transition-colors"
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-bold text-orange-500">24/7 Emergency Call</span>
                      <span className="text-xl font-header font-bold">{siteSettings.phone}</span>
                    </div>
                  </a>
                  
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-8 rounded-xl text-lg shadow-xl shadow-orange-500/20">
                    <Link to="/contact#booking-form" onClick={() => setIsMenuOpen(false)}>BOOK ONLINE NOW</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">24/7 Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">South London</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
