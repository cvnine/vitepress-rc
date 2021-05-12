import React, { useState } from 'react'
import styled from 'styled-components'
import { DefaultTheme } from '@vitepress-rc/types'
import { NavLink } from './NavLink'

const DropDownLinkWrap = styled.div`
	position: relative;
	color: var(--doc-text);
	cursor: pointer;
	font-size: 14px;
	text-decoration: none;
	letter-spacing: 0;

	@media (min-width: 767px) {
		display: inline-block;
		margin-left: 40px;
		height: var(--doc-nav-height);
		line-height: var(--doc-nav-height);
	}

	> button {
		display: block;
		background: transparent;
		border: none;
		color: var(--doc-text);
		cursor: pointer;
		font-size: 14px;
		@media (min-width: 767px) {
			height: var(--doc-nav-height);
			line-height: var(--doc-nav-height);
		}

		@media (max-width: 767px) {
			height: 32px;
			line-height: 32px;
			font-size: 15px;
			width: 100%;
			text-align: left;
		}
		.right-arrow {
			display: inline-block;
			margin-left: 8px;
			border-top: 6px solid #ccc;
			border-right: 4px solid transparent;
			border-bottom: 0;
			border-left: 4px solid transparent;
			vertical-align: middle;
			@media (max-width: 767px) {
				&.right {
					transform: rotate(-90deg);
				}
				&.down {
					transform: rotate(0deg);
				}
			}
		}
	}

	ul {
		display: none;
		list-style: none;
		position: absolute;
		top: calc(100% - 12px);
		right: -8px;
		border-radius: 6px;
		padding: 12px 0;
		min-width: 128px;
		background-color: #fff;
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);

		li {
			line-height: 32px;
			padding: 0 24px 0 12px;
			span.nav-arrow {
				display: inline-block;
				margin-top: 1px;
				margin-right: 6px;
				border-top: 5px solid #ccc;
				border-right: 3px solid transparent;
				border-bottom: 0;
				border-left: 3px solid transparent;
				vertical-align: middle;
				opacity: 0;
				transform: translateY(-2px) rotate(-90deg);
				&.active {
					opacity: 1;
					border-top: 5px solid var(--doc-primary);
				}
			}
			a {
				color: #4d5164;
				display: inline-block;
				width: 100%;
				&:hover,
				&.active {
					color: var(--doc-primary);
				}
			}
		}

		&.ul-show {
			@media (max-width: 767px) {
				display: block;
				position: relative;
				right: 0;
				min-width: auto;
				background-color: none;
				box-shadow: none;

				li {
					padding: 0 0 0 2px;
				}
			}
		}
	}

	&:hover {
		@media (min-width: 767px) {
			ul {
				display: block;
			}
		}
	}
`

interface DropDownLinkProps {
	nav: DefaultTheme.NavItemWithChildren
}

export function DropDownLink({ nav }: DropDownLinkProps) {
	const [mobileArrowDirection, setMobileArrowDirection] = useState<boolean>(false)
	return (
		<DropDownLinkWrap>
			<button
				onClick={(e) => {
					e.stopPropagation()
					setMobileArrowDirection((val) => !val)
				}}
			>
				<span>{nav.text}</span>
				<span className={`right-arrow ${mobileArrowDirection ? 'down' : 'right'}`}></span>
			</button>

			<ul className={`${mobileArrowDirection ? 'ul-show' : ''}`}>
				{nav.items.map((item) => {
					if ('items' in item) {
						return <></>
					} else {
						return (
							<li key={item.text}>
								<NavLink nav={item}>
									{(isActive) => <span className={`nav-arrow ${isActive ? 'active' : ''}`}></span>}
								</NavLink>
							</li>
						)
					}
				})}
			</ul>
		</DropDownLinkWrap>
	)
}
