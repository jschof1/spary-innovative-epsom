import { Helmet } from "react-helmet-async"
import { siteSettings } from "@/data/siteSettings"
import { motion } from "framer-motion"

export const CookiePolicyPage = () => {
  const lastUpdated = "January 16, 2026"

  return (
    <>
      <Helmet>
        <title>Cookie Policy | {siteSettings.businessName}</title>
        <meta name="description" content={`Cookie Policy for ${siteSettings.businessName}. Learn how we use cookies on our website.`} />
      </Helmet>

      <div className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4 uppercase tracking-tighter">
              Cookie <span className="text-orange-500">Policy</span>
            </h1>
            <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-sm">
              Last Updated: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">2. How We Use Cookies</h2>
                <p>We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensure our website functions correctly (Essential Cookies).</li>
                  <li>Understand how visitors interact with our website to improve performance (Analytical Cookies).</li>
                  <li>Remember your preferences and settings (Functional Cookies).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">3. Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Essential Cookies</h3>
                    <p>These are necessary for the website to function. They include, for example, cookies that enable you to log into secure areas or fill out forms.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Analytical/Performance Cookies</h3>
                    <p>They allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it. This helps us improve the way our website works.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Functional Cookies</h3>
                    <p>These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">4. Managing Cookies</h2>
                <p>
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">www.allaboutcookies.org</a>.
                </p>
                <p className="mt-4">
                  Please note that restricting cookies may impact the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">5. Contact Information</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 border-l-4 border-orange-500 font-bold">
                  <p>{siteSettings.businessName}</p>
                  <p>Email: {siteSettings.email}</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
