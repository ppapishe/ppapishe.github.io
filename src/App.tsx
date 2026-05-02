import { HashRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/shared/ErrorBoundary'
import { UnifiedPortfolio } from './components/unified/UnifiedPortfolio'
import { BlogPage } from './components/blog/BlogPage'

function App() {
  return (
    <ErrorBoundary>
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<UnifiedPortfolio />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<UnifiedPortfolio />} />
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  )
}

export default App
