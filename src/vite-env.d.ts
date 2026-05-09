/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HANDBOOK_PDF_URL?: string;
  readonly VITE_HERO_SHEET_URL?: string;
  readonly VITE_PRINT_STORE_URL?: string;
  readonly VITE_GM_GUIDE_PRINT_URL?: string;
  readonly VITE_GM_GUIDE_PDF_URL?: string;
  readonly VITE_C6OGL_PDF_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
