import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { companies, companyOrder, eraDisplayMap } from '../../data/companies'
import { personal } from '../../data/personal'
import type { CompanyId, Project } from '../../types'
import '../../styles/unified.css'

/* ─── SVG Logo Defs (rendered once, referenced via <use>) ─── */
function LogoDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="logo-slack" viewBox="0 0 24 24">
          <g>
            <path d="M5.04 15.165a2.087 2.087 0 1 1-2.087-2.087h2.087v2.087zm1.052 0a2.087 2.087 0 1 1 4.174 0v5.226a2.087 2.087 0 1 1-4.174 0v-5.226z" fill="#E01E5A"/>
            <path d="M8.179 6.787A2.087 2.087 0 1 1 10.266 4.7v2.087H8.179zm0 1.069a2.087 2.087 0 1 1 0 4.174H2.937a2.087 2.087 0 1 1 0-4.174h5.242z" fill="#36C5F0"/>
            <path d="M16.541 8.856a2.087 2.087 0 1 1 2.087 2.087h-2.087V8.856zm-1.052 0a2.087 2.087 0 1 1-4.174 0V3.63a2.087 2.087 0 1 1 4.174 0v5.226z" fill="#2EB67D"/>
            <path d="M13.402 17.213a2.087 2.087 0 1 1-2.087 2.087v-2.087h2.087zm0-1.052a2.087 2.087 0 1 1 0-4.174h5.242a2.087 2.087 0 1 1 0 4.174h-5.242z" fill="#ECB22E"/>
          </g>
        </symbol>
        <symbol id="logo-hbo" viewBox="0 0 468 281">
          <image href="/logos/hbo-max.png" x="0" y="0" width="468" height="281" preserveAspectRatio="xMidYMid meet" />
        </symbol>
        <symbol id="logo-att" viewBox="0 0 2400 985">
          <image href="/logos/att.png" x="0" y="0" width="2400" height="985" preserveAspectRatio="xMidYMid meet" />
        </symbol>
        <symbol id="logo-hertz" viewBox="0 0 32 24">
          <text x="16" y="17" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11" fill="#000" letterSpacing="0.5">Hertz</text>
        </symbol>
      </defs>
    </svg>
  )
}

