import { TechBadge } from '@/app/components/TechBadge'
import Image from 'next/image'

export function Hero() {
  const TECHS = ['NEXTJS', 'REACT', 'TAILWINDCSS', 'STYLED-COMPONENTS']
  return (
    <section
      className={`
        w-full 
        h-[755px]
        bg-cover
        bg-no-repeat
        bg-center bg-hero-image 
        flex flex-col justify-end pb-10
        sm:pb-32 py-32 lg:py=[110px]
      `}
    >
      <div className="container flex items-start justify-between flex-col-reverse gap-4 lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="text-emerald-400 font-mono">olá meu nome é </p>
          <h2 className="text-4xl mt-2 font-medium">Marcos de Souza</h2>

          <p className="text-sm my-6 text-gray-400 sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            numquam culpa nesciunt ab illo porro veniam? Repudiandae magni nobis
            sequi nostrum, saepe iste, repellendus sapiente cumque quia alias
            sint! Quod?
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[320px]">
            {TECHS.map((techs) => (
              <TechBadge name={techs} key={techs} />
            ))}
          </div>

          <div className="">contato</div>
        </div>

        <Image
          src={'/images/profile-pic.png'}
          width={420}
          height={404}
          alt=""
        />
      </div>
    </section>
  )
}
