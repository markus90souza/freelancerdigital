import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/forms/contact'
import { Header } from '@/components/header'
import { CrispChat } from '@/components/crisp-chat'

import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <Footer />
        <Analytics />
        <CrispChat />
      </body>
    </html>
  )
}
