import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/layout/home/hero'
import { HighlightProjects } from '@/layout/home/highlight-projects'
import { KnowTechs } from '@/layout/home/know-techs'
import { WorkExperience } from '@/layout/home/work-experience'
import { HomePageData } from '@/types/page'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profile_picture {
          url
        }
        socials {
          url
          icon
        }
        know_techs {
          icon
          name
          start_date
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

const Home = async () => {
  const { page: pageData } = await getPageData()

  return (
    <>
      <Hero data={pageData} />
      <KnowTechs />
      <HighlightProjects />
      <WorkExperience />
      <BackToTop />
    </>
  )
}

export default Home
