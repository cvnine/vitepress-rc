import React from 'react'
import LiveContext from './LiveContext'

interface ILivePreview {
	Component: React.ComponentType
}

class ElementShadow extends HTMLElement {
	connectedCallback() {
		const mountPoint = document.createElement('slot')
		mountPoint.setAttribute('name', 'element-shadow-slot')
		this.attachShadow({ mode: 'open' }).appendChild(mountPoint)
	}
}
customElements.define('element-shadow', ElementShadow)

export default function LivePreview({ Component, ...rest }: ILivePreview) {
	return (
		<Component {...rest}>
			<LiveContext.Consumer>
				{({ domRef }) => (
					<element-shadow>
						<div slot="element-shadow-slot" ref={domRef}></div>
					</element-shadow>
				)}
			</LiveContext.Consumer>
		</Component>
	)
}

LivePreview.defaultProps = {
	Component: 'div',
}
