/* Time-of-day theming.
   Each anchor is [hour, bg, ink, muted, eyebrow, marker, light, stars].
   An invisible sun/moon arcs across the sky: it is never drawn, but the name
   and photo cast a shadow that falls opposite it (long near the horizon, short
   at midday, faint at night). Edit the anchors to retune.
   Field 6 (`light`) is the light's own colour, unused while the orb is
   hidden, kept so the arc can be made visible again without retuning. */
export const ANCHORS = [
  [0, '#14161f', '#f0eee6', '#b9bcc6', '#8b90a0', '#e0b93f', '#cdd6ff', 1.0],
  [5, '#23212e', '#efe9ea', '#c3bcc2', '#9a8fa0', '#e6c24a', '#e6dcf0', 0.5],
  [6.5, '#f3e0d8', '#3a2b2f', '#6b565b', '#8a6e72', '#ecc94b', '#ffd79e', 0.0],
  [8, '#e4edf4', '#24262c', '#4c5058', '#6a7078', '#ecc94b', '#fff0c2', 0.0],
  [12, '#d3e4f3', '#16181c', '#3d4450', '#556070', '#ecc94b', '#fffdf2', 0.0],
  [15, '#dce8f1', '#1c1e22', '#454c56', '#5a6470', '#ecc94b', '#fff2d0', 0.0],
  [17.5, '#f6e6cf', '#33281c', '#6a5a45', '#8a765a', '#e0a53f', '#ffd89e', 0.0],
  [19, '#ecd2cf', '#35262b', '#6a5257', '#8a6a70', '#e08a5a', '#ff9e6a', 0.05],
  [20.5, '#2b2740', '#ece7ee', '#beb8c8', '#948da4', '#dcb85a', '#d6c2ff', 0.4],
  [22, '#1a1b28', '#ece9e2', '#b7bac4', '#888ea0', '#e0b93f', '#cdd6ff', 0.9],
  [24, '#14161f', '#f0eee6', '#b9bcc6', '#8b90a0', '#e0b93f', '#cdd6ff', 1.0],
]

const VARS = ['--bg', '--ink', '--muted', '--eyebrow', '--marker']

const toRgb = (h) => {
  const n = parseInt(h.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
const toHex = (a) =>
  '#' + a.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
const blend = (a, b, f) => a.map((v, i) => v + (b[i] - v) * f)
const R = (n) => Math.round(n * 10) / 10

/* ---- Contrast guard -------------------------------------------------------
   The anchors cross over at dawn and dusk: the background travels dark -> light
   while the text travels light -> dark. Interpolated in RGB, the two meet in
   the middle and the text washes out (it bottomed out near 2:1). Rather than
   retune the palette, each text colour is checked against the background it
   actually lands on and nudged toward black or white only when it falls short.
   Colours that already pass are returned untouched. */

const srgbToLin = (c) => {
  c /= 255
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}
const luminance = (rgb) => {
  const [r, g, b] = rgb.map(srgbToLin)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
/** WCAG 2.1 relative-contrast ratio, 1..21. */
const contrast = (a, b) => {
  const la = luminance(a)
  const lb = luminance(b)
  return la > lb ? (la + 0.05) / (lb + 0.05) : (lb + 0.05) / (la + 0.05)
}

const BLACK = [0, 0, 0]
const WHITE = [255, 255, 255]

/**
 * Return `fg` unchanged if it already meets `target` against `bg`; otherwise
 * blend it toward whichever extreme affords more contrast, stopping as soon as
 * the target is met. Hue is preserved as far as the target allows.
 *
 * Some backgrounds simply cannot reach a high target (mid-greys cap out around
 * 4.6:1 against any colour), so we settle for the best achievable rather than
 * overshooting to a flat black or white every time.
 */
function ensureContrast(fg, bg, target) {
  if (contrast(fg, bg) >= target) return fg

  const toward = contrast(WHITE, bg) > contrast(BLACK, bg) ? WHITE : BLACK
  if (contrast(toward, bg) <= contrast(fg, bg)) return fg

  // Search over rounded channels, so the ratio we verify here is the ratio the
  // emitted hex actually paints; rounding afterwards can cost ~0.01.
  const at = (k) => blend(fg, toward, k).map(Math.round)

  let lo = 0
  let hi = 1
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2
    if (contrast(at(mid), bg) >= target) hi = mid
    else lo = mid
  }
  return at(hi)
}

/* Minimum contrast per role. .eyebrow is 12-15px uppercase mono with wide
   letter-spacing, so it gets more headroom than its size alone would imply. */
const TARGETS = { '--ink': 7, '--muted': 4.5, '--eyebrow': 5 }

/**
 * Resolve the CSS custom properties for a given time of day.
 *
 * @param {Date} date
 * @returns {Record<string, string>} custom property name -> value
 */
export function themeAt(date = new Date()) {
  const t = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600

  let lo = ANCHORS[0]
  let hi = ANCHORS[ANCHORS.length - 1]
  for (let i = 0; i < ANCHORS.length - 1; i++) {
    if (t >= ANCHORS[i][0] && t <= ANCHORS[i + 1][0]) {
      lo = ANCHORS[i]
      hi = ANCHORS[i + 1]
      break
    }
  }
  const f = (t - lo[0]) / (hi[0] - lo[0] || 1)

  const vars = {}
  // Rounded up front: the guard must measure against the background the browser
  // will actually paint, not the fractional value we interpolated to.
  const bg = blend(toRgb(lo[1]), toRgb(hi[1]), f).map(Math.round)
  vars['--bg'] = toHex(bg)

  for (let c = 2; c <= 5; c++) {
    const name = VARS[c - 1]
    const raw = blend(toRgb(lo[c]), toRgb(hi[c]), f)
    const target = TARGETS[name]
    vars[name] = toHex(target ? ensureContrast(raw, bg, target) : raw)
  }

  /* Invisible sun / moon arc. Nothing is drawn from this; it only positions
     the light so the cast shadows below know which way to fall. */
  const day = t >= 6 && t < 18
  let fr
  if (day) {
    fr = (t - 6) / 12
  } else {
    const h = t < 6 ? t + 24 : t
    fr = (h - 18) / 12
  }
  const alt = Math.sin(fr * Math.PI) // 0 at the horizon, 1 overhead
  const orbX = 8 + fr * 84 // horizontal position, in % across the viewport

  vars['--stars'] = (lo[7] + (hi[7] - lo[7]) * f).toFixed(2)

  /* cast shadow, opposite the light, longer near the horizon */
  const ax = (orbX - 50) / 50 // -1 (light far left) .. +1 (far right)
  const len = 1 - alt * 0.75 // 0.25 at noon .. 1 near horizon
  const a = day ? 0.22 + alt * 0.16 : 0.14
  const c = `rgba(12,14,22,${a.toFixed(2)})`
  vars['--name-shadow'] =
    `${R(-ax * (10 + len * 26))}px ${R(6 + len * 20)}px ${R(8 + len * 22)}px ${c}`
  vars['--photo-shadow'] =
    `${R(-ax * (18 + len * 50))}px ${R(12 + len * 40)}px ${R(30 + len * 54)}px ${c}`

  return vars
}
