import { Link } from 'react-router-dom'
import { site, useTitle } from './content'

export function Blog() {
  useTitle(`Writing · ${site.person.name}`)
  return (
    <section className="page wrap" aria-labelledby="page-h">
      <p className="mono label">writing</p>
      <h1 id="page-h" className="page__title" data-split="lines" data-intro>{site.writing.title}</h1>
      <p className="page__text" data-reveal="fade" data-intro data-delay="0.3">{site.writing.body}</p>
      <p className="page__empty mono" data-reveal="fade" data-intro data-delay="0.4">0 posts · first write pending</p>
      <Link className="flood" to="/">
        <span className="flood__fill" aria-hidden="true" />
        <span className="flood__label"><span className="arrow arrow--back" aria-hidden="true">←</span> Back to the home page</span>
      </Link>
    </section>
  )
}

export function NotFound() {
  useTitle(`Not found · ${site.person.name}`)
  return (
    <section className="page wrap" aria-labelledby="page-h">
      <p className="mono label">404 · key not found</p>
      <h1 id="page-h" className="page__title" data-split="lines" data-intro>This key expired.</h1>
      <p className="page__text" data-reveal="fade" data-intro data-delay="0.3">Its TTL ran out, and compaction removed it. Nothing lives at this path now.</p>
      <Link className="flood" to="/">
        <span className="flood__fill" aria-hidden="true" />
        <span className="flood__label"><span className="arrow arrow--back" aria-hidden="true">←</span> Go to the home page</span>
      </Link>
    </section>
  )
}
