import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import remarkTable from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParseYaml from 'remark-parse-yaml'
import remarkSlug from 'remark-slug'
import slash from 'slash'
import { Plugin as VitePlugin } from 'vite'
import type { SiteConfig } from '../types'
import remarkTransform from './transform'
import { APP_PATH, SPECIAL_IMPORT_SITE_DATA, SPECIAL_IMPORT_THEME } from './paths'
import { resolveSiteData } from './config'

export function createVitePlugin(
	root: string,
	{ configPath, plugin, site, pages, themeDir }: SiteConfig,
	ssr = false,
	pageToHashMap?: Record<string, string>
) {
	let siteData = site

	//预处理 mdx
	const vitePluginMdxParse: VitePlugin = {
		name: 'vite-plugin-mdx-parse',
		transform(code, id, ssr) {
			if (/\.mdx?$/.test(id)) {
				code = code + `<TEMP_MDX_ABSOLUTE_PATH path="${slash(id)}" />`
			}
			return code
		},
	}

	//编译 mdx --> js
	const vitePluginMdxTransForm: VitePlugin = mdx({
		remarkPlugins: [
			remarkFrontmatter,
			remarkParseYaml,
			remarkSlug,
			...remarkTransform,
			remarkTable,
			...(plugin?.remarkPlugins ?? []),
		],
		rehypePlugins: [...(plugin?.rehypePlugins ?? [])],
	})

	//其他处理
	const vitePluginPressRc: VitePlugin = {
		name: 'vite-plugin-press-rc',
		config() {
			return {
				resolve: {
					alias: {
						[SPECIAL_IMPORT_THEME]: themeDir,
					},
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

	return [reactRefresh(), vitePluginMdxParse, vitePluginMdxTransForm, vitePluginPressRc]
}
