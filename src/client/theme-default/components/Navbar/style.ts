import styled from 'styled-components'

export const Wrap = styled.div`
	position: fixed;
	z-index: 101;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 35px;
	height: var(--doc-nav-height);
	white-space: nowrap;
	background: #fff;
	box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);

	@media (max-width: 767px) {
		display: flex;
		justify-content: center;
		height: var(--doc-mobile-nav-height);
	}

	.toggle {
		position: absolute;
		top: 14px;
		left: 16px;
		display: none;
		width: 22px;
		height: 22px;
		border: 0;
		outline: none;
		background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAA4CAYAAAB5YT9uAAAAAXNSR0IArs4c6QAAASVJREFUeAHt3DuOwjAUBVAHscWZjaSkAIqU2QjskV80QwpsF3ArdGiw3hW3OGnQM2Iof6/dfr7+n71/LjAdx+HRsvm8SkNPAHBPJ5ABDiD2KgD3dAIZ4ABirwJwTyeQAQ4g9ioA93QC2fbZsSm/z7MDAQIECBAgQIAAAQIECBAgQIAAAQKvAsvV8mO8O8yn19jkXYHpMC7byXVdeS0/75b5XFvAwr1tE0kARxjbJYDbNpEEcISxXQK4bRNJAEcY2yWA2zaRZP0ePJRzpFEJAQIECBAgQIAAAQIECBAgQIAAgW8VWK/tj7Nb5eBTnvbjsp1c15WX4ncRQeB7lb8zyHrW29xo1F1iU8AxynoR4LpLbAo4RlkvAlx3iU0BxyjrRYDrLrHpDVSAEEPXScHTAAAAAElFTkSuQmCC')
			no-repeat center / contain;

		@media (max-width: 767px) {
			display: block;
		}
	}

	> a {
		color: #080e29;
	}

	nav {
		> span {
			position: relative;
			margin-left: 34px;
			display: inline-block;
			color: var(--doc-text);
			height: var(--doc-nav-height);
			cursor: pointer;
			font-size: 14px;
			line-height: var(--doc-nav-height);
			text-decoration: none;
			letter-spacing: 0;

			> a {
				color: #4d5164;

				&:hover,
				&.active {
					color: var(--doc-primary);
				}

				&::before {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					right: -18px;
					left: -18px;
				}

				&.active::after {
					content: '';
					position: absolute;
					bottom: 20%;
					left: -2px;
					right: -2px;
					height: 2px;
					background-color: var(--doc-primary);
					border-radius: 1px;
				}
			}

			+ *:not(a) {
				margin-left: 34px;
			}
		}

		@media (max-width: 767px) {
			> a,
			> span,
			> div {
				display: none;
			}
		}
	}
`
