import Image from 'next/image'
import { Link } from '@/components/link'
import { TechBadge } from '@/components/tech-badge'
import { WorkExperience } from '@/types/work-experiences'
import { RichText } from '@/components/rich-text'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type ExperienceProps = {
  data: WorkExperience
}

export function Experience({ data }: ExperienceProps) {
  const startDate = new Date(data.start_date)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = data.end_date
    ? format(new Date(data.end_date), 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  const end = data.end_date ? new Date(data.end_date) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={data.company_logo.url}
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
            href={data.company_website}
            className="text-gray-500 hover:text-emerald-500"
            target="_blank"
          >
            @{data.company_name}
          </Link>

          <h4 className="text-gray-300">{data.company_name}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <RichText content={data.description.raw} />
          </div>
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competencias
        </p>

        <div className="mb-8 flex flex-wrap gap-x-3 gap-y-4 lg:max-w-[350px]">
          {data.technologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
