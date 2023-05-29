'use client'

import { HighlightCard } from './highlight-card'

import { ArrowRight } from 'phosphor-react'
import { Link } from '@/components/link'
import { HeadingSection } from '@/components/heading-section'
import { HorizantalDivider } from '@/components/divider/HorizantalDivider'
import { Project } from '@/types/projects'

type HighlightProjectsProps = {
  projects: Project[]
}

export const HighlightProjects = ({ projects }: HighlightProjectsProps) => {
  return (
    <section className="container py-16">
      <HeadingSection title="Projetos em destaque" subtitle="Destaques" />
      <HorizantalDivider className="mb-16" />

      <div>
        {projects.map((project, i) => (
          <div key={i} className="flex-1 lg:py-[18px]">
            <HighlightCard project={project} />
            <HorizantalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interresou ?</span>
          <Link href={'/projects'} className="inline-flex">
            Ver todos
            <ArrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
