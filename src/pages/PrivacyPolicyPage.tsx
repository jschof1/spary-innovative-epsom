import { Helmet } from "react-helmet-async"
import { siteSettings } from "@/data/siteSettings"
import { motion } from "framer-motion"

export const PrivacyPolicyPage = () => {
  const lastUpdated = "February 6, 2026"

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {siteSettings.businessName}</title>
        <meta name="description" content={`Privacy Policy for ${siteSettings.businessName}. Learn how we collect and protect your data.`} />
      </Helmet>

      <div className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4 uppercase tracking-tighter">
              Privacy <span className="text-orange-500">Policy</span>
            </h1>
            <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-sm">
              Last Updated: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">1. Introduction</h2>
                <p>
                  At {siteSettings.businessName}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our spray painting services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">2. Information We Collect</h2>
                <p>We may collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number, physical address).</li>
                  <li>Details of your property or spraying requirements.</li>
                  <li>Payment information (processed securely through our payment partners).</li>
                  <li>Communication history between you and {siteSettings.businessName}.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and manage our spray painting services.</li>
                  <li>To communicate with you regarding quotes, appointments, and service updates.</li>
                  <li>To process payments and maintain financial records.</li>
                  <li>To improve our website and customer service experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">4. Data Sharing and Disclosure</h2>
                <p>
                  We do not sell or rent your personal information to third parties. We may share your data with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in our business operations (e.g., payment processors).</li>
                  <li>Legal authorities if required by law or to protect our rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request the correction of inaccurate data.</li>
                  <li>Request the deletion of your data (subject to legal retention requirements).</li>
                  <li>Object to the processing of your data for certain purposes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-navy-900 mb-4 uppercase tracking-tight">7. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 border-l-4 border-orange-500 font-bold">
                  <p>{siteSettings.businessName}</p>
                  <p>{siteSettings.address}</p>
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
