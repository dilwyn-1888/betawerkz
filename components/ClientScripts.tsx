'use client'

import { useEffect } from 'react'
import { LOGO_SRC } from '@/lib/logo'

export default function ClientScripts() {
  useEffect(() => {
    // ── BODY LOAD CLASS ──
    const loadTimer = setTimeout(() => document.body.classList.add('ld'), 80)

    // ── CURSOR ──
    const cur = document.getElementById('cur')
    const ring = document.getElementById('cur-ring')
    let mx = 0, my = 0, rx = 0, ry = 0
    let animFrame: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px' }
    }
    document.addEventListener('mousemove', onMouseMove)

    function animRing() {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
      animFrame = requestAnimationFrame(animRing)
    }
    animFrame = requestAnimationFrame(animRing)

    function addHov(el: Element) {
      el.addEventListener('mouseenter', () => {
        cur?.classList.add('big')
        ring?.classList.add('big')
      })
      el.addEventListener('mouseleave', () => {
        cur?.classList.remove('big')
        ring?.classList.remove('big')
      })
    }

    function applyHov(root?: Element | Document | null) {
      ;(root || document).querySelectorAll('a,button,.wcard,.srvc,.ps,.ccell,.sni,.pncard').forEach(addHov)
    }
    applyHov()

    // ── HAMBURGER MENU ──
    const burger = document.getElementById('nav-burger')
    const mobileNav = document.getElementById('mobile-nav')
    const toggleMenu = () => {
      burger?.classList.toggle('open')
      mobileNav?.classList.toggle('open')
      document.body.style.overflow = mobileNav?.classList.contains('open') ? 'hidden' : ''
    }
    const closeMenu = () => {
      burger?.classList.remove('open')
      mobileNav?.classList.remove('open')
      document.body.style.overflow = ''
    }
    burger?.addEventListener('click', toggleMenu)
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeMenu)
    })
    const mnav = document.getElementById('mnav')
    const onScroll = () => {
      mnav?.classList.toggle('scrolled', window.scrollY > 60)
      updAct()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── SIDE NAV ──
    const secs = ['hero', 'works', 'services', 'process', 'quote']
    function getAct() {
      const mid = window.scrollY + window.innerHeight * 0.42
      let a = secs[0]
      for (const id of secs) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) a = id
      }
      return a
    }
    function updAct() {
      const a = getAct()
      document.querySelectorAll('.sni').forEach(i =>
        (i as HTMLElement).classList.toggle('on', (i as HTMLElement).dataset.t === a)
      )
      document.querySelectorAll('.nav-links a[data-s]').forEach(l =>
        (l as HTMLElement).classList.toggle('on', (l as HTMLElement).dataset.s === a)
      )
    }
    updAct()

    document.querySelectorAll('.sni').forEach(i => {
      i.addEventListener('click', () => {
        const t = (i as HTMLElement).dataset.t
        if (t) document.getElementById(t)?.scrollIntoView({ behavior: 'smooth' })
      })
    })

    // ── SCROLL ANIMATIONS ──
    const obs = new IntersectionObserver(entries => {
      entries.forEach(x => {
        if (x.isIntersecting) { x.target.classList.add('in'); obs.unobserve(x.target) }
      })
    }, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' })

    const trObs = new IntersectionObserver(entries => {
      entries.forEach(x => {
        if (x.isIntersecting) { x.target.classList.add('in'); trObs.unobserve(x.target) }
      })
    }, { threshold: 0.18 })

    document.querySelectorAll('.sa,.sal,.sar').forEach(el => obs.observe(el))
    document.querySelectorAll('.trwrap').forEach(el => trObs.observe(el))

    // ── LOGO ──
    function processAndDeployLogo(rawSrc: string) {
      const image = new Image()
      image.onload = function () {
        const off = document.getElementById('logo-canvas') as HTMLCanvasElement | null
        if (!off) return
        off.width = image.naturalWidth; off.height = image.naturalHeight
        const ctx = off.getContext('2d')
        if (!ctx) return
        ctx.drawImage(image, 0, 0)
        try {
          const d = ctx.getImageData(0, 0, off.width, off.height), px = d.data
          for (let i = 0; i < px.length; i += 4) {
            const r = px[i], g = px[i + 1], b = px[i + 2]
            if (r < 28 && g < 28 && b < 28) { px[i + 3] = 0; continue }
          }
          ctx.putImageData(d, 0, 0)
        } catch (e) {}
        function cp(dst: HTMLCanvasElement | null, sz: number) {
          if (!dst) return
          dst.width = sz; dst.height = sz
          dst.getContext('2d')?.drawImage(off!, 0, 0, sz, sz)
        }
        cp(document.getElementById('hero-logo-canvas') as HTMLCanvasElement, 340)
        cp(document.getElementById('footer-logo-canvas') as HTMLCanvasElement, 36)
      }
      image.src = rawSrc
    }
    processAndDeployLogo(LOGO_SRC)

    // ── EMAIL DECODE ──
    const emailChars = [105, 110, 102, 111, 64, 98, 101, 116, 97, 119, 101, 114, 107, 122, 46, 99, 111, 109, 46, 115, 103]
    const emailAddr = emailChars.map(n => String.fromCharCode(n)).join('')
    const emailLink = document.getElementById('email-link') as HTMLAnchorElement | null
    const emailDisplay = document.getElementById('email-display')
    if (emailLink) emailLink.href = 'mailto:' + emailAddr
    if (emailDisplay) emailDisplay.textContent = emailAddr

    // Cleanup
    return () => {
      clearTimeout(loadTimer)
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animFrame)
      obs.disconnect()
      trObs.disconnect()
      burger?.removeEventListener('click', toggleMenu)
    }
  }, [])

  return null
}
