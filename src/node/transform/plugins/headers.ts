import { Heading } from 'mdast'
import visit from 'unist-util-visit'
import find from 'unist-util-find'
import { IPluginTransformer } from '../index'
import { Node } from 'unist'

interface PluginProps {
	id: string
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'heading', function visitor(node: Heading & Node) {
			const textNode = find(node, { type: 'text' })

			const headerId = (node.data && (node.data.id as string)) || ''

			;(vfile.data.headers || (vfile.data.headers = [])).push({
				level: node.depth,
				title: (textNode?.value as string) ?? '',
				slug: headerId,
			})

			if (headerId) {
				node.children.unshift({
					type: 'link',
					url: `#${headerId}`,
					data: {
						hProperties: {
							ariaHidden: 'true',
							class: 'header-anchor-a',
						},
					},
					children: [],
				})
			}
		})
	}
}
