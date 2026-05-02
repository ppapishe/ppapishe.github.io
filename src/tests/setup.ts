import '@testing-library/jest-dom'

// jsdom doesn't implement IntersectionObserver (used by framer-motion whileInView)
const mockIntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))
window.IntersectionObserver = mockIntersectionObserver
