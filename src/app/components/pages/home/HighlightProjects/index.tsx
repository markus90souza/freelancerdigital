'use client'
import { HorizantalDivider } from '@/app/components/Divider/HorizantalDivider'
import { HeadingSection } from '@/app/components/HeadingSection'
import { ProjectCard } from './ProjectCard'
import { Link } from '@/app/components/Link'
import { ArrowRight } from 'phosphor-react'

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
