import React, { FC } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc'
import { CodeViewWrap } from './style'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
	code: string
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code }) => {
	return (
		<CodeViewWrap className="previewer">
			<LiveProvider code={code} scope={{ mdx }}>
				<LivePreview />
				<LiveEditor />
				<LiveError />
			</LiveProvider>
		</CodeViewWrap>
	)
}
