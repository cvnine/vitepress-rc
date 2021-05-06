import { joinPath } from 'vitepress-rc'
import type { DefaultTheme } from '@vitepress-rc/types'

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

export function resolveLink(base: string, path?: string): string | undefined {
	if (path === undefined) {
		return path
	}

	// keep relative hash to the same page
	if (path.startsWith('#')) {
		return path
	}

	return joinPath(base, path)
}
