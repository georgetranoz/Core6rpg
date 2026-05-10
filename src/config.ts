/** Set via `.env` (VITE_*) before launch; empty strings fall back to safe on-site anchors. */
export const siteOrigin =
  typeof window !== 'undefined' ? window.location.origin : '';

export const handbookPdfUrl =
  import.meta.env.VITE_HANDBOOK_PDF_URL?.trim() || '/books#handbook';

/** Live Hero Sheet deployment URL — empty until you wire hosting (see App page). */
export const heroSheetLiveUrl =
  import.meta.env.VITE_HERO_SHEET_URL?.trim() || '';

export const printStoreUrl =
  import.meta.env.VITE_PRINT_STORE_URL?.trim() || '/books#handbook';

/** GM Guide print/PDF — override when listings differ from the handbook store. */
export const gmGuidePrintUrl =
  import.meta.env.VITE_GM_GUIDE_PRINT_URL?.trim() || printStoreUrl;

export const gmGuidePdfUrl =
  import.meta.env.VITE_GM_GUIDE_PDF_URL?.trim() || '';

export const lumenosUrl = 'https://www.LumenosCity.com';

export const c6oglPdfUrl = import.meta.env.VITE_C6OGL_PDF_URL?.trim() || '';

/** Core6 Adventures — free PDF when hosted (otherwise in-page #download). */
export const adventuresPdfUrl =
  import.meta.env.VITE_ADVENTURES_PDF_URL?.trim() || '';

/** Physical Adventures softcover — falls back to general print store. */
export const adventuresSoftcoverUrl =
  import.meta.env.VITE_ADVENTURES_SOFTCOVER_URL?.trim() || printStoreUrl;

/**
 * Newsletter form action URL. Plug in any provider that accepts a standard
 * HTML form POST with an `email` field — e.g. Buttondown
 * (https://buttondown.email/api/emails/embed-subscribe/<slug>),
 * ConvertKit, or Mailchimp's embedded-form action URL.
 *
 * Leave unset for local dev — the form falls back to a no-op "thanks" state.
 */
export const newsletterActionUrl =
  import.meta.env.VITE_NEWSLETTER_ACTION_URL?.trim() || '';
