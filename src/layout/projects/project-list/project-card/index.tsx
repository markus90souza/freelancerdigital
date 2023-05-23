import { ReactNode } from 'react'

interface ProjectCardProps {
  children: ReactNode
}

export function ProjectCard({ children }: ProjectCardProps) {
  return (
    <>
      <h1>Projectcard</h1>
      {children}
    </>
  )
}
