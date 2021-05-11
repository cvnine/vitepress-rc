import { useContext } from 'react'
import { Context, useSideData, joinPath } from 'vitepress-rc'
import type { DefaultTheme } from '@vitepress-rc/types'

function normalizePath(path: string): string {
	return path
		.replace(/#.*$/, '')
		.replace(/\?.*$/, '')
		.replace(/\.(html|md)$/, '')
		.replace(/\/index$/, '/')
}

export function useNavLink(nav: DefaultTheme.NavItemWithLink) {
	const route = useContext(Context)
	const sideData = useSideData()

	const isExternal = /^[a-z]+:/i.test(nav.link)

	const routePath = normalizePath(`/${route.data.relativePath}`)

	let isActive = false
	if (nav.activeMatch) {
		isActive = new RegExp(nav.activeMatch).test(routePath)
	} else {
		const itemPath = normalizePath(joinPath(sideData.base, nav.link))
		isActive = itemPath === '/' ? itemPath === routePath : routePath.startsWith(itemPath)
	}

	return {
		aProps: {
			className: `${isActive ? 'active' : ''}`,
			href: isExternal ? nav.link : joinPath(sideData.base, nav.link),
			target: nav.target || isExternal ? `_blank` : undefined,
			rel: nav.rel || isExternal ? `noopener noreferrer` : undefined,
			'aria-label': nav.ariaLabel,
		},
		isActive,
		isExternal,
	}
}
