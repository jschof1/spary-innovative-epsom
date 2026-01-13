import niceicLogo from "../../assets/certifications/niceic240x172.png";
import checkatradeLogo from "../../assets/logos/checkatrade.svg";
import trustpilotLogo from "../../assets/logos/trustpilot.svg";
import googleLogo from "../../assets/logos/Google__G__logo.svg";

export const TrustBar = () => {
  return (
    <section className="bg-white border-b border-gray-200 py-6" id="trust-logos">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <img 
              src={niceicLogo} 
              alt="NICEIC Certified" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-[10px] font-bold mt-1 text-gray-500">Reg #7616886213</span>
          </div>
          
          <div className="flex items-center">
            <img 
              src={checkatradeLogo} 
              alt="Checkatrade" 
              className="h-8 w-auto object-contain"
            />
          </div>

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
        </div>
      </div>
    </section>
  )
}




