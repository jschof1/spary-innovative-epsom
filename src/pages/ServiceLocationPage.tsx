import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Process } from "@/components/sections/Process"
import { Guarantee } from "@/components/sections/Guarantee"
import { Reviews } from "@/components/sections/Reviews"
import { FAQ } from "@/components/sections/FAQ"
import { getServiceBySlug } from "@/data/services"
import { getLocationBySlug } from "@/data/locations"
import { siteSettings } from "@/data/siteSettings"

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
  const description = `Need ${service.shortTitle.toLowerCase()} in ${location.name}? We offer fast, reliable ${service.title.toLowerCase()} across the ${location.name} area and ${location.postcodes.join(", ")} postcodes.`

  return (
    <>
      <Helmet>
        <title>{title} | {siteSettings.businessName}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Hero 
        title={<>{service.shortTitle} in <br/><span className="text-orange-500">{location.name}</span></>}
        subtitle={description}
      />
      <TrustBar />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Professional {service.title} in {location.name}</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              If you're looking for a reliable professional for {service.title.toLowerCase()} in {location.name}, 
              {siteSettings.businessName} is here to help. Our local engineers are familiar with the {location.name} area 
              and can provide rapid response times for all your plumbing needs.
            </p>
            <p className="mb-4">
              We cover all postcodes in {location.name}, including {location.postcodes.join(" and ")}. 
              Whether it's a small repair or a major installation, our work comes with a 12-month guarantee 
              and is performed by fully qualified, insured professionals.
            </p>
          </div>
        </div>
      </section>

      <Process />
      <Guarantee />
      <Reviews />
      <FAQ title={`${service.shortTitle} FAQs`} items={service.faqs.length > 0 ? service.faqs : siteSettings.standardFaqs} />
    </>
  )
}

