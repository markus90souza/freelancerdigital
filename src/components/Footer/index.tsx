import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="flex h-14 w-full items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm">
        Feito com
        <IoMdHeart size={13} className="text-emerald-500" />
        por
        <strong className="font-medium">Marcos de Souza</strong>
      </span>
    </footer>
  )
}
