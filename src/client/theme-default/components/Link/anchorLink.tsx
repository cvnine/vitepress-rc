import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

function getElmScrollPosition(elm: HTMLElement): number {
	return elm.offsetTop + (elm.offsetParent ? getElmScrollPosition(elm.offsetParent as HTMLElement) : 0)
}

export function AnchorLink(props: NavLinkProps) {
	const { to, ...res } = props
	const hash = (to as string).match(/(#.+)$/)?.[1] || ''

	return (
		<NavLink
			to={props.to}
			{...res}
			onClick={(e) => {
				AnchorLink.scrollToAnchor(hash.substring(1))
				props.onClick?.(e)
			}}
			isActive={(_, location) => !!(hash && decodeURIComponent(location.hash) === hash)}
		/>
	)
}

AnchorLink.scrollToAnchor = (anchor: string) => {
	// wait for dom update
	window.requestAnimationFrame(() => {
		const elm = document.getElementById(decodeURIComponent(anchor))

		if (elm) {
			// compatible in Edge
			window.scrollTo(0, getElmScrollPosition(elm) - 100)
		}
	})
}
