import { ROUTES, HOME } from './routes'

export default function Nav({ current }) {
  return (
    <nav className="tabs" aria-label="Sections">
      <ul>
        {ROUTES.map(({ slug, label }) => {
          const active = slug === current
          return (
            <li key={slug}>
              <a
                className="tab"
                // Home lives at the bare `#/` so the default URL stays clean.
                href={slug === HOME ? '#/' : `#/${slug}`}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
