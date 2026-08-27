import { useImageFallback } from './useImageFallback'

const base = import.meta.env.BASE_URL

export default function ProjectCard({ project }) {
  const { title, year, tags, blurb, image, slug, fit } = project
  const src = `${base}projects/${image}`
  const { failed, onError } = useImageFallback(src)

  return (
    // Cards open the project's own page; outbound links live down there.
    <a
      className={`card${fit ? ` card--${fit}` : ''}`}
      href={`#/projects/${slug}`}
      // The blurb is only revealed on hover, so name it for anyone who
      // never sees that state.
      aria-label={`${title}: ${blurb}`}
    >
      {failed ? (
        <div className="card__fallback" data-slug={slug} aria-hidden="true">
          <span>{`public/projects/${image}`}</span>
        </div>
      ) : (
        <img
          // Keyed by src so a new project gets a fresh element rather than a
          // reused one mid-load.
          key={src}
          className={`card__img${fit ? ` card__img--${fit}` : ''}`}
          src={src}
          alt=""
          loading="lazy"
          onError={onError}
        />
      )}

      {/* Separate from the scrim so it can fade in on hover without
          animating a background-image, which browsers can't interpolate. */}
      <div className="card__dim" aria-hidden="true" />
      <div className="card__scrim" aria-hidden="true" />

      <div className="card__body">
        <p className="card__meta">
          {year}
          {tags.length ? ` · ${tags.join(' · ')}` : ''}
        </p>
        <h2 className="card__title">{title}</h2>

        {/* 0fr -> 1fr animates height smoothly without a hard-coded max-height */}
        <div className="card__reveal" aria-hidden="true">
          <div>
            <p className="card__desc">{blurb}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
