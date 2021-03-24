import styled from 'styled-components'

export const WrapUl = styled.ul`
	li {
		> a.active {
			color: var(--doc-primary);
		}

		&[data-depth='3'] {
			padding-left: 12px;
		}
	}
`
