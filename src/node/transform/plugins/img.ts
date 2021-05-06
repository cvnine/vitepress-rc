import visit from 'unist-util-visit'
import type { IPluginTransformer } from '../index'
import type { Node } from 'unist'
import type { SiteConfig } from '@vitepress-rc/types'

interface PluginProps {
	id: string
	siteData: Pick<SiteConfig, 'siteData'>
}

export default function plugin({ id, siteData }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'element', function visitor(node: Node) {
			if (node.tagName === 'img') {
				if (process.env.NODE_ENV === 'build') {
					//TODO jsx内联的图片相对路径 在build的时候不会处理，只能手动处理，统一复制图片到 assets目录下
				}
			}
		})
	}
}
