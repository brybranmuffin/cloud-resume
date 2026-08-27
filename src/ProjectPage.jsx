import Icon, { iconLabel } from './Icon'
import { useImageFallback } from './useImageFallback'

const base = import.meta.env.BASE_URL

export default function ProjectPage({ project }) {
  const { title, year, tags, image, body, tools, models, links } = project
  const src = `${base}projects/${image}`
  const { failed, onError } = useImageFallback(src)

  return (
    <article className="detail">
      <a className="detail__back" href="#/projects">
        ← All projects
      </a>

      <figure className="detail__figure">
        {failed ? (
          <div className="detail__fallback">{`public/projects/${image}`}</div>
        ) : (
          <img
            // Fresh element per project rather than a reused one mid-load.
            key={src}
            src={src}
            alt={`${title}, project image`}
            onError={onError}
          />
        )}
      </figure>

      <header className="detail__head">
        <p className="detail__meta">
          {year}
          {tags?.length ? ` · ${tags.join(' · ')}` : ''}
        </p>
        <h1 className="detail__title">{title}</h1>
      </header>

      <div className="detail__body">
        {body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <footer className="detail__foot">
        {tools?.length > 0 && (
          <section className="detail__block">
            <h2 className="detail__label">Built with</h2>
            <ul className="detail__tools">
              {tools.map((t) => (
                <li key={t}>
                  <Icon name={t} />
                  <span>{iconLabel(t)}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {models?.length > 0 && (
          <section className="detail__block">
            {/* Models get names, not icons; they aren't products with marks. */}
            <h2 className="detail__label">Models &amp; methods</h2>
            <ul className="detail__models">
              {models.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="detail__block">
          <h2 className="detail__label">Links &amp; assets</h2>
          {links?.length > 0 ? (
            <ul className="detail__links">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.kind === 'repo' && <Icon name="github" size={18} />}
                    <span>{l.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="detail__none">
              Source is private, since this project handles clinical imaging data.
            </p>
          )}
        </section>
      </footer>
    </article>
  )
}
