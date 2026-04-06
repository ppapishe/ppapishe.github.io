import { motion } from 'framer-motion'
import { companies } from '../../../data/companies'
import { personal } from '../../../data/personal'
import { NavBackButton } from '../../shared/NavBackButton'
import { TechBadge } from '../../shared/TechBadge'
import '../../../styles/themes/hbomax.css'

const company = companies.hbomax

const BG = '#0d0d0d'
const TEXT = '#ffffff'
const TEXT_DIM = 'rgba(255,255,255,0.65)'
const CARD_BG = '#1a1a1a'
const ACCENT = company.brandSecondary  // #00c8ff

export function HBOMaxShell() {
  return (
    <motion.div
      data-testid="shell-hbomax"
      className="hbomax-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ background: BG, color: TEXT, '--brand-primary': company.brandPrimary, '--brand-secondary': company.brandSecondary } as React.CSSProperties}
    >
      {/* Sticky nav */}
      <nav className="hbomax-nav" style={{ background: 'rgba(13,13,13,0.8)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.05em', color: TEXT }}>
          {company.shortName}
        </div>
        <div style={{ marginLeft: '2rem', color: TEXT_DIM, fontSize: '0.875rem' }}>
          {company.role} · {company.startDate.split('-')[0]}–{company.endDate === 'present' ? 'Present' : company.endDate.split('-')[0]}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <NavBackButton
            label="← Back"
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: TEXT, borderRadius: '4px', padding: '0.375rem 0.875rem', cursor: 'pointer', fontSize: '0.875rem' }}
          />
        </div>
      </nav>

      {/* Hero */}
      <div className="hbomax-hero">
        <div className="hbomax-hero-bg" />
        <div className="hbomax-hero-overlay" />
        <motion.div
          className="hbomax-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            {company.name}
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
            {personal.name}
          </h1>
          <p style={{ fontSize: '1.0625rem', color: TEXT_DIM, margin: '0 0 1rem', lineHeight: 1.5 }}>
            {company.tagline}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {company.highlights.map((h, i) => (
              <span key={i} style={{ fontSize: '0.8125rem', background: 'rgba(255,255,255,0.12)', borderRadius: '4px', padding: '0.25rem 0.625rem', color: TEXT }}>
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects row */}
      <div className="hbomax-section">
        <div className="hbomax-section-title" style={{ color: TEXT }}>Projects</div>
        <div className="hbomax-row">
          {company.projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="hbomax-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              style={{ background: CARD_BG, border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div style={{ height: '120px', background: `linear-gradient(135deg, ${company.brandPrimary}80, ${company.brandSecondary}40)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                📦
              </div>
              <div className="hbomax-card-body">
                <div style={{ fontWeight: 700, marginBottom: '0.375rem', color: TEXT }}>{project.title}</div>
                <p style={{ fontSize: '0.8125rem', color: TEXT_DIM, margin: '0 0 0.75rem', lineHeight: 1.4 }}>{project.description}</p>
                {project.impact.length > 0 && (
                  <div style={{ fontSize: '0.75rem', color: ACCENT, marginBottom: '0.5rem' }}>{project.impact[0]}</div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', color: ACCENT }}>
                  {project.techStack.slice(0, 3).map(t => <TechBadge key={t} label={t} style={{ fontSize: '0.6875rem', padding: '0.125rem 0.5rem' }} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story section */}
      <div className="hbomax-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="hbomax-section-title" style={{ color: TEXT }}>My Story at {company.shortName}</div>
        <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {company.narrative.map((para, i) => (
            <p key={i} style={{ margin: 0, color: TEXT_DIM, lineHeight: 1.7, fontSize: '0.9375rem' }}>{para}</p>
          ))}
        </div>
      </div>

      {/* Tech stack section */}
      <div className="hbomax-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingBottom: '3rem' }}>
        <div className="hbomax-section-title" style={{ color: TEXT }}>Tech Stack</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {company.techStack.map(cat => (
            <div key={cat.category}>
              <div style={{ fontSize: '0.75rem', color: ACCENT, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{cat.category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', color: TEXT }}>
                {cat.items.map(item => <TechBadge key={item} label={item} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
