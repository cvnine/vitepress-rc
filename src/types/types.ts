import type { Plugin as UnifiedPlugin } from 'unified'
import { AliasOptions } from 'vite'

export interface MdxVitePluginOption {
	remarkPlugins?: UnifiedPlugin[]
	rehypePlugins: UnifiedPlugin[]
}

export interface UserConfig<ThemeConfig = DefaultTheme.Config> {
	lang?: string
	base?: string
	title?: string
	alias?: Record<string, string>
	head?: HeadConfig[]
	description?: string
	themeConfig?: ThemeConfig
	plugin?: MdxVitePluginOption
}

export interface SiteData<ThemeConfig = DefaultTheme.Config> {
	lang: string
	base: string
	title: string
	head: HeadConfig[]
	description: string
	themeConfig: ThemeConfig
}

export interface SiteConfig<ThemeConfig = DefaultTheme.Config> {
	root: string
	alias: AliasOptions
	configPath: string
	siteData: SiteData<ThemeConfig>
	themeDir: string
	outDir: string
	pages: string[]
	plugin?: MdxVitePluginOption
}

export type HeadConfig = [string, Record<string, string>] | [string, Record<string, string>, string]

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

export namespace DefaultTheme {
	export interface Config {
		logo?: string
		nav?: NavItem[] | false
		sidebar?: SideBarConfig | MultiSideBarConfig
		search?: SearchConfig | false

		/**
		 * GitHub repository following the format <user>/<project>.
		 *
		 * @example `"vuejs/vue-next"`
		 */
		repo?: string

		/**
		 * Customize the header label. Defaults to GitHub/Gitlab/Bitbucket
		 * depending on the provided repo.
		 *
		 * @example `"Contribute!"`
		 */
		repoLabel?: string

		/**
		 * If your docs are in a different repository from your main project.
		 *
		 * @example `"vuejs/docs-next"`
		 */
		docsRepo?: string

		/**
		 * If your docs are not at the root of the repo.
		 *
		 * @example `"docs"`
		 */
		docsDir?: string

		/**
		 * If your docs are in a different branch. Defaults to `master`.
		 *
		 * @example `"next"`
		 */
		docsBranch?: string

		/**
		 * Enable links to edit pages at the bottom of the page.
		 */
		editLinks?: boolean

		/**
		 * Custom text for edit link. Defaults to "Edit this page".
		 */
		editLinkText?: string

		/**
		 * Show last updated time at the bottom of the page. Defaults to `false`.
		 * If given a string, it will be displayed as a prefix (default value:
		 * "Last Updated").
		 */
		lastUpdated?: string | boolean

		prevLink?: boolean
		nextLink?: boolean

		locales?: Record<string, LocaleConfig & Omit<Config, 'locales'>>
	}

	// navbar --------------------------------------------------------------------

	export type NavItem = NavItemWithLink | NavItemWithChildren

	export interface NavItemBase {
		text: string
		target?: string
		rel?: string
		ariaLabel?: string
	}

	export interface NavItemWithLink extends NavItemBase {
		link: string
		activeMatch?: string
	}

	export interface NavItemWithChildren extends NavItemBase {
		items: NavItem[]
	}

	// sidebar -------------------------------------------------------------------

	export type SideBarConfig = SideBarItem[] | 'auto' | false

	export interface MultiSideBarConfig {
		[path: string]: SideBarConfig
	}

	export type SideBarItem = SideBarLink | SideBarGroup

	export interface SideBarLink {
		text: string
		link: string
	}

	export interface SideBarGroup {
		text: string
		link?: string

		/**
		 * @default false
		 */
		collapsable?: boolean

		children: SideBarItem[]
	}

	// search --------------------------------------------------------------------

	export interface SearchConfig {
		/**
		 * @default 5
		 */
		maxSuggestions?: number

		/**
		 * @default ''
		 */
		placeholder?: string

		algolia?: {
			apiKey: string
			indexName: string
		}
	}

	// locales --------------------------------------------------------------------

	export interface LocaleConfig {
		/**
		 * Text for the language dropdown.
		 */
		selectText?: string

		/**
		 * Label for this locale in the language dropdown.
		 */
		label?: string
	}
}