/* ─── Header ─── */
function UnifiedHeader() {
  return (
    <header className="u-header">
      <div className="u-wrap u-header-inner">
        <a href="#" className="u-brand" aria-label="Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="u-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="9" fill="#0a0a0a"/>
              <path d="M13 28 V12 H22 a6 6 0 0 1 0 12 H17" stroke="#f4f2ed" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="27" cy="28" r="1.6" fill="#c96a3a"/>
            </svg>
          </span>
          <span className="u-brand-name">Praneeth Papishetty</span>
        </a>
        <div className="u-socials">
          <Link
            className="u-social-btn"
            to="/blog"
            aria-label="Blog"
            title="Blog"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z"/><line x1="8" y1="9" x2="15" y2="9"/><line x1="8" y1="13" x2="15" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>
          </Link>
          <a className="u-social-btn" href={personal.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8.5 8h4.36v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 6.99V22h-4.56v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H8.5V8z"/></svg>
          </a>
          <a className="u-social-btn" href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
          </a>
          <a className="u-social-btn" href={personal.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
      </div>
    </header>
  )
}

/* ─── Chevron icon ─── */
const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

/* ─── Expandable Project Card ─── */
function ExpandableProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className={`u-project${isOpen ? ' open' : ''}`}>
      <button
        className="u-project-summary"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="u-project-summary-row">
          <h4>{project.title}</h4>
          <span className="u-chev"><ChevronDown /></span>
        </div>
        <p>{project.description}</p>
        <div className="u-stack">
          {project.techStack.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </button>
      <div className="u-project-detail">
        <div className="u-project-detail-inner">
          <div className="u-project-detail-content">
            {project.lede && <p className="u-lede">{project.lede}</p>}

            {project.impactStats && project.impactStats.length > 0 && (
              <div className="u-impact">
                {project.impactStats.map(stat => (
                  <div className="u-stat" key={stat.label}>
                    <div className="u-num">{stat.value}</div>
                    <div className="u-lbl">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="u-kv">
              {project.roleDetail && (
                <><div className="u-k">Role</div><div className="u-v">{project.roleDetail}</div></>
              )}
              {project.stackDetail && (
                <><div className="u-k">Stack</div><div className="u-v">{project.stackDetail}</div></>
              )}
              {project.status && (
                <><div className="u-k">Status</div><div className="u-v">{project.status}</div></>
              )}
            </div>

            {project.bullets && project.bullets.length > 0 && (
              <ul className="u-bullets">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

/* ─── Era Section ─── */
function EraSection({ companyId }: { companyId: CompanyId }) {
  const company = companies[companyId]
  const era = eraDisplayMap[companyId]

  return (
    <section id={era.eraClass} className={`u-era-section ${era.eraClass}`}>
      <div className="u-wrap">
        <div className="u-era-head">
          <div>
            <span className={`u-era-tag ${era.eraClass}`}>{era.eraTagLabel}</span>
            <div className="u-era-meta">{era.dateRange}<br/>{era.locationDisplay}</div>
          </div>
          <div>
            <h2 className="u-era-title">{era.eraTitle} <em>{era.eraTitleEm}</em></h2>
            <p className="u-era-tagline">{era.eraTagline}</p>
          </div>
        </div>
        <div className="u-projects">
          {company.projects.map(project => (
            <ExpandableProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Timeline Rail ─── */
const timelineItems: { target: string; eraClass: string; logoId: string; logoWidth: number; logoHeight: number; label: string }[] = [
  { target: 'slack', eraClass: 'slack', logoId: '#logo-slack', logoWidth: 14, logoHeight: 14, label: 'Slack' },
  { target: 'hbo', eraClass: 'hbo', logoId: '#logo-hbo', logoWidth: 30, logoHeight: 18, label: 'Warner Bros. Discovery / HBO Max' },
  { target: 'att', eraClass: 'att', logoId: '#logo-att', logoWidth: 44, logoHeight: 18, label: 'AT&T' },
  { target: 'hertz', eraClass: 'hertz', logoId: '#logo-hertz', logoWidth: 30, logoHeight: 14, label: 'Hertz' },
]

function TimelineRail() {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleScroll = useCallback(() => {
    const y = window.scrollY + window.innerHeight * 0.4
    let active = -1
    const ids = ['slack', 'hbo', 'att', 'hertz']
    ids.forEach((id, i) => {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) active = i
    })
    setActiveIndex(active)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTo = (target: string) => {
    const el = document.getElementById(target)
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' })
  }

  return (
    <nav className="u-timeline" id="timeline" aria-label="Era timeline">
      {timelineItems.map((item, i) => (
        <button
          key={item.target}
          className={`${item.eraClass}${i === activeIndex ? ' active' : ''}`}
          aria-label={item.label}
          onClick={() => scrollTo(item.target)}
        >
          <span className="u-dot" />
          <span className={`u-tl-logo ${item.eraClass}`}>
            <svg width={item.logoWidth} height={item.logoHeight}><use href={item.logoId}/></svg>
          </span>
        </button>
      ))}
    </nav>
  )
}

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="u-hero u-wrap">
      <div className="u-hero-grid">
        <div>
          <div className="u-eyebrow">Builder &middot; Datastores &middot; Slack</div>
          <h1>Praneeth<br/>Papishetty<span className="u-dot">.</span></h1>
          {personal.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="u-hero-links">
            <a
              href="#slack"
              style={{ color: 'var(--ink)', fontWeight: 500 }}
              onClick={(e) => { e.preventDefault(); document.getElementById('slack')?.scrollIntoView({ behavior: 'smooth' }) }}
            >&darr; My work</a>
            <a
              href="#resume"
              style={{ color: 'var(--ink)', fontWeight: 500 }}
              onClick={(e) => { e.preventDefault(); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }) }}
            >&darr; Resume</a>
          </div>
        </div>
        <div className="u-portrait" id="portrait">
          <img src="portrait.jpg" alt="Praneeth Papishetty" />
        </div>
      </div>
    </section>
  )
}

/* ─── Resume Section ─── */
function ResumeSection() {
  return (
    <section id="resume" className="u-resume-section">
      <div className="u-wrap">
        <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500, marginBottom: '18px' }}>
          Resume
        </div>
        <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', lineHeight: 1, letterSpacing: '-0.03em', margin: 0, fontWeight: 600 }}>
          The full version<span style={{ color: '#c96a3a' }}>.</span>
        </h2>
        <div className="u-resume-grid">
          <div className="u-resume-card">
            <h3>Grab the PDF</h3>
            <p>Full work history, certifications, and tech depth &mdash; formatted for recruiters and easy to skim.</p>
            <a className="u-resume-cta" href="resume.pdf" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
            <a className="u-resume-cta secondary" href="resume.pdf" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Resume
            </a>
            <a className="u-resume-cta secondary" href={`mailto:${personal.email}?subject=Hi%20Praneeth`}>Get in touch</a>
          </div>
          <div className="u-facts">
            <div className="u-fact"><div className="u-k">Based in</div><div className="u-v">{personal.location}</div></div>
            <div className="u-fact"><div className="u-k">Currently</div><div className="u-v">Sr. Software Engineer &middot; Slack</div></div>
            <div className="u-fact">
              <div className="u-k">Education</div>
              <div className="u-v">M.S. Information Systems Technology<br/><span style={{ color: 'var(--ink-dim)', fontSize: '13px' }}>Wilmington University, Delaware</span></div>
            </div>
            <div className="u-fact"><div className="u-k">Certifications</div><div className="u-v">Cassandra Certified Professional</div></div>
          </div>
        </div>
      </div>
      <footer className="u-footer u-wrap">
        <span>&copy; 2026 Praneeth Papishetty</span>
        <span>Seattle metro &middot; Available for conversation</span>
      </footer>
    </section>
  )
}

/* ─── Main Unified Portfolio ─── */
export function UnifiedPortfolio() {
  return (
    <div>
      <LogoDefs />
      <UnifiedHeader />
      <TimelineRail />
      <HeroSection />

      {companyOrder.map(id => (
        <EraSection key={id} companyId={id} />
      ))}

      <ResumeSection />
    </div>
  )
}
