#!/usr/bin/env node
import { createServer } from "node:http"
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { extname, dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import puppeteer, { type Browser, type Page } from "puppeteer-core"

import { withSeoModules } from "./load-seo-modules.ts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")
const distDir = join(rootDir, "dist")
const previewPort = 4173
const previewBaseUrl = `http://127.0.0.1:${previewPort}`

const resolveChromeExecutable = () => {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ]

  const executablePath = candidates.find((candidate) => candidate && existsSync(candidate))

  if (!executablePath) {
    throw new Error("No supported Chrome or Chromium executable found for prerendering.")
  }

  return executablePath
}

const mimeTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
}

const resolveRequestPath = (pathname: string) => {
  const relativePath = pathname.replace(/^\/+/, "")
  const exactPath = join(distDir, relativePath)

  if (existsSync(exactPath) && statSync(exactPath).isFile()) {
    return exactPath
  }

  if (pathname.endsWith("/")) {
    const indexPath = join(distDir, relativePath, "index.html")
    if (existsSync(indexPath)) {
      return indexPath
    }
  }

  if (!extname(pathname)) {
    const nestedIndexPath = join(distDir, relativePath, "index.html")
    if (existsSync(nestedIndexPath)) {
      return nestedIndexPath
    }

    return join(distDir, "index.html")
  }

  return null
}

const startPreviewServer = async () => {
  const server = createServer((request, response) => {
    const requestUrl = new URL(request.url ?? "/", previewBaseUrl)
    const filePath = resolveRequestPath(requestUrl.pathname)

    if (!filePath) {
      response.statusCode = 404
      response.end("Not found")
      return
    }

    const extension = extname(filePath)
    const content = readFileSync(filePath)

    response.statusCode = 200
    response.setHeader("Content-Type", mimeTypes[extension] ?? "application/octet-stream")
    response.end(content)
  })

  await new Promise<void>((resolve, reject) => {
    server.once("error", reject)
    server.listen(previewPort, "127.0.0.1", () => resolve())
  })

  return server
}

const launchBrowser = () =>
  puppeteer.launch({
    args: ["--disable-dev-shm-usage", "--no-sandbox", "--disable-setuid-sandbox"],
    executablePath: resolveChromeExecutable(),
    headless: true,
    protocolTimeout: 120_000,
  })

const renderRoute = async (
  page: Page,
  route: { path: string; title: string },
  expectedCanonical: string,
) => {
  await page.goto(`${previewBaseUrl}${route.path}`, {
    waitUntil: "networkidle0",
    timeout: 60_000,
  })

  await page.waitForFunction(
    (title, canonical) => {
      const canonicalLink = document.querySelector('link[rel="canonical"]')
      const descriptionMeta = document.querySelector('meta[name="description"]')

      return (
        document.title === title &&
        canonicalLink?.getAttribute("href") === canonical &&
        descriptionMeta?.getAttribute("content") !== null
      )
    },
    {
      timeout: 15_000,
    },
    route.title,
    expectedCanonical,
  )
}

const prerender = async () => {
  const previewServer = await startPreviewServer()
  let browser: Browser | null = await launchBrowser()

  try {
    const { getCanonicalUrl, indexableSeoRoutes } = await withSeoModules(async ({ routesModule }) => {
      const { getCanonicalUrl, indexableSeoRoutes } =
        routesModule as typeof import("../src/seo/routes.ts")
      return { getCanonicalUrl, indexableSeoRoutes }
    })

    for (const route of indexableSeoRoutes) {
      const expectedCanonical = getCanonicalUrl(route.path)
      let html: string | null = null

      for (let attempt = 1; attempt <= 2; attempt += 1) {
        const page = await browser.newPage()

        try {
          await renderRoute(page, route, expectedCanonical)
          html = await page.content()
          break
        } catch (error) {
          console.warn(`Retrying prerender for ${route.path} after navigation error.`)

          if (attempt === 2) {
            throw error
          }

          try {
            await browser.close()
          } catch {
            // Ignore browser shutdown errors during retry recovery.
          }

          browser = await launchBrowser()
          continue
        } finally {
          try {
            if (!page.isClosed()) {
              await page.close()
            }
          } catch {
            // Ignore cleanup failures when the browser connection has already dropped.
          }
        }
      }

      if (!html) {
        throw new Error(`Failed to prerender route: ${route.path}`)
      }

      const outputPath = join(distDir, route.outputPath)

      mkdirSync(dirname(outputPath), { recursive: true })
      writeFileSync(outputPath, html, "utf8")

      console.log(`Prerendered ${route.path} -> ${route.outputPath}`)
    }
  } finally {
    if (browser) {
      await browser.close()
    }
    await new Promise<void>((resolve, reject) => {
      previewServer.close((error) => {
        if (error) {
          reject(error)
          return
        }

        resolve()
      })
    })
  }
}

await prerender()
