'use client'

import { Button } from '@/components/Button'
import { HeadingSection } from '@/components/HeadingSection'
import { Link } from '@/components/Link'
import { TechBadge } from '@/components/TechBadge'
import { ArrowLeft, GithubLogo } from 'phosphor-react'

export function ProjectDetails() {
  return (
    <section className="px6 relative flex w-full flex-col items-center justify-end overflow-hidden py-24 pb-10 sm:min-h-[755px] sm:pb-24 ">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(https://media.graphassets.com/EC5gBJVTSuuJ74UXgmd8) no-repeat center/cover',
        }}
      />

      <HeadingSection
        subtitle="Projeto / "
        title="Meus Projetos"
        className="items-center text-center sm:[&>h3]:text-4xl"
      />
      <p className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam
        cupiditate enim debitis architecto blanditiis sed et iure reprehenderit
        vitae, odit officia inventore ullam doloremque aperiam quos aut, atque
        quisquam?
      </p>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-x-3 gap-y-4">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>

      <div className="my-4 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        <Link href={''} target="_blank">
          <Button className="min-w-[180px]">
            <GithubLogo size={20} />
            Github
          </Button>
        </Link>

        <Link href={''} target="_blank">
          <Button className="min-w-[180px]">
            <GithubLogo size={20} />
            Website
          </Button>
        </Link>
      </div>

      <Link href={'/projects'}>
        <ArrowLeft />
        Voltar a projetos
      </Link>
    </section>
  )
}
