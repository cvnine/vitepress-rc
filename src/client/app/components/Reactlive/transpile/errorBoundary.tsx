import type React from 'react'

const fakeHost = `https://a.com`

export type ErrorCallback = (err: Error) => void

const errorBoundary = async (
	Element: React.ReactNode,
	errorCallback: ErrorCallback,
	shadowRoot: React.MutableRefObject<ShadowRoot | null>,
	cssText?: string
) => {
	const [{ default: ReactFetch }, { default: ReactDomFetch }] = await Promise.all([
		import(/* @vite-ignore */ new URL('//jspm.dev/react', fakeHost).href),
		import(/* @vite-ignore */ new URL('//jspm.dev/react-dom', fakeHost).href),
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
