import 'vite/dynamic-import-polyfill'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { App } from './App'

export function render(ssrHref: string) {
	return ReactDOMServer.renderToString(
		<React.StrictMode>
			<App ssrHref={ssrHref} />
		</React.StrictMode>
	)
}
