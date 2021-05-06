import React, { FC } from 'react'
import { OutboundLink } from '../Icons'
import { useNavLink } from '../../hooks/useNavLink'
import type { DefaultTheme } from '@vitepress-rc/types'

interface BaseLinkProps {
	nav: DefaultTheme.NavItemWithLink
}

export const NavLink: FC<BaseLinkProps> = ({ nav }) => {
	const { aProps, isExternal } = useNavLink(nav)
	return (
		<a {...aProps}>
			{nav.text} {isExternal && <OutboundLink />}
		</a>
	)
}
