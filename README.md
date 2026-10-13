# DSF website

Static HTML/CSS/JS. No build step: upload the folder contents to the web root and it runs.

## Folder structure

```
website/
├── index.html              Home (EN)
├── 404.html                Error page (uses root-absolute paths)
├── robots.txt              Crawlers + AI bots allowed, sitemap link
├── sitemap.xml             Add every page as it ships
├── llms.txt                Plain-language summary for AI assistants
├── site.webmanifest        App/icon metadata
├── favicon.svg, favicon-32.png, apple-touch-icon.png
├── .htaccess               Apache: 404, caching, compression, security headers
├── assets/
│   ├── css/  tokens.css    Design-system tokens (from /design-system, do not edit by hand)
│   │         fonts.css     Self-hosted @font-face
│   │         main.css      Site styles (RTL-ready via logical properties)
│   ├── js/   main.js       Nav, dropdowns, stream selector (progressive enhancement)
│   ├── fonts/              Lexend + Readex Pro (OFL), stand-ins for the licensed brand fonts
│   └── img/  brand/ patterns/ photos/ icons/ og/
├── docs/                   Internal notes, blocked from crawlers. Do not upload.
│
│   Planned (one folder + index.html per page, giving clean URLs like /company/about/):
├── company/ about/ model/ track-record/ leadership/
├── what-we-do/
├── feedstock/ uco/ soapstock-acid-oil/ waste-tyres/ future-streams/
├── businesses/ delta-oil/ delta-tyres/
├── proof/ certifications/ traceability/ impact/
├── insights/  careers/  contact/  legal/
└── ar/                     Arabic mirror of the whole tree (dir="rtl", lang="ar")
```

Links are relative (`company/about/`), so the site also works when opened from a subfolder or a local preview. On deeper pages, prefix with `../` as needed.

## Before go-live

1. Replace `https://www.example.com` with the real domain in `index.html` (canonical, hreflang, OG, JSON-LD), `robots.txt`, `sitemap.xml`, `llms.txt`.
2. Fill every element marked `class="tbc"` (search for `tbc`): export date, chain-of-custody standard, CO₂e and GHG figures.
3. Add the Delta Plus URL and LinkedIn URL (also add LinkedIn to JSON-LD `sameAs`).
4. Replace CVI mock-up photos in `assets/img/photos/` with real photography (keep 800w + 1600w, WebP + JPG).
   The hero video in `assets/video/` is a placeholder loop made from those mock-ups. Swap in real footage with the same file names (720p, 10-20 s, muted, ~1.5 MB each for WebM + MP4, plus a poster frame).
5. When brand fonts are licensed, add their `@font-face` rules to `fonts.css`.
6. In `.htaccess`, enable the HTTPS and canonical-host redirects; point the old Delta Oil domain to `/businesses/delta-oil/` with a 301.
7. Do not upload `docs/` or `README.md`.

## nginx equivalent

```nginx
error_page 404 /404.html;
location ^~ /docs/ { deny all; }
location ~* \.(css|js|woff2|svg|jpg|jpeg|png|webp)$ { expires 30d; add_header Cache-Control "public"; }
gzip on; gzip_types text/css application/javascript image/svg+xml application/json text/plain application/xml;
```

## SEO and AI-readiness built in

- One `<h1>` per page, ordered headings, landmarks (`header`, `nav`, `main`, `footer`), skip link.
- Unique `<title>` and meta description, canonical, hreflang (AR to add when it ships), Open Graph, Twitter card.
- JSON-LD `Organization` with `subOrganization` (Delta Oil, Delta Tyres, Delta Plus) mirroring the brand architecture, plus `WebSite` and `WebPage`.
- `robots.txt` explicitly allows AI crawlers; `llms.txt` gives assistants a factual summary to cite.
- Responsive images (`srcset`, WebP + JPG), explicit sizes to avoid layout shift, lazy loading below the fold, self-hosted fonts with preload.
