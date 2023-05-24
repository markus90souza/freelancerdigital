import { CMSIcon } from '@/components/cms-icon'
import { KnownTech } from '@/types/projects'
import { getRelativeTimeString } from '@/utils/get-relative-time'

type TechProps = {
  tech: KnownTech
}

export function Tech({ tech }: TechProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500">
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-medium">{tech.name}</p>
          <CMSIcon icon={tech.icon} key={tech.name} />
        </div>
        <span>{tech.start_date} de experiência</span>
      </div>
    </div>
  )
}
