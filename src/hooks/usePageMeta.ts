import { useEffect } from 'react';

/**
 * Sets the document title plus description / og:title / og:description /
 * twitter:title / twitter:description on every route change. Pages call this
 * once at the top of their render with their copy, no other plumbing needed.
 *
 * The og:image / twitter:image fall back to the values declared in index.html
 * (the handbook cover), which is what we want as a global default. Pages that
 * need a different sharing image can override later.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
  }, [title, description]);
}

function upsertMeta(attr: 'name' | 'property', key: string, value?: string) {
  if (!value) return;
  let meta = document.querySelector(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', value);
}
