import transform from './transform'
import errorBoundary, { ErrorCallback } from './errorBoundary'
import evalCode from './evalCode'
import React from 'react'

type ResultCallback = () => void

function isClass(fn: any) {
	try {
		Reflect.construct(String, [], fn)
	} catch (e) {
		return false
	}
	return true
}

function isReactElement(element: any): boolean {
	return (
		React.isValidElement(element) ||
		typeof element === 'string' ||
		typeof element === 'number' ||
		typeof element === 'boolean' ||
		Array.isArray(element)
	)
}

export const renderElementAsync = (
	{ code = '', scope = {}, local = true },
	resultCallback: ResultCallback,
	errorCallback: ErrorCallback,
	shadowRoot: React.MutableRefObject<ShadowRoot | null>
) => {
	const render = (cssText: string | undefined) => (Element: any) => {
		if (Element == null || Element === '') {
			errorCallback(new SyntaxError('`export default` must be called with valid JSX.'))
			return
		}
		if (isReactElement(Element)) {
			errorBoundary({ Element, errorCallback, shadowRoot, cssText, local })
			resultCallback()
			return
		}
		if (typeof Element === 'function') {
			if (isClass(Element)) {
				if (Element.prototype.isReactComponent) {
					errorBoundary({ Element, errorCallback, shadowRoot, cssText, local })
					resultCallback()
					return
				}
			} else {
				const returnBack = Element()
				if (returnBack != null && returnBack !== '' && isReactElement(returnBack)) {
					errorBoundary({ Element, errorCallback, shadowRoot, cssText, local })
					resultCallback()
					return
				}
			}
		}
		errorCallback(new SyntaxError('`export default` must be called with valid JSX.'))
	}

	transform({ code, local, scope })
		.then(({ result, imports, error, cssText }) => {
			if (error) throw error
			evalCode(result, { ...scope, ...imports, render: render(cssText) })
		})
		.catch((err) => {
			errorCallback(err)
		})
}
