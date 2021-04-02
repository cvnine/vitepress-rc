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

			;(vfile.data.headers || (vfile.data.headers = [])).push({
				level: node.depth,
				title: (textNode?.value as string) ?? '',
				slug: (node.data!.id as string) || '',
			})
		})
	}
}
