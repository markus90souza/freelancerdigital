import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { ReactNode } from 'react'

type TechProps = {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
}

export function Tech({ tech }: TechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '')

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500">
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-medium">{tech.name}</p>
          {tech.icon}
        </div>
        <span>{relativeTime} de experiência</span>
      </div>
    </div>
  )
}
