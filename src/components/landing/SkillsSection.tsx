import { motion } from 'framer-motion'
import { personal } from '../../data/personal'
import { TechBadge } from '../shared/TechBadge'

export function SkillsSection() {
  return (
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)',
      background: '#0f0f0f',
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
          Skills
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {personal.skills.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.625rem' }}>
                {category.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', color: '#e2e8f0' }}>
                {category.items.map(item => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
