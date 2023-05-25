import type { RichTextContent } from '@graphcms/rich-text-types'
import { Technology } from './projects'

export type WorkExperience = {
  id: string
  company_logo: {
    url: string
  }
  role: string
  company_name: string
  company_website: string
  start_date: string
  end_date: string
  technologies: Technology[]
  description: {
    raw: RichTextContent
  }
}
