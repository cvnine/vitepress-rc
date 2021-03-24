import React, { useContext } from 'react'
import { Wrap } from './style'
import context from '@/context'
import { Link } from '../Link'
import SlugMenu from '../SlugMenu'

export default function SideMenu(props: { mobileMenuCollapsed: boolean }) {
	const {
		config: {
			title,
			repository: { url: repoUrl },
		},
		menu,
		nav: navItems,
		base,
		meta,
	} = useContext(context)

	const isHiddenMenus = meta.sidemenu === false

	return (
		<Wrap hiddenMenus={isHiddenMenus} mobileMenuCollapsed={!props.mobileMenuCollapsed}>
			<div className="menu-content">
				{navItems.length > 0 && (
					<div className="mobile-area">
						<ul className="nav-list">
							{navItems.map((nav) => (
								<li key={nav.path || nav.title}>
									{nav.path ? <Link to={nav.path}>{nav.title}</Link> : nav.title}
								</li>
							))}
						</ul>
					</div>
				)}

				<ul className="list">
					{!isHiddenMenus &&
						menu.map((item) => {
							// always use meta from routes to reduce menu data size
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
