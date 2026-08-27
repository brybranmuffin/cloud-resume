import { useMemo } from 'react'

const STAR_COUNT = 40

/** Decorative sky layer: a scatter of stars that fade in after dark.
    The sun/moon itself is deliberately not drawn; only its light shows,
    in the page colours and the direction of the cast shadows. */
export default function Sky() {
  // Scattered once, then kept stable for the life of the page.
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, () => ({
        left: `${(Math.random() * 100).toFixed(1)}%`,
        top: `${(Math.random() * 46).toFixed(1)}%`,
        '--d': `${(2.5 + Math.random() * 4).toFixed(1)}s`,
        '--delay': `${(Math.random() * 5).toFixed(1)}s`,
      })),
    [],
  )

  return (
    <div className="sky" aria-hidden="true">
      {stars.map((style, i) => (
        <span key={i} className="star" style={style} />
      ))}
    </div>
  )
}
