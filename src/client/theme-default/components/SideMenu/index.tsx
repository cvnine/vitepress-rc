import React, { FC, useContext } from 'react'
import { Wrap } from './style'
import { useSideData, Context, joinPath } from 'vitepress-rc'
import { NavLink } from '../Link'
import { DefaultTheme, Route } from '@types'
import { useSideBar } from '../../hooks/useSidebar'
// import SlugMenu from '../SlugMenu'

export default function SideMenu(props: { mobileMenuCollapsed: boolean }) {
	const sideData = useSideData()
	const sideBarItems = useSideBar()

	// const isHiddenMenus = meta.sidemenu === false
	const isHiddenMenus = false

	return (
		<Wrap hiddenMenus={isHiddenMenus} mobileMenuCollapsed={!props.mobileMenuCollapsed}>
			<div className="menu-content">
				{sideData.themeConfig.nav && (
					<div className="mobile-area">
						<ul className="nav-list">
							{sideData.themeConfig.nav.map((nav: DefaultTheme.NavItem) => {
								if ('items' in nav) {
									return <></>
								} else {
									return (
										<li key={nav.text}>
											<NavLink nav={nav} />
										</li>
									)
								}
							})}
						</ul>
					</div>
				)}

				<ul className="list">
					{!isHiddenMenus &&
						sideBarItems.map((item) => {
							return <SideBar item={item} key={item.text} />
						})}
				</ul>
			</div>
		</Wrap>
	)
}

const SideBar: FC<{
	item: DefaultTheme.SideBarItem
}> = ({ item }) => {
	const route = useContext(Context)
	const sideData = useSideData()

	const link = resolveLink(sideData.base, item.link)
	const children = (item as DefaultTheme.SideBarGroup).children
	const isActive = isActiveRoute(route, item.link)

	return (
		<li>
			{link ? (
				<a href={link} className={`${isActive ? 'active' : ''}`}>
					{item.text}
				</a>
			) : (
				<span>{item.text}</span>
			)}
			{children && children.length > 0 && (
				<ul>
					{children.map((child) => {
						return <SideBar item={child} key={child.text} />
					})}
				</ul>
			)}
		</li>
	)
}

function resolveLink(base: string, path?: string): string | undefined {
	if (path === undefined) {
		return path
	}

	// keep relative hash to the same page
	if (path.startsWith('#')) {
		return path
	}

	return joinPath(base, path)
}

export function normalize(path: string): string {
	const hashRE = /#.*$/
	const extRE = /(index)?\.(md|html)$/
	return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}

export function isActiveRoute(route: Route, path?: string): boolean {
	if (path === undefined) {
		return false
	}

	const routePath = normalize(`/${route.data.relativePath}`)
	const pagePath = normalize(path)

	return routePath === pagePath
}
