import React, { useContext, useState } from 'react'
import { Context, Content } from 'vitepress-rc'
import { Wrap, GlobalStyle, WrapMain } from './style'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'
import { useSideBar } from './hooks/useSideBar'

export default function Layout() {
	const [menuCollapsed, setMenuCollapsed] = useState(true)

	const { component: Comp } = useContext(Context)

	const sideBarItems = useSideBar()

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
			<SideMenu mobileMenuCollapsed={menuCollapsed} sideBarItems={sideBarItems} />

			<WrapMain hiddenMenus={sideBarItems.length === 0}>
				<Content>{Comp ? <Comp /> : null}</Content>
			</WrapMain>
		</Wrap>
	)
}
