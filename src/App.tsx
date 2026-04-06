import { useEffect } from 'react'
import { HashRouter, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { usePortfolioStore } from './store/usePortfolioStore'
import { companies, companyOrder } from './data/companies'
import { ErrorBoundary } from './components/shared/ErrorBoundary'
import { HeroSection } from './components/landing/HeroSection'
import { CompanyOrbit } from './components/landing/CompanyOrbit'
import { AboutSection } from './components/landing/AboutSection'
import { SkillsSection } from './components/landing/SkillsSection'
import { ContactSection } from './components/landing/ContactSection'
import type { CompanyId } from './types'

// Phase 4 shells will be imported here. Placeholders for now.
function PlaceholderShell({ companyId }: { companyId: CompanyId }) {
  const company = companies[companyId]
  return (
    <motion.div
      data-testid={`shell-${companyId}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: company.brandPrimary,
        color: company.brandAccent,
        flexDirection: 'column',
        gap: '1rem',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>{company.name}</h1>
      <p style={{ margin: 0, opacity: 0.7 }}>{company.role} — {company.startDate} to {company.endDate}</p>
      <BackButton color={company.brandAccent} />
    </motion.div>
  )
}

function BackButton({ color = '#ffffff' }: { color?: string }) {
  const navigate = useNavigate()
  const setActiveCompany = usePortfolioStore(s => s.setActiveCompany)

  const handleBack = () => {
    setActiveCompany(null)
    navigate('/')
  }

  return (
    <button
      data-testid="back-button"
      onClick={handleBack}
      style={{
        marginTop: '1rem',
        padding: '0.625rem 1.5rem',
        background: 'rgba(0,0,0,0.2)',
        border: `1px solid ${color}`,
        borderRadius: '6px',
        color,
        cursor: 'pointer',
        fontSize: '0.9375rem',
      }}
    >
      ← Back
    </button>
  )
}

function CompanyRoute() {
  const { companyId } = useParams<{ companyId: string }>()
  const setActiveCompany = usePortfolioStore(s => s.setActiveCompany)
  const endTransition = usePortfolioStore(s => s.endTransition)

  useEffect(() => {
    if (companyId && companyOrder.includes(companyId as CompanyId)) {
      setActiveCompany(companyId as CompanyId)
    }
  }, [companyId, setActiveCompany])

  if (!companyId || !companyOrder.includes(companyId as CompanyId)) {
    return <Navigate to="/" replace />
  }

  return (
    <ErrorBoundary>
      <PlaceholderShell companyId={companyId as CompanyId} />
    </ErrorBoundary>
  )
}

function LandingPage() {
  return (
    <motion.div
      data-testid="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <CompanyOrbit />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </motion.div>
  )
}

function AppRoutes() {
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
