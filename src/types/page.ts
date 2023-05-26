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

  known_techs: Technology[]

  socials: Social[]

  highlight_projects: Project[]
}

// PAGE HOME
export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}

// PAGE PROJECTS
export type ProjectsPageData = {
  projects: Project[]
}

// PAGE PROJECT DETAILS
export type ProjectPageData = {
  project: Project
}
