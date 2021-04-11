import styled from 'styled-components'

export const Wrap = styled.div`
	padding: 0 48px;

	&:not(:first-child):empty {
		min-height: 32px;
	}

	.markdown {
		color: var(--doc-text);
		font-size: 16px;
		line-height: 1.60625;
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 42px 0 18px;
			color: var(--doc-heading);
			font-weight: 500;
			line-height: 1.40625;

			&:hover > a[aria-hidden] {
				float: left;
				margin-top: 0.06em;
				margin-left: -20px;
				width: 20px;
				padding-right: 4px;
				line-height: 1;
				box-sizing: border-box;

				@media (max-width: 767px) {
					width: 14px;
					margin-left: -14px;
				}

				&::after {
					content: '#';
					display: inline-block;
					vertical-align: middle;
					font-size: 20px;
				}

				span {
					display: none;
				}
			}

			+ h1,
			+ h2,
			+ h3,
			+ h4,
			+ h5,
			+ h6 {
				margin-top: 16px;
			}
		}

		h1 {
			margin-bottom: 32px;
			font-size: 32px;
		}

		h2 {
			font-size: 24px;
		}

		h3 {
			font-size: 20px;
		}

		h4 {
			font-size: 18px;
		}

		h5 {
			font-size: 16px;
		}

		h6 {
			font-size: 14px;
		}

		p {
			margin: 16px 0;
		}

		*:not(pre) code {
			padding: 2px 5px;
			color: #d56161;
			background: #f6f7f9;
		}

		code {
			font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		}

		pre {
			font-size: 14px;
			background: #f6f7f9;

			&:not([class*='language-']) {
				padding: 1em;
			}
		}

		hr {
			margin: 16px 0;
			border: 0;
			border-top: 1px solid var(--doc-border);
		}

		blockquote {
			margin: 16px 0;
			padding: 0 24px;
			color: var(--doc-text);
			border-left: 4px solid var(--doc-border);
			overflow: hidden;
		}

		ul,
		ol {
			margin: 8px 0 8px 20px;
			padding: 0;

			li {
				margin-bottom: 4px;
			}
		}

		table {
			width: 100%;
			border-collapse: collapse;
			border: 1px solid var(--doc-border);

			th,
			td {
				padding: 10px 24px;
				border: 1px solid var(--doc-border);
			}

			th {
				font-weight: 600;
				background: var(--doc-light-bg);
			}

			td:first-child {
				font-weight: 500;
			}

			a {
				svg {
					display: none;
				}
			}
		}

		a {
			color: var(--doc-link);
			text-decoration: none;
			transition: opacity 0.2s;
			outline: none;

			&:hover {
				opacity: 0.7;
				text-decoration: underline;
			}

			&:active {
				opacity: 0.9;
			}
		}

		img {
			max-width: 100%;
		}
	}

	.code-live {
		margin: 16px 0;
	}
`
