import type { Metadata } from 'next'
import Link from 'next/link'
import ClientScripts from '@/components/ClientScripts'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent project-based pricing for web apps, mobile apps, cloud services and workflow digitisation. Get a custom quote from Beta Werkz Singapore.',
  alternates: {
    canonical: 'https://www.betawerkz.com.sg/pricing',
  },
  openGraph: {
    title: 'Pricing | Beta Werkz',
    description: 'Transparent project-based pricing for web apps, mobile apps, cloud services and workflow digitisation.',
    url: 'https://www.betawerkz.com.sg/pricing',
  },
}

const plans = [
  {
    num: '01',
    name: 'Starter',
    tag: 'Corporate Website',
    price: 'Fixed S$888',
    desc: 'A polished, professional web presence for growing businesses. Ideal for companies that need a reliable digital foundation.',
    features: [
      '1 year FREE hosting (not WordPress)',
      '1 year FREE domain name',
      'Live within 3 working days on design sign off',
      'Professional UI/UX design (not WordPress)',
      'Mobile responsive design',
      'Up to 8 pages',
      'Basic SEO setup',
      'CMS integration — optional (additional S$30/month)',
      'Contact form',
      '1 month post-launch support',
      'Regular support (reply within 3 working days)',
    ],
    cta: 'WhatsApp Us Now!',
    ctaHref: 'https://wa.me/6598243429',
    highlight: true,
  },
  {
    num: '02',
    name: 'Business (SME)',
    tag: 'Web Application',
    price: 'Custom',
    desc: 'Custom-built web applications with user authentication, dashboards, and integrations. The go-to choice for most clients.',
    features: [
      'Free workflow digitization consultation',
      'Free Gen AI knowledge & tools sharing',
      'Dedicated project manager (reply within 8 hours)',
      'Custom UI/UX design',
      'Web + Mobile app',
      'Database & API integration',
      'Admin dashboard',
      'Cloud deployment',
      'Cloud infrastructure setup',
      'CI/CD pipeline',
      'SLA-backed support',
      '3 months post-launch support',
    ],
    cta: 'Talk to Us',
    ctaHref: '/#quote',
    highlight: false,
  },
]

const addons = [
  { name: 'Mobile App (iOS & Android)', price: 'From S$8,000' },
  { name: 'UI/UX Design Sprint', price: 'From S$2,500' },
  { name: 'Cloud Setup & DevOps', price: 'From S$3,000' },
  { name: 'SEO & Analytics', price: 'From S$800' },
  { name: 'Monthly Maintenance', price: 'From S$300/mo' },
  { name: 'CRM / HRM System', price: 'From S$10,000' },
]

