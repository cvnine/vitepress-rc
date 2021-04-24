import type React from 'react'
import { getReact, getReactDom } from './render'

export type ErrorCallback = (err: Error) => void

interface IErrorBoundary {
	Element: React.ReactNode
	errorCallback: ErrorCallback
	shadowRoot: React.MutableRefObject<ShadowRoot | null>
	cssText: string | undefined
	local: boolean
}

const errorBoundary = async ({ Element, errorCallback, shadowRoot, cssText, local }: IErrorBoundary) => {
	const [React_P, ReactDom_P] = await Promise.all([getReact(local), getReactDom(local)])

	class ErrorBoundary extends React_P.Component {
		componentDidCatch(error: Error) {
			errorCallback(error)
		}

		render() {
			return typeof Element === 'function' ? <Element /> : Element
		}
	}
	if (shadowRoot.current) {
		try {
			ReactDom_P.unmountComponentAtNode(shadowRoot.current)
			ReactDom_P.render(<ErrorBoundary />, shadowRoot.current)
		} catch (error) {
			errorCallback(error)
		}
		const style = document.createElement('style')
		style.textContent = cssText || ''
		shadowRoot.current.appendChild(style)
	}
}

export default errorBoundary
