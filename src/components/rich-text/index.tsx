import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'

import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export function RichText({ ...rest }: RichTextProps) {
  return (
    <CMSRichText
      {...rest}
      renderers={{
        bold: ({ children }) => (
          <b className="font-medium text-gray-50">{children}</b>
        ),

        ul: ({ children }) => (
          <ul className="flex list-inside list-disc flex-col gap-1 pl-2">
            {children}
          </ul>
        ),

        a: ({ children, ...rest }) => (
          <a
            className="underline transition-colors hover:text-emerald-500"
            {...rest}
          >
            {children}
          </a>
        ),
      }}
    />
  )
}
