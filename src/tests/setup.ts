import '@testing-library/jest-dom'

// jsdom has no matchMedia. Report reduced motion, so the engine skips Lenis, splits and scrubs
// and every element renders in its final, readable state.
window.matchMedia = vi.fn().mockImplementation((query: string) => ({
  matches: query.includes('prefers-reduced-motion'),
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))
