import { Link } from 'react-router-dom'
import '../../styles/unified.css'

export function BlogPage() {
  return (
    <div className="u-blog">
      <header className="u-header">
        <div className="u-wrap u-header-inner">
          <Link to="/" className="u-brand" aria-label="Home">
            <span className="u-logo-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="9" fill="#0a0a0a"/>
                <path d="M13 28 V12 H22 a6 6 0 0 1 0 12 H17" stroke="#f4f2ed" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="27" cy="28" r="1.6" fill="#c96a3a"/>
              </svg>
            </span>
            <span className="u-brand-name">Praneeth Papishetty</span>
          </Link>
          <Link to="/" className="u-back-link" aria-label="Back to portfolio">
            <span aria-hidden="true">&larr;</span> Back to portfolio
          </Link>
        </div>
      </header>

      <main className="u-blog-content u-wrap">
        <div className="u-eyebrow">Writing</div>
        <h1 className="u-blog-title">Coming soon<span className="u-dot">.</span></h1>
        <p className="u-blog-tagline">
          Notes from the data layer &mdash; databases, infrastructure, and the tools
          that make production quieter. Posts will live here when they're ready.
        </p>
        <p className="u-blog-tagline" style={{ marginTop: '16px', color: 'var(--ink-dim)', fontSize: '14px' }}>
          In the meantime, the work is on the portfolio.
        </p>
      </main>
    </div>
  )
}
