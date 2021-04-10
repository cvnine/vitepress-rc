import { IPluginTransformer } from '../index'
import visit from 'unist-util-visit'

interface PluginProps {
	id: string
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'root', function visitor(node) {
			console.log('node :>> ', node)
		})
	}
}
