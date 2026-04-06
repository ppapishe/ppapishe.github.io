import { motion } from 'framer-motion'
import { personal } from '../../data/personal'

export function AboutSection() {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)',
      background: '#111111',
      color: '#ffffff',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '720px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
          About me
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {personal.bio.map((paragraph, i) => (
            <p key={i} style={{ margin: 0, lineHeight: 1.7, color: '#cbd5e0', fontSize: '1rem' }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
          <span>📍</span>
          <span>{personal.location}</span>
        </div>
      </motion.div>
    </section>
  )
}
