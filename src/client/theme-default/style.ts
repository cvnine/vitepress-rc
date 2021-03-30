import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Wrap = styled.div`
	box-sizing: border-box;
	min-height: 100vh;
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
	

	ul,
	li {
		list-style: none;
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
		--doc-nav-height: 64px;
		--doc-mobile-nav-height: 50px;
		--doc-menu-width: 260px;
		--doc-site-menu-width: 300px;
		--doc-menu-mobile-width: 240px;
		--doc-content-margin: 58px;
	}

`
