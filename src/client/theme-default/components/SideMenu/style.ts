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
		overflow: auto;
		overscroll-behavior: contain;

		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			font-size: 16px;

			li {
				color: var(--doc-text);
				a {
					position: relative;
					display: block;
					padding-right: 24px;
					color: var(--doc-heading);
					line-height: 2.4;
					text-decoration: none;
					outline: none;
					transition: color 0.3s, background 0.3s;

					span {
						display: block;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					&:hover,
					&.active {
						color: var(--doc-primary);
					}

					&::before {
						content: '';
						position: absolute;
						top: 50%;
						left: -10px;
						margin-top: -2.5px;
						display: inline-block;
						width: 5px;
						height: 5px;
						background-color: var(--doc-primary);
						border-radius: 50%;
						opacity: 0;
						transition: transform 0.2s, opacity 0.2s;
						transform: scale(0) translateX(-10px);
					}
				}

				&.active a,
				a.active {
					&::before {
						opacity: 1;
						transform: scale(1) translateX(0);
					}
				}

				ul {
					font-size: 0.9em;
					padding-left: 1em;
				}
			}
		}

		> ul {
			> li > a {
				line-height: 2.875;

				&:not([href]) {
					padding-top: 24px;
					line-height: 1;
					font-weight: 500;
					color: var(--doc-heading) !important;
					background: transparent !important;
					cursor: default;
				}
			}

			> li:first-child > a:not([href]) {
				padding-top: 0;
			}
		}

		> ul ul {
			a {
				color: var(--doc-secondary);

				&.active {
					color: var(--doc-primary);
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
			padding: 16px 0;

			> li,
			> li > a {
				padding-right: 0;
				line-height: 2.4;

				ul {
					padding-left: 0;

					a {
						padding-right: 0;
						font-size: 90%;
					}
				}
			}
		}

		.list {
			padding: 0;
			margin-bottom: 40px;

			> li > a {
				position: relative;

				&::after {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
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
					background: linear-gradient(to left, #f8faff, rgba(248, 250, 255, 0));
					&::after {
						opacity: 1;
						visibility: visible;
					}
				}

				~ ul {
					margin-top: 8px;
					margin-left: 28px;
				}

				@media (max-width: 767px) {
					padding-left: 16px;

					~ ul {
						margin-left: 16px;
					}
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
		padding-top: 50px;
		background: transparent;

		.list > li > a {
			padding-left: 58px;

			~ ul {
				margin-left: 58px;
			}
		}
	}
`
