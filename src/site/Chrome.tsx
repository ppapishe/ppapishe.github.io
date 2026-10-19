import { Link, useLocation } from 'react-router-dom'
import { site } from './content'

export function Header() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const on = (p: string) => (pathname === p ? 'page' : undefined)
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link to="/" className="header__brand mono draw">
          pp<span className="sr-only">, {site.person.name}, home</span>
        </Link>
        <nav aria-label="Primary" className="header__nav mono">
          <a className="draw" href={home ? '#work' : '/#work'}>work</a>
          <a className="draw" href={home ? '#stack' : '/#stack'}>stack</a>
          <Link className="draw" to="/blog" aria-current={on('/blog')}>writing</Link>
          <a className="draw" href="/resume.pdf" download>resume</a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  const { email, links } = site.person
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <h2 className="mono label label--inverse">contact</h2>
        <div className="replication">
          <a className="mail" href={`mailto:${email}`}>{email}</a>
          <div className="replicas mono" aria-hidden="true">
            <div className="replica r1"><span className="replica__k">replica 1</span><span className="replica__v">{email}</span></div>
            <div className="replica r2"><span className="replica__k">replica 2</span><span className="replica__v">{email}</span></div>
          </div>
        </div>
        <div className="footer__row mono">
          <ul className="footer__links">
            <li><a className="utility" href={links.linkedin}>LinkedIn</a></li>
            <li><a className="utility" href={links.github}>GitHub</a></li>
            <li><a className="utility" href={links.instagram}>Instagram</a></li>
          </ul>
          <a className="flood flood--inverse" href="/resume.pdf" download>
            <span className="flood__fill" aria-hidden="true" />
            <span className="flood__label">Download resume.pdf</span>
          </a>
        </div>
        <p className="footer__base mono">© 2026 {site.person.name} · {site.person.location}</p>
      </div>
    </footer>
  )
}

/** Names the time window in view and its compaction state. Driven by motion/compaction.ts. */
export function StatusLine() {
  return <p className="status mono" data-status aria-hidden="true" />
}
