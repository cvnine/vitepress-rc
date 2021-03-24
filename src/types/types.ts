import type { Plugin as UnifiedPlugin } from 'unified'
import { AliasOptions } from 'vite'

export interface MdxVitePluginOption {
	remarkPlugins?: UnifiedPlugin[]
	rehypePlugins: UnifiedPlugin[]
}

export interface UserConfig<ThemeConfig = any> {
	lang?: string
	base?: string
	title?: string
	alias?: Record<string, string>
	description?: string
	themeConfig?: ThemeConfig
	plugin?: MdxVitePluginOption
}

export interface SiteConfig<ThemeConfig = any> {
	root: string
	alias: AliasOptions
	configPath: string
	site: {
		lang: string
		title: string
		description: string
		base: string
		themeConfig: ThemeConfig
	}
	themeDir: string
	outDir: string
	pages: string[]
	plugin?: MdxVitePluginOption
}
