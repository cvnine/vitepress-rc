import React, { FC, useEffect, useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc'
import { CodeIcon, CopyIcon, CopyOk, RestoreIcon, SandboxIcon } from './icon'
import { CodeViewWrap, PreviewerWarp } from './style'
import { useCopy } from './hooks'
import codeScope from '@virtual-module/codeScope'
import styled from 'styled-components'

interface CodeBlockProps {
	code: string
	local: boolean
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code, local }) => {
	const [showCode, setShowCode] = useState(false)
	const [currentCode, setCurrentCode] = useState(code)
	const [copy, status] = useCopy()

	useEffect(() => {
		setCurrentCode(code)
	}, [code])

	return (
		<PreviewerWarp>
			<LiveProvider
				code={currentCode}
				local={local}
				scope={{ ...codeScope, react: React, 'styled-components': styled }}
			>
				<div className="code-preview-wrap">
					<LivePreview />
				</div>
				<div className="code-actions">
					<div>
						<SandboxIcon onClick={() => setShowCode((val) => !val)} />
					</div>
					<div className="code-actions--right">
						<RestoreIcon onClick={() => setCurrentCode(code)} />
						{status === 'ready' ? <CopyIcon onClick={() => copy(currentCode)} /> : <CopyOk />}
						<CodeIcon onClick={() => setShowCode((val) => !val)} />
					</div>
				</div>
				{showCode && (
					<>
						<CodeViewWrap className="code-editor-wrap">
							<LiveEditor
								className="code-editor"
								onCodeChange={(code: string) => {
									setCurrentCode(code)
								}}
							/>
						</CodeViewWrap>
					</>
				)}
				<LiveError className="code-error-wrap" />
			</LiveProvider>
		</PreviewerWarp>
	)
}
