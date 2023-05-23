import { cn } from '@/libs/utils'

interface HorizantalDividerProps {
  className?: string
}

export function HorizantalDivider({ className }: HorizantalDividerProps) {
  return (
    <div className={cn('my-8 w-full border-b border-b-gray-800', className)} />
  )
}
