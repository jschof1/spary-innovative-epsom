import { Helmet } from "react-helmet-async"
import { ArrowLeft, Phone } from "lucide-react"
import { Link } from "react-router-dom"

import { siteSettings } from "@/data/siteSettings"

export const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Page Not Found | {siteSettings.businessName}</title>
      <meta
        name="description"
        content="The page you requested could not be found. Return to Spray Innovations or contact us for help."
      />
      <meta name="robots" content="noindex, follow" />
    </Helmet>

    <section className="bg-navy-900 px-4 py-24 text-white md:py-36">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-orange-500">
          Error 404
        </p>
        <h1 className="mb-6 text-4xl font-black uppercase tracking-tight md:text-6xl">
          This page could not be found
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
          The link may be out of date or the address may have been typed
          incorrectly. You can return to the homepage or speak to us directly.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 px-7 py-4 font-black uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Return home
          </Link>
          <a
            href={`tel:${siteSettings.phoneFormatted}`}
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 font-black uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            Call {siteSettings.phone}
          </a>
        </div>
      </div>
    </section>
  </>
)
