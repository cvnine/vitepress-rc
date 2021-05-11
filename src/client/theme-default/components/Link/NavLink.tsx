import React, { FC } from 'react'
import { OutboundLink } from '../Icons'
import { useNavLink } from '../../hooks/useNavLink'
import type { DefaultTheme } from '@vitepress-rc/types'

interface BaseLinkProps {
	nav: DefaultTheme.NavItemWithLink
	children?: (value: boolean) => React.ReactNode
}

export const NavLink: FC<BaseLinkProps> = ({ nav, children }) => {
	const { aProps, isExternal, isActive } = useNavLink(nav)
	return (
		<a {...aProps}>
			{children && children(isActive)}
			{nav.text} {isExternal && <OutboundLink />}
		</a>
	)
}
