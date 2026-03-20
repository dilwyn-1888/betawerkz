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
│   ├── og-image.png                  ← 1200×630 OG social image
│   └── betawerkz-logo.svg            ← Full company logo (NEW)
├── app/
│   ├── globals.css
│   ├── layout.tsx                    ← Full SEO metadata + JSON-LD + Meta Pixel + WhatsApp button
│   ├── page.tsx                      ← Home page (now includes Testimonials)
│   ├── sitemap.ts                    ← Auto sitemap.xml
│   ├── robots.ts                     ← Auto robots.txt
│   ├── pricing/
│   │   └── page.tsx                  ← Pricing page
│   └── api/
│       └── quote/
│           └── route.ts              ← Resend email API route (NEW)
├── components/
│   ├── ClientScripts.tsx             ← Cursor, scroll anims, logo, nav, hamburger
│   ├── Works.tsx                     ← Portfolio grid + overlay
│   ├── Quote.tsx                     ← Contact form (wired to Resend)
│   ├── WhatsAppButton.tsx            ← Floating WhatsApp button (NEW)
│   └── Testimonials.tsx              ← 3-card testimonials section (NEW)
├── lib/
│   ├── clients.ts
│   ├── logo.ts
│   ├── process.ts
│   ├── projects.ts
│   └── services.ts
├── .env.local                        ← Resend credentials (NEW — never commit to git)
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
- `<Testimonials />` added between Process section and Quote form

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

---

## Icons & Favicons (`/public/`)
Generated from `logo_bw.webp` (RGBA, original 64×64):

| File | Size | Purpose |
|---|---|---|
| `favicon.ico` | 16/32/48px multi-size | Browser tab fallback |
| `icon-16.png` | 16×16 | Browser tab small |
| `icon-32.png` | 32×32 | Browser tab + bookmarks |
| `apple-icon.png` | 180×180 | iPhone/iPad home screen |

Referenced in `layout.tsx` under `icons` metadata.

---

## Analytics (`app/layout.tsx`)
- GA4 Google Analytics tag added (`G-Q8ZB1DVBWZ`)
- Vercel Analytics added (includes heatmaps and session recordings — replaces Hotjar)
- Meta Pixel added (placeholder `YOUR_META_PIXEL_ID` — replace to activate)
- Fires on all pages automatically via the root layout

---

## SEO Checklist

### Technical (done ✅)
- Meta title, description, keywords
- Open Graph + Twitter Card
- JSON-LD structured data (ProfessionalService)
- `sitemap.xml` + `robots.txt` auto-generated
- Canonical URLs on every page
- Viewport meta, `lang="en"`
- OG image 1200×630
- Favicons + Apple icon
- GA4 analytics
- Mobile responsive

### After going live (todo)
- Submit `sitemap.xml` to Google Search Console
- Submit `sitemap.xml` to Bing Webmaster Tools
- Register Google Business Profile (Kaki Bukit address) ✅ Done
- List on Clutch, GoodFirms, DesignRush, sgbizlist.com.sg
- Verify GA4 Realtime is tracking

### Ongoing
- Get client Google reviews
- Write blog/case study content targeting keywords
- Monitor Google Search Console weekly (crawl errors, impressions, clicks)
- Run PageSpeed Insights — keep mobile score above 90

### Target Keywords
**High intent:** `web development Singapore`, `custom website Singapore`, `website Singapore $888`, `mobile app development Singapore`

**Long-tail:** `fixed price website Singapore`, `SME website package Singapore`, `no WordPress website Singapore`, `workflow digitisation Singapore SME`

---

---

## Session 2 — Awareness & Lead Generation Upgrades

> All changes below were added after the initial build to improve lead capture, trust, and brand awareness.

---

### New & Modified Files

| File | Type | What Changed |
|------|------|--------------|
| `app/api/quote/route.ts` | New | Resend email API route |
| `components/Quote.tsx` | Modified | Wired form to API, toast sizing, phone placeholder, services list, font sizes |
| `components/WhatsAppButton.tsx` | New | Floating WhatsApp button |
| `components/Testimonials.tsx` | New | 3-card testimonials section |
| `app/page.tsx` | Modified | Added `<Testimonials />` between Process and Quote sections |
| `app/layout.tsx` | Modified | Added WhatsApp button, Meta Pixel, removed Hotjar |
| `.env.local` | New | Environment variables for Resend |
| `public/betawerkz-logo.svg` | New | Full company logo |

---

### Quote Form — Resend Email Integration

**Problem:** `Quote.tsx` `handleSubmit()` only showed a toast notification. No data was ever sent or saved.

**Fix:** Created a server-side API route at `app/api/quote/route.ts` that:
- Receives the form POST from the browser
- Sends a formatted lead notification email to `info@betawerkz.com.sg`
- Sends an auto-reply confirmation email to the enquirer
- Returns an error toast with WhatsApp fallback if sending fails

