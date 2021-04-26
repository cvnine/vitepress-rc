import { DefaultTheme, Header, Route } from '@types'
import React, { useContext } from 'react'
import { useSideData, Context } from 'vitepress-rc'

export type FlatSidebar = {
	text: string
	link?: string
	level?: number
	isActive: boolean
	children?: FlatSidebar[]
}

function resolveAutoSidebar(headers: Header[], depth: number): FlatSidebar[] {
	if (headers === undefined) {
		return []
	}

	let ret: FlatSidebar[] = headers
		.filter((x) => x.level - 1 > ~~depth && x.level > 1)
		.map((x) => ({
			text: x.title,
			link: `#${x.slug}`,
			level: x.level,
			isActive: false,
		}))

	return ret
}

function getSideMenu(sidebar: DefaultTheme.SideBarItem[], relativePath: string, headering: FlatSidebar[]) {
	let stack: (DefaultTheme.SideBarItem & { _level?: number })[] = [...sidebar]

	let result = []
	while (stack.length !== 0) {
		const item = stack.shift()!

		let menuItem: FlatSidebar = {
			text: item.text,
			link: item.link,
			level: item._level ? item._level : 1,
			isActive: false,
		}

		if (isActiveRoute(relativePath, item.link)) {
			menuItem.isActive = true
			menuItem.children = headering
		}

		result.push(menuItem)

		const children = (item as DefaultTheme.SideBarGroup).children

		if (children) {
			for (let i = children.length - 1; i >= 0; i--) {
				stack.unshift({ ...children[i], _level: item._level ? item._level + 1 : 2 })
			}
		}
	}

	return result
}

export function useSideBar() {
	const route = useContext(Context)
	const sideData = useSideData()

	// at first, we'll check if we can find the sidebar setting in frontmatter.
	const headers = route.data.headers
	const frontSidebar = route.data.frontmatter.sidebar
	const sidebarDepth = route.data.frontmatter.sidebarDepth

	// if it's `false`, we'll just return an empty array here.
	if (frontSidebar === false) {
		return []
	}

	// if it's `atuo`, render headers of the current page
	if (frontSidebar === 'auto') {
		return resolveAutoSidebar(headers, sidebarDepth)
	}

	// now, there's no sidebar setting at frontmatter; let's see the configs
	const themeSidebar = getSideBarConfig(sideData.themeConfig.sidebar || 'auto', route.data.relativePath)

	if (themeSidebar === false) {
		return []
	}

	if (themeSidebar === 'auto') {
		return resolveAutoSidebar(headers, sidebarDepth)
	}

	return getSideMenu(themeSidebar, route.data.relativePath, resolveAutoSidebar(headers, sidebarDepth))
}

/**
 * Get the `SideBarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return `auto` as a fallback.
 */
export function getSideBarConfig(
	sidebar: DefaultTheme.SideBarConfig | DefaultTheme.MultiSideBarConfig,
	relativePath: string
): DefaultTheme.SideBarConfig {
	if (isSideBarConfig(sidebar)) {
		return sidebar
	}

	relativePath = ensureStartingSlash(relativePath)

	for (const dir in sidebar) {
		// make sure the multi sidebar key starts with slash too
		if (relativePath.startsWith(ensureStartingSlash(dir))) {
			return sidebar[dir]
		}
	}

	return 'auto'
}

/**
 * Get flat sidebar links from the sidebar items. This method is useful for
 * creating the "next and prev link" feature. It will ignore any items that
 * don't have `link` property and removes `.md` or `.html` extension if a
 * link contains it.
 */
export function getFlatSideBarLinks(sidebar: DefaultTheme.SideBarItem[]): DefaultTheme.SideBarLink[] {
	return sidebar.reduce<DefaultTheme.SideBarLink[]>((links, item) => {
		if (item.link) {
			links.push({ text: item.text, link: removeExtention(item.link) })
		}

		if (isSideBarGroup(item)) {
			links = [...links, ...getFlatSideBarLinks(item.children)]
		}

		return links
	}, [])
}

export function isSideBarConfig(
	sidebar: DefaultTheme.SideBarConfig | DefaultTheme.MultiSideBarConfig
): sidebar is DefaultTheme.SideBarConfig {
	return sidebar === false || sidebar === 'auto' || Array.isArray(sidebar)
}

export function isSideBarGroup(item: DefaultTheme.SideBarItem): item is DefaultTheme.SideBarGroup {
	return (item as DefaultTheme.SideBarGroup).children !== undefined
}

export function ensureStartingSlash(path: string): string {
	return /^\//.test(path) ? path : `/${path}`
}

export function removeExtention(path: string): string {
	return path.replace(/(index)?(\.(md|html))?$/, '') || '/'
}

export function normalize(path: string): string {
	const hashRE = /#.*$/
	const extRE = /(index)?\.(md|html)$/
	return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}

export function isActiveRoute(relativePath: string, path?: string): boolean {
	if (path === undefined) {
		return false
	}

	const routePath = normalize(`/${relativePath}`)
	const pagePath = normalize(path)

	return routePath === pagePath
}
