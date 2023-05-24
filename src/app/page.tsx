import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/layouts/home/hero'
import { HighlightProjects } from '@/layouts/home/highlight-projects'
import { KnownTechs } from '@/layouts/home/known-techs'
import { WorkExperience } from '@/layouts/home/work-experience'
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

  console.log(pageData)

  return (
    <>
      <Hero data={pageData} />
      {/* <KnownTechs techs={pageData.technologies} /> */}
      <HighlightProjects />
      <WorkExperience />
      <BackToTop />
    </>
  )
}

export default Home
