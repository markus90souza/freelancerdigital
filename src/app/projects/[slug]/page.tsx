import { ProjectDetails } from '@/layouts/projects/project-details'
import { ProjectSections } from '@/layouts/projects/project-section'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<any> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      page_background {
        url
      }
      thumbnail {
        url
      }
      sections {
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
  const response = await getProjectDetails(slug)

  console.log(response)
  return (
    <>
      <ProjectDetails />
      <ProjectSections />
    </>
  )
}
