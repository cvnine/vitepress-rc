import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

export function Link(props: NavLinkProps) {
	const { to, ...res } = props
	return (
		<NavLink
			to={props.to}
			{...res}
			onClick={(e) => {
				window.scrollTo({ top: 0 })
				props.onClick?.(e)
			}}
		/>
	)
}
