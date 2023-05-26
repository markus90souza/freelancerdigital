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
  id: string
  slug: string
  thumbnail: {
    url: string
  }

  page_background: {
    url: string
  }

  title: string

  short_description: string

  description: {
    raw: RichTextContent
  }

  technologies: Technology[]

  section: SectionProps[]

  github_url: string
  website_url: string
}
