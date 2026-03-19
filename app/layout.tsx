import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from '@/components/WhatsAppButton'

const SITE_URL = 'https://www.betawerkz.com.sg'
const SITE_NAME = 'Beta Werkz'
const SITE_DESC = 'We build technological platforms that advance your business — web apps, mobile apps, cloud services, and workflow digitisation tailored to your needs.'
const OG_IMAGE = `${SITE_URL}/og-image.png`


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#03040a',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Beta Werkz — 百微网络技术 | Software Development Singapore',
    template: '%s | Beta Werkz',
  },
  description: SITE_DESC,
  keywords: [
    'software development Singapore',
    'web application development',
    'mobile app development',
    'cloud services Singapore',
    'workflow digitisation',
    'UI UX design Singapore',
    'Beta Werkz',
    '百微网络技术',
  ],
  authors: [{ name: 'Beta Werkz Pte Ltd', url: SITE_URL }],
  creator: 'Beta Werkz Pte Ltd',
  publisher: 'Beta Werkz Pte Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Beta Werkz — Software Development Singapore',
    description: SITE_DESC,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Beta Werkz — Software Development Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beta Werkz — Software Development Singapore',
    description: SITE_DESC,
    images: [OG_IMAGE],
    creator: '@betawerkz',
    site: '@betawerkz',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Beta Werkz Pte Ltd',
  alternateName: '百微网络技术',
  url: SITE_URL,
  logo: `${SITE_URL}/icon-32.png`,
  description: SITE_DESC,
  foundingDate: '2017',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '61 Kaki Bukit Avenue 1 #06-18, Shun Li Industrial Park',
    addressLocality: 'Singapore',
    postalCode: '417943',
    addressCountry: 'SG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+65-9824-3429',
    contactType: 'customer service',
    availableLanguage: ['English', 'Chinese'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Digitisation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q8ZB1DVBWZ" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q8ZB1DVBWZ');
        `}} />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
