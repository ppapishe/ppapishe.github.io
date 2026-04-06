import { useNavigate } from 'react-router-dom'
import { usePortfolioStore } from '../../store/usePortfolioStore'

interface NavBackButtonProps {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export function NavBackButton({ label = '← Back', className, style }: NavBackButtonProps) {
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
      className={className}
      style={style}
    >
      {label}
    </button>
  )
}
