import { HeadingSection } from '@/components/HeadingSection'
import { Experience } from './experience'

export function WorkExperience() {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-10">
      <div className="max-w-[420px]">
        <HeadingSection
          title="Experiência Profissinal"
          subtitle="Experiências"
        />

        <p className="mt-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint
          nobis laborum ea ut culpa ratione velit veritatis iusto, itaque
          necessitatibus, ipsa minima eaque animi eum inventore soluta alias
          delectus.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Experience />
        <Experience />
        <Experience />
      </div>
    </section>
  )
}
