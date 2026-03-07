#!/usr/bin/env node
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs"
import path, { dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const currentDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(currentDir, "..")
const distDir = resolve(projectRoot, "dist")
const distSsrDir = resolve(projectRoot, "dist-ssr")
const ssrEntryPath = resolve(distSsrDir, "ssr.js")
const templatePath = resolve(distDir, "index.html")
const assetsDir = resolve(distDir, "assets")
const sourceAssetsDir = resolve(projectRoot, "src", "assets")

const cleanHelmetMarkup = (value: string) =>
  value.replace(/\sdata-rh="true"/g, "")

const assetMap = new Map(
  existsSync(assetsDir)
    ? readdirSync(assetsDir).map((builtAsset) => [
        builtAsset.replace(/-[^-/.]+(?=\.[^.]+$)/, ""),
        `/assets/${builtAsset}`,
      ])
    : [],
)

const getMimeType = (assetPath: string) => {
  const ext = path.extname(assetPath).toLowerCase()
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg"
    case ".png":
      return "image/png"
    case ".webp":
      return "image/webp"
    case ".svg":
      return "image/svg+xml"
    case ".ico":
      return "image/x-icon"
    default:
      return "application/octet-stream"
  }
}

const sanitizeTemplate = (
  template: string,
  siteSettings: { businessName: string },
) =>
  template
    .replace(
      /<title>.*?<\/title>/s,
      `<title>${siteSettings.businessName}</title>`,
    )
    .replace(
      /\s*<meta(?:\s[^>]*?)?(?:name="(?:description|robots|googlebot|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g,
      "",
    )
    .replace(/\s*<link(?:\s[^>]*?)?rel="(?:canonical|alternate)"[^>]*>/g, "")
    .replace(
      /\s*<script(?:\s[^>]*?)?type="application\/ld\+json".*?<\/script>/gs,
      "",
    )
    .replace(/<div id="root">[\s\S]*?<\/div>/, '<div id="root"></div>')

/** Replace /assets/basename.ext (SSR placeholders) with built hashed paths. */
const rewriteSsrAssetPlaceholders = (html: string) => {
  let out = html
  for (const [baseName, builtPath] of assetMap) {
    out = out.replace(
      new RegExp(`/assets/${escapeRegExp(baseName)}(?=["'\\s>)])`, "g"),
      builtPath,
    )
  }
  return out
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

const rewriteSourceAssetUrls = (
  html: string,
  siteSettings: { baseUrl: string },
) =>
  html.replace(
    /https?:\/\/[^"'()\s>]+\/src\/assets\/([^"'()\s>]+)|\/src\/assets\/([^"'()\s>]+)/g,
    (match, absoluteAssetPath, relativeAssetPath) => {
      const assetPath = absoluteAssetPath ?? relativeAssetPath
      const assetName = path.basename(assetPath)
      const builtAssetPath = assetMap.get(assetName)

      if (!builtAssetPath) {
        const sourceAssetPath = resolve(sourceAssetsDir, assetPath)
        if (!existsSync(sourceAssetPath)) return match
        const assetBuffer = readFileSync(sourceAssetPath)
        return `data:${getMimeType(sourceAssetPath)};base64,${assetBuffer.toString("base64")}`
      }

      return match.startsWith("http")
        ? `${siteSettings.baseUrl}${builtAssetPath}`
        : builtAssetPath
    },
  )

const renderRouteHtml = (
  template: string,
  appHtml: string,
  helmet: Record<string, { toString(): string }>,
) => {
  const withTitle = template.replace(
    /<title>.*?<\/title>/s,
    cleanHelmetMarkup(helmet.title.toString()),
  )
  const withRoot = withTitle.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`,
  )
  return withRoot.replace(
    "</head>",
    `${cleanHelmetMarkup(helmet.meta.toString())}
${cleanHelmetMarkup(helmet.link.toString())}
${cleanHelmetMarkup(helmet.script.toString())}
  </head>`,
  )
}

const prerender = async () => {
  if (!existsSync(templatePath)) {
    throw new Error(
      "dist/index.html not found. Run build:static (vite build) first.",
    )
  }
  if (!existsSync(ssrEntryPath)) {
    throw new Error(
      "dist-ssr/ssr.js not found. Run build:ssr (vite build --ssr src/ssr.tsx) first.",
    )
  }

  const ssrModule = (await import(pathToFileURL(ssrEntryPath).href)) as {
    render: (url: string) => {
      appHtml: string
      helmet: Record<string, { toString(): string }>
    }
    indexableSeoRoutes: typeof import("../src/seo/routes").indexableSeoRoutes
    siteSettings: typeof import("../src/data/siteSettings").siteSettings
  }
  const { render: ssrRender, indexableSeoRoutes, siteSettings } = ssrModule

  const template = sanitizeTemplate(
    readFileSync(templatePath, "utf8"),
    siteSettings,
  )

  const originalConsoleError = console.error
  console.error = (...args: unknown[]) => {
    const [firstArg] = args
    if (
      typeof firstArg === "string" &&
      firstArg.includes("useLayoutEffect does nothing on the server")
    ) {
      return
    }
    originalConsoleError(...args)
  }

  try {
    for (const route of indexableSeoRoutes) {
      const outputPath = path.join(distDir, route.outputPath)
      const { appHtml, helmet } = ssrRender(route.path)
      const html = rewriteSsrAssetPlaceholders(
        rewriteSourceAssetUrls(
          renderRouteHtml(template, appHtml, helmet),
          siteSettings,
        ),
      )
      mkdirSync(dirname(outputPath), { recursive: true })
      writeFileSync(outputPath, html, "utf8")
      console.log(`Prerendered ${route.path} -> ${route.outputPath}`)
    }
  } finally {
    console.error = originalConsoleError
  }
}

await prerender()
