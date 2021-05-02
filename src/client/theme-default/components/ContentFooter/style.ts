import styled from 'styled-components'

export const Wrap = styled.div`
	margin-top: 40px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid var(--doc-border);
	color: var(--doc-text);
	.last-updated {
		> span {
			color: var(--doc-primary);
		}
	}
`
