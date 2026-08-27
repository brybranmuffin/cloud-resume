/** Tab order here is the order they render in the nav. */
export const ROUTES = [
  { slug: 'about', label: 'About Me' },
  { slug: 'projects', label: 'Projects' },
  { slug: 'resume', label: 'Resume' },
]

export const SLUGS = ROUTES.map((r) => r.slug)
export const HOME = 'about'
