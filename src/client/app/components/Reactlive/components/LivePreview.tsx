import React from 'react'
import LiveContext from './LiveContext'

interface ILivePreview {
	Component: React.ComponentType
}

export default function LivePreview({ Component, ...rest }: ILivePreview) {
	return (
		<Component {...rest}>
			<LiveContext.Consumer>{({ element: Element }) => Element}</LiveContext.Consumer>
		</Component>
	)
}

LivePreview.defaultProps = {
	Component: 'div',
}
