import visit from 'unist-util-visit'
import path from 'path'
import fs from 'fs-extra'
import Parser from './parse'
import fromMarkdown from 'mdast-util-from-markdown'
import syntax from 'micromark-extension-mdxjs'
import mdx from 'mdast-util-mdx'
import slash from 'slash'
import { cacher } from '../../utils/cache'
import type { Alias } from 'vite'
import type { IPluginTransformer } from '../../index'

interface PluginProps {
	id: string
	alias: Alias[]
	docgen: { [key: string]: any }
}

interface Attributes {
	type: 'mdxJsxAttribute'
	name: string
	value: string
}

function getParseFilePath({ id, alias }: Pick<PluginProps, 'id' | 'alias'>, src?: string) {
	let componentPath = src
	if (!componentPath) {
		componentPath = path.resolve(path.parse(id).dir, './index')
		let filePath =
			isExist(id, `${componentPath}.tsx`) ||
			isExist(id, `${componentPath}.jsx`) ||
			isExist(id, `${componentPath}.ts`) ||
			isExist(id, `${componentPath}.js`)
		return filePath ? slash(filePath) : null
	} else {
		let filePath = isExist(id, componentPath)
		if (filePath) {
			return slash(filePath)
		} else {
			for (const item of alias) {
				if (typeof item.find === 'string') {
					filePath = isExist(item.replacement, componentPath.replace(item.find, item.replacement))
					if (filePath) {
						return slash(filePath)
					}
				}
			}
			return null
		}
	}
}

function isExist(id: string, componentPath: string) {
	let filePath = path.resolve(path.parse(id).dir, componentPath)

	if (fs.existsSync(filePath)) {
		return filePath
	} else {
		return null
	}
}

export default function plugin({ id, alias, docgen: docgenOptions }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		let filePaths: string[] = []

		visit(tree, 'mdxJsxFlowElement', function visitor(node: any, i, parent) {
			if (node.name === 'API') {
				if (node.attributes) {
					let attributes = node.attributes as Attributes[]

					const itemSrc = attributes.find((x) => x.name === 'src')

					const filePath = getParseFilePath({ id, alias }, itemSrc?.value)

					if (filePath) {
						let docgen = null

						try {
							//测试时编译耗时近 3s，内置缓存
							docgen = Parser(filePath, docgenOptions)
						} catch (err) {
							console.log('error : ', err)
						}

						if (docgen) {
							;(node.attributes as Attributes[]).push({
								type: 'mdxJsxAttribute',
								name: 'identifier',

								/**
								 *  bugs here
								 *  see: https://github.com/mdx-js/mdx/issues/1513
								 */
								value: JSON.stringify(docgen).replace(/\\"/g, '%@%').replace(/"/g, '%&%'),
							})

							//for hmr
							const importNode = fromMarkdown(`import "${slash(filePath)}"`, {
								extensions: [syntax()],
								mdastExtensions: [mdx.fromMarkdown],
							})

							parent?.children.splice(i + 1, 0, importNode.children[0])

							filePaths.push(filePath)
						}
					}
				}
			}
		})

		cacher.setHmrCache(id, [...new Set(filePaths)])
	}
}
