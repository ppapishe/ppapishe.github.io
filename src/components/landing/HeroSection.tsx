import { motion } from 'framer-motion'
import { personal } from '../../data/personal'

export function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #611f69, #1264a3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#ffffff',
        }}>
          PP
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
          {personal.name}
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#a0aec0', margin: '0 0 2rem' }}>
          {personal.title}
        </p>

        <a href="#orbit" style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '9999px',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '0.9375rem',
          transition: 'background 0.2s',
        }}>
          View my work
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ position: 'absolute', bottom: '2rem', fontSize: '1.5rem' }}
      >
        ↓
      </motion.div>
    </section>
  )
}
