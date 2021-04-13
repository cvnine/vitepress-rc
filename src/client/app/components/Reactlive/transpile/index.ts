import transform from './transform'
import errorBoundary, { ErrorCallback } from './errorBoundary'
import evalCode from './evalCode'
import React from 'react'

type ResultCallback = () => void

export const renderElementAsync = (
	{ code = '', scope = {} },
	resultCallback: ResultCallback,
	errorCallback: ErrorCallback,
	shadowRoot: React.MutableRefObject<ShadowRoot | null>
) => {
	const render = (cssText?: string) => (element: React.ReactNode) => {
		if (element == null || element === '') {
			errorCallback(new SyntaxError('`export default` must be called with valid JSX.'))
			return
		}
		if (
			React.isValidElement(element) ||
			typeof element === 'string' ||
			typeof element === 'number' ||
			typeof element === 'boolean' ||
			Array.isArray(element)
		) {
			errorBoundary(element, errorCallback, shadowRoot, cssText)
			resultCallback()
			return
		}
		if (typeof element === 'function') {
			if (isClass(element)) {
				if (element.prototype.isReactComponent) {
					errorBoundary(element, errorCallback, shadowRoot, cssText)
					resultCallback()
					return
				}
			} else {
				const returnBack = element()
				if (
					returnBack != null &&
					returnBack !== '' &&
					(React.isValidElement(returnBack) ||
						typeof returnBack === 'string' ||
						typeof returnBack === 'number' ||
						typeof returnBack === 'boolean' ||
						Array.isArray(returnBack))
				) {
					errorBoundary(element, errorCallback, shadowRoot, cssText)
					resultCallback()
					return
				}
			}
		}
		errorCallback(new SyntaxError('`export default` must be called with valid JSX.'))
	}

	transform(code)
		.then(({ result, imports, error, cssText }) => {
			if (error) throw error
			evalCode(result, { ...scope, ...imports, render: render(cssText) })
		})
		.catch((err) => {
			errorCallback(err)
		})
}

function isClass(fn: any) {
	try {
		Reflect.construct(String, [], fn)
	} catch (e) {
		return false
	}
	return true
}
