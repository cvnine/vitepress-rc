import React from 'react'
import ReactDOM from 'react-dom'
import Theme from '@virtual-module/theme/index'
import { useRoute } from './hooks/useRoute'
import Context from './context'
import { useHtmlHead } from './hooks/useHtmlHead'

function App() {
	const { route } = useRoute(Theme.NotFound)
	useHtmlHead(route)

	return (
		<Context.Provider value={route}>
			<Theme.Layout />
		</Context.Provider>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app')
)
