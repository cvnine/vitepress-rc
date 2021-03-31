import { HeadConfig, Route } from '@types'
import { inBrowser } from 'vitepress-rc'
import { useEffect, useRef } from 'react'
import { useSideData } from './useSideData'

let isFirstUpdate = true

const updateHeadTags = (newTags: HeadConfig[]) => {
	if (import.meta.env.PROD && isFirstUpdate) {
		// in production, the initial meta tags are already pre-rendered so we
		// skip the first update.
		isFirstUpdate = false
		return
	}
	const metaTags: HTMLElement[] = Array.from(document.querySelectorAll('meta'))
	metaTags.forEach((el) => document.head.removeChild(el))
	metaTags.length = 0
	if (newTags && newTags.length) {
		newTags.forEach((headConfig) => {
			const el = createHeadElement(headConfig)
			document.head.appendChild(el)
			metaTags.push(el)
		})
	}
}

export function useHtmlHead(route: Route) {
	const siteData = useSideData()

	useEffect(() => {
		if (!inBrowser) return

		const pageData = route.data
		const pageTitle = pageData && pageData.title
		const pageDescription = pageData && pageData.description
		const frontmatterHead = pageData && pageData.frontmatter.head
		document.title = (pageTitle ? pageTitle + ` | ` : ``) + siteData.title
		updateHeadTags([
			['meta', { charset: 'utf-8' }],
			[
				'meta',
				{
					name: 'viewport',
					content: 'width=device-width,initial-scale=1',
				},
			],
			[
				'meta',
				{
					name: 'description',
					content: pageDescription || siteData.description,
				},
			],
			...siteData.head,
			...((frontmatterHead && filterOutHeadDescription(frontmatterHead)) || []),
		])
	}, [route.data, siteData])
}

function createHeadElement([tag, attrs, innerHTML]: HeadConfig) {
	const el = document.createElement(tag)
	for (const key in attrs) {
		el.setAttribute(key, attrs[key])
	}
	if (innerHTML) {
		el.innerHTML = innerHTML
	}
	return el
}

function isMetaDescription(headConfig: HeadConfig) {
	return headConfig[0] === 'meta' && headConfig[1] && headConfig[1].name === 'description'
}

function filterOutHeadDescription(head: HeadConfig[]) {
	return head.filter((h) => !isMetaDescription(h))
}
