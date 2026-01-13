import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteSettings } from "@/data/siteSettings"
import { HelpCircle, Search, MessageCircle, Phone, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
  category?: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  items?: FAQItem[]
}

export const FAQ = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our professional electrical services.",
  items = [
    ...siteSettings.standardFaqs,
    {
      category: "Emergency",
      question: "What should I do in an electrical emergency?",
      answer: "If you smell burning, see smoke, or have a complete power failure that isn't a local blackout, turn off your main power at the consumer unit (fuse box) if safe to do so and call me immediately at 07930 937358. I'm available 24/7 for urgent repairs."
    },
    {
      category: "EV Charging",
      question: "Do you install EV chargers at homes and businesses?",
      answer: "Yes, I am a specialist in EV charger installations. I can install a variety of leading brands and ensure the work is fully certified and compliant with current safety regulations."
    },
    {
      category: "Pricing",
      question: "How do you charge for your services?",
      answer: "For larger projects like rewires or EV charger installations, I provide a fixed, no-obligation quote. For smaller repairs or maintenance, I have a transparent hourly rate. I never charge hidden call-out fees."
    },
    {
      category: "Safety",
      question: "Will I receive a certificate for the electrical work?",
      answer: "Absolutely. All major electrical work is tested and I provide the relevant certification (EIC or MEIWC) upon completion. I also notify local building control where required by Part P regulations."
    }
  ]
}: FAQProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("All")

  if (items.length === 0) return null

  const categories = ["All", ...Array.from(new Set(items.map(item => item.category).filter(Boolean))) as string[]]
  
  const filteredItems = items.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.answer === 'string' ? item.answer : "Please contact us for more information."
      }
    }))
  }

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-xl mb-8 transform -rotate-6">
            <HelpCircle className="w-10 h-10 text-orange-500" />
          </div>
          <h2 className="font-header text-3xl md:text-5xl font-bold text-navy-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a question (e.g. 'EV', 'quote', 'fuse box')..."
              className="w-full pl-14 pr-6 py-5 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                  activeCategory === category 
                    ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12">
          {/* Main FAQ Accordion */}
          <div className="md:col-span-8">
            <div className="bg-white rounded-[2.5rem] p-3 md:p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredItems.length > 0 ? (
                  filteredItems.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border border-gray-100 rounded-2xl overflow-hidden px-2 hover:border-orange-200 transition-colors"
                    >
                      <AccordionTrigger className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:no-underline group">
                        <div className="flex flex-col gap-1 pr-8">
                          {faq.category && (
                            <span className="text-[10px] uppercase tracking-wider font-bold text-orange-500 mb-1">
                              {faq.category}
                            </span>
                          )}
                          <span className="font-bold text-navy-900 text-lg md:text-xl group-hover:text-orange-600 transition-colors leading-tight">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-0 text-gray-600 text-[17px] leading-relaxed">
                        <div className="pt-4 border-t border-gray-50">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg italic">No questions found matching your search.</p>
                  </div>
                )}
              </Accordion>
            </div>
          </div>

          {/* Sidebar Info/CTA */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-navy-900 text-white p-6 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform group-hover:scale-110 transition-transform">
                <MessageCircle className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Still have questions?</h3>
              <p className="text-navy-100 mb-8 relative z-10 leading-relaxed">
                I am available 24/7 to provide expert advice and emergency support across the Midlands.
              </p>
              <div className="space-y-4 relative z-10">
                <a 
                  href={`tel:${siteSettings.phoneFormatted}`} 
                  className="flex items-center gap-3 bg-white text-navy-900 w-full p-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all shadow-md"
                >
                  <Phone className="w-5 h-5 text-orange-500 group-hover:text-white" />
                  {siteSettings.phone}
                </a>
                <Link 
                  to="/contact" 
                  className="flex items-center justify-between bg-navy-800 text-white w-full p-4 rounded-xl font-bold hover:bg-navy-700 transition-all border border-navy-700"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-[2.5rem] border border-orange-100">
              <h4 className="font-bold text-navy-900 mb-4">Why DH Electrical?</h4>
              <ul className="space-y-4">
                {[
                  "24/7 Emergency Support",
                  "Fully Qualified & Certified",
                  "No Hidden Call-Out Fees",
                  "Professional & Reliable"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            My FAQ is regularly updated to provide the most accurate information on electrical safety, modern installations, and emergency procedures.
          </p>
        </div>
      </div>
    </section>
  )
}
