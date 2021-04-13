import React, { FC, useEffect } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc'
import { CodeIcon, CopyIcon, SandboxIcon } from './icon'
import { CodeViewWrap, PreviewerWarp } from './style'

interface CodeBlockProps {
	code: string
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code }) => {
	return (
		<PreviewerWarp>
			<LiveProvider code={code} scope={{}}>
				<div className="code-preview-wrap">
					<LivePreview />
				</div>
				<div className="code-actions">
					<div>
						<SandboxIcon />
					</div>
					<div>
						<CopyIcon />
						<CodeIcon />
					</div>
				</div>
				<CodeViewWrap className="code-editor-wrap">
					<LiveEditor className="code-editor" />
				</CodeViewWrap>
				<LiveError className="code-error-wrap" />
			</LiveProvider>
		</PreviewerWarp>
	)
}
