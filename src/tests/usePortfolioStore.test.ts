import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { act } from '@testing-library/react'
import { usePortfolioStore } from '../store/usePortfolioStore'

beforeEach(() => {
  usePortfolioStore.setState({ activeCompany: null, isTransitioning: false })
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('usePortfolioStore', () => {
  it('setActiveCompany sets activeCompany and isTransitioning=true', () => {
    act(() => {
      usePortfolioStore.getState().setActiveCompany('slack')
    })
    const state = usePortfolioStore.getState()
    expect(state.activeCompany).toBe('slack')
    expect(state.isTransitioning).toBe(true)
  })

  it('setActiveCompany(null) sets activeCompany to null', () => {
    act(() => {
      usePortfolioStore.getState().setActiveCompany('slack')
    })
    act(() => {
      usePortfolioStore.getState().setActiveCompany(null)
    })
    expect(usePortfolioStore.getState().activeCompany).toBeNull()
  })

  it('setActiveCompany switches from one company to another', () => {
    act(() => {
      usePortfolioStore.getState().setActiveCompany('slack')
    })
    act(() => {
      usePortfolioStore.getState().setActiveCompany('hbomax')
    })
    expect(usePortfolioStore.getState().activeCompany).toBe('hbomax')
    expect(usePortfolioStore.getState().isTransitioning).toBe(true)
  })

  it('endTransition sets isTransitioning to false', () => {
    act(() => {
      usePortfolioStore.getState().setActiveCompany('att')
    })
    act(() => {
      usePortfolioStore.getState().endTransition()
    })
    expect(usePortfolioStore.getState().isTransitioning).toBe(false)
  })

  it('beginTransition sets isTransitioning to true', () => {
    act(() => {
      usePortfolioStore.setState({ isTransitioning: false })
      usePortfolioStore.getState().beginTransition()
    })
    expect(usePortfolioStore.getState().isTransitioning).toBe(true)
  })

  it('safety timeout resets isTransitioning after 1200ms if still true', () => {
    act(() => {
      usePortfolioStore.getState().setActiveCompany('rental')
    })
    expect(usePortfolioStore.getState().isTransitioning).toBe(true)
    act(() => {
      vi.advanceTimersByTime(1200)
    })
    expect(usePortfolioStore.getState().isTransitioning).toBe(false)
  })

  it('safety timeout does NOT reset isTransitioning if already false', () => {
    act(() => {
      usePortfolioStore.getState().setActiveCompany('slack')
    })
    act(() => {
      usePortfolioStore.getState().endTransition()
    })
    expect(usePortfolioStore.getState().isTransitioning).toBe(false)
    act(() => {
      vi.advanceTimersByTime(1200)
    })
    // Should still be false — timeout is a no-op when already reset
    expect(usePortfolioStore.getState().isTransitioning).toBe(false)
  })
})
