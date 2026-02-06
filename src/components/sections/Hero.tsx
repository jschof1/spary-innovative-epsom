import { QuoteForm } from "@/components/forms/QuoteForm"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import cityAndGuildsLogo from "../../assets/logos/city-guilds.webp";
import heroBg from "../../assets/photos/generated/kitchen-respray-hero.webp";

interface HeroProps {
  title?: string | React.ReactNode
  subtitle?: string
  backgroundImage?: string
  showForm?: boolean
}

export const Hero = ({ 
  title = <>Professional <br/><span className="text-orange-500">Spray Painting</span> in Epsom & Surrey.</>,
  subtitle = "Expert on-site & off-site spray coatings for kitchens, windows, doors and more. Eco-friendly, durable finishes with 10 years experience.",
  backgroundImage = heroBg,
  showForm = true
}: HeroProps) => {
  return (
    <section className="relative min-h-[100dvh] flex items-start pt-12 lg:pt-16 pb-24 lg:pb-32 overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.85), rgba(0, 33, 71, 0.7)), url('${backgroundImage}')`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Hero Copy */}
          <div className={showForm ? "text-white text-center lg:text-left" : "text-center text-white max-w-4xl mx-auto"}>
            <motion.div 
              className="flex items-center space-x-2 mb-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google Reviews" 
                className="w-5 h-5"
              />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 stroke-[1.5px]" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-white/80 font-medium">Trusted Spraying Specialist</span>
            </motion.div>
            <h1 className="font-header font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 lg:mb-8">
              {title}
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 mb-6 lg:mb-10 max-w-lg mx-auto lg:mx-0 ${!showForm && "mx-auto max-w-2xl"}`}>
              {subtitle}
            </p>

            {/* Hidden image for SEO if backgroundImage is provided */}
            {backgroundImage && (
                <img 
                src={backgroundImage} 
                alt="Spray Innovative - Professional Spray Painting Services" 
                className="hidden" 
                aria-hidden="true"
              />
            )}
            
            {/* Trust Snippet */}
            <div className={`mt-6 lg:mt-10 flex flex-row items-center gap-3 lg:gap-6 justify-center lg:justify-start ${!showForm ? "justify-center" : ""}`}>
              <div className="flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm p-2 lg:p-3 rounded-lg border border-white/20 w-[calc(50%-6px)] sm:w-56 h-16 lg:h-20">
                <div className="flex-shrink-0 bg-white rounded-full p-1.5 lg:p-2 shadow-lg w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex text-yellow-400">
                    <Star className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 fill-current" />
                    <Star className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 fill-current" />
                    <Star className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 fill-current" />
                    <Star className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 fill-current" />
                    <Star className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 fill-current" />
                  </div>
                  <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-white truncate">5.0/5 Google</p>
                </div>
              </div>

              <div className="flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm p-2 lg:p-3 rounded-lg border border-white/20 w-[calc(50%-6px)] sm:w-56 h-16 lg:h-20">
                <div className="flex-shrink-0 bg-white rounded shadow-lg w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center text-center overflow-hidden">
                 <img src={cityAndGuildsLogo} alt="City & Guilds" className="w-full h-auto object-contain p-1" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-white leading-tight">Expert Spraying</p>
                  <p className="text-[8px] lg:text-[9px] font-medium uppercase tracking-widest text-white/60 truncate">10 Years Experience</p>
                </div>
              </div>
            </div>
        </div>

        {/* Hero Form */}
        {showForm && (
          <div className="w-full lg:ml-auto scroll-mt-24" id="booking-form">
            <QuoteForm />
          </div>
        )}
      </div>
    </div>
  </section>
  )
}
