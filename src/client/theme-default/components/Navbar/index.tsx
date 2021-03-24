import React, { useContext } from 'react'
import { Wrap } from './style'
import { Link } from '../Link'
import { context } from 'vitepress-rc'
import SearchBar from '../SearchBar'

interface NavbarProps {
	title: string
	onMobileMenuClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Navbar(props: NavbarProps) {
	const {
		base,
		config: { title },
		nav: navItems,
	} = useContext(context)

	return (
		<Wrap>
			<button className="toggle" onClick={props.onMobileMenuClick} />
			<Link to={base}>{title}</Link>
			<nav>
				<SearchBar />
				{navItems.map((nav) => (
					<span key={nav.title || nav.path}>
						{nav.path ? <Link to={nav.path}>{nav.title}</Link> : nav.title}
					</span>
				))}
			</nav>
		</Wrap>
	)
}
