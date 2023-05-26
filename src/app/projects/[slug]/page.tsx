import { ProjectDetails } from '@/layouts/projects/project-details'
import { ProjectSections } from '@/layouts/projects/project-section'
import { ProjectPageData } from '@/types/page'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      id
      page_background {
        url
      }
      thumbnail {
        url
      }
      section {
        title
        image {
          url
        }
      }
      title
      short_description
      description {
        raw
        text
      }
      technologies {
        name
      }
      website_url
      github_url
    }
  }
  `
  const data = fetchHygraphQuery<any>(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )

  return data
}

export default async function Project({ params: { slug } }: ProjectProps) {
  console.log(slug)
  const { project } = await getProjectDetails(slug)

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.section} />
    </>
  )
}
