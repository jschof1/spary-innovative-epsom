import { Helmet } from "react-helmet-async"
import { MultiStepQuoteForm } from "@/components/forms/MultiStepQuoteForm"
import { siteSettings } from "@/data/siteSettings"
import { ShieldCheck, Star } from "lucide-react"
import { motion } from "framer-motion"

export const QuotePage = () => {
  return (
    <>
      <Helmet>
        <title>Get Your Free Quote | {siteSettings.businessName}</title>
        <meta name="description" content="Get a fast, free, no-obligation spray painting quote in minutes. Local spraying specialist serving Epsom and Surrey." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            damping: 15, 
            stiffness: 100 
          }}
          className="w-full max-w-xl relative z-10"
        >
          {/* Main Card */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
            {/* Header Area inside Card */}
            <div className="bg-orange-500 p-8 text-center">
              {/* <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                <Star className="w-3 h-3 fill-white" /> NICEIC Registered
              </div> */}
              <h1 className="text-3xl md:text-4xl font-header font-bold text-white mb-2">
                Get Your Fixed Quote
              </h1>
              <p className="text-orange-50 text-sm md:text-base max-w-md mx-auto opacity-90">
                Complete these quick steps to receive your personalized estimate.
              </p>
            </div>

            <div className="p-6 sm:p-10">
              <MultiStepQuoteForm />
            </div>

            {/* Trust Footer inside Card */}
            <div className="bg-gray-50 border-t border-gray-100 p-6">
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-tight">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-tight">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-tight">Fast Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Simple link back to home */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.location.href = "/"}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              ← Back to {siteSettings.businessName}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  )
}
