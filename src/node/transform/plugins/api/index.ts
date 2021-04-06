import { IPluginTransformer } from '../../index'
import visit from 'unist-util-visit'
import path from 'path'
import fs from 'fs-extra'
import Parser from './parse'
import { Alias } from 'vite'

interface PluginProps {
	id: string
	alias: Alias[]
}

interface Attributes {
	type: 'mdxJsxAttribute'
	name: string
	value: string
}

export default function plugin({ id, alias }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'mdxJsxFlowElement', function visitor(node) {
			if (node.name === 'API') {
				if (node.attributes) {
					let attributes = node.attributes as Attributes[]

					const itemSrc = attributes.find((x) => x.name === 'src')

					let componentPath = itemSrc?.value
					if (!componentPath) {
						componentPath = path.resolve(path.parse(id).dir, './index')
					}

					const filePath = getParseFilePath({ id, alias }, itemSrc?.value)

					if (filePath) {
						let docgen = null

						try {
							docgen = Parser(filePath)
						} catch (err) {
							console.log('error : ', err)
						}

						if (docgen) {
							let parseDocgen = {} as any
							for (const key in docgen) {
								parseDocgen[key] = docgen[key].map((gen) => {
									return {
										identifier: replaceMarks(gen.identifier),
										type: replaceMarks(gen.type),
										description: replaceMarks(gen.description),
										required: replaceMarks(gen.required),
										defaultValue: replaceMarks(gen.defaultValue),
									}
								})
							}

							;(node.attributes as Attributes[]).push({
								type: 'mdxJsxAttribute',
								name: 'identifier',
								value: JSON.stringify(parseDocgen).replace(/"/g, "'"),
							})
						}
					}
				}
			}
		})
	}
}

function getParseFilePath({ id, alias }: PluginProps, src?: string) {
	let componentPath = src
	if (!componentPath) {
		componentPath = path.resolve(path.parse(id).dir, './index')
		let filePath = isExist(id, componentPath)
		return filePath
	} else {
		let filePath = isExist(id, componentPath)
		if (filePath) {
			return filePath
		} else {
			for (const item of alias) {
				if (typeof item.find === 'string') {
					filePath = isExist(item.replacement, componentPath.replace(item.find, item.replacement))
					if (filePath) {
						return filePath
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

/**
 *  bug with esbuild
 *  see: https://github.com/evanw/esbuild/issues/1115
 */
function replaceMarks(val: any) {
	if (val) {
		return `${val}`.replace(/"|'/g, '`')
	}
	return ''
}
