import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { Plugin as VitePlugin } from 'vite'
import type { SiteConfig } from '../types/types'
import { mdxTransform } from './transform'
import { APP_PATH, SPECIAL_IMPORT_SITE_DATA } from './paths'
import { resolveSiteData } from './config'

export function createVitePlugin(
	root: string,
	{ configPath, alias, plugin: userPlugin, site, pages, themeDir }: SiteConfig,
	ssr = false,
	pageToHashMap?: Record<string, string>
) {
	const reactRefreshPlugin = reactRefresh()

	let siteData = site

	const vitePluginPressRc: VitePlugin = {
		name: 'vite-plugin-press-rc',
		config() {
			return {
				resolve: {
					alias,
				},
			}
		},
		resolveId(id) {
			if (id === SPECIAL_IMPORT_SITE_DATA) {
				return SPECIAL_IMPORT_SITE_DATA
			}
		},
		async load(id) {
			if (id === SPECIAL_IMPORT_SITE_DATA) {
				return `export default ${JSON.stringify(JSON.stringify(siteData))}`
			}
		},

		async transform(code, id, ssr) {
			if (/\.md?$/.test(id)) {
				code = await mdxTransform(code, id, userPlugin)
				const refreshResult = await reactRefreshPlugin.transform!.call(this, code, id + '.js', ssr)
				return refreshResult || code
			}
		},

		configureServer(server) {
			// serve our index.html after vite history fallback
			return () => {
				server.middlewares.use((req, res, next) => {
					if (req.url!.endsWith('.html')) {
						res.statusCode = 200
						res.end(`
								<!DOCTYPE html>
								<html>
									<head>
									<meta charset="utf-8">
									</head>
									<body>
										<div id="app"></div>
										<script type="module" src="/@fs/${APP_PATH}/index.js"></script>
									</body>
								</html>`)
						return
					}
					next()
				})
			}
		},

		async handleHotUpdate(ctx) {
			// handle config hmr
			const { file, server } = ctx
			if (file === configPath) {
				const newData = await resolveSiteData(root)
				if (newData.base !== siteData.base) {
					console.warn(`[vitepress-rc]: config.base has changed. Please restart the dev server.`)
				}
				siteData = newData
				return [server.moduleGraph.getModuleById(SPECIAL_IMPORT_SITE_DATA)!]
			}
		},
	}

	return [reactRefreshPlugin, vitePluginPressRc]
}
