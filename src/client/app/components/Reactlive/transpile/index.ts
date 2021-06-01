import transform from './transform'
import errorBoundary, { ErrorCallback } from './errorBoundary'
import evalCode from './evalCode'
import React from 'react'

type ResultCallback = () => void

function isReactElement(element: any): boolean {
	return (
		React.isValidElement(element) ||
		typeof element === 'string' ||
		typeof element === 'number' ||
		typeof element === 'boolean' ||
		typeof element === 'function' ||
		Array.isArray(element)
	)
}

export const renderElementAsync = (
	{ code = '', scope = {}, local = true },
	resultCallback: ResultCallback,
	errorCallback: ErrorCallback,
	shadowRoot: React.MutableRefObject<ShadowRoot | Element | null>,
	shadowDom: boolean
) => {
	const render = (cssText: string | undefined) => (Element: any) => {
		if (Element == null || Element === '') {
			errorCallback(new SyntaxError('`export default` must be called with valid JSX.'))
			return
		}
		if (isReactElement(Element)) {
			errorBoundary({ Element, errorCallback, shadowDom, shadowRoot, cssText, local })
			resultCallback()
			return
		}
		errorCallback(new SyntaxError('`export default` must be called with valid JSX.'))
	}

	transform({ code, local, scope })
		.then(({ result, imports, error, cssText }) => {
			if (error) throw error
			evalCode(result, { ...imports, render: render(cssText) })
		})
		.catch((err) => {
			errorCallback(err)
		})
}
