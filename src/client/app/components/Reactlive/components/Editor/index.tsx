import React, { Component, Fragment } from 'react'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { theme as liveTheme } from '../../constants/theme'

class CodeEditor extends Component<> {
	static getDerivedStateFromProps(props, state) {
		if (props.code !== state.prevCodeProp) {
			return { code: props.code, prevCodeProp: props.code }
		}

		return null
	}

	state = {
		code: '',
	}

	updateContent = (code) => {
		this.setState({ code }, () => {
			if (this.props.onChange) {
				this.props.onChange(this.state.code)
			}
		})
	}

	highlightCode = (code) => (
		<Highlight {...defaultProps} code={code} theme={undefined} language={this.props.language}>
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
	)

	render() {
		const { style, code: _code, onChange, language, theme, ...rest } = this.props
		const { code } = this.state

		const baseTheme = theme && typeof theme.plain === 'object' ? theme.plain : {}

		return (
			<Editor
				value={code}
				padding={10}
				highlight={this.highlightCode}
				onValueChange={this.updateContent}
				style={{
					whiteSpace: 'pre',
					fontFamily: 'monospace',
					...baseTheme,
					...style,
				}}
				{...rest}
			/>
		)
	}
}

export default CodeEditor
