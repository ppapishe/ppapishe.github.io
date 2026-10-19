import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { Engine } from './engine/react'
import { startConcept } from './motion/compaction'
import { Footer, Header, StatusLine } from './site/Chrome'
import { Home } from './site/Home'
import { Blog, NotFound } from './site/Pages'

// Preview builds (npm run build:preview) run inside a page we do not control the path of,
// so routing stays in memory there.
const Router = import.meta.env.VITE_ROUTER === 'memory' ? MemoryRouter : BrowserRouter

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="curtain" aria-hidden="true"><div className="curtain__panel" /></div>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StatusLine />
      <Engine setup={startConcept} />
    </Router>
  )
}

export default App
