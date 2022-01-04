import path from 'path'
import reactRefresh from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import { mdxTransform } from './transform'
import { APP_PATH, SPECIAL_IMPORT_CODE_SCOPE, SPECIAL_IMPORT_SITE_DATA } from './alias'
import { resolveSiteData } from './config'
import { slash } from './utils'
import { cacher } from './transform/utils/cache'
import type { Plugin as VitePlugin, ViteDevServer } from 'vite'
import type { SiteConfig } from '@vitepress-rc/types'
import type { OutputAsset, OutputChunk } from 'rollup'

const hashRE = /\.(\w+)\.js$/

const isPageChunk = (chunk: OutputAsset | OutputChunk): chunk is OutputChunk & { facadeModuleId: string } =>
	!!(chunk.type === 'chunk' && chunk.isEntry && chunk.facadeModuleId && chunk.facadeModuleId.endsWith('.md'))

export function createVitePlugin(
	root: string,
	{ configPath, alias, md, siteData, pages }: SiteConfig,
	ssr = false,
	pageToHashMap?: Record<string, string>
) {
	const reactRefreshPlugin = reactRefresh()

	let _server: ViteDevServer
	const vitePluginPressRc: VitePlugin = {
		name: 'vitepress-rc',
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
			if (id === SPECIAL_IMPORT_CODE_SCOPE) {
				return SPECIAL_IMPORT_CODE_SCOPE
			}
		},
		async load(id) {
			if (id === SPECIAL_IMPORT_SITE_DATA) {
				return `export default ${JSON.stringify(JSON.stringify(siteData))}`
			}
			if (id === SPECIAL_IMPORT_CODE_SCOPE) {
				if (md && md.codeScope) {
					let str: string = ``,
						exportJsScope: string = ``,
						exportCssScope: string = ``
					Object.entries(md.codeScope).forEach(([key, val], index) => {
						str += `import * as codeScope_${index} from '${`/${slash(path.relative(root, val))}`}';\n`
						if (val.endsWith('.css')) {
							exportCssScope = exportCssScope
								? exportCssScope + `, ${JSON.stringify(key)}: codeScope_${index}`
								: `${JSON.stringify(key)}: codeScope_${index}`
						} else {
							exportJsScope = exportJsScope
								? exportJsScope + `, ${JSON.stringify(key)}: codeScope_${index}`
								: `${JSON.stringify(key)}: codeScope_${index}`
						}
					})

					return str + `export default {"js": {${exportJsScope}}, "css":{${exportCssScope}}}`
				}
				return `export default {"js":{},"css":{}}`
			}
		},
		async transform(code, id, ssr) {
			if (/\.css?$/.test(id)) {
				if (_server) {
					//todo 组件代码内引用css的，注入shadow dom
				}
			}

			if (/\.md?$/.test(id)) {
				let { code: _code } = await mdxTransform(code, id, { root, alias, siteData }, md)
				// const refreshResult = await reactRefreshPlugin.transform!.call(this, _code, id + '.js', ssr)
				// //reactRefreshPlugin会检测导出的都必须是react组件，增加了pageData的导出会导致热更新失败，这里hack掉
				// if (refreshResult && typeof refreshResult !== 'string') {
				// 	refreshResult.code = refreshResult.code!.replace(
				// 		'window.$RefreshSig$ = prevRefreshSig;',
				// 		['window.$RefreshSig$ = prevRefreshSig;', 'import.meta.hot.accept();'].join('\n')
				// 	)
				// }

				return _code
			}
		},

		configureServer(server) {
			// serve our index.html after vite history fallback
			return () => {
				_server = server
				server.middlewares.use((req, res, next) => {
					if (req.url!.endsWith('.html')) {
						res.statusCode = 200
						res.end(`
								<!DOCTYPE html>
								<html>
									<head>
									<meta charset="utf-8">
									<script type="module" src="${siteData.base}@vite/client"></script>
									<script type="module">
										import RefreshRuntime from "${siteData.base}@react-refresh"
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

			if (file.endsWith('.css')) {
				//todo 组件代码内引用css的，注入shadow dom的热更新
			}
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
				const { pageData } = await mdxTransform(content, file, { root, alias, siteData }, md)

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
		generateBundle(_options, bundle) {
			if (ssr) {
				// ssr build:
				// delete all asset chunks
				for (const name in bundle) {
					if (bundle[name].type === 'asset') {
						delete bundle[name]
					}
				}
			} else {
				// client build:
				// for each .md entry chunk, adjust its name to its correct path.
				for (const name in bundle) {
					const chunk = bundle[name]
					if (isPageChunk(chunk)) {
						// record page -> hash relations
						const hash = chunk.fileName.match(hashRE)![1]
						pageToHashMap![chunk.name.toLowerCase()] = hash
					}
				}
			}
		},
	}

	return [reactRefreshPlugin, vitePluginPressRc, WindiCSS()]
}
