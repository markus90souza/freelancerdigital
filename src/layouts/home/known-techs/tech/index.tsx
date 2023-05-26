'use client'
import { CMSIcon } from '@/components/cms-icon'
import { Technology } from '@/types/projects'
import { getRelativeTimeString } from '@/utils/get-relative-time'

type TechProps = {
  tech: Technology
}

export function Tech({ tech }: TechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.start_date),
    'pt-BR',
  ).replace('há ', '')

  return (
    <div className="flex flex-col gap-2 rounded-lg border-b-2 border-b-gray-600/20 bg-gray-600/20  p-6 text-gray-500 transition-all hover:border-b-emerald-500 hover:bg-gray-600/30 hover:text-emerald-500">
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-medium">{tech.name}</p>

          <CMSIcon icon={tech.icon} key={tech.name} />
        </div>
        <span>{relativeTime} de experiência</span>
      </div>
    </div>
  )
}
