'use client'

import { useState } from 'react'

export default function Quote() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [service, setService] = useState('')
  const [enquiry, setEnquiry] = useState('')
  const [toast, setToast] = useState(false)

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return
    setToast(true)
    setTimeout(() => setToast(false), 3400)
    setName(''); setPhone(''); setEmail(''); setCompany(''); setService(''); setEnquiry('')
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
              <label className="ql">Name</label>
              <input className="qi" type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="qg">
              <label className="ql">Phone</label>
              <input className="qi" type="tel" placeholder="+65 0000 0000" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="qrow">
            <div className="qg">
              <label className="ql">Email</label>
              <input className="qi" type="email" placeholder="hello@company.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="qg">
              <label className="ql">Company (Optional)</label>
              <input className="qi" type="text" placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} />
            </div>
          </div>
          <div className="qg">
            <label className="ql">Services to Engage</label>
            <select className="qsel" value={service} onChange={e => setService(e.target.value)}>
              <option value="">Select a service</option>
              <option>Web App Development</option>
              <option>Mobile App Development</option>
              <option>Web Design</option>
              <option>Cloud Services</option>
              <option>General IT Consultation</option>
              <option>Others</option>
            </select>
          </div>
          <div className="qg">
            <label className="ql">Enquiry</label>
            <textarea className="qta" rows={4} placeholder="Tell us about your project..." value={enquiry} onChange={e => setEnquiry(e.target.value)} />
          </div>
          <button className="qbtn" onClick={handleSubmit}>
            <span>Submit →</span>
          </button>
        </div>
      </section>

      {/* Toast */}
      <div className={`toast${toast ? ' show' : ''}`} id="toast">
        Message received — we&apos;ll be in touch soon!
      </div>
    </>
  )
}
