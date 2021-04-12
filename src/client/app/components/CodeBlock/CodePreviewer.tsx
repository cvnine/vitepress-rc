import React, { FC, useEffect } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc'
import { CodeViewWrap, PreviewerWarp } from './style'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
	code: string
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code }) => {
	return (
		<PreviewerWarp>
			<LiveProvider code={code} scope={{ mdx }}>
				<div className="code-preview-wrap">
					<LivePreview />
				</div>
				<div className="code-actions"></div>
				<CodeViewWrap className="code-editor-wrap">
					<LiveEditor className="code-editor" />
				</CodeViewWrap>
				<LiveError className="code-error-wrap" />
			</LiveProvider>
		</PreviewerWarp>
	)
}
