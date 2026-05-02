import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

beforeEach(() => {
  window.location.hash = ''
})

describe('Unified portfolio', () => {
  it('renders the unified portfolio by default', () => {
    render(<App />)
    expect(screen.getByText('Praneeth Papishetty')).toBeDefined()
    expect(screen.getByText(/Vitess & MySQL/)).toBeDefined()
  })

  it('renders all four era sections', () => {
    render(<App />)
    expect(screen.getAllByText(/Slack · Datastores/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Warner Bros. Discovery/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/AT&T/).length).toBeGreaterThan(0)
    expect(screen.getByText(/Dollar Thrifty → Hertz/)).toBeDefined()
  })

  it('renders project cards for each era', () => {
    render(<App />)
    expect(screen.getByText('Vitess Reliability Tooling')).toBeDefined()
    expect(screen.getByText('DIM — Database Infra Manager')).toBeDefined()
    expect(screen.getByText('AT&T eSUPPORT — Oracle SME')).toBeDefined()
    expect(screen.getByText('Oracle SME — Reservations Estate')).toBeDefined()
  })

  it('expands project card on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const btn = screen.getByText('Vitess Reliability Tooling').closest('button')!
    expect(btn.getAttribute('aria-expanded')).toBe('false')
    await user.click(btn)
    expect(btn.getAttribute('aria-expanded')).toBe('true')
  })

  it('renders resume section', () => {
    render(<App />)
    expect(screen.getByText('Grab the PDF')).toBeDefined()
    expect(screen.getByText('Cassandra Certified Professional')).toBeDefined()
  })

  it('renders social links in header', () => {
    render(<App />)
    expect(screen.getByLabelText('LinkedIn')).toBeDefined()
    expect(screen.getByLabelText('GitHub')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
  })

  it('unknown hash route redirects to unified portfolio', async () => {
    window.location.hash = '#/unknown-company'
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText('Praneeth Papishetty')).toBeDefined()
    })
  })
})
