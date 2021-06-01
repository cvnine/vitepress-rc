import React, { useEffect, useRef, useState } from 'react'
import LiveContext from './LiveContext'
import { renderElementAsync } from '../transpile'
import { getReactDom } from '../transpile/render'
import { RemoveShadowRootSkeleton } from '../transpile/errorBoundary'

export interface ILiveProvider {
	code: string
	disabled: boolean
	scope: Record<string, any>
	local: boolean
	shadowDom: boolean
	transformCode: (code: string) => string
	children: React.ReactNode
}

export default function LiveProvider({
	code: prevCode,
	local,
	shadowDom,
	scope,
	disabled,
	transformCode,
	children,
}: ILiveProvider) {
	const [error, setError] = useState<string | null>('')
	const shadowRoot = useRef<ShadowRoot | HTMLDivElement | null>(null)

	const onChange = (editCode: string) => {
		transpile({ code: editCode, scope, transformCode })
	}

	const transpile = ({ code, scope, transformCode }: Pick<ILiveProvider, 'code' | 'scope' | 'transformCode'>) => {
		const input = {
			code: transformCode(code),
			scope,
			local,
		}
		const errorCallback = async (err: Error) => {
			setError(err.toString())
			if (shadowRoot.current) {
				const ReactDom_P = await getReactDom(local)
				RemoveShadowRootSkeleton(shadowRoot.current)
				let reactRenderDom = shadowRoot.current.querySelector('.react-render')
				if (reactRenderDom) {
					ReactDom_P.unmountComponentAtNode(reactRenderDom)
				}
				shadowRoot.current.innerHTML = ''
			}
		}
		const renderElement = () => {
			setError(null)
		}

		try {
			renderElementAsync(input, renderElement, errorCallback, shadowRoot, shadowDom)
		} catch (error) {
			errorCallback(error)
		}
	}

	useEffect(() => {
		transpile({ code: prevCode, scope, transformCode })
	}, [prevCode, local ? scope : null, transformCode])

	return (
		<LiveContext.Provider
			value={{
				code: prevCode,
				disabled,
				shadowDom,
				shadowRoot,
				error,
				onChange,
			}}
		>
			{children}
		</LiveContext.Provider>
	)
}

LiveProvider.defaultProps = {
	disabled: false,
	scope: {},
	local: true,
	transformCode: (code: string) => code,
}
