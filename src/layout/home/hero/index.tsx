'use client'
import Image from 'next/image'

import {
  GithubLogo,
  InstagramLogo,
  WhatsappLogo,
  DiscordLogo,
  TwitterLogo,
} from 'phosphor-react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
import { TechBadge } from '@/components/tech-badge'
import { Button } from '@/components/button'

export function Hero() {
  const CONTACTS = [
    {
      url: 'https://github.com/markus90souza',
      icon: <GithubLogo size={24} />,
    },

    {
      url: 'https://github.com/markus90souza',
      icon: <InstagramLogo size={24} />,
    },

    {
      url: 'https://github.com/markus90souza',
      icon: <WhatsappLogo size={24} />,
    },

    {
      url: 'https://github.com/markus90souza',
      icon: <DiscordLogo size={24} />,
    },

    {
      url: 'https://github.com/markus90souza',
      icon: <TwitterLogo size={24} />,
    },
  ]

  const handleContact = () => {
    const contactSection = document.querySelector('#contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className={
        'lg:py=[110px] flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px]'
      }
    >
      <div className="container flex flex-col-reverse items-start justify-between gap-4 lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">olá meu nome é </p>
          <h2 className="mt-2 text-4xl font-medium">Marcos de Souza</h2>

          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            numquam culpa nesciunt ab illo porro veniam? Repudiandae magni nobis
            sequi nostrum, saepe iste, repellendus sapiente cumque quia alias
            sint! Quod?
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[320px]">
            <TechBadge name={'STYLED-COMPONENTS'} />
            <TechBadge name={'TAILWINDCSS'} />
            <TechBadge name={'REACTJS'} />
            <TechBadge name={'NEXTJS'} />
          </div>

          <div className="mt-6 flex flex-col items-center sm:flex-row sm:gap-5 lg:mt-10">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-2 text-2xl text-gray-600">
              {CONTACTS.map((contact) => (
                <Link
                  key={contact.url}
                  href={contact.url}
                  target="_blank"
                  className="transition-colors hover:text-emerald-400"
                >
                  {contact.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Image
          src={'/images/profile-pic.png'}
          width={420}
          height={404}
          alt=""
          className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
        />
      </div>
    </section>
  )
}
