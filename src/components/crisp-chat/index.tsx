'use client'

import { ChatboxColors, Crisp } from 'crisp-sdk-web'
import { useEffect } from 'react'
export function CrispChat() {
  useEffect(() => {
    Crisp.configure('a4efb6f3-1b54-4d30-a983-e2171e03f090', {
      autoload: true,
      locale: 'pt-BR',
    })
    Crisp.setColorTheme(ChatboxColors.Black)
  })
  return null
}
