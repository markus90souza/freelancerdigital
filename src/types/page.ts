import { Technology, Project } from './projects'
import { Social } from './socials'

import type { RichTextContent } from '@graphcms/rich-text-types'
import { WorkExperience } from './work-experiences'
export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }

  technologies: Technology[]

  profile_picture: {
    url: string
  }

  socials: Social[]

  highlight_projects: Project[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}

export type ProjectsPageData = {
  projects: Project[]
}
