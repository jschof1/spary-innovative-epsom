import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { siteSettings } from "@/data/siteSettings"
import { Shield, Clock, Award, Zap, Phone, Map, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { TrustBar } from "@/components/sections/TrustBar"
import vanImage from "@/assets/about/van-branded.webp"
import expertiseImage from "@/assets/about/expertise-branded.webp"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" } as const
}

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Surfaces Transformed", value: "500+" },
  { label: "Quality Guarantee", value: "10yr" },
  { label: "Availability", value: "7 Days" },
]

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | {siteSettings.businessName}</title>
        <meta name="description" content={`Learn more about ${siteSettings.businessName}. We are your local expert spray painting specialists serving Epsom, Ewell, and the surrounding areas.`} />
      </Helmet>

      <div className="overflow-hidden bg-white">
        {/* Bolder, More "Vibe" Hero */}
        <section className="relative pt-32 pb-48 bg-navy-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/90 to-white" />
          </div>
          
          {/* Animated Accents */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-3/5">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold mb-8 uppercase tracking-[0.2em]">
                    <Sparkles className="w-4 h-4" />
                    <span>Expert Spraying Specialists</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                    INNOVATIVE <span className="text-orange-500">SPRAY.</span> <br/>
                    EXPERT <br/>
                    <span className="text-white underline decoration-orange-500 decoration-8 underline-offset-8">RESULTS.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-medium">
                    Based in Epsom, Spray Innovative provides professional spray painting services across Surrey. We specialize in high-performance coatings that transform homes and commercial spaces with a factory-quality finish.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-black py-8 px-10 rounded-none shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-lg uppercase tracking-wider">
                      <Link to="/contact">Get a Quote</Link>
                    </Button>
                    <a 
                      href={`tel:${siteSettings.phoneFormatted}`} 
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                        <Phone className="w-6 h-6 text-white group-hover:text-orange-500" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Available 7 Days</div>
                        <div className="text-xl font-black text-white">{siteSettings.phone}</div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="lg:w-2/5"
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-orange-500/20 blur-2xl group-hover:bg-orange-500/30 transition-all rounded-full" />
                  <div className="relative border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-navy-800 aspect-[4/5]">
                    <img 
                      src={vanImage} 
                      alt="Spray Innovative Branded Van" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy-900 to-transparent">
                      <p className="text-white font-black text-2xl uppercase tracking-tighter leading-tight">Spray Innovative</p>
                      <p className="text-orange-500 font-bold uppercase tracking-[0.2em] mt-2">Local Spraying Experts</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Dynamic Stats Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-6xl md:text-7xl font-black text-navy-900/5 absolute -top-8 -left-4 group-hover:text-orange-500/10 transition-colors">
                    0{index + 1}
                  </div>
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-black text-navy-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-orange-600 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The "Why We Exist" Section - High Contrast */}
        <section className="py-32 bg-navy-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-10" />
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <motion.div className="lg:w-1/2" {...fadeIn}>
                <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-6">Our Expertise</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  QUALITY WORK FROM <span className="text-orange-500 italic">DEDICATED</span> SPECIALISTS.
                </h3>
                <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-medium">
                  <p>
                    Spray Innovative was founded with a clear mission: to provide high-quality, professional spray painting services that offer real value to homeowners and businesses.
                  </p>
                  <p className="text-white border-l-4 border-orange-500 pl-6 py-2 italic">
                    "We believe in quality, durability, and a finish that stands the test of time."
                  </p>
                  <p>
                    With over a decade of industry experience, our team has mastered the art of professional coatings, specializing in kitchen resprays, UPVC transformations, and commercial finishing.
                  </p>
                </div>
              </motion.div>
              
              <div className="lg:w-1/2 relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/10"
                >
                  <img 
                    src={expertiseImage} 
                    alt="Professional Spraying Expertise" 
                    className="w-full h-auto"
                  />
                </motion.div>
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-orange-500 text-navy-900 w-32 h-32 rounded-full flex items-center justify-center text-center p-4 z-20 shadow-2xl"
                >
                  <span className="text-sm font-black uppercase leading-tight">Fully Insured & Guaranteed</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The "Vibe" Values Grid */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Our Core Promise</h2>
              <h3 className="text-4xl md:text-5xl font-black text-navy-900 leading-tight">
                THE PRINCIPLES THAT <br/>
                <span className="text-orange-500">DRIVE US.</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "RADICAL HONESTY",
                  desc: "We provide upfront fixed quotes. No 'estimates', no hidden surcharges, and no 'extras' added at the end.",
                  icon: Shield,
                  color: "bg-orange-500"
                },
                {
                  title: "LOCAL & RELIABLE",
                  desc: "We are based locally on Ewell By-Pass for fast response in Epsom, Ewell, and surrounding areas.",
                  icon: Clock,
                  color: "bg-navy-900"
                },
                {
                  title: "LIFETIME QUALITY",
                  desc: "We don't do 'quick fixes'. We use premium coatings and provide a 10-year adhesion guarantee.",
                  icon: Award,
                  color: "bg-orange-500"
                },
                {
                  title: "LOCAL FIRST",
                  desc: "I'm your neighbor. I care about my local reputation and prioritize providing value to local residents.",
                  icon: Map,
                  color: "bg-navy-900"
                },
                {
                  title: "PREMIUM QUALITY",
                  desc: "Specialist in modern spray technology, from kitchen resprays to UV-resistant UPVC coatings.",
                  icon: Zap,
                  color: "bg-orange-500"
                },
                {
                  title: "CERTIFIED SAFETY",
                  desc: "We use premium water-based coatings with low VOCs, safe for your family and the environment.",
                  icon: CheckCircle,
                  color: "bg-navy-900"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="group p-10 border border-gray-100 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden bg-gray-50/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 ${value.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-navy-900 mb-4 tracking-tight">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Heavyweight CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t-8 border-navy-900 pt-24">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black text-navy-900 leading-[0.9] tracking-tighter mb-8">
                  READY TO TRANSFORM <br/>
                  <span className="text-orange-500 uppercase italic">YOUR HOME?</span>
                </h2>
                <p className="text-xl text-gray-600 font-bold max-w-lg">
                  Contact us today for a free, no-obligation quote for any spraying project.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                <Button asChild className="bg-navy-900 hover:bg-navy-800 text-white font-black py-10 px-12 rounded-none text-xl uppercase tracking-widest w-full sm:w-auto">
                  <Link to="/contact">Book Now</Link>
                </Button>
                <a 
                  href={`tel:${siteSettings.phoneFormatted}`}
                  className="bg-orange-500 text-white font-black py-10 px-12 rounded-none text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-600 transition-all w-full sm:w-auto"
                >
                  <Phone className="w-6 h-6" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
