interface MetricHighlightProps {
  value: string
  label: string
  style?: React.CSSProperties
}

export function MetricHighlight({ value, label, style }: MetricHighlightProps) {
  return (
    <div style={{ textAlign: 'center', ...style }}>
      <div style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.25rem' }}>{label}</div>
    </div>
  )
}
