import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { companies, companyOrder } from '../../data/companies'
import { usePortfolioStore } from '../../store/usePortfolioStore'
import type { CompanyId } from '../../types'

function formatDateRange(start: string, end: string | 'present') {
  const startYear = start.split('-')[0]
  const endYear = end === 'present' ? 'Present' : end.split('-')[0]
  return `${startYear} – ${endYear}`
}

function CompanyCard({ id }: { id: CompanyId }) {
  const company = companies[id]
  const navigate = useNavigate()
  const setActiveCompany = usePortfolioStore(s => s.setActiveCompany)

  const handleClick = () => {
    setActiveCompany(id)
    navigate(`/${id}`)
  }

  return (
    <motion.button
      onClick={handleClick}
      data-testid={`company-card-${id}`}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      style={{
        background: company.brandPrimary,
        color: company.brandAccent,
        border: 'none',
        borderRadius: '12px',
        padding: '1.75rem',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.25rem' }}>
          {company.shortName}
        </div>
        <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.75rem' }}>
          {company.role}
        </div>
        <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          {formatDateRange(company.startDate, company.endDate)} · {company.location}
        </div>

        <div style={{
          marginTop: '1rem',
          fontSize: '0.75rem',
          opacity: 0.7,
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
        }}>
          <span>Enter {company.name}</span>
          <span>→</span>
        </div>
      </div>
    </motion.button>
  )
}

export function CompanyOrbit() {
  return (
    <section id="orbit" style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)',
      background: '#0f0f0f',
      color: '#ffffff',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
          Where I've worked
        </h2>
        <p style={{ textAlign: 'center', color: '#718096', marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
          Click any company to see my work in their UI style.
        </p>

        <div className="company-orbit-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
        }}>
          {companyOrder.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CompanyCard id={id} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
