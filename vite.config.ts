import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const SSR_ASSET_PREFIX = "\0ssr-asset:"

/** In SSR prerender, resolve image/asset imports to a URL string so Node does not try to load them as modules. */
function ssrAssetPlugin() {
  const assetExt = /\.(webp|png|jpg|jpeg|gif|svg|ico|woff2?|eot|ttf|otf)(\?.*)?$/
  return {
    name: "ssr-asset-url",
    enforce: "pre" as const,
    resolveId(
      id: string,
      _importer: string | undefined,
      options: { ssr?: boolean },
    ) {
      // Only intercept in SSR so Node never tries to load image files as modules.
      if (options.ssr !== true) return null
      const normalized = id.replace(/^file:\/\//, "").replace(/\?.*$/, "")
      if (!assetExt.test(normalized)) return null
      return { id: SSR_ASSET_PREFIX + normalized, moduleSideEffects: false }
    },
    load(id: string) {
      if (!id.startsWith(SSR_ASSET_PREFIX)) return null
      const rest = id.slice(SSR_ASSET_PREFIX.length)
      const basename = path.basename(rest)
      return `export default ${JSON.stringify("/assets/" + basename)}`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ssrAssetPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: true,
  },
})
