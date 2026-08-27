import { useEffect } from 'react'
import { themeAt } from './theme'

/**
 * Writes the time-of-day custom properties onto <html> and keeps them
 * refreshed. The CSS transitions do the actual animating between ticks.
 */
export function useTimeOfDayTheme(intervalMs = 5000) {
  useEffect(() => {
    const root = document.documentElement.style

    const apply = () => {
      const vars = themeAt()
      for (const [name, value] of Object.entries(vars)) {
        root.setProperty(name, value)
      }
    }

    apply()
    const id = setInterval(apply, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])
}
