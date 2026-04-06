import { motion } from 'framer-motion'
import { companies } from '../../../data/companies'
import { personal } from '../../../data/personal'
import { NavBackButton } from '../../shared/NavBackButton'
import { TechBadge } from '../../shared/TechBadge'
import '../../../styles/themes/att.css'

const company = companies.att

const BLUE = company.brandPrimary  // #00a8e0
const BG = '#f5f7fa'
const WHITE = '#ffffff'
const TEXT = '#1a1a1a'
const TEXT_DIM = '#6b7280'
const BORDER = '#e5e7eb'
const CARD_BORDER = '#d1d5db'

interface StatCardProps {
  label: string
  value: string
  sub?: string
}

function StatCard({ label, value, sub }: StatCardProps) {
  return (
    <div className="att-account-card" style={{ background: WHITE, borderColor: CARD_BORDER }}>
      <div style={{ fontSize: '0.75rem', color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>{label}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: BLUE }}>{value}</div>
      {sub && <div style={{ fontSize: '0.8125rem', color: TEXT_DIM, marginTop: '0.25rem' }}>{sub}</div>}
    </div>
  )
}

export function ATTShell() {
  const startYear = company.startDate.split('-')[0]
  const endYear = company.endDate === 'present' ? 'Present' : company.endDate.split('-')[0]

  return (
    <motion.div
      data-testid="shell-att"
      className="att-shell"
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ background: BG, color: TEXT, '--brand-primary': BLUE } as React.CSSProperties}
    >
      {/* Header */}
      <header className="att-header" style={{ background: BLUE }}>
        <div style={{ fontSize: '1.375rem', fontWeight: 900, color: WHITE, letterSpacing: '0.02em' }}>
          AT&T
        </div>
        <div style={{ marginLeft: '1.5rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem' }}>
          myAccount — {personal.name}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <NavBackButton
            label="← Portfolio"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: WHITE, borderRadius: '4px', padding: '0.375rem 0.875rem', cursor: 'pointer', fontSize: '0.875rem' }}
          />
        </div>
      </header>

      <div className="att-content">
        {/* Account summary cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="att-account-summary">
            <StatCard label="Role" value={company.role} />
            <StatCard label="Team" value={company.team} sub={company.name} />
            <StatCard label="Tenure" value={`${startYear}–${endYear}`} sub={company.location} />
            <StatCard label="Projects" value={`${company.projects.length}`} sub="shipped" />
          </div>
        </motion.div>

        {/* Highlights */}
        {company.highlights.length > 0 && (
          <motion.div
            className="att-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="att-section-title" style={{ color: TEXT, borderBottomColor: BLUE }}>Highlights</div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {company.highlights.map((h, i) => (
                <li key={i} style={{ color: TEXT_DIM, fontSize: '0.9375rem', lineHeight: 1.5 }}>{h}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Projects */}
        <motion.div
          className="att-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="att-section-title" style={{ color: TEXT, borderBottomColor: BLUE }}>Projects</div>
          <div className="att-project-grid">
            {company.projects.map(project => (
              <div key={project.id} style={{ background: WHITE, border: `1px solid ${CARD_BORDER}`, borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontWeight: 700, marginBottom: '0.375rem', color: TEXT }}>{project.title}</div>
                <p style={{ fontSize: '0.875rem', color: TEXT_DIM, margin: '0 0 0.75rem', lineHeight: 1.5 }}>{project.description}</p>
                {project.impact.length > 0 && (
                  <div style={{ fontSize: '0.8125rem', color: BLUE, fontWeight: 600, marginBottom: '0.5rem' }}>{project.impact[0]}</div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', color: BLUE }}>
                  {project.techStack.map(t => <TechBadge key={t} label={t} style={{ fontSize: '0.75rem' }} />)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          className="att-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="att-section-title" style={{ color: TEXT, borderBottomColor: BLUE }}>My Story</div>
          <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {company.narrative.map((para, i) => (
              <p key={i} style={{ margin: 0, color: TEXT_DIM, lineHeight: 1.7, fontSize: '0.9375rem' }}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          className="att-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="att-section-title" style={{ color: TEXT, borderBottomColor: BLUE }}>Tech Stack</div>
          <div className="att-tech-table">
            {company.techStack.map(cat => (
              <div key={cat.category} className="att-tech-category" style={{ background: WHITE, borderColor: CARD_BORDER }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>{cat.category}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', color: TEXT }}>
                  {cat.items.map(item => <TechBadge key={item} label={item} style={{ fontSize: '0.75rem', borderColor: BORDER } } />)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
