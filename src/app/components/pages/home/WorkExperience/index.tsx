import { HeadingSection } from '@/app/components/HeadingSection'
import { Experience } from './Experience'

export function WorkExperience() {
  return (
    <section className="container flex flex-col md:flex-row gap-10 py-16 md:gap-4 lg:gap-10">
      <div className="max-w-[420px]">
        <HeadingSection
          title="Experiência Profissinal"
          subtitle="Experiências"
        />

        <p className="text-gray-400 mt-6">
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
