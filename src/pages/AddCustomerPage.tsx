import { Helmet } from "react-helmet-async"
import { useEffect } from "react"

export const AddCustomerPage = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script')
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Add Customer | Internal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-start bg-white">
        <div className="w-full max-w-4xl min-h-screen">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/ZYndXOmL8OiXQAUghKwz"
            style={{ width: '100%', height: '100%', border: 'none' }}
            id="inline-ZYndXOmL8OiXQAUghKwz" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Client Review + 1 Year Followup Sequence Form"
            data-height="763"
            data-layout-iframe-id="inline-ZYndXOmL8OiXQAUghKwz"
            data-form-id="ZYndXOmL8OiXQAUghKwz"
            title="Client Review + 1 Year Followup Sequence Form"
            className="w-full min-h-screen"
          >
          </iframe>
        </div>
      </div>
    </>
  )
}
