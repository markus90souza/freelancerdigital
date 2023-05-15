import { HeadingSection } from '@/app/components/HeadingSection'
import { Tech } from './Tech'

import { TbBrandNextjs } from 'react-icons/tb'
export function KnowTechs() {
  return (
    <section className="container py-16">
      <HeadingSection title="Conhecimentos" subtitle="Competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
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
