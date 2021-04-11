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
	const _isMounted = useRef(true)

	const onChange = (editCode: string) => {
		transpile({ code: editCode, scope, transformCode })
	}

	const transpile = ({ code, scope, transformCode }: Pick<ILiveProvider, 'code' | 'scope' | 'transformCode'>) => {
		const input = {
			code: transformCode(code),
			scope,
		}
		const errorCallback = (err: Error) => {
			if (_isMounted.current) {
				setError(err.toString())
				setElement(null)
			}
		}
		const renderElement = (element: React.ComponentType) => {
			if (_isMounted.current) {
				setElement(() => element)
			}
		}

		try {
			setElement(null)
			setError(null)
			renderElementAsync(input, renderElement, errorCallback)
		} catch (error) {
			setError(error.toString())
		}
	}

	useEffect(() => {
		transpile({ code: prevCode, scope, transformCode })
		return () => {
			_isMounted.current = false
		}
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
