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
      description: "Available 24/7 for all electrical emergencies across Rugby and the Midlands."
    },
    {
      icon: ShieldCheck,
      title: "Fully Insured",
      description: "Your property is in safe hands. I carry full public liability insurance for all work."
    },
    {
      icon: Award,
      title: "Professional Guarantee",
      description: "All my repairs and installations come with a comprehensive workmanship guarantee."
    },
    {
      icon: CheckCircle2,
      title: "Certified Professional",
      description: "Fully qualified and registered to handle all residential and commercial electrical work."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Electrical Services | {siteSettings.businessName}</title>
        <meta name="description" content="Expert electrical services across Rugby and the Midlands. 24/7 emergency support, EV charger installations, and consumer unit upgrades." />
      </Helmet>

      <Hero 
        title={<>Professional <br/><span className="text-orange-500">Electrical Services</span> in Rugby.</>}
        subtitle="From emergency repairs to EV charger installations, I provide reliable, high-quality electrical solutions with transparent pricing."
        showForm={true}
      />

      <TrustBar />

      {/* Main Services Listing */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-20">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">What I Do</h2>
            <h3 className="text-4xl md:text-6xl font-black text-navy-900 mb-8 leading-tight">
              Comprehensive Electrical <br/>
              <span className="text-orange-500">Solutions for Every Need.</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              I specialize in providing top-tier electrical services tailored to the unique needs of homeowners and businesses in the Midlands. 
              From emergency repairs to complex smart home integrations, I bring technical excellence to every project.
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-navy-900 font-bold">
                        <CheckCircle2 className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">{feature}</span>
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

      {/* Why Choose Me / Benefits */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">My Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">Why Local Residents Trust My Work</h3>
            <p className="text-xl text-gray-300">
              I pride myself on delivering excellence through every installation and repair I undertake.
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
        subtitle="Common questions about my electrical services."
        items={allFaqs.length > 0 ? allFaqs : [
          {
            question: "Do you offer emergency services?",
            answer: "Yes, I provide 24/7 emergency electrical repairs across Rugby and the surrounding areas."
          },
          {
            question: "Are you qualified?",
            answer: "I am a fully qualified and certified electrician, registered for all types of residential electrical work."
          }
        ]} 
      />

      {/* Final CTA */}
      <section className="py-24 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-navy-900 mb-8">Ready to get started?</h2>
          <p className="text-xl md:text-2xl text-navy-900/80 mb-12 max-w-2xl mx-auto font-medium">
            Contact me today for a free, no-obligation quote or emergency assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact"
              className="bg-navy-900 text-white font-black py-5 px-12 rounded shadow-2xl hover:bg-navy-800 transition-all text-lg uppercase tracking-wider"
            >
              Book an Appointment
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

