import React, { useEffect, useRef, useState } from 'react'
import LiveContext from './LiveContext'
import { renderElementAsync } from '../transpile'

export interface ILiveProvider {
	code: string
	disabled: boolean
	scope: {
		[key: string]: any
	}
	transformCode: (code: string) => string
	children: React.ReactNode
}

export default function LiveProvider({ code: prevCode, disabled, scope, transformCode, children }: ILiveProvider) {
	const [error, setError] = useState<string | null>('')
	const [element, setElement] = useState<React.ComponentType | null>(null)

	const onChange = (editCode: string) => {
		transpile({ code: editCode, scope, transformCode })
	}

	const transpile = ({ code, scope, transformCode }: Pick<ILiveProvider, 'code' | 'scope' | 'transformCode'>) => {
		const input = {
			code: transformCode(code),
			scope,
		}
		const errorCallback = (err: Error) => {
			setError(err.toString())
			setElement(null)
		}
		const renderElement = (element: React.ComponentType) => {
			setElement(() => element)
			setError(null)
		}

		try {
			renderElementAsync(input, renderElement, errorCallback)
		} catch (error) {
			errorCallback(error)
		}
	}

	useEffect(() => {
		transpile({ code: prevCode, scope, transformCode })
	}, [prevCode, scope, transformCode])

	return (
		<LiveContext.Provider
			value={{
				code: prevCode,
				disabled,
				element,
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
	transformCode: (code: string) => code,
}
