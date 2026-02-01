import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Guarantee } from "@/components/sections/Guarantee"
import { Reviews } from "@/components/sections/Reviews"
import { FAQ } from "@/components/sections/FAQ"
import { services, getServiceBySlug } from "@/data/services"
import { locations } from "@/data/locations"
import { siteSettings } from "@/data/siteSettings"
import { CheckCircle2, ArrowRight, Phone, Mail, Clock, ShieldCheck, Star } from "lucide-react"
import { getServiceSchema, getFAQSchema } from "@/lib/seo-schemas"

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

  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <>
      <Helmet>
        <title>{service.title} | {siteSettings.businessName}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://dhelectricalservice.co.uk/services/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
              <div className="mb-12">
                <h2 className="text-4xl font-black text-navy-900 mb-8 leading-tight">
                  Expert {service.title} <br/>
                  <span className="text-orange-500 text-3xl">Professional Service in the Midlands</span>
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p className="text-xl leading-relaxed text-navy-900 font-medium italic border-l-4 border-orange-500 pl-6">
                    {service.longDescription}
                  </p>
                  {service.detailedContent && (
                    <p className="text-gray-600 leading-relaxed">
                      {service.detailedContent}
                    </p>
                  )}
                  <p>
                    At {siteSettings.businessName}, I understand that electrical installations and repairs require precision, safety, and reliability. 
                    I provide a comprehensive {service.shortTitle.toLowerCase()} service tailored to your specific needs, ensuring all work 
                    meets the highest industry standards (BS 7671).
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-orange-500/30 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                      <benefit.icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                    </div>
                    <h4 className="font-bold text-navy-900 mb-3 text-lg">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="bg-navy-900 rounded-3xl p-8 md:p-12 mb-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">What's Included in My {service.shortTitle} Service</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1 bg-orange-500 rounded-full p-1">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-navy-900 mb-10 text-center lg:text-left">The {service.shortTitle} Process</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {service.processSteps.map((step, i) => (
                    <div key={i} className="relative">
                      {i < service.processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-100 -ml-4 z-0" />
                      )}
                      <div className="relative z-10 text-center lg:text-left">
                        <div className="w-16 h-16 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                          <span className="text-2xl font-black text-navy-900">{i + 1}</span>
                        </div>
                        <h4 className="font-bold text-navy-900 mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-orange-50 p-8 md:p-12 rounded-3xl border border-orange-100 mb-16">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Service Areas for {service.shortTitle}</h3>
                <p className="text-gray-700 mb-8">
                  I provide professional {service.shortTitle.toLowerCase()} services to homeowners and businesses throughout the following locations:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {locations.map(location => (
                    <Link 
                      key={location.id}
                      to={`/locations/${location.slug}/${service.slug}`}
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center font-bold text-navy-900 border border-gray-100 hover:border-orange-500 group flex items-center justify-center gap-2"
                    >
                      <span className="group-hover:text-orange-600 transition-colors">{location.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-orange-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white border-2 border-navy-900 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full" />
                  <h3 className="text-2xl font-black text-navy-900 mb-6">Get a Fast Quote</h3>
                  <p className="text-gray-600 mb-8">
                    Need {service.shortTitle.toLowerCase()} advice? Fill out the form or call me directly for a transparent, no-obligation estimate.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <a href={`tel:${siteSettings.phoneFormatted}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-navy-900 text-white rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Call Me Directly</p>
                        <p className="text-lg font-black text-navy-900">{siteSettings.phone}</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteSettings.email}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gray-100 text-navy-900 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Email Me</p>
                        <p className="text-sm font-bold text-navy-900 break-all">{siteSettings.email}</p>
                      </div>
                    </a>
                  </div>

                  <Link 
                    to="/contact"
                    className="block w-full bg-orange-600 text-white font-black py-5 px-6 rounded-xl text-center hover:bg-orange-500 transition-all uppercase tracking-wider shadow-lg shadow-orange-600/20"
                  >
                    Request a Quote
                  </Link>
                </div>

                {/* Trust Elements Sidebar */}
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
                  <h4 className="font-bold text-navy-900 mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    Why Choose Me?
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { icon: Clock, text: "Fast Response Times" },
                      { icon: Star, text: "5.0 Google Rating" },
                      { icon: ShieldCheck, text: "Fully Insured & Qualified" },
                      { icon: CheckCircle2, text: "Workmanship Guaranteed" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-navy-900">
                        <item.icon className="w-4 h-4 text-orange-500" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other Services */}
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Other Expert Services</h3>
                  <div className="space-y-4">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <Link 
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium group transition-colors"
                      >
                        <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center rounded-lg group-hover:border-orange-500 transition-colors">
                          <s.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold">{s.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Guarantee />
      <Reviews />
      <FAQ title={`${service.shortTitle} FAQs`} items={service.faqs} />
    </>
  )
}

