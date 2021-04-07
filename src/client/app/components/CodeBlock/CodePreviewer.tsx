import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { CodeViewWrap } from './style'

interface CodeBlockProps {
	code: string
	language: Language
}

export const CodePreviewer: FC<CodeBlockProps> = ({ code, language }) => {
	return (
		<CodeViewWrap>
			<Highlight {...defaultProps} code={code} language={language} theme={undefined}>
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
		</CodeViewWrap>
	)
}
