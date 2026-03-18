# BetaWerkz Next.js — Project Log

## Stack
- Next.js 14.2.5 (App Router)
- React 18, TypeScript
- Fonts: Bebas Neue, Inter, JetBrains Mono (Google Fonts)

---

## Run
```bash
npm install
npm run dev     # localhost:3000
npm run build   # production build
```

---

## File Structure
```
betawerkz-fixed/
├── public/
│   └── og-image.png          ← 1200×630 OG social image
├── app/
│   ├── globals.css
│   ├── layout.tsx             ← Full SEO metadata + JSON-LD
│   ├── page.tsx               ← Home page
│   ├── sitemap.ts             ← Auto sitemap.xml
│   ├── robots.ts              ← Auto robots.txt
│   └── pricing/
│       └── page.tsx           ← Pricing page
├── components/
│   ├── ClientScripts.tsx      ← Cursor, scroll anims, logo, nav, hamburger
│   ├── Works.tsx              ← Portfolio grid + overlay
│   └── Quote.tsx              ← Contact form
├── lib/
│   ├── clients.ts
│   ├── logo.ts
│   ├── process.ts
│   ├── projects.ts
│   └── services.ts
├── next.config.mjs
├── package.json
└── tsconfig.json
```

---

## Bugs Fixed

| # | File | Issue | Fix |
|---|------|-------|-----|
| 1 | `app/layout.tsx` | `React.ReactNode` used without React import → TS build error | Added `import React from 'react'` |
| 2 | `lib/services.ts` + `lib/process.ts` | `&amp;` HTML entities rendered literally | Replaced with plain `&` |
| 3 | `next.config.ts` | Next.js 14 doesn't support `.ts` config (v15+ only) | Renamed to `next.config.mjs` with JSDoc types |
| 4 | `app/globals.css` | File had `<style>...</style>` HTML tags — entire stylesheet invalid | Extracted pure CSS from reference HTML |

---

## Design Fixes

| File | Fix |
|------|-----|
| `app/globals.css` | `.srvhd` changed to `flex-direction:column` — intro paragraph was floating beside heading |
| `app/page.tsx` | `srvintro` moved inside heading div, flows below "OUR SERVICES" |
| `app/globals.css` | `.pcta-btn` font-size `9px` → `13px`, padding increased |

---

## SEO Implementation (`app/layout.tsx`)
- `viewport` meta (mobile, themeColor `#03040a`)
- `title` with page template (`%s | Beta Werkz`)
- `description`, `keywords`, `authors`, `creator`, `publisher`
- `robots` — full indexing + Googlebot directives
- `canonical` URL
- Open Graph (`og:title`, `og:description`, `og:image` 1200×630, `og:locale`, `og:url`)
- Twitter Card (`summary_large_image`)
- Favicon + Apple icon references
- `manifest.json` reference
- JSON-LD structured data — ProfessionalService schema (address, contact, services catalog)

**New SEO files**
- `app/sitemap.ts` → auto-generates `/sitemap.xml` (home + pricing)
- `app/robots.ts` → auto-generates `/robots.txt`

**`public/og-image.png`** — 1200×630px social share image with dark dot-grid background, BETA WERKZ wordmark, tagline, service pills, domain

---

## Home Page (`app/page.tsx`)
- Pricing link in nav styled in `var(--blue)` to stand out
- Pricing link added to footer nav
- Build Now → button after Services grid (right-aligned, gradient fill) → `/pricing`
- Build Now → button after Process steps (centered, outlined) → `/pricing`
- Footer contact icons restored: WhatsApp SVG, email SVG, map pin SVG
- WhatsApp footer link opens in new tab (`target="_blank"`)
- Hamburger button + mobile drawer added (see Mobile section)

---

## Pricing Page (`app/pricing/page.tsx`)

### Nav
Matches home page exactly: Our Works → Services → Process → Get a Quote → Pricing → Contact Us

### Two Plans

| | Starter | Business (SME) |
|---|---|---|
| Price | Fixed S$888 | Custom |
| Payment | 100% upfront | 40 / 40 / 20 |
| CTA | WhatsApp Us Now! → `wa.me/6598243429` (new tab) | Talk to Us → `/#quote` |
| Badge | Most Popular | — |

### Starter Features
1. 1 year FREE hosting (not WordPress)
2. 1 year FREE domain name
3. Live within 3 working days on design sign off
4. Professional UI/UX design (not WordPress)
5. Mobile responsive design
6. Up to 8 pages
7. Basic SEO setup
8. CMS integration — optional (additional S$30/month)
9. Contact form
10. 1 month post-launch support
11. Regular support (reply within 3 working days)

### Business (SME) Features
1. Free workflow digitization consultation
2. Free Gen AI knowledge & tools sharing
3. Dedicated project manager (reply within 8 hours)
4. Custom UI/UX design
5. Web + Mobile app
6. Database & API integration
7. Admin dashboard
8. Cloud deployment
9. Cloud infrastructure setup
10. CI/CD pipeline
11. SLA-backed support
12. 3 months post-launch support

### How It Works (FAQ)
- Starter is fixed price S$888, no surprises
- Payment: Starter 100% upfront; Business 40/40/20
- CMS optional for Starter — price stays S$888 without it
- Maintenance for Starter: S$100/month (updates, monitoring, minor changes)

### Other
- Add-ons section: hidden (commented out, code preserved)
- Footer: identical to home page (logo canvas, brand mark, full nav, SVG icons, WhatsApp new tab)
- Mobile responsive (breakpoint ≤768px): single column plans, stacked FAQ, stacked CTA

---

## Portfolio Overlay (`components/Works.tsx`)
- CTA button: "Get a Quote → `/#quote`" → **"Build Now → `/pricing`"**

---

## Mobile Responsiveness

### `app/globals.css`
- `.nav-burger` — hamburger button, only visible at `≤640px`
- `.mobile-nav` — full-screen dark overlay drawer (`rgba(3,4,10,.97)` + backdrop blur)
- Drawer links: JetBrains Mono, uppercase, stacked vertically with borders

### `app/page.tsx` + `app/pricing/page.tsx`
- `<button class="nav-burger">` added inside `<nav>`
- `<div class="mobile-nav">` full-screen drawer added with all nav links

### `components/ClientScripts.tsx`
- Burger click toggles drawer open/closed + locks body scroll
- Any mobile nav link click auto-closes the drawer

### Pricing page responsive classes (inline `<style>`)
- Hero, plans grid, cards, FAQ, CTA all collapse to single column at `≤768px`
