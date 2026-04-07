import type { CompanyData, CompanyId } from '../types'

export const companies: Record<CompanyId, CompanyData> = {
  slack: {
    id: 'slack',
    name: 'Slack',
    shortName: 'Slack',
    role: 'Senior Software Engineer',
    team: 'Datastores Foundation',
    startDate: '2024-01',
    endDate: 'present',
    location: 'Remote',
    brandPrimary: '#611f69',
    brandSecondary: '#1264a3',
    brandAccent: '#ecb22e',
    tagline: 'Automating database operations and scaling Vitess at Slack',
    narrative: [
      'Joined Slack to work on the Datastores Foundation team, focused on database reliability and platform engineering at scale.',
      'Day-to-day work spans automating database operations — reducing toil for engineers across the company — and solving scale challenges in Vitess, Slack\'s MySQL-compatible distributed database layer.',
      'TODO: What have you learned? What are you proud of?',
    ],
    highlights: [
      'TODO: Key highlight 1',
      'TODO: Key highlight 2',
      'TODO: Key highlight 3',
    ],
    projects: [
      {
        id: 'slack-project-1',
        title: 'TODO: Project name',
        description: 'TODO: What you built and why it mattered.',
        impact: ['TODO: Measurable outcome, e.g. "Reduced query latency by 40%"'],
        techStack: ['TODO: Tech 1', 'TODO: Tech 2'],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['TODO'] },
      { category: 'Cloud', items: ['TODO'] },
      { category: 'Languages', items: ['TODO'] },
    ],
  },

  hbomax: {
    id: 'hbomax',
    name: 'Warner Bros. Discovery',
    shortName: 'WBD',
    role: 'Staff Engineer',
    team: 'TODO: Fill in team name',
    startDate: '2021-01',
    endDate: '2024-01',
    location: 'Remote',
    brandPrimary: '#002be1',
    brandSecondary: '#00c8ff',
    brandAccent: '#ffffff',
    tagline: 'TODO: One-line summary of your WBD role',
    narrative: [
      'TODO: What was the HBO Max platform challenge you were brought in to solve?',
      'TODO: What did you build? What was the scale?',
      'TODO: What did you learn from working on a streaming platform?',
    ],
    highlights: [
      'TODO: Key highlight 1',
      'TODO: Key highlight 2',
      'TODO: Key highlight 3',
    ],
    projects: [
      {
        id: 'hbomax-project-1',
        title: 'TODO: Project name',
        description: 'TODO: What you built and why it mattered.',
        impact: ['TODO: Measurable outcome'],
        techStack: ['TODO: Tech 1', 'TODO: Tech 2'],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['TODO'] },
      { category: 'Cloud', items: ['TODO'] },
    ],
  },

  att: {
    id: 'att',
    name: 'AT&T',
    shortName: 'AT&T',
    role: 'TODO: Your title at AT&T',
    team: 'TODO: Fill in team name',
    startDate: '2018-01',
    endDate: '2021-01',
    location: 'Dallas, TX',
    brandPrimary: '#00a8e0',
    brandSecondary: '#009fdb',
    brandAccent: '#ffffff',
    tagline: 'TODO: One-line summary of your AT&T role',
    narrative: [
      'TODO: What was your role at AT&T?',
      'TODO: What systems did you work on?',
      'TODO: What was your biggest contribution here?',
    ],
    highlights: [
      'TODO: Key highlight 1',
      'TODO: Key highlight 2',
      'TODO: Key highlight 3',
    ],
    projects: [
      {
        id: 'att-project-1',
        title: 'TODO: Project name',
        description: 'TODO: What you built and why it mattered.',
        impact: ['TODO: Measurable outcome'],
        techStack: ['TODO: Tech 1'],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Oracle', 'TODO'] },
      { category: 'Tools', items: ['TODO'] },
    ],
  },

  rental: {
    id: 'rental',
    name: 'Hertz',
    shortName: 'Hertz',
    role: 'TODO: Your title at Dollar Thrifty / Hertz',
    team: 'TODO: Fill in team name',
    startDate: '2015-01',
    endDate: '2018-01',
    location: 'Tulsa, OK',
    brandPrimary: '#FFB81C',
    brandSecondary: '#1a1a1a',
    brandAccent: '#000000',
    tagline: 'Database administration at Dollar Thrifty Automotive Group (acquired by Hertz)',
    narrative: [
      'TODO: How did you start your career here?',
      'TODO: What did you build or maintain?',
      'TODO: What led you to move on?',
    ],
    highlights: [
      'TODO: Key highlight 1',
      'TODO: Key highlight 2',
    ],
    projects: [
      {
        id: 'rental-project-1',
        title: 'TODO: Project name',
        description: 'TODO: What you built and why it mattered.',
        impact: ['TODO: Measurable outcome'],
        techStack: ['Oracle', 'TODO'],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Oracle', 'TODO'] },
      { category: 'Tools', items: ['TODO'] },
    ],
  },
}

/** Ordered list for display (current company first) */
export const companyOrder: CompanyId[] = ['slack', 'hbomax', 'att', 'rental']
