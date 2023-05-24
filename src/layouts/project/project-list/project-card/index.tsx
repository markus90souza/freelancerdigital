import Image from 'next/image'
import { ReactNode } from 'react'

interface ProjectCardProps {}

export function ProjectCard() {
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 hover:border-emerald-500">
      <div className="h-48 w-full overflow-hidden">
        <Image
          width={380}
          height={220}
          src={'https://media.graphassets.com/EC5gBJVTSuuJ74UXgmd8'}
          alt="thumb"
          unoptimized
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className=" flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition-all group-hover:text-emerald-500">
          Bookwise
        </strong>
        <p className="mt-2 line-clamp-3 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad
          quam debitis harum corrupti quos autem amet iste, pariatur laboriosam
          blanditiis incidunt, illum voluptatum inventore itaque possimus est
          necessitatibus unde.
        </p>

        <span className="mt-auto block truncate text-sm font-medium text-gray-300 ">
          Next, React, Figma
        </span>
      </div>
    </div>
  )
}
