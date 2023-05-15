import { getRelativeTimeString } from '@/utils/get-relative-time'
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
    <div className="flex flex-col gap-2 bg-gray-600/20 text-gray-500 p-6 rounded-lg hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-medium">{tech.name}</p>
          {tech.icon}
        </div>
        <span>{relativeTime} de Experiência</span>
      </div>
    </div>
  )
}
