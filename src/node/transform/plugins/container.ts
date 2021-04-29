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
// const selfReg = /^:::[ \t]+((tip|warning|danger)+)(.*?)[\n\r]([\s\S]+?)[\n\r]:::$/

const endReg = /([\s\S]*)[\n\r]:::$/

const TypeMap: Record<TYPE, string> = {
	tip: 'TIP',
	warning: 'WARNING',
	danger: 'WARNING',
}

function getChildrenNode({ type, title, children }: { type: TYPE; title: string; children: NodeWithChildren[] }) {
	return {
		type: 'container',
		children: [
			{
				type: 'container-title',
				children: [
					{
						type: 'text',
						value: title,
						children: [],
					},
				],
				data: {
					hProperties: {
						className: ['remark-container-title'],
					},
				},
			},
			{
				type: 'container-content',
				children,
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
	}
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
						let firstChildValue = item.children[0].value as string
						let match = firstChildValue.match(reg)
						if (match) {
							const type = match[1] as TYPE
							const title = match[2] === '' ? TypeMap[type] : match[2].trim().toUpperCase()

							//结束标签在子级里带 \r\n:::
							let lastChildValue = item.children[item.children.length - 1].value as string
							let prevMatch = lastChildValue.match(endReg)
							if (prevMatch) {
								//移除前后的 :::
								item.children[item.children.length - 1].value = prevMatch[1].trim()
								item.children[0].value = (item.children[0].value as string).replace(reg, '').trim()

								node.children.splice(i, 1, getChildrenNode({ type, title, children: item.children }))
							} else {
								let firstFinalVal = firstChildValue.replace(reg, '').trim()
								let canDelFirst = true
								if (item.children.length > 1) {
									if (firstFinalVal === '') {
										item.children.shift()
									}
									canDelFirst = false
								} else {
									if (firstFinalVal !== '') {
										canDelFirst = false
									}
								}

								for (let index = i + 1; index < node.children.length; index++) {
									const element = node.children[index]
									if (element.type === 'paragraph' && element.children && element.children[0]) {
										let firstVal = element.children[0].value as string
										let lastVal = element.children[element.children.length - 1].value as string

										if (firstVal.match(reg)) {
											break
										}
										//结束标签在父级里带 \r\n::: 结束标签直接父级里 startsWith :::
										if (lastVal.match(endReg) || lastVal === ':::') {
											//移除 \r\n:::
											if (lastVal === ':::') {
												element.children[element.children.length - 1].value = ''
											} else {
												element.children[element.children.length - 1].value = lastVal
													.match(endReg)![1]
													.trim()
											}
											let lastFinalVal = element.children[element.children.length - 1].value
											let canDelEnd = true
											if (element.children.length > 1) {
												if (lastFinalVal === '') {
													element.children.unshift()
												}
												canDelEnd = false
											} else {
												if (lastFinalVal !== '') {
													canDelEnd = false
												}
											}

											let _children = node.children.slice(
												canDelFirst ? i + 1 : i,
												canDelEnd ? index : index + 1
											)

											node.children.splice(
												i,
												index - i + 1,
												getChildrenNode({
													type,
													title,
													children: _children,
												})
											)

											item.children[0].value = (item.children[0].value as string)
												.replace(reg, '')
												.trim()
											break
										}
									}
								}
							}
						}
					}
					i = i + 1
				}
			}
		})
	}
}
