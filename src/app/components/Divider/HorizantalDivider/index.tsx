import { cn } from '@/app/libs/utils'

interface HorizantalDividerProps {
  className?: string
}

export function HorizantalDivider({ className }: HorizantalDividerProps) {
  return (
    <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
  )
}
