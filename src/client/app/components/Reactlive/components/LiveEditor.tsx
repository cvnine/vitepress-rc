import React, { FC, useEffect } from 'react'
import LiveContext, { IContext } from './LiveContext'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'

interface ICodeEditor extends Omit<IContext, 'error' | 'element' | 'shadowRoot'> {
	[key: string]: any
}

type ILiveEditor = {
	[key: string]: any
}

const CodeEditor: FC<ICodeEditor> = ({ code: prevCode, onChange, style, ...res }) => {
	const [code, setCode] = React.useState(prevCode)

	useEffect(() => {
		setCode(prevCode)
	}, [prevCode])

	const highlightCode = (code: string) => (
		<Highlight {...defaultProps} code={code} theme={undefined} language={'tsx'}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<div className={className} style={{ ...style }}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</div>
			)}
		</Highlight>
	)

	const updateContent = (code: string) => {
		setCode(code)
		onChange && onChange(code)
	}

	return (
		<Editor
			value={code}
			highlight={highlightCode}
			onValueChange={updateContent}
			style={{
				...style,
			}}
			{...res}
		/>
	)
}

export default function LiveEditor(props: ILiveEditor) {
	return (
		<LiveContext.Consumer>
			{({ code, disabled, onChange }) => (
				<CodeEditor code={code} disabled={disabled} onChange={onChange} {...props} />
			)}
		</LiveContext.Consumer>
	)
}
