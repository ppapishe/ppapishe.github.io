import { useState } from 'react'
import { motion } from 'framer-motion'
import { companies } from '../../../data/companies'
import { personal } from '../../../data/personal'
import { NavBackButton } from '../../shared/NavBackButton'
import { TechBadge } from '../../shared/TechBadge'
import '../../../styles/themes/hbomax.css'

const company = companies.hbomax

const BG = '#0d0d0d'
const TEXT = '#ffffff'
const TEXT_DIM = 'rgba(255,255,255,0.6)'
const CARD_BG = '#1c1c1c'
const BORDER = 'rgba(255,255,255,0.1)'

type Section = 'home' | 'projects' | 'my-story' | 'skills'

const navItems: { id: Section; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'my-story', label: 'My Story' },
  { id: 'skills', label: 'Skills' },
]

function HeroSection() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* Cinematic background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f1923 100%)',
      }} />
      {/* Bottom gradient overlay like HBO Max */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.7) 40%, rgba(13,13,13,0.2) 70%, transparent 100%)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ position: 'relative', padding: '3rem 2.5rem', maxWidth: '600px' }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: TEXT_DIM, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          INFRASTRUCTURE · ORIGINAL
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
          {personal.name}
        </h1>
        <p style={{ fontSize: '1rem', color: TEXT_DIM, margin: '0 0 0.5rem', lineHeight: 1.5 }}>
          {company.tagline}
        </p>
        <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
          {company.startDate.split('-')[0]} – {company.endDate === 'present' ? 'Present' : company.endDate.split('-')[0]} · {company.location}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: TEXT, color: BG,
            border: 'none', borderRadius: '4px',
            padding: '0.625rem 1.25rem',
            fontWeight: 700, fontSize: '0.9375rem', cursor: 'default',
          }}>
            ▶ Watch Now
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.15)', color: TEXT,
            border: 'none', borderRadius: '4px',
            padding: '0.625rem 1.25rem',
            fontWeight: 600, fontSize: '0.9375rem', cursor: 'default',
            backdropFilter: 'blur(4px)',
          }}>
            + My List
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function ContentRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '0 2.5rem 2rem' }}>
      <div style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.875rem', color: TEXT }}>{title}</div>
      <div className="hbomax-row">{children}</div>
    </div>
  )
}

function ProjectCard({ title, description, impact, techStack }: {
  title: string; description: string; impact: string[]; techStack: string[]
}) {
  return (
    <div className="hbomax-card" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, minWidth: '240px', width: '240px' }}>
      <div style={{
        height: '110px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '2rem', borderBottom: `1px solid ${BORDER}`,
      }}>
        📦
      </div>
      <div className="hbomax-card-body">
        <div style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.375rem', color: TEXT }}>{title}</div>
        <p style={{ fontSize: '0.8rem', color: TEXT_DIM, margin: '0 0 0.5rem', lineHeight: 1.4 }}>{description}</p>
        {impact[0] && <div style={{ fontSize: '0.75rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>{impact[0]}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', color: 'rgba(255,255,255,0.5)' }}>
          {techStack.slice(0, 3).map(t => <TechBadge key={t} label={t} style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }} />)}
        </div>
      </div>
    </div>
  )
}

function StorySection() {
  return (
    <div style={{ padding: '0 2.5rem 2rem', maxWidth: '680px' }}>
      <div style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>My Story</div>
      {company.narrative.map((para, i) => (
        <p key={i} style={{ margin: '0 0 0.875rem', color: TEXT_DIM, lineHeight: 1.7, fontSize: '0.9375rem' }}>{para}</p>
      ))}
      {company.highlights.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Highlights</div>
          {company.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>—</span>
              <span style={{ color: TEXT_DIM, fontSize: '0.9375rem', lineHeight: 1.5 }}>{h}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function SkillsSection() {
  return (
    <div style={{ padding: '0 2.5rem 3rem' }}>
      <div style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>Tech Stack</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {company.techStack.map(cat => (
          <div key={cat.category}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{cat.category}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', color: 'rgba(255,255,255,0.6)' }}>
              {cat.items.map(item => <TechBadge key={item} label={item} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const sectionContent: Record<Section, React.ReactNode> = {
  home: (
    <>
      <HeroSection />
      <ContentRow title="Projects">
        {company.projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </ContentRow>
    </>
  ),
  projects: (
    <div style={{ padding: '2rem 2.5rem' }}>
      <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: TEXT }}>Projects</div>
      <div className="hbomax-project-grid">
        {company.projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </div>
  ),
  'my-story': <div style={{ paddingTop: '2rem' }}><StorySection /></div>,
  skills: <div style={{ paddingTop: '2rem' }}><SkillsSection /></div>,
}

export function HBOMaxShell() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  return (
    <motion.div
      data-testid="shell-hbomax"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: "'HBO Sans', 'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* Top nav — matches HBO Max layout */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center',
        padding: '0 2rem', height: '60px',
        background: 'linear-gradient(to bottom, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.7) 100%)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${BORDER}`,
      }}>
        {/* HBO max logo */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.1rem', marginRight: '2.5rem', flexShrink: 0 }}>
          <span style={{ fontSize: '1.125rem', fontWeight: 900, color: TEXT, letterSpacing: '-0.01em' }}>HBO</span>
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: TEXT_DIM, letterSpacing: '0.02em' }}>max</span>
        </div>

        {/* Center nav items */}
        <div style={{ display: 'flex', gap: '0.25rem', flex: 1 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.375rem 0.75rem',
                fontSize: '0.9375rem',
                fontWeight: activeSection === item.id ? 700 : 400,
                color: activeSection === item.id ? TEXT : TEXT_DIM,
                borderBottom: activeSection === item.id ? `2px solid ${TEXT}` : '2px solid transparent',
                transition: 'color 0.15s, border-color 0.15s',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: search + bookmark + profile avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <span style={{ color: TEXT_DIM, fontSize: '1.125rem', cursor: 'default' }}>🔍</span>
          <span style={{ color: TEXT_DIM, fontSize: '1.125rem', cursor: 'default' }}>🔖</span>
          <div style={{
            width: '30px', height: '30px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #611f69, #1264a3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.6875rem', fontWeight: 700, color: TEXT,
            cursor: 'default', flexShrink: 0,
          }}>PP</div>
          <NavBackButton
            label="← Exit"
            style={{ background: 'none', border: `1px solid ${BORDER}`, color: TEXT_DIM, borderRadius: '4px', padding: '0.3rem 0.75rem', cursor: 'pointer', fontSize: '0.8125rem' }}
          />
        </div>
      </nav>

      {/* Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {sectionContent[activeSection]}
      </motion.div>
    </motion.div>
  )
}
