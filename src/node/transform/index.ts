//fork from vite-plugin-mdx
import esbuild from 'esbuild'
import mdx from '@mdx-js/mdx'
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
	code_es2019 = code_es2019.replace(
		'export default function MDXContent',
		'export default MDXContent; function MDXContent'
	)

	return code_es2019
}

function injectImports(code_es2019: string) {
	return [`import React from 'react'`, `import { mdx } from '@mdx-js/react'`, '', code_es2019].join('\n')
}

async function mdxTransform(code_mdx: string, id: string, userPlugin?: MdxVitePluginOption) {
	//预处理
	code_mdx = code_mdx + `<TEMP_MDX_ABSOLUTE_PATH path="${slash(id)}" />`

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

	const code_jsx = await mdx(code_mdx, {
		remarkPlugins: [remarkFrontmatter, remarkParseYaml, remarkSlug, remarkTable, ...(userRemarkPlugins ?? [])],
		rehypePlugins: [...(userRehypePlugins ?? [])],
	})
	const code_es2019 = await jsxToES2019(code_jsx)
	const code_final = injectImports(code_es2019)
	return code_final
}

export { mdxTransform }
