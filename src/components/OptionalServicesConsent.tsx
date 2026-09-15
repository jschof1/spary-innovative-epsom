import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CONSENT_KEY = "spray-innovations-optional-services"

const appendScript = (attributes: Record<string, string | boolean>) => {
  const consentId = attributes["data-uktl-consent"]
  if (document.querySelector("script[data-uktl-consent='" + consentId + "']")) return

  const script = document.createElement("script")
  Object.entries(attributes).forEach(([name, value]) => {
    if (typeof value === "boolean") script.toggleAttribute(name, value)
    else script.setAttribute(name, value)
  })
  document.head.appendChild(script)
}

const loadOptionalServices = () => {
  appendScript({
    defer: true,
    src: "https://analytics.aspectstudio.net/js/script.js",
    "data-domain": "sprayinnovations.co.uk",
    "data-uktl-consent": "plausible",
  })
  appendScript({
    src: "https://widgets.leadconnectorhq.com/loader.js",
    "data-resources-url": "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
    "data-widget-id": "69863f052ad2f70d6190767c",
    "data-uktl-consent": "leadconnector-chat",
  })
}

export const OptionalServicesConsent = () => {
  const [decision, setDecision] = useState<string | null>(() => {
    if (typeof window === "undefined") return null
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored === "accepted" || stored === "declined" ? stored : null
  })

  useEffect(() => {
    if (decision === "accepted") loadOptionalServices()
  }, [decision])

  const choose = (nextDecision: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, nextDecision)
    setDecision(nextDecision)
  }

  if (decision) return null

  return (
    <aside aria-label="Optional website services" className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-5 shadow-2xl" role="dialog">
      <h2 className="font-header text-lg font-black text-navy-900">Optional website services</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        With your permission, we use analytics to understand aggregated website use and load our optional chat service. These services are off unless you choose to accept.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Read our <Link className="font-bold text-orange-600 underline" to="/cookie-policy">Cookie Policy</Link> for details.
      </p>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button className="rounded-md border border-navy-900/30 px-4 py-2 text-sm font-bold text-navy-900" onClick={() => choose("declined")}>Decline optional services</button>
        <button className="rounded-md bg-orange-500 px-4 py-2 text-sm font-bold text-white" onClick={() => choose("accepted")}>Accept optional services</button>
      </div>
    </aside>
  )
}
