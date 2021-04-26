import visit from 'unist-util-visit'
import type { IPluginTransformer } from '../index'

interface PluginProps {
	id: string
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], function visitor(node) {
			console.log('node :>> ', node)
		})
	}
}
