import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, company, service, enquiry } = body

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Notify Beta Werkz
    await resend.emails.send({
      from: 'Beta Werkz Quote <noreply@betawerkz.com.sg>',
      to: [process.env.RESEND_TO_EMAIL!],
      replyTo: email,
      subject: `New quote request from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2 style="border-bottom: 2px solid #00d4ff; padding-bottom: 8px; margin-bottom: 20px;">
            New Quote Request
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0;"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0;">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Company</td>
              <td style="padding: 8px 0;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Service</td>
              <td style="padding: 8px 0;">${service || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px;">Enquiry</p>
            <p style="background: #f5f5f5; padding: 14px; border-radius: 6px; margin: 0; white-space: pre-wrap;">${enquiry || '—'}</p>
          </div>
          <p style="margin-top: 28px; color: #999; font-size: 12px;">
            Submitted via betawerkz.com.sg &nbsp;·&nbsp; Hit reply to respond directly to ${name}
          </p>
        </div>
      `,
    })

    // Auto-reply to the lead
    await resend.emails.send({
      from: 'Beta Werkz <noreply@betawerkz.com.sg>',
      to: [email],
      subject: 'We received your enquiry — Beta Werkz',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2 style="border-bottom: 2px solid #00d4ff; padding-bottom: 8px;">Hi ${name},</h2>
          <p style="line-height: 1.7;">
            Thanks for reaching out to Beta Werkz. We've received your enquiry and will get back to you within 1 business day.
          </p>
          <p style="line-height: 1.7;">
            In the meantime, feel free to WhatsApp us at <strong>+65 9824 3429</strong> for anything urgent.
          </p>
          <p style="margin-top: 32px;">— The Beta Werkz team<br/>
            <span style="color: #999; font-size: 13px;">百微网络技术</span>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 28px 0;" />
          <p style="color: #999; font-size: 12px;">
            Beta Werkz Pte Ltd · 61 Kaki Bukit Ave 1 #06-18, Singapore 417943
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Quote API]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
