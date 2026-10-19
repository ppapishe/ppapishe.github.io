import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'
import site from '../data/site.json'

beforeEach(() => {
  window.history.pushState({}, '', '/')
})

describe('Home', () => {
  it('renders the name as the only h1', () => {
    render(<App />)
    const h1s = screen.getAllByRole('heading', { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0]).toHaveTextContent('Praneeth Papishetty')
  })

  it('renders one time window per role, newest first', () => {
    render(<App />)
    const companies = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(companies).toEqual(site.windows.map((w) => w.company))
  })

  it('shows the compaction story at AT&T', () => {
    render(<App />)
    expect(screen.getByText(/time-window compaction/)).toBeInTheDocument()
  })

  it('links the resume, email and social profiles', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Download resume.pdf' })).toHaveAttribute('href', '/resume.pdf')
    expect(screen.getByRole('link', { name: site.person.email })).toHaveAttribute('href', `mailto:${site.person.email}`)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', site.person.links.linkedin)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', site.person.links.github)
  })
})

describe('Routes', () => {
  it('renders the writing page at /blog', () => {
    window.history.pushState({}, '', '/blog')
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(site.writing.title)
  })

  it('renders the 404 page for unknown paths', () => {
    window.history.pushState({}, '', '/no-such-page')
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This key expired.')
  })
})
