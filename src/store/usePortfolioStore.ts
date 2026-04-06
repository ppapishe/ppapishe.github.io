import { create } from 'zustand'
import type { CompanyId } from '../types'

interface PortfolioStore {
  activeCompany: CompanyId | null
  isTransitioning: boolean
  setActiveCompany: (id: CompanyId | null) => void
  beginTransition: () => void
  endTransition: () => void
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  activeCompany: null,
  isTransitioning: false,

  setActiveCompany: (id) => {
    set({ activeCompany: id, isTransitioning: true })

    // Safety timeout: if animation doesn't fire onAnimationComplete
    // within 1200ms, force-reset isTransitioning to prevent stuck state.
    setTimeout(() => {
      if (get().isTransitioning) {
        set({ isTransitioning: false })
      }
    }, 1200)
  },

  beginTransition: () => set({ isTransitioning: true }),

  endTransition: () => set({ isTransitioning: false }),
}))
