import { Helmet } from "react-helmet-async"
import { siteSettings } from "@/data/siteSettings"
import { motion } from "framer-motion"

export const TermsOfServicePage = () => {
  const lastUpdated = "January 16, 2026"

  return (
    <>
      <Helmet>
        <title>Terms of Service | {siteSettings.businessName}</title>
        <meta name="description" content={`Terms of Service for ${siteSettings.businessName}. Please read our terms and conditions carefully.`} />
      </Helmet>

      <div className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4 uppercase tracking-tighter">
              Terms of <span className="text-orange-500">Service</span>
            </h1>
            <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-sm">
              Last Updated: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">1. Acceptance of Terms</h2>
                <p>
                  By accessing our website or using the electrical services provided by {siteSettings.businessName}, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site or our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">2. Service Provision</h2>
                <p>
                  {siteSettings.businessName} provides professional electrical services. All work is carried out by qualified electricians in accordance with current BS 7671 safety standards. We reserve the right to refuse service to anyone for any reason at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">3. Quotes and Payments</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Quotes provided are valid for 30 days unless otherwise specified.</li>
                  <li>Invoices are due upon completion of work unless prior arrangements have been made.</li>
                  <li>We accept various payment methods as indicated on our website and invoices.</li>
                  <li>Late payments may be subject to interest charges.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">4. Cancellations and Rescheduling</h2>
                <p>
                  We understand that plans can change. We request at least 24 hours' notice for cancellations or rescheduling of appointments. Failure to provide adequate notice may result in a cancellation fee.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">5. Limitation of Liability</h2>
                <p>
                  {siteSettings.businessName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website. Our total liability for any claim arising out of or relating to our services shall not exceed the amount paid for those services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">6. Intellectual Property</h2>
                <p>
                  The content on this website, including text, graphics, logos, and images, is the property of {siteSettings.businessName} and is protected by copyright and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">7. Governing Law</h2>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">8. Changes to Terms</h2>
                <p>
                  {siteSettings.businessName} reserves the right to revise these Terms of Service at any time without notice. By using this website or our services, you are agreeing to be bound by the then-current version of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">9. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 border-l-4 border-orange-500 font-bold">
                  <p>{siteSettings.businessName}</p>
                  <p>Email: {siteSettings.email}</p>
                  <p>Phone: {siteSettings.phone}</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
