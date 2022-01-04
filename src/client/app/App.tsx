import Theme from '@virtual-module/theme/index'
import { useRoute } from './hooks/useRoute'
import Context from './context'
import { useHtmlHead } from './hooks/useHtmlHead'
import 'virtual:windi.css'

export function App({ ssrHref }: { ssrHref?: string }) {
	const { route } = useRoute(Theme.NotFound, ssrHref)

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
