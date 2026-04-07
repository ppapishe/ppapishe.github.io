import { useEffect } from 'react'
import { HashRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { usePortfolioStore } from './store/usePortfolioStore'
import { companyOrder } from './data/companies'
import { ErrorBoundary } from './components/shared/ErrorBoundary'
import { HeroSection } from './components/landing/HeroSection'
import { CompanyOrbit } from './components/landing/CompanyOrbit'
import { SkillsSection } from './components/landing/SkillsSection'
import { ContactSection } from './components/landing/ContactSection'
import { SlackShell } from './components/themes/slack/SlackShell'
import { HBOMaxShell } from './components/themes/hbomax/HBOMaxShell'
import { ATTShell } from './components/themes/att/ATTShell'
import { RentalShell } from './components/themes/rental/RentalShell'
import { EducationShell } from './components/themes/education/EducationShell'
import type { CompanyId } from './types'

const shellMap: Record<CompanyId, React.ComponentType> = {
  slack: SlackShell,
  hbomax: HBOMaxShell,
  att: ATTShell,
  rental: RentalShell,
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

  const Shell = shellMap[companyId as CompanyId]
  return (
    <ErrorBoundary>
      <Shell />
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
        <Route path="/education" element={
          <ErrorBoundary>
            <EducationShell />
          </ErrorBoundary>
        } />
        <Route path="/:companyId" element={<CompanyRoute />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
