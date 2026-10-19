import { Link } from 'react-router-dom'
import { site, span, useTitle } from './content'

export function Home() {
  const { person, windows, skills, facts, writing } = site
  useTitle(`${person.name} · Storage engineer`)
  return (
    <>
      <section className="hero wrap" aria-labelledby="hero-name">
        <h1 id="hero-name" className="hero__name" data-settle>
          <span className="hero__line">Praneeth</span> <span className="hero__line">Papishetty</span>
        </h1>
        <div className="hero__meta grid">
          <p className="hero__who mono" data-reveal="fade" data-intro data-delay="0.7">
            {person.role}
            <br />
            {person.team}, {person.company}
            <br />
            {person.location}
          </p>
          <p className="hero__tagline" data-reveal="fade" data-intro data-delay="0.85">{person.tagline}</p>
        </div>
      </section>

      <section id="work" className="work wrap" aria-labelledby="work-h">
        <div className="section-head grid">
          <h2 id="work-h" className="mono label">work, in time windows</h2>
          <p className="section-head__note">{person.summary.join(' ')}</p>
        </div>
        {windows.map((w) => (
          <article key={w.id} className="win grid" data-window={span(w)} aria-labelledby={`win-${w.id}`}>
            <div className="win__meta mono">
              <span>{span(w)}</span>
              <span>{w.location}</span>
            </div>
            <div className="win__body">
              <h3 id={`win-${w.id}`} className="win__company">{w.company}</h3>
              <p className="win__role">{w.role} · {w.team}</p>
              <ul className="win__frags mono" aria-label="Systems and tools">
                {w.fragments.map((f) => (
                  <li key={f} data-frag><span className="frag__drift">{f}</span></li>
                ))}
              </ul>
              <ul className="win__lines">
                {w.lines.map((l) => <li key={l} data-line>{l}</li>)}
              </ul>
              {'note' in w && w.note ? <p className="win__note mono">{w.note}</p> : null}
              {'link' in w && w.link ? (
                <p className="win__link"><a className="inline" href={w.link.href}>{w.link.label}</a></p>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section id="stack" className="stack wrap" aria-labelledby="stack-h">
        <h2 id="stack-h" className="mono label">stack</h2>
        <dl className="stack__groups">
          {skills.map((g) => (
            <div key={g.group} className="stack__row">
              <dt className="mono">{g.group}</dt>
              <dd>{g.items.join(', ')}</dd>
            </div>
          ))}
          {facts.map((f) => (
            <div key={f.key} className="stack__row">
              <dt className="mono">{f.key}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="writing wrap" aria-labelledby="writing-h">
        <h2 id="writing-h" className="mono label">writing</h2>
        <div className="writing__body">
          <p className="writing__title">{writing.title}</p>
          <p className="writing__text">{writing.body}</p>
          <Link className="flood" to="/blog">
            <span className="flood__fill" aria-hidden="true" />
            <span className="flood__label">Go to writing <span className="arrow" aria-hidden="true">→</span></span>
          </Link>
        </div>
      </section>
    </>
  )
}
