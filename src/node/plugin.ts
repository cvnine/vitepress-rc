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

function vitePluginMdxParse(): VitePlugin {
	return {
		name: 'vite-plugin-mdx-parse',
		transform(code, id, ssr) {
			if (/\.mdx?$/.test(id)) {
				code = code + `<TEMP_MDX_ABSOLUTE_PATH path="${slash(id)}" />`
			}
			return code
		},
	}
}

export function createVitePlugin(
	root: string,
	{ configPath, plugin, site, pages }: SiteConfig,
	ssr = false,
	pageToHashMap?: Record<string, string>
) {
	return [
		reactRefresh(),
		vitePluginMdxParse(),
		...(plugin?.preMdxPlugins ?? []),
		mdx({
			remarkPlugins: [
				remarkFrontmatter,
				remarkParseYaml,
				remarkSlug,
				...remarkTransform,
				remarkTable,
				...(plugin?.remarkPlugins ?? []),
			],
			rehypePlugins: [...(plugin?.rehypePlugins ?? [])],
		}),
		...(plugin?.afterMdxPlugins ?? []),
	]
}