**Dependencies:**
```bash
npm install resend
```

**Environment variables** — add to `.env.local` and to Vercel dashboard under Settings → Environment Variables:
```
RESEND_API_KEY=your_resend_api_key
RESEND_TO_EMAIL=info@betawerkz.com.sg
```

> ⚠️ Never commit `.env.local` to git. Rotate your Resend API key at resend.com/api-keys if it was ever exposed.

---

### Quote Form — UI Fixes

- **Toast size** — `fontSize: 16px`, `padding: 20px 32px`, `minWidth: 340px`, `fontWeight: 500` on both success and error toasts
- **Error toast** — red background with WhatsApp fallback number
- **Phone placeholder** — changed to `9123 4567`
- **Input font sizes** — `fontSize: 16px` on all inputs, select, textarea (also prevents mobile browser auto-zoom)
- **Label font sizes** — `13px` for clean hierarchy
- **Submit button** — disabled + opacity 0.6 while sending, shows "Sending…" text

**Services list updated to:**
- Starter
- Corporate Website
- Landing Page
- Workflow Digitization
- IT Consultations
- Gen AI Knowledge Sharing *(disabled — coming soon)*
- Computing Courses *(disabled — coming soon)*
- Cloud Services
- Others (Website Feedbacks Welcome)

---

### WhatsApp Floating Button

**File:** `components/WhatsAppButton.tsx`

- Fades in 1.5s after page load
- Fixed bottom-right, appears on every page via `layout.tsx`
- Pulsing green ring animation
- "Chat with us" tooltip on hover
- Opens WhatsApp with pre-filled message to `+65 9824 3429`

---

### Testimonials Section

**File:** `components/Testimonials.tsx`

- Placed between Process and Quote sections in `app/page.tsx`
- 3-card grid matching the dark aesthetic — cyan accents, star ratings, gradient initials
- Currently uses placeholder content

**To replace with real quotes**, edit the `testimonials` array at the top of the file:
```ts
const testimonials = [
  {
    quote: "Your real client quote here.",
    name: "Client Name",
    title: "Their Job Title",
    company: "Their Company Pte Ltd",
    initials: "CN",
  },
]
```
Remove the reminder `<p>` at the bottom of the component once done.

---

### Meta Pixel (Facebook / Instagram Retargeting)

**Added to:** `app/layout.tsx`

**Status:** Script present, using placeholder `YOUR_META_PIXEL_ID`.

**To activate:**
1. Go to [business.facebook.com](https://business.facebook.com) → Events Manager → Connect Data Sources → Web
2. Create a Pixel and copy the numeric ID
3. Replace `YOUR_META_PIXEL_ID` in `app/layout.tsx` and redeploy

---

### Logo

**File:** `public/betawerkz-logo.svg`

- Geometric hex mark with circuit node aesthetic
- BETA in white, WERKZ in cyan-to-blue gradient
- Tagline "BRAINS AT WORK", Chinese name 百微网络技术, Est. 2017 pill
- SVG — scales to any size, use on letterheads, email signatures, proposals

---

### Singapore Directories — Action Items

| Directory | Portal | Status |
|-----------|--------|--------|
| Google Business Profile | business.google.com | ✅ Verified |
| SME Go Digital PSG | smegoportal.gov.sg | ⏳ Apply — highest priority |
| IMDA Tech Provider | ctoas.sg | ⏳ Prerequisite for PSG |
| GoBusiness / eStartup | gobusiness.gov.sg | ⏳ ~30 min setup |
| Clutch.co | clutch.co | ⏳ Free listing + 3 client reviews |

**PSG tip:** Approval unlocks co-funding for your clients — SMEs can get up to 50% of your project cost covered by grants, which dramatically changes the quality of inbound leads.

---

### Complete Status

| Item | Status | Notes |
|------|--------|-------|
| Quote form API (Resend) | ✅ Live | Rotate API key if exposed |
| Quote form UI fixes | ✅ Live | |
| WhatsApp floating button | ✅ Live | |
| Testimonials section | ✅ Live | Replace placeholders |
| Meta Pixel | ⏳ Pending | Replace `YOUR_META_PIXEL_ID` |
| Google Business Profile | ✅ Verified | |
| Vercel Analytics + heatmaps | ✅ Live | |
| Google Analytics 4 | ✅ Live | |
| SME Go Digital PSG | ⏳ Pending | Manual application |
| IMDA listing | ⏳ Pending | Manual application |
| GoBusiness directory | ⏳ Pending | ~30 min |
| Clutch.co profile | ⏳ Pending | Free + 3 reviews |
| Logo | ✅ Done | `public/betawerkz-logo.svg` |
