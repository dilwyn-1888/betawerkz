import ClientScripts from '@/components/ClientScripts'
import Works from '@/components/Works'
import Quote from '@/components/Quote'
import Testimonials from '@/components/Testimonials'
import { clientLogos } from '@/lib/clients'
import { services } from '@/lib/services'
import { processSteps } from '@/lib/process'

export default function Home() {
  return (
    <>
      <canvas id="logo-canvas" style={{ display: 'none' }} width={400} height={400} />
      <div id="cur" />
      <div id="cur-ring" />
      <div id="snav">
        <div className="sni on" data-t="hero"><span className="snl">Home</span><span className="snd" /></div>
        <div className="sni" data-t="works"><span className="snl">Works</span><span className="snd" /></div>
        <div className="sni" data-t="services"><span className="snl">Services</span><span className="snd" /></div>
        <div className="sni" data-t="process"><span className="snl">Process</span><span className="snd" /></div>
        <div className="sni" data-t="quote"><span className="snl">Contact</span><span className="snd" /></div>
      </div>
      <nav id="mnav">
        <a href="#hero" className="nav-logo">Beta Werkz</a>
        <ul className="nav-links">
          <li><a href="#works" data-s="works">Our Works</a></li>
          <li><a href="#services" data-s="services">Services</a></li>
          <li><a href="#process" data-s="process">Process</a></li>
          <li><a href="#quote" data-s="quote">Get a Quote</a></li>
          <li><a href="/pricing" style={{ color: "var(--blue)" }}>Pricing</a></li>
          <li><a href="#quote" data-s="quote" style={{ color: 'var(--cyan)', border: '1px solid rgba(0,212,255,.3)', padding: '6px 14px' }}>Contact Us</a></li>
        </ul>
        <button className="nav-burger" id="nav-burger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE NAV DRAWER */}
      <div className="mobile-nav" id="mobile-nav">
        <ul>
          <li><a href="#works" className="mobile-nav-link">Our Works</a></li>
          <li><a href="#services" className="mobile-nav-link">Services</a></li>
          <li><a href="#process" className="mobile-nav-link">Process</a></li>
          <li><a href="#quote" className="mobile-nav-link">Get a Quote</a></li>
          <li><a href="/pricing" className="mobile-nav-link" style={{ color: 'var(--blue)' }}>Pricing</a></li>
          <li><a href="#quote" className="mobile-nav-link" style={{ color: 'var(--cyan)' }}>Contact Us</a></li>
        </ul>
      </div>
      <section id="hero">
        <div className="hdots" />
        <div className="hglow1" />
        <div className="hglow2" />
        <div className="hleft">
          <div className="heyebrow">Singapore — Est. 2017</div>
          <div className="htw"><span className="ht ht-plain">BETA</span></div>
          <div className="htw"><span className="ht ht-grad">WERKZ</span></div>
          <div className="hcn">百微网络技术</div>
        </div>
        <div className="hright">
          <div className="hero-logo-wrap">
            <div className="lring lring2" />
            <div className="lring lring1" />
            <canvas id="hero-logo-canvas" />
          </div>
          <div className="hero-tagline-wrap">
            <div className="htag">Brains at Work</div>
            <p className="hdesc">We build technological platforms that <em>advance your business</em>, tailored to your unique requirements.</p>
            <div className="hsvcs">
              <div className="hsvc">Front-end Dev</div>
              <div className="hsvc">Back-end Dev</div>
              <div className="hsvc">Digital Platforms</div>
              <div className="hsvc">UX Design</div>
            </div>
          </div>
        </div>
        <div className="hscroll"><div className="scl" />Scroll</div>
      </section>
      <div className="mwrap">
        <div className="mtrack">
          {['Web Application Development','Mobile App Development','Cloud Services','UX Design','Front-end Development','Back-end Development','Digital Platforms','Web Application Development','Mobile App Development','Cloud Services','UX Design','Front-end Development','Back-end Development','Digital Platforms'].map((item, i) => (
            <div key={i} className="mitem">{item}</div>
          ))}
        </div>
      </div>
      <Works />
      <section id="clients">
        <div className="sal">
          <div className="slabel">Partners</div>
          <div className="ctit">OUR<br />CLIENTS</div>
        </div>
        <div className="cgrid">
          {clientLogos.map((logo: { src: string; alt: string }, i: number) => (
            <div key={i} className="ccell sa">
              <img className="clogo" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>
      <section id="services">
        <div className="srvhd">
          <div className="slabel sa">What We Do</div>
          <div className="trwrap"><div className="trin srvbig">OUR<br />SERVICES</div></div>
          <p className="srvintro sa">Our team of software engineers and UI/UX designers employ the most suitable technology to build effective solutions for our clients.</p>
        </div>
        <div className="srvgrid">
          {services.map((s: { ghost: string; img: string; name: string; desc: string; tags: string[] }, i: number) => (
            <div key={i} className="srvc sa">
              <div className="srvgh">{s.ghost}</div>
              <img className="srvimg" src={s.img} alt={s.name} />
              <h3 className="srvnm">{s.name}</h3>
              <p className="srvdc">{s.desc}</p>
              <div className="srvtags">
                {s.tags.map((tag: string, j: number) => <div key={j} className="srvtg">{tag}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '40px' }}>
          <a
            href="/pricing"
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
              letterSpacing: '.16em', textTransform: 'uppercase',
              color: 'var(--void)', background: 'linear-gradient(90deg,var(--blue),var(--cyan))',
              padding: '14px 32px', textDecoration: 'none', display: 'inline-block',
            }}
          >
            Build Now →
          </a>
        </div>
      </section>
      <section id="process">
        <div className="procintr">
          <div className="slabel sa">How We Work</div>
          <div className="trwrap"><div className="trin procbig">THE<br />PROCESS</div></div>
          <p className="procnote sa">Our client-oriented approach ensures your business needs are achieved in a timely and cost-effective manner.</p>
        </div>
        <div className="procsteps">
          {processSteps.map((step: { num: string; img: string; title: string; desc: string }, i: number) => (
            <div key={i} className="ps sa">
              <img className="procimg" src={step.img} alt={step.title} />
              <div className="psn">{step.num}</div>
              <div className="pst">{step.title}</div>
              <p className="psd">{step.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '48px', borderTop: '1px solid var(--border)', marginTop: '0' }}>
          <a
            href="/pricing"
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
              letterSpacing: '.16em', textTransform: 'uppercase',
              color: 'var(--blue)', border: '1px solid var(--blue)',
              padding: '14px 48px', textDecoration: 'none', display: 'inline-block',
              position: 'relative', overflow: 'hidden',
            }}
          >
            Build Now →
          </a>
        </div>
      </section>

      {/* Testimonials — sits between Process and the Quote form */}
      <Testimonials />

      <Quote />
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
            <li><a href="#works">Our Works</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="#quote">Get a Quote</a></li>
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
