import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteSettings } from "@/data/siteSettings";
import { Lock, Check } from "lucide-react";

export const DiscountPage = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Format phone number
    let formattedPhone = formData.number.trim().replace(/[^\d+]/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '+44' + formattedPhone.substring(1);
    } else if (formattedPhone.startsWith('44')) {
      formattedPhone = '+' + formattedPhone;
    } else if (!formattedPhone.startsWith('+') && formattedPhone.length > 0) {
      formattedPhone = '+44' + formattedPhone;
    }

    try {
      const response = await fetch(siteSettings.discountApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formattedPhone,
          summary: formData.message.trim(),
          source: "discount-page",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      toast({
        title: "Discount Claimed!",
        description: "We've received your request and will be in touch shortly.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center py-12 bg-white rounded-3xl shadow-2xl p-6 border-2 border-orange-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-header font-bold text-navy-900 mb-4">Request Received!</h3>
            <p className="text-gray-600">We've received your discount request. We will call you shortly to discuss your project.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Special Offer | {siteSettings.businessName}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-orange-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-navy-900/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h1 className="font-header text-3xl font-bold text-navy-900 mb-2">Exclusive Discount</h1>
                <p className="text-gray-600">Fill in the form below to claim your special offer.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 px-1">Full Name</label>
                  <Input
                    id="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="number" className="text-sm font-semibold text-gray-700 px-1">Phone Number</label>
                  <Input
                    id="number"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 px-1">How can we help?</label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Briefly describe what you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-gray-50/50 min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-xl shadow-lg shadow-orange-500/20 transition-all text-lg uppercase tracking-wide mt-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? "Sending..." : "Claim Discount"}
                </Button>

                <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-wider font-semibold flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  Your data is safe & private
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
