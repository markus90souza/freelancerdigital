'use client'

import { Button } from '@/components/button'
import { HeadingSection } from '@/components/heading-section'
import { Link } from '@/components/link'
import { RichText } from '@/components/rich-text'
import { TechBadge } from '@/components/tech-badge'
import { Project } from '@/types/projects'
import { ArrowLeft, GithubLogo } from 'phosphor-react'

import { Github, GithubIcon, MonitorSmartphone } from 'lucide-react'
import { CMSIcon } from '@/components/cms-icon'
type ProjectDetailsProps = {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24 ">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.page_background.url}) no-repeat center/cover`,
        }}
      />

      <HeadingSection
        subtitle="Projeto"
        title={project.title}
        className="items-center text-center sm:[&>h3]:text-4xl"
      />
      <div className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        <RichText content={project.description.raw} />
      </div>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-x-3 gap-y-4">
        {project.technologies.map((tech, index) => (
          <TechBadge name={tech.name} key={index} />
        ))}
      </div>

      <div className="my-4 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        {project?.github_url && (
          <Link href={project.github_url} target="_blank">
            <Button className="min-w-[180px]">
              <Github size={20} />
              Github
            </Button>
          </Link>
        )}
        {project?.website_url && (
          <Link href={project.website_url} target="_blank">
            <Button className="min-w-[180px]">
              <MonitorSmartphone size={20} />
              Website
            </Button>
          </Link>
        )}
      </div>

      <Link href={'/projects'}>
        <ArrowLeft />
        Voltar a projetos
      </Link>
    </section>
  )
}
