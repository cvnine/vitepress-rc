import { DefaultTheme } from '@types'
import React, { FC } from 'react'
import { OutboundLink } from '../Icons/OutboundLink'
import { useNavLink } from '../../hooks/useNavLink'

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
