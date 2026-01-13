import { useState, useEffect } from "react"
import { CheckCircle, MapPin } from "lucide-react"

const locations = ["Clapham", "Brixton", "Wandsworth", "Greenwich", "Croydon", "Bromley", "Lewisham", "Putney", "Dulwich"]
const services = ["Boiler Repair", "Blocked Drain", "Emergency Leak", "Tap Replacement", "Gas Safety Check"]

export const RecentActivity = () => {
  const [activity, setActivity] = useState<{location: string, service: string, time: string} | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const showRandomActivity = () => {
      const location = locations[Math.floor(Math.random() * locations.length)]
      const service = services[Math.floor(Math.random() * services.length)]
      setActivity({ location, service, time: "just now" })
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 5000)
    }

    const timer = setInterval(showRandomActivity, 15000)
    // Initial delay
    setTimeout(showRandomActivity, 3000)

    return () => clearInterval(timer)
  }, [])

  if (!activity) return null

  return (
    <div 
      className={`fixed bottom-24 left-6 z-[60] transition-all duration-500 transform ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-sm">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <div className="flex-grow">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Live Activity</p>
          <p className="text-sm font-bold text-navy-900 leading-tight">
            New booking in <span className="text-orange-500">{activity.location}</span>
          </p>
          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {activity.service} • {activity.time}
          </p>
        </div>
      </div>
    </div>
  )
}

