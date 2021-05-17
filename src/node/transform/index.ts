//fork from vite-plugin-mdx
import * as esbuild from 'esbuild'
import { createCompiler } from '@mdx-js/mdx'
import remarkTable from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParseYaml from 'remark-parse-yaml'
import remarkSlug from 'remark-slug'
import remarkEmoji from 'remark-emoji'
import slash from 'slash'
import path from 'path'
import fs from 'fs-extra'
import pluginFrontmatter from './plugins/frontmatter'
import pluginHeaders from './plugins/headers'
import pluginLink from './plugins/link'
import pluginApi from './plugins/api'
import pluginContainer from './plugins/container'
import pluginWrapper from './plugins/wrapper'
import pluginImg from './plugins/img'
import { deeplyParseHeader } from './utils'
import type { Plugin, Transformer } from 'unified'
import type { HeadConfig, Header, MdxVitePluginOption, SiteConfig } from '@vitepress-rc/types'

type ExcludesFalse = <T>(x: T | false) => x is T

export interface VFileData {
	frontmatter: { [key: string]: any }
	headers: Header[]
}

export type IPluginTransformer = (
	node: Parameters<Transformer>[0],
	vFile: Parameters<Transformer>[1] & { data: VFileData },
	next?: Parameters<Transformer>[2]
) => ReturnType<Transformer>

async function jsxToES2019(code_jsx: string) {
	// We use `esbuild` ourselves instead of letting Vite doing the esbuild transform,
	// because there don't seem to be a way to change the esbuild options for specific
	// files only: https://vitejs.dev/config/#esbuild

	let { code: code_es2019 } = await esbuild.transform(code_jsx, {
		loader: 'jsx',
		jsxFactory: 'mdx',
		target: 'es2019',
	})

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

function inferTitle(frontmatter: Record<string, any>, headers: Header[]) {
	if (frontmatter.home) {
		return 'Home'
	}
	if (frontmatter.title) {
		return deeplyParseHeader(frontmatter.title)
	}
	const match = headers[0]
	if (match) {
		return match.title
	}
	return ''
}

function inferDescription(frontmatter: Record<string, any>) {
	const { description, head } = frontmatter

	if (description !== undefined) {
		return description
	}

	return (head && getHeadMetaContent(head, 'description')) || ''
}

function getHeadMetaContent(head: HeadConfig[], name: string): string | undefined {
	if (!head || !head.length) {
		return undefined
	}

	const meta = head.find(([tag, attrs = {}]) => {
		return tag === 'meta' && attrs.name === name && attrs.content
	})

	return meta && meta[1].content
}

async function mdxTransform(
	code_mdx: string,
	id: string,
	{ root, alias, siteData }: Pick<SiteConfig, 'root' | 'alias' | 'siteData'>,
	{ plugin: userPlugin, docgen }: Pick<SiteConfig, 'md'>['md']
) {
	const userRemarkPlugins = (userPlugin?.remarkPlugins
		?.map((x) => {
			if (Array.isArray(x)) {
				return [x[0], { ...x[1], id, root, alias, siteData }]
			}
			if (typeof x === 'function') {
				return [x, { id, root, alias, siteData }]
			}
			return false
		})
		.filter(Boolean as any as ExcludesFalse) ?? []) as any as Plugin[]

	const userRehypePlugins = (userPlugin?.rehypePlugins
		?.map((x) => {
			if (Array.isArray(x)) {
				return [x[0], { ...x[1], id, root, alias, siteData }]
			}
			if (typeof x === 'function') {
				return [x, { id, root, alias, siteData }]
			}
			return false
		})
		.filter(Boolean as any as ExcludesFalse) ?? []) as any as Plugin[]

	const code_vFile = await createCompiler({
		remarkPlugins: [
			remarkFrontmatter,
			remarkParseYaml,
			remarkSlug,
			remarkTable,
			remarkEmoji,
			pluginFrontmatter,
			pluginHeaders,
			pluginLink,
			[pluginApi, { id, alias, docgen }],
			pluginContainer,
			...userRemarkPlugins,
		],
		rehypePlugins: [pluginWrapper as any, [pluginImg, { id, root, siteData }], ...userRehypePlugins],
	}).process(code_mdx)

	const _data = code_vFile.data as VFileData

	let _frontmatter = _data.frontmatter ?? {}
	let _headers = _data.headers ?? []

	let pageData = {
		title: inferTitle(_frontmatter, _headers),
		description: inferDescription(_frontmatter),

		relativePath: slash(path.relative(root, id)),
		headers: _headers,
		frontmatter: _frontmatter,
		lastUpdated: Math.round(fs.statSync(id).mtimeMs),
	}

	const code_es2019 = await jsxToES2019(String(code_vFile))
	const code_final = injectImports(code_es2019, pageData)
	return { code: code_final, pageData }
}

export { mdxTransform }
