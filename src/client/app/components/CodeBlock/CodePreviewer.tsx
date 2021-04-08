import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { CodeViewWrap } from './style'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
	code: string
	language: Language
}

console.log('ts :>> ', ts)

export const CodePreviewer: FC<CodeBlockProps> = ({ code, language }) => {
	return (
		<CodeViewWrap>
			<LiveProvider code={code} scope={{ mdx }} noInline={true} theme={undefined}>
				<LivePreview />
				<LiveEditor />
				<LiveError />
			</LiveProvider>
		</CodeViewWrap>
	)
}
