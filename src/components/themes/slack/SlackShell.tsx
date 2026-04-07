import { useState } from 'react'
import { motion } from 'framer-motion'
import { companies } from '../../../data/companies'
import { personal } from '../../../data/personal'
import { NavBackButton } from '../../shared/NavBackButton'
import { ProjectCard } from '../../shared/ProjectCard'
import { TechBadge } from '../../shared/TechBadge'
import '../../../styles/themes/slack.css'

const company = companies.slack

type Channel = 'about-me' | 'projects' | 'tech-stack' | 'my-story'

const channels: { id: Channel; label: string }[] = [
  { id: 'about-me', label: 'about-me' },
  { id: 'projects', label: 'projects' },
  { id: 'tech-stack', label: 'tech-stack' },
  { id: 'my-story', label: 'my-story' },
]

const BG = company.brandPrimary      // #611f69
const BG_DARK = '#4a154b'
const TEXT = '#ffffff'
const TEXT_DIM = 'rgba(255,255,255,0.7)'
const ACTIVE_BG = 'rgba(255,255,255,0.15)'
const HOVER_BG = 'rgba(255,255,255,0.08)'
const MAIN_BG = '#ffffff'
const MAIN_TEXT = '#1d1c1d'
const BORDER = '#e8e8e8'

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <div className="slack-avatar" style={{ background: bg, color: '#fff' }}>
      {initials}
    </div>
  )
}

function MessageBlock({ sender, time, children }: { sender: string; time: string; children: React.ReactNode }) {
  return (
    <div className="slack-message">
      <Avatar initials={sender.slice(0, 2).toUpperCase()} bg={BG} />
      <div className="slack-message-body">
        <div className="slack-message-meta">
          <span className="slack-sender" style={{ color: MAIN_TEXT }}>{sender}</span>
          <span className="slack-timestamp">{time}</span>
        </div>
        <div className="slack-message-text" style={{ color: MAIN_TEXT }}>
          {children}
        </div>
      </div>
    </div>
  )
}

function AboutMeChannel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <MessageBlock sender={personal.name} time="Today at 9:00 AM">
        <p>Hey team! 👋 I'm {personal.name}, {company.role} here at {company.name}.</p>
        {personal.bio.map((p, i) => <p key={i}>{p}</p>)}
      </MessageBlock>

      <MessageBlock sender={personal.name} time="Today at 9:01 AM">
        <p><strong>📍 Location:</strong> {personal.location}</p>
        <p>
          <strong>🔗 Links: </strong>
          <a href={personal.linkedIn} target="_blank" rel="noopener noreferrer" style={{ color: company.brandSecondary, marginRight: '0.75rem' }}>LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ color: company.brandSecondary, marginRight: '0.75rem' }}>GitHub</a>
          <a href={personal.instagram} target="_blank" rel="noopener noreferrer" style={{ color: company.brandSecondary }}>Instagram</a>
        </p>
      </MessageBlock>
    </div>
  )
}

