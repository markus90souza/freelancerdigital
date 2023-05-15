'use client'

import { Link } from '@/app/components/Link'
import { TechBadge } from '@/app/components/TechBadge'
import Image from 'next/image'
import { ArrowArcRight, ArrowRight, ArrowUDownRight } from 'phosphor-react'

interface ProjectCardProps {}

// eslint-disable-next-line no-empty-pattern
export function ProjectCard({}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12 ">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          alt=""
          src={'/images/profile-pic.png'}
          className=" w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50 ">
          <Image width={20} height={20} alt="" src={'/images/icon.svg'} />
          bookStore
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam,
          iusto tempora repellat possimus error recusandae sed natus doloribus
          nihil, dicta magni hic a illum sint dignissimos, culpa veniam libero!
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-4 mb-8 lg:max-w-[350px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <TechBadge key={index} name="REACTJS" />
          ))}
        </div>

        <Link href={'/projetos/bookwise'}>
          Ver Projeto <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
