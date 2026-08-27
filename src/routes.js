/** Tab order here is the order they render in the nav. */
export const ROUTES = [
  { slug: 'about', label: 'About Me' },
  { slug: 'projects', label: 'Projects' },
  // Resume tab removed for now; restore by adding
  // { slug: 'resume', label: 'Resume' } here plus a Resume view in App.jsx.
]

export const SLUGS = ROUTES.map((r) => r.slug)
export const HOME = 'about'
