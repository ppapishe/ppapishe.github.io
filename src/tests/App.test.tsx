import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { usePortfolioStore } from '../store/usePortfolioStore'

beforeEach(() => {
  usePortfolioStore.setState({ activeCompany: null, isTransitioning: false })
  // Reset hash to landing
  window.location.hash = ''
})

describe('App routing', () => {
  it('renders landing page by default', () => {
    render(<App />)
    expect(screen.getByTestId('landing-page')).toBeDefined()
  })

  it('clicking Slack card navigates to slack shell', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('company-card-slack'))
    await waitFor(() => {
      expect(screen.getByTestId('shell-slack')).toBeDefined()
    })
  })

  it('clicking HBOMax card navigates to hbomax shell', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('company-card-hbomax'))
    await waitFor(() => {
      expect(screen.getByTestId('shell-hbomax')).toBeDefined()
    })
  })

  it('clicking AT&T card navigates to att shell', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('company-card-att'))
    await waitFor(() => {
      expect(screen.getByTestId('shell-att')).toBeDefined()
    })
  })

  it('clicking Rental card navigates to rental shell', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('company-card-rental'))
    await waitFor(() => {
      expect(screen.getByTestId('shell-rental')).toBeDefined()
    })
  })

  it('back button returns to landing page', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('company-card-slack'))
    await waitFor(() => {
      expect(screen.getByTestId('shell-slack')).toBeDefined()
    })
    await user.click(screen.getByTestId('back-button'))
    await waitFor(() => {
      expect(screen.getByTestId('landing-page')).toBeDefined()
    })
  })

  it('unknown hash route redirects to landing page', async () => {
    window.location.hash = '#/unknown-company'
    render(<App />)
    await waitFor(() => {
      expect(screen.getByTestId('landing-page')).toBeDefined()
    })
  })
})
