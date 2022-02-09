import visit from 'unist-util-visit'
import type { IPluginTransformer, VFileData } from '../index'
import type { YAML } from 'mdast'

export default function plugin(): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'yaml', function visitor(node: any) {
			if (node.data && node.data.parsedValue) {
				vfile.data.frontmatter = node.data.parsedValue as VFileData['frontmatter']
			}
		})
	}
}
