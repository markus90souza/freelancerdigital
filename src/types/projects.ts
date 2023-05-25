import type { RichTextContent } from '@graphcms/rich-text-types'

export type Technology = {
  icon: string
  name: string
  start_date: string
}

export type SectionProps = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }

  title: string

  short_description: string

  description: {
    raw: RichTextContent
  }

  technologies: Technology[]

  sections: SectionProps[]

  github_url: string
  website_url: string
}
