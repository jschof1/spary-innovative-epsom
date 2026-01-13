import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check, Lock } from "lucide-react"

export const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div id="form-success" className="text-center py-12 md:py-20 bg-white rounded-3xl shadow-2xl p-6 md:p-12 border-2 border-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-header font-bold text-navy-900 mb-4">Request Received!</h3>
          <p className="text-gray-600 text-base md:text-lg">Our dispatch team is being notified. We will call you shortly.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-5 md:p-10 border-2 border-orange-500 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-navy-900/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <h3 className="font-header text-2xl md:text-3xl font-bold text-navy-900 mb-2">Get Your Free Quote</h3>
          <p className="text-sm text-gray-600 px-4">Local professional serving Rugby & the Midlands</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 px-1">Full Name</label>
            <Input 
              type="text" 
              id="name" 
              required 
              placeholder="Your Name" 
              className="w-full px-4 py-4 md:py-6 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700 px-1">Phone Number</label>
              <Input 
                type="tel" 
                id="phone" 
                required 
                placeholder="Phone Number" 
                className="w-full px-4 py-4 md:py-6 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50" 
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="postcode" className="text-sm font-semibold text-gray-700 px-1">Postcode</label>
              <Input 
                type="text" 
                id="postcode" 
                required 
                placeholder="e.g. SW4" 
                className="w-full px-4 py-4 md:py-6 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50" 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="service" className="text-sm font-semibold text-gray-700 px-1">Service Needed</label>
            <Select>
              <SelectTrigger className="w-full px-4 py-6 md:py-7 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none bg-gray-50/50 text-gray-600">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ev">EV Charger Install</SelectItem>
                <SelectItem value="fusebox">Fuse Box Upgrade</SelectItem>
                <SelectItem value="rewire">Property Rewire</SelectItem>
                <SelectItem value="maintenance">Electrical Maintenance</SelectItem>
                <SelectItem value="lighting">Outside Lighting</SelectItem>
                <SelectItem value="other">Other Electrical Issue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 md:py-8 rounded-xl shadow-lg shadow-orange-500/20 transition-all text-lg md:text-xl uppercase tracking-wide mt-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? "Sending..." : "Get My Free Quote"}
          </Button>
          
          <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-wider font-semibold flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" />
            Your data is safe & private
          </p>
        </form>
      </div>
    </div>
  )
}





