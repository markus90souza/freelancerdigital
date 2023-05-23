import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/layout/home/hero'
import { HighlightProjects } from '@/layout/home/highlight-projects'
import { KnowTechs } from '@/layout/home/know-techs'
import { WorkExperience } from '@/layout/home/work-experience'

export default function Home() {
  return (
    <>
      <Hero />
      <KnowTechs />
      <HighlightProjects />
      <WorkExperience />
      <BackToTop />
    </>
  )
}
