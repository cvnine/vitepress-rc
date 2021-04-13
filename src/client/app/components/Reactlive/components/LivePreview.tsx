import React from 'react'
import LiveContext from './LiveContext'

interface ILivePreview {
	Component: React.ComponentType
}

export default function LivePreview({ Component, ...rest }: ILivePreview) {
	return (
		<Component {...rest}>
			<LiveContext.Consumer>
				{({ shadowRoot }) => (
					<div
						ref={(host) => {
							if (!shadowRoot || shadowRoot.current) return
							const root = host!.attachShadow({ mode: 'open' })
							const span = document.createElement('span')

							const style = document.createElement('style')
							style.textContent = `
								span {
									display: block;
									width:100%;
									height:20px;
									background: linear-gradient(90deg,hsla(0,0%,74.5%,.2) 25%,hsla(0,0%,50.6%,.24) 37%,hsla(0,0%,74.5%,.2) 63%);
									background-size: 400% 100%;
									-webkit-animation: ant-skeleton-loading 1.4s ease infinite;
									animation: skeleton-loading 4s ease infinite;
								}
								@keyframes skeleton-loading{
									0%{
										background-position:100% 50%;
										width: 60%;
									}
									50%{
										background-position:50% 50%;
										width: 100%;
									}
									100% {
										background-position:0 50%;
										width: 60%;
									}
								}
							`

							root.appendChild(style)
							root.appendChild(span)
							shadowRoot.current = root
						}}
					></div>
				)}
			</LiveContext.Consumer>
		</Component>
	)
}

LivePreview.defaultProps = {
	Component: 'div',
}
