import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Process } from "@/components/sections/Process"
import { Guarantee } from "@/components/sections/Guarantee"
import { Reviews } from "@/components/sections/Reviews"
import { FAQ } from "@/components/sections/FAQ"
import { services, getServiceBySlug } from "@/data/services"
import { locations } from "@/data/locations"
import { siteSettings } from "@/data/siteSettings"

export const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const service = getServiceBySlug(serviceSlug || "")

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-orange-500 hover:underline">Return to Home</Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | {siteSettings.businessName}</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <Hero 
        title={service.title}
        subtitle={service.description}
        backgroundImage={service.image}
      />
      <TrustBar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-black text-navy-900 mb-8">Expert {service.title} in the Midlands</h2>
              <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                <p className="text-xl leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                <p>
                  At {siteSettings.businessName}, I understand that electrical issues can be stressful and potentially dangerous. 
                  That's why I offer a rapid, reliable, and professional service designed to get your electrical systems safe and functional as quickly as possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-navy-900 mb-2">Why Choose Me?</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        <span>Fully Qualified & Registered</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        <span>Transparent Fixed Pricing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        <span>Professional Workmanship Guarantee</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-navy-900 mb-2">My Coverage</h4>
                    <p className="text-sm">
                      I provide {service.shortTitle.toLowerCase()} services throughout Rugby, Southam, Leamington Spa, Warwick, and Coventry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 mb-16">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Need help right now?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  I am standing by to assist with your {service.shortTitle.toLowerCase()} needs. 
                  Get a free quote or book an emergency call-out today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact"
                    className="bg-orange-600 text-white font-black py-4 px-8 rounded hover:bg-orange-500 transition-all text-center"
                  >
                    Book Now
                  </Link>
                  <a 
                    href={`tel:${siteSettings.phone}`}
                    className="bg-navy-900 text-white font-black py-4 px-8 rounded hover:bg-navy-800 transition-all text-center"
                  >
                    Call {siteSettings.phone}
                  </a>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-navy-900 mb-8">Areas I Cover for {service.shortTitle}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
                {locations.map(location => (
                  <Link 
                    key={location.id}
                    to={`/locations/${location.slug}/${service.slug}`}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center font-bold text-navy-900 border border-gray-200 hover:border-orange-500 group"
                  >
                    <span className="group-hover:text-orange-600 transition-colors">{location.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <div className="bg-navy-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
                  <p className="text-gray-400 mb-8">
                    Fill out our simple form and we'll get back to you within 15 minutes with a transparent quote.
                  </p>
                  <Link 
                    to="/contact"
                    className="block w-full bg-orange-600 text-white font-black py-4 px-6 rounded text-center hover:bg-orange-500 transition-all uppercase tracking-wider mb-4"
                  >
                    Request a Quote
                  </Link>
                  <p className="text-center text-xs text-gray-500 uppercase tracking-widest font-bold">
                    No-obligation & Transparent
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Other Services</h3>
                  <div className="space-y-4">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <Link 
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium group transition-colors"
                      >
                        <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center rounded group-hover:border-orange-500 transition-colors">
                          <s.icon className="w-4 h-4" />
                        </div>
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <Guarantee />
      <Reviews />
      <FAQ title={`${service.shortTitle} FAQs`} items={service.faqs} />
    </>
  )
}

