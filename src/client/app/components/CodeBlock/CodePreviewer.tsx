import React, { FC } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc'
import { CodeViewWrap } from './style'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
	code: string
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code }) => {
	return (
		<CodeViewWrap>
			<LiveProvider code={code} scope={{ mdx }}>
				<LiveEditor />
				<LiveError />
				<LivePreview />
			</LiveProvider>
		</CodeViewWrap>
	)
}
