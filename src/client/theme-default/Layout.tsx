import React, { useContext, useState } from 'react'
import { Context } from 'vitepress-rc'
import { Wrap, GlobalStyle } from './style'
import Navbar from './components/Navbar'
// import SideMenu from './components/SideMenu'

export default function Layout() {
	const [menuCollapsed, setMenuCollapsed] = useState(true)

	const { path, component: Comp, data } = useContext(Context)

	return (
		<Wrap
			onClick={() => {
				if (menuCollapsed) return
				setMenuCollapsed(true)
			}}
		>
			<GlobalStyle />
			<Navbar
				onMobileMenuClick={(ev) => {
					setMenuCollapsed((val) => !val)
					ev.stopPropagation()
				}}
			/>
			{/* <SideMenu mobileMenuCollapsed={menuCollapsed} /> */}

			{Comp ? <Comp /> : null}
		</Wrap>
	)
}
