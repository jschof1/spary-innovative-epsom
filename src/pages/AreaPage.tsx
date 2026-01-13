import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getAreaBySlug } from "@/components/data/areas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteSettings } from "@/data/siteSettings";

import { 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  Phone, 
  Clock, 
  Shield, 
  Star, 
  ArrowRight,
  Droplets,
  Flame,
  Wrench,
  Hammer,
  FileText,
  BadgeCheck,
  Truck,
  MessageCircle,
  Construction
} from "lucide-react";

// Using Unsplash images for a professional look
const heroPlumber = "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200";
const serviceVan = "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1200";
const southLondonAerial = "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200";

const AreaPage = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const area = areaSlug ? getAreaBySlug(areaSlug) : null;

  if (!area) {
    return <Navigate to="/" replace />;
  }

  const localServices = [
    { icon: Droplets, title: "Emergency Leaks", desc: "Burst pipes & water damage control" },
    { icon: Flame, title: "Boiler Failures", desc: "Rapid diagnostics & same-day repairs" },
    { icon: Hammer, title: "Blocked Drains", desc: "High-pressure clearing & surveys" },
    { icon: Wrench, title: "General Plumbing", desc: "Taps, toilets & residential maintenance" }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": `${siteSettings.businessName} - ${area.name}`,
      "description": area.description || `Fastest emergency plumber in ${area.name}. Average response time ${area.emergencyTime}.`,
      "url": `https://southlondonplumbers.co.uk/locations/${area.slug}`,
      "telephone": siteSettings.phone,
      "image": heroPlumber,
      "areaServed": {
        "@type": "Place",
        "name": area.name,
        "containsPlace": area.postcodes.map((pc: string) => ({ "@type": "Place", "name": pc }))
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "London",
        "addressCountry": "GB"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southlondonplumbers.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://southlondonplumbers.co.uk/locations" },
        { "@type": "ListItem", "position": 3, "name": area.name, "item": `https://southlondonplumbers.co.uk/locations/${area.slug}` }
      ]
    }
  ];

  return (
    <div className="bg-white font-sans">
      <Helmet>
        <title>{area.metaTitle || `Emergency Plumber in ${area.name} | 24/7 ${area.name} Plumbing`}</title>
        <meta 
          name="description" 
          content={area.metaDescription || `Emergency plumber in ${area.name}. Average response time under ${area.emergencyTime}. No callout fees. Licensed, insured & Gas Safe registered. Call now for fast service in ${area.name}.`} 
        />
        <link rel="canonical" href={`https://southlondonplumbers.co.uk/locations/${area.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>
      
      <main>
        {/* SECTION 1: NAVY - Hero */}
        <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-navy-900">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src={southLondonAerial} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/80 to-navy-900" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-8 animate-fade-in">
                <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-orange-500">Locations</span>
                <span>/</span>
                <span className="text-white font-medium">{area.name}</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-slide-in-top shadow-lg shadow-orange-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Local Engineer Available in {area.name}
              </div>

              <h1 className="font-header font-extrabold text-5xl md:text-7xl text-white leading-tight mb-8 animate-slide-in-left uppercase">
                24/7 Emergency Plumber <br />
                <span className="text-orange-500 relative">
                  in {area.name}
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -z-10" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-fade-in delay-200">
                {area.description || `Professional, Gas Safe registered engineers serving ${area.name} and the surrounding area. Average arrival in under ${area.emergencyTime}.`}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-extrabold px-10 h-16 rounded-xl shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95">
                  <a href={`tel:${siteSettings.phoneFormatted}`} className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    Call {siteSettings.phone}
                  </a>
                </Button>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-orange-500 bg-navy-800 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${area.slug}${i}`} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-bold">Local Experts</p>
                    <p className="text-white/60">Ready in {area.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block overflow-hidden">
            <div className="relative h-full w-full">
              <img 
                src={heroPlumber} 
                className="absolute bottom-0 right-0 h-[110%] w-auto object-cover object-left opacity-40 mix-blend-overlay grayscale" 
                alt="" 
              />
              <div className="absolute inset-0 bg-gradient-to-l from-navy-900 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* SECTION 2: WHITE - Local Stats */}
        <section className="bg-white py-16 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Clock, label: "Response", value: area.emergencyTime },
                { icon: Shield, label: "Registered", value: "Gas Safe" },
                { icon: Star, label: "Rating", value: siteSettings.googleRating },
                { icon: CheckCircle2, label: "Coverage", value: area.postcodes[0] }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm border border-orange-500/20">
                    <stat.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl font-header font-bold text-navy-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: NAVY - The Local Difference */}
        <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <Badge variant="orange" className="mb-6 px-4 py-1.5 font-bold shadow-lg shadow-orange-500/10 uppercase tracking-wider">LOCAL EXPERTISE</Badge>
                <h2 className="font-header font-extrabold text-4xl md:text-5xl text-white mb-8 leading-tight uppercase">
                  Solving {area.name}'s <br />
                  <span className="text-orange-500">Plumbing Challenges</span>
                </h2>
                
                <div className="space-y-8">
                  <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                    {area.localContext || `From the historic properties in ${area.name} to the latest modern developments, our team understands the unique plumbing infrastructure of the area.`}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {localServices.map((service, i) => (
                      <div key={i} className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-orange-500/10">
                          <service.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-orange-500 transition-colors uppercase">{service.title}</h3>
                        <p className="text-sm text-white/60">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 border-4 border-white/10 group">
                  <img src={serviceVan} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt="" />
                </div>
                <div className="absolute inset-0 bg-orange-500 rounded-[2rem] -rotate-2 z-0 opacity-20" />
                
                <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 rounded-2xl shadow-2xl z-20 max-w-[280px] border border-orange-500/20">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />)}
                  </div>
                  <p className="text-sm italic text-gray-600 mb-4 font-medium leading-relaxed">
                    "Burst pipe in {area.name} at 2am. They were here in 30 mins. Saved my kitchen!"
                  </p>
                  <p className="text-xs font-bold text-navy-900 uppercase tracking-wider">— Local {area.name} Resident</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHITE - Neighborhood Guide */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-header font-extrabold text-4xl text-navy-900 mb-4 uppercase tracking-tight">Where We Operate</h2>
                <p className="text-lg text-gray-600">
                  Our engineers are stationed across {area.name} to ensure the fastest possible response times for all {area.postcodes.join(", ")} residents.
                </p>
              </div>
              <Button asChild variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-xl h-12 px-6">
                <Link to="/#areas" className="flex items-center gap-2">
                  View Full Coverage Area <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                {(area.landmarks || ["High Street", "Train Station", "Local Parks"]).map((landmark: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-transparent hover:border-orange-500/30 hover:bg-white transition-all group shadow-sm hover:shadow-md">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:scale-110 transition-transform border border-gray-100 group-hover:border-orange-500/20">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">{landmark}</h4>
                      <p className="text-xs text-gray-500 font-medium">Engineer stationed nearby</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-navy-900 text-white border-none rounded-[2rem] overflow-hidden shadow-xl shadow-navy-900/20 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Navigation className="text-orange-500 w-6 h-6" />
                    <h3 className="font-header font-bold text-2xl uppercase">Local Hubs</h3>
                  </div>
                  <ul className="space-y-4">
                    {(area.neighborhoods || area.postcodes).map((n: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-white/80 pb-4 border-b border-white/10 last:border-0 last:pb-0 font-medium group cursor-default">
                        <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 5: NAVY - Simple Process */}
        <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="orange" className="mb-4 px-4 py-1.5 font-bold uppercase tracking-wider">SIMPLE WORKFLOW</Badge>
              <h2 className="font-header font-extrabold text-4xl md:text-5xl text-white mb-4 uppercase">How It Works</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">Getting an emergency plumber in {area.name} is simple and transparent.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0" />
              {[
                { step: "01", title: "Call Dispatch", desc: "Our local {area.name} team takes your details and assesses the emergency.", icon: Phone },
                { step: "02", title: "Rapid Arrival", desc: "The nearest engineer to {area.name} is dispatched immediately.", icon: Truck },
                { step: "03", title: "Issue Resolved", desc: "We fix the problem, clean up, and provide a 12-month guarantee.", icon: BadgeCheck }
              ].map((item, i) => (
                <div key={i} className="relative z-10 bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 text-center hover:bg-white/10 transition-all hover:border-orange-500/30 group">
                  <div className="w-20 h-20 bg-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <p className="text-orange-500 font-black text-sm uppercase tracking-widest mb-2">Step {item.step}</p>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors uppercase">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc.replace("{area.name}", area.name)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: WHITE - Local FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="orange" className="mb-4 px-4 py-1.5 font-bold uppercase tracking-widest opacity-20">FAQ</Badge>
                <h2 className="font-header font-extrabold text-4xl text-navy-900 mb-8 uppercase tracking-tight">Frequently Asked <br /><span className="text-orange-500 relative">Questions in {area.name}<span className="absolute bottom-1 left-0 w-full h-2 bg-orange-500/10 -z-10" /></span></h2>
                <div className="space-y-4">
                  {[
                    { q: `What is the arrival time in ${area.name}?`, a: `On average, we reach ${area.name} residents in ${area.emergencyTime}. Since our engineers are local to the ${area.postcodes[0]} area, we bypass major traffic hubs.` },
                    { q: "Do you have Gas Safe engineers nearby?", a: "Yes, we have multiple Gas Safe registered specialists stationed across South London, including several who specifically cover your area." },
                    { q: "Are there extra costs for late-night calls?", a: "We maintain transparent pricing. While emergency rates apply, we never charge 'hidden' fees or call-out charges." }
                  ].map((faq, i) => (
                    <div key={i} className="p-6 bg-gray-50 rounded-xl border border-transparent hover:border-orange-500/30 hover:bg-white hover:shadow-md transition-all group">
                      <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-3 group-hover:text-orange-500 transition-colors uppercase">
                        <MessageCircle className="w-5 h-5 text-orange-500" />
                        {faq.q}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed pl-8">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full">
                <div className="bg-navy-900 rounded-[3rem] p-12 text-white h-full flex flex-col justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 text-orange-500">
                    <Construction className="w-64 h-64" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500" />
                  <h3 className="text-4xl font-header font-bold mb-6 relative z-10 uppercase">Planning a <span className="text-orange-500">Project?</span></h3>
                  <p className="text-white/70 mb-10 text-xl leading-relaxed relative z-10">We don't just do emergencies. If you're planning a bathroom renovation or boiler upgrade in {area.name}, we provide free site surveys.</p>
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-fit rounded-xl h-14 px-10 text-lg font-bold shadow-xl shadow-orange-500/20 relative z-10 transition-transform hover:scale-105 active:scale-95">
                    <a href={`tel:${siteSettings.phoneFormatted}`} className="flex items-center gap-3">
                      <FileText className="w-5 h-5" />
                      Book a Site Survey
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: NAVY - Trust Row */}
        <section className="py-16 bg-navy-900 border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-orange-500/5 opacity-30" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-white/60 uppercase tracking-[0.3em] font-bold text-xs mb-12">Fully Accredited & Certified</p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-100 grayscale transition-all duration-500 hover:grayscale-0">
              {/* Using standard logos from public/CDN for reliability */}
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Gas_Safe_Register_logo.svg/512px-Gas_Safe_Register_logo.svg.png" alt="Gas Safe" className="h-12 md:h-16 w-auto brightness-0 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/City_%26_Guilds_logo.svg/512px-City_%26_Guilds_logo.svg.png" alt="City & Guilds" className="h-10 md:h-14 w-auto brightness-0 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Vaillant_logo.svg/512px-Vaillant_logo.svg.png" alt="Vaillant" className="h-8 md:h-12 w-auto brightness-0 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Worcester_Bosch_logo.svg/512px-Worcester_Bosch_logo.svg.png" alt="Worcester Bosch" className="h-10 md:h-14 w-auto brightness-0 invert" />
            </div>
          </div>
        </section>

        {/* SECTION 8: ACCENT - Final CTA */}
        <section className="py-24 bg-orange-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-header font-extrabold text-5xl md:text-6xl mb-8 uppercase tracking-tight">
              Plumbing Emergency in {area.name}?
            </h2>
            <p className="text-2xl md:text-3xl mb-12 opacity-90 font-medium max-w-3xl mx-auto leading-relaxed">
              Call our {area.name} dispatch team now for a free quote and <span className="underline decoration-navy-900 decoration-4 underline-offset-8 font-black">{area.emergencyTime}</span> response.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href={`tel:${siteSettings.phoneFormatted}`} 
                className="group flex items-center gap-6 bg-navy-900 text-white px-10 py-6 rounded-2xl text-3xl font-header font-extrabold hover:scale-105 transition-all shadow-2xl shadow-navy-900/40"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                {siteSettings.phone}
              </a>
              <div className="text-left hidden md:block space-y-2">
                <p className="font-black text-xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-navy-900" /> No Callout Fees
                </p>
                <p className="font-black text-xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-navy-900" /> 12-Month Guarantee
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AreaPage;
