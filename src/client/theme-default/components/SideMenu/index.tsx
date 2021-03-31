import React, { FC, useContext } from 'react'
import { Wrap } from './style'
import { useSideData, Context, joinPath } from 'vitepress-rc'
import { NavLink } from '../Link'
import { DefaultTheme } from '@types'
import { useSideBar } from '../../hooks/useSidebar'
import SlugMenu from '../SlugMenu'

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
							const hasSlugs = Boolean(meta.slugs?.length)
							const hasChildren = item.children && item.children.length > 0
							const show1LevelSlugs =
								meta.toc === 'menu' &&
								!hasChildren &&
								hasSlugs &&
								item.path === window.location.pathname.replace(/([^^])\/$/, '$1')

							return (
								<li key={item.path || item.title}>
									<Link to={item.path} exact={!hasChildren}>
										{item.title}
									</Link>
									{item.children && item.children.length > 0 && (
										<ul>
											{item.children.map((child) => (
												<li key={child.path}>
													<Link to={child.path} exact>
														<span>{child.title}</span>
													</Link>
													{Boolean(
														meta.toc === 'menu' &&
															child.path === window.location.pathname &&
															hasSlugs
													) && <SlugMenu slugs={meta.slugs} />}
												</li>
											))}
										</ul>
									)}
									{show1LevelSlugs && <SlugMenu slugs={meta.slugs} />}
								</li>
							)
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

	const headers = route.data.headers
	const link = resolveLink(sideData.base, item.link)
	const children = (item as DefaultTheme.SideBarGroup).children
	const active = isActive(route, item.link)
	const childItems = createChildren(active, children, headers)

	return (
		<li key={item.text}>
			{link ? <a href={link}></a> : <span>{item.text}</span>}
			{children && children.length > 0 && <ul></ul>}
		</li>
	)
}

const SideBarChildren = () => {}

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
