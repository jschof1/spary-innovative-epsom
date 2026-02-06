import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Guarantee } from "@/components/sections/Guarantee"
import { Reviews } from "@/components/sections/Reviews"
import { FAQ } from "@/components/sections/FAQ"
import { getLocationBySlug } from "@/data/locations"
import { services } from "@/data/services"
import { siteSettings } from "@/data/siteSettings"

export const LocationPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>()
  const location = getLocationBySlug(locationSlug || "")

  if (!location) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
        <Link to="/" className="text-orange-500 hover:underline">Return to Home</Link>
      </div>
    )
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": `${siteSettings.businessName} - ${location.name}`,
    "description": `Professional spray painting services in ${location.name}. ${location.description}`,
    "url": `https://sprayinnovative.co.uk/locations/${location.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": "Surrey",
      "addressCountry": "GB"
    }
  };

  return (
    <>
      <Helmet>
        <title>{location.name} Spray Painting Services | {siteSettings.businessName}</title>
        <meta name="description" content={`Professional spray painting services in ${location.name}. ${location.description}`} />
        <link rel="canonical" href={`https://sprayinnovative.co.uk/locations/${location.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Hero 
        title={<>Professional Spray Painting in <br/><span className="text-orange-500">{location.name}</span></>}
        subtitle={location.description}
      />
      <TrustBar />
      
      <Services 
        title={`Spraying Services in ${location.name}`}
        services={services.map(s => ({ ...s, slug: `../locations/${location.slug}/${s.slug}` }))}
      />

      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Nearby Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {location.nearbyAreas.map(area => (
              <span key={area} className="bg-white/10 px-6 py-2 rounded-full border border-white/20">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Guarantee />
      <Reviews />
      <FAQ />
    </>
  )
}
