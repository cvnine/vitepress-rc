import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

interface WrapMainProps {
	hiddenMenus: boolean
}

export const Wrap = styled.div`
	box-sizing: border-box;
	min-height: 100vh;
`
export const WrapMain = styled.main<WrapMainProps>`
	margin-left: ${(props) => (props.hiddenMenus ? '0' : 'var(--doc-site-menu-width)')};
	padding-top: var(--doc-nav-height);

	@media (max-width: 767px) {
		margin-left: 0;
		padding-top: var(--doc-mobile-nav-height);
	}
`

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0
	}

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	

	a, a:focus {
		text-decoration: none;
		outline: 0;
	}

	:root{
		/* 颜色表 */
		--doc-primary: #646cff;
		--doc-heading: #454d64;
		--doc-text: #454d64;
		--doc-secondary: #717484;
		--doc-link: #747bff;
		--doc-border: #ebedf1;
		--doc-light-bg: #f9fafb;

		/* 尺寸表 */
		--doc-nav-height: 60px;
		--doc-mobile-nav-height: 50px;
		--doc-menu-width: 260px;
		--doc-site-menu-width: 300px;
		--doc-menu-mobile-width: 240px;
		--doc-content-margin: 58px;
	}

`
