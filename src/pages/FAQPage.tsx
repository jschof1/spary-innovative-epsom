import { Helmet } from "react-helmet-async"
import { FAQ } from "@/components/sections/FAQ"
import { CallToAction } from "@/components/sections/CallToAction"
import { TrustBar } from "@/components/sections/TrustBar"
import { siteSettings } from "@/data/siteSettings"
import { services } from "@/data/services"
import { motion } from "framer-motion"
import { MessageCircle, Phone, ArrowRight, HelpCircle, ShieldCheck, Clock, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export const FAQPage = () => {
  // Combine standard FAQs with service-specific FAQs for a comprehensive list
  const allFaqs = [
    ...siteSettings.standardFaqs,
    ...services.flatMap(s => s.faqs.map(faq => ({ ...faq, category: s.title })))
  ]

  const quickLinks = [
    { title: "Kitchen Resprays", slug: "kitchen-respray" },
    { title: "UPVC Windows", slug: "upvc-window-spraying" },
    { title: "UPVC Doors", slug: "upvc-door-spraying" },
    { title: "Furniture", slug: "furniture-spraying" },
  ]

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | {siteSettings.businessName}</title>
        <meta name="description" content="Find answers to common questions about our professional spray painting services in Epsom and Surrey. Learn about our process, 10-year guarantee, and more." />
        <link rel="canonical" href="https://sprayinnovative.co.uk/faq" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-navy-900 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold text-sm mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>Help Center</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Everything You Need <br/>
                <span className="text-orange-500">To Know.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Have questions about our spraying process, durability, or pricing? We've gathered the most common queries to help you make an informed decision.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/get-quote"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded shadow-xl transition-all flex items-center gap-2"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href={`tel:${siteSettings.phoneFormatted}`}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-orange-500" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Main FAQ Section */}
      <FAQ 
        title="Comprehensive FAQ" 
        subtitle="Search our help center or browse by category to find the answers you need."
        items={allFaqs} 
      />

      {/* Quick Help Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4">Still Looking for Info?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our specific services or get in touch directly for a personalized consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-navy-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Direct Support</h3>
              <p className="text-gray-600 mb-8">
                Speak directly with Paul for expert advice on your specific project needs.
              </p>
              <Link 
                to="/contact"
                className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Guarantee Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Our Guarantee</h3>
              <p className="text-gray-600 mb-8">
                Learn more about our industry-leading 10-year adhesion guarantee.
              </p>
              <Link 
                to="/about"
                className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-navy-100 text-navy-900 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Service Details</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {quickLinks.map(link => (
                  <Link 
                    key={link.slug}
                    to={`/services/${link.slug}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-full text-xs font-bold transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <Link 
                to="/services"
                className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-navy-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Ready to Transform <br/>
                  <span className="text-orange-500">Your Property?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Don't let unanswered questions hold you back. Get a free, no-obligation quote today and see how affordable a professional transformation can be.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="font-bold">Quotes provided within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    <span className="font-bold">10-Year Adhesion Guarantee included</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Link 
                  to="/get-quote"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-center font-black py-6 px-8 rounded-2xl shadow-2xl transition-all text-xl uppercase tracking-wider"
                >
                  Start My Quote
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white text-center font-bold py-6 px-8 rounded-2xl backdrop-blur-sm border border-white/20 transition-all text-xl"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
