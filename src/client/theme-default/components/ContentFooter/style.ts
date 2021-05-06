import styled from 'styled-components'

export const Wrap = styled.div`
	margin: 30px 0;
	color: var(--doc-text);
	.page-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 44px;
		margin-bottom: 12px;

		.page-footer-edit {
			> a {
				color: var(--doc-secondary);
				margin-right: 4px;
				&:hover {
					cursor: pointer;
					color: var(--doc-primary);
				}
			}
		}
		.last-updated {
			color: var(--doc-secondary);
		}
	}
	.page-next-prev-link {
		height: 60px;
		line-height: 60px;
		border-top: 1px solid var(--doc-border);
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			color: var(--doc-primary);
			margin: 0 8px;
			&:hover {
				cursor: pointer;
			}
		}
	}
`
