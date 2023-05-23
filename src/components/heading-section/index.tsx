import { cn } from '@/libs/utils'

interface HeadingSectionProps {
  title: string
  subtitle: string
  className?: string
}

export function HeadingSection({
  title,
  subtitle,
  className,
}: HeadingSectionProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span
        className={cn('font-mono text-sm text-emerald-400')}
      >{`# ${subtitle}`}</span>
      <h3 className={cn('text-3xl font-medium')}>{title}</h3>
    </div>
  )
}
