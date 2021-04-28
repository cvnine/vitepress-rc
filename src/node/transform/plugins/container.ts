import visit from 'unist-util-visit'
import type { IPluginTransformer } from '../index'
import type { Node } from 'unist'

interface PluginProps {
	id: string
}

type NodeWithChildren = Node & { children: NodeWithChildren[] }

type TYPE = 'tip' | 'warning' | 'danger'

// const reg = /^\s*:::\s*(\w+)(.*?)[\n\r]([\s\S]+?)\s*:::\s*?/
const reg = /^:::[ \t]+(tip|warning|danger)(.*)/
const selfReg = /^:::[ \t]+((tip|warning|danger)+)(.*?)[\n\r]([\s\S]+?)[\n\r]:::$/

const endReg = /([\s\S]*)[\n\r]:::$/

const TypeMap: Record<TYPE, string> = {
	tip: 'TIP',
	warning: 'WARNING',
	danger: 'WARNING',
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'root', function visitor(node: NodeWithChildren) {
			if (node.children) {
				let i = 0
				while (i < node.children.length) {
					let item = node.children[i]
					if (
						item.type === 'paragraph' &&
						item.children &&
						item.children[0] &&
						item.children[0].type === 'text'
					) {
						let str = item.children[0].value as string
						let match = str.match(reg)
						if (match) {
							let selfHas = str.match(selfReg)
							if (selfHas) {
								const type = selfHas[1] as TYPE
								const title = selfHas[3] === '' ? TypeMap[type] : selfHas[3].toUpperCase()
								const content = selfHas[4].trim()

								node.children.splice(i, 1, {
									type: 'container',
									children: [
										{
											type: 'text',
											value: title,
											children: [],
											data: {
												hProperties: {
													className: ['remark-container-title'],
												},
											},
										},
										{
											type: 'container-content',
											children: [
												{
													type: 'text',
													children: [],
													value: content,
												},
											],
											data: {
												hProperties: {
													className: ['remark-container-content'],
												},
											},
										},
									],
									data: {
										hName: 'div',
										hProperties: {
											className: ['remark-container', `remark-container-${type}`],
										},
									},
								})
							} else {
								//结束标签在后方 node节点，分三种情况，在子级里带 \r\n:::，父级里带 \r\n:::，直接父级里 startsWith :::
								if (item.children.length > 1) {
								} else {
								}
							}

							//结束标签在子级里带 \r\n:::
							let lastChildValue = item.children[item.children.length - 1].value as string
							if (lastChildValue.match(endReg)) {
							} else {
							}
						}
					}
				}
			}
		})
	}
}
