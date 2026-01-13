import { Link } from "react-router-dom"
import { siteSettings } from "@/data/siteSettings"
import { services } from "@/data/services"
import { locations } from "@/data/locations"
import gasSafeLogo from "../../assets/logos/gas-safe.svg";
import cityAndGuildsLogo from "../../assets/logos/city-guilds.webp";
import vaillantLogo from "../../assets/logos/valliant.webp";
import worcesterBoschLogo from "../../assets/logos/bosch.webp";
import slLogo from "@/assets/sl-logo.png";


export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={slLogo} alt="South London Plumbers" className="h-full w-auto object-contain" />
              </div>
              <div className="leading-tight">
                <span className="block font-header font-bold text-white text-lg uppercase tracking-tight">South London</span>
                <span className="block font-header font-bold text-orange-500 text-sm tracking-widest -mt-1">PLUMBERS</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              South London's most trusted plumbing and heating experts. Available 24/7 for all your emergencies.
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
                About Us
              </Link>
              <Link to="/contact#booking-form" className="text-orange-500 font-bold hover:underline mt-2">
                Book Online Now
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
                    Plumber in {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditation Column */}
          <div>
            <h4 className="font-header font-bold text-lg mb-6 uppercase tracking-wider">Accreditations</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded flex items-center justify-center group hover:bg-white/20 transition-all duration-300">
                <img 
                  src={gasSafeLogo} 
                  alt="Gas Safe Registered" 
                  className="max-h-12 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/10 p-4 rounded flex items-center justify-center group hover:bg-white/20 transition-all duration-300">
                <img 
                  src={cityAndGuildsLogo} 
                  alt="City & Guilds" 
                  className="max-h-12 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/10 p-4 rounded flex items-center justify-center group hover:bg-white/20 transition-all duration-300">
                <img 
                  src={vaillantLogo} 
                  alt="Vaillant Advance" 
                  className="max-h-10 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/10 p-4 rounded flex items-center justify-center group hover:bg-white/20 transition-all duration-300">
                <img 
                  src={worcesterBoschLogo} 
                  alt="Worcester Bosch" 
                  className="max-h-12 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} {siteSettings.businessName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
