# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build for production
npm run lint     # Run Next.js linter
npm start        # Run production server
```

## Environment Variables

Requires `.env.local` (not committed):
```
RESEND_API_KEY=<api_key>
RESEND_TO_EMAIL=info@betawerkz.com.sg
```

## Architecture

**Next.js 14 App Router** marketing site for BetaWerkz, a Singapore-based software development agency.

### Key directories

- `app/` — Pages and API routes
  - `layout.tsx` — Root layout: SEO metadata, GA4, Meta Pixel, JSON-LD structured data, WhatsApp button
  - `page.tsx` — Homepage: hero, portfolio, services, process, testimonials, quote form sections
  - `pricing/page.tsx` — 2-tier pricing (Starter S$888 / Business custom)
  - `api/quote/route.ts` — POST handler: validates form, sends emails via Resend (lead notification + auto-reply)
  - `globals.css` — All styling (~35KB); dark theme with CSS custom properties
- `components/` — React components
  - `ClientScripts.tsx` — Client-side behaviors: custom cursor, hamburger menu, scroll animations, side nav highlighting
  - `Works.tsx` — Portfolio grid
  - `Quote.tsx` — Contact/lead capture form with toast notifications
  - `WhatsAppButton.tsx` — Fixed floating WhatsApp CTA
  - `Testimonials.tsx` — 3-card testimonial grid
- `lib/` — Static data files (services, process steps, projects, clients, logo)

### CSS conventions

Custom CSS variables: `--void`, `--text`, `--cyan`, `--blue`, `--border`

Scroll animation classes applied via `ClientScripts.tsx`:
- `.sal` / `.sar` / `.sa` — scroll-animate (left, right, center)
- `.snl` — side nav label

Responsive breakpoints: `768px` (mobile) and `640px` (small mobile, hamburger menu activates)

### Navigation

Single-page scroll with anchor links: `#hero`, `#works`, `#services`, `#process`, `#testimonials`, `#quote`. Side nav dots highlight based on scroll position (handled in `ClientScripts.tsx`).

### Email flow

Quote form (`Quote.tsx`) → `POST /api/quote` → Resend API sends two emails: lead notification to `info@betawerkz.com.sg` and auto-reply to enquirer. If sending fails, the error toast includes a WhatsApp fallback number.

Quote form input font sizes are intentionally set to `16px` to prevent iOS Safari auto-zoom on focus.

### WhatsApp integration

Two separate touch points:
1. **Floating button** (`components/WhatsAppButton.tsx`) — fixed bottom-right on all pages via `layout.tsx`; fades in after 1.5s; pulsing green ring animation; opens `wa.me/6598243429` with a pre-filled message
2. **Pricing CTA** — Starter plan on `/pricing` has a "WhatsApp Us Now!" button linking to the same number in a new tab
3. **Footer** — both home and pricing pages have a WhatsApp SVG icon link in the contact row (also opens in new tab)

WhatsApp number: `+65 9824 3429` (`wa.me/6598243429`)

### SEO implementation

All SEO lives in `app/layout.tsx` and applies site-wide:

- Full `<head>` metadata: title template (`%s | Beta Werkz`), description, keywords, authors, canonical URL
- Open Graph + Twitter Card with `public/og-image.png` (1200×630px)
- JSON-LD structured data: `ProfessionalService` schema with address (Kaki Bukit, Singapore), contact, and services catalog
- `app/sitemap.ts` — auto-generates `/sitemap.xml` (home + pricing)
- `app/robots.ts` — auto-generates `/robots.txt`
- Favicons: `favicon.ico`, `icon-16.png`, `icon-32.png`, `apple-icon.png` (180×180)

**Analytics stack** (all fire via root layout):
- GA4: `G-Q8ZB1DVBWZ`
- Vercel Analytics (heatmaps + session recordings)
- Meta Pixel: placeholder `YOUR_META_PIXEL_ID` — replace and redeploy to activate

**Target keywords:** `web development Singapore`, `custom website Singapore`, `website Singapore $888`, `mobile app development Singapore`, `fixed price website Singapore`, `no WordPress website Singapore`

### Testimonials

Edit the `testimonials` array in `components/Testimonials.tsx` to replace placeholder quotes with real client data (quote, name, title, company, initials). Remove the reminder `<p>` at the bottom of the component after updating.

### Image hosting

Portfolio project images are hosted at `www.betawerkz.com.sg` — the `next.config.mjs` allowlists this domain for `next/image`.
