import React from 'react'
import ReactDom from 'react-dom'

const fakeHost = `https://a.com`

export async function getReact(local = true): Promise<typeof React> {
	if (local) {
		return React
	} else {
		const url_react = new URL('//jspm.dev/react', fakeHost).href
		const { default: ReactFetch } = await import(/* @vite-ignore */ url_react)
		return ReactFetch
	}
}

export async function getReactDom(local = true): Promise<typeof ReactDom> {
	if (local) {
		return ReactDom
	} else {
		const url_react_dom = new URL('//jspm.dev/react-dom', fakeHost).href
		const { default: ReactDomFetch } = await import(/* @vite-ignore */ url_react_dom)
		return ReactDomFetch
	}
}