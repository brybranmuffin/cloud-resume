import { useCallback, useRef, useState } from 'react'

/**
 * Image loading with a fallback that survives spurious `error` events.
 *
 * A remount (React StrictMode in dev, an HMR update, fast back/forward)
 * aborts any in-flight request, and the browser fires `error` even though the
 * file is perfectly fine. Latching a boolean there shows the fallback forever.
 *
 * Two safeguards: failure is tracked per-src, so it clears by itself when the
 * src changes; and the first error triggers one silent retry before the
 * fallback is shown, which absorbs an aborted fetch.
 *
 * @param {string} src
 * @returns {{failed: boolean, onError: (e: Event) => void}}
 */
export function useImageFallback(src) {
  const [failedSrc, setFailedSrc] = useState(null)
  const retriedSrc = useRef(null)

  const onError = useCallback(
    (event) => {
      const img = event.currentTarget

      if (retriedSrc.current !== src) {
        retriedSrc.current = src
        // Re-assign on the next frame so the browser starts a fresh fetch
        // rather than reusing the aborted one.
        requestAnimationFrame(() => {
          if (img.isConnected) img.src = src
        })
        return
      }

      setFailedSrc(src)
    },
    [src],
  )

  return { failed: failedSrc === src, onError }
}
