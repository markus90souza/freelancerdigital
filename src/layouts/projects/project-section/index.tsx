import { SectionProps } from '@/types/projects'
import Image from 'next/image'

type ProjectSectionsProps = {
  sections: SectionProps[]
}

export function ProjectSections({ sections }: ProjectSectionsProps) {
  return (
    <section className="container my-12 flex flex-col gap-8 sm:my-32 sm:gap-32">
      {sections.map((section) => (
        <div
          key={'jfdopjqsopjfo'}
          className="flex flex-col items-center gap-6 sm:gap-12"
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>

          <Image
            src={section.image.url}
            alt=""
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
