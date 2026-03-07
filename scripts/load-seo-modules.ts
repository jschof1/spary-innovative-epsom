import { createServer, type ViteDevServer } from "vite"

type SsrModule = Awaited<ReturnType<ViteDevServer["ssrLoadModule"]>>

export const withSeoModules = async <T>(
  run: (modules: {
    routesModule: SsrModule
    sitemapModule?: SsrModule
    verificationModule?: SsrModule
  }) => Promise<T>,
  options?: {
    loadSitemapModule?: boolean
    loadVerificationModule?: boolean
  },
) => {
  const viteServer = await createServer({
    appType: "custom",
    optimizeDeps: {
      noDiscovery: true,
    },
    server: { middlewareMode: true },
  })

  try {
    const routesModule = await viteServer.ssrLoadModule("/src/seo/routes.ts")
    const sitemapModule = options?.loadSitemapModule
      ? await viteServer.ssrLoadModule("/src/seo/sitemap.ts")
      : undefined
    const verificationModule = options?.loadVerificationModule
      ? await viteServer.ssrLoadModule("/src/seo/verification.ts")
      : undefined

    return await run({
      routesModule,
      sitemapModule,
      verificationModule,
    })
  } finally {
    await viteServer.close()
  }
}
