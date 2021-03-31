import { DefaultTheme, Header } from '@types'
import React, { useContext } from 'react'
import { useSideData, Context } from 'vitepress-rc'
import { useActiveSidebarLinks } from './useActiveSidebarLinks'

export function useSideBar() {
	const route = useContext(Context)
	const sideData = useSideData()

	// useActiveSidebarLinks()

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
	const themeSidebar = getSideBarConfig(sideData.themeConfig.sidebar || false, route.data.relativePath)

	if (themeSidebar === false) {
		return []
	}

	if (themeSidebar === 'auto') {
		return resolveAutoSidebar(headers, sidebarDepth)
	}

	return themeSidebar
}

function resolveAutoSidebar(headers: Header[], depth: number): DefaultTheme.SideBarItem[] {
	const ret: DefaultTheme.SideBarItem[] = []

	if (headers === undefined) {
		return []
	}

	let lastH2: DefaultTheme.SideBarItem | undefined = undefined
	headers.forEach(({ level, title, slug }) => {
		if (level - 1 > depth) {
			return
		}

		const item: DefaultTheme.SideBarItem = {
			text: title,
			link: `#${slug}`,
		}
		if (level === 2) {
			lastH2 = item
			ret.push(item)
		} else if (lastH2) {
			;((lastH2 as any).children || ((lastH2 as any).children = [])).push(item)
		}
	})

	return ret
}

/**
 * Get the `SideBarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return `auto` as a fallback.
 */
export function getSideBarConfig(
	sidebar: DefaultTheme.SideBarConfig | DefaultTheme.MultiSideBarConfig,
	path: string
): DefaultTheme.SideBarConfig {
	if (isSideBarConfig(sidebar)) {
		return sidebar
	}

	path = ensureStartingSlash(path)

	for (const dir in sidebar) {
		// make sure the multi sidebar key starts with slash too
		if (path.startsWith(ensureStartingSlash(dir))) {
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

export function isSideBarEmpty(sidebar?: DefaultTheme.SideBarConfig): boolean {
	return Array.isArray(sidebar) ? sidebar.length === 0 : !sidebar
}

export function ensureStartingSlash(path: string): string {
	return /^\//.test(path) ? path : `/${path}`
}

export function removeExtention(path: string): string {
	return path.replace(/(index)?(\.(md|html))?$/, '') || '/'
}
