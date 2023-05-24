import { HeadingSection } from '@/components/heading-section'
import { Tech } from './tech'

import { KnownTech } from '@/types/projects'

type KnownTechProps = {
  techs: KnownTech[]
}

export function KnownTechs({ techs }: KnownTechProps) {
  return (
    <section className="container py-16">
      <HeadingSection title="Conhecimentos" subtitle="Competências" />

      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs?.map((tech) => (
          <Tech key={tech.start_date} tech={tech} />
        ))}
      </div>
    </section>
  )
}
