export type CompanyId = 'slack' | 'hbomax' | 'att' | 'rental'

export interface Project {
  id: string
  title: string
  description: string
  /** Measurable outcomes, e.g. "Reduced P99 latency by 40%" */
  impact: string[]
  techStack: string[]
  teamSize?: number
  duration?: string
}

export interface TechCategory {
  category: string
  items: string[]
}

export interface CompanyData {
  id: CompanyId
  name: string
  shortName: string
  role: string
  team: string
  startDate: string
  endDate: string | 'present'
  location: string
  /** Brand colors — SINGLE SOURCE OF TRUTH. Never duplicate in CSS files. */
  brandPrimary: string
  brandSecondary: string
  brandAccent: string
  tagline: string
  /** Array of paragraph strings. Rendered as <p> tags. No markdown library. */
  narrative: string[]
  highlights: string[]
  projects: Project[]
  techStack: TechCategory[]
}

export interface PersonalData {
  name: string
  title: string
  location: string
  bio: string[]
  email: string
  linkedIn: string
  github: string
  instagram: string
  skills: TechCategory[]
}
