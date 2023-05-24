import { KnownTech, Project } from './projects'
import { Social } from './socials'

import type { RichTextContent } from '@graphcms/rich-text-types'
export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }

  technologies: KnownTech[]

  profile_picture: {
    url: string
  }

  socials: Social[]

  highlight_projects: Project[]
}

export type HomePageData = {
  page: HomePageInfo
}
