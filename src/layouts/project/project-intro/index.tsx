import { HeadingSection } from '@/components/heading-section'
import { Link } from '@/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export function ProjectIntro() {
  return (
    <section className="bg-hero-image flex h-[450px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-2 lg:h-[630px] ">
      <HeadingSection
        subtitle="Projetos"
        title="Meus Projetos"
        className="items-center text-center sm:[&>h3]:text-4xl"
      />

      <div className="flex flex-col items-center">
        <p className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam
          cupiditate enim debitis architecto blanditiis sed et iure
          reprehenderit vitae, odit officia inventore ullam doloremque aperiam
          quos aut, atque quisquam?
        </p>

        <Link href={'/'}>
          <HiArrowNarrowLeft size={20} />
          Voltar para a Home
        </Link>
      </div>
    </section>
  )
}
