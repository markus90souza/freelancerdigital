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
      }}
    />
  )
}
