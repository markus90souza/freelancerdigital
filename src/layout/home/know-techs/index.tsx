import { HeadingSection } from '@/components/heading-section'
import { Tech } from './tech'

import { TbBrandNextjs } from 'react-icons/tb'
export function KnowTechs() {
  return (
    <section className="container py-16">
      <HeadingSection title="Conhecimentos" subtitle="Competências" />

      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <Tech
            key={index}
            tech={{
              icon: <TbBrandNextjs size={44} />,
              name: 'Next.JS',
              startDate: '2021/01/03',
            }}
          />
        ))}
      </div>
    </section>
  )
}
