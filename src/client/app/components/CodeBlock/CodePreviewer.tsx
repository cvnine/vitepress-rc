import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc'
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { CodeViewWrap } from './style'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
	code: string
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code }) => {
	return (
		<CodeViewWrap>
			<LiveProvider code={code} scope={{ mdx }} noInline={true}>
				<LiveEditor />
				<LiveError />
				<LivePreview />
			</LiveProvider>
		</CodeViewWrap>
	)
}
