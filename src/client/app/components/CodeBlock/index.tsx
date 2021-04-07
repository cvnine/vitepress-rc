import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import { Wrap } from './style'

interface CodeBlockProps {
	className?: string
	live?: string
	children: string
}

export const CodeBlock: FC<CodeBlockProps> = ({ children, className, live, ...res }) => {
	const language = (className?.replace(/language-/, '') ?? 'js') as Language

	console.log('language :>> ', language)

	// if (live) {
	// 	return (
	// 		<Wrap>
	// 			<LiveProvider code={children} scope={{ mdx }}>
	// 				<LivePreview />
	// 				<LiveEditor />
	// 				<LiveError />
	// 			</LiveProvider>
	// 		</Wrap>
	// 	)
	// }

	return (
		<Wrap>
			<Highlight {...defaultProps} code={children} language={language} theme={undefined}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={className} style={{ ...style }}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</Wrap>
	)
}
