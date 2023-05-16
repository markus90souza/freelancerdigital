import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/app/libs/utils'

interface NavLinkProps {
  label: string
  href: string
}

export const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname()

  const is_active = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 font-mono font-medium text-gray-400',
        is_active && 'text-emerald-500',
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  )
}
