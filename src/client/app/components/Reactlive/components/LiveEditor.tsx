import React, { FC, useEffect } from 'react'
import LiveContext, { IContext } from './LiveContext'
import Editor from '../codeEditor'
import Highlight, { defaultProps } from 'prism-react-renderer'

interface ICodeEditor extends Omit<IContext, 'error' | 'element' | 'shadowRoot' | 'shadowDom'> {
	onCodeChange?: (code: string) => void
	[key: string]: any
}

type ILiveEditor = {
	[key: string]: any
}

function throttle(fn: Function, delay: number = 100) {
	let timer: NodeJS.Timeout | undefined = undefined
	return (...args: any[]) => {
		clearTimeout(timer as unknown as number)
		timer = setTimeout(() => {
			fn(...args)
		}, delay)
	}
}

const CodeEditor: FC<ICodeEditor> = ({ code: prevCode, onChange, style, onCodeChange, ...res }) => {
	const [code, setCode] = React.useState(prevCode)

	useEffect(() => {
		setCode(prevCode)
		onCodeChange && onCodeChange(prevCode)
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
		onCodeChange && onCodeChange(code)
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
