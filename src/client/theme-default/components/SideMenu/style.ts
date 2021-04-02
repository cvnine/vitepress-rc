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
					padding: 10px 36px;

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
			> li,
			> li > a {
				ul {
					padding-left: 10px;

					a {
						font-size: 90%;
					}
				}
			}
		}

		.list {
			margin-bottom: 40px;
			margin-right: 10px;

			> li > p {
				font-size: 18px;
				font-weight: 600;
				padding: 20px 24px 10px;
			}

			> li > a {
				position: relative;
				padding-left: 36px;
				font-size: 15px;
				padding: 10px 36px;

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

				@media (max-width: 767px) {
					padding-left: 32px;
				}
			}

			> li > ul {
				> li > p,
				> li > a {
					padding-left: 50px;
				}
				> li > ul {
					> li > p,
					> li > a {
						padding-left: 64px;
					}
					> li > ul {
						> li > p,
						> li > a {
							margin-left: 78px;
						}
						> li > ul {
							> li > p,
							> li > a {
								margin-left: 92px;
							}
						}
					}
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
