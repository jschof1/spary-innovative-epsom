/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Add VITE_* env vars here if needed for client
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "*.webp" {
  const src: string
  export default src
}
