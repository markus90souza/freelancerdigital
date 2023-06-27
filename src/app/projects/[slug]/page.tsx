import { ProjectDetails } from '@/layouts/projects/project-details'
import { ProjectSections } from '@/layouts/projects/project-section'
import { ProjectPageData, ProjectPageStaticData } from '@/types/page'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import { Metadata } from 'next'

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
  const { project } = await getProjectDetails(slug)

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.section} />
    </>
  )
}
// ssg
// export async function generateStaticParams() {
//   const query = `
//     query ProjectBySlugQuery {
//       projects(first:100) {
//        slug
//       }
//     }

//   `

//   const { projects } = await fetchHygraphQuery<ProjectPageStaticData>(query)

//   return projects
// }

// METADATA

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const { project } = await getProjectDetails(slug)

  return {
    title: project.title ?? '',
    description: project.description.text,

    openGraph: {
      images: [{ url: project.thumbnail.url, width: 1200, height: 630 }],
    },
  }
}
