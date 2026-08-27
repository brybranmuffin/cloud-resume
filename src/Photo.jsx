import { useState } from 'react'

// Files in public/ are served from the deploy root; BASE_URL keeps the path
// correct whether the site is served from a domain root or a subpath.
const PHOTO_SRC = `${import.meta.env.BASE_URL}bryant.jpg`

/** Portrait with a placeholder that takes over if the image fails to load. */
export default function Photo({ alt }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className="photo">
      {!failed && (
        <img src={PHOTO_SRC} alt={alt} onError={() => setFailed(true)} />
      )}
      {failed && (
        <div className="photo-empty">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <circle cx="12" cy="8.5" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
          <b>Your photo</b>
          <span>
            Add a file named{' '}
            <b style={{ letterSpacing: '.02em' }}>bryant.jpg</b>
            <br />
            to the public directory
          </span>
        </div>
      )}
    </figure>
  )
}
