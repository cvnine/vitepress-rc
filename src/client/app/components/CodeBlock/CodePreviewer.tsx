import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { CodeViewWrap } from './style'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
	code: string
	language: Language
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code, language }) => {
	return <CodeViewWrap></CodeViewWrap>
}
