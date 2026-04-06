interface TechBadgeProps {
  label: string
  style?: React.CSSProperties
}

export function TechBadge({ label, style }: TechBadgeProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.25rem 0.625rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 500,
        border: '1px solid currentColor',
        opacity: 0.85,
        ...style,
      }}
    >
      {label}
    </span>
  )
}
