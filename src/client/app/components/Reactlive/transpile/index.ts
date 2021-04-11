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
			errorCallback(new SyntaxError('`export default` must be called with valid JSX.'))
		} else {
			resultCallback(errorBoundary(element, errorCallback))
		}
	}

	transform(code)
		.then(({ result, imports, error }) => {
			if (error) throw error
			evalCode(result, { ...scope, ...imports, render })
		})
		.catch((err) => {
			errorCallback(err)
		})
}
