// import niceicLogo from "../../assets/certifications/niceic240x172.png";
import trustpilotLogo from "../../assets/logos/trustpilot.svg";
import googleLogo from "../../assets/logos/Google__G__logo.svg";
import { motion } from "framer-motion";

export const TrustBar = () => {
  return (
    <section className="bg-white border-b border-gray-200 py-6" id="trust-logos">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="flex flex-col items-center">
            <img 
              src={niceicLogo} 
              alt="NICEIC Certified" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-[10px] font-bold mt-1 text-gray-500">Reg #7616886213</span>
          </div> */}
          
          <div className="flex items-center">
            <img 
              src={googleLogo} 
              alt="Google Reviews" 
              className="h-8 w-auto object-contain"
            />
          </div>

          <div className="flex items-center">
            <img 
              src={trustpilotLogo} 
              alt="Trustpilot" 
              className="h-8 w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}




