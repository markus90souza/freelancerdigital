import Link from 'next/link'
import { Project } from '@/types/projects'
import { ProjectCard } from './project-card'

type ProjectListProps = {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="container grid grid-cols-1 gap-4 py-32 opacity-70 transition-all hover:opacity-100 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.slug}>
          <ProjectCard data={project} />
        </Link>
      ))}
    </section>
  )
}
