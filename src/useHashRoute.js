import { useSyncExternalStore } from 'react'

/* Hash routing, not path routing: the site is served as static files from S3
   with no rewrite rule, so `/projects/x` would 404 on a refresh. Everything
   after the `#` stays client-side and never reaches the server. */

const subscribe = (onChange) => {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

const read = () => window.location.hash

/**
 * The current hash split into segments.
 * `#/projects/pokae-interpolator` -> ['projects', 'pokae-interpolator']
 * `#/` or `''` -> []
 */
export function useHashPath() {
  const hash = useSyncExternalStore(subscribe, read, () => '')
  return hash
    .replace(/^#\/?/, '')
    .split('/')
    .filter(Boolean)
    .map((s) => decodeURIComponent(s).toLowerCase())
}
