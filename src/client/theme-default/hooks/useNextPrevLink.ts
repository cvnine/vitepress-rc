import { useContext } from 'react'
import { Context, useSideData } from 'vitepress-rc'
import { getSideBarConfig, getFlatSideBarLinks, removeExtention, ensureStartingSlash } from '../utils'
import type { DefaultTheme } from '@vitepress-rc/types'

export function useNextPrevLink() {
	const { themeConfig } = useSideData()
	const route = useContext(Context)

	const path = removeExtention(ensureStartingSlash(route.data.relativePath))
	const config = getSideBarConfig(themeConfig.sidebar || 'auto', path)

	const candidates = Array.isArray(config) ? getFlatSideBarLinks(config) : []

	const index = candidates.findIndex((item) => {
		return item.link === path
	})

	let next: null | DefaultTheme.SideBarLink = null
	if (themeConfig.nextLink !== false && index > -1 && index < candidates.length - 1) {
		next = candidates[index + 1]
	}

	let prev: null | DefaultTheme.SideBarLink = null
	if (themeConfig.prevLink !== false && index > 0) {
		prev = candidates[index - 1]
	}

	return {
		next,
		prev,
		hasLinks: !!next || !!prev,
	}
}
