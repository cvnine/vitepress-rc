import React, { useContext, useState } from 'react'
import { Context } from 'vitepress-rc'
// import { Wrap } from './style'
// import Navbar from './components/Navbar'
// import SideMenu from './components/SideMenu'

export default function Layout() {
	const [menuCollapsed, setMenuCollapsed] = useState(true)

	const { path, component: Comp, data } = useContext(Context)

	return (
		<div
			onClick={() => {
				if (menuCollapsed) return
				setMenuCollapsed(true)
			}}
		>
			{/* <Navbar
				title={'组件库'}
				onMobileMenuClick={(ev) => {
					setMenuCollapsed((val) => !val)
					ev.stopPropagation()
				}}
			/>
			<SideMenu mobileMenuCollapsed={menuCollapsed} /> */}

			{Comp ? <Comp /> : null}
		</div>
	)
}
