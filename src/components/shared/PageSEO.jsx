import { useEffect } from "react";

/**
 * PageSEO — injects per-page <title>, <meta> tags, canonical, OG, Twitter Card,
 * and optional JSON-LD schema into <head> using DOM manipulation.
 * Restores the home-page defaults on unmount.
 */
export default function PageSEO({ title, description, canonical, ogImage, schema }) {
  useEffect(() => {
    const BASE_TITLE = "Royal Catering Nashville | Wedding & Corporate Catering Nashville TN";
    const BASE_DESC  = "Royal Catering Nashville — Nashville's #1 catering company for weddings, corporate events & private parties. Custom menus, white-glove service, 15+ years of excellence. Call (615) 603-1262 for a free quote.";
    const BASE_CANONICAL = "https://royalcateringnashville.com/";
    const BASE_IMAGE = "https://media.base44.com/images/public/6a049c1bb802156b1d1612cd/3e638a7ac_generated_0f4fae53.png";

    const fullTitle = `${title} | Royal Catering Nashville`;
    const ogImg = ogImage || BASE_IMAGE;

    // ── title ──
    const prevTitle = document.title;
    document.title = fullTitle;

    // ── helper: set or create meta ──
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector.replace("meta[", "").replace("]", "").split('="');
        el.setAttribute(attrName, attrValue.replace('"', ""));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
      return el;
    };

    // ── helper: set or create link ──
    const setLink = (rel, value) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement("link"); el.rel = rel; document.head.appendChild(el); }
      const prev = el.href;
      el.href = value;
      return [el, prev];
    };

    // primary
    const descEl   = setMeta('meta[name="description"]', "content", description);
    const [canonEl, prevCanon] = setLink("canonical", canonical);

    // OG
    const ogTitleEl = setMeta('meta[property="og:title"]', "content", fullTitle);
    const ogDescEl  = setMeta('meta[property="og:description"]', "content", description);
    const ogUrlEl   = setMeta('meta[property="og:url"]', "content", canonical);
    const ogImgEl   = setMeta('meta[property="og:image"]', "content", ogImg);

    // Twitter
    const twTitleEl = setMeta('meta[name="twitter:title"]', "content", fullTitle);
    const twDescEl  = setMeta('meta[name="twitter:description"]', "content", description);
    const twImgEl   = setMeta('meta[name="twitter:image"]', "content", ogImg);

    // JSON-LD
    let schemaEl = null;
    if (schema) {
      schemaEl = document.createElement("script");
      schemaEl.type = "application/ld+json";
      schemaEl.id = "page-schema";
      schemaEl.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaEl);
    }

    return () => {
      // restore home defaults
      document.title = prevTitle || BASE_TITLE;
      descEl.setAttribute("content", BASE_DESC);
      canonEl.href = prevCanon || BASE_CANONICAL;
      ogTitleEl.setAttribute("content", BASE_TITLE);
      ogDescEl.setAttribute("content", BASE_DESC);
      ogUrlEl.setAttribute("content", BASE_CANONICAL);
      ogImgEl.setAttribute("content", BASE_IMAGE);
      twTitleEl.setAttribute("content", BASE_TITLE);
      twDescEl.setAttribute("content", BASE_DESC);
      twImgEl.setAttribute("content", BASE_IMAGE);
      if (schemaEl) schemaEl.remove();
    };
  }, [title, description, canonical, ogImage, schema]);

  return null;
}