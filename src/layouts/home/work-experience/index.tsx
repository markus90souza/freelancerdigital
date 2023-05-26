import { HeadingSection } from '@/components/heading-section'
import { Experience } from './experience'
import { WorkExperience as IWorkExperience } from '@/types/work-experiences'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="container flex min-h-screen flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-10">
      <div className="top-5 max-w-[420px] sm:sticky">
        <HeadingSection
          title="Experiência Profissional | Freelancers"
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
        {experiences.map((experience, index) => (
          <>
            <Experience key={experience.id} data={experience} />
            <Experience key={experience.id} data={experience} />
            <Experience key={experience.id} data={experience} />
            <Experience key={experience.id} data={experience} />
            <Experience key={experience.id} data={experience} />
          </>
        ))}
      </div>
    </section>
  )
}
