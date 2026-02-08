import { SEO } from "@/components/SEO"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Guarantee } from "@/components/sections/Guarantee"
import { Reviews } from "@/components/sections/Reviews"
import { FAQ } from "@/components/sections/FAQ"
import { Stats } from "@/components/sections/Stats"
import { Comparison } from "@/components/sections/Comparison"
import { CallToAction } from "@/components/sections/CallToAction"
import { ServiceAreas } from "@/components/sections/ServiceAreas"
import { BrandBenefits } from "@/components/sections/BrandBenefits"
import { RecentWork } from "@/components/sections/RecentWork"
import { siteSettings } from "@/data/siteSettings"
import { getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema, getBreadcrumbSchema } from "@/lib/seo-schemas"

export const HomePage = () => {
  const schema = [
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getWebsiteSchema(),
    getBreadcrumbSchema([
      { name: "Home", item: siteSettings.baseUrl }
    ])
  ]

  return (
    <>
      <SEO
        title={`${siteSettings.businessName} | Professional Spray Painting in Epsom & Surrey`}
        description="Expert on-site & off-site spray painting services in Epsom, Surrey. Specializing in kitchen resprays, UPVC window and door spraying. Eco-friendly, 10-year guarantee."
        pathname="/"
        jsonLd={schema}
      />
      
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <BrandBenefits />
      <CallToAction />
      <Process />
      <RecentWork />
      <Comparison />
      <Reviews />
      <ServiceAreas />
      <Guarantee />
      <FAQ />
    </>
  )
}

