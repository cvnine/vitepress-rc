var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,a=(e,a)=>{for(var r in a||(a={}))t.call(a,r)&&i(e,r,a[r]);if(n)for(var r of n(a))o.call(a,r)&&i(e,r,a[r]);return e},r=(e,i)=>{var a={};for(var r in e)t.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&n)for(var r of n(e))i.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a};import{D as l,q as s,j as c,k as d,H as p,d as u,a as h,y as g,_ as m,$ as x}from"./vendor.618e093b.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const r=new URL(e,o);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){a(new Error(`Failed to import: ${e}`)),i(s)},onload(){n(self[t].moduleMap[r]),i(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/vitepress-rc/assets/");function f(){const[e,t]=l.useState(JSON.parse('{"lang":"zh-CN","title":"VitePress-rc","description":"Vite & React powered static site generator.","head":[],"base":"/vitepress-rc/","themeConfig":{"repo":"cvnine/vitepress-rc","docsDir":"docs","editLinks":true,"editLinkText":"在 GitHub 上编辑此页","lastUpdated":"最后更新时间","algolia":{"apiKey":"c57105e511faa5558547599f120ceeba","indexName":"vitepress"},"nav":[{"text":"Guide","link":"/","activeMatch":"^/$|^/guide/"},{"text":"Test","link":"/local/todo","activeMatch":"^/local/"},{"text":"Config Reference","link":"/config/basics","activeMatch":"^/config/"},{"text":"Release Notes","link":"https://github.com/vuejs/vitepress/releases"}],"sidebar":{"/guide/":[{"text":"Introduction","children":[{"text":"What is VitePress?","link":"/"},{"text":"Getting Started","link":"/guide/getting-started"},{"text":"Configuration","link":"/guide/configuration"},{"text":"Asset Handling","link":"/guide/assets"},{"text":"Markdown Extensions","link":"/guide/markdown"},{"text":"Deploying","link":"/guide/deploy"}]},{"text":"Advanced","children":[{"text":"Frontmatter","link":"/guide/frontmatter"},{"text":"Global Computed","link":"/guide/global-computed"},{"text":"Global Component","link":"/guide/global-component"},{"text":"Customization","link":"/guide/customization"},{"text":"Differences from Vuepress","link":"/guide/differences-from-vuepress"}]}],"/local/":[{"text":"Test","children":[{"text":"Todo List","link":"/local/todo"},{"text":"Difference","link":"/local/dif"}]}],"/config/":[{"text":"App Config","children":[{"text":"Basics","link":"/config/basics"}]},{"text":"Theme Config","children":[{"text":"Homepage","link":"/config/homepage"},{"text":"Algolia Search","link":"/config/algolia-search"},{"text":"Carbon Ads","link":"/config/carbon-ads"}]}],"/":[{"text":"Introduction","children":[{"text":"What is VitePress?","link":"/"},{"text":"Getting Started","link":"/guide/getting-started"},{"text":"Configuration","link":"/guide/configuration"},{"text":"Asset Handling","link":"/guide/assets"},{"text":"Markdown Extensions","link":"/guide/markdown"},{"text":"Deploying","link":"/guide/deploy"}]},{"text":"Advanced","children":[{"text":"Frontmatter","link":"/guide/frontmatter"},{"text":"Global Computed","link":"/guide/global-computed"},{"text":"Global Component","link":"/guide/global-component"},{"text":"Customization","link":"/guide/customization"},{"text":"Differences from Vuepress","link":"/guide/differences-from-vuepress"}]}]}}}'));return l.useEffect((()=>{}),[]),e}const v="undefined"!=typeof window;function b(e,t){return`${e}${t}`.replace(/\/+/g,"/")}const w=l.createContext({path:"/",component:null,data:null}),j=s.div`
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
`,y=e=>c.jsx(j,{children:c.jsx(d,Object.assign({components:{API:z,pre:e=>c.jsx("div",Object.assign({},e),void 0),code:H}},{children:e.children}),void 0)},void 0),k=s.table`
	margin-top: 24px;
`,C="属性名",A="描述",O="类型",E="默认值",L="(必选)",z=({export:e,identifier:t})=>{var n;const o=null!=(n=function(e="default",t){var n;if(!t)return null;let o=null,i=null;try{if(o=JSON.parse(null!=(n=t.replace(/%&%/g,'"'))?n:"{}"),i=o[e],!i)for(const e in o){i=o[e];break}}catch(a){}return i}(e,t))?n:null;return o&&c.jsxs(k,{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:C},void 0),c.jsx("th",{children:A},void 0),c.jsx("th",{children:O},void 0),c.jsx("th",{children:E},void 0)]},void 0)},void 0),c.jsx("tbody",{children:o.map((e=>{var t,n,o;return c.jsxs("tr",{children:[c.jsx("td",{children:e.identifier},void 0),c.jsx("td",{children:(null==(t=e.description)?void 0:t.replace(/%@%/g,'"'))||"--"},void 0),c.jsx("td",{children:c.jsx("code",{children:null==(n=e.type)?void 0:n.replace(/%@%/g,'"')},void 0)},void 0),c.jsx("td",{children:c.jsx("code",{children:(null==(o=e.default)?void 0:o.replace(/%@%/g,'"'))||e.required&&L||"--"},void 0)},void 0)]},e.identifier)}))},void 0)]},void 0)};const S=s.div`
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
`,_=s.div`
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
`,R=s.svg`
	color: #7f7c8e;
	cursor: pointer;
	&:hover {
		color: #555;
	}
`,N=({onClick:e})=>c.jsx("span",Object.assign({onClick:e,title:"复制"},{children:c.jsx(R,Object.assign({"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg","p-id":"799",viewBox:"0 0 1024 1024",width:"18",height:"18"},{children:c.jsx("path",{d:"M515.781628 328.34212l0 96.938819 86.571704 0L515.781628 328.34212zM614.882694 898.001331c6.27389-6.274914 10.251481-14.82566 10.251481-24.51944l0-396.306025L510.076696 477.175867l0 0c-12.530384 0-23.920806-5.134951-32.464389-13.687744l0 0c-7.973602-8.552793-13.109576-19.962657-13.109576-32.493042L464.502731 315.793316 228.683864 315.793316l0 0c-9.6815 0-18.225083 3.997034-24.490787 10.252505l0 0c-6.264681 6.294356-9.691733 14.826684-9.691733 24.51944l0 522.916631c0 9.69378 3.427052 18.244526 9.691733 24.51944 6.265704 6.275937 14.808264 10.270924 24.490787 10.270924l0 0 361.718275 0 0 0C600.07443 908.272255 608.627223 904.277268 614.882694 898.001331L614.882694 898.001331zM167.732677 289.555745c15.947204-15.387455 37.59934-25.079188 60.951187-25.079188l301.326836 0 2.858094 0 1.698688 1.719154 140.706649 161.364131 1.137916 1.13894 0 2.296299 0 442.48681c0 23.959691-9.691733 45.62206-25.058722 61.029982l0 0c-15.387455 15.385409-37.030381 25.078165-60.951187 25.078165l-361.718275 0c-23.350824 0-45.00296-9.692756-60.951187-25.078165-15.377222-15.407921-25.059745-37.07029-25.059745-61.029982L142.672932 350.565261C142.672932 326.623989 152.355455 305.540811 167.732677 289.555745L167.732677 289.555745zM716.859249 127.033231l0 96.957239 86.570681 0L716.859249 127.033231zM429.761486 63.166645l301.326836 0 2.858094 0 1.698688 2.278903 140.706649 160.823825 1.13894 1.699712 0 1.718131 0 442.507276c0 23.958668-9.691733 45.620014-25.060769 61.007469-15.966647 15.966647-37.030381 25.097608-60.951187 25.097608l0 0-60.391439 0.560772 0 0c-6.833639 0-13.668301-3.417843-18.226107-7.974625l0 0c-4.555759-4.555759-7.393387-10.829649-7.393387-18.243503l0 0c0-6.854105 2.836605-13.688767 7.393387-18.24555l0 0c4.556783-4.575202 11.392468-7.41283 18.226107-7.41283l0 0 60.391439 0 0 0c9.67229 0 18.226107-3.996011 24.480554-10.270924 6.274914-6.275937 10.253528-14.827707 10.253528-24.518417L826.21282 275.886421 711.16455 275.886421l0 0c-12.549827 0-23.941272-5.134951-32.473599-13.707187-8.552793-7.973602-13.668301-19.944238-13.668301-32.493042L665.022651 115.062596 429.761486 115.062596l0 0c-9.6815 0-18.226107 3.437286-24.490787 9.691733-6.274914 6.294356-10.260691 14.827707-10.260691 24.51944l0 60.468187c0 7.413853-2.847861 13.669324-7.404644 18.226107-4.556783 4.575202-10.821463 7.413853-18.226107 7.413853l0 0c-6.834662 0-13.668301-2.838651-18.225083-7.413853-4.555759-4.556783-7.40362-11.390421-7.40362-18.226107l0-60.468187c0-23.361057 9.682523-45.042869 25.058722-61.009516l0 0C384.757502 72.858378 405.84068 63.166645 429.761486 63.166645L429.761486 63.166645z","p-id":"800",fill:"currentColor"},void 0)}),void 0)}),void 0),M=()=>c.jsx("span",{children:c.jsx("svg",Object.assign({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2561",width:"18",height:"18"},{children:c.jsx("path",{d:"M951.629227 209.968106c4.562922 5.14109 7.402597 11.423167 7.402597 18.274202 0 3.420913-0.559748 6.841825-1.700735 9.701966-0.579191 1.710968-1.13894 2.850931-2.28095 3.990894l0.559748 0.571005-3.419889 4.001127L408.727427 809.944809l-1.700735 2.299369-0.580215 0c-1.700735 1.701758-3.981684 2.841721-6.262634 3.982708-2.860141 1.139963-6.261611 1.720178-9.701966 1.720178l0 0c-3.981684 0-6.842849-0.579191-10.244318-1.720178-2.860141-1.139963-5.721305-3.420913-8.001231-5.701862l0 0L70.006935 508.535085l0 0c-2.28095-2.28095-4.002151-5.140067-5.122671-8.562003l0 0c-1.720178-2.850931-2.28095-6.281053-2.28095-9.701966l0 0 0 0c0-7.42204 2.840698-13.703093 7.402597-18.274202 5.121648-4.561899 11.403724-7.42204 18.264992-7.42204l0 0c3.40147 0 6.841825 0.571005 10.244318 1.720178l0 0c2.859118 1.139963 5.720282 3.420913 8.001231 5.701862l0 0 283.405675 283.153942L914.558937 210.538087l5.700839-5.701862 0.560772 1.140986c1.140986-0.571005 1.720178-1.140986 2.28095-1.140986 3.420913-1.720178 6.842849-2.290159 10.283204-2.290159l0 0C940.787298 202.546066 947.068352 205.406207 951.629227 209.968106L951.629227 209.968106z","p-id":"2562",fill:"#1afa29"},void 0)}),void 0)},void 0),$=({onClick:e})=>c.jsx("span",Object.assign({onClick:e,title:"代码"},{children:c.jsx(R,Object.assign({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"939",width:"18",height:"18"},{children:c.jsx("path",{d:"M666.627 296.882c-12.496-12.497-12.496-32.758 0-45.255 12.497-12.496 32.758-12.496 45.255 0L949.47 489.215c12.497 12.497 12.497 32.758 0 45.255L711.882 772.058c-12.497 12.497-32.758 12.497-45.255 0-12.496-12.497-12.496-32.758 0-45.255L875.931 517.5a8 8 0 0 0 0-11.314L666.627 296.882zM147.167 517.5L356.47 726.803c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0L73.627 534.47c-12.496-12.497-12.496-32.758 0-45.255l237.588-237.588c12.497-12.496 32.758-12.496 45.255 0 12.497 12.497 12.497 32.758 0 45.255L147.167 506.186a8 8 0 0 0 0 11.314zM580.4 215.198c17.22 3.976 27.957 21.159 23.981 38.379L481.558 785.583c-3.975 17.22-21.158 27.957-38.378 23.981-17.22-3.975-27.957-21.158-23.982-38.378L542.022 239.18c3.975-17.22 21.158-27.957 38.378-23.982z","p-id":"940",fill:"currentColor"},void 0)}),void 0)}),void 0),P=({onClick:e})=>c.jsx("span",Object.assign({onClick:e,title:"重载"},{children:c.jsx(R,Object.assign({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3248",width:"18",height:"18"},{children:c.jsx("path",{d:"M258.56 681.36l-12.704 44.288a16 16 0 0 1-7.616 9.584l-24.752 13.712a14.464 14.464 0 0 1-20.928-16.64l38.128-132.96a11.136 11.136 0 0 1 13.76-7.632l132.976 38.128a14.464 14.464 0 0 1 3.04 26.56l-24.768 13.712a16 16 0 0 1-12.16 1.392l-42.016-12.048a264.112 264.112 0 0 0 468.112-41.76 14.288 14.288 0 0 1 3.296-4.912 263.424 263.424 0 0 0 16.768-92.784c0-90.496-45.536-170.368-114.96-217.92a264.112 264.112 0 0 0-393.808 118.8 14.336 14.336 0 0 1-17.968 8.16l-20.256-7.024a12.352 12.352 0 0 1-7.456-16.192A312.112 312.112 0 0 1 525.696 208c66.112 0 128.256 20.752 179.44 56.736a313.12 313.12 0 0 1 108.656 135.312 311.04 311.04 0 0 1 23.904 119.952c0 172.32-139.68 312-312 312v-0.208h-0.832c-110.96 0-210.768-59.296-266.304-150.432z","p-id":"3249",fill:"currentColor"},void 0)}),void 0)}),void 0);const T=()=>{const[e,t]=l.useState(),[n,o]=l.useState("ready");return[l.useCallback((n=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const i=document.getSelection();let a=!1;i.rangeCount>0&&(a=i.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(l){}n.remove(),a&&(i.removeAllRanges(),i.addRange(a)),o&&o.focus()}(n),o("copied"),clearTimeout(e),t(setTimeout((()=>{o("ready")}),2e3))}),[]),n]},I=({code:e,language:t,lineNumbers:n})=>{const[o,i]=T();return c.jsxs(S,{children:[c.jsx("span",Object.assign({className:"copy-icon"},{children:"ready"===i?c.jsx(N,{onClick:()=>o(e)},void 0):c.jsx(M,{},void 0)}),void 0),c.jsx(p,Object.assign({},u,{code:e,language:t,theme:void 0},{children:({className:e,style:t,tokens:o,getLineProps:i,getTokenProps:l})=>c.jsx("pre",Object.assign({className:e,style:a({},t)},{children:o.map(((e,t)=>{const o=n.some((([e,n])=>e&&n?t+1>=e&&t+1<=n:t+1===e)),a=i({line:e,key:t}),{className:s}=a,d=r(a,["className"]);return c.jsx("div",Object.assign({className:`${o?"highlighted "+s:s}`},d,{children:e.map(((e,t)=>c.jsx("span",Object.assign({},l({token:e,key:t})),t)))}),t)}))}),void 0)}),void 0)]},void 0)};var D={js:{"demo-c":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Input:e=>l.createElement("div",{style:{color:"red"}},l.createElement("input",null)),Button:e=>l.createElement(l.Fragment,null,l.createElement("div",{className:"dd"},"button"),l.createElement("img",{src:"/vitepress-rc/assets/line-numbers-desktop.cc304762.png",alt:""}))})},css:{}};function U({transform:e,compact:t}){let n=t?{padding:"0"}:{};return a(a({},e?{transform:"translate(0px, 0px)"}:{}),n)}const B=({code:e,local:t,codeOptions:n})=>{const[o,i]=l.useState(!1),[r,d]=l.useState(e),[p,u]=T();return l.useEffect((()=>{d(e)}),[e]),c.jsx(_,{children:c.jsxs(oe,Object.assign({code:r,local:t,scope:{js:a(a({},D.js),{react:l,"styled-components":s}),css:D.css}},{children:[c.jsx("div",Object.assign({className:"code-preview-wrap",style:U(n)},{children:c.jsx(le,{},void 0)}),void 0),c.jsxs("div",Object.assign({className:"code-actions"},{children:[c.jsx("div",{},void 0),c.jsxs("div",Object.assign({className:"code-actions--right"},{children:[c.jsx(P,{onClick:()=>d(e)},void 0),"ready"===u?c.jsx(N,{onClick:()=>p(r)},void 0):c.jsx(M,{},void 0),c.jsx($,{onClick:()=>i((e=>!e))},void 0)]}),void 0)]}),void 0),o&&c.jsx(c.Fragment,{children:c.jsx(S,Object.assign({className:"code-editor-wrap"},{children:c.jsx(ae,{className:"code-editor",onCodeChange:e=>{d(e)}},void 0)}),void 0)},void 0),c.jsx(re,{className:"code-error-wrap"},void 0)]}),void 0)},void 0)},V=/^language-([^{]*)({([\d,-]+)})*/;const H=e=>{var{children:t,className:n,live:o,transform:i,compact:a}=e;r(e,["children","className","live","transform","compact"]);const l=t.replace(/\n$/,""),[s,d]=function(e){var t,n,o;if(e){const i=null!=(t=V.exec(e))?t:[null,"js",null],a=null!=(o=null==(n=i[3])?void 0:n.split(",").map((e=>e.split("-").map((e=>parseInt(e,10))))))?o:[];return[i[1],a]}return["js",[]]}(n),p={transform:!!i,compact:!!a};if(o&&("jsx"===s||"tsx"===s)){let e="local"===o;return c.jsx(B,{code:l,local:e,codeOptions:p},void 0)}return c.jsx(I,{code:l,language:s,lineNumbers:d},void 0)},F=l.createContext({code:"",disabled:!1,error:"",onChange:()=>{}});let Q;const W={},q=function(e,t){if(!t)return e();if(void 0===Q){const e=document.createElement("link").relList;Q=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in W)return;W[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":Q,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};function J(e,t){for(let n=t;n<e.length;n++){const t=e[n];if("from"===t.value||"{"===t.value)break;if("}"===t.value)return!0}return!1}function G(e){return{result:"",imports:{},error:new SyntaxError(e)}}async function Y(e=!0){if(e)return l;{const e=new URL("//jspm.dev/react","https://a.com").href,{default:t}=await q((()=>__import__(e)),void 0);return t}}async function K(e=!0){if(e)return h;{const e=new URL("//jspm.dev/react-dom","https://a.com").href,{default:t}=await q((()=>__import__(e)),void 0);return t}}async function X(e=!0){if(e)return g;{const e=new URL("//jspm.dev/styled-components","https://a.com").href,{default:{StyleSheetManager:t}}=await q((()=>__import__(e)),void 0);return t}}function Z(e){const t=e.querySelector(".shadow-skeleton");t&&e.removeChild(t);const n=e.querySelector('style[data-shadow-skeleton="y"]');n&&e.removeChild(n)}const ee=async({Element:e,errorCallback:t,shadowRoot:n,cssText:o,local:i})=>{const[a,r,l]=await Promise.all([Y(i),K(i),X(i)]);class s extends a.Component{componentDidCatch(e){t(e)}render(){return"function"==typeof e?c.jsx(e,{},void 0):e}}if(n.current)try{Z(n.current);let e=n.current.querySelector(".react-render");e?r.unmountComponentAtNode(e):(e=document.createElement("div"),e.classList.add("react-render"),n.current.appendChild(e));let t=n.current.querySelector('style[data-shadow-style="y"]');t?t.textContent=o||"":(t=document.createElement("style"),t.setAttribute("data-shadow-style","y"),t.textContent=o||"",n.current.appendChild(t));let i=n.current.querySelector("div.shadow-sheet");i&&n.current.removeChild(i),i=document.createElement("div"),i.classList.add("shadow-sheet"),n.current.appendChild(i),r.render(c.jsx(l,Object.assign({target:i},{children:c.jsx(s,{},void 0)}),void 0),e)}catch(d){t(d)}};function te(e){return l.isValidElement(e)||"string"==typeof e||"number"==typeof e||"boolean"==typeof e||Array.isArray(e)}const ne=({code:e="",scope:t={},local:n=!0},o,i,r)=>{const l=e=>t=>{if(null!=t&&""!==t){if(te(t))return ee({Element:t,errorCallback:i,shadowRoot:r,cssText:e,local:n}),void o();if("function"==typeof t)if(function(e){try{Reflect.construct(String,[],e)}catch(t){return!1}return!0}(t)){if(t.prototype.isReactComponent)return ee({Element:t,errorCallback:i,shadowRoot:r,cssText:e,local:n}),void o()}else{const a=t();if(null!=a&&""!==a&&te(a))return ee({Element:t,errorCallback:i,shadowRoot:r,cssText:e,local:n}),void o()}i(new SyntaxError("`export default` must be called with valid JSX."))}else i(new SyntaxError("`export default` must be called with valid JSX."))};(async function({code:e,local:t,scope:n}){try{const i=new URL("//jspm.dev/gogocode@0.2.9","https://a.com").href,a=new URL("//jspm.dev/@babel/standalone","https://a.com").href,[{default:r},l]=await Promise.all([q((()=>__import__(i)),void 0),q((()=>__import__(a)),void 0)]);let s=e,c={},d={};r(s).find("import $_$1 from '$_$2'").each((e=>{let t=e.match[1].map((e=>{let t=e.node.loc;return{value:e.value,isDestructing:J(t.tokens,t.start.token+1)}})),n=e.match[2][0].value;(c[n]||(c[n]=[])).push(...t)}));const p=Object.entries(c);if(t)for(let e=0;e<p.length;e++){let[t,o]=p[e];if(n.js[t])for(const e of o)e.isDestructing?d[e.value]=n.js[t][e.value]:d[e.value]=n.js[t]}else try{const e=await Promise.all(p.map((e=>{let t;return t=e[0].startsWith("//")||e[0].startsWith("http")?new URL(`${e[0]}`,"https://a.com").href:new URL(`//jspm.dev/${e[0]}`,"https://a.com").href,q((()=>__import__(t)),void 0)})));for(let t=0;t<p.length;t++){let[,n]=p[t];for(const o of n)o.isDestructing?d[o.value]=e[t].default[o.value]:d[o.value]=e[t].default}}catch(o){return G("Failed to fetch dynamically imported module. Please check out your modules")}let u="",h=[];if(r(s).find("import '$_$'").each((e=>{let t=e.match[0][0].value;/\.css$/.test(t)&&h.push(t)})),t){let e=[];for(const[t,o]of Object.entries(n.css))e.push(o.default);u=e.join("\n")}else try{u=(await Promise.all(h.map((e=>fetch(`${e}`).then((e=>e.text())))))).join("\n")}catch(o){}const g=r(s).find("export default $_$");if(0===g.length)return G("`export default` must be called");if(g.length>1)return G("multiple `export default` error");let m=g[0].match[0][0].value;return s=r(s).replace("import '$_$'","").replace("export default $_$","").generate(),{result:l.transform(function(e,t){return[e,"","render(",t,")"].join("\n")}(s,m),{filename:"transformedCode.ts",presets:["react",["typescript",{isTSX:!0,allExtensions:!0}]]}).code,imports:d,cssText:u}}catch(i){return{result:"",imports:{},error:i}}})({code:e,local:n,scope:t}).then((({result:e,imports:t,error:n,cssText:o})=>{if(n)throw n;!function(e,t){const n=Object.keys(t),o=n.map((e=>t[e]));new Function(...n,e)(...o)}(e,a(a({},t),{render:l(o)}))})).catch((e=>{i(e)}))};function oe({code:e,local:t,scope:n,disabled:o,transformCode:i,children:a}){const[r,s]=l.useState(""),d=l.useRef(null),p=({code:e,scope:n,transformCode:o})=>{const i={code:o(e),scope:n,local:t},a=async e=>{if(s(e.toString()),d.current){const e=await K(t);Z(d.current);let n=d.current.querySelector(".react-render");n&&e.unmountComponentAtNode(n),d.current.innerHTML=""}},r=()=>{s(null)};try{ne(i,r,a,d)}catch(l){a(l)}};return l.useEffect((()=>{p({code:e,scope:n,transformCode:i})}),[e,t?n:null,i]),c.jsx(F.Provider,Object.assign({value:{code:e,disabled:o,shadowRoot:d,error:r,onChange:e=>{p({code:e,scope:n,transformCode:i})}}},{children:a}),void 0)}oe.defaultProps={disabled:!1,scope:{},local:!0,transformCode:e=>e};const ie=e=>{var{code:t,onChange:n,style:o,onCodeChange:i}=e,s=r(e,["code","onChange","style","onCodeChange"]);const[d,h]=l.useState(t);l.useEffect((()=>{h(t),i&&i(t)}),[t]);return c.jsx(m,Object.assign({value:d,highlight:e=>c.jsx(p,Object.assign({},u,{code:e,theme:void 0,language:"tsx"},{children:({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:i})=>c.jsx("div",Object.assign({className:e,style:a({},t)},{children:n.map(((e,t)=>c.jsx("div",Object.assign({},o({line:e,key:t}),{children:e.map(((e,t)=>c.jsx("span",Object.assign({},i({token:e,key:t})),t)))}),t)))}),void 0)}),void 0),onValueChange:e=>{h(e),n&&n(e),i&&i(e)},style:a({},o)},s),void 0)};function ae(e){return c.jsx(F.Consumer,{children:({code:t,disabled:n,onChange:o})=>c.jsx(ie,Object.assign({code:t,disabled:n,onChange:o},e),void 0)},void 0)}function re(e){return c.jsx(F.Consumer,{children:({error:t})=>t?c.jsx("pre",Object.assign({},e,{children:t}),void 0):null},void 0)}function le(e){var{Component:t}=e,n=r(e,["Component"]);return c.jsx(t,Object.assign({},n,{children:c.jsx(F.Consumer,{children:({shadowRoot:e})=>c.jsx("div",{ref:t=>{if(!e||e.current)return;const n=t.attachShadow({mode:"open"}),o=document.createElement("span");o.classList.add("shadow-skeleton");const i=document.createElement("style");i.setAttribute("data-shadow-skeleton","y"),i.textContent="\n\t\t\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\t\theight:20px;\n\t\t\t\t\t\t\t\t\tbackground: linear-gradient(90deg,hsla(0,0%,74.5%,.2) 25%,hsla(0,0%,50.6%,.24) 37%,hsla(0,0%,74.5%,.2) 63%);\n\t\t\t\t\t\t\t\t\tbackground-size: 400% 100%;\n\t\t\t\t\t\t\t\t\t-webkit-animation: ant-skeleton-loading 1.4s ease infinite;\n\t\t\t\t\t\t\t\t\tanimation: skeleton-loading 4s ease infinite;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t@keyframes skeleton-loading{\n\t\t\t\t\t\t\t\t\t0%{\n\t\t\t\t\t\t\t\t\t\tbackground-position:100% 50%;\n\t\t\t\t\t\t\t\t\t\twidth: 60%;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t50%{\n\t\t\t\t\t\t\t\t\t\tbackground-position:50% 50%;\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t100% {\n\t\t\t\t\t\t\t\t\t\tbackground-position:0 50%;\n\t\t\t\t\t\t\t\t\t\twidth: 60%;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",n.appendChild(i),n.appendChild(o),e.current=n}},void 0)},void 0)}),void 0)}le.defaultProps={Component:"div"};const se=s.div`
	box-sizing: border-box;
	min-height: 100vh;
`,ce=s.main`
	margin-left: ${e=>e.hiddenMenus?"0":"var(--doc-site-menu-width)"};
	padding-top: var(--doc-nav-height);

	@media (max-width: 767px) {
		margin-left: 0;
		padding-top: var(--doc-mobile-nav-height);
	}
`,de=x`
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

`,pe=s.div`
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
			margin-left: 40px;
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
				margin-left: 40px;
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
`,ue=s.a`
	font-weight: 500;
	font-size: 20px;
`,he=e=>c.jsx(ue,Object.assign({href:e.to},{children:e.children}),void 0),ge=s.svg`
	position: relative;
	top: -2px;
	display: inline-block;
	vertical-align: middle;
	color: #4d5164;
`,me=()=>c.jsxs(ge,Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},{children:[c.jsx("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},void 0),c.jsx("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},void 0)]}),void 0),xe=()=>c.jsx(ge,Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"15",height:"15"},{children:c.jsx("path",{fill:"currentColor",d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},void 0)}),void 0),fe=()=>c.jsx(ge,Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"15",height:"15"},{children:c.jsx("path",{fill:"currentColor",d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},void 0)}),void 0);function ve(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const be=({nav:e})=>{const{aProps:t,isExternal:n}=function(e){const t=l.useContext(w),n=f(),o=/^[a-z]+:/i.test(e.link),i=ve(`/${t.data.relativePath}`);let a=!1;if(e.activeMatch)a=new RegExp(e.activeMatch).test(i);else{const t=ve(b(n.base,e.link));a="/"===t?t===i:i.startsWith(t)}return{aProps:{className:a?"active":"",href:o?e.link:b(n.base,e.link),target:e.target||o?"_blank":void 0,rel:e.rel||o?"noopener noreferrer":void 0,"aria-label":e.ariaLabel},isExternal:o}}(e);return c.jsxs("a",Object.assign({},t,{children:[e.text," ",n&&c.jsx(me,{},void 0)]}),void 0)};function we(e){const t=f();return c.jsxs(pe,{children:[c.jsx("button",{className:"toggle",onClick:e.onMobileMenuClick},void 0),c.jsx(he,Object.assign({to:t.base},{children:t.title}),void 0),c.jsx("nav",{children:t.themeConfig.nav&&t.themeConfig.nav.map((e=>"items"in e?c.jsx(c.Fragment,{},void 0):c.jsx("span",{children:c.jsx(be,{nav:e},void 0)},e.text)))},void 0)]},void 0)}const je=s.div`
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
`,ye=s.ul`
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
`;function ke(e){const t=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--doc-nav-height"))||0;return e.parentElement.offsetTop-t-20}function Ce(e,t,n){const o=window.scrollY;return 0===e&&0===o?[!0,null]:o<ke(t)?[!1,null]:!n||o<ke(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Ae(){const[e,t]=l.useState(null);function n(){const e=[].slice.call(document.querySelectorAll(".header-anchor-a"));if(!(window.pageYOffset+window.innerHeight>=document.documentElement.scrollHeight))for(let n=0;n<e.length;n++){const o=e[n],i=e[n+1],[a,r]=Ce(n,o,i);if(a)return window.history.replaceState(null,document.title,r||" "),void t(r)}}return l.useEffect((()=>{const e=function(e,t){let n,o=!1;return()=>{n&&window.clearTimeout(n),o?n=window.setTimeout(e,t):(e(),o=!0,window.setTimeout((()=>{o=!1}),t))}}(n,300);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),[e,t]}function Oe({slugs:e,className:t}){const[n,o]=Ae();return c.jsx(ye,Object.assign({className:t},{children:e.map((e=>c.jsx("li",Object.assign({className:"slug-li","data-slug-level":e.level,onClick:()=>e.link&&o(e.link)},{children:e.link?c.jsx("a",Object.assign({href:e.link,className:""+(e.link===n?"active":"")},{children:e.text}),void 0):c.jsx("span",{children:e.text},void 0)}),e.text)))}),void 0)}function Ee(e,t){if(function(e){return!1===e||"auto"===e||Array.isArray(e)}(e))return e;t=ze(t);for(const n in e)if(t.startsWith(ze(n)))return e[n];return"auto"}function Le(e){return e.reduce(((e,t)=>(t.link&&e.push({text:t.text,link:Se(t.link)}),function(e){return void 0!==e.children}(t)&&(e=[...e,...Le(t.children)]),e)),[])}function ze(e){return/^\//.test(e)?e:`/${e}`}function Se(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function _e(e,t){return void 0===t||t.startsWith("#")?t:b(e,t)}function Re(e){const t=f();return c.jsx(je,Object.assign({hiddenMenus:0===e.sideBarItems.length,mobileMenuCollapsed:!e.mobileMenuCollapsed},{children:c.jsxs("div",Object.assign({className:"menu-content"},{children:[t.themeConfig.nav&&c.jsx("div",Object.assign({className:"mobile-area"},{children:c.jsx("ul",Object.assign({className:"nav-list"},{children:t.themeConfig.nav.map((e=>"items"in e?c.jsx(c.Fragment,{},void 0):c.jsx("li",{children:c.jsx(be,{nav:e},void 0)},e.text)))}),void 0)}),void 0),c.jsx("ul",Object.assign({className:"list"},{children:e.sideBarItems.map((e=>{const n=_e(t.base,e.link);return c.jsxs("li",Object.assign({"data-sidebar-level":e.level},{children:[n?c.jsx("a",Object.assign({href:n,className:""+(e.isActive?"active":"")},{children:e.text}),void 0):c.jsx("p",{children:e.text},void 0),e.children&&e.children.length>0&&c.jsx(Oe,{className:"side",slugs:e.children},void 0)]}),e.text)}))}),void 0)]}),void 0)}),void 0)}function Ne(e,t){if(void 0===e)return[];return e.filter((e=>e.level-1>~~t&&e.level>1)).map((e=>({text:e.title,link:`#${e.slug}`,level:e.level,isActive:!1})))}function Me(e){return decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,"")}function $e(e,t){if(void 0===t)return!1;return Me(`/${e}`)===Me(t)}function Pe(){const e=l.useContext(w),t=f(),n=e.data.headers,o=e.data.frontmatter.sidebar,i=e.data.frontmatter.sidebarDepth;if(!1===o)return[];if("auto"===o)return Ne(n,i);const r=Ee(t.themeConfig.sidebar||"auto",e.data.relativePath);return!1===r?[]:"auto"===r?Ne(n,i):function(e,t,n){let o=[...e],i=[];for(;0!==o.length;){const e=o.shift();let r={text:e.text,link:e.link,level:e._level?e._level:1,isActive:!1};$e(t,e.link)&&(r.isActive=!0,r.children=n),i.push(r);const l=e.children;if(l)for(let t=l.length-1;t>=0;t--)o.unshift(a(a({},l[t]),{_level:e._level?e._level+1:2}))}return i}(r,e.data.relativePath,Ne(n,i))}const Te=s.div`
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
`,Ie=/bitbucket.org/,De=/\/$/,Ue=/^[a-z]+:/i;function Be(e){return Ue.test(e)}function Ve(e,t,n,o,i){return Ie.test(e)?function(e,t,n,o,i){return(Be(t)?t:e).replace(De,"")+`/src/${o}/`+(n?n.replace(De,"")+"/":"")+i+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}(e,t,n,o,i):function(e,t,n,o,i){return(Be(t)?t:`https://github.com/${t}`).replace(De,"")+`/edit/${o}/`+(n?n.replace(De,"")+"/":"")+i}(0,t,n,o,i)}function He(){const{themeConfig:e}=f(),t=Se(ze(l.useContext(w).data.relativePath)),n=Ee(e.sidebar||"auto",t),o=Array.isArray(n)?Le(n):[],i=o.findIndex((e=>e.link===t));let a=null;!1!==e.nextLink&&i>-1&&i<o.length-1&&(a=o[i+1]);let r=null;return!1!==e.prevLink&&i>0&&(r=o[i-1]),{next:a,prev:r,hasLinks:!!a||!!r}}function Fe(){const{themeConfig:e,base:t}=f(),n=l.useContext(w),{url:o,text:i}=function(){const{themeConfig:e}=f(),t=l.useContext(w),n=null==t.data.frontmatter.editLink?e.editLinks:t.data.frontmatter.editLink,{repo:o,docsDir:i="",docsBranch:a="main",docsRepo:r=o}=e,{relativePath:s}=t.data;return{url:n&&s&&o?Ve(o,r,i,a,s):null,text:e.editLinkText||"Edit this page"}}(),{next:a,prev:r,hasLinks:s}=He(),d=function(e){let t=new Date(e),n=t.getFullYear(),o=t.getMonth()+1,i=t.getDate();return n+"/"+(o<10?"0"+o:o)+"/"+(i<10?"0"+i:i)+" "+t.toTimeString().substr(0,8)}(n.data.lastUpdated);let p=function(e){const t=e.lastUpdated;return!0===t||void 0===t?"Last Updated":t}(e);return c.jsxs(Te,{children:[c.jsxs("div",Object.assign({className:"page-footer"},{children:[c.jsx("div",Object.assign({className:"page-footer-edit"},{children:o&&c.jsxs(c.Fragment,{children:[c.jsx("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:o},{children:i}),void 0),c.jsx(me,{},void 0)]},void 0)}),void 0),c.jsx("div",Object.assign({className:"last-updated"},{children:p&&c.jsxs(c.Fragment,{children:[c.jsxs("span",{children:[p,"："]},void 0),d]},void 0)}),void 0)]}),void 0),s&&c.jsxs("div",Object.assign({className:"page-next-prev-link"},{children:[r?c.jsxs("div",{children:[c.jsx(xe,{},void 0),c.jsx("a",Object.assign({href:_e(t,r.link)},{children:r.text}),void 0)]},void 0):c.jsx("i",{},void 0),a?c.jsxs("div",{children:[c.jsx("a",Object.assign({href:_e(t,a.link)},{children:a.text}),void 0),c.jsx(fe,{},void 0)]},void 0):c.jsx("i",{},void 0)]}),void 0)]},void 0)}const Qe=s.main`
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
`;const We=function(){const[e,t]=l.useState(!0),{component:n}=l.useContext(w),o=Pe();return c.jsxs(se,Object.assign({onClick:()=>{e||t(!0)}},{children:[c.jsx(de,{},void 0),c.jsx(we,{onMobileMenuClick:e=>{t((e=>!e)),e.stopPropagation()}},void 0),c.jsx(Re,{mobileMenuCollapsed:e,sideBarItems:o},void 0),c.jsx(ce,Object.assign({hiddenMenus:0===o.length},{children:c.jsx(y,{children:n?c.jsxs(c.Fragment,{children:[c.jsx(n,{},void 0),c.jsx(Fe,{},void 0)]},void 0):null},void 0)}),void 0)]}),void 0)},qe=function(){return c.jsx(Qe,{children:c.jsxs("div",Object.assign({className:"circles"},{children:[c.jsxs("p",{children:["404",c.jsx("br",{},void 0),c.jsx("small",{children:"PAGE NOT FOUND"},void 0)]},void 0),c.jsx("span",{className:"circle big"},void 0),c.jsx("span",{className:"circle med"},void 0),c.jsx("span",{className:"circle small"},void 0)]}),void 0)},void 0)},Je={path:"/",component:null,data:null};function Ge(e,t){const[n,o]=l.useState(Je),i=l.useRef(null);return l.useEffect((()=>{function n(e=(v?window.location.href:t||"/")){const n=new URL(e,"http://a.com");return n.pathname.endsWith("/")||n.pathname.endsWith(".html")||(n.pathname+=".html",e=n.pathname+n.search+n.hash),v&&(window.history.replaceState({scrollPosition:window.scrollY},document.title),window.history.pushState(null,"",e)),a(e)}async function a(t,n=0){const a=new URL(t,"http://a.com"),r=i.current=a.pathname;try{let e=function(e){let t=e.replace(/\.html$/,"");t.endsWith("/")&&(t+="index");if(v){const e="/vitepress-rc/";t=t.slice(e.length).replace(/\//g,"_")+".md";const n=__VP_HASH_MAP__[t.toLowerCase()];t=`${e}assets/${t}.${n}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}(r),t=null;if(t=v?await q((()=>__import__(e)),void 0):require(e),i.current===r){i.current=null;const{default:e,__pageData:l}=t;if(!e)throw new Error(`Invalid route component: ${e}`);o({path:r,component:e,data:JSON.parse(l)}),v&&setTimeout((()=>{if(a.hash&&!n){const e=document.querySelector(decodeURIComponent(a.hash));if(e)return void Ye(e,a.hash)}window.scrollTo(0,n)}),200)}}catch(l){l.message.match(/fetch/)||console.error(l),i.current===r&&(i.current=null,o({path:r,component:e||null,data:null}))}}function r(e){const t=e.target.closest("a");if(t){const{href:o,protocol:i,hostname:a,pathname:r,hash:l,target:s}=t,c=window.location,d=r.match(/\.\w+$/);e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===s||i!==c.protocol||a!==c.hostname||d&&".html"!==d[0]||(e.preventDefault(),r===c.pathname?l&&l!==c.hash&&(window.history.pushState(null,"",l),Ye(t,l,t.classList.contains("header-anchor-a"))):n(o))}}function l(e){a(window.location.href,e.state&&e.state.scrollPosition||0)}function s(e){e.preventDefault()}return v&&(window.addEventListener("click",r,{capture:!0}),window.addEventListener("popstate",l),window.addEventListener("hashchange",s)),n(),()=>{v&&(window.removeEventListener("click",r,{capture:!0}),window.removeEventListener("popstate",l),window.removeEventListener("hashchange",s))}}),[]),{route:n}}function Ye(e,t,n=!1){const o=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--doc-nav-height"))||0,i=e.classList.contains(".header-anchor-a")?e:document.querySelector(decodeURIComponent(t));if(i){const e=i.offsetTop-o-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}let Ke=!0;function Xe(e){if(Ke)return void(Ke=!1);const t=Array.from(document.querySelectorAll("meta"));t.forEach((e=>document.head.removeChild(e))),t.length=0,e&&e.length&&e.forEach((e=>{const n=function([e,t,n]){const o=document.createElement(e);for(const i in t)o.setAttribute(i,t[i]);n&&(o.innerHTML=n);return o}(e);document.head.appendChild(n),t.push(n)}))}function Ze({ssrHref:e}){const{route:t}=Ge(qe,e);return function(e){const t=f();l.useEffect((()=>{if(!v)return;const n=e.data,o=n&&n.title,i=n&&n.description,a=n&&n.frontmatter.head;var r;document.title=(o?o+" | ":"")+t.title,Xe([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:i||t.description}],...t.head,...a&&(r=a,r.filter((e=>{return!("meta"===(t=e)[0]&&t[1]&&"description"===t[1].name);var t})))||[]])}),[e.data,t])}(t),null===t.data?c.jsx(c.Fragment,{},void 0):c.jsx(w.Provider,Object.assign({value:t},{children:c.jsx(We,{},void 0)}),void 0)}export{Ze as A};
