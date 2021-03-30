import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, NotFound } from '@virtual-module/theme/index'
import { useRoute } from './hooks/useRoute'
import Context from './context'
import { useHtmlHead } from './hooks/useHtmlHead'

function App() {
	const { route } = useRoute(NotFound)
	useHtmlHead(route)

	return (
		<Context.Provider value={route}>
			<Layout />
		</Context.Provider>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app')
)
