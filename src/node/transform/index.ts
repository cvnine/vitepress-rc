//fork from vite-plugin-mdx
import * as esbuild from 'esbuild'
import { createCompiler } from '@mdx-js/mdx'
import remarkTable from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParseYaml from 'remark-parse-yaml'
import remarkSlug from 'remark-slug'
import slash from 'slash'
import { MdxVitePluginOption } from '../../types/types'

async function jsxToES2019(code_jsx: string) {
	// We use `esbuild` ourselves instead of letting Vite doing the esbuild transform,
	// because there don't seem to be a way to change the esbuild options for specific
	// files only: https://vitejs.dev/config/#esbuild

	let { code: code_es2019 } = await esbuild.transform(code_jsx, {
		loader: 'jsx',
		jsxFactory: 'mdx',
		target: 'es2019',
	})

	// TODO stabilize this bugfix
	// code_es2019 = code_es2019.replace(
	// 	'export default function MDXContent',
	// 	'export default MDXContent; function MDXContent'
	// )

	return code_es2019
}

function injectImports(code_es2019: string, pageData: object) {
	return [
		`import React from 'react'`,
		`import { mdx } from '@mdx-js/react'`,
		'',
		code_es2019,
		'',
		`export const __pageData = ${JSON.stringify(JSON.stringify(pageData))}`,
	].join('\n')
}

async function mdxTransform(code_mdx: string, id: string, userPlugin?: MdxVitePluginOption) {
	const userRemarkPlugins = userPlugin?.remarkPlugins
		?.map((x) => {
			if (typeof x === 'function') {
				return (x as Function).bind(undefined, id)
			}
			return null
		})
		.filter(Boolean)

	const userRehypePlugins = userPlugin?.rehypePlugins
		?.map((x) => {
			if (typeof x === 'function') {
				return (x as Function).bind(undefined, id)
			}
			return null
		})
		.filter(Boolean)

	const code_vFile = await createCompiler({
		remarkPlugins: [remarkFrontmatter, remarkParseYaml, remarkSlug, remarkTable, ...(userRemarkPlugins ?? [])],
		rehypePlugins: [...(userRehypePlugins ?? [])],
	}).process(code_mdx)

	let pageData = {
		title: 'string',
		relativePath: 'string',
		description: 'string',
		navs: [],
		frontmatter: {},
		lastUpdated: 21312,
	}

	const code_es2019 = await jsxToES2019(String(code_vFile))
	const code_final = injectImports(code_es2019, pageData)
	return { code: code_final, pageData }
}

export { mdxTransform }
