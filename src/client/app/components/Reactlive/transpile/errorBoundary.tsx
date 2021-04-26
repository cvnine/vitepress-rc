import { getReact, getReactDom } from './render'
import { StyleSheetManager } from 'styled-components'
import type React from 'react'

export type ErrorCallback = (err: Error) => void

interface IErrorBoundary {
	Element: React.ReactNode
	errorCallback: ErrorCallback
	shadowRoot: React.MutableRefObject<ShadowRoot | null>
	cssText: string | undefined
	local: boolean
}

export function RemoveShadowRootSkeleton(root: ShadowRoot) {
	const span = root.querySelector('.shadow-skeleton')
	if (span) {
		root.removeChild(span)
	}
	const style = root.querySelector('style[data-shadow-skeleton="y"]')
	if (style) {
		root.removeChild(style)
	}
}

const errorBoundary = async ({ Element, errorCallback, shadowRoot, cssText, local }: IErrorBoundary) => {
	const [React_P, ReactDom_P] = await Promise.all([getReact(local), getReactDom(local)])

	class ErrorBoundary extends React_P.Component {
		componentDidCatch(error: Error) {
			errorCallback(error)
		}

		render() {
			return typeof Element === 'function' ? <Element /> : Element
		}
	}
	if (shadowRoot.current) {
		try {
			RemoveShadowRootSkeleton(shadowRoot.current)
			let reactRenderDom = shadowRoot.current.querySelector('.react-render')
			if (reactRenderDom) {
				ReactDom_P.unmountComponentAtNode(reactRenderDom)
			} else {
				reactRenderDom = document.createElement('div')
				reactRenderDom.classList.add('react-render')
				shadowRoot.current.appendChild(reactRenderDom)
			}

			let style = shadowRoot.current.querySelector('style[data-shadow-style="y"]')
			if (style) {
				style.textContent = cssText || ''
			} else {
				style = document.createElement('style')
				style.setAttribute('data-shadow-style', 'y')
				style.textContent = cssText || ''
				shadowRoot.current.appendChild(style)
			}

			let styleContainer = shadowRoot.current.querySelector('div.shadow-sheet') as HTMLElement
			if (styleContainer) {
				shadowRoot.current.removeChild(styleContainer)
			}
			styleContainer = document.createElement('div')
			styleContainer.classList.add('shadow-sheet')
			shadowRoot.current.appendChild(styleContainer)

			ReactDom_P.render(
				<StyleSheetManager target={styleContainer}>
					<ErrorBoundary />
				</StyleSheetManager>,
				reactRenderDom
			)
		} catch (error) {
			errorCallback(error)
		}
	}
}

export default errorBoundary
