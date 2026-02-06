import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Guarantee } from "@/components/sections/Guarantee"
import { Reviews } from "@/components/sections/Reviews"
import { FAQ } from "@/components/sections/FAQ"
import { getServiceBySlug } from "@/data/services"
import { getLocationBySlug } from "@/data/locations"
import { siteSettings } from "@/data/siteSettings"
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react"
import { getServiceSchema, getFAQSchema } from "@/lib/seo-schemas"

export const ServiceLocationPage = () => {
  const { locationSlug, serviceSlug } = useParams<{ locationSlug: string; serviceSlug: string }>()
  const location = getLocationBySlug(locationSlug || "")
  const service = getServiceBySlug(serviceSlug || "")

  if (!location || !service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <Link to="/" className="text-orange-500 hover:underline">Return to Home</Link>
      </div>
    )
  }

  const title = `${service.shortTitle} in ${location.name}`
  const description = `Need ${service.shortTitle.toLowerCase()} in ${location.name}? We offer professional, durable ${service.title.toLowerCase()} across the ${location.name} area and ${location.postcodes.join(", ")} postcodes.`

  const serviceSchema = getServiceSchema(service, location.name);
  const faqSchema = getFAQSchema(service.faqs.length > 0 ? service.faqs : siteSettings.standardFaqs);

  return (
    <>
      <Helmet>
        <title>{title} | {siteSettings.businessName}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://sprayinnovative.co.uk/locations/${location.slug}/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Hero 
        title={<>{service.shortTitle} in <br/><span className="text-orange-500">{location.name}</span></>}
        subtitle={description}
      />
      <TrustBar />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-8">
                Professional {service.title} for {location.name} Residents
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-12">
                <p className="mb-6">
                  If you're looking for a reliable professional for {service.title.toLowerCase()} in {location.name}, 
                  {siteSettings.businessName} is here to help. Based locally on Ewell By-Pass, we are familiar with the {location.name} area 
                  and can provide rapid response times for all your spraying needs.
                </p>
                {service.detailedContent && (
                  <p className="mb-6">
                    {service.detailedContent}
                  </p>
                )}
                <p className="mb-6">
                  We cover all postcodes in {location.name}, including {location.postcodes.join(" and ")}. 
                  Whether it's a kitchen respray or a major UPVC transformation, our work is performed by a fully qualified, insured specialist. 
                  We pride ourselves on providing {location.name} with transparent pricing and exceptional workmanship.
                </p>
              </div>

              {/* Localized Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    Rapid {location.name} Response
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Being local to {location.name} means we can often be with you on the same day for a consultation or to start your project.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    Local Expertise
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We have extensive experience working on properties across {location.name}, from modern developments to historic homes.
                  </p>
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-navy-900 text-white p-8 md:p-12 rounded-3xl mb-16">
                <h3 className="text-2xl font-bold mb-8">Included in our {service.shortTitle} Service</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process steps specifically for this service */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-navy-900 mb-8">How We Work in {location.name}</h3>
                <div className="space-y-6">
                  {service.processSteps.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white border-2 border-navy-900 p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-black text-navy-900 mb-4">Book in {location.name}</h3>
                  <p className="text-gray-600 mb-8 text-sm">
                    Get a professional, high-quality spray finish for your {service.shortTitle.toLowerCase()} needs in {location.name}.
                  </p>
                  
                  <Link 
                    to="/contact"
                    className="block w-full bg-orange-600 text-white font-black py-4 px-6 rounded-xl text-center hover:bg-orange-500 transition-all uppercase tracking-wider mb-6"
                  >
                    Request a Quote
                  </Link>

                  <a 
                    href={`tel:${siteSettings.phoneFormatted}`}
                    className="flex items-center justify-center gap-3 w-full bg-navy-900 text-white font-black py-4 px-6 rounded-xl hover:bg-navy-800 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call {siteSettings.phone}
                  </a>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-navy-900 mb-4">Other Areas near {location.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {siteSettings.businessName && <span className="sr-only">{siteSettings.businessName}</span>}
                    <p className="text-sm text-gray-500 mb-4">We also provide {service.shortTitle.toLowerCase()} in these nearby locations:</p>
                    {/* Add a few neighboring locations as suggestions */}
                    <div className="grid grid-cols-1 gap-2 w-full">
                      {["Epsom", "Ewell", "Banstead", "Leatherhead", "Sutton"]
                        .filter(l => l !== location.name)
                        .map(l => (
                          <Link 
                            key={l}
                            to={`/locations/${l.toLowerCase().replace(/\s+/g, '-')}/${service.slug}`}
                            className="text-navy-900 hover:text-orange-600 text-sm font-bold flex items-center justify-between group"
                          >
                            {l}
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Guarantee />
      <Reviews />
      <FAQ title={`${service.shortTitle} FAQs`} items={service.faqs.length > 0 ? service.faqs : siteSettings.standardFaqs} />
    </>
  )
}
