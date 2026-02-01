import { Helmet } from "react-helmet-async"
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
import { getLocalBusinessSchema } from "@/lib/seo-schemas"

export const HomePage = () => {
  const schema = getLocalBusinessSchema();

  return (
    <>
      <Helmet>
        <title>{siteSettings.businessName} | Expert Electrician in Rugby & Southam</title>
        <meta name="description" content="Professional electrical services across Rugby, Southam and Coventry. 24/7 emergency repairs, EV charger installations, and more. Certified work with free quotes." />
        <link rel="canonical" href="https://dhelectricalservice.co.uk/" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
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

