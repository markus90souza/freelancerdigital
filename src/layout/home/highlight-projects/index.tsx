'use client'

import { ProjectCard } from './project-card'

import { ArrowRight } from 'phosphor-react'
import { Link } from '@/components/link'
import { HeadingSection } from '@/components/heading-section'
import { HorizantalDivider } from '@/components/divider/HorizantalDivider'

export const HighlightProjects = () => {
  return (
    <section className="container py-16">
      <HeadingSection title="Projetos em destaque" subtitle="Destaques" />
      <HorizantalDivider className="mb-16" />

      <div>
        {Array.from({ length: 4 }).map((_, index) => (
          <>
            <ProjectCard key={index} />
            <HorizantalDivider key={index} className="my-16" />
          </>
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
