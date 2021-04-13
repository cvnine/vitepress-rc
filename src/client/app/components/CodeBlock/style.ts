import styled from 'styled-components'

export const CodeViewWrap = styled.div`
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
`
export const PreviewerWarp = styled.div`
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
`
