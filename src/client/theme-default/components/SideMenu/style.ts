import styled from 'styled-components'

interface WrapProps {
	hiddenMenus: boolean
	mobileMenuCollapsed: boolean
}

export const Wrap = styled.div<WrapProps>`
	position: fixed;
	z-index: 100;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	transition: left 0.3s;
	${(props) =>
		props.hiddenMenus &&
		`
			display: none;
		`}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: block;
		width: 1px;
		background: var(--doc-border);
		pointer-events: none;
	}

	.menu-content {
		width: 100%;
		height: 100%;
		padding-top: 32px;
		overflow: auto;
		overscroll-behavior: contain;

		ul {
			list-style: none;
			margin: 0;
			padding: 0;

			li {
				color: var(--doc-text);
				a {
					position: relative;
					display: block;
					color: var(--doc-heading);
					text-decoration: none;
					outline: none;
					transition: color 0.3s, background 0.3s;

					&:hover,
					&.active {
						color: var(--doc-primary);
					}
				}
			}
		}

		.mobile-area {
			display: none;
			padding-bottom: 16px;
			margin-bottom: 16px;
			text-align: center;
			border-bottom: 1px solid var(--doc-border);

			@media (max-width: 767px) {
				display: block;
			}
		}

		.nav-list {
			margin-right: 10px;
			> li {
				line-height: 2;
			}
		}

		ul.list {
			margin-bottom: 40px;
			margin-right: 10px;

			li:not(.slug-li) > a {
				&::after {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					display: block;
					width: 3px;
					background-color: var(--doc-primary);
					visibility: hidden;
					opacity: 0;
					transition: all 0.3s;
					border-radius: 1px;
				}

				&.active {
					z-index: 1;
					background: linear-gradient(to right, #f8faff, rgba(248, 250, 255, 0));
					&::after {
						opacity: 1;
						visibility: visible;
					}
				}
			}

			li[data-sidebar-level='1'] {
				font-size: 18px;
				line-height: 2.8;
				> a,
				> p {
					padding-left: 20px;
				}
				> .side {
					padding-left: 36px;
				}
			}

			li[data-sidebar-level='2'] {
				font-size: 16px;
				line-height: 2;
				> a,
				> p {
					padding-left: 36px;
				}
				+ li[data-sidebar-level='1'] {
					margin-top: 10px;
				}

				> .side {
					padding-left: 52px;
				}
			}

			li[data-sidebar-level='3'] {
				font-size: 16px;
				line-height: 2;
				> a,
				> p {
					padding-left: 52px;
				}

				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 68px;
				}
			}

			li[data-sidebar-level='4'] {
				font-size: 15px;
				line-height: 2;
				> a,
				> p {
					padding-left: 68px;
				}

				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'],
				+ li[data-sidebar-level='3'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 84px;
				}
			}

			li[data-sidebar-level='5'] {
				font-size: 15px;
				line-height: 2;
				> a,
				> p {
					padding-left: 84px;
				}

				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'],
				+ li[data-sidebar-level='3'],
				+ li[data-sidebar-level='4'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 100px;
				}
			}

			li[data-sidebar-level='6'] {
				font-size: 15px;
				line-height: 2;
				> a,
				> p {
					padding-left: 100px;
				}
				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'],
				+ li[data-sidebar-level='3'],
				+ li[data-sidebar-level='4'],
				+ li[data-sidebar-level='5'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 116px;
				}
			}

			.side {
				> li > p {
					line-height: 1.4;
					font-weight: 600;
					padding-top: 5px;
					padding-bottom: 5px;
				}
				> li > a {
					line-height: 1.4;
					padding-top: 5px;
					padding-bottom: 5px;
				}
			}
		}
	}

	@media (max-width: 767px) {
		left: -var(--doc-menu-mobile-width);
		top: var(--doc-mobile-nav-height);
		display: block !important;
		width: var(--doc-menu-mobile-width);
		background-color: #fff;

		${(props) => props.mobileMenuCollapsed && `left: 0;`}
	}

	@media only screen and (min-width: 768px) {
		top: var(--doc-nav-height);
		width: var(--doc-site-menu-width);
		background: transparent;
	}
`
