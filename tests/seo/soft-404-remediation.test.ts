import { readFileSync } from "node:fs"
import { join } from "node:path"

import { describe, expect, it } from "vitest"

const projectRoot = join(__dirname, "../..")

describe("Soft 404 remediation", () => {
  it("links the FAQ to the valid kitchen resprays route", () => {
    const faqSource = readFileSync(
      join(projectRoot, "src/pages/FAQPage.tsx"),
      "utf8",
    )

    expect(faqSource).toContain(
      '{ title: "Kitchen Resprays", slug: "kitchen-resprays" }',
    )
    expect(faqSource).not.toContain(
      '{ title: "Kitchen Resprays", slug: "kitchen-respray" }',
    )
  })

  it("permanently redirects both legacy URL forms", () => {
    const redirects = readFileSync(
      join(projectRoot, "public/_redirects"),
      "utf8",
    )

    expect(redirects).toContain(
      "/services/kitchen-respray /services/kitchen-resprays/ 301",
    )
    expect(redirects).toContain(
      "/services/kitchen-respray/ /services/kitchen-resprays/ 301",
    )
  })
})
