import { FC } from 'react'
import { HeadingSection } from '@/components/heading-section'
import { Experience } from './experience'
import { WorkExperience as IWorkExperience } from '@/types/work-experiences'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience: FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-10">
      <div className="max-w-[420px] sm:sticky sm:top-5 ">
        <HeadingSection
          title="Experiência Profissional | Freelancers"
          subtitle="Experiências"
        />

        <p className="mt-6 text-gray-400">
          Alguns projetos desenvolvido por mim
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <Experience key={experience.id} data={experience} />
        ))}
      </div>
    </section>
  )
}
