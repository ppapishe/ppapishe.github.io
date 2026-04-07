import { motion } from 'framer-motion'
import { NavBackButton } from '../../shared/NavBackButton'

const BG = '#f9f7f4'
const TEXT = '#111111'
const TEXT_DIM = '#555555'
const MUTED = '#999999'
const BORDER = '#e5e7eb'

interface TimelineEntry {
  year: string
  title: string
  org: string
  location: string
  bullets: string[]
  type: 'education' | 'work' | 'cert'
}

const entries: TimelineEntry[] = [
  {
    year: '2013',
    title: 'Master\'s Degree — Information System Technology',
    org: 'Wilmington University',
    location: 'New Castle, DE',
    type: 'education',
    bullets: [
      'Pivoted from Chemistry at WKU to Information Systems — best decision of my career.',
      'Internship built Oracle 11g schemas for an Electronic Medical Records system: ~30 tables, views, procedures, and triggers. First real database work.',
    ],
  },
  {
    year: '2011 – 2013',
    title: 'Intern — Electronic Medical Records Project',
    org: 'Wilmington University',
    location: 'New Castle, DE',
    type: 'work',
    bullets: [
      'Built Oracle 11g database schemas for an EMR system — tables, views, procedures, triggers, referential integrity constraints.',
      'Collaborated with UI team to integrate the data layer.',
      'First exposure to what production database design actually looks like.',
    ],
  },
  {
    year: '2011',
    title: 'Library Assistant',
    org: 'Helms-Cravens Library, Western Kentucky University',
    location: 'Bowling Green, KY',
    type: 'work',
    bullets: [
      'On-campus job while pursuing a Chemistry master\'s degree at WKU.',
      'Managed catalog intake and inventory workflows. Realized Chemistry wasn\'t the path — pivoted to Information Systems at Wilmington University.',
    ],
  },
  {
    year: 'Active',
    title: 'Apache Cassandra Certified Professional',
    org: 'DataStax',
    location: '',
    type: 'cert',
    bullets: [
      'Certified in Apache Cassandra architecture, data modeling, and operations.',
    ],
  },
]

const typeColors: Record<TimelineEntry['type'], string> = {
  education: '#1264a3',
  work: '#611f69',
  cert: '#2bac76',
}

const typeLabels: Record<TimelineEntry['type'], string> = {
  education: 'EDUCATION',
  work: 'EXPERIENCE',
  cert: 'CERTIFICATION',
}

export function EducationShell() {
  return (
    <motion.div
      data-testid="shell-education"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      {/* Header — matches landing page editorial style */}
      <div style={{ padding: 'clamp(3rem, 8vw, 5rem) clamp(1.5rem, 6vw, 4rem) 2rem', borderBottom: `1px solid ${BORDER}` }}>
        <NavBackButton
          label="← Back"
          style={{ background: 'none', border: 'none', color: MUTED, cursor: 'pointer', fontSize: '0.875rem', padding: 0, marginBottom: '2rem', display: 'block' }}
        />
        <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, margin: '0 0 0.75rem' }}>
          Background
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 1rem', color: TEXT }}>
          Education &<br />Early Career
        </h1>
        <p style={{ fontSize: '1rem', color: TEXT_DIM, maxWidth: '520px', lineHeight: 1.65, margin: 0 }}>
          Started at WKU for Chemistry, realized it wasn't the path, pivoted to Information Systems at Wilmington University — and the rest followed from there.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: '720px', padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 6vw, 4rem)' }}>
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: i < entries.length - 1 ? '2.5rem' : 0,
            }}
          >
            {/* Timeline spine */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '20px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: typeColors[entry.type], marginTop: '0.3rem', flexShrink: 0 }} />
              {i < entries.length - 1 && (
                <div style={{ width: '1px', flex: 1, background: BORDER, marginTop: '0.375rem' }} />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em', color: typeColors[entry.type], textTransform: 'uppercase' }}>
                  {typeLabels[entry.type]}
                </span>
                <span style={{ fontSize: '0.75rem', color: MUTED }}>{entry.year}</span>
                {entry.location && (
                  <span style={{ fontSize: '0.75rem', color: MUTED }}>· {entry.location}</span>
                )}
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.125rem', color: TEXT }}>{entry.title}</h3>
              <div style={{ fontSize: '0.875rem', color: TEXT_DIM, marginBottom: '0.75rem' }}>{entry.org}</div>

              <ul style={{ margin: 0, paddingLeft: '1.125rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {entry.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: '0.9375rem', color: TEXT_DIM, lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
