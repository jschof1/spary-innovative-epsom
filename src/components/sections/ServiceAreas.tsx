import { ArrowRight, Clock, Search, Zap, Activity, Globe, PhoneCall, CheckCircle2 } from "lucide-react"
import { locations } from "@/data/locations"
import { Link } from "react-router-dom"
import { useState } from "react"
import { siteSettings } from "@/data/siteSettings"

export const ServiceAreas = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLocations = locations.filter(location => 
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.postcodes.some(pc => pc.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden" id="areas">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Block: Engineered Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-navy-100 rounded-lg mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-bold text-navy-900 uppercase tracking-widest">Service Status: Active & Available</span>
            </div>
            
            <h2 className="font-header text-3xl md:text-5xl font-black text-navy-900 mb-8 leading-[1.1] tracking-tight">
              Rapid <span className="text-orange-500">Local Response</span> <br />
              Across the Midlands.
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
              Based in Epsom, we are strategically positioned to provide <span className="text-navy-900 font-bold">fast spraying support</span> across Epsom, Ewell, and Banstead. We pride ourselves on reliability and punctuality for every local appointment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 border border-orange-100">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1">Local Expert</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">I live and work in the area, ensuring I know your neighborhood and its property styles.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0 border border-navy-100">
                  <Activity className="w-5 h-5 text-navy-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1">Emergency Dispatch</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Call 7 days a week for professional spraying services. Fast response for all Surrey postcodes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-navy-900 rounded-2xl p-6 text-white relative overflow-hidden border border-navy-800 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-5 h-5 text-orange-500" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-navy-100">Regional Coverage</span>
                </div>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/10">
                    <div className="text-4xl font-black text-white mb-1">15+</div>
                    <div className="text-xs font-medium text-navy-200 uppercase tracking-wider">Towns & Villages Covered</div>
                  </div>
                  <div className="pb-6 border-b border-white/10">
                    <div className="text-4xl font-black text-orange-500 mb-1">FAST</div>
                    <div className="text-xs font-medium text-navy-200 uppercase tracking-wider">Average Response (Local Area)</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1">24/7</div>
                    <div className="text-xs font-medium text-navy-200 uppercase tracking-wider">Emergency Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel: Search & Filter */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 mb-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <h3 className="text-lg font-bold text-navy-900 mb-1">Area Lookup</h3>
            <p className="text-sm text-gray-500">Check coverage in your specific area</p>
          </div>
          <div className="flex-grow w-full relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Enter town or postcode (e.g. KT17, Epsom, Ewell)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all font-medium text-navy-900"
            />
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((location) => (
            <Link 
              key={location.id} 
              to={`/locations/${location.slug}`}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Card Header: Color Blocked Postcode */}
              <div className="bg-navy-50 px-6 py-4 flex justify-between items-center border-b border-gray-100 group-hover:bg-orange-50 transition-colors">
                <span className="text-xs font-black text-navy-600 tracking-[0.2em] group-hover:text-orange-600 transition-colors">
                  {location.postcodes[0]} DISTRICT
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] font-bold text-gray-600 uppercase">Available</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-grow flex-col">
                <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-orange-600 transition-colors">{location.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Providing professional spray painting services. Full coverage for {location.name} and surrounding areas.
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.slice(0, 3).map(area => (
                      <span key={area} className="text-[10px] font-medium px-2 py-1 bg-gray-100 text-gray-500 rounded border border-gray-200 uppercase tracking-wider">
                        {area}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-bold text-navy-900">LOCAL RESPONSE</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-20 bg-white border border-gray-200 border-dashed rounded-3xl">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">No Service Areas Found</h3>
            <p className="text-gray-500">We couldn't find a match for "{searchQuery}". Please try a different area or postcode.</p>
          </div>
        )}

        {/* Bottom CTA: The Command Centre Hub */}
        <div className="mt-16 relative">
          <div className="bg-navy-900 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
            <div className="bg-navy-900 border border-white/10 rounded-[2.2rem] p-6 md:p-10 relative overflow-hidden">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 skew-x-[-20deg] translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="font-header text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
                    Outside Our Primary <br />
                    <span className="text-orange-500">Service Zones?</span>
                  </h3>
                  <p className="text-lg text-white mb-10 max-w-lg leading-relaxed">
                    We cover most of Surrey and surrounding areas for major projects and scheduled spraying work. If your area isn't listed, feel free to get in touch.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Priority response for CV postcodes",
                      "Full public liability insurance cover",
                      "10-Year Adhesion Guarantee",
                      "Free, no-obligation consultations"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-10">
                  <div className="bg-navy-800/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl w-full max-w-md text-center lg:text-right">
                    <p className="text-orange-500 font-black tracking-[0.3em] uppercase text-sm mb-4">Direct Contact</p>
                    <a href={`tel:${siteSettings.phoneFormatted}`} className="group block mb-8">
                      <div className="text-4xl md:text-5xl font-black text-white hover:text-orange-500 transition-colors flex items-center justify-center lg:justify-end gap-4">
                        <PhoneCall className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
                        {siteSettings.phone}
                      </div>
                    </a>
                    <Link 
                      to="/contact" 
                      className="inline-flex w-full lg:w-auto items-center justify-center gap-3 bg-white text-navy-900 hover:bg-orange-500 hover:text-white font-black px-8 py-5 rounded-2xl transition-all shadow-xl group"
                    >
                      GET A FREE QUOTE
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
