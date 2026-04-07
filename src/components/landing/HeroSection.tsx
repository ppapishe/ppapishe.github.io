import { motion } from 'framer-motion'
import { personal } from '../../data/personal'

// Show first two non-TODO bio paragraphs
function getBio() {
  return personal.bio.filter(p => !p.startsWith('TODO')).slice(0, 2)
}

export function HeroSection() {
  const bio = getBio()

  return (
    <section style={{
      padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 4rem) clamp(3rem, 6vw, 5rem)',
      background: '#f9f7f4',
      color: '#111111',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ maxWidth: '720px' }}
      >
        {/* Role line above name */}
        <p style={{
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#999999',
          margin: '0 0 0.75rem',
        }}>
          Senior Software Engineer · Slack · Datastores
        </p>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          margin: '0 0 1.25rem',
          color: '#111111',
        }}>
          {personal.name}
        </h1>

        {/* Bio */}
        {bio.length > 0 && (
          <div style={{ marginBottom: '1.75rem', maxWidth: '560px' }}>
            {bio.map((paragraph, i) => (
              <p key={i} style={{
                margin: i < bio.length - 1 ? '0 0 0.75rem' : '0',
                fontSize: '1rem',
                lineHeight: 1.65,
                color: '#555555',
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a
            href="#orbit"
            style={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#111111',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
            }}
          >
            <span>↓</span>
            <span>My work</span>
          </a>

          <div style={{ width: '1px', height: '1rem', background: '#ddd' }} />

          <a
            href={personal.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.875rem', color: '#888', textDecoration: 'none' }}
          >
            LinkedIn
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.875rem', color: '#888', textDecoration: 'none' }}
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
