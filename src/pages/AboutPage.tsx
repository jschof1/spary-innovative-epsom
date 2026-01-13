import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { siteSettings } from "@/data/siteSettings"
import { Shield, Clock, Award, Heart, Phone, Zap, Map, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { TrustBar } from "@/components/sections/TrustBar"
import teamImage from "@/assets/team/south-london-plumbers-team.png"
import founderAlex from "@/assets/team/founder-alex.png"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" } as const
}

const stats = [
  { label: "Years in the Trade", value: "15+" },
  { label: "Jobs Completed", value: "25k+" },
  { label: "Expert Engineers", value: "12" },
  { label: "Response Time", value: "45min" },
]

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Our Team | {siteSettings.businessName} - South London's Finest</title>
        <meta name="description" content={`The story behind ${siteSettings.businessName}. We're not just plumbers; we're your South London neighbors committed to excellence since 2010.`} />
      </Helmet>

      <div className="overflow-hidden bg-white">
        {/* Bolder, More "Vibe" Hero */}
        <section className="relative pt-32 pb-48 bg-navy-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504148455328-497c596d22e0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 grayscale" />
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
                    <Zap className="w-4 h-4" />
                    <span>The South London Standard</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                    WE DON'T JUST FIX <br/>
                    <span className="text-orange-500">PIPES.</span> WE PROTECT <br/>
                    <span className="text-white underline decoration-orange-500 decoration-8 underline-offset-8">HOMES.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-medium">
                    South London's most trusted plumbing collective. Since 2010, we've been rewriting the rules of the trade with transparency, speed, and absolute precision.
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
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Available 24/7</div>
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
                  <div className="relative border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={teamImage} 
                      alt="The South London Plumbers Team" 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
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
                <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-6">Our Mission</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  WAGING WAR ON <span className="text-orange-500 italic">COWBOY</span> CONTRACTORS.
                </h3>
                <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-medium">
                  <p>
                    We founded {siteSettings.businessName} because we were tired of the "standard" trade experience. No-shows, hidden fees, and shoddy workmanship were giving our industry a bad name.
                  </p>
                  <p className="text-white border-l-4 border-orange-500 pl-6 py-2 italic">
                    "Our goal was simple: Be the plumbers we'd want in our own mothers' homes."
                  </p>
                  <p>
                    Since 2010, we've built our reputation on a foundation of absolute transparency. If a job doesn't need doing, we'll tell you. If we say we'll be there at 8:00 AM, we'll be there at 7:55 AM.
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
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" 
                    alt="Our professional plumber" 
                    className="w-full h-auto"
                  />
                </motion.div>
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-orange-500 text-navy-900 w-32 h-32 rounded-full flex items-center justify-center text-center p-4 z-20 shadow-2xl"
                >
                  <span className="text-sm font-black uppercase leading-tight">100% Local Expert</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The "Vibe" Values Grid */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">How We Work</h2>
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
                  title: "RAPID DEPLOYMENT",
                  desc: "When a pipe bursts, minutes matter. Our fleet is strategically positioned across South London for sub-60min response.",
                  icon: Clock,
                  color: "bg-navy-900"
                },
                {
                  title: "LIFETIME QUALITY",
                  desc: "We don't do 'quick fixes'. We use premium parts and provide a 12-month ironclad guarantee on everything.",
                  icon: Award,
                  color: "bg-orange-500"
                },
                {
                  title: "COMMUNITY FIRST",
                  desc: "We're South Londoners. We support local projects and prioritize senior citizens in our scheduling.",
                  icon: Heart,
                  color: "bg-navy-900"
                },
                {
                  title: "TECH-DRIVEN",
                  desc: "From digital diagnostic tools to real-time engineer tracking, we use technology to make your life easier.",
                  icon: Zap,
                  color: "bg-orange-500"
                },
                {
                  title: "LOCAL INTEL",
                  desc: "We know the quirks of Victorian terraces in Brixton and the plumbing of modern Greenwich builds.",
                  icon: Map,
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

        {/* Area Loyalty Section */}
        <section className="py-32 bg-orange-500 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-navy-900 p-12 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
              
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-6 text-center lg:text-left">Our Territory</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight text-center lg:text-left">
                    WE KNOW EVERY <span className="text-orange-500">STREET</span> IN SOUTH LONDON.
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Brixton", "Croydon", "Greenwich", "Bromley", "Lewisham", "Peckham", "Dulwich", "Clapham"].map((area, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80 font-bold py-2">
                        <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                    <p className="text-2xl text-white font-medium leading-relaxed mb-8">
                      "We don't waste time on GPS. Our engineers were born here, trained here, and work here. We know the shortcuts, we know the building styles, and we know our neighbors."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 shadow-lg">
                        <img 
                          src={founderAlex} 
                          alt="Alex Garnett - Founder" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-white font-black text-lg uppercase">Alex Garnett</div>
                        <div className="text-orange-500 font-bold text-sm tracking-widest uppercase">Founder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Heavyweight CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t-8 border-navy-900 pt-24">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black text-navy-900 leading-[0.9] tracking-tighter mb-8">
                  READY TO EXPERIENCE <br/>
                  <span className="text-orange-500 uppercase italic">A BETTER TRADE?</span>
                </h2>
                <p className="text-xl text-gray-600 font-bold max-w-lg">
                  Join the 25,000+ South Londoners who have made us their first call for everything from leaks to boilers.
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
