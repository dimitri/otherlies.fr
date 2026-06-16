# Other Lies — Official Website

Official website for **Other Lies**, an alternative rock band from Paris,
France.

## Overview

Built with vanilla HTML, CSS, and a single small vanilla-JS file. No
frameworks, no build step. Every local asset is referenced with a **relative
path**, so the site can be opened straight from disk (`file://`) — just
double-click `index.html` — as well as served over HTTP.

**Live site:** [otherlies.fr](https://otherlies.fr)
**EPK:** [otherlies.fr/epk.html](https://otherlies.fr/epk.html)

## Design system ("Ultrablanc")

- **Palette** (CSS variables in `css/style.css` `:root`):
  Polar Night `#0E141B`, Lake Blue `#3F8FC1`, Ice Blue `#8FD0F2`,
  Gel White `#F4F8FB`, Rose Fissure `#F27C8E`. Rose is used sparingly as the
  single loud accent.
- **Typography:** Fraunces (literary display serif) for headings + pull-quotes,
  Space Grotesk for UI and body — both via Google Fonts.
- **Section rhythm:** dark sections alternate with one full "light" section
  (the band bio, on gel white) and a photo-backed newsletter band, so the page
  doesn't read as one flat slab.
- **Motion:** scroll-reveal via `IntersectionObserver`; fully disabled under
  `prefers-reduced-motion`.

## Features

- Responsive layout (single breakpoint family around 860px / 767px)
- Fixed header that turns solid on scroll; accessible mobile drawer
  (`aria-expanded`, Escape-to-close)
- Bandcamp embeds (featured album, discography, singles) with responsive iframes
- YouTube live-video embeds
- Bandsintown widget for shows + email signup
- Stained-glass "Vitrail" logo featured in the Band and Contact sections
- Obfuscated `mailto:` contact link (assembled in JS)
- SEO: Open Graph, Twitter cards, JSON-LD `MusicGroup` schema, favicon set

## Dependencies

Only two third-party resources, both via CDN (plus embed widgets):

| Resource | Purpose |
|---|---|
| Google Fonts (Fraunces, Space Grotesk) | Typography |
| Font Awesome 6.7.2 | Brand + UI icons |
| Bandcamp / YouTube / Bandsintown | Embedded players & widgets |

> The previous jQuery + GSAP + ScrollMagic + Rellax + lazyload stack has been
> removed. Behaviour now lives in ~80 lines of vanilla JS (`js/mainFunctions.js`)
> and native `loading="lazy"` images.

## Structure

- `index.html` — main site (English): Hero · Ultrablanc (featured) · Singles ·
  Discography · Band (light) · Press · Shows · Newsletter · Discover · Contact
- `epk.html` — press kit (French): Hero · Contact/Media · Style & Influences ·
  Discography · Musicians · Press · Live
- `css/style.css` — full design system
- `js/mainFunctions.js` — header, mobile nav, scroll-reveal, back-to-top, mail
- `img/`, `photos/`, `videos/` — assets

## Configuration

- **Contact email** — `user` / `domain` in `js/mainFunctions.js`
- **Social links** — hardcoded in `index.html` / `epk.html`
  (`facebook.com/...`, `instagram.com/other_lies_official`,
  `youtube.com/@otherliesofficial`, `music.apple.com/...`,
  `otherlies.bandcamp.com`)

## Deployment

Deployed on GitHub Pages via a custom domain (`CNAME`). No build step — static
files are served as-is.

```
git push origin main
```
