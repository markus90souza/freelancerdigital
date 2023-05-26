import { ProjectIntro } from '@/layouts/project/project-intro'
import { ProjectList } from '@/layouts/project/project-list'
import { ProjectsPageData } from '@/types/page'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

const getProjectsData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        short_description
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export const metadata = {
  title: 'Projetos',
}

export default async function Projects() {
  const { projects } = await getProjectsData()
  console.log(projects)
  return (
    <>
      <ProjectIntro />

      <ProjectList projects={projects} />
    </>
  )
}
