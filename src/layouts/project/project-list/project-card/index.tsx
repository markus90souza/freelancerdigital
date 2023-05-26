import { Project } from '@/types/projects'
import Image from 'next/image'

interface ProjectCardProps {
  data: Project
}

export function ProjectCard({ data }: ProjectCardProps) {
  const { short_description, title, thumbnail, technologies } = data

  const techs = technologies.map((tech) => tech.name).join(' | ')
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 hover:border-emerald-500">
      <div className="h-48 w-full overflow-hidden">
        <Image
          width={380}
          height={220}
          src={thumbnail.url}
          alt="thumb"
          unoptimized
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className=" flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition-all group-hover:text-emerald-500">
          {title}
        </strong>
        <p className="mt-2 line-clamp-3 text-gray-400">{short_description}</p>

        <span className="mt-auto block truncate text-sm font-medium text-gray-300 ">
          {techs}
        </span>
      </div>
    </div>
  )
}
