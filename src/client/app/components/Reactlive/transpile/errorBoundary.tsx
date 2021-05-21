import { getReact, getReactDom, getStyleSheetManager } from './render'
import React from 'react'

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
	const [React_P, ReactDom_P, StyleSheetManager] = await Promise.all([
		getReact(local),
		getReactDom(local),
		getStyleSheetManager(local),
	])

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

			let _CreatePortal = ReactDom_P.createPortal

			ReactDom_P.createPortal = function (children: any, container, key) {
				setTimeout(() => {
					if (children._owner) {
						let parent = children._owner.return
						while (parent) {
							if (parent.return === null) {
								break
							}
							parent = parent.return
						}
						if (parent.stateNode && parent.stateNode.containerInfo === reactRenderDom) {
							let containerParent = container.parentNode
							let needInsert = true
							while (containerParent && containerParent !== document.querySelector('body')) {
								if (containerParent === reactRenderDom) {
									needInsert = false
									break
								}
								containerParent = containerParent.parentNode
							}
							if (needInsert) {
								shadowRoot.current?.appendChild(container)
							}
						}
					}
				})
				return _CreatePortal(children, container, key)
			}

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
