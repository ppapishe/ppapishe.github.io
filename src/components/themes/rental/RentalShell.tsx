import { motion } from 'framer-motion'
import { companies } from '../../../data/companies'
import { personal } from '../../../data/personal'
import { NavBackButton } from '../../shared/NavBackButton'
import { TechBadge } from '../../shared/TechBadge'
import '../../../styles/themes/rental.css'

const company = companies.rental

const ORANGE = company.brandPrimary   // #e8a200
const RED = company.brandSecondary    // #cc2500
const TEXT = '#1a1a1a'
const TEXT_DIM = '#6b7280'
const BORDER = '#e5e7eb'

export function RentalShell() {
  const startYear = company.startDate.split('-')[0]
  const endYear = company.endDate === 'present' ? 'Present' : company.endDate.split('-')[0]

  return (
    <motion.div
      data-testid="shell-rental"
      className="rental-shell"
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.92, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ '--brand-primary': ORANGE, '--brand-secondary': RED } as React.CSSProperties}
    >
      {/* Hero */}
      <div className="rental-hero">
        <div className="rental-hero-bg" />
        <div className="rental-hero-overlay" />

        <motion.div
          className="rental-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.02em' }}>
              Dollar · Thrifty
            </div>
            <NavBackButton
              label="← Back"
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff', borderRadius: '4px', padding: '0.375rem 0.875rem', cursor: 'pointer', fontSize: '0.8125rem' }}
            />
          </div>

          <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#ffffff', margin: '0 0 0.375rem', letterSpacing: '-0.01em' }}>
            {personal.name}
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 0.25rem' }}>
            {company.role} · {company.name}
          </p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', margin: 0 }}>
            {startYear}–{endYear} · {company.location}
          </p>

          {/* Decorative booking bar */}
          <div className="rental-booking-bar">
            <div className="rental-booking-field">
              <div className="rental-booking-label" style={{ color: '#fff' }}>Pick-up</div>
              <div className="rental-booking-input">{company.location}</div>
            </div>
            <div className="rental-booking-field">
              <div className="rental-booking-label" style={{ color: '#fff' }}>From</div>
              <div className="rental-booking-input">{startYear}</div>
            </div>
            <div className="rental-booking-field">
              <div className="rental-booking-label" style={{ color: '#fff' }}>To</div>
              <div className="rental-booking-input">{endYear}</div>
            </div>
            <div style={{ padding: '0.5rem 1.25rem', background: RED, color: '#fff', borderRadius: '4px', fontWeight: 700, fontSize: '0.9375rem', cursor: 'default' }}>
              View Fleet
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="rental-content">
        <div className="rental-content-inner">

          {/* Projects as "car fleet" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <div className="rental-section-title" style={{ color: TEXT }}>Project Fleet</div>
            <div className="rental-car-grid">
              {company.projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="rental-car-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div
                    className="rental-car-image"
                    style={{ background: `linear-gradient(135deg, ${ORANGE}30, ${RED}20)` }}
                  >
                    🚗
                  </div>
                  <div className="rental-car-body">
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem', color: TEXT }}>{project.title}</div>
                    <p style={{ fontSize: '0.8125rem', color: TEXT_DIM, margin: '0 0 0.625rem', lineHeight: 1.5 }}>{project.description}</p>
                    {project.impact.length > 0 && (
                      <div style={{ fontSize: '0.8125rem', color: ORANGE, fontWeight: 600, marginBottom: '0.5rem' }}>{project.impact[0]}</div>
                    )}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', color: RED }}>
                      {project.techStack.map(t => <TechBadge key={t} label={t} style={{ fontSize: '0.6875rem', padding: '0.125rem 0.5rem' }} />)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* My story */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{ marginBottom: '2rem' }}
          >
            <div className="rental-section-title" style={{ color: TEXT }}>My Road Here</div>
            <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {company.narrative.map((para, i) => (
                <p key={i} style={{ margin: 0, color: TEXT_DIM, lineHeight: 1.7, fontSize: '0.9375rem' }}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          {company.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              style={{ marginBottom: '2rem' }}
            >
              <div className="rental-section-title" style={{ color: TEXT }}>Key Highlights</div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {company.highlights.map((h, i) => (
                  <li key={i} style={{ color: TEXT_DIM, fontSize: '0.9375rem' }}>{h}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="rental-section-title" style={{ color: TEXT }}>Tech Stack</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {company.techStack.map(cat => (
                <div key={cat.category}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.375rem' }}>{cat.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', color: TEXT }}>
                    {cat.items.map(item => <TechBadge key={item} label={item} style={{ borderColor: BORDER, fontSize: '0.75rem' }} />)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
