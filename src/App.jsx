import { useEffect } from 'react'
import Sky from './Sky'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'
import ProjectPage from './ProjectPage'
import { useTimeOfDayTheme } from './useTimeOfDayTheme'
import { useHashPath } from './useHashRoute'
import { SLUGS, HOME, ROUTES } from './routes'
import { bySlug } from './projectData'

const VIEWS = { about: About, projects: Projects }

export default function App() {
  useTimeOfDayTheme()
  const path = useHashPath()

  const section = SLUGS.includes(path[0]) ? path[0] : HOME
  // #/projects/<slug> renders a detail page; an unknown slug falls back to
  // the grid rather than a blank screen.
  const project = section === 'projects' && path[1] ? bySlug(path[1]) : null
  const View = VIEWS[section]

  const label = ROUTES.find((r) => r.slug === section)?.label
  const title = project
    ? `${project.title} · Bryant Bettencourt`
    : section === HOME
      ? 'Bryant Bettencourt'
      : `${label} · Bryant Bettencourt`
  document.title = title

  // Landing on a detail page mid-scroll would otherwise keep the old offset.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section, path[1]])

  return (
    <>
      <Sky />

      <Nav current={section} />

      <main className="view">
        {project ? <ProjectPage project={project} /> : <View />}
      </main>
    </>
  )
}
