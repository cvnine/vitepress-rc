import transform from './transform'
import errorBoundary, { ErrorCallback } from './errorBoundary'
import evalCode from './evalCode'

type ResultCallback = (element: React.ComponentType) => void

export const renderElementAsync = (
	{ code = '', scope = {} },
	resultCallback: ResultCallback,
	errorCallback: ErrorCallback
) => {
	const render = (element: React.ReactNode) => {
		if (typeof element === 'undefined') {
			errorCallback(new SyntaxError('`render` must be called with valid JSX.'))
		} else {
			resultCallback(errorBoundary(element, errorCallback))
		}
	}

	if (!/render\s*\(/.test(code)) {
		return errorCallback(new SyntaxError('No-Inline evaluations must call `render`.'))
	}

	transform(code).then((c) => {
		evalCode(c, { ...scope, render })
	})
}
