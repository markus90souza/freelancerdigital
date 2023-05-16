import { Link } from '@/app/components/Link'
import { TechBadge } from '@/app/components/TechBadge'
import Image from 'next/image'

export function Experience() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={'https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5'}
            width={40}
            height={40}
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <Link
            href={''}
            className="text-gray-500 hover:text-emerald-500"
            target="_blank"
          >
            @Codedev
          </Link>

          <h4 className="text-gray-300">Dev Frontend</h4>
          <span className="text-gray-500">out 2022 * 0 meses * 7 meses</span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit fugiat, rem vel accusamus veniam optio aperiam
            perferendis, ducimus porro, numquam earum velit. Consectetur
            asperiores minima nemo ipsam, illo animi perspiciatis.
          </p>
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competencias
        </p>

        <div className="mb-8 flex flex-wrap gap-x-3 gap-y-4 lg:max-w-[350px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <TechBadge key={index} name="Teste" />
          ))}
        </div>
      </div>
    </div>
  )
}
