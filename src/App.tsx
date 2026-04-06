import { useEffect } from 'react'
import { HashRouter, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { usePortfolioStore } from './store/usePortfolioStore'
import { companies, companyOrder } from './data/companies'
import type { CompanyId } from './types'

// Placeholder shells — replaced in Phase 4
function PlaceholderShell({ companyId }: { companyId: CompanyId }) {
  const company = companies[companyId]
  return (
    <div data-testid={`shell-${companyId}`} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: company.brandPrimary, color: company.brandAccent }}>
      <div style={{ textAlign: 'center' }}>
        <h1>{company.name}</h1>
        <p>{company.role}</p>
        <BackButton />
      </div>
    </div>
  )
}

function BackButton() {
  const setActiveCompany = usePortfolioStore(s => s.setActiveCompany)
  const navigate = useNavigate()
  const handleBack = () => {
    setActiveCompany(null)
    navigate('/')
  }
  return (
    <button data-testid="back-button" onClick={handleBack}>
      Back
    </button>
  )
}

function CompanyRoute() {
  const { companyId } = useParams<{ companyId: string }>()
  const setActiveCompany = usePortfolioStore(s => s.setActiveCompany)

  useEffect(() => {
    if (companyId && companyOrder.includes(companyId as CompanyId)) {
      setActiveCompany(companyId as CompanyId)
    }
  }, [companyId, setActiveCompany])

  if (!companyId || !companyOrder.includes(companyId as CompanyId)) {
    return <Navigate to="/" replace />
  }

  return <PlaceholderShell companyId={companyId as CompanyId} />
}

function LandingPage() {
  const navigate = useNavigate()
  const setActiveCompany = usePortfolioStore(s => s.setActiveCompany)

  const handleCompanyClick = (id: CompanyId) => {
    setActiveCompany(id)
    navigate(`/${id}`)
  }

  return (
    <div data-testid="landing-page" style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Praneeth Papishetty</h1>
      <p>Staff Engineer at Slack</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
        {companyOrder.map(id => (
          <button
            key={id}
            data-testid={`company-card-${id}`}
            onClick={() => handleCompanyClick(id)}
            style={{ background: companies[id].brandPrimary, color: companies[id].brandAccent, padding: '1rem', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            {companies[id].name}
          </button>
        ))}
      </div>
    </div>
  )
}

function AppRoutes() {
  const activeCompany = usePortfolioStore(s => s.activeCompany)

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:companyId" element={<CompanyRoute />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
