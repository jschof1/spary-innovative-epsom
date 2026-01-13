import { Users, Clock, Award, ShieldCheck } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Satisfied Clients",
    description: "Reliable service across the Midlands"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Cover",
    description: "Always available for urgent electrical repairs"
  },
  {
    icon: Award,
    value: "100%",
    label: "Quality Guaranteed",
    description: "Certified work to BS 7671 standards"
  },
  {
    icon: ShieldCheck,
    value: "Certified",
    label: "Fully Insured",
    description: "Comprehensive public liability protection"
  }
]

export const Stats = () => {
  return (
    <section className="bg-navy-900 py-12 md:py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-orange-500 group-hover:text-white" />
              </div>
              <div className="font-header text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="font-bold text-orange-500 uppercase tracking-wider text-sm mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm max-w-[200px] mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
