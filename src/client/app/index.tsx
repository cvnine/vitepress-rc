import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

if (import.meta.env.PROD) {
	ReactDOM.hydrate(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('app')
	)
} else {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('app')
	)
}
