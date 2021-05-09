import visit from 'unist-util-visit'
import path from 'path'
import fs from 'fs-extra'
import type { IPluginTransformer } from '../index'
import type { Node } from 'unist'
import type { SiteConfig } from '@vitepress-rc/types'

interface PluginProps {
	id: string
	root: string
	siteData: Pick<SiteConfig, 'siteData'>
}

let imgCache = {}

export default function plugin({ id, root, siteData }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'element', function visitor(node: Node) {
			if (node.tagName === 'img') {
				console.log('id,root,sitData :>> ', id, root, siteData, path)
				if (process.env.NODE_ENV === 'build') {
					const src = node.properties.src

					if (/^https?:/.test(src) || src.startsWith('data:')) {
					} else {
						//TODO md内联的图片相对路径 在build的时候不会处理，只能手动处理，统一复制图片到 assets目录下
						let imgPath = ''
						if (src.startsWith('/')) {
							imgPath = path.join(path.resolve(root), src)
						} else {
							imgPath = path.resolve(id, src)
						}
						if (fs.pathExistsSync(imgPath)) {
							fs.copySync()
						}
					}
				}
			}
		})
	}
}
