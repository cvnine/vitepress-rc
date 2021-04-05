import { IPluginTransformer, VFileData } from '../index'
import visit from 'unist-util-visit'
import { Link } from 'mdast'
import { Node } from 'unist'

interface PluginProps {
	id: string
}

interface IhProperties {
	[key: string]: any
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, ['link', 'linkReference'], function visitor(node: Link & Node) {
			const url = node.url

			let data = node.data || (node.data = {})
			let props = (data.hProperties || (data.hProperties = {})) as IhProperties

			if (url) {
				if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
					props.target = '_blank'
					props.rel = 'noopener noreferrer'
				} else if (!url.startsWith('#') && !url.startsWith('mailto:')) {
					node.url = normalizeHref(node.url)
				}
			}
		})
	}
}

const indexRE = /(^|.*\/)index.md(#?.*)$/i

function normalizeHref(href: string) {
	let url = href

	const indexMatch = url.match(indexRE)
	if (indexMatch) {
		const [, path, hash] = indexMatch
		url = path + hash
	} else {
		let cleanUrl = url.replace(/\#.*$/, '').replace(/\?.*$/, '')
		// .md -> .html
		if (cleanUrl.endsWith('.md')) {
			cleanUrl = cleanUrl.replace(/\.md$/, '.html')
		}
		// ./foo -> ./foo.html
		if (!cleanUrl.endsWith('.html') && !cleanUrl.endsWith('/')) {
			cleanUrl += '.html'
		}
		const parsed = new URL(url, 'http://a.com')
		url = cleanUrl + parsed.search + parsed.hash
	}

	// ensure leading . for relative paths
	if (!url.startsWith('/') && !/^\.\//.test(url)) {
		url = './' + url
	}

	return url
}
