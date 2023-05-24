'use client'

import { Link } from '@/components/link'
import { TechBadge } from '@/components/tech-badge'
import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'

export function ProjectCard() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12 ">
      <div className="h-full w-full">
        <Image
          width={420}
          height={304}
          alt=""
          src={'/images/profile-pic.png'}
          className=" h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50 ">
          <Image width={20} height={20} alt="" src={'/images/icon.svg'} />
          bookStore
        </h3>

        <p className="my-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam,
          iusto tempora repellat possimus error recusandae sed natus doloribus
          nihil, dicta magni hic a illum sint dignissimos, culpa veniam libero!
        </p>

        <div className="mb-8 flex flex-wrap gap-x-3 gap-y-4 lg:max-w-[350px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <TechBadge key={index} name="REACTJS" />
          ))}
        </div>

        <Link href={'/projects/bookwise'}>
          Ver Projeto <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
