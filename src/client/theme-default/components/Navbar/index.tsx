import React from 'react'
import { Wrap } from './style'
import { NavLink, BaseLink, DropDownLink } from '../Link'
import { useSideData } from 'vitepress-rc'
// import SearchBar from '../SearchBar'
import type { DefaultTheme } from '@vitepress-rc/types'

interface NavbarProps {
	onMobileMenuClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Navbar(props: NavbarProps) {
	const sideData = useSideData()

	return (
		<Wrap>
			<button className="toggle" onClick={props.onMobileMenuClick} />
			<BaseLink to={sideData.base}>{sideData.title}</BaseLink>
			<nav>
				{/* <SearchBar /> */}
				{sideData.themeConfig.nav &&
					sideData.themeConfig.nav.map((nav: DefaultTheme.NavItem) => {
						if ('items' in nav) {
							return <DropDownLink key={nav.text} nav={nav} />
						} else {
							return (
								<span key={nav.text}>
									<NavLink nav={nav} />
								</span>
							)
						}
					})}
			</nav>
		</Wrap>
	)
}
