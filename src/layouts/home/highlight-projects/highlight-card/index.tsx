'use client'

import { Link } from '@/components/link'
import { TechBadge } from '@/components/tech-badge'
import { Project } from '@/types/projects'
import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'

type HighlightCardProps = {
  project: Project
}

export function HighlightCard({ project }: HighlightCardProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12 ">
      <div className="h-full w-full">
        <Image
          width={420}
          height={304}
          alt=""
          src={project.thumbnail.url}
          className=" h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50 ">
          <Image width={20} height={20} alt="" src={'/images/icon.svg'} />
          {project.title}
        </h3>

        <p className="my-6 text-gray-400">{project.short_description}</p>

        <div className="mb-8 flex flex-wrap gap-x-3 gap-y-4 lg:max-w-[350px]">
          {project.technologies.map((tech) => (
            <TechBadge
              key={`${project.slug}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver Projeto <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
