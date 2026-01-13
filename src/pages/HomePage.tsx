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

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{siteSettings.businessName} | Expert Plumbing in South London</title>
        <meta name="description" content="South London's most reliable plumbers. 24/7 emergency repairs, boiler installations, and more. 12-month guarantee on all work." />
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

