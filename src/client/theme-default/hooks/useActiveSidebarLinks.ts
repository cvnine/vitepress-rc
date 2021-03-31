import React, { useEffect, useRef } from 'react'

export function useActiveSidebarLinks() {
	const rootActiveLink = useRef<HTMLAnchorElement | null>(null)
	const activeLink = useRef<HTMLAnchorElement | null>(null)

	function setActiveLink(): void {
		const sidebarLinks = getSidebarLinks()
		const anchors = getAnchors(sidebarLinks)

		for (let i = 0; i < anchors.length; i++) {
			const anchor = anchors[i]
			const nextAnchor = anchors[i + 1]

			const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)

			if (isActive) {
				window.history.replaceState(null, document.title, hash ? hash : ' ')
				activateLink(hash)
				return
			}
		}
	}

	function activateLink(hash: string | null): void {
		deactiveLink(activeLink.current)
		deactiveLink(rootActiveLink.current)

		activeLink.current = document.querySelector(`.sidebar a[href="${hash}"]`)

		if (!activeLink.current) {
			return
		}

		activeLink.current.classList.add('active')

		// also add active class to parent h2 anchors
		const rootLi = activeLink.current.closest('.sidebar-links > ul > li')

		if (rootLi && rootLi !== activeLink.current.parentElement) {
			rootActiveLink.current = rootLi.querySelector('a')
			rootActiveLink.current && rootActiveLink.current.classList.add('active')
		} else {
			rootActiveLink.current = null
		}
	}

	// onUpdated(() => {
	// 	// sidebar update means a route change
	// 	activateLink(decodeURIComponent(window.location.hash))
	// })

	useEffect(() => {
		setActiveLink()

		const onScroll = throttleAndDebounce(setActiveLink, 300)
		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	useUpdate(() => {
		activateLink(decodeURIComponent(window.location.hash))
	})
}

function useUpdate(fn: Function) {
	const firstLoad = useRef(true)
	useEffect(() => {
		if (firstLoad.current) {
			firstLoad.current = false
			return
		}
		fn && fn()
	}, [])
}

function deactiveLink(link: HTMLAnchorElement | null): void {
	link && link.classList.remove('active')
}

function getSidebarLinks(): HTMLAnchorElement[] {
	return [].slice.call(document.querySelectorAll('.sidebar a.sidebar-link-item'))
}

function getAnchors(sidebarLinks: HTMLAnchorElement[]): HTMLAnchorElement[] {
	return [].slice
		.call(document.querySelectorAll('.header-anchor'))
		.filter((anchor: HTMLAnchorElement) =>
			sidebarLinks.some((sidebarLink) => sidebarLink.hash === anchor.hash)
		) as HTMLAnchorElement[]
}

function getPageOffset(): number {
	return +getComputedStyle(document.documentElement).getPropertyValue('--doc-nav-height') || 0
}

function getAnchorTop(anchor: HTMLAnchorElement): number {
	const pageOffset = getPageOffset()

	return anchor.parentElement!.offsetTop - pageOffset - 15
}

function isAnchorActive(
	index: number,
	anchor: HTMLAnchorElement,
	nextAnchor: HTMLAnchorElement
): [boolean, string | null] {
	const scrollTop = window.scrollY

	if (index === 0 && scrollTop === 0) {
		return [true, null]
	}

	if (scrollTop < getAnchorTop(anchor)) {
		return [false, null]
	}

	if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
		return [true, decodeURIComponent(anchor.hash)]
	}

	return [false, null]
}

function throttleAndDebounce(fn: () => void, delay: number): () => void {
	let timeout: number
	let called = false

	return () => {
		if (timeout) {
			window.clearTimeout(timeout)
		}

		if (!called) {
			fn()
			called = true
			window.setTimeout(() => {
				called = false
			}, delay)
		} else {
			timeout = window.setTimeout(fn, delay)
		}
	}
}
