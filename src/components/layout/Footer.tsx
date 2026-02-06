import { Link } from "react-router-dom"
import { siteSettings } from "@/data/siteSettings"
import { services } from "@/data/services"
import { locations } from "@/data/locations"
import logo from "../../assets/logo-landscape.png"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Spray Innovative" className="h-12 md:h-16 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 mb-6">
              Professional on-site and off-site spray painting specialist. Transform your home with durable, eco-friendly coatings for kitchens, windows, and doors.
            </p>
            <div className="flex flex-col gap-2">
              <a href={`tel:${siteSettings.phoneFormatted}`} className="text-xl font-bold hover:text-orange-500 transition-colors">
                {siteSettings.phone}
              </a>
              <a href={`mailto:${siteSettings.email}`} className="text-gray-400 hover:text-white transition-colors">
                {siteSettings.email}
              </a>
              <Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">
                Customer Reviews
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                About Paul Lear
              </Link>
              <Link to="/contact#booking-form" className="text-orange-500 font-bold hover:underline mt-2">
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-header font-bold text-lg mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h4 className="font-header font-bold text-lg mb-6 uppercase tracking-wider">Areas We Cover</h4>
            <ul className="space-y-3">
              {locations.map(location => (
                <li key={location.id}>
                  <Link to={`/locations/${location.slug}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                    Spraying in {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditation Column */}
          <div>
            <div className="mb-10">
              <h4 className="font-header font-bold text-lg mb-6 uppercase tracking-wider">Our Commitment</h4>
              <div className="grid grid-cols-1">
                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">10-Year Guarantee</p>
                  <p className="text-xs text-gray-400 leading-relaxed">We provide a 10-year adhesion guarantee on all our specialist spray coatings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {currentYear} {siteSettings.businessName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