function ProjectsChannel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <MessageBlock sender={personal.name} time="Today at 10:00 AM">
        <p>Here's what I've been shipping at {company.name}:</p>
      </MessageBlock>
      {company.projects.map(project => (
        <div key={project.id} className="slack-message">
          <Avatar initials="PP" bg={BG} />
          <div className="slack-message-body">
            <div className="slack-message-meta">
              <span className="slack-sender" style={{ color: MAIN_TEXT }}>{personal.name}</span>
            </div>
            <ProjectCard
              project={project}
              accentColor={BG}
              style={{ background: '#f8f8f8', borderColor: BORDER, color: MAIN_TEXT }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function TechStackChannel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <MessageBlock sender={personal.name} time="Today at 11:00 AM">
        <p>My current stack at {company.name}:</p>
      </MessageBlock>
      {company.techStack.map((cat, i) => (
        <MessageBlock key={cat.category} sender={personal.name} time={`Today at 11:0${i + 1} AM`}>
          <p><strong>{cat.category}</strong></p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.375rem', color: BG }}>
            {cat.items.map(item => <TechBadge key={item} label={item} />)}
          </div>
        </MessageBlock>
      ))}
    </div>
  )
}

function MyStoryChannel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {company.narrative.map((para, i) => (
        <MessageBlock key={i} sender={personal.name} time={`Today at 12:0${i} PM`}>
          <p>{para}</p>
        </MessageBlock>
      ))}
      {company.highlights.length > 0 && (
        <MessageBlock sender={personal.name} time="Today at 12:30 PM">
          <p><strong>Key highlights:</strong></p>
          <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.25rem' }}>
            {company.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </MessageBlock>
      )}
    </div>
  )
}

const channelContent: Record<Channel, React.ReactNode> = {
  'about-me': <AboutMeChannel />,
  'projects': <ProjectsChannel />,
  'tech-stack': <TechStackChannel />,
  'my-story': <MyStoryChannel />,
}

export function SlackShell() {
  const [activeChannel, setActiveChannel] = useState<Channel>('about-me')

  return (
    <motion.div
      data-testid="shell-slack"
      className="slack-shell"
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ '--brand-primary': BG } as React.CSSProperties}
    >
      {/* Sidebar */}
      <div className="slack-sidebar" style={{ background: BG_DARK, color: TEXT }}>
        {/* Workspace header */}
        <div className="slack-workspace-header" style={{ borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
          <div style={{ fontWeight: 900, fontSize: '1.0625rem', color: TEXT }}>{company.name}</div>
          <div style={{ marginLeft: 'auto', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>
            🟢
          </div>
        </div>

        {/* Back button */}
        <div style={{ padding: '0.5rem 0.875rem' }}>
          <NavBackButton
            label="← Back to Portfolio"
            style={{
              background: 'none',
              border: 'none',
              color: TEXT_DIM,
              cursor: 'pointer',
              fontSize: '0.8125rem',
              padding: '0.25rem 0',
              width: '100%',
              textAlign: 'left',
            }}
          />
        </div>

        {/* Channel section */}
        <div className="slack-channel-list">
          <div style={{ padding: '0.25rem 0.875rem', fontSize: '0.8125rem', fontWeight: 700, color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
            Channels
          </div>
          {channels.map(ch => (
            <button
              key={ch.id}
              className={`slack-channel-item${activeChannel === ch.id ? ' active' : ''}`}
              onClick={() => setActiveChannel(ch.id)}
              style={{
                color: activeChannel === ch.id ? TEXT : TEXT_DIM,
                background: activeChannel === ch.id ? ACTIVE_BG : 'none',
              }}
              onMouseEnter={e => {
                if (activeChannel !== ch.id) {
                  (e.currentTarget as HTMLElement).style.background = HOVER_BG
                }
              }}
              onMouseLeave={e => {
                if (activeChannel !== ch.id) {
                  (e.currentTarget as HTMLElement).style.background = 'none'
                }
              }}
            >
              <span style={{ opacity: 0.6 }}>#</span>
              <span>{ch.label}</span>
            </button>
          ))}
        </div>

        {/* Footer — profile row like Slack's bottom-left */}
        <div style={{ padding: '0.625rem 0.875rem', borderTop: `1px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'default' }}>
          {/* Avatar with green presence dot */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '6px',
              background: 'linear-gradient(135deg, #ecb22e, #e01e5a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, color: '#fff',
            }}>PP</div>
            <div style={{
              position: 'absolute', bottom: '-2px', right: '-2px',
              width: '10px', height: '10px', borderRadius: '50%',
              background: '#2bac76',
              border: `2px solid ${BG_DARK}`,
            }} />
          </div>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: TEXT, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{personal.name}</div>
            <div style={{ fontSize: '0.6875rem', color: TEXT_DIM, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ color: '#2bac76' }}>●</span> Active
            </div>
          </div>
        </div>
      </div>

      {/* Main pane */}
      <div className="slack-main" style={{ background: MAIN_BG }}>
        {/* Channel header */}
        <div className="slack-channel-header" style={{ background: MAIN_BG, borderBottomColor: BORDER }}>
          <span style={{ color: BG, fontWeight: 700, fontSize: '1.0625rem' }}>#</span>
          <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: MAIN_TEXT }}>
            {activeChannel}
          </span>
        </div>

        {/* Messages */}
        <motion.div
          key={activeChannel}
          className="slack-message-pane"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {channelContent[activeChannel]}
        </motion.div>
      </div>
    </motion.div>
  )
}
