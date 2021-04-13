import React from 'react'

export type ErrorCallback = (err: Error) => void

const errorBoundary = async (
	Element: React.ReactNode,
	errorCallback: ErrorCallback,
	shadowRoot: React.MutableRefObject<ShadowRoot | null>,
	cssText?: string
) => {
	const [{ default: ReactFetch }, { default: ReactDomFetch }] = await Promise.all([
		import('https://jspm.dev/react'),
		import('https://jspm.dev/react-dom'),
	])

	class ErrorBoundary extends (ReactFetch as typeof React).Component {
		componentDidCatch(error: Error) {
			errorCallback(error)
		}

		render() {
			return typeof Element === 'function' ? <Element /> : Element
		}
	}
	if (shadowRoot.current) {
		ReactDomFetch.unmountComponentAtNode(shadowRoot.current)
		ReactDomFetch.render(<ErrorBoundary />, shadowRoot.current)
		const style = document.createElement('style')
		style.textContent = cssText || ''
		shadowRoot.current.appendChild(style)
	}
}

export default errorBoundary
