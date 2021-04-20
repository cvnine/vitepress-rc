import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Theme from '@virtual-module/theme/index'
import { useRoute } from './hooks/useRoute'
import Context from './context'
import { useHtmlHead } from './hooks/useHtmlHead'

function App() {
	const { route } = useRoute(Theme.NotFound)
	useHtmlHead(route)

	if (route.data === null) {
		return <></>
	}

	return (
		<Context.Provider value={route}>
			<Theme.Layout />
		</Context.Provider>
	)
}

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

export function render() {
	return ReactDOMServer.renderToString(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}
