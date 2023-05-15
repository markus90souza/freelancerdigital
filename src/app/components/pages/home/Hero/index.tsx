'use client'
import Image from 'next/image'
import { Button } from '@/app/components/Button'

import { TechBadge } from '@/app/components/TechBadge'
import {
  GithubLogo,
  InstagramLogo,
  WhatsappLogo,
  DiscordLogo,
  TwitterLogo,
} from 'phosphor-react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
export function Hero() {
  const TECHS = ['NEXTJS', 'REACT', 'TAILWINDCSS', 'STYLED-COMPONENTS']

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

  return (
    <section
      className={`
        w-full 
        lg:h-[755px]
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

          <div className="flex items-center mt-6 lg:mt-10 flex-col sm:flex-row sm:gap-5">
            <Button className="w-max shadow-button">
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex items-center text-2xl h-20 gap-2 text-gray-600">
              {CONTACTS.map((contact) => (
                <Link
                  key={contact.url}
                  href={contact.url}
                  target="_blank"
                  className="hover:text-emerald-400 transition-colors"
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
          className="mb-6 w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
