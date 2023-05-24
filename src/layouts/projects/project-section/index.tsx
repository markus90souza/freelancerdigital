import Image from 'next/image'

export function ProjectSections() {
  const section = [
    {
      title: 'Image 1',
      image: 'https://media.graphassets.com/EC5gBJVTSuuJ74UXgmd8',
    },

    {
      title: 'Image 2',
      image: 'https://media.graphassets.com/EC5gBJVTSuuJ74UXgmd8',
    },

    {
      title: 'Image 3',
      image: 'https://media.graphassets.com/EC5gBJVTSuuJ74UXgmd8',
    },
  ]
  return (
    <section className="container my-12 flex flex-col gap-8 sm:my-32 sm:gap-32">
      {section.map((section) => (
        <div
          key={'jfdopjqsopjfo'}
          className="flex flex-col items-center gap-6 sm:gap-12"
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>

          <Image
            src={section.image}
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
