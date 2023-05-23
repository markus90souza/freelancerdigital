import { ProjectCard } from './project-card'

export function ProjectList() {
  return (
    <section className="container grid grid-cols-1 gap-4 py-32 opacity-70 transition-all hover:opacity-100 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {Array.from({ length: 12 }).map(() => (
        <ProjectCard key={'sdcsadl'} />
      ))}
    </section>
  )
}
