import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { services } from "@/data/services"
import { Link } from "react-router-dom"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Reviews } from "@/components/sections/Reviews"
import { FAQ } from "@/components/sections/FAQ"
import { siteSettings } from "@/data/siteSettings"
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react"

export const ServicesPage = () => {
  const allFaqs = services.flatMap(s => s.faqs).slice(0, 6)

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Response",
      description: "We aim to be with you within 60 minutes for all plumbing emergencies in South London."
    },
    {
      icon: ShieldCheck,
      title: "Fully Insured",
      description: "Your property is in safe hands. We carry full public liability insurance for all work."
    },
    {
      icon: Award,
      title: "12-Month Guarantee",
      description: "All our repairs and installations come with a comprehensive 1-year workmanship guarantee."
    },
    {
      icon: CheckCircle2,
      title: "Gas Safe Registered",
      description: "Our engineers are fully certified to work on gas appliances and boiler systems."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Plumbing Services | {siteSettings.businessName}</title>
        <meta name="description" content="Expert plumbing, boiler, and drainage services across South London. 24/7 emergency support, Gas Safe registered engineers, and 12-month guarantees." />
      </Helmet>

      <Hero 
        title={<>Professional <br/><span className="text-orange-500">Plumbing Services</span> in South London.</>}
        subtitle="From emergency repairs to full boiler installations, our expert team provides reliable, high-quality plumbing solutions with transparent pricing."
        showForm={true}
      />

      <TrustBar />

      {/* Main Services Listing */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-black text-navy-900 mb-6 leading-tight">
              Comprehensive Solutions for Every <span className="text-orange-500">Plumbing Need.</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in providing top-tier plumbing services tailored to the unique needs of South London homeowners and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Image side */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-orange-600 flex items-center justify-center shadow-xl">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  <h3 className="text-3xl font-black text-navy-900 mb-6">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {["Fast Response", "Expert Engineers", "Fixed Pricing", "Quality Parts"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-navy-900 font-bold">
                        <CheckCircle2 className="w-5 h-5 text-orange-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white font-bold py-4 px-8 rounded hover:bg-navy-800 transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 border-2 border-navy-900 font-bold py-4 px-8 rounded hover:bg-gray-50 transition-colors"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Benefits */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">Why South London Trusts Our Team</h3>
            <p className="text-xl text-gray-300">
              We pride ourselves on delivering excellence through every pipe we fix and every boiler we install.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <div className="w-12 h-12 bg-orange-600 flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      
      <FAQ 
        title="Frequently Asked Questions" 
        subtitle="Common questions about our plumbing and heating services."
        items={allFaqs.length > 0 ? allFaqs : [
          {
            question: "Do you offer emergency services?",
            answer: "Yes, we provide 24/7 emergency plumbing services across South London. We aim to be on-site within 60 minutes."
          },
          {
            question: "Are your plumbers qualified?",
            answer: "All our engineers are fully qualified, and those working on gas appliances are Gas Safe registered."
          }
        ]} 
      />

      {/* Final CTA */}
      <section className="py-24 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-navy-900 mb-8">Ready to get started?</h2>
          <p className="text-xl md:text-2xl text-navy-900/80 mb-12 max-w-2xl mx-auto font-medium">
            Contact us today for a free, no-obligation quote or emergency assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact"
              className="bg-navy-900 text-white font-black py-5 px-12 rounded shadow-2xl hover:bg-navy-800 transition-all text-lg uppercase tracking-wider"
            >
              Book an Engineer
            </Link>
            <a 
              href={`tel:${siteSettings.phone}`}
              className="bg-white text-navy-900 font-black py-5 px-12 rounded shadow-2xl hover:bg-gray-50 transition-all text-lg uppercase tracking-wider flex items-center justify-center gap-3"
            >
              Call {siteSettings.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

