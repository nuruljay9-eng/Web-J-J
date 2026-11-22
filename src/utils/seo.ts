import { useEffect } from 'react';
import { Language } from '../types';

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  lang: Language;
  idPath: string;
  enPath: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schemas?: Record<string, unknown>[];
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeoHead(config: SeoConfig) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${config.path}`;
    const idUrl = `${origin}${config.idPath}`;
    const enUrl = `${origin}${config.enPath}`;
    const ogImg = config.ogImage
      ? config.ogImage.startsWith('http')
        ? config.ogImage
        : `${origin}${config.ogImage}`
      : `${origin}/src/assets/images/hero_modern_building_1795249578157.jpg`;

    document.documentElement.lang = config.lang;
    document.title = config.title;

    upsertMeta('meta[name="description"]', 'name', 'description', config.description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', config.ogType || 'website');
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', config.title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', config.description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImg);
    upsertMeta(
      'meta[property="og:locale"]',
      'property',
      'og:locale',
      config.lang === 'id' ? 'id_ID' : 'en_US'
    );
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', config.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', config.description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImg);

    upsertLink('canonical', canonicalUrl);
    upsertLink('alternate', idUrl, 'id');
    upsertLink('alternate', enUrl, 'en');
    upsertLink('alternate', idUrl, 'x-default');

    // Optional Google Search Console verification tag from env
    const gscToken = import.meta.env.VITE_GSC_VERIFICATION;
    if (typeof gscToken === 'string' && gscToken.trim().length > 0) {
      upsertMeta('meta[name="google-site-verification"]', 'name', 'google-site-verification', gscToken.trim());
    }

    // Optional Google Analytics 4 readiness from env
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (typeof gaId === 'string' && /^G-[A-Z0-9]{6,16}$/i.test(gaId.trim())) {
      const cleanGaId = gaId.trim();
      if (!document.head.querySelector(`script[data-ga-id="${cleanGaId}"]`)) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(cleanGaId)}`;
        gaScript.setAttribute('data-ga-id', cleanGaId);
        document.head.appendChild(gaScript);

        const win = window as unknown as {
          dataLayer?: unknown[];
          gtag?: (...args: unknown[]) => void;
        };
        win.dataLayer = win.dataLayer || [];
        win.gtag = function gtag(...args: unknown[]) {
          win.dataLayer?.push(args);
        };
        win.gtag('js', new Date());
        win.gtag('config', cleanGaId);
      }
    }

    // Dynamic per-page JSON-LD schemas
    const existingDynamic = document.head.querySelectorAll('script[data-dynamic-schema="true"]');
    existingDynamic.forEach((node) => node.remove());

    if (config.schemas && config.schemas.length > 0) {
      config.schemas.forEach((schemaObj) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-dynamic-schema', 'true');
        script.textContent = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }
  }, [
    config.title,
    config.description,
    config.path,
    config.lang,
    config.idPath,
    config.enPath,
    config.ogType,
    config.ogImage,
    config.schemas,
  ]);
}
