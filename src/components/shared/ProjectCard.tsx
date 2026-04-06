import type { Project } from '../../types'
import { TechBadge } from './TechBadge'

interface ProjectCardProps {
  project: Project
  accentColor?: string
  style?: React.CSSProperties
}

export function ProjectCard({ project, accentColor = '#ffffff', style }: ProjectCardProps) {
  return (
    <div
      style={{
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '8px',
        padding: '1.25rem',
        background: 'rgba(0,0,0,0.15)',
        ...style,
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', fontWeight: 600 }}>{project.title}</h3>
      <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', opacity: 0.8, lineHeight: 1.5 }}>{project.description}</p>

      {project.impact.length > 0 && (
        <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.25rem', fontSize: '0.8125rem', opacity: 0.85 }}>
          {project.impact.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {project.techStack.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', color: accentColor }}>
          {project.techStack.map(tech => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      )}
    </div>
  )
}
