import React from 'react'
import styled, { keyframes } from 'styled-components'
import LiveContext from './LiveContext'

const loading = keyframes`
 	${'0%'} {
		background-position:100% 50%;
		width: 60%;
	}
	${'50%'}{
		background-position:50% 50%;
		width: 100%;
	}
	${'100%'} {
		background-position:0 50%;
		width: 60%;
	}
`

const Span = styled.span`
	display: block;
	width: 100%;
	height: 20px;
	background: linear-gradient(
		90deg,
		hsla(0, 0%, 74.5%, 0.2) 25%,
		hsla(0, 0%, 50.6%, 0.24) 37%,
		hsla(0, 0%, 74.5%, 0.2) 63%
	);
	background-size: 400% 100%;
	animation: ${loading} 4s ease infinite;
`

interface ILivePreview {
	Component: React.ComponentType
}

export default function LivePreview({ Component, ...rest }: ILivePreview) {
	return (
		<Component {...rest}>
			<LiveContext.Consumer>
				{({ shadowDom, shadowRoot }) =>
					shadowDom ? (
						<div
							ref={(host) => {
								if (!shadowRoot || shadowRoot.current) return
								const root = host!.attachShadow({ mode: 'open' })
								const span = document.createElement('span')
								span.classList.add('shadow-skeleton')

								const style = document.createElement('style')
								style.setAttribute('data-shadow-skeleton', 'y')
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
					) : (
						<div
							ref={(host) => {
								if (shadowRoot) {
									shadowRoot.current = host
								}
							}}
						>
							<Span className="shadow-skeleton" />
						</div>
					)
				}
			</LiveContext.Consumer>
		</Component>
	)
}

LivePreview.defaultProps = {
	Component: 'div',
}
