import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { cn } from '@/libs/utils'

type LinkProps = ComponentProps<typeof NextLink>

export function Link({ children, className, ...rest }: LinkProps) {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-emerald-500',
        className,
      )}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
