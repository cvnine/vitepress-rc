import React from 'react'
import LiveContext from './LiveContext'

type ILiveError = {
	[key: string]: any
}

export default function LiveError(props: ILiveError) {
	return <LiveContext.Consumer>{({ error }) => (error ? <pre {...props}>{error}</pre> : null)}</LiveContext.Consumer>
}
