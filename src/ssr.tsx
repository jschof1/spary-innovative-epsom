import { renderToString } from "react-dom/server"
import { HelmetProvider, type HelmetServerState } from "react-helmet-async"
import { MemoryRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { siteSettings } from "./data/siteSettings"
import { indexableSeoRoutes } from "./seo/routes"
import { collectVerificationErrors } from "./seo/verification"

export { indexableSeoRoutes, siteSettings, collectVerificationErrors }
export const render = (url: string) => {
  const helmetContext: { helmet?: HelmetServerState } = {}

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  )

  if (!helmetContext.helmet) {
    throw new Error(`Helmet context missing for route ${url}`)
  }

  return {
    appHtml,
    helmet: helmetContext.helmet,
  }
}
