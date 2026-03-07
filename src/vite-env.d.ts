/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_QUOTE_WEBHOOK_URL?: string
  readonly VITE_MAIN_FORM_WEBHOOK_URL?: string
  readonly VITE_NEGATIVE_REVIEW_WEBHOOK_URL?: string
  readonly VITE_DISCOUNT_FORM_WEBHOOK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "*.webp" {
  const src: string
  export default src
}
