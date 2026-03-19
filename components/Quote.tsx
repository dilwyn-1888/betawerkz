'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Quote() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [service, setService] = useState('')
  const [enquiry, setEnquiry] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return
    setStatus('loading')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, company, service, enquiry }),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      setName('')
      setPhone('')
      setEmail('')
      setCompany('')
      setService('')
      setEnquiry('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <>
      <section id="quote">
        <div className="sal">
          <div className="slabel" style={{ color: 'var(--cyan)' }}>Enquiry</div>
          <div className="qbig">
            GET A<br /><span>QUOTE.</span>
          </div>
          <p className="qnote">Tell us about your project and we&apos;ll get back to you shortly.</p>
        </div>
        <div className="qform sar">
          <div className="qrow">
            <div className="qg">
              <label className="ql" style={{ fontSize: '13px' }}>Name</label>
              <input
                className="qi"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ fontSize: '16px' }}
              />
            </div>
            <div className="qg">
              <label className="ql" style={{ fontSize: '13px' }}>Phone</label>
              <input
                className="qi"
                type="tel"
                placeholder="9123 4567"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>
          <div className="qrow">
            <div className="qg">
              <label className="ql" style={{ fontSize: '13px' }}>Email</label>
              <input
                className="qi"
                type="email"
                placeholder="hello@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ fontSize: '16px' }}
              />
            </div>
            <div className="qg">
              <label className="ql" style={{ fontSize: '13px' }}>Company (Optional)</label>
              <input
                className="qi"
                type="text"
                placeholder="Company name"
                value={company}
                onChange={e => setCompany(e.target.value)}
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>
          <div className="qg">
            <label className="ql" style={{ fontSize: '13px' }}>Services to Engage</label>
            <select
              className="qsel"
              value={service}
              onChange={e => setService(e.target.value)}
              style={{ fontSize: '16px' }}
            >
              <option value="">Select a service</option>
              <option>Starter</option>
              <option>Corporate Website</option>
              <option>Landing Page</option>
              <option>Workflow Digitization</option>
              <option>IT Consultations</option>
              <option disabled>Gen AI Knowledge Sharing (coming soon)</option>
              <option disabled>Computing Courses (coming soon)</option>
              <option>Cloud Services</option>
              <option>Others (Website Feedbacks Welcome)</option>
            </select>
          </div>
          <div className="qg">
            <label className="ql" style={{ fontSize: '13px' }}>Enquiry</label>
            <textarea
              className="qta"
              rows={4}
              placeholder="Tell us about your project..."
              value={enquiry}
              onChange={e => setEnquiry(e.target.value)}
              style={{ fontSize: '16px' }}
            />
          </div>
          <button
            className="qbtn"
            onClick={handleSubmit}
            disabled={status === 'loading'}
            style={{ opacity: status === 'loading' ? 0.6 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
          >
            <span>{status === 'loading' ? 'Sending…' : 'Submit →'}</span>
          </button>
        </div>
      </section>

      {/* Success toast */}
      <div
        className={`toast${status === 'success' ? ' show' : ''}`}
        style={{ fontSize: '16px', padding: '20px 32px', minWidth: '340px', textAlign: 'center', fontWeight: 500 }}
      >
        Message received — we&apos;ll be in touch soon!
      </div>

      {/* Error toast */}
      <div
        className={`toast${status === 'error' ? ' show' : ''}`}
        style={{ background: 'rgba(220,38,38,0.95)', fontSize: '16px', padding: '20px 32px', minWidth: '340px', textAlign: 'center', fontWeight: 500 }}
      >
        Something went wrong — please WhatsApp us at +65 9824 3429.
      </div>
    </>
  )
}
