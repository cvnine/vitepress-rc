var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,s=(e,t)=>{for(var o in t||(t={}))i.call(t,o)&&a(e,o,t[o]);if(n)for(var o of n(t))r.call(t,o)&&a(e,o,t[o]);return e},l=(e,n)=>t(e,o(n)),d=(e,t)=>{var o={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&n)for(var a of n(e))t.indexOf(a)<0&&r.call(e,a)&&(o[a]=e[a]);return o};import{D as c,q as p,j as x,k as h,H as u,d as g,a as m,b as f,y as v,_ as b,$ as w}from"./vendor.8ac4d6e3.js";function j(){const[e,t]=c.exports.useState(JSON.parse('{"lang":"zh-CN","title":"VitePress-rc","description":"Vite & React powered static site generator.","head":[],"base":"/vitepress-rc/","themeConfig":{"repo":"cvnine/vitepress-rc","docsDir":"docs","editLinks":true,"editLinkText":"在 GitHub 上编辑此页","lastUpdated":"最后更新时间","algolia":{"apiKey":"c57105e511faa5558547599f120ceeba","indexName":"vitepress"},"nav":[{"text":"Guide","link":"/","activeMatch":"^/$|^/guide/"},{"text":"Test","link":"/local/dif","activeMatch":"^/local/"},{"text":"test","items":[{"text":"Release Noteswww","link":"https://github.com/cvnine/vitepress-rc/releases"},{"text":"ee","link":"/local/dif","activeMatch":"^/local/"}]},{"text":"Config Reference","link":"/config/basics","activeMatch":"^/config/"},{"text":"Release Notes","link":"https://github.com/cvnine/vitepress-rc/releases"}],"sidebar":{"/guide/":[{"text":"Introduction","children":[{"text":"What is VitePress?","link":"/"},{"text":"Getting Started","link":"/guide/getting-started"},{"text":"Configuration","link":"/guide/configuration"},{"text":"Asset Handling","link":"/guide/assets"},{"text":"Markdown Extensions","link":"/guide/markdown"},{"text":"Deploying","link":"/guide/deploy"}]},{"text":"Advanced","children":[{"text":"Frontmatter","link":"/guide/frontmatter"},{"text":"Global Computed","link":"/guide/global-computed"},{"text":"Global Component","link":"/guide/global-component"},{"text":"Customization","link":"/guide/customization"},{"text":"Differences from Vuepress","link":"/guide/differences-from-vuepress"}]}],"/local/":[{"text":"Test","children":[{"text":"Difference","link":"/local/dif"}]}],"/config/":[{"text":"App Config","children":[{"text":"Basics","link":"/config/basics"}]},{"text":"Theme Config","children":[{"text":"Homepage","link":"/config/homepage"},{"text":"Algolia Search","link":"/config/algolia-search"},{"text":"Carbon Ads","link":"/config/carbon-ads"}]}],"/":[{"text":"Introduction","children":[{"text":"What is VitePress?","link":"/"},{"text":"Getting Started","link":"/guide/getting-started"},{"text":"Configuration","link":"/guide/configuration"},{"text":"Asset Handling","link":"/guide/assets"},{"text":"Markdown Extensions","link":"/guide/markdown"},{"text":"Deploying","link":"/guide/deploy"}]},{"text":"Advanced","children":[{"text":"Frontmatter","link":"/guide/frontmatter"},{"text":"Global Computed","link":"/guide/global-computed"},{"text":"Global Component","link":"/guide/global-component"},{"text":"Customization","link":"/guide/customization"},{"text":"Differences from Vuepress","link":"/guide/differences-from-vuepress"}]}]}}}'));return c.exports.useEffect((()=>{}),[]),e}const y="undefined"!=typeof window;function k(e,t){return`${e}${t}`.replace(/\/+/g,"/")}const C=c.exports.createContext({path:"/",component:null,data:null}),A=p.div`
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
			border-bottom: 1px solid var(--doc-border);
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

		.remark-container {
			margin: 16px 0;
			border-left: 4px solid;
			border-color: var(--doc-primary);
			background-color: rgb(230 241 252 / 80%);
			padding: 1px 16px;
			box-shadow: 0 6px 16px -2px rgb(0 0 0 / 6%);
			&-danger {
				border-color: #ff3f3f;
				background-color: rgb(255 230 230 / 80%);
				.remark-container-title {
					color: #b01717;
				}
			}
			&-warning {
				border-color: #ffdd35;
				background-color: rgba(255, 229, 100, 0.3);
				.remark-container-title {
					color: #b29400;
				}
			}
			&-title {
				font-weight: 600;
				margin: 16px 0;
			}
			&-content {
				margin: 16px 0;
			}
		}
	}

	.code-live {
		margin: 16px 0;
	}
`,O=e=>x.exports.jsx(A,{children:x.exports.jsx(h,Object.assign({components:{API:P,pre:e=>x.exports.jsx("div",Object.assign({},e),void 0),code:q}},{children:e.children}),void 0)},void 0),E=p.table`
	margin-top: 24px;
`,L="属性名",z="描述",S="类型",_="默认值",N="(必选)",P=({export:e,identifier:t})=>{var o;const n=null!=(o=function(e="default",t){var o;if(!t)return null;let n=null,i=null;try{if(n=JSON.parse(null!=(o=t.replace(/%&%/g,'"'))?o:"{}"),i=n[e],!i)for(const e in n){i=n[e];break}}catch(r){}return i}(e,t))?o:null;return n&&x.exports.jsxs(E,{children:[x.exports.jsx("thead",{children:x.exports.jsxs("tr",{children:[x.exports.jsx("th",{children:L},void 0),x.exports.jsx("th",{children:z},void 0),x.exports.jsx("th",{children:S},void 0),x.exports.jsx("th",{children:_},void 0)]},void 0)},void 0),x.exports.jsx("tbody",{children:n.map((e=>{var t,o,n;return x.exports.jsxs("tr",{children:[x.exports.jsx("td",{children:e.identifier},void 0),x.exports.jsx("td",{children:(null==(t=e.description)?void 0:t.replace(/%@%/g,'"'))||"--"},void 0),x.exports.jsx("td",{children:x.exports.jsx("code",{children:null==(o=e.type)?void 0:o.replace(/%@%/g,'"')},void 0)},void 0),x.exports.jsx("td",{children:x.exports.jsx("code",{children:(null==(n=e.default)?void 0:n.replace(/%@%/g,'"'))||e.required&&N||"--"},void 0)},void 0)]},e.identifier)}))},void 0)]},void 0)};const M=p.div`
	/* PrismJS 1.23.0
https://prismjs.com/download.html?themes#themes=prism&languages=markup+css+clike+javascript+javadoclike+jsdoc+jsx+tsx+scss+typescript */
	/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

	&.code-editor-wrap {
		background: #f6f7f9;
		padding: 1em;
		textarea:focus {
			outline: none;
		}
	}

	position: relative;
	.copy-icon {
		position: absolute;
		right: 10px;
		top: 8px;
		opacity: 0;
	}
	&:hover .copy-icon {
		opacity: 0.6;
		transition: opacity 0.2s;
	}

	.code-editor,
	code[class*='language-'],
	pre[class*='language-'] {
		color: var(--doc-text);
		background: none;
		text-shadow: 0 1px white;
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 14px;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 23px;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	.code-editor::-moz-selection,
	.code-editor ::-moz-selection,
	pre[class*='language-']::-moz-selection,
	pre[class*='language-'] ::-moz-selection,
	code[class*='language-']::-moz-selection,
	code[class*='language-'] ::-moz-selection {
		text-shadow: none;
		background: #b3d4fc;
	}

	.code-editor::selection,
	.code-editor ::selection,
	pre[class*='language-']::selection,
	pre[class*='language-'] ::selection,
	code[class*='language-']::selection,
	code[class*='language-'] ::selection {
		text-shadow: none;
		background: #b3d4fc;
	}

	@media print {
		.code-editor,
		code[class*='language-'],
		pre[class*='language-'] {
			text-shadow: none;
		}
	}

	/* Code blocks */
	pre[class*='language-'] {
		padding: 1em 0;
		margin: 0.5em 0;
		overflow: auto;
	}

	:not(pre) > code[class*='language-'],
	.code-editor,
	pre[class*='language-'] {
		background: #f6f7f9;
	}

	/* Inline code */
	:not(pre) > code[class*='language-'] {
		padding: 0.1em;
		border-radius: 0.3em;
		white-space: normal;
	}

	pre[class*='language-'] > div {
		padding: 0 1em;
	}

	pre[class*='language-'] > div.highlighted {
		background: hsl(220deg 24% 93%);
		.token.operator,
		.token.entity,
		.token.url,
		.language-css .token.string,
		.style .token.string {
			background: hsl(220deg 24% 93%);
		}
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: slategray;
	}

	.token.punctuation {
		color: #999;
	}

	.token.namespace {
		opacity: 0.7;
	}

	.token.property,
	.token.tag,
	.token.boolean,
	.token.number,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #905;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: #690;
	}

	.token.operator,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.style .token.string {
		color: #9a6e3a;
		/* This background color was intended by the author of this theme. */
		background: hsla(0, 0%, 100%, 0.5);
	}

	.token.atrule,
	.token.attr-value,
	.token.keyword {
		color: #07a;
	}

	.token.function,
	.token.class-name {
		color: #dd4a68;
	}

	.token.regex,
	.token.important,
	.token.variable {
		color: #e90;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}
	.token.italic {
		font-style: italic;
	}

	.token.entity {
		cursor: help;
	}
`,$=p.div`
	border: 1px solid #ebedf1;
	border-radius: 1px;
	.code-preview-wrap {
		padding: 30px 24px;
	}
	.code-error-wrap {
		font-size: 14px;
		background: var(--doc-light-bg);
		border-top: 1px dashed #d8d8da;
		padding: 24px;
	}
	.code-actions {
		display: flex;
		height: 40px;
		padding: 0 1em;
		align-items: center;
		border-top: 1px dashed #ebedf1;
		justify-content: space-between;
		&--right {
			svg {
				margin-left: 10px;
			}
		}
	}
`,R=p.svg`
	color: #7f7c8e;
	cursor: pointer;
	&:hover {
		color: #555;
	}
`,T=({onClick:e})=>x.exports.jsx("span",Object.assign({onClick:e,title:"复制"},{children:x.exports.jsx(R,Object.assign({"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg","p-id":"799",viewBox:"0 0 1024 1024",width:"18",height:"18"},{children:x.exports.jsx("path",{d:"M515.781628 328.34212l0 96.938819 86.571704 0L515.781628 328.34212zM614.882694 898.001331c6.27389-6.274914 10.251481-14.82566 10.251481-24.51944l0-396.306025L510.076696 477.175867l0 0c-12.530384 0-23.920806-5.134951-32.464389-13.687744l0 0c-7.973602-8.552793-13.109576-19.962657-13.109576-32.493042L464.502731 315.793316 228.683864 315.793316l0 0c-9.6815 0-18.225083 3.997034-24.490787 10.252505l0 0c-6.264681 6.294356-9.691733 14.826684-9.691733 24.51944l0 522.916631c0 9.69378 3.427052 18.244526 9.691733 24.51944 6.265704 6.275937 14.808264 10.270924 24.490787 10.270924l0 0 361.718275 0 0 0C600.07443 908.272255 608.627223 904.277268 614.882694 898.001331L614.882694 898.001331zM167.732677 289.555745c15.947204-15.387455 37.59934-25.079188 60.951187-25.079188l301.326836 0 2.858094 0 1.698688 1.719154 140.706649 161.364131 1.137916 1.13894 0 2.296299 0 442.48681c0 23.959691-9.691733 45.62206-25.058722 61.029982l0 0c-15.387455 15.385409-37.030381 25.078165-60.951187 25.078165l-361.718275 0c-23.350824 0-45.00296-9.692756-60.951187-25.078165-15.377222-15.407921-25.059745-37.07029-25.059745-61.029982L142.672932 350.565261C142.672932 326.623989 152.355455 305.540811 167.732677 289.555745L167.732677 289.555745zM716.859249 127.033231l0 96.957239 86.570681 0L716.859249 127.033231zM429.761486 63.166645l301.326836 0 2.858094 0 1.698688 2.278903 140.706649 160.823825 1.13894 1.699712 0 1.718131 0 442.507276c0 23.958668-9.691733 45.620014-25.060769 61.007469-15.966647 15.966647-37.030381 25.097608-60.951187 25.097608l0 0-60.391439 0.560772 0 0c-6.833639 0-13.668301-3.417843-18.226107-7.974625l0 0c-4.555759-4.555759-7.393387-10.829649-7.393387-18.243503l0 0c0-6.854105 2.836605-13.688767 7.393387-18.24555l0 0c4.556783-4.575202 11.392468-7.41283 18.226107-7.41283l0 0 60.391439 0 0 0c9.67229 0 18.226107-3.996011 24.480554-10.270924 6.274914-6.275937 10.253528-14.827707 10.253528-24.518417L826.21282 275.886421 711.16455 275.886421l0 0c-12.549827 0-23.941272-5.134951-32.473599-13.707187-8.552793-7.973602-13.668301-19.944238-13.668301-32.493042L665.022651 115.062596 429.761486 115.062596l0 0c-9.6815 0-18.226107 3.437286-24.490787 9.691733-6.274914 6.294356-10.260691 14.827707-10.260691 24.51944l0 60.468187c0 7.413853-2.847861 13.669324-7.404644 18.226107-4.556783 4.575202-10.821463 7.413853-18.226107 7.413853l0 0c-6.834662 0-13.668301-2.838651-18.225083-7.413853-4.555759-4.556783-7.40362-11.390421-7.40362-18.226107l0-60.468187c0-23.361057 9.682523-45.042869 25.058722-61.009516l0 0C384.757502 72.858378 405.84068 63.166645 429.761486 63.166645L429.761486 63.166645z","p-id":"800",fill:"currentColor"},void 0)}),void 0)}),void 0),I=()=>x.exports.jsx("span",{children:x.exports.jsx("svg",Object.assign({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2561",width:"18",height:"18"},{children:x.exports.jsx("path",{d:"M951.629227 209.968106c4.562922 5.14109 7.402597 11.423167 7.402597 18.274202 0 3.420913-0.559748 6.841825-1.700735 9.701966-0.579191 1.710968-1.13894 2.850931-2.28095 3.990894l0.559748 0.571005-3.419889 4.001127L408.727427 809.944809l-1.700735 2.299369-0.580215 0c-1.700735 1.701758-3.981684 2.841721-6.262634 3.982708-2.860141 1.139963-6.261611 1.720178-9.701966 1.720178l0 0c-3.981684 0-6.842849-0.579191-10.244318-1.720178-2.860141-1.139963-5.721305-3.420913-8.001231-5.701862l0 0L70.006935 508.535085l0 0c-2.28095-2.28095-4.002151-5.140067-5.122671-8.562003l0 0c-1.720178-2.850931-2.28095-6.281053-2.28095-9.701966l0 0 0 0c0-7.42204 2.840698-13.703093 7.402597-18.274202 5.121648-4.561899 11.403724-7.42204 18.264992-7.42204l0 0c3.40147 0 6.841825 0.571005 10.244318 1.720178l0 0c2.859118 1.139963 5.720282 3.420913 8.001231 5.701862l0 0 283.405675 283.153942L914.558937 210.538087l5.700839-5.701862 0.560772 1.140986c1.140986-0.571005 1.720178-1.140986 2.28095-1.140986 3.420913-1.720178 6.842849-2.290159 10.283204-2.290159l0 0C940.787298 202.546066 947.068352 205.406207 951.629227 209.968106L951.629227 209.968106z","p-id":"2562",fill:"#1afa29"},void 0)}),void 0)},void 0),D=({onClick:e})=>x.exports.jsx("span",Object.assign({onClick:e,title:"代码"},{children:x.exports.jsx(R,Object.assign({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"939",width:"18",height:"18"},{children:x.exports.jsx("path",{d:"M666.627 296.882c-12.496-12.497-12.496-32.758 0-45.255 12.497-12.496 32.758-12.496 45.255 0L949.47 489.215c12.497 12.497 12.497 32.758 0 45.255L711.882 772.058c-12.497 12.497-32.758 12.497-45.255 0-12.496-12.497-12.496-32.758 0-45.255L875.931 517.5a8 8 0 0 0 0-11.314L666.627 296.882zM147.167 517.5L356.47 726.803c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0L73.627 534.47c-12.496-12.497-12.496-32.758 0-45.255l237.588-237.588c12.497-12.496 32.758-12.496 45.255 0 12.497 12.497 12.497 32.758 0 45.255L147.167 506.186a8 8 0 0 0 0 11.314zM580.4 215.198c17.22 3.976 27.957 21.159 23.981 38.379L481.558 785.583c-3.975 17.22-21.158 27.957-38.378 23.981-17.22-3.975-27.957-21.158-23.982-38.378L542.022 239.18c3.975-17.22 21.158-27.957 38.378-23.982z","p-id":"940",fill:"currentColor"},void 0)}),void 0)}),void 0),U=({onClick:e})=>x.exports.jsx("span",Object.assign({onClick:e,title:"重载"},{children:x.exports.jsx(R,Object.assign({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3248",width:"18",height:"18"},{children:x.exports.jsx("path",{d:"M258.56 681.36l-12.704 44.288a16 16 0 0 1-7.616 9.584l-24.752 13.712a14.464 14.464 0 0 1-20.928-16.64l38.128-132.96a11.136 11.136 0 0 1 13.76-7.632l132.976 38.128a14.464 14.464 0 0 1 3.04 26.56l-24.768 13.712a16 16 0 0 1-12.16 1.392l-42.016-12.048a264.112 264.112 0 0 0 468.112-41.76 14.288 14.288 0 0 1 3.296-4.912 263.424 263.424 0 0 0 16.768-92.784c0-90.496-45.536-170.368-114.96-217.92a264.112 264.112 0 0 0-393.808 118.8 14.336 14.336 0 0 1-17.968 8.16l-20.256-7.024a12.352 12.352 0 0 1-7.456-16.192A312.112 312.112 0 0 1 525.696 208c66.112 0 128.256 20.752 179.44 56.736a313.12 313.12 0 0 1 108.656 135.312 311.04 311.04 0 0 1 23.904 119.952c0 172.32-139.68 312-312 312v-0.208h-0.832c-110.96 0-210.768-59.296-266.304-150.432z","p-id":"3249",fill:"currentColor"},void 0)}),void 0)}),void 0);const B=()=>{const[e,t]=c.exports.useState(),[o,n]=c.exports.useState("ready");return[c.exports.useCallback((o=>{!function(e,{target:t=document.body}={}){const o=document.createElement("textarea"),n=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const i=document.getSelection();let r=!1;i.rangeCount>0&&(r=i.getRangeAt(0)),t.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),r&&(i.removeAllRanges(),i.addRange(r)),n&&n.focus()}(o),n("copied"),clearTimeout(e),t(setTimeout((()=>{n("ready")}),2e3))}),[]),o]},V=({code:e,language:t,lineNumbers:o})=>{const[n,i]=B();return x.exports.jsxs(M,{children:[x.exports.jsx("span",Object.assign({className:"copy-icon"},{children:"ready"===i?x.exports.jsx(T,{onClick:()=>n(e)},void 0):x.exports.jsx(I,{},void 0)}),void 0),x.exports.jsx(u,Object.assign({},g,{code:e,language:t,theme:void 0},{children:({className:e,style:t,tokens:n,getLineProps:i,getTokenProps:r})=>x.exports.jsx("pre",Object.assign({className:e,style:s({},t)},{children:n.map(((e,t)=>{const n=o.some((([e,o])=>e&&o?t+1>=e&&t+1<=o:t+1===e)),a=i({line:e,key:t}),{className:s}=a,l=d(a,["className"]);return x.exports.jsx("div",Object.assign({className:`${n?"highlighted "+s:s}`},l,{children:e.map(((e,t)=>x.exports.jsx("span",Object.assign({},r({token:e,key:t})),t)))}),t)}))}),void 0)}),void 0)]},void 0)};var H={js:{"demo-c":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Input:e=>m.createElement("div",{style:{color:"red"}},m.createElement("input",null)),Button:e=>m.createElement(m.Fragment,null,m.createElement("div",{className:"dd"},"button"))})},css:{}};function F({transform:e,compact:t}){let o=t?{padding:"0"}:{};return s(s({},e?{transform:"translate(0px, 0px)"}:{}),o)}const Q=({code:e,local:t,codeOptions:o})=>{const[n,i]=c.exports.useState(!1),[r,a]=c.exports.useState(e),[d,h]=B();return c.exports.useEffect((()=>{a(e)}),[e]),x.exports.jsx($,{children:x.exports.jsxs(re,Object.assign({code:r,local:t,scope:{js:l(s({},H.js),{react:m,"styled-components":p}),css:H.css}},{children:[x.exports.jsx("div",Object.assign({className:"code-preview-wrap",style:F(o)},{children:x.exports.jsx(de,{},void 0)}),void 0),x.exports.jsxs("div",Object.assign({className:"code-actions"},{children:[x.exports.jsx("div",{},void 0),x.exports.jsxs("div",Object.assign({className:"code-actions--right"},{children:[x.exports.jsx(U,{onClick:()=>a(e)},void 0),"ready"===h?x.exports.jsx(T,{onClick:()=>d(r)},void 0):x.exports.jsx(I,{},void 0),x.exports.jsx(D,{onClick:()=>i((e=>!e))},void 0)]}),void 0)]}),void 0),n&&x.exports.jsx(x.exports.Fragment,{children:x.exports.jsx(M,Object.assign({className:"code-editor-wrap"},{children:x.exports.jsx(se,{className:"code-editor",onCodeChange:e=>{a(e)}},void 0)}),void 0)},void 0),x.exports.jsx(le,{className:"code-error-wrap"},void 0)]}),void 0)},void 0)},W=/^language-([^{]*)({([\d,-]+)})*/;const q=e=>{var t=e,{children:o,className:n,live:i,transform:r,compact:a}=t;d(t,["children","className","live","transform","compact"]);const s=o.replace(/\n$/,""),[l,c]=function(e){var t,o,n;if(e){const i=null!=(t=W.exec(e))?t:[null,"js",null],r=null!=(n=null==(o=i[3])?void 0:o.split(",").map((e=>e.split("-").map((e=>parseInt(e,10))))))?n:[];return[i[1],r]}return["js",[]]}(n),p={transform:!!r,compact:!!a};if(i&&("jsx"===l||"tsx"===l)){let e="local"===i;return x.exports.jsx(Q,{code:s,local:e,codeOptions:p},void 0)}return x.exports.jsx(V,{code:s,language:l,lineNumbers:c},void 0)},J=c.exports.createContext({code:"",disabled:!1,error:"",onChange:()=>{}});let G;const Y={},K=function(e,t){if(!t)return e();if(void 0===G){const e=document.createElement("link").relList;G=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in Y)return;Y[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":G,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};function X(e,t){for(let o=t;o<e.length;o++){const t=e[o];if("from"===t.value||"{"===t.value)break;if("}"===t.value)return!0}return!1}function Z(e){return{result:"",imports:{},error:new SyntaxError(e)}}async function ee(e=!0){if(e)return m;{const e=new URL("//jspm.dev/react","https://a.com").href,{default:t}=await K((()=>import(e)),void 0);return t}}async function te(e=!0){if(e)return f;{const e=new URL("//jspm.dev/react-dom","https://a.com").href,{default:t}=await K((()=>import(e)),void 0);return t}}async function oe(e=!0){if(e)return v;{const e=new URL("//jspm.dev/styled-components","https://a.com").href,{default:{StyleSheetManager:t}}=await K((()=>import(e)),void 0);return t}}function ne(e){const t=e.querySelector(".shadow-skeleton");t&&e.removeChild(t);const o=e.querySelector('style[data-shadow-skeleton="y"]');o&&e.removeChild(o)}const ie=({code:e="",scope:t={},local:o=!0},n,i,r)=>{const a=e=>t=>{var a;if(null!=t&&""!==t)return a=t,m.isValidElement(a)||"string"==typeof a||"number"==typeof a||"boolean"==typeof a||"function"==typeof a||Array.isArray(a)?((async({Element:e,errorCallback:t,shadowRoot:o,cssText:n,local:i})=>{const[r,a,s]=await Promise.all([ee(i),te(i),oe(i)]);class l extends r.Component{componentDidCatch(e){t(e)}render(){return"function"==typeof e?x.exports.jsx(e,{},void 0):e}}if(o.current)try{ne(o.current);let e=o.current.querySelector(".react-render");e?a.unmountComponentAtNode(e):(e=document.createElement("div"),e.classList.add("react-render"),o.current.appendChild(e));let t=o.current.querySelector('style[data-shadow-style="y"]');t?t.textContent=n||"":(t=document.createElement("style"),t.setAttribute("data-shadow-style","y"),t.textContent=n||"",o.current.appendChild(t));let i=o.current.querySelector("div.shadow-sheet");i&&o.current.removeChild(i),i=document.createElement("div"),i.classList.add("shadow-sheet"),o.current.appendChild(i);let r=a.createPortal;a.createPortal=function(t,n,i){return setTimeout((()=>{var i;if(t._owner){let r=t._owner.return;for(;r&&null!==r.return;)r=r.return;if(r.stateNode&&r.stateNode.containerInfo===e){let t=n.parentNode,r=!0;for(;t&&t!==document.querySelector("body");){if(t===e){r=!1;break}t=t.parentNode}r&&(null==(i=o.current)||i.appendChild(n))}}})),r(t,n,i)},a.render(x.exports.jsx(s,Object.assign({target:i},{children:x.exports.jsx(l,{},void 0)}),void 0),e)}catch(d){t(d)}})({Element:t,errorCallback:i,shadowRoot:r,cssText:e,local:o}),void n()):void i(new SyntaxError("`export default` must be called with valid JSX."));i(new SyntaxError("`export default` must be called with valid JSX."))};(async function({code:e,local:t,scope:o}){try{const i=new URL("//jspm.dev/gogocode@0.2.9","https://a.com").href,r=new URL("//jspm.dev/@babel/standalone","https://a.com").href,[{default:a},s]=await Promise.all([K((()=>import(i)),void 0),K((()=>import(r)),void 0)]);let l=e,d={},c={};a(l).find("import $_$1 from '$_$2'").each((e=>{let t=e.match[1].map((e=>{let t=e.node.loc;return{value:e.value,isDestructing:X(t.tokens,t.start.token+1)}})),o=e.match[2][0].value;(d[o]||(d[o]=[])).push(...t)}));const p=Object.entries(d);if(t)for(let e=0;e<p.length;e++){let[t,n]=p[e];if(o.js[t])for(const e of n)e.isDestructing?c[e.value]=o.js[t][e.value]:c[e.value]=o.js[t]}else try{const e=await Promise.all(p.map((e=>{let t;return t=e[0].startsWith("//")||e[0].startsWith("http")?new URL(`${e[0]}`,"https://a.com").href:new URL(`//jspm.dev/${e[0]}`,"https://a.com").href,K((()=>import(t)),void 0)})));for(let t=0;t<p.length;t++){let[,o]=p[t];for(const n of o)n.isDestructing?c[n.value]=e[t].default[n.value]:c[n.value]=e[t].default}}catch(n){return Z("Failed to fetch dynamically imported module. Please check out your modules")}let x="",h=[];if(a(l).find("import '$_$'").each((e=>{let t=e.match[0][0].value;/\.css$/.test(t)&&h.push(t)})),t){let e=[];for(const[t,n]of Object.entries(o.css))e.push(n.default);x=e.join("\n")}else try{x=(await Promise.all(h.map((e=>fetch(`${e}`).then((e=>e.text())))))).join("\n")}catch(n){}const u=a(l).find("export default $_$");if(0===u.length)return Z("`export default` must be called");if(u.length>1)return Z("multiple `export default` error");let g=u[0].match[0][0].value;return l=a(l).replace("import '$_$'","").replace("export default $_$","").generate(),{result:s.transform(function(e,t){return[e,"","render(",t,")"].join("\n")}(l,g),{filename:"transformedCode.ts",presets:["react",["typescript",{isTSX:!0,allExtensions:!0}]]}).code,imports:c,cssText:x}}catch(i){return{result:"",imports:{},error:i}}})({code:e,local:o,scope:t}).then((({result:e,imports:t,error:o,cssText:n})=>{if(o)throw o;!function(e,t){const o=Object.keys(t),n=o.map((e=>t[e]));new Function(...o,e)(...n)}(e,l(s({},t),{render:a(n)}))})).catch((e=>{i(e)}))};function re({code:e,local:t,scope:o,disabled:n,transformCode:i,children:r}){const[a,s]=c.exports.useState(""),l=c.exports.useRef(null),d=({code:e,scope:o,transformCode:n})=>{const i={code:n(e),scope:o,local:t},r=async e=>{if(s(e.toString()),l.current){const e=await te(t);ne(l.current);let o=l.current.querySelector(".react-render");o&&e.unmountComponentAtNode(o),l.current.innerHTML=""}},a=()=>{s(null)};try{ie(i,a,r,l)}catch(d){r(d)}};return c.exports.useEffect((()=>{d({code:e,scope:o,transformCode:i})}),[e,t?o:null,i]),x.exports.jsx(J.Provider,Object.assign({value:{code:e,disabled:n,shadowRoot:l,error:a,onChange:e=>{d({code:e,scope:o,transformCode:i})}}},{children:r}),void 0)}re.defaultProps={disabled:!1,scope:{},local:!0,transformCode:e=>e};const ae=e=>{var t=e,{code:o,onChange:n,style:i,onCodeChange:r}=t,a=d(t,["code","onChange","style","onCodeChange"]);const[l,p]=m.useState(o);c.exports.useEffect((()=>{p(o),r&&r(o)}),[o]);return x.exports.jsx(b,Object.assign({value:l,highlight:e=>x.exports.jsx(u,Object.assign({},g,{code:e,theme:void 0,language:"tsx"},{children:({className:e,style:t,tokens:o,getLineProps:n,getTokenProps:i})=>x.exports.jsx("div",Object.assign({className:e,style:s({},t)},{children:o.map(((e,t)=>x.exports.jsx("div",Object.assign({},n({line:e,key:t}),{children:e.map(((e,t)=>x.exports.jsx("span",Object.assign({},i({token:e,key:t})),t)))}),t)))}),void 0)}),void 0),onValueChange:e=>{p(e),n&&n(e),r&&r(e)},style:s({},i)},a),void 0)};function se(e){return x.exports.jsx(J.Consumer,{children:({code:t,disabled:o,onChange:n})=>x.exports.jsx(ae,Object.assign({code:t,disabled:o,onChange:n},e),void 0)},void 0)}function le(e){return x.exports.jsx(J.Consumer,{children:({error:t})=>t?x.exports.jsx("pre",Object.assign({},e,{children:t}),void 0):null},void 0)}function de(e){var t=e,{Component:o}=t,n=d(t,["Component"]);return x.exports.jsx(o,Object.assign({},n,{children:x.exports.jsx(J.Consumer,{children:({shadowRoot:e})=>x.exports.jsx("div",{ref:t=>{if(!e||e.current)return;const o=t.attachShadow({mode:"open"}),n=document.createElement("span");n.classList.add("shadow-skeleton");const i=document.createElement("style");i.setAttribute("data-shadow-skeleton","y"),i.textContent="\n\t\t\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\t\theight:20px;\n\t\t\t\t\t\t\t\t\tbackground: linear-gradient(90deg,hsla(0,0%,74.5%,.2) 25%,hsla(0,0%,50.6%,.24) 37%,hsla(0,0%,74.5%,.2) 63%);\n\t\t\t\t\t\t\t\t\tbackground-size: 400% 100%;\n\t\t\t\t\t\t\t\t\t-webkit-animation: ant-skeleton-loading 1.4s ease infinite;\n\t\t\t\t\t\t\t\t\tanimation: skeleton-loading 4s ease infinite;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t@keyframes skeleton-loading{\n\t\t\t\t\t\t\t\t\t0%{\n\t\t\t\t\t\t\t\t\t\tbackground-position:100% 50%;\n\t\t\t\t\t\t\t\t\t\twidth: 60%;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t50%{\n\t\t\t\t\t\t\t\t\t\tbackground-position:50% 50%;\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t100% {\n\t\t\t\t\t\t\t\t\t\tbackground-position:0 50%;\n\t\t\t\t\t\t\t\t\t\twidth: 60%;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",o.appendChild(i),o.appendChild(n),e.current=o}},void 0)},void 0)}),void 0)}de.defaultProps={Component:"div"};const ce=p.div`
	box-sizing: border-box;
	min-height: 100vh;
`,pe=p.main`
	margin-left: ${e=>e.hiddenMenus?"0":"var(--doc-site-menu-width)"};
	padding-top: var(--doc-nav-height);

	@media (max-width: 767px) {
		margin-left: 0;
		padding-top: var(--doc-mobile-nav-height);
	}
`,xe=w`
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

`,he=p.div`
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
`,ue=p.a`
	font-weight: 500;
	font-size: 20px;
`,ge=e=>x.exports.jsx(ue,Object.assign({href:e.to},{children:e.children}),void 0),me=p.svg`
	position: relative;
	top: -2px;
	display: inline-block;
	vertical-align: middle;
	color: #4d5164;
`,fe=()=>x.exports.jsxs(me,Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},{children:[x.exports.jsx("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},void 0),x.exports.jsx("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},void 0)]}),void 0),ve=()=>x.exports.jsx(me,Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"15",height:"15"},{children:x.exports.jsx("path",{fill:"currentColor",d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},void 0)}),void 0),be=()=>x.exports.jsx(me,Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"15",height:"15"},{children:x.exports.jsx("path",{fill:"currentColor",d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},void 0)}),void 0);function we(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const je=({nav:e,children:t})=>{const{aProps:o,isExternal:n,isActive:i}=function(e){const t=c.exports.useContext(C),o=j(),n=/^[a-z]+:/i.test(e.link),i=we(`/${t.data.relativePath}`);let r=!1;if(e.activeMatch)r=new RegExp(e.activeMatch).test(i);else{const t=we(k(o.base,e.link));r="/"===t?t===i:i.startsWith(t)}return{aProps:{className:r?"active":"",href:n?e.link:k(o.base,e.link),target:e.target||n?"_blank":void 0,rel:e.rel||n?"noopener noreferrer":void 0,"aria-label":e.ariaLabel},isActive:r,isExternal:n}}(e);return x.exports.jsxs("a",Object.assign({},o,{children:[t&&t(i),e.text," ",n&&x.exports.jsx(fe,{},void 0)]}),void 0)},ye=p.div`
	position: relative;
	color: var(--doc-text);
	cursor: pointer;
	font-size: 14px;
	text-decoration: none;
	letter-spacing: 0;

	@media (min-width: 767px) {
		display: inline-block;
		margin-left: 40px;
		height: var(--doc-nav-height);
		line-height: var(--doc-nav-height);
	}

	> button {
		display: block;
		background: transparent;
		border: none;
		color: var(--doc-text);
		cursor: pointer;
		font-size: 14px;
		@media (min-width: 767px) {
			height: var(--doc-nav-height);
			line-height: var(--doc-nav-height);
		}

		@media (max-width: 767px) {
			height: 32px;
			line-height: 32px;
			font-size: 15px;
			width: 100%;
			text-align: left;
		}
		.right-arrow {
			display: inline-block;
			margin-left: 8px;
			border-top: 6px solid #ccc;
			border-right: 4px solid transparent;
			border-bottom: 0;
			border-left: 4px solid transparent;
			vertical-align: middle;
			@media (max-width: 767px) {
				&.right {
					transform: rotate(-90deg);
				}
				&.down {
					transform: rotate(0deg);
				}
			}
		}
	}

	ul {
		display: none;
		list-style: none;
		position: absolute;
		top: calc(100% - 12px);
		right: -8px;
		border-radius: 6px;
		padding: 12px 0;
		min-width: 128px;
		background-color: #fff;
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);

		li {
			line-height: 32px;
			padding: 0 24px 0 12px;
			span.nav-arrow {
				display: inline-block;
				margin-top: 1px;
				margin-right: 6px;
				border-top: 5px solid #ccc;
				border-right: 3px solid transparent;
				border-bottom: 0;
				border-left: 3px solid transparent;
				vertical-align: middle;
				opacity: 0;
				transform: translateY(-2px) rotate(-90deg);
				&.active {
					opacity: 1;
					border-top: 5px solid var(--doc-primary);
				}
			}
			a {
				color: #4d5164;
				display: inline-block;
				width: 100%;
				&:hover,
				&.active {
					color: var(--doc-primary);
				}
			}
		}

		&.ul-show {
			@media (max-width: 767px) {
				display: block;
				position: relative;
				right: 0;
				min-width: auto;
				background-color: none;
				box-shadow: none;

				li {
					padding: 0 0 0 2px;
				}
			}
		}
	}

	&:hover {
		@media (min-width: 767px) {
			ul {
				display: block;
			}
		}
	}
`;function ke({nav:e}){const[t,o]=c.exports.useState(!1);return x.exports.jsxs(ye,{children:[x.exports.jsxs("button",Object.assign({onClick:e=>{e.stopPropagation(),o((e=>!e))}},{children:[x.exports.jsx("span",{children:e.text},void 0),x.exports.jsx("span",{className:"right-arrow "+(t?"down":"right")},void 0)]}),void 0),x.exports.jsx("ul",Object.assign({className:""+(t?"ul-show":"")},{children:e.items.map((e=>"items"in e?x.exports.jsx(x.exports.Fragment,{},void 0):x.exports.jsx("li",{children:x.exports.jsx(je,Object.assign({nav:e},{children:e=>x.exports.jsx("span",{className:"nav-arrow "+(e?"active":"")},void 0)}),void 0)},e.text)))}),void 0)]},void 0)}function Ce(e){const t=j();return x.exports.jsxs(he,{children:[x.exports.jsx("button",{className:"toggle",onClick:e.onMobileMenuClick},void 0),x.exports.jsx(ge,Object.assign({to:t.base},{children:t.title}),void 0),x.exports.jsx("nav",{children:t.themeConfig.nav&&t.themeConfig.nav.map((e=>"items"in e?x.exports.jsx(ke,{nav:e},e.text):x.exports.jsx("span",{children:x.exports.jsx(je,{nav:e},void 0)},e.text)))},void 0)]},void 0)}const Ae=p.div`
	position: fixed;
	z-index: 100;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	transition: left 0.3s;
	${e=>e.hiddenMenus&&"\n\t\t\tdisplay: none;\n\t\t"}

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
			> li {
				line-height: 2;
				text-align: left;
				padding: 0 20px;
			}
		}

		ul.list {
			margin-bottom: 40px;
			margin-right: 10px;

			li:not(.slug-li) > a {
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
			}

			li[data-sidebar-level='1'] {
				font-size: 18px;
				line-height: 2.8;
				> a,
				> p {
					padding-left: 20px;
				}
				> .side {
					padding-left: 36px;
				}
			}

			li[data-sidebar-level='2'] {
				font-size: 16px;
				line-height: 2;
				> a,
				> p {
					padding-left: 36px;
				}
				+ li[data-sidebar-level='1'] {
					margin-top: 10px;
				}

				> .side {
					padding-left: 52px;
				}
			}

			li[data-sidebar-level='3'] {
				font-size: 16px;
				line-height: 2;
				> a,
				> p {
					padding-left: 52px;
				}

				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 68px;
				}
			}

			li[data-sidebar-level='4'] {
				font-size: 15px;
				line-height: 2;
				> a,
				> p {
					padding-left: 68px;
				}

				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'],
				+ li[data-sidebar-level='3'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 84px;
				}
			}

			li[data-sidebar-level='5'] {
				font-size: 15px;
				line-height: 2;
				> a,
				> p {
					padding-left: 84px;
				}

				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'],
				+ li[data-sidebar-level='3'],
				+ li[data-sidebar-level='4'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 100px;
				}
			}

			li[data-sidebar-level='6'] {
				font-size: 15px;
				line-height: 2;
				> a,
				> p {
					padding-left: 100px;
				}
				+ li[data-sidebar-level='1'],
				+ li[data-sidebar-level='2'],
				+ li[data-sidebar-level='3'],
				+ li[data-sidebar-level='4'],
				+ li[data-sidebar-level='5'] {
					margin-top: 10px;
				}
				> .side {
					padding-left: 116px;
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
		left: calc(0px - var(--doc-menu-mobile-width));
		top: var(--doc-mobile-nav-height);
		display: block !important;
		width: var(--doc-menu-mobile-width);
		background-color: #fff;

		${e=>e.mobileMenuCollapsed&&"left: 0;"}
	}

	@media only screen and (min-width: 768px) {
		top: var(--doc-nav-height);
		width: var(--doc-site-menu-width);
		background: transparent;
	}
`,Oe=p.ul`
	li.slug-li {
		font-size: 14px;
		color: var(--doc-text);

		&[data-slug-level='3'] {
			padding-left: 12px;
		}

		&[data-slug-level='4'] {
			padding-left: 24px;
		}

		&[data-slug-level='5'] {
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
`;function Ee(e){const t=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--doc-nav-height"))||0;return e.parentElement.offsetTop-t-20}function Le(e,t,o){const n=window.scrollY;return 0===e&&0===n?[!0,null]:n<Ee(t)?[!1,null]:!o||n<Ee(o)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function ze(){const[e,t]=c.exports.useState(null);function o(){const e=[].slice.call(document.querySelectorAll(".header-anchor-a"));if(!(window.pageYOffset+window.innerHeight>=document.documentElement.scrollHeight))for(let o=0;o<e.length;o++){const n=e[o],i=e[o+1],[r,a]=Le(o,n,i);if(r)return window.history.replaceState(null,document.title,a||" "),void t(a)}}return c.exports.useEffect((()=>{const e=function(e,t){let o,n=!1;return()=>{o&&window.clearTimeout(o),n?o=window.setTimeout(e,t):(e(),n=!0,window.setTimeout((()=>{n=!1}),t))}}(o,300);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),[e,t]}function Se({slugs:e,className:t}){const[o,n]=ze();return x.exports.jsx(Oe,Object.assign({className:t},{children:e.map((e=>x.exports.jsx("li",Object.assign({className:"slug-li","data-slug-level":e.level,onClick:()=>e.link&&n(e.link)},{children:e.link?x.exports.jsx("a",Object.assign({href:e.link,className:""+(e.link===o?"active":"")},{children:e.text}),void 0):x.exports.jsx("span",{children:e.text},void 0)}),e.text)))}),void 0)}function _e(e,t){if(function(e){return!1===e||"auto"===e||Array.isArray(e)}(e))return e;t=Pe(t);for(const o in e)if(t.startsWith(Pe(o)))return e[o];return"auto"}function Ne(e){return e.reduce(((e,t)=>(t.link&&e.push({text:t.text,link:Me(t.link)}),function(e){return void 0!==e.children}(t)&&(e=[...e,...Ne(t.children)]),e)),[])}function Pe(e){return/^\//.test(e)?e:`/${e}`}function Me(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function $e(e,t){return void 0===t||t.startsWith("#")?t:k(e,t)}function Re(e){const t=j();return x.exports.jsx(Ae,Object.assign({hiddenMenus:0===e.sideBarItems.length,mobileMenuCollapsed:!e.mobileMenuCollapsed},{children:x.exports.jsxs("div",Object.assign({className:"menu-content"},{children:[t.themeConfig.nav&&x.exports.jsx("div",Object.assign({className:"mobile-area"},{children:x.exports.jsx("ul",Object.assign({className:"nav-list"},{children:t.themeConfig.nav.map((e=>"items"in e?x.exports.jsx("li",{children:x.exports.jsx(ke,{nav:e},void 0)},e.text):x.exports.jsx("li",{children:x.exports.jsx(je,{nav:e},void 0)},e.text)))}),void 0)}),void 0),x.exports.jsx("ul",Object.assign({className:"list"},{children:e.sideBarItems.map((e=>{const o=$e(t.base,e.link);return x.exports.jsxs("li",Object.assign({"data-sidebar-level":e.level},{children:[o?x.exports.jsx("a",Object.assign({href:o,className:""+(e.isActive?"active":"")},{children:e.text}),void 0):x.exports.jsx("p",{children:e.text},void 0),e.children&&e.children.length>0&&x.exports.jsx(Se,{className:"side",slugs:e.children},void 0)]}),e.text)}))}),void 0)]}),void 0)}),void 0)}function Te(e,t){if(void 0===e)return[];return e.filter((e=>e.level-1>~~t&&e.level>1)).map((e=>({text:e.title,link:`#${e.slug}`,level:e.level,isActive:!1})))}function Ie(e){return decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,"")}function De(e,t){if(void 0===t)return!1;return Ie(`/${e}`)===Ie(t)}function Ue(){const e=c.exports.useContext(C),t=j(),o=e.data.headers,n=e.data.frontmatter.sidebar,i=e.data.frontmatter.sidebarDepth;if(!1===n)return[];if("auto"===n)return Te(o,i);const r=_e(t.themeConfig.sidebar||"auto",e.data.relativePath);return!1===r?[]:"auto"===r?Te(o,i):function(e,t,o){let n=[...e],i=[];for(;0!==n.length;){const e=n.shift();let r={text:e.text,link:e.link,level:e._level?e._level:1,isActive:!1};De(t,e.link)&&(r.isActive=!0,r.children=o),i.push(r);const a=e.children;if(a)for(let t=a.length-1;t>=0;t--)n.unshift(l(s({},a[t]),{_level:e._level?e._level+1:2}))}return i}(r,e.data.relativePath,Te(o,i))}const Be=p.div`
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
`,Ve=/bitbucket.org/,He=/\/$/,Fe=/^[a-z]+:/i;function Qe(e){return Fe.test(e)}function We(e,t,o,n,i){return Ve.test(e)?function(e,t,o,n,i){return(Qe(t)?t:e).replace(He,"")+`/src/${n}/`+(o?o.replace(He,"")+"/":"")+i+`?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`}(e,t,o,n,i):function(e,t,o,n,i){return(Qe(t)?t:`https://github.com/${t}`).replace(He,"")+`/edit/${n}/`+(o?o.replace(He,"")+"/":"")+i}(0,t,o,n,i)}function qe(){const{themeConfig:e}=j(),t=Me(Pe(c.exports.useContext(C).data.relativePath)),o=_e(e.sidebar||"auto",t),n=Array.isArray(o)?Ne(o):[],i=n.findIndex((e=>e.link===t));let r=null;!1!==e.nextLink&&i>-1&&i<n.length-1&&(r=n[i+1]);let a=null;return!1!==e.prevLink&&i>0&&(a=n[i-1]),{next:r,prev:a,hasLinks:!!r||!!a}}function Je(){const{themeConfig:e,base:t}=j(),o=c.exports.useContext(C),{url:n,text:i}=function(){const{themeConfig:e}=j(),t=c.exports.useContext(C),o=null==t.data.frontmatter.editLink?e.editLinks:t.data.frontmatter.editLink,{repo:n,docsDir:i="",docsBranch:r="main",docsRepo:a=n}=e,{relativePath:s}=t.data;return{url:o&&s&&n?We(n,a,i,r,s):null,text:e.editLinkText||"Edit this page"}}(),{next:r,prev:a,hasLinks:s}=qe(),l=function(e){let t=new Date(e),o=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return o+"/"+(n<10?"0"+n:n)+"/"+(i<10?"0"+i:i)+" "+t.toTimeString().substr(0,8)}(o.data.lastUpdated);let d=function(e){const t=e.lastUpdated;return!0===t||void 0===t?"Last Updated":t}(e);return x.exports.jsxs(Be,{children:[x.exports.jsxs("div",Object.assign({className:"page-footer"},{children:[x.exports.jsx("div",Object.assign({className:"page-footer-edit"},{children:n&&x.exports.jsxs(x.exports.Fragment,{children:[x.exports.jsx("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:n},{children:i}),void 0),x.exports.jsx(fe,{},void 0)]},void 0)}),void 0),x.exports.jsx("div",Object.assign({className:"last-updated"},{children:d&&x.exports.jsxs(x.exports.Fragment,{children:[x.exports.jsxs("span",{children:[d,"："]},void 0),l]},void 0)}),void 0)]}),void 0),s&&x.exports.jsxs("div",Object.assign({className:"page-next-prev-link"},{children:[a?x.exports.jsxs("div",{children:[x.exports.jsx(ve,{},void 0),x.exports.jsx("a",Object.assign({href:$e(t,a.link)},{children:a.text}),void 0)]},void 0):x.exports.jsx("i",{},void 0),r?x.exports.jsxs("div",{children:[x.exports.jsx("a",Object.assign({href:$e(t,r.link)},{children:r.text}),void 0),x.exports.jsx(be,{},void 0)]},void 0):x.exports.jsx("i",{},void 0)]}),void 0)]},void 0)}const Ge=p.main`
	body {
		width: 100%;
		height: 100%;
		background: #48a9e6;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		margin: 0;
		padding: 0;
	}

	#title {
		text-align: center;
		font-size: 40px;
		margin-top: 40px;
		margin-bottom: -40px;
		position: relative;
		color: #fff;
	}

	.circles {
		background: #fff;
		text-align: center;
		position: relative;
		margin-top: -60px;
	}

	.circles p {
		font-size: 240px;
		color: #fff;
		padding-top: 60px;
		position: relative;
		z-index: 9;
		line-height: 100%;
	}

	.circles p small {
		font-size: 40px;
		line-height: 100%;
		vertical-align: top;
	}

	.circles .circle.small {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: #48a9e6;
		position: absolute;
		z-index: 1;
		top: 80px;
		left: 50%;
		animation: 7s smallmove infinite cubic-bezier(1, 0.22, 0.71, 0.98);
		animation-delay: 1.2s;
	}

	.circles .circle.med {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: #48a9e6;
		position: absolute;
		z-index: 1;
		top: 0;
		left: 10%;
		animation: 7s medmove infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);
		animation-delay: 0.4s;
	}

	.circles .circle.big {
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: #48a9e6;
		position: absolute;
		z-index: 1;
		top: 200px;
		right: 0;
		animation: 8s bigmove infinite;
		animation-delay: 3s;
	}

	@-webkit-keyframes smallmove {
		0% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 40%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
	}
	@keyframes smallmove {
		0% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 40%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
	}

	@-webkit-keyframes medmove {
		0% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 80%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
	}

	@keyframes medmove {
		0% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 80%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
	}

	@-webkit-keyframes bigmove {
		0% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
		25% {
			top: 100px;
			right: 40%;
			opacity: 0.4;
		}
		50% {
			top: 240px;
			right: 45%;
			opacity: 0.8;
		}
		75% {
			top: 100px;
			right: 35%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
	}
	@keyframes bigmove {
		0% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
		25% {
			top: 100px;
			right: 40%;
			opacity: 0.4;
		}
		50% {
			top: 240px;
			right: 45%;
			opacity: 0.8;
		}
		75% {
			top: 100px;
			right: 35%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
	}
`;const Ye=function(){const[e,t]=c.exports.useState(!0),{component:o}=c.exports.useContext(C),n=Ue();return x.exports.jsxs(ce,Object.assign({onClick:()=>{e||t(!0)}},{children:[x.exports.jsx(xe,{},void 0),x.exports.jsx(Ce,{onMobileMenuClick:e=>{t((e=>!e)),e.stopPropagation()}},void 0),x.exports.jsx(Re,{mobileMenuCollapsed:e,sideBarItems:n},void 0),x.exports.jsx(pe,Object.assign({hiddenMenus:0===n.length},{children:x.exports.jsx(O,{children:o?x.exports.jsxs(x.exports.Fragment,{children:[x.exports.jsx(o,{},void 0),x.exports.jsx(Je,{},void 0)]},void 0):null},void 0)}),void 0)]}),void 0)},Ke=function(){return x.exports.jsx(Ge,{children:x.exports.jsxs("div",Object.assign({className:"circles"},{children:[x.exports.jsxs("p",{children:["404",x.exports.jsx("br",{},void 0),x.exports.jsx("small",{children:"PAGE NOT FOUND"},void 0)]},void 0),x.exports.jsx("span",{className:"circle big"},void 0),x.exports.jsx("span",{className:"circle med"},void 0),x.exports.jsx("span",{className:"circle small"},void 0)]}),void 0)},void 0)},Xe={path:"/",component:null,data:null};function Ze(e,t){const[o,n]=c.exports.useState(Xe),i=c.exports.useRef(null);return c.exports.useEffect((()=>{function o(e=(y?window.location.href:t||"/")){const o=new URL(e,"http://a.com");return o.pathname.endsWith("/")||o.pathname.endsWith(".html")||(o.pathname+=".html",e=o.pathname+o.search+o.hash),y&&(window.history.replaceState({scrollPosition:window.scrollY},document.title),window.history.pushState(null,"",e)),r(e)}async function r(t,o=0){const r=new URL(t,"http://a.com"),a=i.current=r.pathname;try{let e=function(e){let t=e.replace(/\.html$/,"");t.endsWith("/")&&(t+="index");if(y){const e="/vitepress-rc/";t=t.slice(e.length).replace(/\//g,"_")+".md";const o=__VP_HASH_MAP__[t.toLowerCase()];t=`${e}assets/${t}.${o}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}(a),t=null;if(t=y?await K((()=>import(e)),void 0):require(e),i.current===a){i.current=null;const{default:e,__pageData:s}=t;if(!e)throw new Error(`Invalid route component: ${e}`);n({path:a,component:e,data:JSON.parse(s)}),y&&setTimeout((()=>{if(r.hash&&!o){const e=document.querySelector(decodeURIComponent(r.hash));if(e)return void et(e,r.hash)}window.scrollTo(0,o)}),200)}}catch(s){s.message.match(/fetch/)||console.error(s),i.current===a&&(i.current=null,n({path:a,component:e||null,data:null}))}}function a(e){const t=e.target.closest("a");if(t){const{href:n,protocol:i,hostname:r,pathname:a,hash:s,target:l}=t,d=window.location,c=a.match(/\.\w+$/);e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===l||i!==d.protocol||r!==d.hostname||c&&".html"!==c[0]||(e.preventDefault(),a===d.pathname?s&&s!==d.hash&&(window.history.pushState(null,"",s),et(t,s,t.classList.contains("header-anchor-a"))):o(n))}}function s(e){r(window.location.href,e.state&&e.state.scrollPosition||0)}function l(e){e.preventDefault()}return y&&(window.addEventListener("click",a,{capture:!0}),window.addEventListener("popstate",s),window.addEventListener("hashchange",l)),o(),()=>{y&&(window.removeEventListener("click",a,{capture:!0}),window.removeEventListener("popstate",s),window.removeEventListener("hashchange",l))}}),[]),{route:o}}function et(e,t,o=!1){const n=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--doc-nav-height"))||0,i=e.classList.contains(".header-anchor-a")?e:document.querySelector(decodeURIComponent(t));if(i){const e=i.offsetTop-n-15;!o||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}let tt=!0;function ot(e){if(tt)return void(tt=!1);const t=Array.from(document.querySelectorAll("meta"));t.forEach((e=>document.head.removeChild(e))),t.length=0,e&&e.length&&e.forEach((e=>{const o=function([e,t,o]){const n=document.createElement(e);for(const i in t)n.setAttribute(i,t[i]);o&&(n.innerHTML=o);return n}(e);document.head.appendChild(o),t.push(o)}))}function nt({ssrHref:e}){const{route:t}=Ze(Ke,e);return function(e){const t=j();c.exports.useEffect((()=>{if(!y)return;const o=e.data,n=o&&o.title,i=o&&o.description,r=o&&o.frontmatter.head;var a;document.title=(n?n+" | ":"")+t.title,ot([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:i||t.description}],...t.head,...r&&(a=r,a.filter((e=>{return!("meta"===(t=e)[0]&&t[1]&&"description"===t[1].name);var t})))||[]])}),[e.data,t])}(t),null===t.data?x.exports.jsx(x.exports.Fragment,{},void 0):x.exports.jsx(C.Provider,Object.assign({value:t},{children:x.exports.jsx(Ye,{},void 0)}),void 0)}export{nt as A};
