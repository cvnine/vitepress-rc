import React, { useState } from 'react'
import styled from 'styled-components'
import { DefaultTheme } from '@vitepress-rc/types'
import { NavLink } from './NavLink'

const DropDownLinkWrap = styled.div`
	position: relative;
	margin-left: 40px;
	display: inline-block;
	color: var(--doc-text);
	height: var(--doc-nav-height);
	cursor: pointer;
	font-size: 14px;
	line-height: var(--doc-nav-height);
	text-decoration: none;
	letter-spacing: 0;

	> button {
		display: block;
		background: transparent;
		border: none;
		color: var(--doc-text);
		height: var(--doc-nav-height);
		cursor: pointer;
		font-size: 14px;
		line-height: var(--doc-nav-height);
		.right-arrow {
			display: inline-block;
			margin-top: -1px;
			margin-left: 8px;
			border-top: 6px solid #ccc;
			border-right: 4px solid transparent;
			border-bottom: 0;
			border-left: 4px solid transparent;
			vertical-align: middle;
			@media (max-width: 767px) {
				&.down {
					transform: rotate(0);
				}
			}
		}
	}

	ul {
		display: none;
	}
`

interface DropDownLinkProps {
	nav: DefaultTheme.NavItemWithChildren
}

export function DropDownLink({ nav }: DropDownLinkProps) {
	const [mobileArrowDirection, setMobileArrowDirection] = useState<boolean>(false)
	return (
		<DropDownLinkWrap>
			<button onClick={() => setMobileArrowDirection((val) => !val)}>
				<span>{nav.text}</span>
				<span className={`right-arrow ${mobileArrowDirection ? 'down' : ''}`}></span>
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
		</DropDownLinkWrap>
	)
}
