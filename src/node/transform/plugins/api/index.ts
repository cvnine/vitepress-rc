import { IPluginTransformer } from '../../index'
import visit from 'unist-util-visit'
import path from 'path'
import Parser, { ApiProp } from './parse'

interface PluginProps {
	id: string
}

interface IhProperties {
	[key: string]: any
}

interface Attributes {
	type: 'mdxJsxAttribute'
	name: string
	value: string
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
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

					let docgen = null

					try {
						docgen = Parser(path.resolve(path.parse(id).dir, componentPath))
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

						console.log('JSON.stringify(parseDocgen) :>> ', JSON.stringify(parseDocgen))
						console.log('JSON.stringify(parseDocgen) :>> ', node.attributes)
						// ;(node.attributes as Attributes[]).push({
						// 	type: 'mdxJsxAttribute',
						// 	name: 'identifier',
						// 	value: parseDocgen,
						// })

						// const itemExport = attributes.find((x) => x.name === 'export')

						// let ApiExport: ApiProp[] = []

						// if (itemExport?.value && docgen[itemExport.value]) {
						// 	ApiExport = docgen[itemExport.value]
						// } else {
						// 	for (const key in docgen) {
						// 		ApiExport = docgen[key]
						// 		break
						// 	}
						// }

						// node.children = ApiExport.map((gen) => {
						// 	let _identifier = gen.identifier.replace(/"|'/g, '`')
						// 	let _description = gen.description?.replace(/"|'/g, '`') ?? ''
						// 	let _type = gen.type.replace(/"|'/g, '`')
						// 	let _required = `${gen.required}`.replace(/"|'/g, '`')

						// 	return {
						// 		type: 'mdxJsxFlowElement',
						// 		name: 'APINodes',
						// 		attributes: [
						// 			{ type: 'mdxJsxAttribute', name: 'identifier', value: _identifier },
						// 			{ type: 'mdxJsxAttribute', name: 'description', value: _description },
						// 			{ type: 'mdxJsxAttribute', name: 'type', value: _type },
						// 			{ type: 'mdxJsxAttribute', name: 'required', value: _required },
						// 		],
						// 		children: [],
						// 	}
						// })
					}
				}
			}
		})
	}
}

function replaceMarks(val: any) {
	if (val) {
		return `${val}`.replace(/"|'/g, '`')
	}
	return ''
}
