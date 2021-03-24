import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Wrap } from './style'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

export default function Layout() {
	const [menuCollapsed, setMenuCollapsed] = useState(true)
	return (
		<Router>
			<Wrap
				onClick={() => {
					if (menuCollapsed) return
					setMenuCollapsed(true)
				}}
			>
				<Navbar
					title={'组件库'}
					onMobileMenuClick={(ev) => {
						setMenuCollapsed((val) => !val)
						ev.stopPropagation()
					}}
				/>
				<SideMenu mobileMenuCollapsed={menuCollapsed} />
			</Wrap>
		</Router>
	)
}
