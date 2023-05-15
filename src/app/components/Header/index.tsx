'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavLink } from './NavLink'

export const Header = () => {
  const NAVLINKS = [
    { label: 'Home', href: '/' },
    { label: 'Projetos', href: '/projects' },
  ]

  return (
    <header className="absolute top-0 w-full h-24 z-10 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href={'/'}>
          <Image
            src={'/images/logo.svg'}
            width={50}
            height={50}
            alt={'frelancerdigital'}
          />
        </Link>

        <nav className="flex items-center gap-4">
          {NAVLINKS.map((item) => (
            <NavLink {...item} key={item.href} />
          ))}
        </nav>
      </div>
    </header>
  )
}
