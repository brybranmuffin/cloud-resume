import ProjectCard from './ProjectCard'
import { PROJECTS } from './projectData'

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
