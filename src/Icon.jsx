import { ICONS } from './icons'

/** Monochrome brand mark. Inherits colour, so it tracks the time-of-day theme. */
export default function Icon({ name, size = 22 }) {
  const icon = ICONS[name]
  if (!icon) return null
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  )
}

export const iconLabel = (name) => ICONS[name]?.label ?? name
