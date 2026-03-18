'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { projects, type Project } from '@/lib/projects'

function ImgWrap({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className={`img-wrap${loaded ? ' loaded' : ''}`}>
      <img src={src} alt={alt} loading="lazy" onLoad={() => setLoaded(true)} />
    </div>
  )
}

function ProjectOverlay({
  project,
  onClose,
  onOpenProject,
}: {
  project: Project
  onClose: () => void
  onOpenProject: (id: number) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const lastGalleryImg = project.gallery[project.gallery.length - 1]
  const otherProjects = Object.values(projects).filter((p) => p.num !== project.num)

  // Reset scroll on project change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [project])

  // Carousel drag scroll
  useEffect(() => {
    const grid = carouselRef.current
    if (!grid) return
    const onDown = (e: MouseEvent) => {
      isDown.current = true
      grid.style.cursor = 'grabbing'
      startX.current = e.pageX - grid.offsetLeft
      scrollLeft.current = grid.scrollLeft
    }
    const onLeave = () => { isDown.current = false; grid.style.cursor = '' }
    const onUp = () => { isDown.current = false; grid.style.cursor = '' }
    const onMove = (e: MouseEvent) => {
      if (!isDown.current) return
      e.preventDefault()
      const x = e.pageX - grid.offsetLeft
      grid.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2
    }
    grid.addEventListener('mousedown', onDown)
    grid.addEventListener('mouseleave', onLeave)
    grid.addEventListener('mouseup', onUp)
    grid.addEventListener('mousemove', onMove)
    return () => {
      grid.removeEventListener('mousedown', onDown)
      grid.removeEventListener('mouseleave', onLeave)
      grid.removeEventListener('mouseup', onUp)
      grid.removeEventListener('mousemove', onMove)
    }
  }, [])

  const scrollCarousel = (dir: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 342 * 2 * dir, behavior: 'smooth' })
    }
  }

  return (
    <div id="po" className="open">
      <div id="po-scrim" onClick={onClose} />
      <div id="po-panel">
        {/* Bar */}
        <div id="po-bar">
          <div id="po-bc">
            Our Works <span>/ <span id="po-bc-name">{project.title}</span></span>
          </div>
          <button id="po-close" onClick={onClose}>
            <span>Close</span>
            <span className="po-x">✕</span>
          </button>
        </div>

        {/* Scrollable content */}
        <div id="po-scroll" ref={scrollRef}>
          <div className="poc" id="po-content">
            {/* Project header */}
            <div className="ph">
              <div className="ph-left">
                <div className="ph-ghost">{project.num}</div>
                <div className="ph-type">{project.type}</div>
                <div className="ph-title">{project.title}</div>
              </div>
              <div className="ph-right">
                <img className="ph-img" src={project.heroImg} alt={project.title} loading="eager" />
                <div className="ph-img-overlay" />
              </div>
            </div>

            {/* Sections */}
            {project.sections.map((s, i) => (
              <div className="pbsec" key={i}>
                <div className="pblabel">{s.label}</div>
                <div className="pbhead" dangerouslySetInnerHTML={{ __html: s.heading.replace(/\n/g, '<br>') }} />
                <p className="pbtext">{s.text}</p>
                {s.swatches && (
                  <div className="swatches">
                    {s.swatches.map((c, j) => (
                      <div className="swatch" key={j} style={{ background: c }} />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Gallery */}
            <div className="pgal">
              <div className="pgal-label">Project Screenshots</div>
              <div className="pgal-grid cols-1">
                <div className="pgal-item">
                  <ImgWrap src={lastGalleryImg} alt={project.title} />
                </div>
              </div>
            </div>

            {/* Other works */}
            <div className="pnext-wrap">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '36px 48px 20px' }}>
                <div className="pnext-hdr" style={{ padding: 0 }}>Other Works</div>
                <div className="pnext-nav">
                  <button className="pnext-btn" onClick={() => scrollCarousel(-1)}>←</button>
                  <button className="pnext-btn" onClick={() => scrollCarousel(1)}>→</button>
                </div>
              </div>
              <div className="pnext-grid" ref={carouselRef}>
                {otherProjects.map((r) => (
                  <div
                    className="pncard"
                    key={r.num}
                    onClick={() => onOpenProject(parseInt(r.num))}
                  >
                    <div className="pncard-thumb">
                      <ImgWrap src={r.thumbImg} alt={r.title} />
                    </div>
                    <div className="pncard-overlay" />
                    <div className="pncard-body">
                      <div className="pncard-type">{r.type}</div>
                      <div className="pncard-name">{r.title}</div>
                    </div>
                    <div className="pncard-arr">→</div>
                  </div>
                ))}
              </div>
              <div className="pnext-fade" />
            </div>

            {/* CTA */}
            <div className="pcta">
              <div className="pcta-text">
                LIKED WHAT<br />YOU <span>SAW?</span>
              </div>
              <a
                href="/pricing"
                className="pcta-btn"
              >
                <span>Build Now →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Works() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const savedScroll = useRef(0)

  const openProject = useCallback((pid: number) => {
    const p = projects[pid]
    if (!p) return
    savedScroll.current = window.scrollY
    setActiveProject(p)
    document.body.style.cssText = `overflow:hidden;position:fixed;top:-${window.scrollY}px;width:100%`
  }, [])

  const closeProject = useCallback(() => {
    setActiveProject(null)
    document.body.style.cssText = ''
    window.scrollTo(0, savedScroll.current)
  }, [])

  // ESC key to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProject) closeProject()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [activeProject, closeProject])

  return (
    <>
      {/* Works section */}
      <section id="works">
        <div className="whead">
          <div>
            <div className="slabel sa">Portfolio</div>
            <div className="trwrap">
              <div className="trin wbig">RECENT<br />WORKS</div>
            </div>
          </div>
          <div className="wcnt sa">01 — 08</div>
        </div>
        <div className="wgrid" id="wgrid">
          {Object.values(projects).map((p) => (
            <div
              key={p.num}
              className="wcard sa"
              onClick={() => openProject(parseInt(p.num))}
              style={{ cursor: 'none' }}
            >
              <div className="wcard-img">
                <img
                  src={p.thumbImg}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => {
                    ;(e.currentTarget.parentElement as HTMLElement).style.background = 'var(--void3)'
                  }}
                />
              </div>
              <div className="wcard-body">
                <div className="wcn">{p.num}</div>
                <div className="wct">{p.type}</div>
                <div className="wnm">{p.title}</div>
                <div className="warr">→</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overlay */}
      {activeProject && (
        <ProjectOverlay
          project={activeProject}
          onClose={closeProject}
          onOpenProject={openProject}
        />
      )}
    </>
  )
}
