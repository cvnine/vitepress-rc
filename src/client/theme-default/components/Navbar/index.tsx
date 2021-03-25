import React, { useContext } from 'react'
import { Wrap } from './style'
import { Link } from '../Link'
import { useSideData } from 'vitepress-rc'
import SearchBar from '../SearchBar'

interface NavbarProps {
	title: string
	onMobileMenuClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Navbar(props: NavbarProps) {
	const { base, title, themeConfig } = useSideData()

	return (
		<Wrap>
			<button className="toggle" onClick={props.onMobileMenuClick} />
			<Link to={base}>{title}</Link>
			<nav>
				<SearchBar />
				{themeConfig.nav.map((nav) => (
					<span key={nav.text || nav.link}>
						{nav.link ? <Link to={nav.link}>{nav.text}</Link> : nav.text}
					</span>
				))}
			</nav>
		</Wrap>
	)
}
