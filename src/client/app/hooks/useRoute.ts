import { PageData, Route } from '@types'
import { ComponentType, useEffect, useRef, useState } from 'react'
import { inBrowser } from 'vitepress-rc'

export interface Router {
	route: Route
	go: (href?: string) => Promise<void>
}

const fakeHost = `http://a.com`

const getDefaultRoute: Route = {
	path: '/',
	component: null,
	// this will be set upon initial page load, which is before
	// the app is mounted, so it's guaranteed to be available in
	// components
	data: null as any,
}

interface PageModule {
	__pageData: string
	default: ComponentType<any>
}

export function useRoute(fallbackComponent?: ComponentType<any>, ssrHref?: string) {
	const [route, setRoute] = useState(getDefaultRoute)

	const latestPendingPathRef = useRef<string | null>(null)

	const isInitialPageLoad = useRef<boolean>(inBrowser)
	const initialPath = useRef<string>('')

	useEffect(() => {
		function go(href: string = inBrowser ? window.location.href : ssrHref ? ssrHref : '/') {
			// ensure correct deep link so page refresh lands on correct files.
			const url = new URL(href, fakeHost)
			if (!url.pathname.endsWith('/') && !url.pathname.endsWith('.html')) {
				url.pathname += '.html'
				href = url.pathname + url.search + url.hash
			}
			if (inBrowser) {
				// save scroll position before changing url
				window.history.replaceState({ scrollPosition: window.scrollY }, document.title)
				window.history.pushState(null, '', href)
			}
			return loadPage(href)
		}

		async function loadPage(href: string, scrollPosition = 0) {
			const targetLoc = new URL(href, fakeHost)
			const pendingPath = (latestPendingPathRef.current = targetLoc.pathname)
			try {
				let pageFilePath = pathToFile(pendingPath)
				if (isInitialPageLoad) {
					initialPath.current = pageFilePath
				}

				if (isInitialPageLoad || initialPath.current === pageFilePath) {
					// pageFilePath = pageFilePath.replace(/\.js$/, '.lean.js')
				}

				let page = null
				if (inBrowser) {
					isInitialPageLoad.current = false

					page = await import(/* @vite-ignore */ pageFilePath)
				} else {
					page = require(pageFilePath)
				}

				if (latestPendingPathRef.current === pendingPath) {
					latestPendingPathRef.current = null

					const { default: comp, __pageData } = page as PageModule
					if (!comp) {
						throw new Error(`Invalid route component: ${comp}`)
					}

					setRoute({
						path: pendingPath,
						component: comp,
						data: JSON.parse(__pageData),
					})

					if (inBrowser) {
						setTimeout(() => {
							if (targetLoc.hash && !scrollPosition) {
								const target = document.querySelector(decodeURIComponent(targetLoc.hash)) as HTMLElement
								if (target) {
									scrollTo(target, targetLoc.hash)
									return
								}
							}
							window.scrollTo(0, scrollPosition)
						}, 200)
					}
				}
			} catch (err) {
				if (!err.message.match(/fetch/)) {
					console.error(err)
				}
				if (latestPendingPathRef.current === pendingPath) {
					latestPendingPathRef.current = null
					setRoute({
						path: pendingPath,
						component: fallbackComponent ? fallbackComponent : null,
						data: null as any,
					})
				}
			}
		}

		function clickHandler(e: MouseEvent) {
			const link = (e.target as Element).closest('a')
			if (link) {
				const { href, protocol, hostname, pathname, hash, target } = link
				const currentUrl = window.location
				const extMatch = pathname.match(/\.\w+$/)
				// only intercept inbound links
				if (
					!e.ctrlKey &&
					!e.shiftKey &&
					!e.altKey &&
					!e.metaKey &&
					target !== `_blank` &&
					protocol === currentUrl.protocol &&
					hostname === currentUrl.hostname &&
					!(extMatch && extMatch[0] !== '.html')
				) {
					e.preventDefault()
					if (pathname === currentUrl.pathname) {
						// scroll between hash anchors in the same page
						if (hash && hash !== currentUrl.hash) {
							window.history.pushState(null, '', hash)
							// use smooth scroll when clicking on header anchor links
							scrollTo(link, hash, link.classList.contains('header-anchor-a'))
						}
					} else {
						go(href)
					}
				}
			}
		}

		function popStateHandler(e: PopStateEvent) {
			loadPage(window.location.href, (e.state && e.state.scrollPosition) || 0)
		}

		function hashchangeHandler(e: HashChangeEvent) {
			e.preventDefault()
		}

		if (inBrowser) {
			window.addEventListener('click', clickHandler, { capture: true })

			window.addEventListener('popstate', popStateHandler)

			window.addEventListener('hashchange', hashchangeHandler)
		}

		//load页面执行一次，获取数据
		go()

		function shouldHotReload(payload: any): boolean {
			const payloadPath = payload.path.replace(/(\bindex)?\.md$/, '')
			const locationPath = window.location.pathname.replace(/(\bindex)?\.html$/, '')

			return payloadPath === locationPath
		}

		if (import.meta.hot) {
			import.meta.hot!.on('vitepress:pageData', (payload) => {
				if (shouldHotReload(payload)) {
					setRoute((val) => ({ ...val, data: payload.pageData }))
				}
			})
		}

		return () => {
			if (inBrowser) {
				window.removeEventListener('click', clickHandler, { capture: true })

				window.removeEventListener('popstate', popStateHandler)

				window.removeEventListener('hashchange', hashchangeHandler)
			}
		}
	}, [])

	return {
		route,
	}
}

function scrollTo(el: HTMLElement, hash: string, smooth = false) {
	const pageOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--doc-nav-height')) || 0
	const target = el.classList.contains('.header-anchor-a') ? el : document.querySelector(decodeURIComponent(hash))
	if (target) {
		const targetTop = (target as HTMLElement).offsetTop - pageOffset - 15
		// only smooth scroll if distance is smaller than screen height.
		if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
			window.scrollTo(0, targetTop)
		} else {
			window.scrollTo({
				left: 0,
				top: targetTop,
				behavior: 'smooth',
			})
		}
	}
}

export function pathToFile(path: string): string {
	let pagePath = path.replace(/\.html$/, '')
	if (pagePath.endsWith('/')) {
		pagePath += 'index'
	}

	if (import.meta.env.DEV) {
		// always force re-fetch content in dev
		pagePath += `.md?t=${Date.now()}`
	} else {
		// in production, each .md file is built into a .md.js file following
		// the path conversion scheme.
		// /foo/bar.html -> ./foo_bar.md
		if (inBrowser) {
			const base = import.meta.env.BASE_URL
			pagePath = pagePath.slice(base.length).replace(/\//g, '_') + '.md'
			// client production build needs to account for page hash, which is
			// injected directly in the page's html
			const pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()]
			pagePath = `${base}assets/${pagePath}.${pageHash}.js`
		} else {
			// ssr build uses much simpler name mapping
			pagePath = `./${pagePath.slice(1).replace(/\//g, '_')}.md.js`
		}
	}

	return pagePath
}
