import React from 'react'
import { Wrap } from './style'
import { useSideData, joinPath } from 'vitepress-rc'
import { NavLink } from '../Link'
import { DefaultTheme } from '@types'
import SlugMenu from '../SlugMenu'
import type { FlatSidebar } from '../../hooks/useSidebar'

export default function SideMenu(props: { mobileMenuCollapsed: boolean; sideBarItems: FlatSidebar[] }) {
	const sideData = useSideData()

	return (
		<Wrap hiddenMenus={props.sideBarItems.length === 0} mobileMenuCollapsed={!props.mobileMenuCollapsed}>
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
					{props.sideBarItems.map((item) => {
						const link = resolveLink(sideData.base, item.link)
						return (
							<li key={item.text} data-sidebar-level={item.level}>
								{link ? (
									<a href={link} className={`${item.isActive ? 'active' : ''}`}>
										{item.text}
									</a>
								) : (
									<p>{item.text}</p>
								)}
								{item.children && item.children.length > 0 && (
									<SlugMenu className="side" slugs={item.children} />
								)}
							</li>
						)
					})}
				</ul>
			</div>
		</Wrap>
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
