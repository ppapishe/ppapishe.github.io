import { motion } from 'framer-motion'
import { personal } from '../../data/personal'

interface SocialLink {
  label: string
  url: string
  icon: string
}

const links: SocialLink[] = [
  { label: 'LinkedIn', url: personal.linkedIn, icon: 'in' },
  { label: 'GitHub', url: personal.github, icon: 'gh' },
  { label: 'Instagram', url: personal.instagram, icon: 'ig' },
]

export function ContactSection() {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)',
      background: '#111111',
      color: '#ffffff',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '480px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
          Get in touch
        </h2>
        <p style={{ color: '#718096', marginBottom: '2rem', lineHeight: 1.6 }}>
          I'm always happy to connect with engineers, recruiters, and builders.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.6 }}>{link.icon.toUpperCase()}</span>
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
