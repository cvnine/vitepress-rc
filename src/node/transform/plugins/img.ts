import visit from 'unist-util-visit'
import path from 'path'
import { createHash } from 'crypto'
import fs from 'fs-extra'
import { cacher } from '../utils/cache'
import type { IPluginTransformer } from '../index'
import type { Node } from 'unist'
import type { Element } from 'hast'
import type { SiteData } from '@vitepress-rc/types'

interface PluginProps {
	id: string
	root: string
	siteData: SiteData
}

function getAssetHashName(imgPath: string) {
	const content = fs.readFileSync(imgPath)
	const hash = createHash('sha256').update(content).digest('hex').slice(0, 8)
	const parse = path.parse(imgPath)
	return `${parse.name}.${hash}${parse.ext}`
}

export default function plugin({ id, root, siteData }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'element', function visitor(node: any) {
			if (node.tagName === 'img') {
				if (process.env.NODE_ENV === 'build') {
					const src = node.properties!.src as string
					if (/^https?:/.test(src) || src.startsWith('data:')) {
					} else {
						//md内联的图片路径 在build的时候不会处理，只能手动处理，统一复制图片到 assets目录下
						let imgPath = ''
						if (path.isAbsolute(src)) {
							imgPath = path.join(path.resolve(root), src)
						} else {
							imgPath = path.resolve(path.parse(id).dir, src)
						}
						if (fs.pathExistsSync(imgPath)) {
							let imgCacher = cacher.getImgCache(imgPath)
							if (imgCacher) {
								node.properties!.src = `${siteData.base}assets/${imgCacher}`
							} else {
								let hashName = getAssetHashName(imgPath)
								node.properties!.src = `${siteData.base}assets/${hashName}`
								cacher.setImgCache(imgPath, hashName)
							}
						}
					}
				}
			}
		})
	}
}
