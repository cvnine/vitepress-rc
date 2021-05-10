import React, { useState } from 'react'
import { DropDownWrap } from './style'
import { DefaultTheme } from '@vitepress-rc/types'
import { NavLink } from '../Link'

interface DropDownProps {
	nav: DefaultTheme.NavItemWithChildren
}

export default function DropDown({ nav }: DropDownProps) {
	const [isShow, setIsShow] = useState<boolean>(false)
	return (
		<DropDownWrap>
			<button onClick={() => setIsShow((val) => !val)}>
				<span>{nav.text}</span>
				<span className={`right-arrow ${isShow ? 'down' : ''}`}></span>
			</button>

			<ul>
				{nav.items.map((item) => {
					if ('items' in item) {
						return <></>
					} else {
						return (
							<li key={item.text}>
								<NavLink nav={item} />
							</li>
						)
					}
				})}
			</ul>
		</DropDownWrap>
	)
}
