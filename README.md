# Other Lies — Official Website

Official website for **Other Lies**, an alternative rock band from Paris,
France.

## Overview

Built with vanilla HTML, CSS, and jQuery. No frameworks.

**Live site:** [otherlies.fr](https://otherlies.fr)
**EPK:** [otherlies.fr/epk.html](https://otherlies.fr/epk.html)

## Features

- **Responsive design** — breakpoints at 767px and 320px
- **Font Awesome 6.7.2** icons for all social links and section titles
- **Bandcamp embeds** — albums, singles, and tracks with responsive iframes
- **YouTube embeds** — live performance videos
- **Bandsintown widget** — upcoming shows
- **Contact form** — with anti-spot CAPTCHA and PHP SMTP backend
- **Newsletter subscription** — with email validation and PHP backend
- **Scroll animations** — `animatableX`, `animatableY`, `animatableOpacity` CSS classes
- **Parallax effect** — via Rellax.js
- **Lazy loading** — via lazyload.js for images
- **SEO** — Open Graph tags, Twitter cards, JSON-LD `MusicGroup` schema
- **Favicon set** — multi-size icons, Apple touch icon, Android Chrome icons, webmanifest

## Dependencies

All loaded via CDN (no local installation needed):

| Library | Purpose |
|---|---|
| jQuery 3.5.1 | DOM manipulation, AJAX forms |
| Font Awesome 6.7.2 | Icons |
| Rellax 1.12.1 | Parallax scrolling |
| GSAP 3.2.6 + ScrollMagic | Scroll-based animations |
| lazyload 2.0.0-rc.2 | Image lazy loading |
| Bandsintown widget | Show listings |

## Configuration

### Email addresses

In `js/mainFunctions.js`:

```js
let name = "contact";
let domain = "otherlies.fr";
```

### Form backend

In `datas/sendFormContact.php` and `datas/sendFormSubscription.php`, update:

- `$texte` — site name
- `$destinataire` — destination email
- `$objet` — email subject / band name
- `$conf` — SMTP credentials

### Social links

All social URLs are hardcoded in `index.html` and `epk.html`. Search for these domains to update:

- `facebook.com/otherliesofficial`
- `instagram.com/other_lies_official`
- `youtube.com/@otherliesofficial`
- `music.apple.com/artist/other-lies`
- `otherlies.bandcamp.com`

## Sections (index.html)

1. **Hero** — full-screen band photo with CTA and social share buttons
2. **Albums** — 2-column grid: text + Ultrablanc, then Surfacing + Beyond Fur
3. **Singles** — Bandcamp track embeds + press testimonials
4. **Band** — bio text and member photos
5. **Shows** — Bandsintown widget
6. **Newsletter** — email subscription form
7. **Discover** — YouTube live videos
8. **Contact** — contact form with email injection

## Deployment

The site is deployed on GitHub Pages via a custom domain (`CNAME`). No build step — static files are served as-is.

```
git push origin main
```
