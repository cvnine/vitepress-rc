import React, { FC } from 'react'
import styled from 'styled-components'

const Wrap = styled.a`
	font-weight: 500;
	font-size: 20px;
`

interface BaseLinkProps {
	to: string
}

export const BaseLink: FC<BaseLinkProps> = (props) => {
	return <Wrap href={props.to}>{props.children}</Wrap>
}
