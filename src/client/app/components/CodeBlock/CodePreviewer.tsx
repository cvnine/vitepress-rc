import React, { FC } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc'
import { CodeViewWrap } from './style'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
	code: string
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code }) => {
	return (
		<LiveProvider code={code} scope={{ mdx }}>
			<LivePreview />
			<CodeViewWrap className="code-editor-wrap">
				<LiveEditor className="code-editor" />
			</CodeViewWrap>
			<LiveError />
		</LiveProvider>
	)
}
