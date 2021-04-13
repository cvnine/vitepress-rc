import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { Plugin as VitePlugin } from 'vite'
import type { SiteConfig } from '../types/types'
import { mdxTransform } from './transform'
import { APP_PATH, SPECIAL_IMPORT_SITE_DATA } from './paths'
import { resolveSiteData } from './config'
import slash from 'slash'
import { cacher } from './transform/plugins/api/cache'

export function createVitePlugin(
	root: string,
	{ configPath, alias, plugin: userPlugin, siteData, pages, themeDir }: SiteConfig,
	ssr = false,
	pageToHashMap?: Record<string, string>
) {
	const reactRefreshPlugin = reactRefresh()

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
				let { code: _code } = await mdxTransform(code, id, { root, alias }, userPlugin)
				const refreshResult = await reactRefreshPlugin.transform!.call(this, _code, id + '.js', ssr)
				//reactRefreshPlugin会检测导出的都必须是react组件，增加了pageData的导出会导致热更新失败，这里hack掉
				if (refreshResult && typeof refreshResult !== 'string') {
					refreshResult.code = refreshResult.code!.replace(
						'window.$RefreshSig$ = prevRefreshSig;',
						['window.$RefreshSig$ = prevRefreshSig;', 'import.meta.hot.accept();'].join('\n')
					)
				}

				return refreshResult || _code
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
									<link rel="prefetch" href="https://jspm.dev/@babel/standalone">
									<link rel="prefetch" href="https://jspm.dev/gogocode@0.2.9">
									<script type="module" src="/@vite/client"></script>
									<script type="module">
										import RefreshRuntime from "/@react-refresh"
										RefreshRuntime.injectIntoGlobalHook(window)
										window.$RefreshReg$ = () => {}
										window.$RefreshSig$ = () => (type) => type
										window.__vite_plugin_react_preamble_installed__ = true
									</script>
									<script>
										window.global = window
									</script>
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
			const { file, server, read, modules } = ctx
			if (file === slash(configPath)) {
				const newData = await resolveSiteData(root)
				if (newData.base !== siteData.base) {
					console.warn(`[vitepress-rc]: config.base has changed. Please restart the dev server.`)
				}
				siteData = newData
				return [server.moduleGraph.getModuleById(SPECIAL_IMPORT_SITE_DATA)!]
			}

			// hot reload .md files
			if (file.endsWith('.md')) {
				const content = await read()
				const { pageData } = await mdxTransform(content, file, { root, alias })

				// notify the client to update page data
				server.ws.send({
					type: 'custom',
					event: 'vitepress:pageData',
					data: {
						path: `/${slash(path.relative(root, file))}`,
						pageData,
					},
				})

				return [...modules]
			}

			if (/\.(jsx|tsx|js|ts)$/.test(file)) {
				let idPaths = cacher.getHmrCache(file)
				for (const item of idPaths) {
					server.ws.send({
						type: 'update',
						updates: [
							{
								type: `js-update`,
								timestamp: Date.now(),
								path: `/${slash(path.relative(root, item))}`,
								acceptedPath: `/${slash(path.relative(root, item))}`,
							},
						],
					})
				}
			}
		},
	}

	return [reactRefreshPlugin, vitePluginPressRc]
}
