import styled from 'styled-components'

export const WrapUl = styled.ul`
	li.slug-li {
		font-size: 14px;
		color: var(--doc-text);

		&[data-level='3'] {
			padding-left: 12px;
		}

		&[data-level='4'] {
			padding-left: 24px;
		}

		&[data-level='5'] {
			padding-left: 36px;
		}

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
`