export default function PricingPage() {
  return (
    <>
      <canvas id="logo-canvas" style={{ display: 'none' }} width={400} height={400} />
      <div id="cur" />
      <div id="cur-ring" />

      <style>{`
        .pr-hero { padding: 140px 48px 80px; background: var(--void); border-bottom: 1px solid var(--border); }
        .pr-plans { padding: 80px 48px; background: var(--void); }
        .pr-plans-grid { max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: var(--border); }
        .pr-faq { padding: 80px 48px; background: var(--void); border-top: 1px solid var(--border); display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
        .pr-faq-right { display: flex; flex-direction: column; border-left: 1px solid var(--border); padding-left: 48px; }
        .pr-cta { padding: 80px 48px; background: linear-gradient(135deg,var(--void3),var(--void)); border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 32px; }
        .pr-card { padding: 40px 36px; display: flex; flex-direction: column; position: relative; }
        @media (max-width: 768px) {
          .pr-hero { padding: 110px 24px 56px; }
          .pr-plans { padding: 48px 24px; }
          .pr-plans-grid { grid-template-columns: 1fr; }
          .pr-card { padding: 32px 24px; }
          .pr-faq { padding: 48px 24px; grid-template-columns: 1fr; gap: 40px; }
          .pr-faq-right { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 40px; }
          .pr-cta { padding: 48px 24px; flex-direction: column; align-items: flex-start; gap: 28px; }
        }
      `}</style>
      {/* NAV */}
      <nav id="mnav" className="scrolled">
        <Link href="/" className="nav-logo">Beta Werkz</Link>
        <ul className="nav-links">
          <li><Link href="/#works">Our Works</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#process">Process</Link></li>
          <li><Link href="/#quote">Get a Quote</Link></li>
          <li><Link href="/pricing" style={{ color: 'var(--cyan)' }}>Pricing</Link></li>
          <li><Link href="/#quote" style={{ color: 'var(--cyan)', border: '1px solid rgba(0,212,255,.3)', padding: '6px 14px' }}>Contact Us</Link></li>
        </ul>
        <button className="nav-burger" id="nav-burger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE NAV DRAWER */}
      <div className="mobile-nav" id="mobile-nav">
        <ul>
          <li><a href="/#works" className="mobile-nav-link">Our Works</a></li>
          <li><a href="/#services" className="mobile-nav-link">Services</a></li>
          <li><a href="/#process" className="mobile-nav-link">Process</a></li>
          <li><a href="/#quote" className="mobile-nav-link">Get a Quote</a></li>
          <li><a href="/pricing" className="mobile-nav-link" style={{ color: 'var(--cyan)' }}>Pricing</a></li>
          <li><a href="/#quote" className="mobile-nav-link" style={{ color: 'var(--cyan)' }}>Contact Us</a></li>
        </ul>
      </div>

      {/* HERO */}
      <section className="pr-hero">
        <div className="slabel" style={{ marginBottom: '24px', fontSize: '13px' }}>Transparent Pricing</div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(72px,10vw,140px)', lineHeight: '.88', letterSpacing: '.02em', color: 'var(--text)' }}>
          SIMPLE.<br />
          <span style={{ background: 'linear-gradient(135deg,var(--blue),var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            HONEST.
          </span>
        </div>
        <p style={{ marginTop: '28px', maxWidth: '540px', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: 'var(--text2)' }}>
          All projects are scoped and quoted individually. The ranges below give you a clear starting point — no hidden fees, no surprises.
        </p>
      </section>

      {/* PLANS */}
      <section className="pr-plans">
        <div className="pr-plans-grid">
          {plans.map((p) => (
            <div
              key={p.num}
              className="pr-card"
              style={{
                background: p.highlight ? 'var(--void3)' : 'var(--void2)',
                borderTop: p.highlight ? '1px solid var(--cyan)' : '1px solid transparent',
              }}
            >
              {p.highlight && (
                <div style={{
                  position: 'absolute', top: '0', left: '36px',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
                  letterSpacing: '.18em', textTransform: 'uppercase',
                  color: 'var(--void)', background: 'var(--cyan)',
                  padding: '4px 12px', transform: 'translateY(-100%)',
                }}>
                  Most Popular
                </div>
              )}
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '.18em', color: 'var(--cyan)', marginBottom: '6px' }}>{p.num}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '10px' }}>{p.tag}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '44px', letterSpacing: '.02em', color: 'var(--text)', marginBottom: '6px', lineHeight: 1 }}>{p.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', letterSpacing: '.06em', color: 'var(--cyan)', marginBottom: '16px', fontWeight: 500 }}>{p.price}</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text2)', marginBottom: '24px' }}>{p.desc}</p>
              <div style={{ borderTop: '1px solid var(--border2)', marginBottom: '28px', flex: 1 }}>
                {p.features.map((f, i) => (
                  <div key={i} style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
                    letterSpacing: '.06em',
                    color: f.startsWith('1 year FREE') || f.startsWith('FREE') || f.startsWith('Free') ? 'var(--cyan)' : 'var(--text2)',
                    padding: '10px 0', borderBottom: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}>
                    <span style={{ color: 'var(--cyan)', opacity: .5, fontSize: '11px', flexShrink: 0 }}>—</span>
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href={p.ctaHref}
                target={p.ctaHref.startsWith('https') ? '_blank' : undefined}
                rel={p.ctaHref.startsWith('https') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block', textAlign: 'center',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
                  letterSpacing: '.14em', textTransform: 'uppercase',
                  padding: '15px 28px',
                  color: p.highlight ? 'var(--void)' : 'var(--blue)',
                  background: p.highlight ? 'linear-gradient(90deg,var(--blue),var(--cyan))' : 'transparent',
                  border: p.highlight ? 'none' : '1px solid var(--blue)',
                  textDecoration: 'none',
                }}
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ONS — hidden
      <section style={{ padding: '80px 48px 96px', background: 'var(--void2)', borderTop: '1px solid var(--border)' }}>
        <div className="slabel sa" style={{ marginBottom: '12px', fontSize: '13px' }}>Optional</div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px,6vw,80px)', lineHeight: '.9', color: 'var(--text)', marginBottom: '48px', letterSpacing: '.02em' }}>
          ADD-ONS &amp;<br />EXTRAS
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
          {addons.map((a, i) => (
            <div key={i} style={{ background: 'var(--void2)', padding: '28px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 400, color: 'var(--text)' }}>{a.name}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '.08em', color: 'var(--cyan)', flexShrink: 0, marginLeft: '16px' }}>{a.price}</span>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* FAQ NOTE */}
      <section className="pr-faq">
        <div>
          <div className="slabel" style={{ marginBottom: '20px', fontSize: '13px' }}>Good to Know</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px,6vw,80px)', lineHeight: '.92', color: 'var(--text)', letterSpacing: '.02em', marginBottom: '24px' }}>
            HOW IT<br />WORKS
          </div>
          <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: 'var(--text2)' }}>
            Our Starter package is a fixed price — no surprises, no hidden fees. For custom Business (SME) projects, we scope your requirements and provide a tailored quote before work begins.
          </p>
        </div>
        <div className="pr-faq-right">
          {[
            ['What are the payment terms?', 'Starter is 100% payment upfront before work begins. For Business (SME) custom projects, it is 40% upfront, 40% at mid-milestone, and 20% upon delivery.'],
            ['What if I don\'t need CMS integration?', 'CMS integration is optional for Starter. If you choose not to opt in, that\'s perfectly fine — your fixed price remains S$888.'],
            ['Do you offer maintenance for Starter?', 'Yes — if you require live support covering updates, monitoring, and minor changes, this is available at S$100/month.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '.1em', color: 'var(--cyan)', marginBottom: '10px' }}>{q}</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text2)', margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pr-cta">
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px,6vw,80px)', lineHeight: '.92', letterSpacing: '.02em', color: 'var(--text)' }}>
          READY TO<br />
          <span style={{ background: 'linear-gradient(90deg,var(--blue),var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            BUILD?
          </span>
        </div>
        <Link
          href="/#quote"
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '13px',
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--void)', background: 'linear-gradient(90deg,var(--blue),var(--cyan))',
            padding: '16px 36px', textDecoration: 'none', display: 'inline-block',
          }}
        >
          Get a Quote →
        </Link>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="ft-brand">
            <div className="ft-lmark"><canvas id="footer-logo-canvas" /></div>
            <span className="ftlogo">Beta Werkz</span>
          </div>
          <div className="ftsub">百微网络技术</div>
          <div className="ftcopy">© 2026 Beta Werkz Pte Ltd.<br />All Rights Reserved.</div>
        </div>
        <div>
          <div className="fth">Navigation</div>
          <ul className="ftlinks">
            <li><Link href="/#works">Our Works</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/#quote">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <div className="fth">Contact</div>
          <div className="ftct">
            <a href="https://wa.me/6598243429" className="ftcl" target="_blank" rel="noopener noreferrer">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L0 24l6.335-1.493A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.021-1.376l-.36-.214-3.762.888.928-3.667-.234-.377A9.818 9.818 0 1112 21.818z"/></svg>
              +65 9824 3429
            </a>
            <a href="#" id="email-link" className="ftcl">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              <span id="email-display" />
            </a>
            <a href="https://maps.google.com/?q=61+Kaki+Bukit+Avenue+1+%2306-18+Shun+Li+Industrial+Park+Singapore+417943" target="_blank" rel="noopener noreferrer" className="ftcl" style={{ alignItems: 'flex-start' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              <span style={{ lineHeight: 1.55 }}>61 Kaki Bukit Ave 1 #06-18,<br />Shun Li Industrial Park,<br />Singapore 417943</span>
            </a>
          </div>
        </div>
      </footer>
      <ClientScripts />
    </>
  )
}
