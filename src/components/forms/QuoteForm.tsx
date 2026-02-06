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
import { siteSettings } from "@/data/siteSettings"
import { useToast } from "@/hooks/use-toast"

export const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Format phone number
    let formattedPhone = formData.phone.replace(/[^\d+]/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '+44' + formattedPhone.substring(1);
    } else if (formattedPhone.startsWith('44')) {
      formattedPhone = '+' + formattedPhone;
    } else if (!formattedPhone.startsWith('+') && formattedPhone.length > 0) {
      formattedPhone = '+44' + formattedPhone;
    }
    
    try {
      const response = await fetch(siteSettings.formApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: formattedPhone,
          source: "quote-form",
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setSubmitted(true)
      toast({
        title: "Request Received!",
        description: "Our team will be in touch shortly.",
      })
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
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
          <p className="text-sm text-gray-600 px-4">Local professional serving Epsom & Surrey</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 px-1">Full Name</label>
            <Input 
              type="text" 
              id="name" 
              required 
              placeholder="Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 md:py-6 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50" 
            />
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700 px-1">Phone Number</label>
            <Input 
              type="tel" 
              id="phone" 
              required 
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-4 md:py-6 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50" 
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="service" className="text-sm font-semibold text-gray-700 px-1">Service Needed</label>
            <Select 
              value={formData.service} 
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
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





