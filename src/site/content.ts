import site from '../data/site.json'

export { site }
export type Window = (typeof site.windows)[number]

const year = (ym: string) => ym.slice(0, 4)

/** "2015 → 2019", or "2026 → now" for the current role. */
export function span(w: Pick<Window, 'start' | 'end'>) {
  return `${year(w.start)} → ${w.end === 'present' ? 'now' : year(w.end)}`
}

export function useTitle(title: string) {
  document.title = title
}
