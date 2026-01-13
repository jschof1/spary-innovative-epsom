import { QuoteForm } from "@/components/forms/QuoteForm"
import { FAQ } from "@/components/sections/FAQ"
import { Reviews } from "@/components/sections/Reviews"
import { TrustBar } from "@/components/sections/TrustBar"
import { siteSettings } from "@/data/siteSettings"
import { Phone, Mail, Clock, MapPin, CheckCircle2, ShieldCheck, Trophy, Zap } from "lucide-react"

export const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Form */}
      <section className="relative pt-8 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-50">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
            {/* Left side: Content & Trust */}
            <div className="flex-grow lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-xs md:sm font-bold mb-6 tracking-wide">
                <Zap className="w-4 h-4" />
                <span>RAPID 30-60 MINUTE RESPONSE</span>
              </div>
              
              <h1 className="font-header text-3xl md:text-6xl font-extrabold text-navy-900 mb-6 leading-[1.1]">
                Book Your Expert <span className="text-orange-500">London Plumber</span> Today
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Need a repair, installation, or emergency service? Fill out the form or call our 24/7 helpline. We're local, Gas Safe registered, and ready to help.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <a 
                  href={`tel:${siteSettings.phoneFormatted}`} 
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase">Call 24/7</span>
                    <span className="text-base md:text-lg font-bold text-navy-900">{siteSettings.phone}</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-navy-900">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase">Available</span>
                    <span className="text-base md:text-lg font-bold text-navy-900">24 Hours / 7 Days</span>
                  </div>
                </div>
              </div>

              {/* Benefit List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm md:text-base">No Call-Out Fees</p>
                    <p className="text-gray-500 text-xs md:text-sm">You only pay for the work we do. Free upfront quotes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm md:text-base">12-Month Guarantee</p>
                    <p className="text-gray-500 text-xs md:text-sm">All our work is fully insured and guaranteed for a full year.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm md:text-base">Gas Safe Registered</p>
                    <p className="text-gray-500 text-xs md:text-sm">Fully qualified engineers for your safety and peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div id="booking-form" className="w-full lg:w-[450px] lg:sticky lg:top-28 scroll-mt-24">
              <QuoteForm />
              
              {/* Trust badges below form for extra conversion */}
              <div className="mt-8 flex justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 text-center">Trusted Service Standards</span>
                  <div className="flex gap-6">
                    <ShieldCheck className="w-8 h-8 text-navy-900" />
                    <CheckCircle2 className="w-8 h-8 text-navy-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      
      {/* Secondary Contact Info / Map / Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">For non-urgent enquiries, quotes, or business partnership requests.</p>
              <a href={`mailto:${siteSettings.email}`} className="text-orange-500 font-bold hover:underline">
                {siteSettings.email}
              </a>
            </div>

            <div>
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Service Areas</h3>
              <p className="text-gray-600 mb-4">We are based in and serve all of South London including:</p>
              <p className="font-semibold text-navy-900">Greenwich, Croydon, Brixton, Bromley, Lewisham & more.</p>
            </div>

            <div>
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Response Times</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Emergency: 30 - 60 Mins</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Same Day Service: Available</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Planned Work: Next Day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <FAQ />
    </div>
  )
}

