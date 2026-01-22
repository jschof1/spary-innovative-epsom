import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Zap, 
  Car, 
  Home, 
  Wrench, 
  Lightbulb, 
  MoreHorizontal, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Lock,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteSettings } from "@/data/siteSettings"
import { useToast } from "@/hooks/use-toast"

const steps = [
  { id: "service", title: "What do you need help with?" },
  { id: "urgency", title: "How soon do you need it?" },
  { id: "details", title: "Tell us a bit more" },
  { id: "contact", title: "Where should we send the quote?" },
]

const services = [
  { id: "ev", label: "EV Charger", icon: Car },
  { id: "fusebox", label: "Fuse Box", icon: Zap },
  { id: "rewire", label: "Rewiring", icon: Home },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
  { id: "lighting", label: "Lighting", icon: Lightbulb },
  { id: "other", label: "Other", icon: MoreHorizontal },
]

const urgencies = [
  { id: "emergency", label: "Emergency (ASAP)", icon: Clock, color: "text-red-500" },
  { id: "next-day", label: "Next 1-2 Days", icon: Calendar, color: "text-orange-500" },
  { id: "planning", label: "Planning Ahead", icon: Check, color: "text-green-500" },
]

export const MultiStepQuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    service: "",
    urgency: "",
    details: "",
    name: "",
    phone: "",
    email: "",
    postcode: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId })
    setTimeout(() => setCurrentStep(1), 300)
  }

  const handleUrgencySelect = (urgencyId: string) => {
    setFormData({ ...formData, urgency: urgencyId })
    setTimeout(() => setCurrentStep(2), 300)
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(siteSettings.quoteWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "multi-step-quote-form",
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setSubmitted(true)
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you with your quote shortly.",
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
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-8">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-header font-bold text-navy-900 mb-4">Request Received!</h3>
        <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
          Thank you for choosing DH Electrical. Alex will review your details and contact you shortly with a personalized quote.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-6 rounded-xl text-lg"
        >
          Back to Home
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-3">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center flex-1 ${index <= currentStep ? "text-orange-500" : "text-gray-300"}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 text-xs border-2 transition-colors ${
                index < currentStep ? "bg-orange-500 border-orange-500 text-white" : 
                index === currentStep ? "border-orange-500 text-orange-500 bg-white" : 
                "border-gray-200 bg-white"
              }`}>
                {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
      </div>

      <div className="min-h-[350px] flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl font-header font-bold text-navy-900 mb-6 text-center">
          {steps[currentStep].title}
        </h2>

        <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceSelect(service.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all hover:scale-105 active:scale-95 ${
                      formData.service === service.id 
                        ? "border-orange-500 bg-orange-50 text-orange-600 shadow-lg shadow-orange-500/10" 
                        : "border-gray-100 bg-gray-50/50 text-gray-600 hover:border-orange-200 hover:bg-white"
                    }`}
                  >
                    <service.icon className={`w-8 h-8 mb-2 ${formData.service === service.id ? "text-orange-500" : "text-gray-400"}`} />
                    <span className="font-semibold text-xs sm:text-sm">{service.label}</span>
                  </button>
                ))}
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                {urgencies.map((urgency) => (
                  <button
                    key={urgency.id}
                    type="button"
                    onClick={() => handleUrgencySelect(urgency.id)}
                    className={`flex items-center w-full p-4 rounded-xl border-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      formData.urgency === urgency.id 
                        ? "border-orange-500 bg-orange-50 text-orange-600 shadow-lg shadow-orange-500/10" 
                        : "border-gray-100 bg-gray-50/50 text-gray-600 hover:border-orange-200 hover:bg-white"
                    }`}
                  >
                    <div className={`p-2 rounded-full mr-3 bg-white shadow-sm ${urgency.color}`}>
                      <urgency.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-base">{urgency.label}</span>
                    {formData.urgency === urgency.id && <Check className="ml-auto w-5 h-5 text-orange-500" />}
                  </button>
                ))}
                <div className="pt-2 flex justify-start">
                  <Button type="button" variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-navy-900 text-xs">
                    <ArrowLeft className="w-3 h-3 mr-1" /> Back
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy-900 ml-1">What can we help you with? (Optional)</label>
                  <Textarea 
                    placeholder="Please describe the work needed..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="min-h-[100px] rounded-xl border-2 border-gray-100 focus:border-orange-500 transition-all text-sm p-3"
                  />
                </div>
                <div className="flex justify-between items-center gap-3">
                  <Button type="button" variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-navy-900 text-xs px-2">
                    <ArrowLeft className="w-3 h-3 mr-1" /> Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="flex-grow bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-xl text-lg font-bold shadow-lg shadow-orange-500/20"
                  >
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy-900 ml-1 flex items-center gap-1 uppercase tracking-wider">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="py-5 rounded-lg border-2 border-gray-100 focus:border-orange-500 bg-gray-50/50 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy-900 ml-1 flex items-center gap-1 uppercase tracking-wider">
                      <Phone className="w-3 h-3" /> Phone Number
                    </label>
                    <Input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="py-5 rounded-lg border-2 border-gray-100 focus:border-orange-500 bg-gray-50/50 text-sm"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy-900 ml-1 flex items-center gap-1 uppercase tracking-wider">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <Input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="py-5 rounded-lg border-2 border-gray-100 focus:border-orange-500 bg-gray-50/50 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-navy-900 ml-1 flex items-center gap-1 uppercase tracking-wider">
                      <MapPin className="w-3 h-3" /> Postcode
                    </label>
                    <Input 
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="py-5 rounded-lg border-2 border-gray-100 focus:border-orange-500 bg-gray-50/50 text-sm"
                      placeholder="CV23 8EH"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-7 rounded-xl text-xl font-bold shadow-xl shadow-orange-500/20 group relative overflow-hidden transition-all"
                  >
                    <span className="relative z-10">{loading ? "Submitting..." : "Get My Free Quote"}</span>
                  </Button>
                  <p className="text-center mt-4 text-[9px] text-gray-400 flex items-center justify-center gap-1 uppercase tracking-widest font-bold">
                    <Lock className="w-3 h-3" /> 100% Private & Secure
                  </p>
                </div>
                
                <div className="pt-1 flex justify-start">
                  <Button type="button" variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-navy-900 text-xs">
                    <ArrowLeft className="w-3 h-3 mr-1" /> Back
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  )
}
