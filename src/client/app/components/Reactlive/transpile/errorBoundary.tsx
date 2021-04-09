import React, { Component } from 'react'

export type ErrorCallback = (err: Error) => void

const errorBoundary = (Element: React.ReactNode, errorCallback: ErrorCallback) => {
	return class ErrorBoundary extends React.Component {
		componentDidCatch(error: Error) {
			errorCallback(error)
		}

		render() {
			return typeof Element === 'function' ? <Element /> : Element
		}
	}
}

export default errorBoundary
