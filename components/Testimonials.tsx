import React from 'react'

const testimonials = [
  {
    quote: "Beta Werkz transformed our manual workflows into a seamless digital platform. The team was responsive, professional, and delivered ahead of schedule.",
    name: "Kennady",
    title: "Operations Director",
    company: "Rave Karaoke #RAVE",
    initials: "KG",
  },
  {
    quote: "From concept to launch in under 6 weeks. The web app they built handles hundreds of daily transactions without a hitch. Highly recommended.",
    name: "Daimien",
    title: "CEO",
    company: "All Marketing Pte Ltd",
    initials: "ML",
  },
  {
    quote: "Their Gen AI consultation opened our eyes to automation opportunities we hadn't considered. Already saving 20 hours a week across the team.",
    name: "Zong Peng",
    title: "Engineer",
    company: "Leray Technology Co,. Ltd",
    initials: "AMP3",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: '120px 6vw',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="sal" style={{ marginBottom: '64px' }}>
        <div className="slabel" style={{ color: 'var(--cyan)' }}>What Clients Say</div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(48px, 8vw, 96px)',
          lineHeight: 1,
          color: 'var(--fg)',
          letterSpacing: '0.02em',
        }}>
          CLIENT<br />
          <span style={{ WebkitTextStroke: '1px var(--fg)', color: 'transparent' }}>STORIES.</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2px',
      }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="sa"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent glow top-left */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--cyan), transparent)',
            }} />

            {/* Quote mark */}
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '72px',
              lineHeight: 1,
              color: 'var(--cyan)',
              opacity: 0.25,
              position: 'absolute',
              top: '20px',
              right: '28px',
              userSelect: 'none',
            }}>
              "
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--cyan)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--fg)',
              opacity: 0.85,
              margin: 0,
              flex: 1,
            }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--void)',
                flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--fg)',
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: 'var(--cyan)',
                  opacity: 0.7,
                  marginTop: '2px',
                }}>
                  {t.title} · {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
