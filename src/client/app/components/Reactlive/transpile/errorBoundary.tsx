import React, { Component } from 'react'

export type ErrorCallback = (err: Error) => void

const errorBoundary = (Element: React.ReactNode, errorCallback: ErrorCallback) => {
	// try {
	// 	return typeof Element === 'function' ? <Element /> : Element
	// } catch (error) {
	// 	errorCallback(error)
	// }

	return Element

	// return
	// return class ErrorBoundary extends Component {
	// 	componentDidCatch(error: Error) {
	// 		errorCallback(error)
	// 	}

	// 	render() {
	// 		return typeof Element === 'function' ? <Element /> : Element
	// 	}
	// }
}

export default errorBoundary
