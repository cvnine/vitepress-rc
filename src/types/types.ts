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

export interface SiteData<ThemeConfig = any> {
	lang: string
	base: string
	title: string
	description: string
	themeConfig: ThemeConfig
}

export interface SiteConfig<ThemeConfig = any> {
	root: string
	alias: AliasOptions
	configPath: string
	siteData: SiteData<ThemeConfig>
	themeDir: string
	outDir: string
	pages: string[]
	plugin?: MdxVitePluginOption
}

export interface PageData {
	title: string
	relativePath: string
	description: string
	headers: Header[]
	frontmatter: Record<string, any>
	lastUpdated: number
}

export interface Header {
	level: number
	title: string
	slug: string
}
