import { Hero } from './components/pages/home/Hero'
import { HighlightProjects } from './components/pages/home/HighlightProjects'
import { KnowTechs } from './components/pages/home/KnowTechs'
import { WorkExperience } from './components/pages/home/WorkExperience'

export default function Home() {
  return (
    <>
      <Hero />
      <KnowTechs />
      <HighlightProjects />
      <WorkExperience />
    </>
  )
}
